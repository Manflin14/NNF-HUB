export type TFTTier = 'S' | 'A' | 'B' | 'C'

export type TFTDifficulty = 'Fácil' | 'Médio' | 'Difícil'

export type TFTPlaystyle = 'Fast 9' | 'Slow Roll' | 'Reroll' | 'Flex'

export type TFTRole = 'carry' | 'tank' | 'support' | 'flex'

export interface BoardPosition {
  col: number // 0–6 (esquerda para direita)
  row: number // 0–3 (frente para trás, 0 = frontline)
}

export interface TFTChampion {
  name: string
  cost: 1 | 2 | 3 | 4 | 5
  role: TFTRole
  items?: string[]
  position: BoardPosition
}

export interface TFTTrait {
  name: string
  count: number
  color: string
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
