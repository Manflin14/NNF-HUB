import type { LevelProgression } from '@/types'
import { ATTR_LABELS } from '@/types'

interface ProgressionTableProps {
  progression: LevelProgression
}

export default function ProgressionTable({ progression }: ProgressionTableProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-4">
        <span>Nível máximo: <span className="font-bold text-[var(--text-primary)]">{progression.maxLevel}</span></span>
        <span>Total de pontos: <span className="font-bold text-[var(--accent)]">{progression.totalPoints}</span></span>
      </div>

      {progression.tiers.map((tier, i) => (
        <div
          key={tier.fromLevel}
          className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[10px] font-bold text-[var(--accent)]">
                {i + 1}
              </span>
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)]">{tier.label}</span>
                <span className="ml-2 text-[10px] text-[var(--text-secondary)]">
                  Nível {tier.fromLevel}–{tier.toLevel}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-[var(--accent)]">+{tier.pointsGained} pts</span>
          </div>

          <div className="p-4 space-y-3">
            {/* Focus */}
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--accent)]/40 pl-3">
              {tier.focus}
            </p>

            {/* Point allocation */}
            {tier.priorities.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                  Distribuição de Pontos
                </p>
                <div className="space-y-1.5">
                  {tier.priorities.map(({ attr, points }) => {
                    const pct = Math.round((points / tier.pointsGained) * 100)
                    return (
                      <div key={attr} className="flex items-center gap-2">
                        <span className="text-[10px] text-[var(--gold)] w-28 shrink-0 truncate font-semibold">
                          {ATTR_LABELS[attr] ?? attr}
                        </span>
                        <div className="flex-1 h-1.5 rounded-full bg-[var(--border)]">
                          <div
                            className="h-full rounded-full bg-[var(--gold)]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-[var(--accent)] w-10 text-right tabular-nums shrink-0">
                          +{points} pts
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
