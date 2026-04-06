'use client'

import { PositioningSlot } from '@/types/tft'

interface TFTHexBoardProps {
  positioning: PositioningSlot[]
}

const ROW_LABELS = ['Frente', 'Meio', 'Trás']
const COL_COUNT = 7

export default function TFTHexBoard({ positioning }: TFTHexBoardProps) {
  // Build a 3x7 grid and fill with champion data
  const grid: Record<string, string> = {}
  positioning.forEach((slot) => {
    grid[`${slot.row}-${slot.col}`] = slot.champion
  })

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[560px]">
        {/* COL LABELS */}
        <div className="flex gap-1 mb-1 pl-16">
          {Array.from({ length: COL_COUNT }, (_, i) => (
            <div key={i} className="flex-1 text-center text-xs text-[var(--color-text-muted)]">
              {i + 1}
            </div>
          ))}
        </div>

        {/* ROWS */}
        {ROW_LABELS.map((label, row) => (
          <div key={row} className="flex items-center gap-1 mb-1">
            <div className="w-16 text-right pr-2 text-xs text-[var(--color-text-muted)] shrink-0">
              {label}
            </div>
            {Array.from({ length: COL_COUNT }, (_, col) => {
              const champion = grid[`${row}-${col}`]
              return (
                <div
                  key={col}
                  className={`flex-1 aspect-square rounded-lg border flex items-center justify-center text-xs font-bold transition-colors ${
                    champion
                      ? 'border-[var(--color-border-tft)] bg-[var(--color-bg-tft)]/30 text-[var(--color-text-primary)]'
                      : 'border-[var(--color-border-primary)]/40 bg-[var(--color-bg-tertiary)]/40'
                  }`}
                >
                  {champion ? champion.split(' ')[0] : ''}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
