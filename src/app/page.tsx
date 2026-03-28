import Link from 'next/link'
import { positions } from '@/data/builds'

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

export default function Home() {
  const totalBuilds = positions.reduce((acc, p) => acc + p.builds.length, 0)
  const metaBuilds = positions.reduce((acc, p) => acc + p.builds.filter((b) => b.isMeta).length, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      {/* Hero */}
      <section className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-dim)] px-4 py-1.5 text-sm text-[var(--accent)] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Atualizado para EA FC 26
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Guia de Builds{' '}
          <span className="text-[var(--accent)]">Pro Clubs</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-[var(--text-secondary)] leading-relaxed">
          Encontre a build meta para cada posição. Atributos, Play Styles e dicas de como jogar no mais alto nível.
        </p>

        {/* Stats bar */}
        <div className="mt-8 inline-flex items-center gap-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-8 py-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--text-primary)]">{positions.length}</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">Posições</p>
          </div>
          <div className="h-8 w-px bg-[var(--border)]" />
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--text-primary)]">{totalBuilds}</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">Builds</p>
          </div>
          <div className="h-8 w-px bg-[var(--border)]" />
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--accent)]">{metaBuilds}</p>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">Meta</p>
          </div>
        </div>
      </section>

      {/* Position grid */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-6">
          Escolha sua posição
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {positions.map((pos) => {
            const metaCount = pos.builds.filter((b) => b.isMeta).length
            return (
              <Link
                key={pos.slug}
                href={`/posicao/${pos.slug}`}
                className="group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:border-[var(--accent)]/50 hover:bg-[var(--surface-2)] hover:-translate-y-0.5"
              >
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: pos.color }}
                />

                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{positionIcons[pos.slug]}</span>
                  <div className="flex gap-1.5">
                    {pos.codes.map((code) => (
                      <span
                        key={code}
                        className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                        style={{ background: pos.color + '22', color: pos.color }}
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {pos.label}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {pos.description}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--text-secondary)]">
                    {pos.builds.length} build{pos.builds.length > 1 ? 's' : ''}
                  </span>
                  {metaCount > 0 && (
                    <span className="flex items-center gap-1 text-[var(--accent)] font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      {metaCount} meta
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA hint */}
      <section className="mt-16 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <p className="text-[var(--text-secondary)] text-sm">
          Cada posição contém arquétipos diferentes com atributos, Play Styles recomendados e dicas de jogabilidade.
          <br />
          Clique em qualquer posição para ver as builds em detalhe.
        </p>
      </section>
    </div>
  )
}
