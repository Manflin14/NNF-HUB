import Link from 'next/link'
import { TFTComp } from '@/types/tft'
import TierTag from '@/components/ui/TierTag'

interface CompCardProps {
  comp: TFTComp
}

export default function CompCard({ comp }: CompCardProps) {
  // Color for champion avatar based on cost
  function costColorBg(cost: number): string {
    if (cost >= 5) return 'bg-gradient-to-br from-[var(--color-amber-300)] to-[var(--color-amber-600)]'
    if (cost >= 4) return 'bg-gradient-to-br from-[var(--color-amber-400)] to-[var(--color-orange-500)]'
    if (cost >= 3) return 'bg-gradient-to-br from-[var(--color-violet-400)] to-[var(--color-violet-700)]'
    if (cost >= 2) return 'bg-gradient-to-br from-[var(--color-blue-400)] to-[var(--color-blue-600)]'
    return 'bg-gradient-to-br from-[var(--color-slate-500)] to-[var(--color-slate-700)]'
  }

  function difficultyColor(): string {
    switch (comp.difficulty) {
      case 'Fácil': return 'text-[var(--color-emerald-400)]'
      case 'Médio': return 'text-[var(--color-amber-400)]'
      case 'Difícil': return 'text-[var(--color-red-400)]'
    }
  }

  return (
    <Link
      href={`/tft/${comp.slug}`}
      className="group relative block rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-violet-500)]/50 hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-0.5"
    >
      {/* Trending badge */}
      {comp.trending && (
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
            <span className="size-1.5 rounded-full bg-red-400 animate-pulse" />
            HOT
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <TierTag tier={comp.tier} size="sm" />
        <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-400)] transition-colors truncate">
          {comp.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-4 leading-relaxed">
        {comp.description}
      </p>

      {/* Core Champions */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {comp.coreChampions.slice(0, 4).map((champ) => (
          <span
            key={champ.name}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs text-white ${costColorBg(champ.cost)}`}
          >
            {champ.name}
          </span>
        ))}
      </div>

      {/* Synergies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {comp.synergies.slice(0, 2).map((syn) => (
          <span
            key={syn.name}
            className="px-2 py-0.5 rounded-md bg-[var(--color-violet-500)]/10 text-xs text-[var(--color-violet-300)] border border-[var(--color-violet-500)]/20"
          >
            {syn.name} {syn.count}/{syn.maxCount}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        <span>
          Patch {comp.patch}
          <span className="mx-1.5 text-[var(--color-border-primary)]">·</span>
          <span className={difficultyColor()}>{comp.difficulty}</span>
        </span>
        <span>⬆ {comp.votes}</span>
      </div>
    </Link>
  )
}
