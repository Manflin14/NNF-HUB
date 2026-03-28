'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { positions } from '@/data/builds'

export default function Navbar() {
  const pathname = usePathname()

  const isEaFc = pathname === '/ea-fc' || pathname.startsWith('/posicao/')
  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[var(--accent)]">NNF</span>
              <span className="text-[var(--text-primary)]"> HUB</span>
            </span>
          </Link>

          {/* Divider */}
          <div className="h-5 w-px bg-[var(--border)] shrink-0" />

          {/* Game link */}
          <Link
            href="/ea-fc"
            className={`flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-semibold transition-colors ${
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
            <span className="hidden sm:inline">EA FC 26</span>
          </Link>

          {/* Position nav — only in EA FC section */}
          {isEaFc && (
            <>
              <div className="h-5 w-px bg-[var(--border)] shrink-0" />
              <nav className="hidden md:flex items-center gap-1 overflow-x-auto min-w-0">
                {positions.map((pos) => (
                  <Link
                    key={pos.slug}
                    href={`/posicao/${pos.slug}`}
                    className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      pathname === `/posicao/${pos.slug}`
                        ? 'bg-[var(--accent)] text-black'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {pos.label}
                  </Link>
                ))}
              </nav>
            </>
          )}

          {/* Home breadcrumb — when not on home */}
          {!isHome && !isEaFc && (
            <span className="text-xs text-[var(--text-secondary)]">EA FC 26</span>
          )}
        </div>
      </div>
    </header>
  )
}
