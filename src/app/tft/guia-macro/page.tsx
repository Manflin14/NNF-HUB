import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function TFTGuiaMacroPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'TFT', href: '/tft' },
    { label: 'Guia de Macro' },
  ]

  const phases = [
    {
      phase: 'Stage 1-2: Early Game',
      icon: '🌱',
      color: 'text-[var(--color-emerald-400)]',
      borderColor: 'border-[var(--color-emerald-500)]',
      content: [
        'Aceite loss streaks intencionais se quiser farmar gold e itens — HP é mais valioso que gold early',
        'Compre tudo no Stage 1-1 para maximizar XP e gold income do próximo stage',
        'Não faça roll antes do Stage 3-2 — espere o primeiro aumento de nível para ter mais opções',
        'Priorize itens de componente versáteis (B.F. Sword, Needlessly Large Rod, Recurve Bow)',
        'Monte sua economia para 10 gold o mais rápido possível e não gaste abaixo disso',
      ],
    },
    {
      phase: 'Stage 2-3: Leveling Strategy',
      icon: '📊',
      color: 'text-[var(--color-blue-400)]',
      borderColor: 'border-[var(--color-blue-500)]',
      content: [
        'Level up em 2-1 (level 4), 3-2 (level 6) e 4-2 (level 7) é a curva padrão para stabilize',
        'Se estiver perdendo muito HP, make um roll mínimo em 3-2 para encontrar 2* units e stabilize',
        'Não force uma composição — jogue com o que o RNG te der e adapte',
        'Priorize nível sobre roll a menos que você esteja jogando uma comp reroll',
        'Se estiver em win streak, preserve gold e leve com confiança até o Stage 4',
      ],
    },
    {
      phase: 'Stage 3-4: Mid Game Transitions',
      icon: '♟️',
      color: 'text-[var(--color-amber-400)]',
      borderColor: 'border-[var(--color-amber-500)]',
      content: [
        'Stage 3-2 é o momento de roll e decidir sua comp principal — não espere',
        'Se encontrar 3+ unidades de uma comp, vá nessa direção — não force o que não aparece',
        'Priorize 2* carries sobre mais unidades no board — qualidade > quantidade no mid game',
        'Se ninguém está jogando a mesma comp que você, você tem "free roll" — aproveite',
        'Venda unidades que não fazem parte da sua comp final para maximizar gold efficiency',
      ],
    },
    {
      phase: 'Stage 4-5: Late Game Optimization',
      icon: '👑',
      color: 'text-[var(--color-violet-400)]',
      borderColor: 'border-[var(--color-violet-500)]',
      content: [
        'Level 8 é o sweet spot para a maioria das comps — roll aqui para encontrar 4-cost units',
        'Se estiver top 2, considere fast 9 para montar synergies finais com 5-cost units',
        'Se estiver bottom 4, é all-in — roll tudo para encontrar upgrades e sobreviver',
        'Posicionamento ganha jogos no late game — estude onde os adversários colocam o carry',
        'Itens de suporte (Red Buff, Zephyr, Shroud) podem virar fights contra comps mais fortes',
      ],
    },
  ]

  const economyTips = [
    { title: 'Interest Thresholds', desc: 'Cada 10 gold no banco gera 1 gold de interest por round. Máximo de 5 gold/round em 50+ gold bank.', icon: '💰' },
    { title: 'Win/Loss Streaks', desc: 'Streaks de 2+ vitórias/derrotas geram gold bônus. Loss streak é estratégia válida para economizar e ter mais gold depois.', icon: '📈' },
    { title: 'Carousel Priority', desc: 'Priorize componentes que sua comp precisa. Se não sabe ancora, pegue os mais versáteis: B.F. Sword, Needlessly Large Rod ou Recurve Bow.', icon: '🎠' },
    { title: 'Augment Selection', desc: 'Silver (2-1): priorize economia/early. Gold (3-2): synergies/scaling. Prism (4-2): game-winning power.', icon: '✦' },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-violet-500)]/20 bg-[var(--color-violet-500)]/5 px-3 py-1 text-xs text-[var(--color-violet-400)] mb-4">
          <span className="size-1.5 rounded-full bg-[var(--color-violet-400)] animate-pulse" />
          Guia Completo
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] flex items-center gap-3">
          <span className="text-[var(--color-violet-400)]">📖</span> Guia de Macro — TFT Set 16
        </h1>
        <p className="mt-3 text-[var(--color-text-secondary)] text-lg leading-relaxed">
          Domine a macroeconomia do TFT: quando level up, quando roll, como gerenciar gold e vencer games.
        </p>
      </div>

      {/* ECONOMY CARDS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span className="text-[var(--color-amber-400)]">💰</span> Economia Básica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {economyTips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6 transition-all duration-200 hover:border-[var(--color-border-secondary)] hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tip.icon}</span>
                <h3 className="font-bold text-[var(--color-text-primary)]">{tip.title}</h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHASE GUIDE */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span>📋</span> Guia por Fase do Jogo
        </h2>
        <div className="space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className={`rounded-xl border ${phase.borderColor}/20 bg-[var(--color-bg-card)] overflow-hidden transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--color-border-subtle)]">
                <span className="text-2xl">{phase.icon}</span>
                <h3 className={`text-lg font-bold ${phase.color}`}>{phase.phase}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {phase.content.map((tip, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-tertiary)] text-xs font-bold text-[var(--color-text-muted)]">
                        {i + 1}
                      </span>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POSITIONING TIPS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span>♟</span> Princípios de Posicionamento
        </h2>
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Carry Protection',
                desc: 'Seu carry principal sempre nas fileiras de trás, protegido por tanks na frente. Esconda de Zephyrs adversários.',
              },
              {
                title: 'Corner Your Backline',
                desc: 'Coloque o carry em um dos cantos para focar o dano em uma direção. Se há assassinos, misture as fileiras.',
              },
              {
                title: 'Tank Placement',
                desc: 'Tanks na frente, mas espalhados ao invés de agrupados — evita que AoE hit todos de uma vez.',
              },
              {
                title: 'Zephyr Counters',
                desc: 'Coloque unidades menos importantes ao lado do carry para absorver Zephyrs. Mantenha o carry longe da linha de frente.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-bold text-[var(--color-violet-400)] mb-1">{item.title}</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-8 text-center">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Escolha sua composição</h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Agora que você domina a macro, explore as melhores composições do patch.
        </p>
        <Link
          href="/tft"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-violet-500)] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-violet-400)] hover:shadow-lg hover:shadow-violet-500/20"
        >
          Ver Composições
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  )
}
