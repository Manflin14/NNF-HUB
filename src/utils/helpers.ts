import { Tag } from '@/types'
import { TFTTier } from '@/types/tft'

// ========================
// SLUG HELPERS
// ========================

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// ========================
// TAG LABELS & COLORS
// ========================

export const TAG_CONFIG: Record<Tag, { label: string; color: string }> = {
  meta: { label: 'Meta', color: 'var(--color-meta)' },
  'off-meta': { label: 'Off-Meta', color: 'var(--color-off-meta)' },
  iniciante: { label: 'Iniciante', color: 'var(--color-iniciante)' },
  competitivo: { label: 'Competitivo', color: 'var(--color-competitivo)' },
  velocidade: { label: 'Velocidade', color: 'var(--color-velocidade)' },
  físico: { label: 'Físico', color: 'var(--color-fisico)' },
  técnico: { label: 'Técnico', color: 'var(--color-tecnico)' },
  criativo: { label: 'Criativo', color: 'var(--color-criativo)' },
}

export function getTagConfig(tag: Tag): { label: string; color: string } {
  return TAG_CONFIG[tag] ?? { label: tag, color: 'var(--color-text-muted)' }
}

// ========================
// TIER LABELS & COLORS
// ========================

export const TIER_CONFIG: Record<TFTTier, { color: string; label: string }> = {
  S: { color: 'var(--color-tier-s)', label: 'Tier S — God Tier' },
  A: { color: 'var(--color-tier-a)', label: 'Tier A — Excelente' },
  B: { color: 'var(--color-tier-b)', label: 'Tier B — Viable' },
  C: { color: 'var(--color-tier-c)', label: 'Tier C — Desafiador' },
  D: { color: 'var(--color-tier-d)', label: 'Tier D — Niche' },
}

export function getTierConfig(tier: TFTTier): { color: string; label: string } {
  return TIER_CONFIG[tier] ?? { color: 'var(--color-text-muted)', label: tier }
}

// ========================
// POSITION CONFIG
// ========================

export const POSITION_CONFIG: Record<string, { label: string; icon: string; category: string }> = {
  GOL: { label: 'Goleiro', icon: '🧤', category: 'Defesa' },
  ZAG: { label: 'Zagueiro', icon: '🛡️', category: 'Defesa' },
  LE: { label: 'Lateral Esq.', icon: '⬅️', category: 'Defesa' },
  LD: { label: 'Lateral Dir.', icon: '➡️', category: 'Defesa' },
  VOL: { label: 'Volante', icon: '🔒', category: 'Meio-Campo' },
  MC: { label: 'Meia Central', icon: '🎯', category: 'Meio-Campo' },
  MEI: { label: 'Meia-Atacante', icon: '🧠', category: 'Meio-Campo' },
  PE: { label: 'Ponta Esq.', icon: '⚡', category: 'Ataque' },
  PD: { label: 'Ponta Dir.', icon: '⚡', category: 'Ataque' },
  SA: { label: 'Segundo Atacante', icon: '🔥', category: 'Ataque' },
  PTE: { label: 'Ponta de Lança', icon: '💎', category: 'Ataque' },
  ATA: { label: 'Centroavante', icon: '⚽', category: 'Ataque' },
}

export function getPositionConfig(position: string): { label: string; icon: string; category: string } {
  return POSITION_CONFIG[position] ?? { label: position, icon: '❓', category: 'Desconhecido' }
}

// ========================
// FORMAT HELPERS
// ========================

export function formatNumber(num: number): string {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
  return num.toString()
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max)
}

// ========================
// GAME ROUTES
// ========================

export const GAMES = [
  {
    id: 'ea-fc',
    name: 'EA FC 26 Pro Clubs',
    shortName: 'EA FC',
    description: 'Builds, táticas e guias para Pro Clubs',
    route: '/ea-fc',
    color: 'var(--color-bg-eafc)',
    accentColor: 'var(--color-border-eafc)',
    icon: '⚽',
  },
  {
    id: 'tft',
    name: 'Teamfight Tactics',
    shortName: 'TFT',
    description: 'Composições meta e guias por patch',
    route: '/tft',
    color: 'var(--color-bg-tft)',
    accentColor: 'var(--color-border-tft)',
    icon: '♟️',
  },
] as const

export type GameId = (typeof GAMES)[number]['id']
