export type TFTTier = 'S' | 'A' | 'B' | 'C'

export type TFTDifficulty = 'Fácil' | 'Médio' | 'Difícil'

export type TFTPlaystyle = 'Fast 9' | 'Slow Roll' | 'Reroll' | 'Flex'

export type TFTRole = 'carry' | 'tank' | 'support' | 'flex'

export interface TFTChampion {
  name: string
  cost: 1 | 2 | 3 | 4 | 5
  role: TFTRole
  items?: string[]
}

export interface TFTTrait {
  name: string
  count: number
  color: string // cor do tier ativo
}

export interface TFTComp {
  id: string
  name: string
  tier: TFTTier
  difficulty: TFTDifficulty
  playstyle: TFTPlaystyle
  description: string
  when: string
  champions: TFTChampion[]
  traits: TFTTrait[]
  tips: string[]
}
