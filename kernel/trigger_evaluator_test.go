package kernel

import (
	"nofx/market"
	"nofx/store"
	"testing"
)


func TestEvaluateCondition_BasicOperators(t *testing.T) {
	// Mock market data
	data := make(map[string]*market.Data)
	macdData := []float64{0.1, 0.2, -0.1}
	rsiData := []float64{40, 50, 80}

	timeframes := make(map[string]*market.TimeframeSeriesData)
	timeframes["5m"] = &market.TimeframeSeriesData{
		Timeframe:   "5m",
		MACDValues:  macdData,
		RSI14Values: rsiData,
	}

	data["BTCUSDT"] = &market.Data{
		Symbol:        "BTCUSDT",
		TimeframeData: timeframes,
	}

	evaluator := NewTriggerEvaluator(data)

	tests := []struct {
		name      string
		condition store.Condition
		expected  bool
	}{
		{
			name: "Greater than true",
			condition: store.Condition{
				Indicator: "RSI",
				Timeframe: "5m",
				Operator:  ">",
				Value:     70,
			},
			expected: true,
		},
		{
			name: "Less than true",
			condition: store.Condition{
				Indicator: "MACD_HISTOGRAM",
				Timeframe: "5m",
				Operator:  "<",
				Value:     0,
			},
			expected: true,
		},
		{
			name: "Greater than equal false",
			condition: store.Condition{
				Indicator: "RSI",
				Timeframe: "5m",
				Operator:  ">=",
				Value:     90,
			},
			expected: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := evaluator.evaluateCondition(data["BTCUSDT"], tt.condition)
			if err != nil {
				t.Fatalf("Unexpected error: %v", err)
			}
			if result != tt.expected {
				t.Errorf("Expected %v, got %v", tt.expected, result)
			}
		})
	}
}

func TestEvaluateCondition_CrossOperators(t *testing.T) {
	data := make(map[string]*market.Data)

	// MACD crossing above 0
	// previous: -0.1, current: 0.2
	macdData := []float64{-0.5, -0.1, 0.2}

	// EMA crossing
	// EMA9 (mapped to EMA20 conceptually for testing, since EMA9 isn't explicit in struct, let's use EMA20 vs EMA50)
	// EMA20:  9, 10, 12
	// EMA50: 10, 11, 11
	// EMA20 crosses above EMA50
	ema20 := []float64{9, 10, 12}
	ema50 := []float64{10, 11, 11}

	timeframes := make(map[string]*market.TimeframeSeriesData)
	timeframes["15m"] = &market.TimeframeSeriesData{
		Timeframe:   "15m",
		MACDValues:  macdData,
		EMA20Values: ema20,
		EMA50Values: ema50,
	}

	data["ETHUSDT"] = &market.Data{
		Symbol:        "ETHUSDT",
		TimeframeData: timeframes,
	}

	evaluator := NewTriggerEvaluator(data)

	tests := []struct {
		name      string
		condition store.Condition
		expected  bool
	}{
		{
			name: "MACD Cross Above 0",
			condition: store.Condition{
				Indicator: "MACD_HISTOGRAM",
				Timeframe: "15m",
				Operator:  "cross_above",
				Value:     0,
			},
			expected: true,
		},
		{
			name: "EMA20 Cross Above EMA50",
			condition: store.Condition{
				IndicatorA: "EMA20",
				IndicatorB: "EMA50",
				Timeframe:  "15m",
				Operator:   "cross_above",
			},
			expected: true,
		},
		{
			name: "EMA20 Cross Below EMA50 (False)",
			condition: store.Condition{
				IndicatorA: "EMA20",
				IndicatorB: "EMA50",
				Timeframe:  "15m",
				Operator:   "cross_below",
			},
			expected: false, // It crossed above, not below
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := evaluator.evaluateCondition(data["ETHUSDT"], tt.condition)
			if err != nil {
				t.Fatalf("Unexpected error: %v", err)
			}
			if result != tt.expected {
				t.Errorf("Expected %v, got %v", tt.expected, result)
			}
		})
	}
}

func TestEvaluateTrigger_Logic(t *testing.T) {
	data := make(map[string]*market.Data)
	timeframes := make(map[string]*market.TimeframeSeriesData)
	timeframes["1h"] = &market.TimeframeSeriesData{
		Timeframe:   "1h",
		RSI14Values: []float64{50, 60, 85}, // Current RSI is 85
		MACDValues:  []float64{0.1, 0.2, -0.05}, // Current is -0.05
	}
	data["SOLUSDT"] = &market.Data{
		Symbol:        "SOLUSDT",
		TimeframeData: timeframes,
	}

	evaluator := NewTriggerEvaluator(data)

	conditionsAND := []store.Condition{
		{Indicator: "RSI", Timeframe: "1h", Operator: ">=", Value: 80},
		{Indicator: "MACD_HISTOGRAM", Timeframe: "1h", Operator: "<", Value: 0},
	}

	conditionsOR := []store.Condition{
		{Indicator: "RSI", Timeframe: "1h", Operator: ">=", Value: 90}, // False
		{Indicator: "MACD_HISTOGRAM", Timeframe: "1h", Operator: "<", Value: 0}, // True
	}

	resultAND, _ := evaluator.EvaluateTrigger("SOLUSDT", "AND", conditionsAND)
	if !resultAND {
		t.Errorf("Expected AND trigger to be true")
	}

	resultOR, _ := evaluator.EvaluateTrigger("SOLUSDT", "OR", conditionsOR)
	if !resultOR {
		t.Errorf("Expected OR trigger to be true")
	}
}
