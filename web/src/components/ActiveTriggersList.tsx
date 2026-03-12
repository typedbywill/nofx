import { useEffect, useState, useCallback } from 'react'
import { api } from '../lib/api'
import { notify } from '../lib/notify'
import { Crosshair, ShieldAlert, Loader2, X, RefreshCw } from 'lucide-react'
import type { ActiveTrigger } from '../types'
import type { Language } from '../i18n/translations'

interface ActiveTriggersListProps {
  traderId: string
  language: Language
}

export function ActiveTriggersList({
  traderId,
  language,
}: ActiveTriggersListProps) {
  const [triggers, setTriggers] = useState<ActiveTrigger[]>([])
  const [loading, setLoading] = useState(true)
  const [cancelling, setCancelling] = useState<number | null>(null)

  const fetchTriggers = useCallback(async () => {
    try {
      const data = await api.getTriggers(traderId)
      setTriggers(data)
    } catch {
      // Silently fail — triggers might not exist yet
    } finally {
      setLoading(false)
    }
  }, [traderId])

  useEffect(() => {
    fetchTriggers()
    const interval = setInterval(fetchTriggers, 15000) // Refresh every 15s
    return () => clearInterval(interval)
  }, [fetchTriggers])

  const handleCancel = async (triggerId: number) => {
    setCancelling(triggerId)
    try {
      await api.cancelTrigger(triggerId)
      notify.success(
        language === 'pt'
          ? 'Trigger cancelado com sucesso'
          : 'Trigger cancelled'
      )
      setTriggers((prev) => prev.filter((t) => t.id !== triggerId))
    } catch {
      notify.error(
        language === 'pt'
          ? 'Erro ao cancelar trigger'
          : 'Failed to cancel trigger'
      )
    } finally {
      setCancelling(null)
    }
  }

  const formatTime = (unixMs: number) => {
    const d = new Date(unixMs)
    return d.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const parseConditions = (conditionsStr: string) => {
    try {
      return JSON.parse(conditionsStr)
    } catch {
      return null
    }
  }

  if (loading) {
    return (
      <div
        className="nofx-glass p-6 animate-slide-in relative overflow-hidden"
        style={{ animationDelay: '0.18s' }}
      >
        <div className="flex items-center gap-2 text-nofx-text-muted">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">
            {language === 'pt'
              ? 'Carregando triggers...'
              : 'Loading triggers...'}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="nofx-glass p-6 animate-slide-in relative overflow-hidden group"
      style={{ animationDelay: '0.18s' }}
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="w-24 h-24 rounded-full bg-amber-500 blur-3xl" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <h2 className="text-lg font-bold flex items-center gap-2 text-nofx-text-main uppercase tracking-wide">
          <span className="text-amber-500">⚡</span>
          {language === 'pt'
            ? 'Triggers Dinâmicos da IA'
            : 'AI Dynamic Triggers'}
        </h2>
        <div className="flex items-center gap-2">
          {triggers.length > 0 && (
            <div className="text-xs px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono shadow-[0_0_10px_rgba(245,158,11,0.1)]">
              {triggers.length} {language === 'pt' ? 'ativos' : 'active'}
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setLoading(true)
              fetchTriggers()
            }}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-nofx-text-muted hover:text-nofx-text-main"
            title={language === 'pt' ? 'Atualizar' : 'Refresh'}
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Triggers list */}
      {triggers.length > 0 ? (
        <div className="space-y-3">
          {triggers.map((trigger) => {
            const conditions = parseConditions(trigger.conditions)
            const isEntry = trigger.target === 'ENTRY'

            return (
              <div
                key={trigger.id}
                className="relative rounded-xl border border-white/5 bg-black/20 p-4 hover:bg-white/5 transition-all group/trigger"
              >
                {/* Top row: symbol + action badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {isEntry ? (
                      <Crosshair className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                    <span className="font-mono font-bold text-sm text-nofx-text-main">
                      {trigger.symbol}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        isEntry
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}
                    >
                      {trigger.action}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCancel(trigger.id)}
                    disabled={cancelling === trigger.id}
                    className="opacity-0 group-hover/trigger:opacity-100 transition-opacity p-1 rounded hover:bg-rose-500/20 text-nofx-text-muted hover:text-rose-400"
                    title={
                      language === 'pt' ? 'Cancelar trigger' : 'Cancel trigger'
                    }
                  >
                    {cancelling === trigger.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <X className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Trigger name */}
                <div className="text-xs text-nofx-text-muted mb-2 font-medium">
                  {trigger.name}
                </div>

                {/* Conditions grid */}
                {conditions && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] font-mono mb-2">
                    {conditions.map(
                      (
                        cond: {
                          indicator: string
                          operator: string
                          value: number | string
                        },
                        idx: number
                      ) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1 text-nofx-text-muted"
                        >
                          <span className="text-nofx-text-main opacity-70">
                            {cond.indicator}
                          </span>
                          <span className="text-amber-400 opacity-60">
                            {cond.operator}
                          </span>
                          <span className="text-nofx-text-main">
                            {cond.value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Meta info */}
                <div className="flex items-center gap-3 text-[10px] text-nofx-text-muted opacity-60">
                  {trigger.size_usd && (
                    <span>Size: ${trigger.size_usd.toFixed(0)}</span>
                  )}
                  {trigger.leverage && <span>{trigger.leverage}x</span>}
                  {trigger.stop_loss && <span>SL: {trigger.stop_loss}%</span>}
                  {trigger.take_profit && (
                    <span>TP: {trigger.take_profit}%</span>
                  )}
                  <span className="ml-auto">
                    {formatTime(trigger.created_at)}
                  </span>
                </div>

                {/* Logic badge */}
                <div className="mt-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-nofx-text-muted font-mono">
                    {trigger.logic}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-10 text-nofx-text-muted opacity-60">
          <div className="text-4xl mb-3 opacity-40 grayscale">⚡</div>
          <div className="text-sm font-semibold mb-1">
            {language === 'pt' ? 'Nenhum trigger ativo' : 'No active triggers'}
          </div>
          <div className="text-xs">
            {language === 'pt'
              ? 'A IA criará triggers dinamicamente durante a análise'
              : 'AI will create triggers dynamically during analysis'}
          </div>
        </div>
      )}
    </div>
  )
}
