'use client'

import { Tag } from '@/types'
import { getTagConfig } from '@/utils/helpers'

interface TagBadgeProps {
  tag: Tag
  large?: boolean
}

const sizeMap = {
  false: 'px-2 py-0.5 text-xs',
  true: 'px-3 py-1 text-sm',
} as const

export default function TagBadge({ tag, large = false }: TagBadgeProps) {
  const config = getTagConfig(tag)
  const sizeClasses = sizeMap[String(large) as 'true' | 'false']

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-all duration-200 ${sizeClasses}`}
      style={{
        backgroundColor: `${config.color}12`,
        color: config.color,
        border: `1px solid ${config.color}25`,
      }}
      title={config.label}
    >
      {config.label}
    </span>
  )
}
