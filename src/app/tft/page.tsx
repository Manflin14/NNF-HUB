import Link from 'next/link'
import GameSidebar from '@/components/layout/GameSidebar'
import CompCard from '@/components/tft/CompCard'
import TierTag from '@/components/ui/TierTag'
import { tftComps } from '@/data/tft-comps'
import { TFTTier } from '@/types/tft'

const SIDEBAR_LINKS = [
  { label: 'Todas Comps', href: '/tft', icon: '📋' },
  { label: '🅾️ Tier S', href: '/tft#tier-S', icon: '' },
  { label: '🅰️ Tier A', href: '/tft#tier-A', icon: '' },
  { label: '🅱️ Tier B', href: '/tft#tier-B', icon: '' },
  { label: 'Buscar Comps', href: '/tft/busca', icon: '🔍' },
  { label: 'Guia de Macro', href: '/tft/guia-macro', icon: '📖' },
]

const TIER_ORDER: TFTTier[] = ['S', 'A', 'B', 'C', 'D']

export default function TFTPage() {
  const tierGroups = TIER_ORDER.map(tier => ({
    tier,
    comps: tftComps.filter(c => c.tier === tier),
  })).filter(g => g.comps.length > 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex gap-8">
        <GameSidebar
          title="Teamfight Tactics"
          links={SIDEBAR_LINKS}
          accentColor="var(--color-border-tft)"
          gameRoute="/tft"
        />

        <div className="flex-1 min-w-0">
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-[var(--color-text-primary)]">
              <span className="text-[var(--color-border-tft)]">♟️</span> TFT Set 16
            </h1>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Composições meta para o Patch 16.6. Tier lists, builds de itens, posicionamento e guias.
            </p>
          </div>

          {/* ALL COMPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {tftComps.map((comp) => (
              <CompCard key={comp.id} comp={comp} />
            ))}
          </div>

          {/* BY TIER */}
          {tierGroups.map(({ tier, comps }) => (
            <section key={tier} id={`tier-${tier}`} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <TierTag tier={tier} />
                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                  Comps Tier {tier}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comps.map((comp) => (
                  <Link
                    key={comp.id}
                    href={`/tft/${comp.slug}`}
                    className="group rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:border-[var(--color-border-tft)] hover:bg-[var(--color-bg-card-hover)]"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <TierTag tier={comp.tier} />
                      <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-accent)]">
                        {comp.name}
                      </h3>
                      {comp.trending && (
                        <span className="ml-auto text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                          HOT
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3">
                      {comp.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {comp.coreChampions.slice(0, 3).map((champ) => (
                        <span
                          key={champ.name}
                          className="px-2 py-0.5 rounded bg-[var(--color-bg-tertiary)] text-xs text-[var(--color-text-secondary)]"
                        >
                          {champ.name} ({champ.cost}💰)
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                      <span>Patch {comp.patch} · {comp.difficulty}</span>
                      <span>⬆ {comp.votes}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
