import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { positions, getPositionBySlug } from '@/data/builds'
import BuildCard from '@/components/BuildCard'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return positions.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const position = getPositionBySlug(slug)
  if (!position) return {}
  return {
    title: `${position.label} — NNF HUB EA FC 26`,
    description: `Builds meta para ${position.label} no Pro Clubs. ${position.description}`,
  }
}

const positionIcons: Record<string, string> = {
  goleiro: '🧤',
  zagueiro: '🛡️',
  lateral: '↔️',
  volante: '⚙️',
  meia: '🎯',
  'meia-atacante': '✨',
  ponta: '⚡',
  centroavante: '🔥',
}

export default async function PositionPage({ params }: Props) {
  const { slug } = await params
  const position = getPositionBySlug(slug)

  if (!position) notFound()

  const currentIndex = positions.findIndex((p) => p.slug === slug)
  const prev = positions[currentIndex - 1]
  const next = positions[currentIndex + 1]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
        <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
          Início
        </Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">{position.label}</span>
      </nav>

      {/* Position header */}
      <header className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{positionIcons[position.slug]}</span>
          <div>
            <div className="flex items-center gap-2 mb-2">
              {position.codes.map((code) => (
                <span
                  key={code}
                  className="rounded px-2 py-0.5 text-xs font-bold"
                  style={{ background: position.color + '22', color: position.color }}
                >
                  {code}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {position.label}
            </h1>
            <p className="mt-2 text-[var(--text-secondary)] text-base max-w-xl">{position.description}</p>
          </div>
        </div>

        {/* Divider with color */}
        <div className="h-px rounded-full" style={{ background: `linear-gradient(to right, ${position.color}66, transparent)` }} />
      </header>

      {/* Builds grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
            {position.builds.length} build{position.builds.length > 1 ? 's' : ''} disponíve{position.builds.length > 1 ? 'is' : 'l'}
          </h2>
          <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[var(--accent)] font-semibold">META</span>
            <span>= recomendado</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {position.builds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      </section>

      {/* Position navigation */}
      <nav className="mt-14 flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/posicao/${prev.slug}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)]"
          >
            <span className="text-[var(--text-secondary)]">←</span>
            <span>
              <span className="block text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Anterior</span>
              <span className="font-semibold text-[var(--text-primary)]">{prev.label}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/posicao/${next.slug}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)]"
          >
            <span>
              <span className="block text-[10px] text-[var(--text-secondary)] uppercase tracking-wider text-right">Próxima</span>
              <span className="font-semibold text-[var(--text-primary)]">{next.label}</span>
            </span>
            <span className="text-[var(--text-secondary)]">→</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  )
}
