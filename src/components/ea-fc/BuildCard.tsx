import Link from 'next/link'
import { Build } from '@/types'
import TagBadge from '@/components/ui/TagBadge'
import { getPositionConfig } from '@/utils/helpers'

interface BuildCardProps {
  build: Build
}

export default function BuildCard({ build }: BuildCardProps) {
  const posConfig = getPositionConfig(build.position)

  return (
    <Link
      href={`/posicao/${build.slug}`}
      className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-eafc)] hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg"
    >
      {/* TAGS */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {build.tags.slice(0, 3).map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
        {build.playStylePlus.length > 0 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/30 font-bold">
            PLUS
          </span>
        )}
      </div>

      {/* TITLE */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{posConfig.icon}</span>
        <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)] transition-colors">
          {build.name}
        </h3>
      </div>

      {/* META */}
      <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
        <span className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] font-mono">
          {build.position}
        </span>
        <span>{build.height}cm · {build.weight}kg</span>
        <span>Max {build.maxRating}</span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3">
        {build.description}
      </p>

      {/* PLAY STYLES */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {build.playStyles.slice(0, 3).map((ps) => (
          <span
            key={ps.id}
            className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs text-[var(--color-text-secondary)]"
          >
            {ps.icon} {ps.name}
          </span>
        ))}
      </div>

      {/* VOTES */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          ⬆ {build.votes} votos
        </span>
        <span className="text-xs text-[var(--color-text-accent)] font-medium group-hover:underline">
          Ver build →
        </span>
      </div>
    </Link>
  )
}
