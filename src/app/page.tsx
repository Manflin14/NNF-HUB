import Link from 'next/link'
import { positions } from '@/data/builds'

const games = [
  {
    id: 'ea-fc',
    name: 'EA FC 26',
    subtitle: 'Pro Clubs',
    description: 'Builds meta, atributos otimizados e guia de progressão completo para cada posição.',
    href: '/ea-fc',
    color: '#00d4aa',
    badge: 'Disponível',
    badgeColor: '#00d4aa',
    stats: [
      { label: 'Posições', value: String(positions.length) },
      {
        label: 'Builds',
        value: String(positions.reduce((acc, p) => acc + p.builds.length, 0)),
      },
      {
        label: 'Meta',
        value: String(positions.reduce((acc, p) => acc + p.builds.filter((b) => b.isMeta).length, 0)),
      },
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        <path
          d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M24 14l2.4 7.2H34l-6.2 4.4 2.4 7.2L24 28.4l-6.2 4.4 2.4-7.2L14 21.2h7.6L24 14z"
          fill="currentColor"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
]

const comingSoon = [
  {
    id: 'coming-1',
    name: 'Em breve',
    description: 'Novo jogo chegando ao NNF HUB.',
    color: '#7a8fa6',
  },
  {
    id: 'coming-2',
    name: 'Em breve',
    description: 'Novo jogo chegando ao NNF HUB.',
    color: '#7a8fa6',
  },
]

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
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% -10%, #00d4aa18 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 60%, #f0a30a0c 0%, transparent 60%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs text-[var(--text-secondary)] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Guias para múltiplos jogos
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[var(--accent)]">NNF</span>
            <span className="text-[var(--text-primary)]"> HUB</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg text-[var(--text-secondary)] leading-relaxed">
            Builds meta, guias de progressão e estratégias para os melhores jogos.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ea-fc"
              className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Ver EA FC 26
            </Link>
            <a
              href="#jogos"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-2)]"
            >
              Explorar jogos
            </a>
          </div>
        </div>
      </section>

      {/* ── Games ───────────────────────────────────────────────────────────── */}
      <section id="jogos" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-8">
          Jogos disponíveis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Active games */}
          {games.map((game) => (
            <Link
              key={game.id}
              href={game.href}
              className="group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:border-[var(--accent)]/50 hover:-translate-y-0.5 hover:bg-[var(--surface-2)]"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ background: game.color }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div style={{ color: game.color }}>{game.icon}</div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold"
                  style={{ background: game.badgeColor + '22', color: game.badgeColor }}
                >
                  {game.badge}
                </span>
              </div>

              {/* Title */}
              <p className="text-xs font-semibold text-[var(--text-secondary)] mb-0.5">{game.subtitle}</p>
              <h3
                className="text-xl font-bold mb-2 transition-colors group-hover:text-[var(--accent)]"
                style={{ color: 'var(--text-primary)' }}
              >
                {game.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {game.description}
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-5 border-t border-[var(--border)] pt-4">
                {game.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-lg font-bold" style={{ color: game.color }}>
                      {s.value}
                    </p>
                    <p className="text-[10px] text-[var(--text-secondary)]">{s.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}

          {/* Coming soon */}
          {comingSoon.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl border border-[var(--border)] border-dashed bg-[var(--surface)]/40 p-6 opacity-50"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-[var(--border)]" />
                <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--text-secondary)]">
                  Em breve
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-secondary)] mb-2">{item.name}</h3>
              <p className="text-sm text-[var(--text-secondary)]/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
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
              <div
                key={f.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
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
