import Link from 'next/link'
import GameCard from '@/components/ui/GameCard'
import TagBadge from '@/components/ui/TagBadge'
import TierTag from '@/components/ui/TierTag'
import { builds } from '@/data/builds'
import { tftComps } from '@/data/tft-comps'
import { GAMES, getPositionConfig } from '@/utils/helpers'

export default function HomePage() {
  const topBuilds = builds.sort((a, b) => b.votes - a.votes).slice(0, 4)
  const trendingComps = tftComps.filter(c => c.trending).slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] px-8 py-16 text-center md:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-eafc)]/10 via-transparent to-[var(--color-bg-tft)]/10" />
        <div className="relative z-10">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-gradient">NNF HUB</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)] md:text-xl">
            Builds, composições e estratégias para jogos competitivos.{' '}
            <span className="text-[var(--color-text-accent)]">Tudo atualizado. Tudo num só lugar.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {GAMES.map((game) => (
              <Link
                key={game.id}
                href={game.route}
                className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)]/80 px-6 py-4 text-center transition-all duration-300 hover:border-[color:var(--accent)] hover:shadow-lg"
                style={{ '--accent': game.accentColor } as React.CSSProperties}
              >
                <div className="text-3xl mb-2">{game.icon}</div>
                <div className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)] transition-colors">
                  {game.name}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">{game.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING EA FC */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-[var(--color-border-eafc)]">⚽</span> Trending — EA FC 26
          </h2>
          <Link href="/ea-fc" className="text-sm text-[var(--color-text-accent)] hover:underline">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topBuilds.map((build) => {
            const pos = getPositionConfig(build.position)
            return (
              <Link
                key={build.id}
                href={`/posicao/${build.slug}`}
                className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-eafc)] hover:bg-[var(--color-bg-card-hover)]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{pos.icon}</span>
                  <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)] transition-colors">
                    {build.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs font-mono text-[var(--color-text-secondary)]">
                    {build.position}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {build.height}cm · {build.weight}kg
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {build.tags.slice(0, 2).map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                  <span>Max {build.maxRating}</span>
                  <span>⬆ {build.votes}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* TRENDING TFT */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-[var(--color-border-tft)]">♟️</span> Trending — TFT Set 16
          </h2>
          <Link href="/tft" className="text-sm text-[var(--color-text-accent)] hover:underline">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingComps.map((comp) => (
            <Link
              key={comp.id}
              href={`/tft/${comp.slug}`}
              className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-tft)] hover:bg-[var(--color-bg-card-hover)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <TierTag tier={comp.tier} />
                <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)] transition-colors">
                  {comp.name}
                </span>
                {comp.trending && (
                  <span className="ml-auto text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    TRENDING
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mb-3">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {comp.coreChampions.slice(0, 3).map((champ) => (
                  <span
                    key={champ.name}
                    className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs text-[var(--color-text-secondary)]"
                  >
                    {champ.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                <span>Patch {comp.patch}</span>
                <span>⬆ {comp.votes} · {comp.difficulty}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Builds', value: builds.length.toString(), icon: '📋' },
          { label: 'Composições', value: tftComps.length.toString(), icon: '♟️' },
          { label: 'Jogos', value: '2', icon: '🎮' },
          { label: 'Patch Atual', value: '16.6', icon: '🔄' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 text-center"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[var(--color-text-primary)]">{stat.value}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
