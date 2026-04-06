'use client'

import { Build } from '@/types'
import TagBadge from '@/components/ui/TagBadge'
import { getPositionConfig } from '@/utils/helpers'
import { useState } from 'react'

interface BuildDetailProps {
  build: Build
}

type TabKey = 'attributes' | 'skillpoints' | 'playstyles' | 'tips'

export default function BuildDetail({ build }: BuildDetailProps) {
  const posConfig = getPositionConfig(build.position)
  const [activeTab, setActiveTab] = useState<TabKey>('attributes')

  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'attributes', label: 'Atributos', icon: '📊' },
    { key: 'skillpoints', label: 'Skill Points', icon: '📈' },
    { key: 'playstyles', label: 'Play Styles', icon: '🎮' },
    { key: 'tips', label: 'Dicas', icon: '💡' },
  ]

  const maxAttr = Math.max(...Object.values(build.attributes), 99)

  const sortedAttrs = Object.entries(build.attributes)
    .sort(([, a], [, b]) => b - a)

  return (
    <div className="space-y-8">
      {/* INFO CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: 'Posição', value: `${posConfig.icon} ${build.position}` },
          { label: 'Altura', value: `${build.height} cm` },
          { label: 'Peso', value: `${build.weight} kg` },
          { label: 'Max Rating', value: `${build.maxRating} OVR` },
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
          <span className="px-3 py-1 rounded-full bg-[var(--color-amber-400)]/10 text-[var(--color-amber-400)] border border-[var(--color-amber-400)]/30 font-bold text-sm flex items-center gap-1">
            <span>★</span> Play Style+ disponível
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
        <p className="text-[var(--color-text-secondary)] leading-relaxed">{build.description}</p>
      </div>

      {/* TABS */}
      <div>
        <div className="flex gap-1 border-b border-[var(--color-border-primary)] mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-[var(--color-emerald-500)] text-[var(--color-emerald-400)]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-subtle)]'
              }`}
            >
              <span className="mr-1.5">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ATTRIBUTES TAB */}
        {activeTab === 'attributes' && (
          <div className="space-y-3 animate-fadeIn">
            {sortedAttrs.map(([name, value]) => {
              const pct = (value / maxAttr) * 100
              const color = value >= 90 ? 'var(--color-emerald-400)'
                : value >= 75 ? 'var(--color-amber-400)'
                : value >= 60 ? 'var(--color-blue-400)'
                : 'var(--color-slate-400)'
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-fadeIn">
            {Object.entries(build.skillPoints)
              .sort(([, a], [, b]) => b - a)
              .map(([name, points]) => (
                <div
                  key={name}
                  className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 text-center"
                >
                  <div className="relative">
                    <div className="text-2xl font-mono font-bold text-[var(--color-emerald-400)]">
                      +{points}
                    </div>
                    <div className="flex justify-center mt-2 gap-0.5">
                      {Array.from({ length: Math.min(points, 10) }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full bg-[var(--color-emerald-400)]/40"
                          style={{ height: `${8 + (i * 2)}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-2">
                    {name.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            <div className="rounded-lg border border-[var(--color-emerald-500)]/30 bg-[var(--color-emerald-500)]/5 p-4 text-center">
              <div className="text-2xl font-mono font-bold text-[var(--color-emerald-400)]">
                {Object.values(build.skillPoints).reduce((a, b) => a + b, 0)}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">Total Skill Points</div>
            </div>
          </div>
        )}

        {/* PLAY STYLES TAB */}
        {activeTab === 'playstyles' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Play Styles */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">Play Styles</h3>
              <div className="flex flex-wrap gap-3">
                {build.playStyles.map((ps) => (
                  <div
                    key={ps.id}
                    className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] px-5 py-3.5 transition-all duration-200 hover:border-[var(--color-border-secondary)] hover:shadow-md"
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
                <h3 className="text-sm font-semibold text-[var(--color-amber-400)] uppercase tracking-wider mb-3 flex items-center gap-1">
                  <span>★</span> Play Styles+
                </h3>
                <div className="flex flex-wrap gap-3">
                  {build.playStylePlus.map((ps) => (
                    <div
                      key={ps}
                      className="flex items-center gap-2.5 rounded-xl border border-[var(--color-amber-400)]/30 bg-[var(--color-amber-400)]/5 px-5 py-3.5"
                    >
                      <span className="text-lg">⭐</span>
                      <span className="text-sm font-bold text-[var(--color-amber-400)]">{ps}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TIPS TAB */}
        {activeTab === 'tips' && (
          <div className="space-y-3 animate-fadeIn">
            {build.tips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-emerald-500)]/15 text-xs font-bold text-[var(--color-emerald-400)]">
                  {i + 1}
                </span>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
