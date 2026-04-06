'use client'

import { Suspense, useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { tftComps } from '@/data/tft-comps'
import { TFTTier } from '@/types/tft'
import Input from '@/components/ui/Input'
import TierTag from '@/components/ui/TierTag'

const ALL_TIERS: TFTTier[] = ['S', 'A', 'B', 'C', 'D']
const ALL_DIFFICULTIES = ['Fácil', 'Médio', 'Difícil'] as const

function TFTSearchContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialQuery = searchParams.get('q') ?? ''
  const initialTier = (searchParams.get('tier') as TFTTier) ?? null
  const initialDiff = searchParams.get('diff') ?? null

  const [query, setQuery] = useState(initialQuery)
  const [selectedTier, setSelectedTier] = useState<TFTTier | null>(initialTier)
  const [selectedDiff, setSelectedDiff] = useState<string | null>(initialDiff)

  useEffect(() => {
    setQuery(initialQuery)
    setSelectedTier(initialTier)
    setSelectedDiff(initialDiff)
  }, [initialQuery, initialTier, initialDiff])

  const results = useMemo(() => {
    let filtered = [...tftComps]

    if (query) {
      const q = query.toLowerCase()
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.coreChampions.some((ch) => ch.name.toLowerCase().includes(q)) ||
          c.synergies.some((s) => s.name.toLowerCase().includes(q)) ||
          c.tags.some((t) => t.includes(q))
      )
    }

    if (selectedTier) {
      filtered = filtered.filter((c) => c.tier === selectedTier)
    }

    if (selectedDiff) {
      filtered = filtered.filter((c) => c.difficulty === selectedDiff)
    }

    return filtered.sort((a, b) => b.votes - a.votes)
  }, [query, selectedTier, selectedDiff])

  function updateURL(params: Record<string, string | null>) {
    const sp = new URLSearchParams(searchParams.toString())
    Object.entries(params).forEach(([k, v]) => {
      if (v) sp.set(k, v)
      else sp.delete(k)
    })
    router.push(`${pathname}?${sp.toString()}`)
  }

  return (
    <div className="space-y-6">
      <Input
        placeholder="Busque por nome, campeão, sinergia, tag..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          updateURL({ q: e.target.value || null })
        }}
        className="text-base"
      />

      <div>
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Tier</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedTier(null); updateURL({ tier: null }) }}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors border ${
              !selectedTier
                ? 'border-[var(--color-cta-green)]/40 bg-[var(--color-cta-green)]/20 text-[var(--color-cta-green)]'
                : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
            }`}
          >
            Todos
          </button>
          {ALL_TIERS.map((tier) => (
            <button
              key={tier}
              onClick={() => {
                setSelectedTier(tier === selectedTier ? null : tier)
                updateURL({ tier: tier === selectedTier ? null : tier })
              }}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors border ${
                selectedTier === tier
                  ? 'border-[var(--color-border-tft)] bg-[var(--color-bg-tft)]/20 text-[var(--color-border-tft)]'
                  : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
              }`}
            >
              Tier {tier}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Dificuldade</label>
        <div className="flex flex-wrap gap-2">
          {ALL_DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setSelectedDiff(diff === selectedDiff ? null : diff)
                updateURL({ diff: diff === selectedDiff ? null : diff })
              }}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors border ${
                selectedDiff === diff
                  ? 'border-[var(--color-cta-green)]/40 bg-[var(--color-cta-green)]/20 text-[var(--color-cta-green)]'
                  : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-[var(--color-text-muted)] mb-4">
          {results.length} comp{results.length !== 1 ? 's' : ''} encontrada{results.length !== 1 ? 's' : ''}
        </p>
        <div className="space-y-3">
          {results.map((comp) => (
            <Link
              key={comp.id}
              href={`/tft/${comp.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-tft)] hover:bg-[var(--color-bg-card-hover)]"
            >
              <div className="mt-1">
                <TierTag tier={comp.tier} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)]">
                    {comp.name}
                  </h3>
                  {comp.trending && (
                    <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                      HOT
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1 mb-2">
                  {comp.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {comp.coreChampions.slice(0, 3).map((champ) => (
                    <span key={champ.name} className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs text-[var(--color-text-secondary)]">
                      {champ.name} ({champ.cost}💰)
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-mono text-[var(--color-cta-green)]">⬆ {comp.votes}</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">
                  Patch {comp.patch}
                </div>
              </div>
            </Link>
          ))}
          {results.length === 0 && (
            <p className="text-center py-8 text-[var(--color-text-muted)]">
              Nenhuma comp encontrada para os filtros selecionados.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TFTSearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">🔍 Buscar Comps — TFT Set 16</h1>
      <Suspense fallback={<p className="text-[var(--color-text-muted)]">Carregando...</p>}>
        <TFTSearchContent />
      </Suspense>
    </div>
  )
}
