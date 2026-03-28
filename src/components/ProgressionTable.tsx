import type { LevelProgression, Attributes } from '@/types'

const ATTR_LABELS: { key: keyof Attributes; label: string }[] = [
  { key: 'pac', label: 'PAC' },
  { key: 'sho', label: 'SHO' },
  { key: 'pas', label: 'PAS' },
  { key: 'dri', label: 'DRI' },
  { key: 'def', label: 'DEF' },
  { key: 'phy', label: 'PHY' },
]

function getBarColor(value: number): string {
  if (value >= 90) return '#00d4aa'
  if (value >= 80) return '#4ade80'
  if (value >= 70) return '#facc15'
  if (value >= 60) return '#fb923c'
  return '#f87171'
}

/** Calcula os atributos acumulados após uma faixa */
function computeAttributesAtTier(
  base: Attributes,
  progression: LevelProgression,
  upToTierIndex: number,
): Attributes {
  const result = { ...base }
  for (let i = 0; i <= upToTierIndex; i++) {
    const tier = progression.tiers[i]
    result.pac += tier.allocation.pac
    result.sho += tier.allocation.sho
    result.pas += tier.allocation.pas
    result.dri += tier.allocation.dri
    result.def += tier.allocation.def
    result.phy += tier.allocation.phy
  }
  return result
}

interface ProgressionTableProps {
  progression: LevelProgression
}

export default function ProgressionTable({ progression }: ProgressionTableProps) {
  const snapshots = progression.tiers.map((_, i) =>
    computeAttributesAtTier(progression.baseAttributes, progression, i),
  )

  return (
    <div className="space-y-6">
      {/* Header info */}
      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
        <span>Nível máximo: <span className="font-bold text-[var(--text-primary)]">{progression.maxLevel}</span></span>
        <span>Total de pontos: <span className="font-bold text-[var(--accent)]">{progression.totalPoints}</span></span>
      </div>

      {/* Base stats snapshot */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
          Atributos no Nível 1 (Base)
        </p>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
          {ATTR_LABELS.map(({ key, label }) => {
            const val = progression.baseAttributes[key]
            return (
              <div key={key} className="flex items-center gap-2">
                <span className="w-7 text-[10px] font-bold text-[var(--text-secondary)]">{label}</span>
                <div className="flex-1 h-1 rounded-full bg-[var(--border)] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(val / 99) * 100}%`, background: getBarColor(val) }}
                  />
                </div>
                <span className="w-5 text-right text-[10px] font-bold tabular-nums" style={{ color: getBarColor(val) }}>
                  {val}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tiers */}
      <div className="space-y-3">
        {progression.tiers.map((tier, i) => {
          const stats = snapshots[i]
          const totalInTier = Object.values(tier.allocation).reduce((a, b) => a + b, 0)

          return (
            <div
              key={tier.fromLevel}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] overflow-hidden"
            >
              {/* Tier header */}
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
                <span className="text-[10px] font-semibold text-[var(--accent)]">
                  +{totalInTier} pts
                </span>
              </div>

              <div className="p-4 space-y-4">
                {/* Focus tip */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--accent)]/40 pl-3">
                  {tier.focus}
                </p>

                {/* Allocation breakdown */}
                <div className="grid grid-cols-3 gap-2">
                  {ATTR_LABELS.map(({ key, label }) => {
                    const gained = tier.allocation[key]
                    const current = stats[key]
                    return (
                      <div key={key} className="flex items-center gap-1.5">
                        <span className="w-7 text-[10px] font-bold text-[var(--text-secondary)]">{label}</span>
                        <span
                          className="text-xs font-bold tabular-nums"
                          style={{ color: getBarColor(current) }}
                        >
                          {current}
                        </span>
                        {gained > 0 && (
                          <span className="text-[10px] text-[var(--accent)] font-semibold">
                            +{gained}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
