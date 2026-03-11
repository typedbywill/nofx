package store

import (
	"encoding/json"
	"fmt"
	"time"

	"gorm.io/gorm"
)

// TriggerStatus represents the current state of a trigger
type TriggerStatus string

const (
	TriggerStatusActive    TriggerStatus = "ACTIVE"
	TriggerStatusExecuted  TriggerStatus = "EXECUTED"
	TriggerStatusCancelled TriggerStatus = "CANCELLED"
)

// TriggerTarget represents what the trigger is targeting
type TriggerTarget string

const (
	TriggerTargetEntry    TriggerTarget = "ENTRY"
	TriggerTargetPosition TriggerTarget = "POSITION"
)

// TraderTrigger represents an AI-generated automatic trading trigger
type TraderTrigger struct {
	ID         int64         `gorm:"primaryKey;autoIncrement" json:"id"`
	TraderID   string        `gorm:"column:trader_id;not null;index:idx_triggers_trader" json:"trader_id"`
	Symbol     string        `gorm:"column:symbol;not null;index:idx_triggers_symbol" json:"symbol"`
	Target     TriggerTarget `gorm:"column:target;not null" json:"target"` // "ENTRY" or "POSITION"
	PositionID *int64        `gorm:"column:position_id;index:idx_triggers_position" json:"position_id,omitempty"` // Nullable, set if target is POSITION
	Name       string        `gorm:"column:name;not null" json:"name"`
	Action     string        `gorm:"column:action;not null" json:"action"` // "open_long", "close_short", etc.
	Logic      string        `gorm:"column:logic;not null" json:"logic"`   // "AND" / "OR"
	Conditions string        `gorm:"column:conditions;type:text" json:"conditions"` // JSON encoded []Condition

	// Open Position Parameters
	SizeUSD    float64       `gorm:"column:size_usd" json:"size_usd,omitempty"`
	Leverage   int           `gorm:"column:leverage" json:"leverage,omitempty"`
	StopLoss   float64       `gorm:"column:stop_loss" json:"stop_loss,omitempty"`
	TakeProfit float64       `gorm:"column:take_profit" json:"take_profit,omitempty"`

	Status     TriggerStatus `gorm:"column:status;default:ACTIVE;index:idx_triggers_status" json:"status"` // "ACTIVE", "EXECUTED", "CANCELLED"
	CreatedAt  int64         `gorm:"column:created_at" json:"created_at"` // Unix milliseconds UTC
	UpdatedAt  int64         `gorm:"column:updated_at" json:"updated_at"` // Unix milliseconds UTC
}

// Condition represents a single indicator evaluation logic
type Condition struct {
	Indicator  string  `json:"indicator,omitempty"`
	IndicatorA string  `json:"indicator_a,omitempty"` // used for cross comparisons
	IndicatorB string  `json:"indicator_b,omitempty"` // used for cross comparisons
	Timeframe  string  `json:"timeframe"`
	Operator   string  `json:"operator"` // ">", "<", ">=", "<=", "==", "!=", "cross_above", "cross_below"
	Value      float64 `json:"value,omitempty"`
}

// TableName returns the table name
func (TraderTrigger) TableName() string {
	return "trader_triggers"
}

// GetConditions parses the JSON conditions back into a struct slice
func (t *TraderTrigger) GetConditions() ([]Condition, error) {
	var conditions []Condition
	if t.Conditions == "" || t.Conditions == "null" {
		return conditions, nil
	}
	err := json.Unmarshal([]byte(t.Conditions), &conditions)
	return conditions, err
}

// SetConditions marshals the struct slice into the JSON string
func (t *TraderTrigger) SetConditions(conditions []Condition) error {
	b, err := json.Marshal(conditions)
	if err != nil {
		return err
	}
	t.Conditions = string(b)
	return nil
}

// TriggerStore provides storage for AI triggers
type TriggerStore struct {
	db *gorm.DB
}

// NewTriggerStore creates a new trigger store
func NewTriggerStore(db *gorm.DB) *TriggerStore {
	return &TriggerStore{db: db}
}

