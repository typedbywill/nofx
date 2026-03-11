package api

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"nofx/store"
)

// handleGetTriggers handles GET /api/triggers?trader_id=xxx&status=ACTIVE
func (s *Server) handleGetTriggers(c *gin.Context) {
	userID := c.GetString("user_id")
	traderID := c.Query("trader_id")
	if traderID == "" {
		SafeBadRequest(c, "trader_id is required")
		return
	}

	// Verify ownership
	trader, err := s.store.Trader().GetByID(traderID)
	if err != nil || trader == nil || trader.UserID != userID {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	statusFilter := c.Query("status")
	var triggers []store.TraderTrigger

	if statusFilter != "" {
		triggers, err = s.store.Trigger().GetTriggersByStatus(traderID, store.TriggerStatus(statusFilter))
	} else {
		// Default: return all ACTIVE triggers
		triggers, err = s.store.Trigger().GetActiveTriggers(traderID)
	}

	if err != nil {
		SafeInternalError(c, "Fetch triggers", err)
		return
	}

	if triggers == nil {
		triggers = []store.TraderTrigger{}
	}

	c.JSON(http.StatusOK, triggers)
}

// handleCancelTrigger handles POST /api/triggers/:id/cancel
func (s *Server) handleCancelTrigger(c *gin.Context) {
	userID := c.GetString("user_id")

	triggerIDStr := c.Param("id")
	triggerID, err := strconv.ParseInt(triggerIDStr, 10, 64)
	if err != nil {
		SafeBadRequest(c, "Invalid trigger ID")
		return
	}

	// Fetch trigger
	trigger, err := s.store.Trigger().GetByID(triggerID)
	if err != nil || trigger == nil {
		SafeNotFound(c, "Trigger")
		return
	}

	// Verify ownership via trader
	trader, err := s.store.Trader().GetByID(trigger.TraderID)
	if err != nil || trader == nil || trader.UserID != userID {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	if trigger.Status != store.TriggerStatusActive {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Trigger is not active"})
		return
	}

	if err := s.store.Trigger().CancelTrigger(triggerID); err != nil {
		SafeInternalError(c, "Cancel trigger", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Trigger cancelled successfully"})
}
