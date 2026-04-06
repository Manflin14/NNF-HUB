import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* DECORATIVE TOP LINE */}
        <div className="mb-10 h-px bg-gradient-to-r from-transparent via-[var(--color-border-subtle)] to-transparent" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-lg font-black">
                <span className="bg-gradient-to-r from-[var(--color-emerald-400)] to-[var(--color-violet-400)] bg-clip-text text-transparent">
                  NNF
                </span>
                <span className="text-[var(--color-text-muted)]"> HUB</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Hub profissional de builds e estratégias para jogos competitivos.
              Feito pela comunidade, para a comunidade.
            </p>
          </div>

          {/* EA FC */}
          <div>
            <h4 className="mb-4 font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <span className="text-[var(--color-emerald-400)]">⚽</span> EA FC 26
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ea-fc" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-emerald-400)] transition-colors">
                  Todas as Builds
                </Link>
              </li>
              <li>
                <Link href="/ea-fc/busca" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-emerald-400)] transition-colors">
                  Buscar Builds
                </Link>
              </li>
              <li>
                <Link href="/ea-fc/guia-taticas" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-emerald-400)] transition-colors">
                  Guia de Táticas
                </Link>
              </li>
            </ul>
          </div>

          {/* TFT */}
          <div>
            <h4 className="mb-4 font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
              <span className="text-[var(--color-violet-400)]">♟️</span> TFT
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tft" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-violet-400)] transition-colors">
                  Todas as Comps
                </Link>
              </li>
              <li>
                <Link href="/tft/busca" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-violet-400)] transition-colors">
                  Buscar Comps
                </Link>
              </li>
              <li>
                <Link href="/tft/guia-macro" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-violet-400)] transition-colors">
                  Guia de Macro
                </Link>
              </li>
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="mb-4 font-semibold text-[var(--color-text-primary)]">Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-primary)] pt-6 md:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 NNF HUB. Projeto não oficial — não afiliado à EA Sports ou Riot Games.
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs text-[var(--color-text-muted)] border border-[var(--color-border-primary)]">
              v2.0.0
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Next.js 15 + TailwindCSS 4
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
