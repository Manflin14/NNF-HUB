import type { PlayStyle } from '@/types'

const categoryColors: Record<PlayStyle['category'], { bg: string; text: string; border: string }> = {
  attacking: { bg: '#ef444411', text: '#fca5a5', border: '#ef444433' },
  defending: { bg: '#3b82f611', text: '#93c5fd', border: '#3b82f633' },
  physical: { bg: '#f97316011', text: '#fdba74', border: '#f9731633' },
  technical: { bg: '#a855f711', text: '#d8b4fe', border: '#a855f733' },
  goalkeeper: { bg: '#f59e0b11', text: '#fcd34d', border: '#f59e0b33' },
}

interface PlayStyleBadgeProps {
  playStyle: PlayStyle
}

export default function PlayStyleBadge({ playStyle }: PlayStyleBadgeProps) {
  const colors = categoryColors[playStyle.category]
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border"
      style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
    >
      {playStyle.name}
    </span>
  )
}
