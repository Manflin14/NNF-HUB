import { Tag } from '@/types'
import { getTagConfig } from '@/utils/helpers'

interface TagBadgeProps {
  tag: Tag
  large?: boolean
}

export default function TagBadge({ tag, large }: TagBadgeProps) {
  const config = getTagConfig(tag as Tag)
  const sizeClasses = large ? 'px-3 py-1 text-sm' : 'px-2 py-0.5 text-xs'

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses}`}
      style={{
        backgroundColor: `${config.color}15`,
        color: config.color,
        border: `1px solid ${config.color}30`,
      }}
    >
      {config.label}
    </span>
  )
}
