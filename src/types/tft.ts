// ========================
// TYPES — Teamfight Tactics
// ========================

export type TFTTier = 'S' | 'A' | 'B' | 'C' | 'D'

export interface TFTChampion {
  name: string
  cost: number            // 1-5 gold
  traits: string[]
}

export interface TFTItem {
  name: string
  components: string[]
  icon?: string
}

export interface TFTComp {
  id: string
  name: string
  slug: string
  tier: TFTTier
  patch: string           // e.g. "16.6"
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  description: string
  coreChampions: TFTChampion[]
  synergies: TFTSynergy[]
  carryItems: Record<string, TFTItem[]>  // champion name -> items
  positioning: PositioningSlot[]
  guide: {
    early: string
    mid: string
    late: string
  }
  augments: string[]
  votes: number
  trending: boolean
  tags: string[]
  createdAt: string
}

export interface TFTSynergy {
  name: string
  count: number           // ativos no board
  maxCount: number
  description: string
}

export interface PositioningSlot {
  row: number             // 0 = frente, 1 = meio, 2 = trás
  col: number             // posição na fileira (0-6)
  champion: string
}

export interface TFTPatch {
  version: string
  date: string
  changes: PatchChange[]
}

export interface PatchChange {
  type: 'buff' | 'nerf' | 'new' | 'removed'
  target: string
  description: string
}
