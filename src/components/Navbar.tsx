'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { positions } from '@/data/builds'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isEaFc = pathname === '/ea-fc' || pathname.startsWith('/posicao/')
  const isTft = pathname === '/tft' || pathname.startsWith('/tft/')
  const isHome = pathname === '/'

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center gap-4 sm:gap-6">
          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[var(--accent)]">NNF</span>
              <span className="text-[var(--text-primary)]"> HUB</span>
            </span>
          </Link>

          {/* Divider */}
          <div className="hidden sm:block h-5 w-px bg-[var(--border)] shrink-0" />

          {/* EA FC link */}
          <Link
            href="/ea-fc"
            onClick={closeMobile}
            className={`hidden sm:flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              isEaFc
                ? 'bg-[var(--gold-dim)] text-[var(--gold)]'
                : 'text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span
              className="rounded px-1 py-0.5 text-[9px] font-bold text-black"
              style={{ background: 'var(--gold)' }}
            >
              FC 26
            </span>
            <span>EA FC 26</span>
          </Link>

          {/* TFT link */}
          <Link
            href="/tft"
            onClick={closeMobile}
            className={`hidden sm:flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              isTft
                ? 'bg-[#c084fc]/10 text-[#c084fc]'
                : 'text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span
              className="rounded px-1 py-0.5 text-[9px] font-bold text-black"
              style={{ background: '#c084fc' }}
            >
              S16
            </span>
            <span>TFT</span>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Position nav — desktop only */}
          {isEaFc && (
            <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
              {positions.map((pos) => (
                <Link
                  key={pos.slug}
                  href={`/posicao/${pos.slug}`}
                  className={`shrink-0 rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                    pathname === `/posicao/${pos.slug}`
                      ? 'bg-[var(--accent)] text-black'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {pos.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Hamburger — EA FC section only */}
          {isEaFc && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Abrir navegação de posições"
            >
              {mobileOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}

          {/* Hamburger — other pages (mobile nav) */}
          {!isEaFc && !isHome && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--border)] pt-3 space-y-1 animate-in">
            {/* Game links */}
            {(isHome || isTft || pathname.startsWith('/tft/')) && (
              <>
                <Link
                  href="/ea-fc"
                  onClick={closeMobile}
                  className="flex items-center gap-2 rounded px-3 py-2 text-sm font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
                >
                  <span className="rounded px-1.5 py-0.5 text-[10px] font-bold text-black" style={{ background: 'var(--gold)' }}>FC 26</span>
                  EA FC 26
                </Link>
              </>
            )}
            {(isHome || isEaFc || pathname.startsWith('/posicao/')) && (
              <Link
                href="/tft"
                onClick={closeMobile}
                className="flex items-center gap-2 rounded px-3 py-2 text-sm font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
              >
                <span className="rounded px-1.5 py-0.5 text-[10px] font-bold text-black" style={{ background: '#c084fc' }}>S16</span>
                TFT Set 16
              </Link>
            )}

            {/* Positions when in EA FC */}
            {isEaFc && (
              <div className="pt-2 space-y-0.5">
                <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                  Posições
                </p>
                {positions.map((pos) => (
                  <Link
                    key={pos.slug}
                    href={`/posicao/${pos.slug}`}
                    onClick={closeMobile}
                    className={`flex items-center gap-2 rounded px-3 py-1.5 text-sm font-semibold transition-colors ${
                      pathname === `/posicao/${pos.slug}`
                        ? 'bg-[var(--accent)] text-black'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {pos.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
