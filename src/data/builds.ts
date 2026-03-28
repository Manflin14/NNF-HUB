import type { Position } from '@/types'

export const positions: Position[] = [
  // ─── GOLEIRO ────────────────────────────────────────────────────────────────
  {
    slug: 'goleiro',
    label: 'Goleiro',
    codes: ['GK'],
    description: 'A última linha de defesa. Domina o gol com reflexos e posicionamento.',
    color: '#f59e0b',
    builds: [
      {
        id: 'gk-sweeper',
        name: 'Sweeper Keeper',
        archetype: 'Goleiro Moderno',
        description:
          'Goleiro que sai da área para interceptar passes longos e participar da construção de jogo. Alto reflexo e excelente com os pés.',
        positions: ['GK'],
        attributes: { pac: 72, sho: 45, pas: 75, dri: 72, def: 30, phy: 78 },
        playStyles: [
          { name: 'Sweeper', category: 'goalkeeper' },
          { name: 'Quick Reflexes', category: 'goalkeeper' },
          { name: 'Far Throw', category: 'goalkeeper' },
        ],
        heightRange: '185–192 cm',
        weightRange: '78–86 kg',
        skillMoves: 1,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: ['Alta mobilidade fora da área', 'Excelente com os pés', 'Intercepta passes longos'],
        cons: ['Posicionamento na linha pode falhar', 'Vulnerável a chutes de longe'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 42, sho: 25, pas: 44, dri: 42, def: 15, phy: 50 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba PHY e DRI para garantir saídas físicas e controle de bola nos pés desde cedo.',
              allocation: { pac: 2, sho: 0, pas: 2, dri: 5, def: 0, phy: 11 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Mobilidade', pointsGained: 22,
              focus: 'Invista em PAC e PAS para ampliar o raio de ação e qualidade de reposição.',
              allocation: { pac: 8, sho: 0, pas: 10, dri: 2, def: 0, phy: 2 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Continue subindo PAS e equilibre com DRI para dominar a bola sob pressão.',
              allocation: { pac: 4, sho: 0, pas: 9, dri: 8, def: 0, phy: 1 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Finalize PAC e distribua entre DRI e PHY para atingir o nível meta.',
              allocation: { pac: 10, sho: 5, pas: 5, dri: 8, def: 5, phy: 7 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Toque fino: complete PAS, PHY e SHO para o perfil completo de Sweeper.',
              allocation: { pac: 6, sho: 15, pas: 5, dri: 7, def: 10, phy: 7 },
            },
          ],
        },
      },
      {
        id: 'gk-classic',
        name: 'Goleiro Clássico',
        archetype: 'Guardião',
        description:
          'Estilo tradicional focado em defesas dentro da área. Reflexos e posicionamento excepcionais sem necessidade de sair do gol.',
        positions: ['GK'],
        attributes: { pac: 62, sho: 40, pas: 58, dri: 60, def: 35, phy: 82 },
        playStyles: [
          { name: 'Quick Reflexes', category: 'goalkeeper' },
          { name: 'Far Reach', category: 'goalkeeper' },
          { name: 'Cross Claimer', category: 'goalkeeper' },
        ],
        heightRange: '188–196 cm',
        weightRange: '82–90 kg',
        skillMoves: 1,
        weakFoot: 2,
        difficulty: 'Iniciante',
        pros: ['Excelente em 1v1', 'Sólido em cruzamentos', 'Simples de jogar'],
        cons: ['Limitado com os pés', 'Pouca contribuição na construção'],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 38, sho: 22, pas: 33, dri: 36, def: 18, phy: 55 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Priorize PHY para ganhar nas disputas aéreas e segurar cruzamentos.',
              allocation: { pac: 0, sho: 0, pas: 2, dri: 2, def: 4, phy: 12 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Solidez', pointsGained: 22,
              focus: 'Suba PHY e DEF para criar uma muralha dentro da área.',
              allocation: { pac: 2, sho: 2, pas: 4, dri: 4, def: 4, phy: 6 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PHY e inicie DRI para ter melhor controle de bola parada.',
              allocation: { pac: 4, sho: 4, pas: 6, dri: 4, def: 3, phy: 1 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba PAC e PAS para não ser um ponto fraco na saída de bola.',
              allocation: { pac: 10, sho: 4, pas: 6, dri: 8, def: 4, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC e SHO para ter o perfil completo de Guardião clássico.',
              allocation: { pac: 8, sho: 8, pas: 7, dri: 6, def: 2, phy: 8 },
            },
          ],
        },
      },
    ],
  },

  // ─── ZAGUEIRO ───────────────────────────────────────────────────────────────
  {
    slug: 'zagueiro',
    label: 'Zagueiro',
    codes: ['CB'],
    description: 'Pilar defensivo. Intercepta, desarma e inicia jogadas pela defesa.',
    color: '#3b82f6',
    builds: [
      {
        id: 'cb-physical',
        name: 'Zagueiro Físico',
        archetype: 'Muro',
        description:
          'Zagueiro imponente com força, altura e disputas aéreas dominantes. Praticamente intransponível no jogo aéreo.',
        positions: ['CB'],
        attributes: { pac: 72, sho: 42, pas: 65, dri: 58, def: 88, phy: 92 },
        playStyles: [
          { name: 'Aerial', category: 'defending' },
          { name: 'Bruiser', category: 'physical' },
          { name: 'Block', category: 'defending' },
        ],
        heightRange: '188–196 cm',
        weightRange: '84–95 kg',
        skillMoves: 1,
        weakFoot: 2,
        difficulty: 'Iniciante',
        pros: ['Domina o jogo aéreo', 'Difícil de tirar a bola', 'Ganha disputas físicas'],
        cons: ['Vulnerável a atacantes velozes', 'Pouca contribuição ofensiva'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 44, sho: 25, pas: 38, dri: 33, def: 55, phy: 60 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY primeiro — estabeleça sua presença física antes de qualquer coisa.',
              allocation: { pac: 0, sho: 0, pas: 0, dri: 0, def: 11, phy: 9 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Dominância', pointsGained: 22,
              focus: 'Continue subindo DEF e PHY. Você deve ser o mais forte da defesa.',
              allocation: { pac: 0, sho: 0, pas: 2, dri: 0, def: 12, phy: 8 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Finalize DEF e PHY. Adicione PAS para saída de bola limpa.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 2, def: 5, phy: 5 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Mobilidade', pointsGained: 23,
              focus: 'Suba PAC para não ser ultrapassado na velocidade por pontas.',
              allocation: { pac: 14, sho: 2, pas: 4, dri: 3, def: 0, phy: 0 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC e adicione DRI e SHO para dar profundidade ao perfil.',
              allocation: { pac: 14, sho: 15, pas: 11, dri: 20, def: 5, phy: 10 },
            },
          ],
        },
      },
      {
        id: 'cb-fast',
        name: 'Zagueiro Veloz',
        archetype: 'Líbero',
        description:
          'Zagueiro ágil que usa a velocidade para cobrir espaços e perseguir atacantes. Ideal para linhas defensivas altas.',
        positions: ['CB'],
        attributes: { pac: 88, sho: 44, pas: 70, dri: 68, def: 85, phy: 78 },
        playStyles: [
          { name: 'Intercept', category: 'defending' },
          { name: 'Anticipate', category: 'defending' },
          { name: 'Jockey', category: 'defending' },
        ],
        heightRange: '180–188 cm',
        weightRange: '74–82 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: ['Cobre espaços rapidamente', 'Difícil de superar em velocidade', 'Bom saindo com a bola'],
        cons: ['Menos dominante no aéreo', 'Pode perder disputas físicas'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 55, sho: 26, pas: 42, dri: 40, def: 53, phy: 50 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC e DEF juntos — velocidade e capacidade de marcar desde o início.',
              allocation: { pac: 8, sho: 0, pas: 0, dri: 0, def: 8, phy: 4 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Velocidade', pointsGained: 22,
              focus: 'Maximize PAC para garantir que nenhum atacante escapa por velocidade.',
              allocation: { pac: 12, sho: 0, pas: 2, dri: 2, def: 4, phy: 2 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DEF e suba PHY para ganhar mais duelos físicos.',
              allocation: { pac: 4, sho: 0, pas: 4, dri: 4, def: 8, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba PAS e DRI para participar melhor da construção com a bola.',
              allocation: { pac: 4, sho: 0, pas: 10, dri: 8, def: 1, phy: 0 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI e PHY. Adicione SHO para finalizar em bolas paradas.',
              allocation: { pac: 5, sho: 18, pas: 12, dri: 14, def: 9, phy: 20 },
            },
          ],
        },
      },
    ],
  },

  // ─── LATERAL ────────────────────────────────────────────────────────────────
  {
    slug: 'lateral',
    label: 'Lateral',
    codes: ['LB', 'RB'],
    description: 'Versátil nas duas fases. Ataca pela linha e protege as costas.',
    color: '#8b5cf6',
    builds: [
      {
        id: 'lb-offensive',
        name: 'Lateral Ofensivo',
        archetype: 'Ala Defensivo',
        description:
          'Lateral que sobe constantemente pela linha, cria superioridade numérica no ataque e cruza com precisão.',
        positions: ['LB', 'RB'],
        attributes: { pac: 90, sho: 68, pas: 80, dri: 80, def: 74, phy: 76 },
        playStyles: [
          { name: 'Technical', category: 'technical' },
          { name: 'Whipped Pass', category: 'attacking' },
          { name: 'Jockey', category: 'defending' },
        ],
        heightRange: '174–182 cm',
        weightRange: '68–76 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: ['Excelente sobreposição', 'Cruza com qualidade', 'Rápido na transição'],
        cons: ['Pode deixar espaço nas costas', 'Defensivamente arriscado'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 58, sho: 40, pas: 48, dri: 50, def: 44, phy: 48 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC e DRI para dominar a linha desde cedo e criar 1x1 ofensivos.',
              allocation: { pac: 8, sho: 0, pas: 2, dri: 6, def: 2, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Penetração', pointsGained: 22,
              focus: 'Continue PAC e comece PAS para cruzamentos mais qualificados.',
              allocation: { pac: 10, sho: 0, pas: 8, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Suba PAS e DRI. Você precisa criar com qualidade na fase de ataque.',
              allocation: { pac: 2, sho: 2, pas: 8, dri: 8, def: 2, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Equilíbrio', pointsGained: 23,
              focus: 'Complete DEF e PHY para não ser um buraco na fase defensiva.',
              allocation: { pac: 4, sho: 2, pas: 2, dri: 2, def: 8, phy: 5 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Finalize SHO e complete todos os atributos para o perfil completo.',
              allocation: { pac: 8, sho: 24, pas: 12, dri: 10, def: 16, phy: 21 },
            },
          ],
        },
      },
      {
        id: 'lb-defensive',
        name: 'Lateral Defensivo',
        archetype: 'Sentinela',
        description:
          'Foca na solidez defensiva. Intercepta, desarma e mantém a linha sem abrir espaços para o contra-ataque.',
        positions: ['LB', 'RB'],
        attributes: { pac: 82, sho: 50, pas: 70, dri: 68, def: 86, phy: 82 },
        playStyles: [
          { name: 'Intercept', category: 'defending' },
          { name: 'Slide Tackle', category: 'defending' },
          { name: 'Aerial', category: 'defending' },
        ],
        heightRange: '178–186 cm',
        weightRange: '74–82 kg',
        skillMoves: 2,
        weakFoot: 2,
        difficulty: 'Iniciante',
        pros: ['Muito seguro defensivamente', 'Bom no um contra um', 'Recupera bem a bola'],
        cons: ['Pouca participação ofensiva', 'Não cria tantas chances'],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 52, sho: 30, pas: 42, dri: 40, def: 54, phy: 52 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY como prioridade absoluta. Seja um muro na sua faixa.',
              allocation: { pac: 0, sho: 0, pas: 0, dri: 0, def: 12, phy: 8 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Marcação', pointsGained: 22,
              focus: 'Continue DEF e adicione PAC para perseguir pontas rápidos.',
              allocation: { pac: 8, sho: 0, pas: 0, dri: 0, def: 10, phy: 4 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Suba PHY e comece PAS para participar da saída de bola.',
              allocation: { pac: 4, sho: 0, pas: 8, dri: 4, def: 4, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Equilíbrio', pointsGained: 23,
              focus: 'Complete PAC e DRI para ter mobilidade defensiva nos 1x1.',
              allocation: { pac: 10, sho: 2, pas: 4, dri: 6, def: 1, phy: 0 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Finalize DRI, SHO e PAS para ter participação mínima no ataque.',
              allocation: { pac: 8, sho: 18, pas: 16, dri: 18, def: 5, phy: 16 },
            },
          ],
        },
      },
    ],
  },

  // ─── VOLANTE ────────────────────────────────────────────────────────────────
  {
    slug: 'volante',
    label: 'Volante',
    codes: ['CDM'],
    description: 'Filtro do meio-campo. Quebra jogadas, distribui e protege a defesa.',
    color: '#ef4444',
    builds: [
      {
        id: 'cdm-destroyer',
        name: 'Volante Destruidor',
        archetype: 'Pitbull',
        description:
          'Mediano que vive para recuperar a bola. Pressão intensa, desarmes agressivos e presença física dominante.',
        positions: ['CDM'],
        attributes: { pac: 80, sho: 58, pas: 72, dri: 72, def: 90, phy: 90 },
        playStyles: [
          { name: 'Press Proven', category: 'defending' },
          { name: 'Bruiser', category: 'physical' },
          { name: 'Intercept', category: 'defending' },
        ],
        heightRange: '182–190 cm',
        weightRange: '78–88 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Iniciante',
        pros: ['Recuperação de bola excepcional', 'Domina duelos físicos', 'Pressiona com eficiência'],
        cons: ['Criatividade limitada', 'Pouca contribuição ofensiva'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 50, sho: 34, pas: 44, dri: 44, def: 58, phy: 60 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY para dominar o meio fisicamente logo nos primeiros jogos.',
              allocation: { pac: 0, sho: 0, pas: 0, dri: 0, def: 12, phy: 8 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Pressão', pointsGained: 22,
              focus: 'Continue DEF e PHY. Adicione PAC para pressionar com eficiência.',
              allocation: { pac: 4, sho: 0, pas: 0, dri: 0, def: 12, phy: 6 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DEF e PHY. Comece PAS para distribuir após recuperar.',
              allocation: { pac: 4, sho: 0, pas: 8, dri: 4, def: 4, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Mobilidade', pointsGained: 23,
              focus: 'Suba PAC e DRI para cobrir mais campo e não perder bola sob pressão.',
              allocation: { pac: 12, sho: 2, pas: 4, dri: 5, def: 0, phy: 0 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI e SHO para ter finalização em chegadas na área.',
              allocation: { pac: 10, sho: 22, pas: 16, dri: 19, def: 4, phy: 14 },
            },
          ],
        },
      },
      {
        id: 'cdm-builder',
        name: 'Volante Construtor',
        archetype: 'Regista',
        description:
          'Volante inteligente que une a defesa ao ataque com passes precisos e visão de jogo ampla.',
        positions: ['CDM', 'CM'],
        attributes: { pac: 74, sho: 65, pas: 86, dri: 80, def: 80, phy: 80 },
        playStyles: [
          { name: 'Long Ball Pass', category: 'technical' },
          { name: 'Intercept', category: 'defending' },
          { name: 'Pinged Pass', category: 'technical' },
        ],
        heightRange: '180–188 cm',
        weightRange: '74–82 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: ['Excelente distribuição', 'Equilibra defesa e ataque', 'Passes longos precisos'],
        cons: ['Requer leitura de jogo avançada', 'Fisicamente menos dominante'],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 46, sho: 38, pas: 54, dri: 50, def: 50, phy: 52 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAS e DEF em paralelo — você precisa receber e distribuir com segurança.',
              allocation: { pac: 0, sho: 0, pas: 10, dri: 2, def: 6, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Construção', pointsGained: 22,
              focus: 'Continue PAS e suba DRI para segurar a bola sob pressão.',
              allocation: { pac: 0, sho: 0, pas: 12, dri: 6, def: 4, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS e equilibre DEF e PHY para manter a solidez defensiva.',
              allocation: { pac: 0, sho: 2, pas: 8, dri: 4, def: 6, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba PHY e PAC para ganhar mais duelos e cobrir distâncias.',
              allocation: { pac: 8, sho: 2, pas: 4, dri: 4, def: 4, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC, SHO e DRI. O Regista é completo no nível máximo.',
              allocation: { pac: 20, sho: 23, pas: 8, dri: 14, def: 10, phy: 25 },
            },
          ],
        },
      },
    ],
  },

  // ─── MEIA ────────────────────────────────────────────────────────────────────
  {
    slug: 'meia',
    label: 'Meia',
    codes: ['CM'],
    description: 'Motor do time. Controla o ritmo, ganha duelos e aparece na área.',
    color: '#10b981',
    builds: [
      {
        id: 'cm-box2box',
        name: 'Box-to-Box',
        archetype: 'Motor',
        description:
          'Meia completo que percorre todo o campo — defende atrás da bola e aparece na área para finalizar.',
        positions: ['CM'],
        attributes: { pac: 84, sho: 78, pas: 82, dri: 82, def: 78, phy: 84 },
        playStyles: [
          { name: 'Press Proven', category: 'defending' },
          { name: 'Trickster', category: 'technical' },
          { name: 'Finesse Shot', category: 'attacking' },
        ],
        heightRange: '178–186 cm',
        weightRange: '72–80 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: ['Extremamente versátil', 'Pode fazer de tudo', 'Aparece em vários momentos do jogo'],
        cons: ['Exige alto nível de decisão', 'Cansativo de jogar bem'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 52, sho: 48, pas: 52, dri: 52, def: 48, phy: 54 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PHY e PAC para ganhar duelos e cobrir distâncias. A base do B2B.',
              allocation: { pac: 6, sho: 0, pas: 2, dri: 2, def: 2, phy: 8 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Intensidade', pointsGained: 22,
              focus: 'Continue PAC e PHY. Adicione DEF para pressionar e recuperar bola.',
              allocation: { pac: 6, sho: 0, pas: 4, dri: 2, def: 6, phy: 4 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Equilíbrio total: suba PAS, DRI e SHO para ter criação e finalização.',
              allocation: { pac: 4, sho: 6, pas: 6, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Complete SHO e DRI. O B2B precisa finalizar quando chega na área.',
              allocation: { pac: 4, sho: 10, pas: 4, dri: 8, def: 4, phy: 3 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Finalize todos os atributos. Box-to-Box é a build mais equilibrada do jogo.',
              allocation: { pac: 12, sho: 14, pas: 14, dri: 12, def: 18, phy: 15 },
            },
          ],
        },
      },
      {
        id: 'cm-creative',
        name: 'Meia Criativo',
        archetype: 'Maestro',
        description:
          'Meia de toque apurado que controla o ritmo do jogo com dribles e passes em espaços reduzidos.',
        positions: ['CM', 'CAM'],
        attributes: { pac: 78, sho: 72, pas: 88, dri: 90, def: 65, phy: 72 },
        playStyles: [
          { name: 'Technical', category: 'technical' },
          { name: 'Trickster', category: 'technical' },
          { name: 'Whipped Pass', category: 'attacking' },
        ],
        heightRange: '172–180 cm',
        weightRange: '66–74 kg',
        skillMoves: 4,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: ['Criatividade excepcional', 'Difícil de marcar em espaços curtos', 'Cria chances do nada'],
        cons: ['Vulnerável a volantes físicos', 'Pouca contribuição defensiva'],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 48, sho: 44, pas: 56, dri: 58, def: 38, phy: 44 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DRI e PAS desde o início. Você quer criar e manter a bola.',
              allocation: { pac: 0, sho: 0, pas: 8, dri: 10, def: 0, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Criatividade', pointsGained: 22,
              focus: 'Continue DRI e PAS. Quanto mais cedo dominar o drible, melhor.',
              allocation: { pac: 2, sho: 0, pas: 10, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS. Comece PAC e SHO para ser ameaça em transição.',
              allocation: { pac: 6, sho: 4, pas: 8, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba PAC e SHO. O Maestro precisa ter explosão e finalizar quando abrir.',
              allocation: { pac: 10, sho: 8, pas: 4, dri: 4, def: 4, phy: 3 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Finalize DEF e PHY para aguentar pressão no meio sem perder a bola.',
              allocation: { pac: 12, sho: 16, pas: 2, dri: 4, def: 23, phy: 23 },
            },
          ],
        },
      },
    ],
  },

  // ─── MEIA-ATACANTE ──────────────────────────────────────────────────────────
  {
    slug: 'meia-atacante',
    label: 'Meia-Atacante',
    codes: ['CAM'],
    description: 'Ligação entre o meio e o ataque. Cria, finaliza e decide partidas.',
    color: '#f97316',
    builds: [
      {
        id: 'cam-trequartista',
        name: 'Trequartista',
        archetype: 'Fantasista',
        description:
          'Jogador criativo posicionado entre as linhas que recebe, gira e cria em espaços apertados com habilidade técnica superior.',
        positions: ['CAM'],
        attributes: { pac: 80, sho: 82, pas: 88, dri: 92, def: 45, phy: 68 },
        playStyles: [
          { name: 'Technical', category: 'technical' },
          { name: 'Trickster', category: 'technical' },
          { name: 'Finesse Shot', category: 'attacking' },
        ],
        heightRange: '170–178 cm',
        weightRange: '64–72 kg',
        skillMoves: 4,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: ['Dribla em espaços mínimos', 'Passes decisivos', 'Muito imprevisível'],
        cons: ['Fraco defensivamente', 'Depende de espaço entre linhas'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 50, sho: 52, pas: 56, dri: 60, def: 25, phy: 42 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DRI acima de tudo. O Trequartista vive do drible e da proteção de bola.',
              allocation: { pac: 0, sho: 2, pas: 4, dri: 12, def: 0, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Criatividade', pointsGained: 22,
              focus: 'Continue DRI e suba PAS para combinar com companheiros em espaços curtos.',
              allocation: { pac: 0, sho: 2, pas: 10, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS e DRI. Adicione SHO para ser ameaça real ao gol.',
              allocation: { pac: 2, sho: 8, pas: 8, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Finalização', pointsGained: 23,
              focus: 'SHO e PAC. O Trequartista precisa converter as chances que cria.',
              allocation: { pac: 10, sho: 10, pas: 2, dri: 1, def: 0, phy: 0 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC e PHY para aguentar os trombos da marcação.',
              allocation: { pac: 18, sho: 8, pas: 8, dri: 5, def: 20, phy: 24 },
            },
          ],
        },
      },
      {
        id: 'cam-shadow',
        name: 'Meia Sombra',
        archetype: 'Second Striker',
        description:
          'Meia-atacante que funciona como segundo centroavante. Aproveita espaços, finaliza com frieza e pressiona a defesa adversária.',
        positions: ['CAM'],
        attributes: { pac: 86, sho: 86, pas: 78, dri: 84, def: 52, phy: 76 },
        playStyles: [
          { name: 'Finesse Shot', category: 'attacking' },
          { name: 'Chip Shot', category: 'attacking' },
          { name: 'Press Proven', category: 'defending' },
        ],
        heightRange: '176–184 cm',
        weightRange: '70–78 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: ['Finalização precisa', 'Aparece na área constantemente', 'Pressiona bem'],
        cons: ['Menos criativo em passe', 'Depende de bolas na área'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 54, sho: 54, pas: 48, dri: 52, def: 30, phy: 48 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'SHO e PAC. Você vive de chegadas e finalizações, então maximize isso primeiro.',
              allocation: { pac: 6, sho: 10, pas: 0, dri: 2, def: 0, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Explosão', pointsGained: 22,
              focus: 'Continue PAC e SHO. Velocidade + finalização é sua identidade.',
              allocation: { pac: 10, sho: 8, pas: 2, dri: 2, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete SHO e suba DRI para receber e girar em espaços reduzidos.',
              allocation: { pac: 4, sho: 8, pas: 4, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'PHY e DRI para manter a bola e ganhar duelos antes de finalizar.',
              allocation: { pac: 4, sho: 4, pas: 4, dri: 8, def: 2, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC, PAS e DEF. O Meia Sombra deve ser completo no final.',
              allocation: { pac: 8, sho: 2, pas: 20, dri: 14, def: 20, phy: 25 },
            },
          ],
        },
      },
    ],
  },

  // ─── PONTA ──────────────────────────────────────────────────────────────────
  {
    slug: 'ponta',
    label: 'Ponta',
    codes: ['LW', 'RW'],
    description: 'Velocidade e habilidade nas alas. Dribla, cruza e corta para dentro.',
    color: '#06b6d4',
    builds: [
      {
        id: 'winger-dribbler',
        name: 'Ponta Driblador',
        archetype: 'Ala Clássico',
        description:
          'Extremo veloz que explora a profundidade pela linha lateral, supera defensores no 1v1 e cria chances com cruzamentos ou corte para dentro.',
        positions: ['LW', 'RW'],
        attributes: { pac: 95, sho: 74, pas: 78, dri: 92, def: 42, phy: 68 },
        playStyles: [
          { name: 'Technical', category: 'technical' },
          { name: 'Rapid', category: 'physical' },
          { name: 'Trickster', category: 'technical' },
        ],
        heightRange: '170–178 cm',
        weightRange: '62–70 kg',
        skillMoves: 4,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: ['Velocidade devastadora', 'Excelente no 1v1', 'Cria superioridade numérica'],
        cons: ['Fraco defensivamente', 'Pode ser isolado contra dupla marcação'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 62, sho: 44, pas: 48, dri: 60, def: 22, phy: 40 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC e DRI. Você precisa ser mais rápido e habilidoso que seu marcador desde o primeiro jogo.',
              allocation: { pac: 10, sho: 0, pas: 0, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Aceleração', pointsGained: 22,
              focus: 'Maximize PAC. Com 95 de PAC você vira o ponta mais explosivo do jogo.',
              allocation: { pac: 12, sho: 0, pas: 2, dri: 8, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DRI e suba PAS para criar com mais qualidade no último terço.',
              allocation: { pac: 5, sho: 2, pas: 7, dri: 8, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Finalização', pointsGained: 23,
              focus: 'SHO e PHY para converter os 1x1 que você cria com sua velocidade.',
              allocation: { pac: 4, sho: 10, pas: 5, dri: 2, def: 0, phy: 2 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PHY, SHO e adicione DEF básico para pressionar quando sem bola.',
              allocation: { pac: 2, sho: 18, pas: 16, dri: 4, def: 20, phy: 26 },
            },
          ],
        },
      },
      {
        id: 'winger-inverted',
        name: 'Ponta Invertido',
        archetype: 'Ala Cortador',
        description:
          'Extremo que joga no lado inverso ao pé dominante. Corta para o centro e finaliza com potência ou precisão.',
        positions: ['LW', 'RW'],
        attributes: { pac: 90, sho: 86, pas: 80, dri: 88, def: 44, phy: 72 },
        playStyles: [
          { name: 'Finesse Shot', category: 'attacking' },
          { name: 'Technical', category: 'technical' },
          { name: 'Rapid', category: 'physical' },
        ],
        heightRange: '173–181 cm',
        weightRange: '65–73 kg',
        skillMoves: 4,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: ['Finalização de fora da área', 'Imprevisível no 1v1', 'Ameaça real ao gol'],
        cons: ['Requer alto pé fraco', 'Pode perder profundidade pela linha'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 58, sho: 54, pas: 50, dri: 56, def: 24, phy: 44 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DRI e SHO. Você precisa cortar e finalizar, então treine isso desde cedo.',
              allocation: { pac: 4, sho: 8, pas: 0, dri: 8, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Corte', pointsGained: 22,
              focus: 'Continue SHO e DRI. Adicione PAC para ganhar espaço antes de cortar.',
              allocation: { pac: 6, sho: 8, pas: 0, dri: 8, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete SHO e suba PAC para ser ameaça em transição rápida.',
              allocation: { pac: 8, sho: 6, pas: 4, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'PAS e PHY. Combinações com companheiros e resistência nos duelos.',
              allocation: { pac: 8, sho: 4, pas: 8, dri: 2, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI, PHY e DEF para ter o perfil totalmente equilibrado.',
              allocation: { pac: 6, sho: 6, pas: 18, dri: 10, def: 20, phy: 27 },
            },
          ],
        },
      },
    ],
  },

  // ─── CENTROAVANTE ───────────────────────────────────────────────────────────
  {
    slug: 'centroavante',
    label: 'Centroavante',
    codes: ['ST'],
    description: 'Referência ofensiva. Finaliza, segura a bola e decide no momento certo.',
    color: '#ec4899',
    builds: [
      {
        id: 'st-target',
        name: 'Centroavante Target',
        archetype: 'Pivô',
        description:
          'Atacante de referência que segura a bola de costas para o gol, ganha no aéreo e cria espaços para os companheiros.',
        positions: ['ST'],
        attributes: { pac: 74, sho: 88, pas: 68, dri: 76, def: 40, phy: 94 },
        playStyles: [
          { name: 'Aerial', category: 'attacking' },
          { name: 'Bruiser', category: 'physical' },
          { name: 'Finesse Shot', category: 'attacking' },
        ],
        heightRange: '186–196 cm',
        weightRange: '82–94 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Iniciante',
        pros: ['Domina o aéreo', 'Segura a bola sob pressão', 'Cria espaço para outros'],
        cons: ['Menos ameaçador em transição rápida', 'Precisa de suporte'],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 46, sho: 56, pas: 40, dri: 46, def: 22, phy: 62 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PHY e SHO. Você precisa ser forte e converter as poucas chances que terá.',
              allocation: { pac: 0, sho: 8, pas: 0, dri: 2, def: 0, phy: 10 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Presença', pointsGained: 22,
              focus: 'Continue PHY e SHO. Com física alta você domina qualquer zagueiro.',
              allocation: { pac: 0, sho: 10, pas: 0, dri: 2, def: 0, phy: 10 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete SHO e PHY. Adicione DRI para receber e girar com qualidade.',
              allocation: { pac: 2, sho: 6, pas: 4, dri: 8, def: 0, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Mobilidade', pointsGained: 23,
              focus: 'PAC e DRI. Mesmo um pivô precisa de explosão para abrir espaço.',
              allocation: { pac: 10, sho: 4, pas: 4, dri: 4, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAS e PAC. O Pivô moderno participa do jogo coletivo.',
              allocation: { pac: 16, sho: 4, pas: 20, dri: 14, def: 18, phy: 9 },
            },
          ],
        },
      },
      {
        id: 'st-poacher',
        name: 'Centroavante Poacher',
        archetype: 'Matador',
        description:
          'Atacante oportunista que vive dentro da área. Antecipa cruzamentos e rebotes para finalizar com frieza.',
        positions: ['ST'],
        attributes: { pac: 88, sho: 92, pas: 65, dri: 82, def: 38, phy: 80 },
        playStyles: [
          { name: 'Finesse Shot', category: 'attacking' },
          { name: 'Chip Shot', category: 'attacking' },
          { name: 'Rapid', category: 'physical' },
        ],
        heightRange: '176–184 cm',
        weightRange: '72–80 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: ['Finalização clínica', 'Explosão para criar espaço', 'Eficaz em rebotes e cruzamentos'],
        cons: ['Pouco envolvimento no jogo coletivo', 'Depende de serviço'],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 56, sho: 60, pas: 38, dri: 52, def: 20, phy: 52 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'SHO e PAC. O Matador precisa converter e criar espaço com velocidade.',
              allocation: { pac: 8, sho: 12, pas: 0, dri: 0, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Explosão', pointsGained: 22,
              focus: 'Maximize SHO enquanto continua subindo PAC. Você vai virar um pesadelo.',
              allocation: { pac: 10, sho: 10, pas: 0, dri: 2, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete SHO e PAC. Adicione DRI para finalizar com mais variedade.',
              allocation: { pac: 4, sho: 8, pas: 0, dri: 8, def: 0, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'PHY e DRI. Você precisa resistir aos zagueiros e proteger a bola na área.',
              allocation: { pac: 6, sho: 2, pas: 2, dri: 8, def: 0, phy: 5 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PHY e adicione PAS. Um Poacher moderno também sai para combinar.',
              allocation: { pac: 4, sho: 0, pas: 25, dri: 12, def: 18, phy: 21 },
            },
          ],
        },
      },
    ],
  },
]

export function getPositionBySlug(slug: string): Position | undefined {
  return positions.find((p) => p.slug === slug)
}
