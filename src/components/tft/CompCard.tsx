'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { TFTComp } from '@/types/tft'

const tierColors: Record<TFTComp['tier'], { bg: string; text: string; border: string }> = {
  S: { bg: '#f59e0b22', text: '#f59e0b', border: '#f59e0b44' },
  A: { bg: '#00d4aa22', text: '#00d4aa', border: '#00d4aa44' },
  B: { bg: '#3b82f622', text: '#60a5fa', border: '#3b82f644' },
  C: { bg: '#6b728022', text: '#9ca3af', border: '#6b728044' },
}

const difficultyColors: Record<TFTComp['difficulty'], string> = {
  'Fácil':   '#4ade80',
  'Médio':   '#facc15',
  'Difícil': '#f87171',
}

const playstyleColors: Record<TFTComp['playstyle'], string> = {
  'Fast 9':   '#c084fc',
  'Slow Roll': '#fb923c',
  'Reroll':   '#38bdf8',
  'Flex':     '#a3e635',
}

const costColors: Record<number, string> = {
  1: '#6b7280',
  2: '#22c55e',
  3: '#3b82f6',
  4: '#a855f7',
  5: '#f59e0b',
}

const roleLabel: Record<string, string> = {
  carry:   'CARRY',
  tank:    'TANK',
  support: 'SUPP',
  flex:    'FLEX',
}

interface CompCardProps {
  comp: TFTComp
}

export default function CompCard({ comp }: CompCardProps) {
  const [tab, setTab] = useState<'overview' | 'tips'>('overview')
  const tier = tierColors[comp.tier]

  const carries = comp.champions.filter((c) => c.role === 'carry')

  return (
    <div
      className="relative rounded-xl border bg-[var(--surface)] overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
      style={{ borderColor: tier.border }}
    >
      {/* Top color bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: tier.text }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {/* Tier badge */}
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-bold border"
                style={{ background: tier.bg, color: tier.text, borderColor: tier.border }}
              >
                {comp.tier}-Tier
              </span>
              {/* Playstyle badge */}
              <span
                className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                style={{ background: playstyleColors[comp.playstyle] + '22', color: playstyleColors[comp.playstyle] }}
              >
                {comp.playstyle}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">{comp.name}</h3>
          </div>
          {/* Difficulty */}
          <div className="text-right shrink-0">
            <p className="text-[10px] text-[var(--text-secondary)] mb-0.5">Dificuldade</p>
            <p className="text-sm font-bold" style={{ color: difficultyColors[comp.difficulty] }}>
              {comp.difficulty}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-1">
          <button
            onClick={() => setTab('overview')}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-colors ${
              tab === 'overview'
                ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Composição
          </button>
          <button
            onClick={() => setTab('tips')}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-colors ${
              tab === 'tips'
                ? 'bg-[var(--accent)] text-black shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Dicas
          </button>
        </div>

        {tab === 'overview' && (
          <>
            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {comp.description}
            </p>

            {/* Champions */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                Campeões
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.champions.map((champ) => (
                  <div key={champ.name} className="flex flex-col items-center gap-1">
                    <div
                      className="relative rounded-lg px-2 py-1.5 text-xs font-semibold text-center min-w-[52px]"
                      style={{
                        background: costColors[champ.cost] + '22',
                        color: costColors[champ.cost],
                        border: `1px solid ${costColors[champ.cost]}44`,
                      }}
                    >
                      <span className="block text-[9px] font-bold opacity-70 mb-0.5">
                        {roleLabel[champ.role]}
                      </span>
                      {champ.name}
                      <span
                        className="absolute -top-1.5 -right-1.5 rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold text-black"
                        style={{ background: costColors[champ.cost] }}
                      >
                        {champ.cost}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carries + Items */}
            {carries.some((c) => c.items?.length) && (
              <div className="mb-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                  Itens nos Carries
                </p>
                <div className="space-y-2">
                  {carries.filter((c) => c.items?.length).map((champ) => (
                    <div key={champ.name} className="flex items-start gap-2">
                      <span
                        className="text-xs font-bold shrink-0 mt-0.5"
                        style={{ color: costColors[champ.cost] }}
                      >
                        {champ.name}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {champ.items!.map((item) => (
                          <span
                            key={item}
                            className="rounded px-1.5 py-0.5 text-[10px] font-medium bg-[var(--border)] text-[var(--text-primary)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Traits */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                Traits Ativas
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.traits.map((trait) => (
                  <span
                    key={trait.name}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold border"
                    style={{
                      background: trait.color + '18',
                      color: trait.color,
                      borderColor: trait.color + '44',
                    }}
                  >
                    <span className="font-bold">{trait.count}</span>
                    {trait.name}
                  </span>
                ))}
              </div>
            </div>

            {/* When to play */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                Quando Jogar
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{comp.when}</p>
            </div>
          </>
        )}

        {tab === 'tips' && (
          <ul className="space-y-3">
            {comp.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                <span
                  className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                  style={{ background: tier.text }}
                >
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        )}

        {/* Link to full page */}
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <Link
            href={`/tft/${comp.id}`}
            className="flex items-center justify-center gap-2 w-full rounded-lg py-2 text-xs font-semibold transition-colors"
            style={{ background: tier.bg, color: tier.text, border: `1px solid ${tier.border}` }}
          >
            Ver posicionamento no board
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
