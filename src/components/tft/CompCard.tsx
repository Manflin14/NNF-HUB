import Link from 'next/link'
import { TFTComp } from '@/types/tft'
import TierTag from '@/components/ui/TierTag'

interface CompCardProps {
  comp: TFTComp
}

export default function CompCard({ comp }: CompCardProps) {
  return (
    <Link
      href={`/tft/${comp.slug}`}
      className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-tft)] hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg"
    >
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-3">
        <TierTag tier={comp.tier} />
        <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)] transition-colors">
          {comp.name}
        </h3>
        {comp.trending && (
          <span className="ml-auto text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
            HOT
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3">
        {comp.description}
      </p>

      {/* CORE CHAMPIONS */}
      <div className="flex flex-wrap gap-1 mb-3">
        {comp.coreChampions.map((champ) => (
          <span
            key={champ.name}
            className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs text-[var(--color-text-secondary)]"
          >
            {champ.name}
          </span>
        ))}
      </div>

      {/* SYNERGIES */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {comp.synergies.slice(0, 2).map((syn) => (
          <span
            key={syn.name}
            className="px-2 py-0.5 rounded bg-[var(--color-bg-tft)]/20 text-xs text-[var(--color-text-accent)]"
          >
            {syn.name} {syn.count}/{syn.maxCount}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        <span>
          Patch {comp.patch} ·{' '}
          <span className={`${
            comp.difficulty === 'Fácil' ? 'text-[var(--color-cta-green)]' :
            comp.difficulty === 'Médio' ? 'text-[var(--color-gold)]' :
            'text-red-400'
          }`}>
            {comp.difficulty}
          </span>
        </span>
        <span>⬆ {comp.votes}</span>
      </div>
    </Link>
  )
}
