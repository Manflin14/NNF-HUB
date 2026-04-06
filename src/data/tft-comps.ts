import { TFTComp } from '@/types/tft'

export const tftComps: TFTComp[] = [
  {
    id: 'annie-sylas-arcanist',
    name: 'Annie/Sylas Arcanist',
    slug: 'annie-sylas-arcanist',
    tier: 'S',
    patch: '16.6',
    difficulty: 'Médio',
    description:
      'Composição mágica centrada em Annie como carry principal e Sylas como tanque de controle. Arcanist fornece AP extra, e Annie domina fights com seu combo explosivo.',
    coreChampions: [
      { name: 'Annie', cost: 5, traits: ['Arcanist', 'Black Rose'] },
      { name: 'Sylas', cost: 4, traits: ['Arcanist', 'Duelist'] },
      { name: 'Viktor', cost: 3, traits: ['Arcanist', 'Chem-Baron'] },
      { name: 'Orianna', cost: 2, traits: ['Arcanist', 'Clockwork'] },
      { name: 'Lux', cost: 3, traits: ['Arcanist', 'Exiles'] },
      { name: 'Braum', cost: 2, traits: ['Vanguard', 'Arcanist'] },
    ],
    synergies: [
      { name: 'Arcanist', count: 6, maxCount: 8, description: 'Todos aliados ganham AP' },
      { name: 'Vanguard', count: 2, maxCount: 4, description: 'Vanguards ganham Armadura' },
      { name: 'Black Rose', count: 2, maxCount: 6, description: 'Black Rose invocam clone' },
    ],
    carryItems: {
      Annie: [
        { name: 'Rabadon\'s Deathcap', components: ['Needlessly Large Rod', 'B.F. Sword'] },
        { name: 'Jeweled Gauntlet', components: ['Needlessly Large Rod', 'Giant\'s Belt'] },
        { name: 'Archangel\'s Staff', components: ['Tear of Goddess', 'Needlessly Large Rod'] },
      ],
      Sylas: [
        { name: 'Warmog\'s Armor', components: ['Giant\'s Belt', 'Giant\'s Belt'] },
        { name: 'Dragon\'s Claw', components: ['Negatron Cloak', 'Negatron Cloak'] },
        { name: 'Sunfire Cape', components: ['Chain Vest', 'Giant\'s Belt'] },
      ],
    },
    positioning: [
      { row: 2, col: 3, champion: 'Annie' },
      { row: 1, col: 3, champion: 'Sylas' },
      { row: 2, col: 2, champion: 'Viktor' },
      { row: 2, col: 4, champion: 'Orianna' },
      { row: 2, col: 1, champion: 'Lux' },
      { row: 0, col: 3, champion: 'Braum' },
    ],
    guide: {
      early: 'Comece com itens de AP em qualquer unidade Arcanist. Lux 2* é um carry temporário forte. Priorize Rod + Tear.',
      mid: 'Procure Annie no stage 4.1 e monte o arco 6 Arcanist. Sylas 2* como off-tank.',
      late: 'Encontre Annie 2* e complete itens BIS. Se possível, adicione um 8° Arcanist.',
    },
    augments: [
      'Arcanist Crest/Crown',
      'Second Wind',
      'Archangel\'s Embrace',
      'Component Grab Bag',
    ],
    votes: 523,
    trending: true,
    tags: ['meta', 'ap-carry', 'magic-damage'],
    createdAt: '2026-03-15',
  },
  {
    id: 'draven-bilgewater',
    name: 'Draven Bilgewater Slayers',
    slug: 'draven-bilgewater',
    tier: 'S',
    patch: '16.6',
    difficulty: 'Difícil',
    description:
      'Composição AD física centrada em Draven como hyper-carry. Bilgewater fornece gold e itens extras, compensando a dificuldade de stabilization early.',
    coreChampions: [
      { name: 'Draven', cost: 3, traits: ['Bilgewater', 'Slayer'] },
      { name: 'Miss Fortune', cost: 2, traits: ['Bilgewater', 'Sniper'] },
      { name: 'Gangplank', cost: 4, traits: ['Bilgewater', 'Quickstriker'] },
      { name: 'Sett', cost: 3, traits: ['Slayer', 'Bruiser'] },
      { name: 'Riven', cost: 4, traits: ['Slayer', 'Exiles'] },
      { name: 'Malphite', cost: 2, traits: ['Vanguard', 'Chem-Baron'] },
    ],
    synergies: [
      { name: 'Slayer', count: 4, maxCount: 6, description: 'Slayers ganham Omnivamp e Velocidade de Ataque' },
      { name: 'Bilgewater', count: 4, maxCount: 6, description: 'Gera saques de ouro e itens' },
      { name: 'Vanguard', count: 2, maxCount: 4, description: 'Vanguards ganham Armadura' },
    ],
    carryItems: {
      Draven: [
        { name: 'Infinity Edge', components: ['B.F. Sword', 'B.F. Sword'] },
        { name: 'Bloodthirster', components: ['B.F. Sword', 'Negatron Cloak'] },
        { name: 'Last Whisper', components: ['Spatula', 'Chain Vest'] },
      ],
      Sett: [
        { name: 'Warmog\'s Armor', components: ['Giant\'s Belt', 'Giant\'s Belt'] },
        { name: 'Titan\'s Resolve', components: ['Chain Vest', 'Recurve Bow'] },
        { name: 'Zz\'Rot Portal', components: ['Chain Vest', 'Giant\'s Belt'] },
      ],
    },
    positioning: [
      { row: 0, col: 2, champion: 'Draven' },
      { row: 0, col: 3, champion: 'Riven' },
      { row: 1, col: 2, champion: 'Sett' },
      { row: 0, col: 4, champion: 'Miss Fortune' },
      { row: 0, col: 1, champion: 'Gangplank' },
      { row: 1, col: 0, champion: 'Malphite' },
    ],
    guide: {
      early: 'Bilgewater early é fraco — aceite derrotas e preserve HP. Farm saques no stage 2-3.',
      mid: 'Draven 2* no 4-1 é a meta. Se não encontrar, considere reroll no stage 3-2.',
      late: 'Procure Gangplank 2* e complete o Bilgewater 6 para maximizar economia de itens.',
    },
    augments: [
      'Slayer Crest/Crown',
      'Draven Spin to Win',
      'Golden Ticket',
      'Rich Get Richer',
    ],
    votes: 412,
    trending: true,
    tags: ['meta', 'ad-carry', 'bilgewater', 'reroll'],
    createdAt: '2026-03-15',
  },
  {
    id: 'mel-fast9',
    name: 'Mel Fast 9',
    slug: 'mel-fast-9',
    tier: 'A',
    patch: '16.6',
    difficulty: 'Difícil',
    description:
      'Estratégia de fast 9 usando Mel como carry de suporte. Foco em chegar ao nível 9 rapidamente para montar as melhores sinergias 5-cost do jogo.',
    coreChampions: [
      { name: 'Mel', cost: 3, traits: ['Enforcer', 'Strategist'] },
      { name: 'Caitlyn', cost: 4, traits: ['Enforcer', 'Sniper'] },
      { name: 'Vander', cost: 4, traits: ['Vanguard', 'Chem-Baron'] },
      { name: 'Ekko', cost: 4, traits: ['Watcher', 'Quickstriker'] },
      { name: 'Sejuani', cost: 5, traits: ['Vanguard', 'Ambessa'] },
      { name: 'Jinx', cost: 5, traits: ['Ambessa', 'Sniper'] },
    ],
    synergies: [
      { name: 'Enforcer', count: 3, maxCount: 5, description: 'Enforcers confiscam itens' },
      { name: 'Strategist', count: 2, maxCount: 4, description: 'Strategists ganham ouro extra' },
      { name: 'Vanguard', count: 3, maxCount: 4, description: 'Vanguards ganham Armadura' },
    ],
    carryItems: {
      Mel: [
        { name: 'Blue Buff', components: ['Tear of Goddess', 'Tear of Goddess'] },
        { name: 'Rabadon\'s Deathcap', components: ['Needlessly Large Rod', 'B.F. Sword'] },
        { name: 'Jeweled Gauntlet', components: ['Needlessly Large Rod', 'Giant\'s Belt'] },
      ],
      Sejuani: [
        { name: 'Warmog\'s Armor', components: ['Giant\'s Belt', 'Giant\'s Belt'] },
        { name: 'Dragon\'s Claw', components: ['Negatron Cloak', 'Negatron Cloak'] },
        { name: 'Thornmail', components: ['Chain Vest', 'Chain Vest'] },
      ],
    },
    positioning: [
      { row: 2, col: 3, champion: 'Mel' },
      { row: 2, col: 2, champion: 'Caitlyn' },
      { row: 0, col: 2, champion: 'Vander' },
      { row: 0, col: 4, champion: 'Ekko' },
      { row: 1, col: 2, champion: 'Sejuani' },
      { row: 0, col: 3, champion: 'Jinx' },
    ],
    guide: {
      early: 'Jogue economia máxima — não gaste ouro em roll até level 8. Aceite loss streak para preservar gold.',
      mid: 'Level 8 no stage 4-2 e roll para estabilizar com qualquer comp forte enquanto procura 5-costs.',
      late: 'Fast 9 no stage 5-1, monte as melhores sinergias com as 5-costs encontradas.',
    },
    augments: [
      'Fast 9',
      'Heaven\'s Blessing',
      'Rich Get Richer',
      'Level Up!',
    ],
    votes: 287,
    trending: false,
    tags: ['fast9', 'economica', '5-cost'],
    createdAt: '2026-03-15',
  },
]

export function getCompBySlug(slug: string): TFTComp | undefined {
  return tftComps.find(c => c.slug === slug)
}

export function getCompsByTier(tier: string): TFTComp[] {
  return tftComps.filter(c => c.tier === tier)
}

export function getTrendingComps(): TFTComp[] {
  return tftComps.filter(c => c.trending)
}
