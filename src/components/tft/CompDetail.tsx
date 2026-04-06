import { TFTComp } from '@/types/tft'
import TierTag from '@/components/ui/TierTag'

interface CompDetailProps {
  comp: TFTComp
}

function costColorBg(cost: number): string {
  if (cost >= 5) return 'bg-gradient-to-br from-[var(--color-amber-300)] to-[var(--color-amber-600)]'
  if (cost >= 4) return 'bg-gradient-to-br from-[var(--color-amber-400)] to-[var(--color-orange-500)]'
  if (cost >= 3) return 'bg-gradient-to-br from-[var(--color-violet-400)] to-[var(--color-violet-700)]'
  if (cost >= 2) return 'bg-gradient-to-br from-[var(--color-blue-400)] to-[var(--color-blue-600)]'
  return 'bg-gradient-to-br from-[var(--color-slate-500)] to-[var(--color-slate-700)]'
}

function difficultyColor(diff: string): string {
  switch (diff) {
    case 'Fácil': return 'text-[var(--color-emerald-400)]'
    case 'Médio': return 'text-[var(--color-amber-400)]'
    case 'Difícil': return 'text-[var(--color-red-400)]'
    default: return 'text-[var(--color-text-muted)]'
  }
}

export default function CompDetail({ comp }: CompDetailProps) {
  return (
    <div className="space-y-8">
      {/* META INFO */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Tier', value: <TierTag tier={comp.tier} size="lg" /> },
          { label: 'Patch', value: <span className="text-[var(--color-text-primary)] font-mono text-lg">{comp.patch}</span> },
          { label: 'Dificuldade', value: <span className={`font-bold text-lg ${difficultyColor(comp.difficulty)}`}>{comp.difficulty}</span> },
          { label: 'Votos', value: <span className="text-[var(--color-text-primary)] font-mono text-lg">⬆ {comp.votes}</span> },
        ].map((info) => (
          <div
            key={info.label}
            className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 text-center"
          >
            <div className="text-xs text-[var(--color-text-muted)] mb-1">{info.label}</div>
            <div className="flex justify-center">{info.value}</div>
          </div>
        ))}
      </div>

      {/* SYNERGIES */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
          <span className="text-[var(--color-violet-400)]">◇</span> Sinergias Ativas
        </h2>
        <div className="space-y-4">
          {comp.synergies.map((syn) => {
            const pct = (syn.count / syn.maxCount) * 100
            return (
              <div key={syn.name} className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[var(--color-violet-500)]/15 text-sm font-bold text-[var(--color-violet-400)] border border-[var(--color-violet-500)]/20">
                      {syn.count}/{syn.maxCount}
                    </span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">{syn.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--color-violet-600)] to-[var(--color-violet-400)] transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-1.5">{syn.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CORE CHAMPIONS + ITEMS */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
          <span>♟</span> Campeões e Itens
        </h2>
        <div className="space-y-3">
          {comp.coreChampions.map((champ) => {
            const items = comp.carryItems[champ.name]
            return (
              <div
                key={champ.name}
                className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]/50 p-4"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className={`size-10 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-md ${costColorBg(champ.cost)}`}>
                    {champ.cost}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">{champ.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {champ.traits.join(' · ')}
                    </div>
                  </div>
                </div>
                {items && (
                  <div className="flex flex-wrap gap-2 sm:ml-auto">
                    {items.map((item) => (
                      <span
                        key={item.name}
                        className="px-2.5 py-1 rounded-lg bg-[var(--color-bg-card)] text-xs text-[var(--color-text-secondary)] border border-[var(--color-border-primary)] shadow-sm"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {comp.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg bg-[var(--color-bg-tertiary)] text-sm text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
