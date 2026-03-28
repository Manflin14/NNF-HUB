export type PositionSlug =
  | 'goleiro'
  | 'zagueiro'
  | 'lateral'
  | 'volante'
  | 'meia'
  | 'meia-atacante'
  | 'ponta'
  | 'centroavante'

export type PositionCode = 'GK' | 'CB' | 'LB' | 'RB' | 'CDM' | 'CM' | 'CAM' | 'LW' | 'RW' | 'ST'

export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado'

export interface Attributes {
  pac: number
  sho: number
  pas: number
  dri: number
  def: number
  phy: number
}

export interface PlayStyle {
  name: string
  category: 'attacking' | 'defending' | 'physical' | 'technical' | 'goalkeeper'
}

// ─── Level progression ───────────────────────────────────────────────────────

/** Pontos de atributo recomendados para gastar em cada faixa de nível */
export interface AttributeAllocation {
  pac: number
  sho: number
  pas: number
  dri: number
  def: number
  phy: number
}

/** Uma faixa de níveis com foco recomendado */
export interface LevelTier {
  fromLevel: number
  toLevel: number
  label: string           // ex: "Fundação", "Consolidação"
  focus: string           // dica textual do que priorizar
  pointsGained: number    // total de pontos disponíveis nessa faixa
  allocation: AttributeAllocation
}

/** Sistema de progressão completo de uma build */
export interface LevelProgression {
  maxLevel: number
  totalPoints: number
  baseAttributes: Attributes   // stats ao entrar no nível 1
  tiers: LevelTier[]
}

// ─── Build ────────────────────────────────────────────────────────────────────

export interface Build {
  id: string
  name: string
  archetype: string
  description: string
  positions: PositionCode[]
  attributes: Attributes       // stats no nível máximo (meta)
  playStyles: PlayStyle[]
  heightRange: string
  weightRange: string
  skillMoves: number
  weakFoot: number
  difficulty: Difficulty
  pros: string[]
  cons: string[]
  isMeta: boolean
  progression: LevelProgression
}

export interface Position {
  slug: PositionSlug
  label: string
  codes: PositionCode[]
  description: string
  color: string
  builds: Build[]
}
