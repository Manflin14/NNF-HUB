'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLink {
  label: string
  href: string
  icon: string
}

interface GameSidebarProps {
  title: string
  links: SidebarLink[]
  accentColor: string
  gameRoute: string
}

export default function GameSidebar({ title, links, accentColor, gameRoute }: GameSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 space-y-4">
        {/* HEADER */}
        <div className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4">
          <Link
            href={gameRoute}
            className="flex items-center gap-2 text-lg font-bold"
            style={{ color: accentColor }}
          >
            {title}
          </Link>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">
            Navegação Rápida
          </p>
        </div>

        {/* LINKS */}
        <nav className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden">
          {links.map((link, i) => {
            const active = pathname === link.href || pathname?.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                  i < links.length - 1 ? 'border-b border-[var(--color-border-primary)]' : ''
                } ${
                  active
                    ? 'font-medium text-[var(--color-text-accent)] bg-[var(--color-bg-tertiary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)]'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
