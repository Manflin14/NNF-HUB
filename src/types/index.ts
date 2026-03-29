export type PositionSlug =
  | 'goleiro' | 'zagueiro' | 'lateral' | 'volante'
  | 'meia' | 'meia-atacante' | 'ponta' | 'centroavante'

export type PositionCode = 'GK' | 'CB' | 'LB' | 'RB' | 'CDM' | 'CM' | 'CAM' | 'LW' | 'RW' | 'ST'

export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado'

// ─── Atributos individuais ────────────────────────────────────────────────────

export interface OutfieldAttributes {
  kind: 'outfield'
  // Ritmo
  acceleration: number; sprintSpeed: number
  // Controle de Bola
  agility: number; balance: number; reactions: number
  ballControl: number; dribbling: number; composure: number
  // Finalização
  attPosition: number; finishing: number; shotPower: number
  longShots: number; volleys: number; penalties: number
  // Passe
  vision: number; crossing: number; fkAccuracy: number
  shortPass: number; longPass: number; curve: number
  // Defesa
  interceptions: number; headingAccuracy: number; defAwareness: number
  standTackle: number; slideTackle: number
  // Físico
  jumping: number; strength: number; stamina: number; aggression: number
}

export interface GKAttributes {
  kind: 'gk'
  // Ritmo
  acceleration: number; sprintSpeed: number
  // Goleiro
  gkDiving: number; gkHandling: number; gkKicking: number
  gkPositioning: number; gkReflexes: number
  // Físico
  jumping: number; strength: number; stamina: number; aggression: number
}

export type BuildAttributes = OutfieldAttributes | GKAttributes

// Labels para exibição (nomes exatos do EA FC 26 PT-BR)
export const ATTR_LABELS: Record<string, string> = {
  acceleration: 'Aceleração',  sprintSpeed: 'Pique',
  agility: 'Agilidade',        balance: 'Equilíbrio',   reactions: 'Reação',
  ballControl: 'Contr. bola',  dribbling: 'Condução',   composure: 'Frieza',
  attPosition: 'Pos. ataque',  finishing: 'Finalização', shotPower: 'F. do chute',
  longShots: 'Ch. de longe',   volleys: 'Voleio',        penalties: 'Pênaltis',
  vision: 'Visão',             crossing: 'Cruzamento',  fkAccuracy: 'Cobr. falta',
  shortPass: 'Passe curto',    longPass: 'Lançamento',  curve: 'Curva',
  interceptions: 'Intercept.', headingAccuracy: 'Cabeceio',
  defAwareness: 'Noção def.',  standTackle: 'Div. em pé', slideTackle: 'Carrinho',
  jumping: 'Impulsão',         strength: 'Força',       stamina: 'Fôlego', aggression: 'Combativ.',
  gkDiving: 'GK Diving',       gkHandling: 'GK Manuseio', gkKicking: 'GK Chute',
  gkPositioning: 'GK Posição', gkReflexes: 'GK Reflexos',
}

// ─── Play Styles ─────────────────────────────────────────────────────────────

export interface PlayStyle {
  name: string
  category: 'attacking' | 'defending' | 'physical' | 'technical' | 'goalkeeper'
}

// ─── Progressão ──────────────────────────────────────────────────────────────

export interface LevelTier {
  fromLevel: number; toLevel: number
  label: string
  focus: string
  pointsGained: number
  priorities: { attr: string; points: number }[]
}

export interface LevelProgression {
  maxLevel: number
  totalPoints: number
  tiers: LevelTier[]
}

// ─── Build ───────────────────────────────────────────────────────────────────

export interface Build {
  id: string
  name: string
  archetype: string
  description: string
  positions: PositionCode[]
  attributes: BuildAttributes
  keyAttributes: string[] // atributos com custo reduzido de AP (círculo verde no jogo)
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

// ─── Position ────────────────────────────────────────────────────────────────

export interface Position {
  slug: PositionSlug
  label: string
  codes: PositionCode[]
  description: string
  color: string
  builds: Build[]
}
