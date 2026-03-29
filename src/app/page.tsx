import Link from 'next/link'

const features = [
  {
    title: 'Builds Meta',
    description: 'Configurações testadas e aprovadas pelos melhores jogadores.',
    icon: '⚡',
  },
  {
    title: 'Guia de Progressão',
    description: 'Saiba exatamente onde investir cada ponto de atributo do nível 1 ao 25.',
    icon: '📈',
  },
  {
    title: 'Sempre Atualizado',
    description: 'Conteúdo revisado a cada patch para garantir que você está no meta.',
    icon: '🔄',
  },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% -10%, #00d4aa18 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 60%, #f0a30a0c 0%, transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs text-[var(--text-secondary)] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Guias para múltiplos jogos
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[var(--accent)]">NNF</span>
            <span className="text-[var(--text-primary)]"> HUB</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg text-[var(--text-secondary)] leading-relaxed">
            Builds meta, guias de progressão e estratégias para os melhores jogos.
          </p>
        </div>
      </section>

      {/* ── Games ───────────────────────────────────────────────────────────── */}
      <section id="jogos" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-8">
          Jogos disponíveis
        </h2>

        <div className="flex flex-wrap gap-4">
          {/* EA FC 26 */}
          <Link
            href="/ea-fc"
            className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] w-36 h-36 transition-all duration-200 hover:border-[var(--gold)]/60 hover:bg-[var(--surface-2)] hover:-translate-y-0.5"
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ background: '#f0a30a' }}
            />
            <span
              className="rounded px-2 py-1 text-sm font-bold text-black"
              style={{ background: '#f0a30a' }}
            >
              FC 26
            </span>
            <span className="text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              EA FC 26
            </span>
          </Link>

          {/* TFT */}
          <Link
            href="/tft"
            className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] w-36 h-36 transition-all duration-200 hover:border-[#c084fc]/60 hover:bg-[var(--surface-2)] hover:-translate-y-0.5"
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ background: '#c084fc' }}
            />
            <span
              className="rounded px-2 py-1 text-sm font-bold text-black"
              style={{ background: '#c084fc' }}
            >
              Set 16
            </span>
            <span className="text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              TFT
            </span>
          </Link>

          {/* Coming soon placeholder */}
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] border-dashed bg-[var(--surface)]/40 w-36 h-36 opacity-40">
            <div className="w-10 h-10 rounded-lg bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-secondary)]">Em breve</span>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-8">
            Por que usar o NNF HUB
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="text-2xl mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
