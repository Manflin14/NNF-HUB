'use client'

import { PositioningSlot } from '@/types/tft'

interface TFTHexBoardProps {
  positioning: PositioningSlot[]
}

const ROW_LABELS = ['Frente', 'Meio', 'Trás']
const COL_COUNT = 7

export default function TFTHexBoard({ positioning }: TFTHexBoardProps) {
  // Build a 3x7 grid
  const grid: Record<string, string> = {}
  positioning.forEach((slot) => {
    grid[`${slot.row}-${slot.col}`] = slot.champion
  })

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Board header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">♟</span>
            <span className="text-sm font-medium text-[var(--color-text-primary)]">Board de Posicionamento</span>
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">
            {positioning.length} unidades posicionadas
          </span>
        </div>

        {/* COL LABELS */}
        <div className="flex gap-1 mb-1.5 pl-20">
          {Array.from({ length: COL_COUNT }, (_, i) => (
            <div key={i} className="flex-1 text-center text-xs text-[var(--color-text-muted)] font-mono">
              {i + 1}
            </div>
          ))}
        </div>

        {/* ROWS */}
        {ROW_LABELS.map((label, row) => (
          <div key={row} className="flex items-center gap-1 mb-1">
            <div className="w-20 text-right pr-3 text-xs text-[var(--color-text-muted)] shrink-0 font-medium">
              {label}
            </div>
            {Array.from({ length: COL_COUNT }, (_, col) => {
              const champion = grid[`${row}-${col}`]
              return (
                <div
                  key={col}
                  className={`flex-1 relative flex items-center justify-center text-center transition-all duration-200 ${
                    champion
                      ? 'border-2 border-[var(--color-violet-500)]/60 bg-[var(--color-violet-500)]/15 text-[var(--color-text-primary)] shadow-sm shadow-violet-500/10 rounded-lg'
                      : 'border border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]/30 rounded-lg'
                  }`}
                  style={{ aspectRatio: '1' }}
                >
                  {champion ? (
                    <span className="text-[10px] sm:text-xs font-bold truncate px-0.5">
                      {champion.split(' ')[0]}
                    </span>
                  ) : (
                    <span className="text-[10px] text-[var(--color-text-muted)]/30">·</span>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
