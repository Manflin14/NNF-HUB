import Link from 'next/link'
import { Build } from '@/types'
import TagBadge from '@/components/ui/TagBadge'
import { getPositionConfig } from '@/utils/helpers'

interface BuildCardProps {
  build: Build
}

export default function BuildCard({ build }: BuildCardProps) {
  const posConfig = getPositionConfig(build.position)

  // Get top 3 attributes for mini preview
  const topAttrs = Object.entries(build.attributes)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)

  const maxAttr = Math.max(...Object.values(build.attributes), 99)

  return (
    <Link
      href={`/posicao/${build.slug}`}
      className="group relative block rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-emerald-500)]/50 hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5"
    >
      {/* Tags + Plus badge */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {build.tags.slice(0, 3).map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
        {build.playStylePlus.length > 0 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--color-amber-400)]/10 text-[var(--color-amber-400)] border border-[var(--color-amber-400)]/30 font-bold">
            PLUS
          </span>
        )}
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{posConfig.icon}</span>
        <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-emerald-400)] transition-colors">
          {build.name}
        </h3>
      </div>

      {/* Meta info */}
      <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
        <span className="px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)] font-mono font-medium">
          {build.position}
        </span>
        <span>{build.height}cm · {build.weight}kg</span>
        <span className="font-mono">Max {build.maxRating}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3 leading-relaxed">
        {build.description}
      </p>

      {/* Play Styles */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {build.playStyles.slice(0, 3).map((ps) => (
          <span
            key={ps.id}
            className="px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)]/60 text-xs text-[var(--color-text-secondary)]"
          >
            {ps.icon} {ps.name}
          </span>
        ))}
      </div>

      {/* Mini attribute bars */}
      <div className="space-y-1.5 mb-3 p-3 rounded-lg bg-[var(--color-bg-tertiary)]/30 border border-[var(--color-border-subtle)]">
        {topAttrs.map(([name, value]) => {
          const pct = (value / maxAttr) * 100
          const color = value >= 90 ? 'var(--color-emerald-400)'
            : value >= 75 ? 'var(--color-amber-400)'
            : 'var(--color-slate-400)'
          return (
            <div key={name} className="flex items-center gap-2">
              <span className="w-28 text-[10px] text-[var(--color-text-muted)] truncate shrink-0">
                {name.replace(/_/g, ' ')}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-[var(--color-slate-800)] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: color }}
                />
              </div>
              <span className="w-6 text-right text-[10px] font-mono font-bold" style={{ color }}>
                {value}
              </span>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          ⬆ {build.votes} votos
        </span>
        <span className="text-xs text-[var(--color-emerald-400)] font-medium group-hover:underline">
          Ver build →
        </span>
      </div>
    </Link>
  )
}
