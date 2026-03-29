import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { comps, getCompById } from '@/data/tft-comps'
import TFTBoard from '@/components/tft/TFTBoard'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return comps.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const comp = getCompById(id)
  if (!comp) return {}
  return {
    title: `${comp.name} — TFT Set 16 | NNF HUB`,
    description: comp.description,
  }
}

const tierColors: Record<string, { bg: string; text: string; border: string }> = {
  S: { bg: '#f59e0b22', text: '#f59e0b', border: '#f59e0b44' },
  A: { bg: '#00d4aa22', text: '#00d4aa', border: '#00d4aa44' },
  B: { bg: '#3b82f622', text: '#60a5fa', border: '#3b82f644' },
  C: { bg: '#6b728022', text: '#9ca3af', border: '#6b728044' },
}

const difficultyColors: Record<string, string> = {
  'Fácil':   '#4ade80',
  'Médio':   '#facc15',
  'Difícil': '#f87171',
}

const playstyleColors: Record<string, string> = {
  'Fast 9':    '#c084fc',
  'Slow Roll': '#fb923c',
  'Reroll':    '#38bdf8',
  'Flex':      '#a3e635',
}

const costColors: Record<number, string> = {
  1: '#6b7280',
  2: '#22c55e',
  3: '#3b82f6',
  4: '#a855f7',
  5: '#f59e0b',
}

const roleLabel: Record<string, string> = {
  carry:   'CARRY',
  tank:    'TANK',
  support: 'SUPP',
  flex:    'FLEX',
}

export default async function TFTCompPage({ params }: Props) {
  const { id } = await params
  const comp = getCompById(id)
  if (!comp) notFound()

  const tier = tierColors[comp.tier]
  const carries = comp.champions.filter((c) => c.role === 'carry')
  const currentIndex = comps.findIndex((c) => c.id === id)
  const prev = comps[currentIndex - 1]
  const next = comps[currentIndex + 1]

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
        <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Início</Link>
        <span>/</span>
        <Link href="/tft" className="hover:text-[var(--text-primary)] transition-colors">TFT</Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">{comp.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="rounded-full px-3 py-1 text-sm font-bold border"
            style={{ background: tier.bg, color: tier.text, borderColor: tier.border }}
          >
            {comp.tier}-Tier
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{ background: playstyleColors[comp.playstyle] + '22', color: playstyleColors[comp.playstyle] }}
          >
            {comp.playstyle}
          </span>
          <span className="text-xs font-semibold" style={{ color: difficultyColors[comp.difficulty] }}>
            {comp.difficulty}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
          {comp.name}
        </h1>
        <p className="text-[var(--text-secondary)] text-base max-w-2xl leading-relaxed">
          {comp.description}
        </p>
        <div className="mt-4 h-px rounded-full" style={{ background: `linear-gradient(to right, ${tier.text}66, transparent)` }} />
      </header>

      {/* Board */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-5">
          Posicionamento no Board
        </h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          {/* Row labels */}
          <div className="flex justify-between text-[10px] text-[var(--text-secondary)] mb-3 px-1">
            <span>← Esquerda</span>
            <span>Frente (row 0) → Costas (row 3)</span>
            <span>Direita →</span>
          </div>
          <TFTBoard champions={comp.champions} />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Champions list */}
        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-4">
            Campeões
          </h2>
          <div className="space-y-2">
            {comp.champions.map((champ) => (
              <div
                key={champ.name}
                className="flex items-center gap-3 rounded-lg px-3 py-2"
                style={{ background: costColors[champ.cost] + '10', border: `1px solid ${costColors[champ.cost]}28` }}
              >
                {/* Cost */}
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                  style={{ background: costColors[champ.cost] }}
                >
                  {champ.cost}
                </span>
                {/* Name + Role */}
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{champ.name}</span>
                  <span
                    className="ml-2 text-[10px] font-bold"
                    style={{ color: costColors[champ.cost] }}
                  >
                    {roleLabel[champ.role]}
                  </span>
                </div>
                {/* Items */}
                {champ.items?.length ? (
                  <div className="flex flex-wrap gap-1 justify-end">
                    {champ.items.map((item) => (
                      <span
                        key={item}
                        className="rounded px-1.5 py-0.5 text-[9px] font-medium bg-[var(--border)] text-[var(--text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[10px] text-[var(--text-secondary)]/40">sem itens</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-4">
          {/* Traits */}
          <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              Traits Ativas
            </h2>
            <div className="flex flex-wrap gap-2">
              {comp.traits.map((trait) => (
                <span
                  key={trait.name}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold border"
                  style={{
                    background: trait.color + '18',
                    color: trait.color,
                    borderColor: trait.color + '44',
                  }}
                >
                  <span className="font-bold">{trait.count}</span>
                  {trait.name}
                </span>
              ))}
            </div>
          </section>

          {/* Carry items */}
          {carries.some((c) => c.items?.length) && (
            <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-4">
                Itens nos Carries
              </h2>
              <div className="space-y-3">
                {carries.filter((c) => c.items?.length).map((champ) => (
                  <div key={champ.name}>
                    <p
                      className="text-xs font-bold mb-1.5"
                      style={{ color: costColors[champ.cost] }}
                    >
                      {champ.name}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {champ.items!.map((item, i) => (
                        <span
                          key={item}
                          className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium border"
                          style={{
                            background: costColors[champ.cost] + '12',
                            borderColor: costColors[champ.cost] + '30',
                            color: 'var(--text-primary)',
                          }}
                        >
                          <span
                            className="text-[9px] font-bold opacity-60"
                            style={{ color: costColors[champ.cost] }}
                          >
                            {i + 1}
                          </span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* When to play */}
          <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
              Quando Jogar
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{comp.when}</p>
          </section>
        </div>
      </div>

      {/* Tips */}
      <section className="mb-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          Dicas e Estratégia
        </h2>
        <ul className="space-y-3">
          {comp.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
              <span
                className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                style={{ background: tier.text }}
              >
                {i + 1}
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Navigation */}
      <nav className="flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/tft/${prev.id}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)]"
          >
            <span className="text-[var(--text-secondary)]">←</span>
            <span>
              <span className="block text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Anterior</span>
              <span className="font-semibold text-[var(--text-primary)]">{prev.name}</span>
            </span>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/tft/${next.id}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)]"
          >
            <span className="text-right">
              <span className="block text-[10px] text-[var(--text-secondary)] uppercase tracking-wider text-right">Próxima</span>
              <span className="font-semibold text-[var(--text-primary)]">{next.name}</span>
            </span>
            <span className="text-[var(--text-secondary)]">→</span>
          </Link>
        ) : <div />}
      </nav>
    </div>
  )
}
