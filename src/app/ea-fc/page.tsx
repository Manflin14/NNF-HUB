import Link from 'next/link'
import GameSidebar from '@/components/layout/GameSidebar'
import BuildCard from '@/components/ea-fc/BuildCard'
import { builds, positions } from '@/data/builds'
import { Tag } from '@/types'
import TagBadge from '@/components/ui/TagBadge'

const SIDEBAR_LINKS = [
  ...positions.map(p => ({
    label: `${p.label} — ${p.name}`,
    href: `/ea-fc#${p.slug}`,
    icon: '📍',
  })),
  { label: 'Buscar Builds', href: '/ea-fc/busca', icon: '🔍' },
  { label: 'Guia de Táticas', href: '/ea-fc/guia-taticas', icon: '📖' },
]

export default function EAFCPage() {
  // Group builds by position category
  const positionGroups = positions.map(pos => ({
    ...pos,
    builds: builds.filter(b =>
      pos.label === 'LE / LD'
        ? (b.position === 'LE' || b.position === 'LD' || b.position === 'LEI' || b.position === 'LDI')
        : b.position.split('/').map(s => s.trim()).includes(pos.label) || pos.label.includes(b.position)
    ),
  }))

  const allTags = new Set<Tag>()
  builds.forEach(b => b.tags.forEach(t => allTags.add(t)))

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex gap-8">
        <GameSidebar
          title="EA FC 26 Pro Clubs"
          links={SIDEBAR_LINKS}
          accentColor="var(--color-border-eafc)"
          gameRoute="/ea-fc"
        />

        <div className="flex-1 min-w-0">
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-[var(--color-text-primary)]">
              <span className="text-[var(--color-border-eafc)]">⚽</span> EA FC 26 Pro Clubs
            </h1>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Builds otimizados para cada posição. Atributos, Play Styles, skill points e dicas de meta.
            </p>
          </div>

          {/* BUILD INDEX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {builds.map((build) => (
              <BuildCard key={build.id} build={build} />
            ))}
          </div>

          {/* BY POSITION */}
          {positionGroups.filter(g => g.builds.length > 0).map((group) => (
            <section key={group.slug} id={group.slug} className="mb-10">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                {group.label} — {group.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.builds.map((build) => (
                  <Link
                    key={build.id}
                    href={`/posicao/${build.slug}`}
                    className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-eafc)] hover:bg-[var(--color-bg-card-hover)]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)]">
                        {build.name}
                      </h3>
                      <span className="text-lg">{getPositionIcon(build.position)}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3">
                      {build.description}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs font-mono text-[var(--color-text-secondary)]">
                        {build.position}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {build.height}cm · {build.maxRating} OVR
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {build.tags.slice(0, 2).map((tag) => (
                        <TagBadge key={tag} tag={tag} />
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-[var(--color-text-muted)]">
                      ⬆ {build.votes} votos
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

function getPositionIcon(pos: string): string {
  const icons: Record<string, string> = {
    GOL: '🧤', ZAG: '🛡️', LE: '⬅️', LD: '➡️', LEI: '⬅️', LDI: '➡️',
    VOL: '🔒', MC: '🎯', MEI: '🧠', PE: '⚡', PD: '⚡', SA: '🔥', PTE: '💎', ATA: '⚽',
  }
  return icons[pos] ?? '❓'
}
