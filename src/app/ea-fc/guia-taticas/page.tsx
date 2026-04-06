import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function EAFCGuiaTaticasPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'EA FC 26', href: '/ea-fc' },
    { label: 'Guia de Táticas' },
  ]

  const formations = [
    {
      name: '4-1-2-1-2 (2)',
      desc: 'Formação com losango no meio. Excelente para tabelas curtas e posse de bola. O CDM protege a defesa.',
      pros: ['Controle do meio-campo', 'Proteção defensiva', 'Versatilidade'],
      cons: ['Largura limitada', 'Requer laterais ofensivos'],
    },
    {
      name: '4-2-3-1 (2)',
      desc: 'A mais popular no competitivo. Dois volantes dão solidez, CAMs criam pelas laterais, striker isolado mas apoiado.',
      pros: ['Sólida defensivamente', 'Largura com LMs/RMs', 'Flexível em transição'],
      cons: ['Striker solitário', 'Distância entre linhas se não pressionar'],
    },
    {
      name: '4-1-4-1',
      desc: 'Formação defensiva que se transforma em ataque rápido. O CDM é a peça chave. CMs box-to-box complementam.',
      pros: ['Defesa compacta', 'Contra-ataques letais', 'Cobertura ampla'],
      cons: ['Distância do atacante', 'Depende da qualidade do CDM'],
    },
    {
      name: '3-4-2-1',
      desc: 'Com 3 zagueiros + 2 alas. Muito ofensiva nos flancos. Ideal se seus alas são rápidos e bons cruzadores.',
      pros: ['Dominância nos flancos', 'Ataque massivo', 'Surpreendente'],
      cons: ['Vulnerável contra-ataques pelo meio', 'Requer alas com muita stamina'],
    },
  ]

  const defensiveTips = [
    'Use "Pressão após perda de bola" para recuperar rápido — ótimo para times com jogadores rápidos e stamina alta',
    'Linha defensiva em 50-60 evita contra-ataques — ajuste conforme a velocidade dos seus zagueiros',
    '"Manter compacto" é melhor para defesas em bloco médio — reduz espaços entre linhas',
    'Ative "Avançar na Defesa" apenas se seus zagueiros tiverem velocidade 70+',
    'Não use "Cobertura de Laterais" se o adversário joga com pontas rápidos',
    'Pressão constante drena stamina — use "Balanceado" para a maioria dos jogos',
  ]

  const offensiveTips = [
    '"Correr para o Espaço" nos atacantes cria profundidade e abre espaços para passes em profundidade',
    '"Ficar entre Linhas" para CAMs — receba a bola nos espaços entre meia e zaga adversários',
    'Laterais com "Ficar Aberto" garantem opção de largura — essencial para times sem dribladores no meio',
    '"Ataque na Área" no striker secundário cria confusão na zaga adversária',
    '"Voltar para Defender" nos CMs ajuda em contra-ataques mas reduz presença ofensiva',
    'Use passe em profundidade (R1 + △ / RB + Y) quando o atacante iniciar a corrida',
  ]

  const gameplayTips = [
    'Não troque de jogador manualmente o tempo todo — use a troca assistida com R1/RB para ser mais rápido',
    'Conter (X/A) é mais eficiente que carrinho na maioria das vezes — force o erro sem cometer falta',
    'Segure L2/LT ao receber dá controle de bola superior — essencial no terço final',
    'Finta de corpo (R1+R2 / RB+RT) é uma das mais úteis para criar espaço em velocidade',
    'Use o segundo atacante (R1/RB) para pressionar enquanto controla outro — defesa em pressão dupla',
    'Cruzes cortadas (L1+△ / LB+Y) são mais úteis que cruzamentos tradicionais — encontre o CAM no corredor',
  ]

  function TipList({ items }: { items: string[] }) {
    return (
      <div className="space-y-3">
        {items.map((tip, i) => (
          <div
            key={i}
            className="flex gap-4 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5"
          >
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-emerald-500)]/15 text-xs font-bold text-[var(--color-emerald-400)]">
              {i + 1}
            </span>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-emerald-500)]/20 bg-[var(--color-emerald-500)]/5 px-3 py-1 text-xs text-[var(--color-emerald-400)] mb-4">
          <span className="size-1.5 rounded-full bg-[var(--color-emerald-400)] animate-pulse" />
          Guia Completo
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] flex items-center gap-3">
          <span className="text-[var(--color-emerald-400)]">📖</span> Guia de Táticas — EA FC 26
        </h1>
        <p className="mt-3 text-[var(--color-text-secondary)] text-lg leading-relaxed">
          Formações, instruções e dicas de gameplay para dominar o Pro Clubs competitivo.
        </p>
      </div>

      {/* FORMATIONS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span className="text-[var(--color-emerald-400)]">📐</span> Formações Mais Usadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formations.map((form) => (
            <div
              key={form.name}
              className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6 transition-all duration-200 hover:border-[var(--color-border-secondary)] hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[var(--color-emerald-400)] mb-2 font-mono">
                {form.name}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                {form.desc}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-emerald-400)] uppercase tracking-wider mb-2">Prós</h4>
                  <ul className="space-y-1">
                    {form.pros.map((pro, i) => (
                      <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1.5">
                        <span className="text-[var(--color-emerald-400)] mt-0.5">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-red-400)] uppercase tracking-wider mb-2">Contras</h4>
                  <ul className="space-y-1">
                    {form.cons.map((con, i) => (
                      <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1.5">
                        <span className="text-[var(--color-red-400)] mt-0.5">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEFENSIVE TIPS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span>🛡️</span> Instruções Defensivas
        </h2>
        <TipList items={defensiveTips} />
      </section>

      {/* OFFENSIVE TIPS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span>⚔️</span> Instruções Ofensivas
        </h2>
        <TipList items={offensiveTips} />
      </section>

      {/* GAMEPLAY TIPS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <span>🎮</span> Dicas de Gameplay
        </h2>
        <TipList items={gameplayTips} />
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-8 text-center">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Pronto para testar?</h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Escolha uma build e aplique essas táticas no seu próximo jogo.
        </p>
        <Link
          href="/ea-fc"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-emerald-500)] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-emerald-400)] hover:shadow-lg hover:shadow-emerald-500/20"
        >
          Ver Builds Disponíveis
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  )
}
