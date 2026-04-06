import Link from 'next/link'
import TagBadge from '@/components/ui/TagBadge'
import TierTag from '@/components/ui/TierTag'
import { builds } from '@/data/builds'
import { tftComps } from '@/data/tft-comps'
import { GAMES, getPositionConfig } from '@/utils/helpers'

export default function HomePage() {
  const topBuilds = [...builds].sort((a, b) => b.votes - a.votes).slice(0, 4)
  const trendingComps = tftComps.filter(c => c.trending).slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-16">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden rounded-2xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] py-20 px-8 text-center md:px-16">
        {/* Decorative gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-emerald-500)]/5 via-transparent to-[var(--color-violet-500)]/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-emerald-500)]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-violet-500)]/8 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-slate-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-slate-500) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10">
          {/* Logo / Title */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]/60 px-4 py-1.5 text-xs text-[var(--color-text-muted)] mb-8 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-[var(--color-emerald-400)] animate-pulse" />
            Patch 16.6 — Atualizado
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[var(--color-emerald-400)] via-[var(--color-emerald-300)] to-[var(--color-violet-400)] bg-clip-text text-transparent">
              NNF HUB
            </span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)] md:text-xl leading-relaxed">
            Builds, composições e estratégias para jogos competitivos.
            <br className="hidden md:block" />
            <span className="text-[var(--color-text-accent)] font-medium">Tudo atualizado. Tudo num só lugar.</span>
          </p>

          {/* Game cards */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {GAMES.map((game) => (
              <Link
                key={game.id}
                href={game.route}
                className="group w-64 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)]/60 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  '--game-accent': game.accentColor,
                  borderColor: 'var(--color-border-primary)',
                } as React.CSSProperties}
              >
                <div
                  className="mx-auto mb-3 flex size-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${game.color}20`,
                    borderLeft: `3px solid ${game.accentColor}`,
                  }}
                >
                  {game.icon}
                </div>
                <div className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)] transition-colors">
                  {game.name}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1.5">{game.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRENDING EA FC ==================== */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[var(--color-emerald-400)]">⚽</span>
            Trending — EA FC 26
          </h2>
          <Link href="/ea-fc" className="text-sm text-[var(--color-emerald-400)] hover:underline font-medium">
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
                className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-emerald-500)]/50 hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{pos.icon}</span>
                  <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-emerald-400)] transition-colors truncate">
                    {build.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
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
                <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                  <span>⬆ {build.votes}</span>
                  <span className="text-[var(--color-emerald-400)] font-medium group-hover:underline">
                    Ver →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ==================== TRENDING TFT ==================== */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[var(--color-violet-400)]">♟️</span>
            Trending — TFT Set 16
          </h2>
          <Link href="/tft" className="text-sm text-[var(--color-violet-400)] hover:underline font-medium">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingComps.map((comp) => (
            <Link
              key={comp.id}
              href={`/tft/${comp.slug}`}
              className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-violet-500)]/50 hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-3">
                <TierTag tier={comp.tier} size="sm" />
                <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-400)] transition-colors truncate">
                  {comp.name}
                </span>
                {comp.trending && (
                  <span className="ml-auto flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
                    <span className="size-1.5 rounded-full bg-red-400 animate-pulse" />
                    HOT
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mb-3 leading-relaxed">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {comp.coreChampions.slice(0, 3).map((champ) => (
                  <span
                    key={champ.name}
                    className="px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)] text-xs text-[var(--color-text-secondary)]"
                  >
                    {champ.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                <span>Patch {comp.patch}</span>
                <span>⬆ {comp.votes}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Builds', value: builds.length.toString(), icon: '📋' },
          { label: 'Composições', value: tftComps.length.toString(), icon: '♟️' },
          { label: 'Jogos', value: '2', icon: '🎮' },
          { label: 'Patch Atual', value: '16.6', icon: '🔄' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6 text-center transition-all duration-300 hover:border-[var(--color-border-secondary)] hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">{stat.icon}</div>
            <div className="text-3xl font-black text-[var(--color-text-primary)]">{stat.value}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1.5 font-medium">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
