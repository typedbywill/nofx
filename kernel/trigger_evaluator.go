package kernel

import (
	"fmt"
	"strings"

	"nofx/market"
	"nofx/store"
)

// TriggerEvaluator is responsible for evaluating indicator conditions
type TriggerEvaluator struct {
	marketData map[string]*market.Data // symbol -> market data
}

// NewTriggerEvaluator creates a new evaluator
func NewTriggerEvaluator(data map[string]*market.Data) *TriggerEvaluator {
	return &TriggerEvaluator{
		marketData: data,
	}
}

// EvaluateTrigger checks if a given trigger's conditions are met for a specific symbol
// timeframe param determines which klines to use (default: lowest available)
func (e *TriggerEvaluator) EvaluateTrigger(symbol string, logic string, conditions []store.Condition) (bool, error) {
	if len(conditions) == 0 {
		return false, nil
	}

	data, ok := e.marketData[symbol]
	if !ok || data == nil {
		return false, fmt.Errorf("no market data available for %s", symbol)
	}

	// Logic parsing: AND / OR
	logic = strings.ToUpper(logic)
	if logic != "AND" && logic != "OR" {
		logic = "AND" // Default to AND
	}

	var hasTrue, hasFalse bool

	for _, cond := range conditions {
		met, err := e.evaluateCondition(data, cond)
		if err != nil {
			// In AND logic, a failed fetch means condition not met
			// we can either return error or treat as false. Treating as false is safer for continuous operation.
			hasFalse = true
			continue 
		}

		if met {
			hasTrue = true
		} else {
			hasFalse = true
		}

		// Early exit optimizations
		if logic == "AND" && !met {
			return false, nil
		}
		if logic == "OR" && met {
			return true, nil
		}
	}

	if logic == "AND" {
		// All conditions must be true
		return !hasFalse, nil
	}
	
	// OR logic
	return hasTrue, nil
}

// evaluateCondition evaluates a single condition
func (e *TriggerEvaluator) evaluateCondition(data *market.Data, cond store.Condition) (bool, error) {
	// 1. Resolve timeframe. If specified, find it in the multi-timeframe structures
	// Note: market.Data has `TimeframeData` which is map[string]*TimeframeSeriesData where key is timeframe
	tfData, ok := data.TimeframeData[cond.Timeframe]
	if !ok {
		// Fallback to default/base TimeframeData if not found in multi-timeframe map
		// But in Nofx architecture, if multi_tf is enabled, it should be in the map
		return false, fmt.Errorf("timeframe %s not available in market data", cond.Timeframe)
	}

	// For cross comparisons we need previous values. Let's extract values
	val1, prev1, err := extractIndicatorValue(tfData, cond.Indicator, cond.IndicatorA)
	if err != nil {
		return false, fmt.Errorf("failed to extract indicator: %w", err)
	}

	var val2, prev2 float64
	// If it's a comparison against another indicator (IndicatorB)
	if cond.IndicatorB != "" {
		val2, prev2, err = extractIndicatorValue(tfData, "", cond.IndicatorB)
		if err != nil {
			return false, fmt.Errorf("failed to extract indicator B: %w", err)
		}
	} else {
		// Comparison against a static value
		val2 = cond.Value
		prev2 = cond.Value 
	}

	// 2. Apply Operator
	switch cond.Operator {
	case ">":
		return val1 > val2, nil
	case "<":
		return val1 < val2, nil
	case ">=":
		return val1 >= val2, nil
	case "<=":
		return val1 <= val2, nil
	case "==":
		return val1 == val2, nil
	case "!=":
		return val1 != val2, nil
	case "cross_above":
		return prev1 <= prev2 && val1 > val2, nil
	case "cross_below":
		return prev1 >= prev2 && val1 < val2, nil
	default:
		return false, fmt.Errorf("unsupported operator: %s", cond.Operator)
	}
}

// extractIndicatorValue extracts current and previous values of an indicator
func extractIndicatorValue(tfData *market.TimeframeSeriesData, indicator string, indicatorA string) (current float64, prev float64, err error) {
	target := indicator
	if indicatorA != "" {
		target = indicatorA
	}
	
	target = strings.ToUpper(target)

	// Since we need to get current and previous, we look at the last elements of the slices
	extractFromSlice := func(slice []float64) (float64, float64, error) {
		n := len(slice)
		if n == 0 {
			return 0, 0, fmt.Errorf("no data")
		}
		if n == 1 {
			return slice[0], slice[0], nil
		}
		return slice[n-1], slice[n-2], nil
	}

	switch {
	case target == "RSI" || target == "RSI14":
		if tfData.RSI14Values == nil || len(tfData.RSI14Values) == 0 {
			return 0, 0, fmt.Errorf("RSI14 not populated")
		}
		return extractFromSlice(tfData.RSI14Values)

	case target == "RSI7":
		if tfData.RSI7Values == nil || len(tfData.RSI7Values) == 0 {
			return 0, 0, fmt.Errorf("RSI7 not populated")
		}
		return extractFromSlice(tfData.RSI7Values)

	case target == "EMA20":
		if tfData.EMA20Values == nil || len(tfData.EMA20Values) == 0 {
			return 0, 0, fmt.Errorf("EMA20 not populated")
		}
		return extractFromSlice(tfData.EMA20Values)
		
	case target == "EMA50":
		if tfData.EMA50Values == nil || len(tfData.EMA50Values) == 0 {
			return 0, 0, fmt.Errorf("EMA50 not populated")
		}
		return extractFromSlice(tfData.EMA50Values)

	case target == "MACD" || target == "MACD_HISTOGRAM":
		if tfData.MACDValues == nil || len(tfData.MACDValues) == 0 {
			return 0, 0, fmt.Errorf("MACD not populated")
		}
		return extractFromSlice(tfData.MACDValues)

	case target == "BOLL_UPPER":
		if tfData.BOLLUpper == nil || len(tfData.BOLLUpper) == 0 {
			return 0, 0, fmt.Errorf("BOLLUpper not populated")
		}
		return extractFromSlice(tfData.BOLLUpper)

	case target == "BOLL_LOWER":
		if tfData.BOLLLower == nil || len(tfData.BOLLLower) == 0 {
			return 0, 0, fmt.Errorf("BOLLLower not populated")
		}
		return extractFromSlice(tfData.BOLLLower)

	case target == "BOLL_MID" || target == "BOLL_MIDDLE":
		if tfData.BOLLMiddle == nil || len(tfData.BOLLMiddle) == 0 {
			return 0, 0, fmt.Errorf("BOLLMiddle not populated")
		}
		return extractFromSlice(tfData.BOLLMiddle)
		
	case target == "PRICE", target == "CLOSE":
		// Fallback for price. 
		if tfData.Klines == nil || len(tfData.Klines) == 0 {
			return 0, 0, fmt.Errorf("Kline data not populated")
		}
		n := len(tfData.Klines)
		if n == 1 {
			return tfData.Klines[0].Close, tfData.Klines[0].Close, nil
		}
		return tfData.Klines[n-1].Close, tfData.Klines[n-2].Close, nil

	default:
		return 0, 0, fmt.Errorf("unsupported indicator: %s", target)
	}
}
