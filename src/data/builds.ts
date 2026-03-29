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
          'Goleiro clássico de área. Excelente em 1v1, defesas difíceis e reflexos rápidos. Play Styles Far Reach+ e Footwork+ tornam este arquétipo o mais consistente no meta competitivo.',
        positions: ['GK'],
        attributes: {
          kind: 'gk',
          acceleration: 68, sprintSpeed: 65,
          gkDiving: 88,  gkHandling: 86, gkKicking: 64,
          gkPositioning: 85, gkReflexes: 90,
          jumping: 78, strength: 80, stamina: 72, aggression: 60,
        },
        keyAttributes: ['gkDiving', 'gkReflexes', 'gkHandling', 'gkPositioning'],
        playStyles: [
          { name: 'Far Reach+',    category: 'goalkeeper' },
          { name: 'Footwork+',     category: 'goalkeeper' },
          { name: 'Cross Claimer', category: 'goalkeeper' },
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
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Invista em GK Diving e GK Reflexes para garantir defesas básicas logo nos primeiros níveis.',
              priorities: ['gkDiving', 'gkReflexes'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Reflexos', pointsGained: 22,
              focus: 'Evolua GK Handling para dominar cruzamentos e GK Positioning para sair bem nas bolas aéreas.',
              priorities: ['gkHandling', 'gkPositioning'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Continue subindo GK Reflexes e GK Diving. Ative Far Reach+ com o nível de atributo exigido.',
              priorities: ['gkReflexes', 'gkDiving'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Refinamento', pointsGained: 23,
              focus: 'Finalize GK Positioning e comece a investir em Força e Salto para disputas físicas.',
              priorities: ['gkPositioning', 'jumping', 'strength'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Distribua os pontos restantes entre GK Handling e Resistência para manter alto nível até o fim.',
              priorities: ['gkHandling', 'stamina'],
            },
          ],
        },
      },

      {
        id: 'gk-sweeper-keeper',
        name: 'Goleiro Moderno',
        archetype: 'Goleiro-Líbero',
        description:
          'Goleiro que participa ativamente da construção de jogo. Sai da área para interceptar passes longos, inicia ataques e domina o espaço atrás de uma linha defensiva alta.',
        positions: ['GK'],
        attributes: {
          kind: 'gk',
          acceleration: 76, sprintSpeed: 74,
          gkDiving: 82,  gkHandling: 80, gkKicking: 82,
          gkPositioning: 84, gkReflexes: 84,
          jumping: 72, strength: 76, stamina: 78, aggression: 55,
        },
        keyAttributes: ['gkKicking', 'acceleration', 'sprintSpeed', 'gkPositioning'],
        playStyles: [
          { name: 'Sweeper Keeper+', category: 'goalkeeper' },
          { name: 'Deflector+',      category: 'goalkeeper' },
          { name: 'Far Throw',       category: 'goalkeeper' },
        ],
        heightRange: '185–195 cm',
        weightRange: '80–88 kg',
        skillMoves: 1,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Sweeper Keeper+ cobre o espaço atrás da defesa alta',
          'GK Kicking alto para lançamentos longos em transição rápida',
          'Mais veloz que o Parador — consegue interceptar bolas longas',
          'Excelente para times que jogam com linha alta',
        ],
        cons: [
          'Requer comunicação constante com a defesa',
          'Sair da área mal-executado é risco de gol',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Priorize Aceleração e Vel. Sprint para conseguir sair da área com segurança desde cedo.',
              priorities: ['acceleration', 'sprintSpeed'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Distribuição', pointsGained: 22,
              focus: 'Suba GK Kicking para lançamentos precisos e GK Positioning para cobrir o espaço.',
              priorities: ['gkKicking', 'gkPositioning'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Reflexos', pointsGained: 22,
              focus: 'Equilibre GK Reflexes e GK Diving para não sacrificar as defesas dentro da área.',
              priorities: ['gkReflexes', 'gkDiving'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Solidez', pointsGained: 23,
              focus: 'Complete GK Handling para dominar cruzamentos e adicione Resistência para alta intensidade.',
              priorities: ['gkHandling', 'stamina'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Distribua entre Aceleração e Força para garantir saídas físicas de bola.',
              priorities: ['acceleration', 'strength'],
            },
          ],
        },
      },
    ],
  },

  // ─── ZAGUEIRO ─────────────────────────────────────────────────────────────────
  {
    slug: 'zagueiro',
    label: 'Zagueiro',
    codes: ['CB'],
    description: 'Defensor central. Corta ataques, ganha duelos aéreos e inicia a saída de bola.',
    color: '#3b82f6',
    builds: [
      {
        id: 'cb-engine',
        name: 'Zagueiro Dinâmico',
        archetype: 'Engrenagem',
        description:
          'Defensor central com alto ritmo. Cobre o espaço com velocidade, sai bem na bola e é ideal para ligas com atacantes rápidos. Jogo posicional e antecipação são seus maiores trunfos.',
        positions: ['CB'],
        attributes: {
          kind: 'outfield',
          acceleration: 78, sprintSpeed: 80,
          agility: 68, balance: 65, reactions: 76, ballControl: 68, dribbling: 66, composure: 72,
          attPosition: 50, finishing: 48, shotPower: 65, longShots: 52, volleys: 45, penalties: 52,
          vision: 62, crossing: 58, fkAccuracy: 55, shortPass: 72, longPass: 74, curve: 55,
          interceptions: 82, headingAccuracy: 80, defAwareness: 84, standTackle: 82, slideTackle: 78,
          jumping: 78, strength: 80, stamina: 82, aggression: 76,
        },
        keyAttributes: ['acceleration', 'sprintSpeed', 'defAwareness', 'standTackle'],
        playStyles: [
          { name: 'Anticipate',   category: 'defending' },
          { name: 'Block',        category: 'defending' },
          { name: 'Jockey+',      category: 'defending' },
        ],
        heightRange: '183–190 cm',
        weightRange: '78–86 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Velocidade permite cobrir espaço e perseguir atacantes velozes',
          'Bom passe longo para iniciar jogadas',
          'Resistência elevada para partidas de alta intensidade',
          'Jockey+ dificulta dribles em 1v1',
        ],
        cons: [
          'Menos físico que o Chefe — perde duelos de força',
          'Cabecear inferior ao arquétipo Boss',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Def. Awareness e Carrinho em Pé para começar a fazer diferença nas marcações.',
              priorities: ['defAwareness', 'standTackle'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Ritmo', pointsGained: 22,
              focus: 'Invista em Aceleração e Vel. Sprint para acompanhar atacantes rápidos nas costas da defesa.',
              priorities: ['acceleration', 'sprintSpeed'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consolidação', pointsGained: 22,
              focus: 'Equilibre Interceptações e Cabecear para fechar os dois tipos de ameaça.',
              priorities: ['interceptions', 'headingAccuracy'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Saída de Bola', pointsGained: 23,
              focus: 'Suba Passe Longo para participar da construção e Resistência para aguentar a pressão alta.',
              priorities: ['longPass', 'stamina'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Força e Carrinho no Chão para fechar todas as situações defensivas.',
              priorities: ['strength', 'slideTackle'],
            },
          ],
        },
      },

      {
        id: 'cb-boss',
        name: 'Muralha',
        archetype: 'Chefe',
        description:
          'Zagueiro físico e dominante. Imbatível em jogadas aéreas e duelos de força. A presença física deste arquétipo intimida atacantes e limpa a área em bolas paradas.',
        positions: ['CB'],
        attributes: {
          kind: 'outfield',
          acceleration: 65, sprintSpeed: 64,
          agility: 58, balance: 62, reactions: 74, ballControl: 65, dribbling: 60, composure: 70,
          attPosition: 52, finishing: 50, shotPower: 68, longShots: 55, volleys: 48, penalties: 52,
          vision: 58, crossing: 55, fkAccuracy: 52, shortPass: 70, longPass: 70, curve: 52,
          interceptions: 86, headingAccuracy: 88, defAwareness: 88, standTackle: 86, slideTackle: 80,
          jumping: 88, strength: 90, stamina: 78, aggression: 88,
        },
        keyAttributes: ['headingAccuracy', 'strength', 'jumping', 'interceptions', 'aggression'],
        playStyles: [
          { name: 'Aerial+',      category: 'defending' },
          { name: 'Bruiser',      category: 'physical' },
          { name: 'Block',        category: 'defending' },
        ],
        heightRange: '188–198 cm',
        weightRange: '84–94 kg',
        skillMoves: 2,
        weakFoot: 2,
        difficulty: 'Iniciante',
        pros: [
          'Cabecear e Salto dominantes em escanteios e cruzamentos',
          'Força física máxima — quase impossível de empurrar',
          'Agressividade alta cria pressão sobre o atacante',
          'Consistente e fácil de dominar para iniciantes',
        ],
        cons: [
          'Velocidade baixa — vulnerável a passes na profundidade',
          'Dificuldade em cobrir espaço contra time veloz',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Força e Cabecear para já começar a ganhar disputas físicas e bolas aéreas.',
              priorities: ['strength', 'headingAccuracy'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Marcação', pointsGained: 22,
              focus: 'Evolua Def. Awareness e Interceptações para antecipar as jogadas antes do duelo.',
              priorities: ['defAwareness', 'interceptions'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Aéreo', pointsGained: 22,
              focus: 'Maximize Salto e Agressividade para ser dominante em todos os duelos aéreos.',
              priorities: ['jumping', 'aggression'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Consolidação', pointsGained: 23,
              focus: 'Suba Carrinho em Pé e no Chão para fechar os dois tipos de abordagem defensiva.',
              priorities: ['standTackle', 'slideTackle'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Distribua entre Reações e Resistência para manter alto nível no segundo tempo.',
              priorities: ['reactions', 'stamina'],
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
    description: 'Lateral dinâmico. Contribui no ataque com cruzamentos e chega bem à linha de fundo.',
    color: '#06b6d4',
    builds: [
      {
        id: 'fb-marauder',
        name: 'Lateral Ofensivo',
        archetype: 'Maroto',
        description:
          'Lateral que se projeta constantemente ao ataque. Veloz, habilidoso e com cruzamentos precisos. O arquétipo ideal para sistemas que exploram as laterais como opção ofensiva constante.',
        positions: ['LB', 'RB'],
        attributes: {
          kind: 'outfield',
          acceleration: 86, sprintSpeed: 88,
          agility: 80, balance: 76, reactions: 78, ballControl: 78, dribbling: 80, composure: 72,
          attPosition: 68, finishing: 65, shotPower: 70, longShots: 64, volleys: 58, penalties: 60,
          vision: 72, crossing: 80, fkAccuracy: 68, shortPass: 74, longPass: 72, curve: 74,
          interceptions: 72, headingAccuracy: 65, defAwareness: 70, standTackle: 72, slideTackle: 74,
          jumping: 72, strength: 72, stamina: 82, aggression: 74,
        },
        keyAttributes: ['acceleration', 'sprintSpeed', 'crossing', 'dribbling'],
        playStyles: [
          { name: 'Whipped Pass+', category: 'technical' },
          { name: 'Rapid',         category: 'attacking' },
          { name: 'Slide Tackle',  category: 'defending' },
        ],
        heightRange: '174–182 cm',
        weightRange: '70–78 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Velocidade explosiva para ultrapassar o adversário pela linha lateral',
          'Cruzamento alto com Whipped Pass+ cria oportunidades constantes',
          'Habilidoso o suficiente para driblar antes de cruzar',
          'Resistência boa para o vai-e-vem da posição',
        ],
        cons: [
          'Defesa menos sólida que o Engrenagem',
          'Requer jogador com visão tática para subir na hora certa',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Aceleração e Vel. Sprint para já começar a explorar o espaço pelos flancos.',
              priorities: ['acceleration', 'sprintSpeed'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Cruzamento', pointsGained: 22,
              focus: 'Evolua Cruzamento e Curva para gerar chances reais de gol a partir do flancos.',
              priorities: ['crossing', 'curve'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Habilidade', pointsGained: 22,
              focus: 'Suba Dribles e Agilidade para ter mais opções ao entrar na área ou ao pressionar pela lateral.',
              priorities: ['dribbling', 'agility'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Defensivo', pointsGained: 23,
              focus: 'Invista em Def. Awareness e Carrinho no Chão para não deixar espaço nas costas.',
              priorities: ['defAwareness', 'slideTackle'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Resistência e Passe Curto para ter volume de jogo do início ao fim.',
              priorities: ['stamina', 'shortPass'],
            },
          ],
        },
      },

      {
        id: 'fb-engine',
        name: 'Lateral Box-to-Box',
        archetype: 'Engrenagem',
        description:
          'Lateral equilibrado entre ataque e defesa. Alta resistência para percorrer a linha o jogo todo, bom passe para iniciar jogadas e defesa competente para cobrir o flanco.',
        positions: ['LB', 'RB'],
        attributes: {
          kind: 'outfield',
          acceleration: 82, sprintSpeed: 84,
          agility: 74, balance: 72, reactions: 78, ballControl: 74, dribbling: 74, composure: 70,
          attPosition: 62, finishing: 58, shotPower: 68, longShots: 60, volleys: 55, penalties: 58,
          vision: 68, crossing: 70, fkAccuracy: 62, shortPass: 76, longPass: 74, curve: 64,
          interceptions: 76, headingAccuracy: 72, defAwareness: 78, standTackle: 76, slideTackle: 74,
          jumping: 74, strength: 74, stamina: 88, aggression: 72,
        },
        keyAttributes: ['stamina', 'acceleration', 'sprintSpeed', 'shortPass'],
        playStyles: [
          { name: 'Jockey+',       category: 'defending' },
          { name: 'Rapid',         category: 'attacking' },
          { name: 'Long Ball Pass', category: 'technical' },
        ],
        heightRange: '175–183 cm',
        weightRange: '72–80 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Iniciante',
        pros: [
          'Resistência máxima — nunca para no 90+',
          'Equilibrado entre ataque e defesa',
          'Boa saída de bola com Passe Curto e Longo',
          'Fácil de jogar para qualquer nível',
        ],
        cons: [
          'Cruzamento menos perigoso que o Maroto',
          'Menos habilidoso para situações de 1v1 ofensivo',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Priorize Resistência para aguentar o ritmo intenso da posição desde o início.',
              priorities: ['stamina'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Ritmo', pointsGained: 22,
              focus: 'Suba Aceleração e Vel. Sprint para cobrir o flanco com segurança nas transições.',
              priorities: ['acceleration', 'sprintSpeed'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Defensivo', pointsGained: 22,
              focus: 'Evolua Def. Awareness e Carrinho em Pé para ser mais consistente defensivamente.',
              priorities: ['defAwareness', 'standTackle'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Passe', pointsGained: 23,
              focus: 'Invista em Passe Curto e Longo para contribuir na saída de bola do time.',
              priorities: ['shortPass', 'longPass'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Interceptações e Reações para fechar o perfil completo do lateral equilibrado.',
              priorities: ['interceptions', 'reactions'],
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
    description: 'Pivô defensivo. Protege a defesa, recupera a bola e inicia a construção de jogo.',
    color: '#8b5cf6',
    builds: [
      {
        id: 'cdm-recycler',
        name: 'Volante Destruidor',
        archetype: 'Reciclador',
        description:
          'Especialista em recuperação de bola. Posicionamento defensivo impecável, interceptações e boa saída de bola com passes curtos. O elo entre defesa e meio-campo.',
        positions: ['CDM'],
        attributes: {
          kind: 'outfield',
          acceleration: 74, sprintSpeed: 74,
          agility: 72, balance: 70, reactions: 80, ballControl: 78, dribbling: 74, composure: 78,
          attPosition: 62, finishing: 58, shotPower: 68, longShots: 62, volleys: 55, penalties: 58,
          vision: 80, crossing: 62, fkAccuracy: 65, shortPass: 84, longPass: 80, curve: 68,
          interceptions: 84, headingAccuracy: 72, defAwareness: 84, standTackle: 80, slideTackle: 76,
          jumping: 74, strength: 76, stamina: 84, aggression: 78,
        },
        keyAttributes: ['shortPass', 'interceptions', 'defAwareness', 'stamina'],
        playStyles: [
          { name: 'Intercept+',   category: 'defending' },
          { name: 'Jockey+',      category: 'defending' },
          { name: 'Long Ball Pass', category: 'technical' },
        ],
        heightRange: '180–188 cm',
        weightRange: '76–84 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Iniciante',
        pros: [
          'Intercept+ faz o volante "sugar" a bola nas transições adversárias',
          'Excelente para recuperar bola e sair jogando limpo',
          'Resistência para cobrir o campo do início ao fim',
          'Fácil de operar — foca em marcar e passar',
        ],
        cons: [
          'Pouca contribuição ofensiva direta',
          'Menos criativo do que o Maestro',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Def. Awareness e Interceptações para começar a dominar o miolo de campo.',
              priorities: ['defAwareness', 'interceptions'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Passe', pointsGained: 22,
              focus: 'Evolua Passe Curto para fazer a saída de bola limpa após cada recuperação.',
              priorities: ['shortPass', 'reactions'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Resistência', pointsGained: 22,
              focus: 'Invista em Resistência e Agressividade para manter intensidade defensiva nos 90 minutos.',
              priorities: ['stamina', 'aggression'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Carrinho', pointsGained: 23,
              focus: 'Complete Carrinho em Pé e no Chão para ter todas as ferramentas defensivas disponíveis.',
              priorities: ['standTackle', 'slideTackle'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Distribua entre Passe Longo e Visão para acrescentar uma dimensão criativa ao perfil.',
              priorities: ['longPass', 'vision'],
            },
          ],
        },
      },

      {
        id: 'cdm-maestro',
        name: 'Volante Construtor',
        archetype: 'Maestro',
        description:
          'Volante de posse. Controla o ritmo do jogo com passe curto e longo precisos, visão elevada e bom controle de bola. Ideal para times que dominam a posse e saem jogando desde a defesa.',
        positions: ['CDM'],
        attributes: {
          kind: 'outfield',
          acceleration: 72, sprintSpeed: 72,
          agility: 74, balance: 72, reactions: 82, ballControl: 82, dribbling: 78, composure: 82,
          attPosition: 68, finishing: 62, shotPower: 72, longShots: 68, volleys: 60, penalties: 62,
          vision: 86, crossing: 72, fkAccuracy: 72, shortPass: 88, longPass: 84, curve: 74,
          interceptions: 76, headingAccuracy: 68, defAwareness: 78, standTackle: 72, slideTackle: 68,
          jumping: 70, strength: 72, stamina: 80, aggression: 68,
        },
        keyAttributes: ['shortPass', 'longPass', 'vision', 'ballControl'],
        playStyles: [
          { name: 'Long Ball Pass+', category: 'technical' },
          { name: 'Incisive Pass',   category: 'technical' },
          { name: 'Intercept',       category: 'defending' },
        ],
        heightRange: '178–186 cm',
        weightRange: '74–82 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Passe Curto e Longo de elite para orquestrar o jogo',
          'Visão para enxergar passes que outros não veem',
          'Long Ball Pass+ abre a defesa adversária com lançamentos precisos',
          'Controle de bola alto facilita manter a posse sob pressão',
        ],
        cons: [
          'Menos eficiente na marcação que o Reciclador',
          'Requer tomada de decisão rápida do jogador',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Priorize Passe Curto e Controle de Bola para já dominar as trocas de passe no início.',
              priorities: ['shortPass', 'ballControl'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Visão', pointsGained: 22,
              focus: 'Suba Visão e Passe Longo para começar a abrir espaços com lançamentos precisos.',
              priorities: ['vision', 'longPass'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Consistência', pointsGained: 22,
              focus: 'Evolua Reações e Compostura para manter a qualidade do passe sob alta pressão.',
              priorities: ['reactions', 'composure'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Defensivo', pointsGained: 23,
              focus: 'Invista em Def. Awareness e Interceptações para equilibrar o perfil.',
              priorities: ['defAwareness', 'interceptions'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Dribles e Agilidade para ter opções ao sair de pressão em espaços reduzidos.',
              priorities: ['dribbling', 'agility'],
            },
          ],
        },
      },
    ],
  },

  // ─── MEIA ─────────────────────────────────────────────────────────────────────
  {
    slug: 'meia',
    label: 'Meia',
    codes: ['CM'],
    description: 'Meia box-to-box. Equilibra criação de jogo e cobertura defensiva no meio-campo.',
    color: '#10b981',
    builds: [
      {
        id: 'cm-maestro',
        name: 'Maestro do Meio',
        archetype: 'Maestro',
        description:
          'Meia criativo que controla o jogo com passe, visão e dribles. Conecta defesa e ataque com passes inteligentes e é capaz de chegar à área nos momentos certos.',
        positions: ['CM'],
        attributes: {
          kind: 'outfield',
          acceleration: 74, sprintSpeed: 74,
          agility: 78, balance: 76, reactions: 84, ballControl: 84, dribbling: 82, composure: 82,
          attPosition: 70, finishing: 66, shotPower: 72, longShots: 70, volleys: 64, penalties: 64,
          vision: 86, crossing: 74, fkAccuracy: 72, shortPass: 88, longPass: 82, curve: 76,
          interceptions: 72, headingAccuracy: 66, defAwareness: 72, standTackle: 68, slideTackle: 64,
          jumping: 68, strength: 70, stamina: 82, aggression: 66,
        },
        keyAttributes: ['shortPass', 'vision', 'dribbling', 'ballControl', 'reactions'],
        playStyles: [
          { name: 'Incisive Pass+', category: 'technical' },
          { name: 'Tiki Taka',      category: 'technical' },
          { name: 'First Touch',    category: 'technical' },
        ],
        heightRange: '176–184 cm',
        weightRange: '72–80 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Incisive Pass+ cria oportunidades com passes filtrados precisos',
          'Controle de bola e dribles para sair de pressão',
          'Visão elevada enxerga jogadores em posições avançadas',
          'Resistência boa para o vai-e-vem do meio-campo',
        ],
        cons: [
          'Marcação limitada — não deve ser o principal marcador',
          'Requer boa leitura de jogo do jogador',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Passe Curto e Controle de Bola para estabelecer a base do jogo de posse.',
              priorities: ['shortPass', 'ballControl'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Criação', pointsGained: 22,
              focus: 'Evolua Visão e Reações para começar a criar oportunidades com passes certeiros.',
              priorities: ['vision', 'reactions'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Drible', pointsGained: 22,
              focus: 'Invista em Dribles e Agilidade para escapar da pressão adversária em espaços pequenos.',
              priorities: ['dribbling', 'agility'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Finalização', pointsGained: 23,
              focus: 'Suba Pos. Ataque e Chute Longo para ser uma ameaça quando chegar à área.',
              priorities: ['attPosition', 'longShots'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Compostura e Resistência para manter alto nível nos momentos decisivos.',
              priorities: ['composure', 'stamina'],
            },
          ],
        },
      },

      {
        id: 'cm-recycler',
        name: 'Meia Dinâmico',
        archetype: 'Reciclador',
        description:
          'Meia de motor incansável. Cobre distâncias enormes, recupera a bola e redistribui com simplicidade. Perfeito para equipes que precisam de intensidade e volume de jogo no meio.',
        positions: ['CM'],
        attributes: {
          kind: 'outfield',
          acceleration: 76, sprintSpeed: 76,
          agility: 74, balance: 72, reactions: 80, ballControl: 78, dribbling: 74, composure: 76,
          attPosition: 64, finishing: 60, shotPower: 70, longShots: 64, volleys: 58, penalties: 60,
          vision: 78, crossing: 65, fkAccuracy: 64, shortPass: 82, longPass: 78, curve: 66,
          interceptions: 82, headingAccuracy: 70, defAwareness: 82, standTackle: 78, slideTackle: 74,
          jumping: 72, strength: 74, stamina: 88, aggression: 76,
        },
        keyAttributes: ['interceptions', 'defAwareness', 'stamina', 'standTackle'],
        playStyles: [
          { name: 'Intercept+',  category: 'defending' },
          { name: 'Press Proven', category: 'defending' },
          { name: 'Tiki Taka',   category: 'technical' },
        ],
        heightRange: '178–186 cm',
        weightRange: '74–82 kg',
        skillMoves: 2,
        weakFoot: 3,
        difficulty: 'Iniciante',
        pros: [
          'Resistência máxima — cobre o campo inteiro por 90 minutos',
          'Intercept+ para recuperar bola nas transições adversárias',
          'Bom equilíbrio entre marcação e passe',
          'Simples de jogar — foca em pressionar e redistribuir',
        ],
        cons: [
          'Menos criativo que o Maestro em situações de último passe',
          'Menos ameaçador ofensivamente',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Resistência desde cedo — este arquétipo vive da intensidade durante os 90 minutos.',
              priorities: ['stamina'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Marcação', pointsGained: 22,
              focus: 'Evolua Def. Awareness e Interceptações para dominar a recuperação de bola no meio.',
              priorities: ['defAwareness', 'interceptions'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Passe', pointsGained: 22,
              focus: 'Invista em Passe Curto para sair jogando de forma limpa após cada recuperação.',
              priorities: ['shortPass', 'reactions'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Físico', pointsGained: 23,
              focus: 'Suba Força e Agressividade para ganhar duelos físicos no miolo de campo.',
              priorities: ['strength', 'aggression'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Carrinho em Pé e Visão para fechar o perfil do meia completo.',
              priorities: ['standTackle', 'vision'],
            },
          ],
        },
      },
    ],
  },

  // ─── MEIA-ATACANTE ─────────────────────────────────────────────────────────────
  {
    slug: 'meia-atacante',
    label: 'Meia-Atacante',
    codes: ['CAM'],
    description: 'Camisa 10. Cria jogadas, dribla e finaliza entre as linhas adversárias.',
    color: '#f59e0b',
    builds: [
      {
        id: 'cam-creator',
        name: 'Camisa 10 Clássico',
        archetype: 'Criador',
        description:
          'Meia-atacante focado em criação de jogo. Passes de gênio, visão sobrenatural e bola parada precisa. O "assist machine" que eleva o nível coletivo do time.',
        positions: ['CAM'],
        attributes: {
          kind: 'outfield',
          acceleration: 80, sprintSpeed: 78,
          agility: 84, balance: 80, reactions: 84, ballControl: 86, dribbling: 84, composure: 82,
          attPosition: 76, finishing: 74, shotPower: 74, longShots: 76, volleys: 68, penalties: 70,
          vision: 90, crossing: 80, fkAccuracy: 78, shortPass: 88, longPass: 82, curve: 82,
          interceptions: 58, headingAccuracy: 62, defAwareness: 58, standTackle: 52, slideTackle: 50,
          jumping: 66, strength: 66, stamina: 76, aggression: 58,
        },
        keyAttributes: ['vision', 'shortPass', 'dribbling', 'ballControl', 'curve'],
        playStyles: [
          { name: 'Incisive Pass+', category: 'technical' },
          { name: 'Tiki Taka',      category: 'technical' },
          { name: 'Finesse Shot',   category: 'attacking' },
        ],
        heightRange: '172–180 cm',
        weightRange: '68–76 kg',
        skillMoves: 4,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: [
          'Visão 90 — o mais alto entre os meias-atacantes',
          'Incisive Pass+ cria passes que partem defesas',
          'Finesse Shot para finalizar de fora da área com precisão',
          'Dribles e Curva para bola parada e cruzamentos fechados',
        ],
        cons: [
          'Defesa quase inexistente — não pode pressionar',
          'Exige alto nível de leitura de jogo para extrair o potencial máximo',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Maximize Visão e Passe Curto — toda a efetividade do arquétipo começa aqui.',
              priorities: ['vision', 'shortPass'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Criação', pointsGained: 22,
              focus: 'Suba Controle de Bola e Curva para criar mais opções de último passe e bola parada.',
              priorities: ['ballControl', 'curve'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Drible', pointsGained: 22,
              focus: 'Evolua Dribles e Agilidade para ser imparável em espaços reduzidos.',
              priorities: ['dribbling', 'agility'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Finalização', pointsGained: 23,
              focus: 'Invista em Chute Longo e Pos. Ataque para ser ameaça quando a defesa fecha o passe.',
              priorities: ['longShots', 'attPosition'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Passe Longo e Cruzamento para maximizar a variedade do jogo criativo.',
              priorities: ['longPass', 'crossing'],
            },
          ],
        },
      },

      {
        id: 'cam-magician',
        name: 'Driblador Imparável',
        archetype: 'Mágico',
        description:
          'Meia-atacante habilidoso. Vive de dribles, finalizações em espaço reduzido e explosão com a bola nos pés. O arquétipo mais elétrico para quem gosta de jogar individualmente.',
        positions: ['CAM'],
        attributes: {
          kind: 'outfield',
          acceleration: 84, sprintSpeed: 82,
          agility: 90, balance: 86, reactions: 86, ballControl: 88, dribbling: 90, composure: 84,
          attPosition: 80, finishing: 80, shotPower: 76, longShots: 78, volleys: 74, penalties: 72,
          vision: 84, crossing: 76, fkAccuracy: 72, shortPass: 84, longPass: 76, curve: 80,
          interceptions: 52, headingAccuracy: 58, defAwareness: 54, standTackle: 48, slideTackle: 46,
          jumping: 64, strength: 62, stamina: 74, aggression: 54,
        },
        keyAttributes: ['dribbling', 'agility', 'ballControl', 'finishing', 'reactions'],
        playStyles: [
          { name: 'Flair+',        category: 'technical' },
          { name: 'Finesse Shot+', category: 'attacking' },
          { name: 'First Touch',   category: 'technical' },
        ],
        heightRange: '170–178 cm',
        weightRange: '65–73 kg',
        skillMoves: 5,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: [
          'Dribles e Agilidade máximos — quase impossível de tirar a bola',
          'Flair+ e Finesse Shot+ para finalizações criativas',
          'Perfeito para quem gosta de jogar 1v1 constante',
          'Skill Moves 5 para movimentos avançados',
        ],
        cons: [
          'Defesa mínima — perde qualquer duelo defensivo',
          'Requer alto nível técnico do jogador para converter dribles em gols',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Dribles e Agilidade desde cedo — são os pilares deste arquétipo.',
              priorities: ['dribbling', 'agility'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Controle', pointsGained: 22,
              focus: 'Evolua Controle de Bola e Equilíbrio para manter a bola nos pés sob pressão.',
              priorities: ['ballControl', 'balance'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Finalização', pointsGained: 22,
              focus: 'Invista em Finalização e Pos. Ataque para converter a criação em gols reais.',
              priorities: ['finishing', 'attPosition'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Aceleração', pointsGained: 23,
              focus: 'Suba Aceleração e Reações para ter explosão nos primeiros metros após receber a bola.',
              priorities: ['acceleration', 'reactions'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Compostura e Chute Longo para ser ameaça em todas as situações ofensivas.',
              priorities: ['composure', 'longShots'],
            },
          ],
        },
      },
    ],
  },

  // ─── PONTA ────────────────────────────────────────────────────────────────────
  {
    slug: 'ponta',
    label: 'Ponta',
    codes: ['LW', 'RW'],
    description: 'Extremo veloz. Explora as laterais com velocidade e cria perigo com dribles e cruzamentos.',
    color: '#ec4899',
    builds: [
      {
        id: 'wing-magician',
        name: 'Ponta Driblador',
        archetype: 'Mágico',
        description:
          'Extremo habilidoso que vive de dribles em alta velocidade. Combina explosão de ritmo com habilidade técnica para criar superioridade individual e entrar na área com frequência.',
        positions: ['LW', 'RW'],
        attributes: {
          kind: 'outfield',
          acceleration: 90, sprintSpeed: 90,
          agility: 88, balance: 84, reactions: 84, ballControl: 86, dribbling: 90, composure: 80,
          attPosition: 78, finishing: 78, shotPower: 74, longShots: 74, volleys: 68, penalties: 68,
          vision: 80, crossing: 76, fkAccuracy: 70, shortPass: 78, longPass: 72, curve: 78,
          interceptions: 48, headingAccuracy: 58, defAwareness: 50, standTackle: 46, slideTackle: 44,
          jumping: 64, strength: 62, stamina: 78, aggression: 52,
        },
        keyAttributes: ['dribbling', 'agility', 'acceleration', 'sprintSpeed', 'ballControl'],
        playStyles: [
          { name: 'Rapid+',      category: 'attacking' },
          { name: 'Flair+',      category: 'technical' },
          { name: 'First Touch', category: 'technical' },
        ],
        heightRange: '170–178 cm',
        weightRange: '65–73 kg',
        skillMoves: 5,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: [
          'Velocidade máxima com dribles explosivos',
          'Rapid+ com Aceleração 90 é devastador em espaço aberto',
          'Skill Moves 5 para enganar laterais em 1v1',
          'Perfeito para quem gosta de jogar pelo flanco e entrar em diagonal',
        ],
        cons: [
          'Defesa mínima — não pode ser pressionado a marcar',
          'Força baixa dificulta manter a bola sob pressão física',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Priorize Aceleração e Vel. Sprint para explorar o espaço pelos flancos desde o início.',
              priorities: ['acceleration', 'sprintSpeed'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Drible', pointsGained: 22,
              focus: 'Suba Dribles e Agilidade para começar a ganhar os 1v1 com consistência.',
              priorities: ['dribbling', 'agility'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Controle', pointsGained: 22,
              focus: 'Evolua Controle de Bola e Equilíbrio para manter o toque fino em alta velocidade.',
              priorities: ['ballControl', 'balance'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Finalização', pointsGained: 23,
              focus: 'Invista em Finalização e Pos. Ataque para converter as chegadas em gols.',
              priorities: ['finishing', 'attPosition'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Compostura e Cruzamento para ter mais opções quando entrar na área.',
              priorities: ['composure', 'crossing'],
            },
          ],
        },
      },

      {
        id: 'wing-spark',
        name: 'Ponta Explosivo',
        archetype: 'Fagulha',
        description:
          'Extremo de velocidade pura. Usa o sprint para criar vantagem posicional, mas também tem finalização para assustar em boas chegadas. O mais direto e objetivo dos extremos.',
        positions: ['LW', 'RW'],
        attributes: {
          kind: 'outfield',
          acceleration: 92, sprintSpeed: 92,
          agility: 84, balance: 80, reactions: 86, ballControl: 82, dribbling: 84, composure: 78,
          attPosition: 80, finishing: 82, shotPower: 80, longShots: 76, volleys: 72, penalties: 68,
          vision: 76, crossing: 78, fkAccuracy: 68, shortPass: 74, longPass: 68, curve: 74,
          interceptions: 46, headingAccuracy: 60, defAwareness: 48, standTackle: 44, slideTackle: 42,
          jumping: 68, strength: 64, stamina: 82, aggression: 54,
        },
        keyAttributes: ['acceleration', 'sprintSpeed', 'finishing', 'attPosition', 'reactions'],
        playStyles: [
          { name: 'Rapid+',      category: 'attacking' },
          { name: 'Finesse Shot', category: 'attacking' },
          { name: 'Whipped Pass', category: 'technical' },
        ],
        heightRange: '172–180 cm',
        weightRange: '66–74 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Intermediário',
        pros: [
          'Aceleração e Sprint mais altos do jogo — deixa zagueiros para trás',
          'Finalização boa para converter as chegadas com qualidade',
          'Mais simples de jogar que o Mágico',
          'Resistência alta para sustentar o ritmo intenso durante a partida',
        ],
        cons: [
          'Menos habilidoso em espaços apertados que o Mágico',
          'Precisa de espaço para ser efetivo — sofre contra defesas compactas',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Maximize Aceleração e Vel. Sprint — a explosão de velocidade é a base de tudo.',
              priorities: ['acceleration', 'sprintSpeed'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Finalização', pointsGained: 22,
              focus: 'Suba Finalização e Pos. Ataque para converter as chegadas que a velocidade cria.',
              priorities: ['finishing', 'attPosition'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Reações', pointsGained: 22,
              focus: 'Evolua Reações e Força de Chute para ser decisivo nos momentos de finalização.',
              priorities: ['reactions', 'shotPower'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Habilidade', pointsGained: 23,
              focus: 'Invista em Dribles e Controle de Bola para ter mais recursos quando o espaço é fechado.',
              priorities: ['dribbling', 'ballControl'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Resistência e Compostura para manter a performance nos momentos decisivos.',
              priorities: ['stamina', 'composure'],
            },
          ],
        },
      },
    ],
  },

  // ─── CENTROAVANTE ─────────────────────────────────────────────────────────────
  {
    slug: 'centroavante',
    label: 'Centroavante',
    codes: ['ST'],
    description: 'O goleador do time. Vive para marcar — finalização clínica e posicionamento de elite.',
    color: '#ef4444',
    builds: [
      {
        id: 'st-finisher',
        name: 'Goleador Clínico',
        archetype: 'Finalizador',
        description:
          'Centroavante de área. Posicionamento impecável, finalização clínica e reações instantâneas para aproveitar qualquer chance. O arquétipo mais eficiente para quem quer fazer gols.',
        positions: ['ST'],
        attributes: {
          kind: 'outfield',
          acceleration: 80, sprintSpeed: 80,
          agility: 78, balance: 76, reactions: 88, ballControl: 82, dribbling: 80, composure: 88,
          attPosition: 90, finishing: 90, shotPower: 86, longShots: 80, volleys: 80, penalties: 80,
          vision: 72, crossing: 60, fkAccuracy: 65, shortPass: 74, longPass: 66, curve: 70,
          interceptions: 44, headingAccuracy: 74, defAwareness: 46, standTackle: 40, slideTackle: 38,
          jumping: 76, strength: 82, stamina: 80, aggression: 76,
        },
        keyAttributes: ['finishing', 'attPosition', 'reactions', 'composure', 'shotPower'],
        playStyles: [
          { name: 'Finesse Shot+', category: 'attacking' },
          { name: 'Dead Ball',     category: 'attacking' },
          { name: 'Aerial',        category: 'physical' },
        ],
        heightRange: '180–190 cm',
        weightRange: '78–88 kg',
        skillMoves: 3,
        weakFoot: 3,
        difficulty: 'Iniciante',
        pros: [
          'Finalização e Pos. Ataque máximos — o mais clínico do jogo',
          'Compostura 88 para manter a calma em 1v1 com o goleiro',
          'Finesse Shot+ para gols de curva com precisão cirúrgica',
          'Fácil de jogar — fique na área e finalize',
        ],
        cons: [
          'Pouca contribuição na construção de jogo',
          'Limitado em criar jogadas por conta própria',
        ],
        isMeta: true,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Maximize Pos. Ataque e Finalização — sem isso, o arquétipo perde todo o sentido.',
              priorities: ['attPosition', 'finishing'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Reações', pointsGained: 22,
              focus: 'Suba Reações e Compostura para converter rebotes e chances difíceis com calma.',
              priorities: ['reactions', 'composure'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Força Chute', pointsGained: 22,
              focus: 'Evolua Força de Chute e Voleio para ter poder em finalizações de fora da área.',
              priorities: ['shotPower', 'volleys'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Físico', pointsGained: 23,
              focus: 'Invista em Força e Cabeceio para disputar bem a bola na área em cobranças de bola parada.',
              priorities: ['strength', 'headingAccuracy'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Chute Longo e Pênaltis para fechar todas as situações de finalização.',
              priorities: ['longShots', 'penalties'],
            },
          ],
        },
      },

      {
        id: 'st-magician',
        name: 'Centroavante Técnico',
        archetype: 'Mágico',
        description:
          'Centroavante habilidoso que cria e finaliza por conta própria. Dribles, agilidade e finalização num único pacote — ideal para quem quer um atacante completo que resolve sozinho.',
        positions: ['ST'],
        attributes: {
          kind: 'outfield',
          acceleration: 86, sprintSpeed: 84,
          agility: 88, balance: 84, reactions: 86, ballControl: 86, dribbling: 88, composure: 84,
          attPosition: 86, finishing: 84, shotPower: 78, longShots: 78, volleys: 76, penalties: 74,
          vision: 80, crossing: 64, fkAccuracy: 66, shortPass: 76, longPass: 68, curve: 74,
          interceptions: 42, headingAccuracy: 66, defAwareness: 44, standTackle: 38, slideTackle: 36,
          jumping: 70, strength: 72, stamina: 76, aggression: 60,
        },
        keyAttributes: ['dribbling', 'agility', 'finishing', 'ballControl', 'attPosition'],
        playStyles: [
          { name: 'Flair+',        category: 'technical' },
          { name: 'Finesse Shot+', category: 'attacking' },
          { name: 'Rapid',         category: 'attacking' },
        ],
        heightRange: '175–184 cm',
        weightRange: '72–80 kg',
        skillMoves: 4,
        weakFoot: 4,
        difficulty: 'Avançado',
        pros: [
          'Dribles + Finalização: cria e converte oportunidades sozinho',
          'Agilidade máxima para girar em espaços mínimos na área',
          'Flair+ e Finesse Shot+ para golazos improváveis',
          'Versátil — pode atuar como segundo atacante ou falso 9',
        ],
        cons: [
          'Cabeceio e Força menores que o Finalizador',
          'Requer mais habilidade do jogador para extrair o potencial máximo',
        ],
        isMeta: false,
        progression: {
          maxLevel: 25,
          totalPoints: 110,
          tiers: [
            {
              fromLevel: 1, toLevel: 5, label: 'Fundação', pointsGained: 20,
              focus: 'Suba Dribles e Pos. Ataque para já criar chances por conta própria desde o início.',
              priorities: ['dribbling', 'attPosition'],
            },
            {
              fromLevel: 6, toLevel: 10, label: 'Finalização', pointsGained: 22,
              focus: 'Evolua Finalização e Agilidade para converter os dribles em gols reais.',
              priorities: ['finishing', 'agility'],
            },
            {
              fromLevel: 11, toLevel: 15, label: 'Controle', pointsGained: 22,
              focus: 'Invista em Controle de Bola e Equilíbrio para sustentar dribles sob pressão física.',
              priorities: ['ballControl', 'balance'],
            },
            {
              fromLevel: 16, toLevel: 20, label: 'Explosão', pointsGained: 23,
              focus: 'Suba Aceleração e Reações para ter explosão nos primeiro metros e converter rebotes.',
              priorities: ['acceleration', 'reactions'],
            },
            {
              fromLevel: 21, toLevel: 25, label: 'Maestria', pointsGained: 23,
              focus: 'Complete Compostura e Chute Longo para ser imprevisível em qualquer situação ofensiva.',
              priorities: ['composure', 'longShots'],
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

