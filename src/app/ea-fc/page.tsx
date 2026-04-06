import Link from 'next/link'
import GameSidebar from '@/components/layout/GameSidebar'
import BuildCard from '@/components/ea-fc/BuildCard'
import TagBadge from '@/components/ui/TagBadge'
import { builds, positions } from '@/data/builds'
import { Tag } from '@/types'

const SIDEBAR_LINKS = [
  ...positions.map(p => ({
    label: `${p.label} — ${p.name}`,
    href: `/ea-fc#${p.slug}`,
    icon: '📍',
  })),
  { label: 'Buscar Builds', href: '/ea-fc/busca', icon: '🔍' },
  { label: 'Guia de Táticas', href: '/ea-fc/guia-taticas', icon: '📖' },
]

function getPositionIcon(pos: string): string {
  const icons: Record<string, string> = {
    GOL: '🧤', ZAG: '🛡️', LE: '⬅️', LD: '➡️', LEI: '⬅️', LDI: '➡️',
    VOL: '🔒', MC: '🎯', MEI: '🧠', PE: '⚡', PD: '⚡', SA: '🔥', PTE: '💎', ATA: '⚽',
  }
  return icons[pos] ?? '❓'
}

export default function EAFCPage() {
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
          accentColor="var(--color-emerald-500)"
          gameRoute="/ea-fc"
        />

        <div className="flex-1 min-w-0">
          {/* HEADER */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-emerald-500)]/20 bg-[var(--color-emerald-500)]/5 px-3 py-1 text-xs text-[var(--color-emerald-400)] mb-4">
              <span className="size-1.5 rounded-full bg-[var(--color-emerald-400)] animate-pulse" />
              {builds.length} builds disponíveis
            </div>
            <h1 className="text-3xl font-black text-[var(--color-text-primary)] flex items-center gap-2">
              <span className="text-[var(--color-emerald-400)]">⚽</span> EA FC 26 Pro Clubs
            </h1>
            <p className="mt-2 text-[var(--color-text-secondary)] text-lg">
              Builds otimizados para cada posição. Atributos, Play Styles, skill points e dicas de meta.
            </p>
          </div>

          {/* BUILD INDEX — cards grandes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {builds.map((build) => (
              <BuildCard key={build.id} build={build} />
            ))}
          </div>

          {/* BY POSITION — agrupado */}
          {positionGroups.filter(g => g.builds.length > 0).map((group) => (
            <section key={group.slug} id={group.slug} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{getPositionIcon(group.label)}</span>
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                    {group.label} — {group.name}
                  </h2>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {group.builds.length} build{group.builds.length > 1 ? 's' : ''} disponível{group.builds.length > 1 ? 'eis' : ''}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.builds.map((build) => (
                  <Link
                    key={build.id}
                    href={`/posicao/${build.slug}`}
                    className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-emerald-500)]/50 hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-emerald-400)] transition-colors">
                        {build.name}
                      </h3>
                      <span className="text-2xl">{getPositionIcon(build.position)}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3 leading-relaxed">
                      {build.description}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)] text-xs font-mono text-[var(--color-text-secondary)]">
                        {build.position}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {build.height}cm · Max {build.maxRating}
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