// initTables initializes the trader_triggers table
func (s *TriggerStore) initTables() error {
	if err := s.db.AutoMigrate(&TraderTrigger{}); err != nil {
		return fmt.Errorf("failed to migrate trader_triggers table: %w", err)
	}
	return nil
}

// Create creates a new trigger
func (s *TriggerStore) Create(trigger *TraderTrigger) error {
	now := time.Now().UTC().UnixMilli()
	trigger.CreatedAt = now
	trigger.UpdatedAt = now
	if trigger.Status == "" {
		trigger.Status = TriggerStatusActive
	}
	return s.db.Create(trigger).Error
}

// GetActiveTriggers returns all active triggers for a specific trader
func (s *TriggerStore) GetActiveTriggers(traderID string) ([]TraderTrigger, error) {
	var triggers []TraderTrigger
	err := s.db.Where("trader_id = ? AND status = ?", traderID, TriggerStatusActive).Find(&triggers).Error
	return triggers, err
}

// GetActivePositionTriggers returns all active triggers associated with a specific position
func (s *TriggerStore) GetActivePositionTriggers(positionID int64) ([]TraderTrigger, error) {
	var triggers []TraderTrigger
	err := s.db.Where("position_id = ? AND status = ?", positionID, TriggerStatusActive).Find(&triggers).Error
	return triggers, err
}

// GetActiveEntryTriggers returns all active entry triggers for a trader
func (s *TriggerStore) GetActiveEntryTriggers(traderID string) ([]TraderTrigger, error) {
	var triggers []TraderTrigger
	err := s.db.Where("trader_id = ? AND target = ? AND status = ?", traderID, TriggerTargetEntry, TriggerStatusActive).Find(&triggers).Error
	return triggers, err
}

// MarkExecuted marks a trigger as executed
func (s *TriggerStore) MarkExecuted(triggerID int64) error {
	now := time.Now().UTC().UnixMilli()
	return s.db.Model(&TraderTrigger{}).Where("id = ?", triggerID).Updates(map[string]interface{}{
		"status":     TriggerStatusExecuted,
		"updated_at": now,
	}).Error
}

// CancelAllForPosition cancels all active triggers associated with a position
func (s *TriggerStore) CancelAllForPosition(positionID int64) error {
	now := time.Now().UTC().UnixMilli()
	return s.db.Model(&TraderTrigger{}).
		Where("position_id = ? AND status = ?", positionID, TriggerStatusActive).
		Updates(map[string]interface{}{
			"status":     TriggerStatusCancelled,
			"updated_at": now,
		}).Error
}

// CancelAllForTrader cancels all active triggers for a trader
func (s *TriggerStore) CancelAllForTrader(traderID string) error {
	now := time.Now().UTC().UnixMilli()
	return s.db.Model(&TraderTrigger{}).
		Where("trader_id = ? AND status = ?", traderID, TriggerStatusActive).
		Updates(map[string]interface{}{
			"status":     TriggerStatusCancelled,
			"updated_at": now,
		}).Error
}

// CancelTrigger cancels a single trigger by ID
func (s *TriggerStore) CancelTrigger(triggerID int64) error {
	now := time.Now().UTC().UnixMilli()
	return s.db.Model(&TraderTrigger{}).Where("id = ?", triggerID).Updates(map[string]interface{}{
		"status":     TriggerStatusCancelled,
		"updated_at": now,
	}).Error
}

// GetTriggersByStatus returns triggers for a trader filtered by status
func (s *TriggerStore) GetTriggersByStatus(traderID string, status TriggerStatus) ([]TraderTrigger, error) {
	var triggers []TraderTrigger
	err := s.db.Where("trader_id = ? AND status = ?", traderID, status).Order("created_at DESC").Find(&triggers).Error
	return triggers, err
}

// GetByID returns a single trigger by its ID
func (s *TriggerStore) GetByID(triggerID int64) (*TraderTrigger, error) {
	var trigger TraderTrigger
	err := s.db.First(&trigger, triggerID).Error
	if err != nil {
		return nil, err
	}
	return &trigger, nil
}
