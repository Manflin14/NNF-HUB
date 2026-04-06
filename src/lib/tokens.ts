// Design tokens — cores e labels centralizadas para EA FC e TFT
// Evita duplicação entre componentes e páginas

// ─── Tier ──────────────────────────────────────────────────────────────────────

export const tierColors: Record<string, { bg: string; text: string; border: string }> = {
  S: { bg: '#f59e0b22', text: '#f59e0b', border: '#f59e0b44' },
  A: { bg: '#00d4aa22', text: '#00d4aa', border: '#00d4aa44' },
  B: { bg: '#3b82f622', text: '#60a5fa', border: '#3b82f644' },
  C: { bg: '#6b728022', text: '#9ca3af', border: '#6b728044' },
}

export const tierLabelColors: Record<string, string> = {
  S: '#f59e0b',
  A: '#00d4aa',
  B: '#3b82f6',
  C: '#6b7280',
}

// ─── Difficulty ────────────────────────────────────────────────────────────────

export const difficultyColors: Record<string, string> = {
  'Iniciante':  '#4ade80',
  'Intermediário': '#facc15',
  'Avançado':   '#f87171',
  'Fácil':      '#4ade80',
  'Médio':      '#facc15',
  'Difícil':    '#f87171',
}

// ─── TFT Playstyle ─────────────────────────────────────────────────────────────

export const playstyleColors: Record<string, string> = {
  'Fast 9':    '#c084fc',
  'Slow Roll': '#fb923c',
  'Reroll':    '#38bdf8',
  'Flex':      '#a3e635',
}

// ─── TFT Champion cost ─────────────────────────────────────────────────────────

export const costColors: Record<number, string> = {
  1: '#6b7280',
  2: '#22c55e',
  3: '#3b82f6',
  4: '#a855f7',
  5: '#f59e0b',
}

// costColors for board (bg + border + text)
export const costColorVariants: Record<number, { bg: string; border: string; text: string }> = {
  1: { bg: '#374151', border: '#6b7280', text: '#d1d5db' },
  2: { bg: '#14532d', border: '#22c55e', text: '#86efac' },
  3: { bg: '#1e3a8a', border: '#3b82f6', text: '#93c5fd' },
  4: { bg: '#3b0764', border: '#a855f7', text: '#d8b4fe' },
  5: { bg: '#451a03', border: '#f59e0b', text: '#fcd34d' },
}

// ─── TFT Role ──────────────────────────────────────────────────────────────────

export const roleLabel: Record<string, string> = {
  carry:   'CARRY',
  tank:    'TANK',
  support: 'SUPP',
  flex:    'FLEX',
}

export const roleShort: Record<string, string> = {
  carry:   'C',
  tank:    'T',
  support: 'S',
  flex:    'F',
}

// ─── Attribute value color ─────────────────────────────────────────────────────

export function getValueColor(v: number): string {
  if (v >= 90) return '#00d4aa'
  if (v >= 80) return '#4ade80'
  if (v >= 70) return '#facc15'
  if (v >= 60) return '#fb923c'
  return '#f87171'
}

// ─── Play Style category ───────────────────────────────────────────────────────

export interface PlayStyleCategoryColors {
  bg: string
  text: string
  border: string
}

export const playStyleCategoryColors: Record<string, PlayStyleCategoryColors> = {
  attacking: { bg: '#ef444411', text: '#fca5a5', border: '#ef444433' },
  defending: { bg: '#3b82f611', text: '#93c5fd', border: '#3b82f633' },
  physical:  { bg: '#f9731611', text: '#fdba74', border: '#f9731633' },
  technical: { bg: '#a855f711', text: '#d8b4fe', border: '#a855f733' },
  goalkeeper:{ bg: '#f59e0b11', text: '#fcd34d', border: '#f59e0b33' },
}

// ─── Skill/weak foot stars ─────────────────────────────────────────────────────

export function skillStars(n: number): string {
  return '\u2605'.repeat(n) + '\u2606'.repeat(5 - n)
}
