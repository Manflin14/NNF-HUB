'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'EA FC', href: '/ea-fc' },
  { label: 'TFT', href: '/tft' },
  { label: 'Dashboard', href: '/dashboard' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-sticky transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]/90 shadow-lg shadow-black/20'
          : 'border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]/80'
      } backdrop-blur-xl`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2 text-lg font-black">
          <span className="bg-gradient-to-r from-[var(--color-emerald-400)] via-[var(--color-emerald-300)] to-[var(--color-violet-400)] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[var(--color-emerald-300)] group-hover:to-[var(--color-violet-300)]">
            NNF
          </span>
          <span className="text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text-secondary)]">
            HUB
          </span>
          <span className="ml-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-emerald-400)] border border-emerald-500/20">
            v2
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href as string))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]/50'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[var(--color-emerald-400)] to-[var(--color-violet-400)]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/ea-fc/busca"
            className="flex items-center gap-2 rounded-lg border border-[var(--color-border-primary)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-emerald-500)]/50 hover:text-[var(--color-text-primary)] hover:bg-[var(--color-emerald-500)]/5"
            aria-label="Buscar builds e composições"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Buscar
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex items-center justify-center size-10 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-lg hover:bg-[var(--color-bg-tertiary)]/50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <svg className="size-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/95 backdrop-blur-xl animate-fadeIn">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-[var(--color-emerald-500)]/10 text-[var(--color-emerald-400)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[var(--color-border-primary)] mt-2">
              <Link
                href="/ea-fc/busca"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]/50 transition-all"
              >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
