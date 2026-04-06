import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import TagBadge from '@/components/ui/TagBadge'
import BuildDetail from '@/components/ea-fc/BuildDetail'
import { getBuildBySlug, builds } from '@/data/builds'
import { getPositionConfig, formatDate } from '@/utils/helpers'

export function generateStaticParams() {
  return builds.map((build) => ({ slug: build.slug }))
}

export default async function BuildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const build = getBuildBySlug(slug)
  if (!build) notFound()

  const posConfig = getPositionConfig(build.position)
  const breadcrumbs: Array<{ label: string; href?: string }> = [
    { label: 'Home', href: '/' },
    { label: 'EA FC 26', href: '/ea-fc' },
    { label: `${posConfig.icon} ${posConfig.label}`, href: `/ea-fc#${posConfig.label.toLowerCase()}` },
    { label: build.name },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <TagBadge tag={build.tags[0]} large />
          <span className="text-xs text-[var(--color-text-muted)]">
            Atualizado em {formatDate(build.createdAt)}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
          {posConfig.icon} {build.name}
        </h1>
        <p className="mt-2 text-[var(--color-text-secondary)] text-lg">
          Build de {posConfig.label} — {build.position} · {build.height}cm · {build.weight}kg
        </p>
      </div>

      <BuildDetail build={build} />
    </div>
  )
}
