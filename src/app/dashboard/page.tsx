import Link from 'next/link'
import { builds } from '@/data/builds'
import { tftComps } from '@/data/tft-comps'
import { getPositionConfig, getTierConfig } from '@/utils/helpers'
import TagBadge from '@/components/ui/TagBadge'
import TierTag from '@/components/ui/TierTag'

export default function DashboardPage() {
  const totalBuilds = builds.length
  const totalComps = tftComps.length
  const totalVotes = builds.reduce((sum, b) => sum + b.votes, 0) + tftComps.reduce((sum, c) => sum + c.votes, 0)
  const avgBuildVotes = Math.round(totalVotes / (totalBuilds + totalComps))

  const topBuilds = [...builds].sort((a, b) => b.votes - a.votes).slice(0, 5)
  const topComps = [...tftComps].sort((a, b) => b.votes - a.votes).slice(0, 5)

  // Count tags across all builds
  const tagCounts: Record<string, number> = {}
  builds.forEach((b) => b.tags.forEach((t) => { tagCounts[t] = (tagCounts[t] || 0) + 1 }))

  // Count tiers across all comps
  const tierCounts: Record<string, number> = {}
  tftComps.forEach((c) => { tierCounts[c.tier] = (tierCounts[c.tier] || 0) + 1 })

  // Count positions
  const posCounts: Record<string, number> = {}
  builds.forEach((b) => { posCounts[b.position] = (posCounts[b.position] || 0) + 1 })

  const mostPopularTag = Object.entries(tagCounts).sort(([, a], [, b]) => b - a)[0]
  const mostPopularPos = Object.entries(posCounts).sort(([, a], [, b]) => b - a)[0]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]/60 px-3 py-1 text-xs text-[var(--color-text-muted)] mb-4">
          <span className="size-2 rounded-full bg-[var(--color-emerald-400)] animate-pulse" />
          Dashboard
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
          Dashboard
        </h1>
        <p className="mt-2 text-[var(--color-text-secondary)] text-lg">
          Estatísticas e visão geral do NNF HUB.
        </p>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
          <div className="text-3xl font-black text-[var(--color-emerald-400)]">{totalBuilds}</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Builds EA FC</div>
        </div>
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
          <div className="text-3xl font-black text-[var(--color-violet-400)]">{totalComps}</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Comps TFT</div>
        </div>
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
          <div className="text-3xl font-black text-[var(--color-text-primary)]">⬆ {totalVotes.toLocaleString()}</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Total Votos</div>
        </div>
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
          <div className="text-3xl font-black text-[var(--color-amber-400)]">{avgBuildVotes}</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Média de Votos</div>
        </div>
      </div>

      {/* TOP BUILDS & TOP COMPS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TOP BUILDS */}
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-subtle)]">
            <h2 className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
              <span className="text-[var(--color-emerald-400)]">⚽</span> Top Builds por Votos
            </h2>
            <Link href="/ea-fc" className="text-xs text-[var(--color-emerald-400)] hover:underline">
              Ver todas →
            </Link>
          </div>
          <div className="divide-y divide-[var(--color-border-subtle)]">
            {topBuilds.map((build, i) => {
              const pos = getPositionConfig(build.position)
              return (
                <Link
                  key={build.id}
                  href={`/posicao/${build.slug}`}
                  className="flex items-center gap-4 px-6 py-4 transition-all duration-200 hover:bg-[var(--color-bg-tertiary)]/50 group"
                >
                  <span className="text-lg font-black text-[var(--color-text-muted)] w-6 text-center">
                    {i + 1}
                  </span>
                  <span className="text-xl shrink-0">{pos.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-emerald-400)] transition-colors truncate">
                      {build.name}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {pos.label} · {build.position}
                    </div>
                  </div>
                  <span className="text-sm font-mono text-[var(--color-emerald-400)] shrink-0">
                    ⬆ {build.votes}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* TOP COMPS */}
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-subtle)]">
            <h2 className="font-bold text-[var(--color-text-primary)] flex items-center gap-2">
              <span className="text-[var(--color-violet-400)]">♟️</span> Top Comps por Votos
            </h2>
            <Link href="/tft" className="text-xs text-[var(--color-violet-400)] hover:underline">
              Ver todas →
            </Link>
          </div>
          <div className="divide-y divide-[var(--color-border-subtle)]">
            {topComps.map((comp, i) => (
              <Link
                key={comp.id}
                href={`/tft/${comp.slug}`}
                className="flex items-center gap-4 px-6 py-4 transition-all duration-200 hover:bg-[var(--color-bg-tertiary)]/50 group"
              >
                <span className="text-lg font-black text-[var(--color-text-muted)] w-6 text-center">
                  {i + 1}
                </span>
                <TierTag tier={comp.tier} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-400)] transition-colors truncate">
                    {comp.name}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    Patch {comp.patch} · {comp.difficulty}
                  </div>
                </div>
                <span className="text-sm font-mono text-[var(--color-violet-400)] shrink-0">
                  ⬆ {comp.votes}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* TAG DISTRIBUTION & TIER DISTRIBUTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TAG STATS */}
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--color-border-subtle)]">
            <h2 className="font-bold text-[var(--color-text-primary)]">Tags Mais Populares — EA FC</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {Object.entries(tagCounts)
                .sort(([, a], [, b]) => b - a)
                .map(([tag, count]) => {
                  const pct = (count / totalBuilds) * 100
                  const { label, color } = getTagConfigDirect(tag)
                  return (
                    <div key={tag}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--color-text-secondary)]" style={{ color }}>{label}</span>
                        <span className="text-xs text-[var(--color-text-muted)] font-mono">{count} builds</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, backgroundColor: `${color}` }}
                        />
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        {/* TIER DISTRIBUTION */}
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--color-border-subtle)]">
            <h2 className="font-bold text-[var(--color-text-primary)]">Distribuição de Tiers — TFT</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {(['S', 'A', 'B', 'C', 'D'] as const).map((tier) => {
                const count = tierCounts[tier] || 0
                const pct = totalComps > 0 ? (count / totalComps) * 100 : 0
                const config = getTierConfig(tier)
                return (
                  <div key={tier}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <TierTag tier={tier} />
                        <span className="text-sm text-[var(--color-text-secondary)]">{count} comps</span>
                      </div>
                      <span className="text-xs text-[var(--color-text-muted)] font-mono">{Math.round(pct)}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: config.color }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* POSITION COVERAGE */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border-subtle)]">
          <h2 className="font-bold text-[var(--color-text-primary)]">Cobertura por Posição — EA FC</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.entries(posCounts)
              .sort(([, a], [, b]) => b - a)
              .map(([pos, count]) => {
                const config = getPositionConfig(pos)
                return (
                  <div
                    key={pos}
                    className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]/40 p-4 text-center"
                  >
                    <div className="text-2xl mb-1">{config.icon}</div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">{pos}</div>
                    <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{count} build{count > 1 ? 's' : ''}</div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6 md:p-8">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
          <span>💡</span> Insights Rápidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border border-[var(--color-emerald-500)]/20 bg-[var(--color-emerald-500)]/5 p-4">
            <div className="text-sm font-bold text-[var(--color-emerald-400)] mb-1">Tag Popular</div>
            <div className="text-2xl font-black text-[var(--color-text-primary)]">{mostPopularTag?.[0] ? getTagConfigDirect(mostPopularTag[0]).label : 'N/A'}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">{mostPopularTag?.[1] || 0} builds usam esta tag</div>
          </div>
          <div className="rounded-lg border border-[var(--color-violet-500)]/20 bg-[var(--color-violet-500)]/5 p-4">
            <div className="text-sm font-bold text-[var(--color-violet-400)] mb-1">Posição Popular</div>
            <div className="text-2xl font-black text-[var(--color-text-primary)]">{mostPopularPos?.[0] || 'N/A'}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">{mostPopularPos?.[1] || 0} builds nesta posição</div>
          </div>
          <div className="rounded-lg border border-[var(--color-amber-400)]/20 bg-[var(--color-amber-400)]/5 p-4">
            <div className="text-sm font-bold text-[var(--color-amber-400)] mb-1">Conteúdo Total</div>
            <div className="text-2xl font-black text-[var(--color-text-primary)]">{totalBuilds + totalComps}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Builds + Comps combinadas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper - since getTagConfig is in helpers and we need the same data
function getTagConfigDirect(tag: string): { label: string; color: string } {
  const TAG_CONFIG: Record<string, { label: string; color: string }> = {
    meta: { label: 'Meta', color: 'var(--color-emerald-400)' },
    'off-meta': { label: 'Off-Meta', color: 'var(--color-orange-400)' },
    iniciante: { label: 'Iniciante', color: 'var(--color-blue-400)' },
    competitivo: { label: 'Competitivo', color: 'var(--color-red-400)' },
    velocidade: { label: 'Velocidade', color: 'var(--color-cyan-400)' },
    físico: { label: 'Físico', color: 'var(--color-amber-400)' },
    técnico: { label: 'Técnico', color: 'var(--color-violet-400)' },
    criativo: { label: 'Criativo', color: 'var(--color-pink-400)' },
  }
  return TAG_CONFIG[tag] ?? { label: tag, color: 'var(--color-text-muted)' }
}
