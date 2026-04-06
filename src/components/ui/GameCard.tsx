import Link from 'next/link'

interface GameCardProps {
  id: string
  name: string
  shortName: string
  description: string
  route: string
  color: string
  accentColor: string
  icon: string
}

export default function GameCard({
  name,
  shortName,
  description,
  route,
  color,
  accentColor,
  icon,
}: GameCardProps) {
  return (
    <Link
      href={route}
      className="group relative block rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6 transition-all duration-300 hover:border-[color:var(--accent,color)] hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg"
      style={{ '--accent': accentColor } as React.CSSProperties}
    >
      <div
        className="mb-4 flex size-14 items-center justify-center rounded-lg text-2xl"
        style={{ backgroundColor: `${color}30`, borderLeft: `3px solid ${accentColor}` }}
      >
        {icon}
      </div>
      <h3 className="mb-1 text-xl font-bold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-text-accent)]">
        {name}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)]">{shortName}</p>
      <p className="mt-2 text-xs text-[var(--color-text-muted)]">{description}</p>
    </Link>
  )
}
