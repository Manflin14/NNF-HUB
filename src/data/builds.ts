import type { Position } from '@/types'

export const positions: Position[] = [

  // ─── GOLEIRO ─────────────────────────────────────────────────────────────────
  {
    slug: 'goleiro',
    label: 'Goleiro',
    codes: ['GK'],
    description: 'A última linha de defesa. Domina o gol com reflexos e posicionamento.',
    color: '#f59e0b',
    builds: [
      {
        id: 'gk-shot-stopper',
        name: 'Defensor Impassível',
        archetype: 'Parador de Chutes',
        description:
          'Goleiro clássico de área. Excelente em 1v1, defesas difíceis e reflexos rápidos. Signature Play Styles Far Reach+ e Footwork+ tornam este arquétipo o mais consistente no meta competitivo.',
        positions: ['GK'],
        attributes: { pac: 68, sho: 46, pas: 64, dri: 66, def: 32, phy: 82 },
        playStyles: [
          { name: 'Far Reach+',     category: 'goalkeeper' },
          { name: 'Footwork+',      category: 'goalkeeper' },
          { name: 'Cross Claimer',  category: 'goalkeeper' },
        ],
        heightRange: '190–200 cm',
        weightRange: '84–92 kg',
        skillMoves: 1,
        weakFoot: 2,
        difficulty: 'Iniciante',
        pros: [
          'Far Reach+ amplia o alcance em defesas difíceis',
          'Footwork+ ideal contra chutes rasteiros',
          'Dominante em cruzamentos com Cross Claimer',
          'Alta consistência em partidas competitivas',
        ],
        cons: [
          'Limitado com os pés — não contribui na saída de bola',
          'Menor mobilidade fora da área',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 40, sho: 26, pas: 38, dri: 40, def: 16, phy: 54 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Priorize PHY e DRI para ganhar cruzamentos e ter controle de bola parada.',
              allocation: { pac: 0, sho: 0, pas: 2, dri: 4, def: 2, phy: 12 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Reflexos', pointsGained: 22,
              focus: 'Suba DRI (GK Reflexes/Handling) e PAS para ter distribuição limpa com as mãos.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 10, def: 0, phy: 2 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Continue PAS e DRI. Far Reach+ começa a fazer diferença nesta fase.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 8, def: 2, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Finalize PHY e adicione PAC para saídas no espaço sem se expor demais.',
              allocation: { pac: 10, sho: 4, pas: 4, dri: 2, def: 0, phy: 3 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC e DRI. Invista em SHO para ter melhor colocação de bola.',
              allocation: { pac: 14, sho: 16, pas: 2, dri: 2, def: 12, phy: 9 },
            },
          ],
        },
      },
      {
        id: 'gk-sweeper-keeper',
        name: 'Goleiro Moderno',
        archetype: 'Goleiro-Líbero',
        description:
          'Goleiro que participa ativamente da construção de jogo. Sai da área para interceptar passes longos, inicia ataques e domina o espaço atrás da linha defensiva alta.',
        positions: ['GK'],
        attributes: { pac: 76, sho: 46, pas: 78, dri: 72, def: 30, phy: 74 },
        playStyles: [
          { name: 'Sweeper Keeper+', category: 'goalkeeper' },
          { name: '1v1 Close Down+', category: 'goalkeeper' },
          { name: 'Far Throw+',      category: 'goalkeeper' },
        ],
        heightRange: '185–193 cm',
        weightRange: '78–86 kg',
        skillMoves: 1,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Intercepta passes longos que passariam pela defesa',
          'Excelente com os pés — inicia jogadas',
          'Far Throw+ lança contra-ataques rápidos',
          'Ideal para times que jogam com linha alta',
        ],
        cons: [
          'Precisa de posicionamento apurado para sair no momento certo',
          'Vulnerável a lobinhos se sair mal',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 46, sho: 26, pas: 46, dri: 44, def: 14, phy: 48 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAS e DRI primeiro — seu valor está nos pés, não nas mãos.',
              allocation: { pac: 2, sho: 0, pas: 10, dri: 6, def: 0, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Mobilidade', pointsGained: 22,
              focus: 'Invista em PAC para ampliar o raio de ação fora da área com segurança.',
              allocation: { pac: 10, sho: 0, pas: 8, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS e suba DRI para dominar a bola sob pressão alta.',
              allocation: { pac: 4, sho: 0, pas: 8, dri: 8, def: 0, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Finalize PAC e suba PHY para ganhar disputas quando sair da área.',
              allocation: { pac: 10, sho: 2, pas: 4, dri: 2, def: 0, phy: 5 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PHY e adicione DEF/SHO para o perfil completo de libero.',
              allocation: { pac: 4, sho: 18, pas: 2, dri: 8, def: 16, phy: 17 },
            },
          ],
        },
      },
    ],
  },

  // ─── ZAGUEIRO ────────────────────────────────────────────────────────────────
  {
    slug: 'zagueiro',
    label: 'Zagueiro',
    codes: ['CB'],
    description: 'Pilar defensivo. Intercepta, desarma e inicia jogadas pela defesa.',
    color: '#3b82f6',
    builds: [
      {
        id: 'cb-engine',
        name: 'Zagueiro Versátil',
        archetype: 'Engrenagem',
        description:
          'O arquétipo mais meta para CB no EA FC 26. Intercept+, Jockey+ e Anticipate+ via especializações tornam este zagueiro brutalmente eficaz em qualquer sistema defensivo. Stamina incansável para pressionar a partida inteira.',
        positions: ['CB'],
        attributes: { pac: 74, sho: 50, pas: 76, dri: 68, def: 88, phy: 82 },
        playStyles: [
          { name: 'Intercept+',   category: 'defending' },
          { name: 'Jockey+',      category: 'defending' },
          { name: 'Anticipate+',  category: 'defending' },
        ],
        heightRange: '185–193 cm',
        weightRange: '78–86 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Intercept+ recupera bolas difíceis que outros perdem',
          'Stamina para pressionar do primeiro ao último minuto',
          'Versátil: funciona em linha de 4 ou 3 zagueiros',
          'Boa saída de bola pelo PAS elevado',
        ],
        cons: [
          'Menos dominante no jogo aéreo que o Boss',
          'PHY inferior a zagueiros mais físicos',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 46, sho: 28, pas: 46, dri: 40, def: 56, phy: 52 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY juntos — solidez defensiva é inegociável desde o início.',
              allocation: { pac: 0, sho: 0, pas: 2, dri: 0, def: 10, phy: 8 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Presença', pointsGained: 22,
              focus: 'Continue DEF e adicione PAS para participar da saída de bola.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 2, def: 8, phy: 2 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DEF e suba PAC para cobrir os espaços das costas.',
              allocation: { pac: 8, sho: 0, pas: 4, dri: 2, def: 6, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Mobilidade', pointsGained: 23,
              focus: 'Maximize PAC e PHY. Nenhum atacante passa por velocidade ou físico.',
              allocation: { pac: 12, sho: 0, pas: 2, dri: 4, def: 4, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI, PAS e adicione SHO para participar de bolas paradas.',
              allocation: { pac: 6, sho: 22, pas: 14, dri: 20, def: 4, phy: 17 },
            },
          ],
        },
      },
      {
        id: 'cb-boss',
        name: 'Zagueiro Dominante',
        archetype: 'Chefe',
        description:
          'Presença física avassaladora. Domina duelos aéreos e físicos com Bruiser+ e Aerial Fortress+. Ideal para equipes que precisam de um CB imponente que intimida qualquer centroavante.',
        positions: ['CB'],
        attributes: { pac: 64, sho: 52, pas: 62, dri: 60, def: 86, phy: 92 },
        playStyles: [
          { name: 'Bruiser+',        category: 'defending' },
          { name: 'Aerial Fortress+', category: 'defending' },
          { name: 'Slide Tackle+',   category: 'defending' },
        ],
        heightRange: '190–200 cm',
        weightRange: '86–96 kg',
        skillMoves: 1,
        weakFoot: 2,
        difficulty: 'Iniciante',
        pros: [
          'PHY 92 — imbatível em disputas físicas e aéreas',
          'Aerial Fortress+ neutraliza todo ataque pelo alto',
          'Slide Tackle+ eficaz em recuperações de emergência',
          'Intimidante para centroavantes físicos',
        ],
        cons: [
          'Velocidade limitada — vulnerável a pontas rápidas',
          'Pouca contribuição na saída de bola',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 38, sho: 30, pas: 36, dri: 34, def: 54, phy: 62 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PHY máximo primeiro — você é um muro, não um velocista.',
              allocation: { pac: 0, sho: 0, pas: 0, dri: 0, def: 8, phy: 12 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Dominância', pointsGained: 22,
              focus: 'Continue PHY e suba DEF para completar a base defensiva.',
              allocation: { pac: 0, sho: 0, pas: 2, dri: 0, def: 12, phy: 8 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Finalize DEF e adicione PAS mínimo para saída de bola aceitável.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 2, def: 6, phy: 4 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Compensação', pointsGained: 23,
              focus: 'Suba PAC para reduzir a desvantagem de velocidade.',
              allocation: { pac: 14, sho: 2, pas: 4, dri: 3, def: 0, phy: 0 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete PAC e adicione DRI e SHO para o perfil completo.',
              allocation: { pac: 10, sho: 20, pas: 12, dri: 21, def: 6, phy: 6 },
            },
          ],
        },
      },
    ],
  },

  // ─── LATERAL ─────────────────────────────────────────────────────────────────
  {
    slug: 'lateral',
    label: 'Lateral',
    codes: ['LB', 'RB'],
    description: 'Versátil nas duas fases. Sobe pela linha, cruza e fecha nos contra-ataques.',
    color: '#8b5cf6',
    builds: [
      {
        id: 'lb-marauder',
        name: 'Lateral Destruidor',
        archetype: 'Maroto',
        description:
          'O arquétipo meta para laterais no EA FC 26. Velocidade explosiva com Rapid+, qualidade de cruzamento com Whipped Pass+ e mobilidade com Quick Step+. Terroriza defensores pela linha e fecha bem nas transições.',
        positions: ['LB', 'RB'],
        attributes: { pac: 92, sho: 62, pas: 76, dri: 74, def: 78, phy: 78 },
        playStyles: [
          { name: 'Rapid+',        category: 'physical' },
          { name: 'Whipped Pass+', category: 'technical' },
          { name: 'Quick Step+',   category: 'technical' },
        ],
        heightRange: '175–183 cm',
        weightRange: '68–76 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'PAC 92 — um dos laterais mais rápidos do Pro Clubs',
          'Rapid+ dá vantagem decisiva em dribles e recuperações',
          'Whipped Pass+ cria oportunidades reais de gol',
          'Quick Step+ para driblar na linha',
        ],
        cons: [
          'DEF inferior a laterais mais defensivos',
          'Pode deixar espaço nas costas ao subir demais',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 60, sho: 36, pas: 46, dri: 46, def: 48, phy: 50 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC e DRI — sua velocidade é sua maior arma desde o primeiro jogo.',
              allocation: { pac: 10, sho: 0, pas: 2, dri: 6, def: 0, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Penetração', pointsGained: 22,
              focus: 'Continue PAC e inicie PAS para cruzamentos com qualidade.',
              allocation: { pac: 10, sho: 0, pas: 8, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS e DRI. A qualidade na fase ofensiva define sua utilidade.',
              allocation: { pac: 2, sho: 2, pas: 8, dri: 8, def: 2, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Equilíbrio', pointsGained: 23,
              focus: 'Suba DEF e PHY para não ser um buraco na fase defensiva.',
              allocation: { pac: 4, sho: 2, pas: 2, dri: 2, def: 8, phy: 5 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Finalize SHO e DEF para o perfil completo de lateral completo.',
              allocation: { pac: 6, sho: 22, pas: 10, dri: 8, def: 20, phy: 21 },
            },
          ],
        },
      },
      {
        id: 'lb-engine',
        name: 'Lateral Defensivo',
        archetype: 'Engrenagem',
        description:
          'Lateral equilibrado com foco defensivo. Stamina para cobrir a linha o jogo inteiro, Intercept+ para recuperar bolas e presença física para ganhar duelos nas costas.',
        positions: ['LB', 'RB'],
        attributes: { pac: 76, sho: 52, pas: 74, dri: 68, def: 84, phy: 80 },
        playStyles: [
          { name: 'Intercept+',  category: 'defending' },
          { name: 'Jockey+',     category: 'defending' },
          { name: 'Relentless+', category: 'physical' },
        ],
        heightRange: '178–186 cm',
        weightRange: '72–80 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'DEF 84 — extremamente sólido na fase defensiva',
          'Intercept+ recupera bolas nos momentos críticos',
          'Relentless+ mantém intensidade nos 90 minutos',
          'Bom equilíbrio para times que precisam de solidez atrás',
        ],
        cons: [
          'Menos impacto ofensivo que o Marauder',
          'Cruzamentos menos perigosos',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 48, sho: 28, pas: 44, dri: 40, def: 52, phy: 52 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY juntos — priorize a solidez defensiva.',
              allocation: { pac: 2, sho: 0, pas: 2, dri: 0, def: 8, phy: 8 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Equilíbrio', pointsGained: 22,
              focus: 'Suba PAC e PAS em paralelo para não ser lento demais.',
              allocation: { pac: 8, sho: 0, pas: 8, dri: 2, def: 4, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DEF e adicione DRI para ter presença com a bola.',
              allocation: { pac: 4, sho: 0, pas: 4, dri: 6, def: 8, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Finalize PAC e PAS para ter presença nas duas fases.',
              allocation: { pac: 8, sho: 2, pas: 8, dri: 4, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI, SHO e o PHY final para o perfil completo.',
              allocation: { pac: 6, sho: 24, pas: 8, dri: 16, def: 12, phy: 19 },
            },
          ],
        },
      },
    ],
  },

  // ─── VOLANTE ─────────────────────────────────────────────────────────────────
  {
    slug: 'volante',
    label: 'Volante',
    codes: ['CDM'],
    description: 'Escudo da defesa. Recupera bolas, distribui e dita o ritmo do jogo.',
    color: '#10b981',
    builds: [
      {
        id: 'cdm-recycler',
        name: 'Volante Caçador',
        archetype: 'Reciclador',
        description:
          'O arquétipo meta para CDM no EA FC 26. Intercept+, Press Proven+ e Pinged Pass+ via especializações criam um volante que vence duelos, resiste à pressão e distribui com qualidade. O pivô perfeito.',
        positions: ['CDM'],
        attributes: { pac: 72, sho: 66, pas: 84, dri: 74, def: 82, phy: 82 },
        playStyles: [
          { name: 'Intercept+',   category: 'defending' },
          { name: 'Press Proven+', category: 'technical' },
          { name: 'Pinged Pass+', category: 'technical' },
        ],
        heightRange: '180–188 cm',
        weightRange: '74–82 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Intercept+ recupera bolas em situações impossíveis',
          'Press Proven+ mantém a bola sob pressão adversária',
          'PAS 84 para distribuição segura em todas as direções',
          'PHY 82 para vencer disputas físicas no meio',
        ],
        cons: [
          'PAC moderado — não recupera erros com velocidade',
          'Não é o perfil mais criativo para jogos abertos',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 44, sho: 38, pas: 52, dri: 46, def: 50, phy: 54 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY — você precisa de solidez antes de distribuir.',
              allocation: { pac: 0, sho: 0, pas: 4, dri: 2, def: 8, phy: 6 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Distribuição', pointsGained: 22,
              focus: 'Suba PAS para ser o motor de distribuição da equipe.',
              allocation: { pac: 2, sho: 0, pas: 12, dri: 4, def: 4, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Continue PAS e adicione DEF para fechar o perfil defensivo.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 4, def: 6, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Equalize PAC e DRI para ter mais presença com a bola.',
              allocation: { pac: 8, sho: 2, pas: 4, dri: 6, def: 2, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO e DRI. Volante completo com capacidade de finalizar.',
              allocation: { pac: 16, sho: 26, pas: 4, dri: 12, def: 12, phy: 22 },
            },
          ],
        },
      },
      {
        id: 'cdm-maestro',
        name: 'Pivô Organizador',
        archetype: 'Maestro',
        description:
          'Volante de posse com visão de jogo excepcional. Tiki Taka+ e Pinged Pass+ tornam cada passe uma ameaça. Ideal para equipes que dominam a posse e precisam de um regista profundo.',
        positions: ['CDM'],
        attributes: { pac: 68, sho: 64, pas: 88, dri: 76, def: 74, phy: 72 },
        playStyles: [
          { name: 'Tiki Taka+',  category: 'technical' },
          { name: 'Pinged Pass+', category: 'technical' },
          { name: 'Anticipate+', category: 'defending' },
        ],
        heightRange: '178–186 cm',
        weightRange: '70–78 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: [
          'PAS 88 — melhor distribuição entre todos os volantes',
          'Tiki Taka+ para manter a posse sob pressão',
          'Visão de jogo para encontrar passes que outros não enxergam',
          'Anticipate+ para leitura defensiva preventiva',
        ],
        cons: [
          'Menos robusto fisicamente que o Recycler',
          'Requer companheiros que entendam o estilo de posse',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 42, sho: 36, pas: 56, dri: 48, def: 46, phy: 46 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAS e DRI — você é um maestro, comece distribuindo com qualidade.',
              allocation: { pac: 0, sho: 0, pas: 10, dri: 6, def: 2, phy: 2 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Visão', pointsGained: 22,
              focus: 'Continue PAS e adicione DEF para cobrir a posição defensiva.',
              allocation: { pac: 2, sho: 0, pas: 10, dri: 4, def: 6, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Suba DRI para dominar a bola e PHY para resistir à marcação.',
              allocation: { pac: 2, sho: 0, pas: 8, dri: 6, def: 2, phy: 4 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Mobilidade', pointsGained: 23,
              focus: 'Adicione PAC para não perder bolas por falta de mobilidade.',
              allocation: { pac: 10, sho: 2, pas: 4, dri: 4, def: 2, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI, SHO e finalize o perfil do regista com PHY sólido.',
              allocation: { pac: 12, sho: 28, pas: 0, dri: 8, def: 16, phy: 19 },
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
    description: 'Cobre o campo inteiro. Une defesa e ataque com criatividade e stamina.',
    color: '#06b6d4',
    builds: [
      {
        id: 'cm-maestro',
        name: 'Meia Organizador',
        archetype: 'Maestro',
        description:
          'O melhor blend de passe, mobilidade e cobertura defensiva para o CM no EA FC 26. Tiki Taka+, Pinged Pass+ e First Touch+ criam um meia que controla o ritmo e liga defesa ao ataque com excelência.',
        positions: ['CM'],
        attributes: { pac: 72, sho: 68, pas: 88, dri: 78, def: 72, phy: 72 },
        playStyles: [
          { name: 'Tiki Taka+',  category: 'technical' },
          { name: 'Pinged Pass+', category: 'technical' },
          { name: 'First Touch+', category: 'technical' },
        ],
        heightRange: '175–183 cm',
        weightRange: '68–76 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'PAS 88 — distribuição excepcional em todas as direções',
          'Tiki Taka+ para sequências de passes rápidos',
          'First Touch+ para controlar passes difíceis',
          'Equilíbrio entre defesa e criação',
        ],
        cons: [
          'Não é o perfil mais agressivo na recuperação de bolas',
          'SHO moderado para finalizações de longa distância',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 44, sho: 40, pas: 56, dri: 48, def: 44, phy: 44 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAS e DRI — você comanda o jogo, comece com a qualidade técnica.',
              allocation: { pac: 0, sho: 0, pas: 10, dri: 8, def: 2, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Criação', pointsGained: 22,
              focus: 'Continue PAS e adicione DEF para equilibrar as duas fases.',
              allocation: { pac: 2, sho: 0, pas: 10, dri: 4, def: 4, phy: 2 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS e suba PAC para ter mobilidade suficiente.',
              allocation: { pac: 8, sho: 0, pas: 6, dri: 4, def: 2, phy: 2 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba DRI e PHY para dominar a bola e resistir à marcação.',
              allocation: { pac: 4, sho: 2, pas: 4, dri: 8, def: 4, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO para poder finalizar de fora da área quando necessário.',
              allocation: { pac: 14, sho: 28, pas: 2, dri: 14, def: 16, phy: 23 },
            },
          ],
        },
      },
      {
        id: 'cm-recycler',
        name: 'Meia Dinâmico',
        archetype: 'Reciclador',
        description:
          'Meia box-to-box com foco em recuperação e transição. Intercept+ para roubar bolas e Pinged Pass+ para a distribuição rápida no contra-ataque. Essencial para times que jogam em transição.',
        positions: ['CM'],
        attributes: { pac: 74, sho: 66, pas: 82, dri: 72, def: 80, phy: 80 },
        playStyles: [
          { name: 'Intercept+',   category: 'defending' },
          { name: 'Press Proven+', category: 'technical' },
          { name: 'Relentless+',  category: 'physical' },
        ],
        heightRange: '178–186 cm',
        weightRange: '72–80 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Excelente na recuperação de bolas — Intercept+ no meio-campo',
          'Relentless+ para cobrir o campo todo sem parar',
          'Sólido no físico para ganhar duelos no meio',
          'Press Proven+ resiste à pressão adversária',
        ],
        cons: [
          'PAS inferior ao Maestro — menos criativo',
          'Não é o perfil ideal para times de posse',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 46, sho: 38, pas: 50, dri: 44, def: 50, phy: 52 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DEF e PHY — você precisa de solidez para ser eficaz no meio.',
              allocation: { pac: 0, sho: 0, pas: 2, dri: 2, def: 8, phy: 8 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Equilíbrio', pointsGained: 22,
              focus: 'PAS e PAC em paralelo para cobrir bem e distribuir depois.',
              allocation: { pac: 8, sho: 0, pas: 8, dri: 2, def: 4, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DEF e suba DRI para ter presença com a bola.',
              allocation: { pac: 4, sho: 0, pas: 6, dri: 6, def: 6, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Finalize PAC e adicione PHY para dominar pela linha.',
              allocation: { pac: 10, sho: 2, pas: 4, dri: 4, def: 2, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO e DRI para o perfil total de meia box-to-box.',
              allocation: { pac: 6, sho: 28, pas: 12, dri: 14, def: 10, phy: 19 },
            },
          ],
        },
      },
    ],
  },

  // ─── MEIA-ATACANTE ───────────────────────────────────────────────────────────
  {
    slug: 'meia-atacante',
    label: 'Meia-Atacante',
    codes: ['CAM'],
    description: 'O número 10. Cria oportunidades, finaliza e desequilibra entre linhas.',
    color: '#f97316',
    builds: [
      {
        id: 'cam-creator',
        name: 'Criador de Jogo',
        archetype: 'Criador',
        description:
          'O arquétipo meta para CAM. Incisive Pass+ e Inventive+ criam passes que desmontam até as defesas mais organizadas. Passador visionário especializado em infiltrações e bolas decisivas na última linha.',
        positions: ['CAM'],
        attributes: { pac: 80, sho: 74, pas: 90, dri: 82, def: 50, phy: 66 },
        playStyles: [
          { name: 'Incisive Pass+', category: 'attacking' },
          { name: 'Inventive+',     category: 'technical' },
          { name: 'Whipped Pass+',  category: 'technical' },
        ],
        heightRange: '170–178 cm',
        weightRange: '64–72 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: [
          'PAS 90 — distribuição de elite entre todos os CAMs',
          'Incisive Pass+ para passes verticais que rasgam defesas',
          'Inventive+ para bolas criativas em espaços reduzidos',
          'Alto impacto em assistências e chances criadas',
        ],
        cons: [
          'Perfil exige qualidade técnica alta para executar o estilo',
          'DEF baixo — precisa de proteção dos meias',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 50, sho: 44, pas: 58, dri: 52, def: 30, phy: 40 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAS e DRI — você cria, então comece com qualidade técnica.',
              allocation: { pac: 0, sho: 0, pas: 10, dri: 8, def: 2, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Visão', pointsGained: 22,
              focus: 'Continue PAS e adicione PAC para criar espaços com movimentação.',
              allocation: { pac: 8, sho: 0, pas: 10, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete PAS e suba DRI para dominar entre as linhas.',
              allocation: { pac: 4, sho: 2, pas: 8, dri: 6, def: 2, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba SHO para ser ameaça quando a defesa fecha os passes.',
              allocation: { pac: 4, sho: 10, pas: 4, dri: 4, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO e adicione PHY para resistir à marcação adversária.',
              allocation: { pac: 14, sho: 18, pas: 0, dri: 8, def: 16, phy: 25 },
            },
          ],
        },
      },
      {
        id: 'cam-magician',
        name: 'Meia-Atacante Técnico',
        archetype: 'Mágico',
        description:
          'CAM criativo com drible notável e finalização perigosa. Technical+ e Finesse Shot+ tornam cada situação 1v1 uma ameaça real. Pode criar e finalizar com igual eficiência.',
        positions: ['CAM'],
        attributes: { pac: 88, sho: 82, pas: 80, dri: 88, def: 44, phy: 64 },
        playStyles: [
          { name: 'Technical+',    category: 'technical' },
          { name: 'Finesse Shot+', category: 'attacking' },
          { name: 'First Touch+',  category: 'technical' },
        ],
        heightRange: '168–176 cm',
        weightRange: '60–68 kg',
        skillMoves: 4,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: [
          'DRI 88 — quase impossível de segurar em 1v1',
          'Technical+ para dribles rápidos em espaço reduzido',
          'Finesse Shot+ para finalizar em curva com precisão',
          'Dupla ameaça: cria e finaliza',
        ],
        cons: [
          'PAS inferior ao Creator para passes decisivos',
          'Exige alta habilidade individual para maximizar',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 56, sho: 50, pas: 50, dri: 56, def: 26, phy: 40 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'DRI e PAC — seu drible é sua arma principal, desenvolva cedo.',
              allocation: { pac: 8, sho: 0, pas: 2, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Técnica', pointsGained: 22,
              focus: 'Continue DRI e adicione SHO para se tornar ameaça dupla.',
              allocation: { pac: 4, sho: 8, pas: 4, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Complete DRI e suba PAS para distribuição em velocidade.',
              allocation: { pac: 4, sho: 4, pas: 8, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Suba SHO e adicione PAC para ser letal nas transições rápidas.',
              allocation: { pac: 8, sho: 10, pas: 4, dri: 0, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO e PHY. Perfil completo de meia atacante.',
              allocation: { pac: 16, sho: 10, pas: 12, dri: 10, def: 18, phy: 23 },
            },
          ],
        },
      },
    ],
  },

  // ─── PONTA ───────────────────────────────────────────────────────────────────
  {
    slug: 'ponta',
    label: 'Ponta',
    codes: ['LW', 'RW'],
    description: 'Explosivo pela linha. Driblador, veloz e decisivo na última ação.',
    color: '#ef4444',
    builds: [
      {
        id: 'winger-magician',
        name: 'Ponta Técnico',
        archetype: 'Mágico',
        description:
          'O arquétipo meta para pontas no EA FC 26. Technical+, Finesse Shot+ e Rapid tornam este jogador imprevisível: pode driblar para dentro e finalizar em curva ou abrir pela linha e cruzar. Extremamente versátil.',
        positions: ['LW', 'RW'],
        attributes: { pac: 91, sho: 83, pas: 76, dri: 88, def: 46, phy: 66 },
        playStyles: [
          { name: 'Technical+',    category: 'technical' },
          { name: 'Finesse Shot+', category: 'attacking' },
          { name: 'Rapid+',        category: 'physical' },
        ],
        heightRange: '165–175 cm',
        weightRange: '59–67 kg',
        skillMoves: 4,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: [
          'DRI 88 — virtuoso no 1v1 contra qualquer defensor',
          'Finesse Shot+ para finalizar em curva de qualquer ângulo',
          'Technical+ para dribles rápidos no espaço reduzido',
          'PAC 91 para superar defensores em velocidade',
        ],
        cons: [
          'DEF baixo — risco se o time perde a bola na transição',
          'Exige maestria para usar todo o potencial',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 58, sho: 52, pas: 46, dri: 56, def: 26, phy: 40 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC e DRI — velocidade e drible são o núcleo desta build.',
              allocation: { pac: 10, sho: 0, pas: 0, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Explosividade', pointsGained: 22,
              focus: 'Continue PAC e DRI. Você precisa dominar o espaço antes de finalizar.',
              allocation: { pac: 10, sho: 0, pas: 2, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Finalização', pointsGained: 22,
              focus: 'Adicione SHO para ser ameaça real na frente do gol.',
              allocation: { pac: 2, sho: 14, pas: 2, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Complete SHO e adicione PAS para cruzamentos e assistências.',
              allocation: { pac: 2, sho: 10, pas: 6, dri: 4, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete DRI e PHY. O ponta completo — veloz, técnico e decisivo.',
              allocation: { pac: 9, sho: 7, pas: 20, dri: 4, def: 20, phy: 25 },
            },
          ],
        },
      },
      {
        id: 'winger-spark',
        name: 'Ponta Velocista',
        archetype: 'Fagulha',
        description:
          'Pura velocidade e explosão. Rapid+ e Trickster+ criam um ponta que chega na linha de fundo antes que o lateral pisque. Ideal para cruzamentos rasteiros e transições rápidas.',
        positions: ['LW', 'RW'],
        attributes: { pac: 94, sho: 72, pas: 72, dri: 84, def: 44, phy: 64 },
        playStyles: [
          { name: 'Rapid+',    category: 'physical' },
          { name: 'Trickster+', category: 'technical' },
          { name: 'Quick Step+', category: 'technical' },
        ],
        heightRange: '163–173 cm',
        weightRange: '57–65 kg',
        skillMoves: 4,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'PAC 94 — um dos mais rápidos do Pro Clubs',
          'Rapid+ é devastador para ultrapassar laterais',
          'Trickster+ para fintas que confundem qualquer defensor',
          'Simples de usar: velocidade e linha de fundo',
        ],
        cons: [
          'SHO mais limitado — depende de cruzamentos',
          'Menos versátil que o Magician para finalizar',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 62, sho: 42, pas: 44, dri: 54, def: 24, phy: 40 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC máximo — sua velocidade é sua identidade, maximize primeiro.',
              allocation: { pac: 14, sho: 0, pas: 0, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Aceleração', pointsGained: 22,
              focus: 'Continue PAC e adicione DRI para dribles em velocidade.',
              allocation: { pac: 12, sho: 0, pas: 2, dri: 8, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'DRI e PAS para cruzamentos com qualidade após chegar na linha.',
              allocation: { pac: 4, sho: 2, pas: 8, dri: 8, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'SHO para ser opção de finalização quando a oportunidade aparecer.',
              allocation: { pac: 2, sho: 12, pas: 4, dri: 4, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO e adicione PHY para resistir nas disputas pela linha.',
              allocation: { pac: 0, sho: 16, pas: 14, dri: 4, def: 20, phy: 23 },
            },
          ],
        },
      },
    ],
  },

  // ─── CENTROAVANTE ────────────────────────────────────────────────────────────
  {
    slug: 'centroavante',
    label: 'Centroavante',
    codes: ['ST'],
    description: 'Artilheiro implacável. Define partidas com um toque, um giro ou um disparo.',
    color: '#ec4899',
    builds: [
      {
        id: 'st-finisher',
        name: 'Centroavante Clínico',
        archetype: 'Finalizador',
        description:
          'O arquétipo meta para ST no EA FC 26. Low Driven Shot+ continua sendo o chute mais eficaz contra goleiros. First Touch+ para controlar passes difíceis na área e Gamechanger+ para mudar partidas com uma jogada.',
        positions: ['ST'],
        attributes: { pac: 88, sho: 90, pas: 70, dri: 82, def: 40, phy: 74 },
        playStyles: [
          { name: 'Low Driven Shot+', category: 'attacking' },
          { name: 'First Touch+',     category: 'technical' },
          { name: 'Gamechanger+',     category: 'attacking' },
        ],
        heightRange: '178–186 cm',
        weightRange: '70–78 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'SHO 90 — finalizador mais eficaz do Pro Clubs',
          'Low Driven Shot+ é o chute mais difícil de defender',
          'First Touch+ para controlar bolas difíceis na área',
          'Gamechanger+ para situações decisivas',
        ],
        cons: [
          'DEF quase inexistente — puro atacante',
          'Precisa de bons meias para receber boas bolas',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 56, sho: 58, pas: 42, dri: 52, def: 22, phy: 46 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'SHO e DRI — você está aqui para marcar, comece com finalização.',
              allocation: { pac: 0, sho: 14, pas: 0, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Instinto', pointsGained: 22,
              focus: 'Continue SHO e adicione PAC para criar oportunidades em velocidade.',
              allocation: { pac: 8, sho: 10, pas: 0, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'DRI e PAC para driblar o último defensor antes de finalizar.',
              allocation: { pac: 10, sho: 4, pas: 2, dri: 6, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'PHY para ganhar as disputas físicas na área e proteger a bola.',
              allocation: { pac: 4, sho: 4, pas: 4, dri: 4, def: 0, phy: 7 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete todos os atributos. O artilheiro completo do Pro Clubs.',
              allocation: { pac: 10, sho: 0, pas: 22, dri: 10, def: 18, phy: 21 },
            },
          ],
        },
      },
      {
        id: 'st-magician',
        name: 'Falso 9 Técnico',
        archetype: 'Mágico',
        description:
          'Centroavante criativo que baixa para criar e desequilibra com drible. Technical+ e Finesse Shot+ tornam cada situação 1v1 uma ameaça. Ideal para times que jogam com o atacante como organizador.',
        positions: ['ST'],
        attributes: { pac: 92, sho: 84, pas: 78, dri: 88, def: 40, phy: 66 },
        playStyles: [
          { name: 'Technical+',    category: 'technical' },
          { name: 'Finesse Shot+', category: 'attacking' },
          { name: 'Rapid+',        category: 'physical' },
        ],
        heightRange: '173–181 cm',
        weightRange: '64–72 kg',
        skillMoves: 4,
        weakFoot: 3,
        difficulty: 'Avançado',
        pros: [
          'DRI 88 — pode criar do nada sem precisar de passe',
          'PAC 92 para explorar espaços nas costas da defesa',
          'Finesse Shot+ para finalizar em curva com alta precisão',
          'PAS 78 para criar oportunidades aos companheiros',
        ],
        cons: [
          'PHY baixo — perde disputas físicas com CBs físicos',
          'Perfil exige muita habilidade individual',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          baseAttributes: { pac: 60, sho: 52, pas: 48, dri: 56, def: 22, phy: 40 },
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'PAC e DRI — velocidade e drible definem este perfil desde o começo.',
              allocation: { pac: 10, sho: 0, pas: 0, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Explosividade', pointsGained: 22,
              focus: 'Continue PAC e DRI. Maximize a ameaça em velocidade.',
              allocation: { pac: 10, sho: 0, pas: 2, dri: 10, def: 0, phy: 0 },
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Finalização', pointsGained: 22,
              focus: 'SHO para se tornar ameaça real na frente do gol.',
              allocation: { pac: 2, sho: 14, pas: 2, dri: 4, def: 0, phy: 0 },
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Criação', pointsGained: 23,
              focus: 'Suba PAS para criar oportunidades quando a defesa fecha o espaço.',
              allocation: { pac: 2, sho: 6, pas: 10, dri: 4, def: 0, phy: 1 },
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete SHO e adicione PHY. O falso 9 completo.',
              allocation: { pac: 8, sho: 12, pas: 16, dri: 4, def: 18, phy: 25 },
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
