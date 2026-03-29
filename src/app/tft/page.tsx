import type { Metadata } from 'next'
import { comps } from '@/data/tft-comps'
import CompCard from '@/components/tft/CompCard'
import type { TFTTier } from '@/types/tft'

export const metadata: Metadata = {
  title: 'TFT Set 16 — NNF HUB',
  description: 'Melhores composições meta do TFT Set 16 no patch 16.6. Tier list, campeões, itens e dicas.',
}

const tiers: TFTTier[] = ['S', 'A', 'B']

const tierLabels: Record<TFTTier, string> = {
  S: 'S — Dominante',
  A: 'A — Muito Forte',
  B: 'B — Sólido',
  C: 'C — Situacional',
}

const tierColors: Record<TFTTier, string> = {
  S: '#f59e0b',
  A: '#00d4aa',
  B: '#3b82f6',
  C: '#6b7280',
}

export default function TFTPage() {
  const totalComps = comps.length
  const sCount = comps.filter((c) => c.tier === 'S').length
  const aCount = comps.filter((c) => c.tier === 'A').length

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Header */}
      <section className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-dim)] px-4 py-1.5 text-sm text-[var(--accent)] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Set 16 — Patch 16.6
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Guia Meta{' '}
          <span className="text-[var(--accent)]">TFT</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-[var(--text-secondary)] leading-relaxed">
          As melhores composições do Set 16 no patch 16.6. Campeões, itens, traits e dicas para subir de elo.
        </p>

        {/* Stats */}
        <div className="mt-8 inline-flex items-center gap-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-8 py-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--text-primary)]">{totalComps}</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">Comps</p>
          </div>
          <div className="h-8 w-px bg-[var(--border)]" />
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#f59e0b' }}>{sCount}</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">S-Tier</p>
          </div>
          <div className="h-8 w-px bg-[var(--border)]" />
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#00d4aa' }}>{aCount}</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">A-Tier</p>
          </div>
        </div>
      </section>

      {/* Comps by tier */}
      {tiers.map((tier) => {
        const tierComps = comps.filter((c) => c.tier === tier)
        if (!tierComps.length) return null
        return (
          <section key={tier} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="rounded-lg px-3 py-1 text-sm font-bold"
                style={{ background: tierColors[tier] + '22', color: tierColors[tier] }}
              >
                {tierLabels[tier]}
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-xs text-[var(--text-secondary)]">
                {tierComps.length} comp{tierComps.length > 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {tierComps.map((comp) => (
                <CompCard key={comp.id} comp={comp} />
              ))}
            </div>
          </section>
        )
      })}

      {/* Patch notes highlight */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-sm font-bold text-[var(--text-primary)] mb-4">
          Principais mudanças no Patch 16.6
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Kalista', change: '70 → 30 Souls para destrave' },
            { label: 'Ryze', change: '4 → 3 regiões para destrave' },
            { label: 'Mel', change: 'Destrava com 1★ (antes 2★)' },
            { label: 'Veigar', change: '1 Rabadon para destrave (antes 2)' },
            { label: 'Warwick', change: 'Mana 0/90 → 0/70 (casta mais rápido)' },
            { label: 'Ionia Path of Blades', change: 'Agora concede AP em vez de on-hit' },
            { label: 'T-Hex', change: 'Nerfado para fora do meta' },
            { label: 'Yone', change: 'Destrava com Yasuo 2★ (antes 3★)' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2"
            >
              <span className="text-[var(--accent)] font-bold text-xs shrink-0 mt-0.5">▸</span>
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)]">{item.label}: </span>
                <span className="text-xs text-[var(--text-secondary)]">{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
