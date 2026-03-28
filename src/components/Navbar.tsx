'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { positions } from '@/data/builds'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[var(--accent)]">NNF</span>
              <span className="text-[var(--text-primary)]"> HUB</span>
            </span>
            <span className="rounded bg-[var(--gold)] px-1.5 py-0.5 text-[10px] font-bold text-black">
              FC 26
            </span>
          </Link>

          {/* Position nav */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
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

          {/* Mobile label */}
          <span className="md:hidden text-xs text-[var(--text-secondary)]">EA FC 26</span>
        </div>
      </div>
    </header>
  )
}
