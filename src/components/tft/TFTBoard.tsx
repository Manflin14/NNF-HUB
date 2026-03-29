import type { TFTChampion } from '@/types/tft'

const costColors: Record<number, { bg: string; border: string; text: string }> = {
  1: { bg: '#374151', border: '#6b7280', text: '#d1d5db' },
  2: { bg: '#14532d', border: '#22c55e', text: '#86efac' },
  3: { bg: '#1e3a8a', border: '#3b82f6', text: '#93c5fd' },
  4: { bg: '#3b0764', border: '#a855f7', text: '#d8b4fe' },
  5: { bg: '#451a03', border: '#f59e0b', text: '#fcd34d' },
}

const roleLabel: Record<string, string> = {
  carry:   'C',
  tank:    'T',
  support: 'S',
  flex:    'F',
}

// Hex dimensions
const HEX_W = 64
const HEX_H = 72
const COL_GAP = 8
const ROW_GAP = 6
const ODD_ROW_OFFSET = (HEX_W + COL_GAP) / 2

const COLS = 7
const ROWS = 4

interface TFTBoardProps {
  champions: TFTChampion[]
}

export default function TFTBoard({ champions }: TFTBoardProps) {
  // Map positions to champions for O(1) lookup
  const champMap = new Map<string, TFTChampion>()
  for (const champ of champions) {
    champMap.set(`${champ.position.col}-${champ.position.row}`, champ)
  }

  const totalW = COLS * (HEX_W + COL_GAP) - COL_GAP + ODD_ROW_OFFSET
  const totalH = ROWS * (HEX_H + ROW_GAP) - ROW_GAP

  return (
    <div className="w-full overflow-x-auto">
      <div
        className="relative mx-auto"
        style={{ width: totalW, height: totalH }}
        aria-label="Board de posicionamento TFT"
      >
        {Array.from({ length: ROWS }, (_, row) =>
          Array.from({ length: COLS }, (_, col) => {
            const isOddRow = row % 2 === 1
            const x = col * (HEX_W + COL_GAP) + (isOddRow ? ODD_ROW_OFFSET : 0)
            const y = row * (HEX_H + ROW_GAP)
            const key = `${col}-${row}`
            const champ = champMap.get(key)
            const colors = champ ? costColors[champ.cost] : null

            return (
              <div
                key={key}
                className="absolute flex flex-col items-center justify-center select-none"
                style={{
                  left: x,
                  top: y,
                  width: HEX_W,
                  height: HEX_H,
                }}
              >
                {/* Hex cell */}
                <div
                  className="relative flex flex-col items-center justify-center w-full h-full transition-transform duration-150"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: champ ? colors!.bg : 'var(--surface-2)',
                    border: 'none',
                    outline: champ ? `2px solid ${colors!.border}` : '1px solid var(--border)',
                    outlineOffset: '-2px',
                  }}
                >
                  {champ ? (
                    <>
                      {/* Role indicator */}
                      <span
                        className="absolute top-2 right-3 text-[9px] font-bold opacity-80"
                        style={{ color: colors!.text }}
                      >
                        {roleLabel[champ.role]}
                      </span>

                      {/* Champion name */}
                      <span
                        className="text-[10px] font-bold text-center leading-tight px-1"
                        style={{ color: colors!.text }}
                      >
                        {champ.name.split(' ')[0]}
                      </span>

                      {/* Items dots */}
                      {champ.items?.length ? (
                        <div className="flex gap-0.5 mt-1">
                          {champ.items.map((_, i) => (
                            <span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: colors!.border }}
                            />
                          ))}
                        </div>
                      ) : null}

                      {/* Cost badge */}
                      <span
                        className="absolute bottom-2 left-0 right-0 text-center text-[9px] font-bold"
                        style={{ color: colors!.border }}
                      >
                        {'★'.repeat(champ.cost)}
                      </span>
                    </>
                  ) : (
                    <span className="text-[var(--border)] text-lg opacity-40">·</span>
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {[1, 2, 3, 4, 5].map((cost) => (
          <div key={cost} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm border"
              style={{ background: costColors[cost].bg, borderColor: costColors[cost].border }}
            />
            <span className="text-[10px] text-[var(--text-secondary)]">
              {cost} ouro
            </span>
          </div>
        ))}
        <div className="w-px h-3 bg-[var(--border)]" />
        <div className="flex items-center gap-3 text-[10px] text-[var(--text-secondary)]">
          <span>C = Carry</span>
          <span>T = Tank</span>
          <span>S = Suporte</span>
          <span>F = Flex</span>
        </div>
      </div>
    </div>
  )
}
