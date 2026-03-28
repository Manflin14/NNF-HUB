'use client'

import { useState } from 'react'
import type { Build } from '@/types'
import AttributeBar from './AttributeBar'
import PlayStyleBadge from './PlayStyleBadge'
import ProgressionTable from './ProgressionTable'

const difficultyColors: Record<Build['difficulty'], string> = {
  Iniciante: '#4ade80',
  Intermediário: '#facc15',
  Avançado: '#f87171',
}

const skillStars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n)

interface BuildCardProps {
  build: Build
}

export default function BuildCard({ build }: BuildCardProps) {
  const [tab, setTab] = useState<'overview' | 'progression'>('overview')

  return (
    <div
      className={`relative rounded-xl border bg-[var(--surface)] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 ${
        build.isMeta
          ? 'border-[var(--accent)]/40 shadow-[0_0_24px_var(--accent-dim)]'
          : 'border-[var(--border)]'
      }`}
    >
      {/* META badge */}
      {build.isMeta && (
        <div className="absolute top-3 right-3 z-10">
          <span className="flex items-center gap-1 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-bold text-black uppercase tracking-wider">
            <span className="h-1 w-1 rounded-full bg-black" />
            META
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-5 pr-16">
          <span className="inline-flex items-center rounded-full border border-[var(--gold)]/30 bg-[var(--gold-dim)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--gold)] mb-2">
            {build.archetype}
          </span>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{build.name}</h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{build.description}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-1">
          <button
            onClick={() => setTab('overview')}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-colors ${
              tab === 'overview'
                ? 'bg-[var(--surface)] text-[var(--text-primary)] shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setTab('progression')}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-colors ${
              tab === 'progression'
                ? 'bg-[var(--accent)] text-black shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Progressão por Nível
          </button>
        </div>

        {tab === 'overview' && (
          <>
            {/* Attributes */}
            <div className="mb-5 space-y-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                Atributos — Nível Máximo
              </p>
              <AttributeBar label="PAC" value={build.attributes.pac} />
              <AttributeBar label="SHO" value={build.attributes.sho} />
              <AttributeBar label="PAS" value={build.attributes.pas} />
              <AttributeBar label="DRI" value={build.attributes.dri} />
              <AttributeBar label="DEF" value={build.attributes.def} />
              <AttributeBar label="PHY" value={build.attributes.phy} />
            </div>

            {/* Play Styles */}
            <div className="mb-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                Play Styles
              </p>
              <div className="flex flex-wrap gap-2">
                {build.playStyles.map((ps) => (
                  <PlayStyleBadge key={ps.name} playStyle={ps} />
                ))}
              </div>
            </div>

            {/* Physical info */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5">
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1">Altura</p>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{build.heightRange}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5">
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1">Peso</p>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{build.weightRange}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5">
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1">Skill Moves</p>
                <p className="text-sm font-mono text-[var(--gold)]">{skillStars(build.skillMoves)}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5">
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1">Pé Fraco</p>
                <p className="text-sm font-mono text-[var(--gold)]">{skillStars(build.weakFoot)}</p>
              </div>
            </div>

            {/* Pros / Cons */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4ade80] mb-2">Pontos Fortes</p>
                <ul className="space-y-1.5">
                  {build.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <span className="mt-0.5 shrink-0 text-[#4ade80]">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#f87171] mb-2">Fraquezas</p>
                <ul className="space-y-1.5">
                  {build.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <span className="mt-0.5 shrink-0 text-[#f87171]">−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {tab === 'progression' && (
          <div className="mb-5">
            <ProgressionTable progression={build.progression} />
          </div>
        )}

        {/* Difficulty footer */}
        <div className="flex items-center justify-between text-xs border-t border-[var(--border)] pt-4">
          <span className="text-[var(--text-secondary)]">Dificuldade</span>
          <span className="font-bold" style={{ color: difficultyColors[build.difficulty] }}>
            {build.difficulty}
          </span>
        </div>
      </div>
    </div>
  )
}
