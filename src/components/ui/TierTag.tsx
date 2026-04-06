import { TFTTier } from '@/types/tft'
import { getTierConfig } from '@/utils/helpers'

interface TierTagProps {
  tier: TFTTier
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
} as const

export default function TierTag({ tier, size = 'md' }: TierTagProps) {
  const config = getTierConfig(tier)
  const sizeClasses = sizeMap[size]

  return (
    <span
      className={`inline-flex items-center justify-center rounded font-black transition-all duration-200 ${sizeClasses}`}
      style={{
        background: `linear-gradient(135deg, ${config.color}15, ${config.color}08)`,
        color: config.color,
        border: `1px solid ${config.color}40`,
      }}
      title={config.label}
    >
      {tier}
    </span>
  )
}
