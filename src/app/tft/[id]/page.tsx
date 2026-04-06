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

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <TierTag tier={comp.tier} />
          {comp.trending && (
            <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
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
        <p className="mt-2 text-[var(--color-text-secondary)] text-lg">
          {comp.description}
        </p>
      </div>

      <CompDetail comp={comp} />

      <section className="mt-10">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Posicionamento no Board
        </h2>
        <TFTHexBoard positioning={comp.positioning} />
      </section>

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
              className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5"
            >
              <h3 className="font-bold text-[var(--color-text-primary)] mb-2">
                {stage.icon} {stage.phase}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {comp.guide[stage.key]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Melhores Augments
        </h2>
        <div className="flex flex-wrap gap-2">
          {comp.augments.map((augment) => (
            <span
              key={augment}
              className="px-3 py-1.5 rounded-lg bg-[var(--color-bg-tertiary)] text-sm text-[var(--color-text-secondary)] border border-[var(--color-border-primary)]"
            >
              {augment}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
