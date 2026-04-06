'use client'

import { Build } from '@/types'
import TagBadge from '@/components/ui/TagBadge'
import { getPositionConfig } from '@/utils/helpers'
import { useState } from 'react'

interface BuildDetailProps {
  build: Build
}

export default function BuildDetail({ build }: BuildDetailProps) {
  const posConfig = getPositionConfig(build.position)
  const [activeTab, setActiveTab] = useState<'attributes' | 'skillpoints' | 'playstyles' | 'tips'>('attributes')

  const tabs = [
    { key: 'attributes' as const, label: 'Atributos', icon: '📊' },
    { key: 'skillpoints' as const, label: 'Skill Points', icon: '📈' },
    { key: 'playstyles' as const, label: 'Play Styles', icon: '🎮' },
    { key: 'tips' as const, label: 'Dicas', icon: '💡' },
  ]

  const maxAttr = Math.max(...Object.values(build.attributes), 99)

  return (
    <div className="space-y-8">
      {/* INFO CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Posição', value: `${posConfig.icon} ${build.position}` },
          { label: 'Altura', value: `${build.height} cm` },
          { label: 'Peso', value: `${build.weight} kg` },
          { label: 'Max Rating', value: `${build.maxRating}` },
        ].map((info) => (
          <div
            key={info.label}
            className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 text-center"
          >
            <div className="text-xs text-[var(--color-text-muted)] mb-1">{info.label}</div>
            <div className="text-xl font-bold text-[var(--color-text-primary)]">{info.value}</div>
          </div>
        ))}
        {[
          { label: 'Archetype', value: build.archetype },
          { label: 'Pé', value: build.preferredFoot },
        ].map((info) => (
          <div
            key={info.label}
            className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 text-center"
          >
            <div className="text-xs text-[var(--color-text-muted)] mb-1">{info.label}</div>
            <div className="text-lg font-bold text-[var(--color-text-primary)]">{info.value}</div>
          </div>
        ))}
      </div>

      {/* TAGS & PLAY STYLE PLUS */}
      <div className="flex flex-wrap gap-2">
        {build.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} large />
        ))}
        {build.playStylePlus.length > 0 && (
          <span className="px-3 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/30 font-bold text-sm">
            ★ Play Style+ disponível
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
        <p className="text-[var(--color-text-secondary)] leading-relaxed">{build.description}</p>
      </div>

      {/* TABS */}
      <div>
        <div className="flex gap-1 border-b border-[var(--color-border-primary)] mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-[var(--color-accent)] text-[var(--color-text-accent)]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
              style={{ '--color-accent': 'var(--color-border-eafc)' } as React.CSSProperties}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ATTRIBUTES TAB */}
        {activeTab === 'attributes' && (
          <div className="space-y-3">
            {Object.entries(build.attributes)
              .sort(([, a], [, b]) => b - a)
              .map(([name, value]) => {
                const pct = (value / maxAttr) * 100
                const color = value >= 90 ? 'var(--color-cta-green)'
                  : value >= 75 ? 'var(--color-gold)'
                  : value >= 60 ? 'var(--color-border-tft-light)'
                  : 'var(--color-text-muted)'
                return (
                  <div key={name} className="flex items-center gap-3">
                    <span className="w-44 text-xs text-[var(--color-text-secondary)] shrink-0">
                      {name.replace(/_/g, ' ')}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                    </div>
                    <span
                      className="w-8 text-right text-sm font-mono font-bold"
                      style={{ color }}
                    >
                      {value}
                    </span>
                  </div>
                )
              })}
          </div>
        )}

        {/* SKILL POINTS TAB */}
        {activeTab === 'skillpoints' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(build.skillPoints)
              .sort(([, a], [, b]) => b - a)
              .map(([name, points]) => (
                <div
                  key={name}
                  className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 text-center"
                >
                  <div className="text-2xl font-mono font-bold text-[var(--color-text-accent)]">
                    {points}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                    {name.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 text-center">
              <div className="text-2xl font-mono font-bold text-[var(--color-cta-green)]">
                {Object.values(build.skillPoints).reduce((a, b) => a + b, 0)}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">Total</div>
            </div>
          </div>
        )}

        {/* PLAY STYLES TAB */}
        {activeTab === 'playstyles' && (
          <div className="space-y-4">
            {/* Play Styles */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text-muted)] mb-2">Play Styles</h3>
              <div className="flex flex-wrap gap-3">
                {build.playStyles.map((ps) => (
                  <div
                    key={ps.id}
                    className="flex items-center gap-2 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] px-4 py-3"
                  >
                    <span className="text-lg">{ps.icon}</span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">{ps.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Play Style Plus */}
            {build.playStylePlus.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-gold)] mb-2">★ Play Styles+</h3>
                <div className="flex flex-wrap gap-3">
                  {build.playStylePlus.map((ps) => (
                    <div
                      key={ps}
                      className="flex items-center gap-2 rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 px-4 py-3"
                    >
                      <span className="text-lg">⭐</span>
                      <span className="text-sm font-bold text-[var(--color-gold)]">{ps.replace('+', '')}+</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TIPS TAB */}
        {activeTab === 'tips' && (
          <div className="space-y-3">
            {build.tips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-cta-green)]/20 text-xs font-bold text-[var(--color-cta-green)]">
                  {i + 1}
                </span>
                <p className="text-sm text-[var(--color-text-secondary)]">{tip}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
