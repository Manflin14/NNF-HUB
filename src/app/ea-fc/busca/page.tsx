'use client'

import { Suspense, useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { builds } from '@/data/builds'
import { Build, Tag, Position } from '@/types'
import Input from '@/components/ui/Input'
import TagBadge from '@/components/ui/TagBadge'
import { getPositionConfig } from '@/utils/helpers'

const ALL_TAGS: Tag[] = ['meta', 'off-meta', 'iniciante', 'competitivo', 'velocidade', 'físico', 'técnico', 'criativo']
const ALL_POSITIONS: Position[] = ['GOL', 'ZAG', 'LE', 'LD', 'LEI', 'LDI', 'VOL', 'MC', 'MEI', 'PE', 'PD', 'SA', 'PTE', 'ATA']

function BuildSearchContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialQuery = searchParams.get('q') ?? ''
  const initialTag = searchParams.get('tag') as Tag | null
  const initialPos = searchParams.get('pos') as Position | null

  const [query, setQuery] = useState(initialQuery)
  const [selectedTag, setSelectedTag] = useState<Tag | null>(initialTag)
  const [selectedPos, setSelectedPos] = useState<Position | null>(initialPos)

  useEffect(() => {
    setQuery(initialQuery)
    setSelectedTag(initialTag)
    setSelectedPos(initialPos)
  }, [initialQuery, initialTag, initialPos])

  const results = useMemo(() => {
    let filtered = [...builds]

    if (query) {
      const q = query.toLowerCase()
      filtered = filtered.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.position.toLowerCase().includes(q) ||
          b.tags.some((t) => t.includes(q)) ||
          b.playStyles.some((ps) => ps.name.toLowerCase().includes(q))
      )
    }

    if (selectedTag) {
      filtered = filtered.filter((b) => b.tags.includes(selectedTag))
    }

    if (selectedPos) {
      filtered = filtered.filter((b) => b.position === selectedPos)
    }

    return filtered.sort((a, b) => b.votes - a.votes)
  }, [query, selectedTag, selectedPos])

  function updateURL(params: Record<string, string | null>) {
    const newParams = new URLSearchParams(searchParams.toString())
    Object.entries(params).forEach(([k, v]) => {
      if (v) newParams.set(k, v)
      else newParams.delete(k)
    })
    router.push(`${pathname}?${newParams.toString()}`)
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <Input
        placeholder="Busque por nome, posição, play style, tag..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          updateURL({ q: e.target.value || null })
        }}
        className="text-base"
      />

      {/* Tag filters */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Tags</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedTag(null); updateURL({ tag: null }) }}
            className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
              !selectedTag
                ? 'border-[var(--color-emerald-500)]/40 bg-[var(--color-emerald-500)]/20 text-[var(--color-emerald-400)]'
                : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            Todas
          </button>
          {ALL_TAGS.map((tag) => {
            const isActive = selectedTag === tag
            return (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(isActive ? null : tag)
                  updateURL({ tag: isActive ? null : tag })
                }}
                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                  isActive
                    ? 'border-[var(--color-tag-meta)]/40 bg-[var(--color-bg-tertiary)]/80'
                    : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
                style={isActive ? { borderColor: 'var(--color-tag-meta, var(--color-emerald-400))', color: 'var(--color-tag-meta, var(--color-emerald-400))' } : {}}
              >
                <TagBadge tag={tag} />
              </button>
            )
          })}
        </div>
      </div>

      {/* Position filters */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Posições</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedPos(null); updateURL({ pos: null }) }}
            className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
              !selectedPos
                ? 'border-[var(--color-emerald-500)]/40 bg-[var(--color-emerald-500)]/20 text-[var(--color-emerald-400)]'
                : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
            }`}
          >
            Todas
          </button>
          {ALL_POSITIONS.map((pos) => {
            const config = getPositionConfig(pos)
            const isActive = selectedPos === pos
            return (
              <button
                key={pos}
                onClick={() => {
                  setSelectedPos(isActive ? null : pos)
                  updateURL({ pos: isActive ? null : pos })
                }}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                  isActive
                    ? 'border-[var(--color-emerald-500)] bg-[var(--color-emerald-500)]/20 text-[var(--color-emerald-400)]'
                    : 'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <span className="mr-1">{config.icon}</span> {pos}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results */}
      <div>
        <p className="text-sm text-[var(--color-text-muted)] mb-4">
          {results.length} build{results.length !== 1 ? 's' : ''} encontrada{results.length !== 1 ? 's' : ''}
        </p>
        <div className="space-y-3">
          {results.map((build) => {
            const posConfig = getPositionConfig(build.position)
            return (
              <Link
                key={build.id}
                href={`/posicao/${build.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-emerald-500)]/50 hover:bg-[var(--color-bg-card-hover)] hover:shadow-lg"
              >
                <span className="text-2xl mt-0.5 shrink-0">{posConfig.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-emerald-400)] transition-colors">
                      {build.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)] text-xs font-mono text-[var(--color-text-secondary)]">
                      {build.position}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1 mb-2">
                    {build.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {build.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
                <span className="text-sm font-mono text-[var(--color-emerald-400)] shrink-0">
                  ⬆ {build.votes}
                </span>
              </Link>
            )
          })}
          {results.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Nenhuma build encontrada</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Tente ajustar os filtros para encontrar resultados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function EAFCSearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
          🔍 Buscar Builds — EA FC 26
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-2">
          Encontre a build perfeita com filtros por tag, posição e nome.
        </p>
      </div>
      <Suspense fallback={<p className="text-[var(--color-text-muted)]">Carregando...</p>}>
        <BuildSearchContent />
      </Suspense>
    </div>
  )
}
