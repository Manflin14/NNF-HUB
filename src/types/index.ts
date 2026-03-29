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

// Labels para exibição
export const ATTR_LABELS: Record<string, string> = {
  acceleration: 'Aceleração', sprintSpeed: 'Vel. Sprint',
  agility: 'Agilidade', balance: 'Equilíbrio', reactions: 'Reações',
  ballControl: 'Controle', dribbling: 'Dribles', composure: 'Compostura',
  attPosition: 'Pos. Ataque', finishing: 'Finalização', shotPower: 'Força Chute',
  longShots: 'Chute Longo', volleys: 'Voleio', penalties: 'Pênaltis',
  vision: 'Visão', crossing: 'Cruzamento', fkAccuracy: 'Precisão FK',
  shortPass: 'Passe Curto', longPass: 'Passe Longo', curve: 'Curva',
  interceptions: 'Interceptações', headingAccuracy: 'Cabecear',
  defAwareness: 'Consciência Def.', standTackle: 'Carrinho em Pé', slideTackle: 'Carrinho no Chão',
  jumping: 'Salto', strength: 'Força', stamina: 'Resistência', aggression: 'Agressividade',
  gkDiving: 'GK Diving', gkHandling: 'GK Manuseio', gkKicking: 'GK Chute',
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
  priorities: string[] // chaves de atributos a priorizar nesta faixa
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
