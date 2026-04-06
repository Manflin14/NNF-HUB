// ========================
// TYPES — EA FC Pro Clubs
// ========================

export type Position =
  | 'GOL'
  | 'ZAG'
  | 'LE'
  | 'LD'
  | 'LEI'
  | 'LDI'
  | 'VOL'
  | 'MC'
  | 'MEI'
  | 'PE'
  | 'PD'
  | 'SA'
  | 'PTE'
  | 'ATA'

export type PreferredFoot = 'Direita' | 'Esquerda'

export type Archetype = 'Alta' | 'Média' | 'Baixa'

export interface Build {
  id: string
  name: string
  slug: string
  position: Position
  height: number          // em cm
  weight: number          // em kg
  archetype: Archetype
  preferredFoot: PreferredFoot
  skillPoints: Record<string, number>
  maxRating: number       // overall max
  attributes: Record<string, number>  // EA FC attribute name -> value 0-99
  playStyles: PlayStyle[]
  playStylePlus: string[]
  playStylesGK?: PlayStyleGK[]        // se for goleiro
  playStylePlusGK?: string[]
  description: string
  tips: string[]
  tags: Tag[]
  votes: number
  createdAt: string
}

export interface PlayStyle {
  id: string
  name: string
  icon: string
}

export interface PlayStyleGK {
  id: string
  name: string
  icon: string
}

export type Tag =
  | 'meta'
  | 'off-meta'
  | 'iniciante'
  | 'competitivo'
  | 'velocidade'
  | 'físico'
  | 'técnico'
  | 'criativo'

// ========================
// TYPES — User System
// ========================

export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  level: number
  reputation: number
  favorites: string[]     // IDs de builds/comps favoritas
  role: 'user' | 'moderator' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface Comment {
  id: string
  contentId: string        // build ID ou comp ID
  contentType: 'build' | 'tft-comp'
  userId: string
  username: string
  avatar?: string
  content: string
  votes: number
  createdAt: string
}

export type GameModule = 'ea-fc' | 'tft'

// ========================
// TYPES — Search
// ========================

export interface SearchFilters {
  query: string
  game?: GameModule
  position?: Position
  tags?: Tag[]
  minRating?: number
  page?: number
}

export interface SearchResult<T> {
  items: T[]
  total: number
  page: number
  totalPages: number
}
