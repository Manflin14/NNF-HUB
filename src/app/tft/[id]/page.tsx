import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import TierTag from '@/components/ui/TierTag'
import TFTHexBoard from '@/components/tft/TFTHexBoard'
import CompDetail from '@/components/tft/CompDetail'
import { getCompBySlug, tftComps } from '@/data/tft-comps'

export function generateStaticParams() {
  return tftComps.map((comp) => ({ id: comp.slug }))
}

export default async function CompPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const comp = getCompBySlug(id)
  if (!comp) notFound()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'TFT', href: '/tft' },
    { label: `Tier ${comp.tier}`, href: `/tft#tier-${comp.tier}` },
    { label: comp.name },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="relative rounded-2xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-violet-500)]/5 via-transparent to-[var(--color-slate-800)]/50" />
        <div className="relative p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <TierTag tier={comp.tier} size="lg" />
            {comp.trending && (
              <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
                <span className="size-1.5 rounded-full bg-red-400 animate-pulse" />
                TRENDING
              </span>
            )}
            <span className="text-xs text-[var(--color-text-muted)]">
              Patch {comp.patch} · {comp.difficulty}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
            {comp.name}
          </h1>
          <p className="mt-2 text-[var(--color-text-secondary)] text-lg leading-relaxed">
            {comp.description}
          </p>
        </div>
      </div>

      <CompDetail comp={comp} />

      {/* POSITIONING */}
      <section className="mt-10">
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
            <span className="text-[var(--color-violet-400)]">♟</span> Posicionamento no Board
          </h2>
          <TFTHexBoard positioning={comp.positioning} />
        </div>
      </section>

      {/* GUIDE BY PHASE */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Guia por Fase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(
            [
              { phase: 'Early Game', key: 'early', icon: '🌱' },
              { phase: 'Mid Game', key: 'mid', icon: '⚙️' },
              { phase: 'Late Game', key: 'late', icon: '👑' },
            ] as const
          ).map((stage) => (
            <div
              key={stage.key}
              className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-200 hover:border-[var(--color-border-secondary)] hover:shadow-md"
            >
              <h3 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                <span className="text-xl">{stage.icon}</span>
                {stage.phase}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {comp.guide[stage.key]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AUGMENTS */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
          <span className="text-[var(--color-violet-400)]">✦</span> Melhores Augments
        </h2>
        <div className="flex flex-wrap gap-2">
          {comp.augments.map((augment) => (
            <span
              key={augment}
              className="px-3 py-1.5 rounded-lg bg-[var(--color-violet-500)]/10 text-sm text-[var(--color-violet-300)] border border-[var(--color-violet-500)]/20"
            >
              {augment}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
