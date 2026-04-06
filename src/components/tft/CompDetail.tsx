'use client'

import { TFTComp } from '@/types/tft'
import TierTag from '@/components/ui/TierTag'

interface CompDetailProps {
  comp: TFTComp
}

export default function CompDetail({ comp }: CompDetailProps) {
  return (
    <div className="space-y-8">
      {/* META INFO */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Tier', value: <TierTag tier={comp.tier} /> },
          { label: 'Patch', value: <span className="text-[var(--color-text-primary)]">{comp.patch}</span> },
          { label: 'Dificuldade', value: <span className={
            comp.difficulty === 'Fácil' ? 'text-[var(--color-cta-green)]' :
            comp.difficulty === 'Médio' ? 'text-[var(--color-gold)]' :
            'text-red-400'
          }>{comp.difficulty}</span> },
          { label: 'Votos', value: <span className="text-[var(--color-text-primary)]">⬆ {comp.votes}</span> },
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
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">Sinergias Ativas</h2>
        <div className="space-y-3">
          {comp.synergies.map((syn) => (
            <div key={syn.name} className="flex items-center gap-3">
              <div
                className="px-3 py-1 rounded-lg text-sm font-bold"
                style={{
                  backgroundColor: `var(--color-border-tft)20`,
                  color: `var(--color-border-tft)`,
                }}
              >
                {syn.count}/{syn.maxCount}
              </div>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">{syn.name}</span>
              <span className="text-xs text-[var(--color-text-muted)]">{syn.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CORE CHAMPIONS + ITEMS */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
          Campeões e Itens
        </h2>
        <div className="space-y-4">
          {comp.coreChampions.map((champ) => {
            const items = comp.carryItems[champ.name]
            return (
              <div
                key={champ.name}
                className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] p-4"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div
                    className="size-10 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      background: champ.cost >= 4
                        ? 'linear-gradient(135deg, #ffd54f, #ff9100)'
                        : champ.cost >= 3
                        ? 'linear-gradient(135deg, #ab47bc, #6a1b9a)'
                        : 'var(--color-bg-tft)',
                    }}
                  >
                    {champ.cost}💰
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">{champ.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {champ.traits.join(' · ')}
                    </div>
                  </div>
                </div>
                {items && (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item.name}
                        className="px-2 py-1 rounded bg-[var(--color-bg-card)] text-xs text-[var(--color-text-secondary)] border border-[var(--color-border-primary)]"
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
            className="px-3 py-1 rounded-lg bg-[var(--color-bg-tertiary)] text-sm text-[var(--color-text-secondary)] border border-[var(--color-border-primary)]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
