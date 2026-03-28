interface AttributeBarProps {
  label: string
  value: number
  max?: number
}

function getColor(value: number): string {
  if (value >= 90) return '#00d4aa'
  if (value >= 80) return '#4ade80'
  if (value >= 70) return '#facc15'
  if (value >= 60) return '#fb923c'
  return '#f87171'
}

export default function AttributeBar({ label, value, max = 99 }: AttributeBarProps) {
  const pct = Math.min((value / max) * 100, 100)
  const color = getColor(value)

  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] shrink-0">
        {label}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="w-6 text-right text-xs font-bold tabular-nums" style={{ color }}>
        {value}
      </span>
    </div>
  )
}
