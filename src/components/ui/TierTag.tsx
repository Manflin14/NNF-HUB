import { TFTTier } from '@/types/tft'
import { getTierConfig } from '@/utils/helpers'

interface TierTagProps {
  tier: TFTTier
}

export default function TierTag({ tier }: TierTagProps) {
  const config = getTierConfig(tier)

  return (
    <span
      className="inline-flex items-center justify-center rounded px-2 py-1 text-sm font-black"
      style={{
        backgroundColor: `${config.color}20`,
        color: config.color,
        border: `1px solid ${config.color}50`,
        minWidth: 32,
      }}
    >
      {tier}
    </span>
  )
}
