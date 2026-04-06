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
      <div className="sticky top-20 space-y-3">
        {/* HEADER */}
        <Link
          href={gameRoute}
          className="flex items-center justify-between rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 transition-all duration-200 hover:border-[color:var(--sidebar-accent,--color-border-primary)] hover:shadow-md"
          style={{ '--sidebar-accent': accentColor } as React.CSSProperties}
        >
          <div>
            <div className="font-bold text-[var(--color-text-primary)] text-sm" style={{ color: accentColor }}>
              {title}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
              Navegação Rápida
            </div>
          </div>
          <svg className="size-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* LINKS */}
        <nav className="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] overflow-hidden" role="navigation">
          {links.map((link, i) => {
            const active = pathname === link.href || pathname?.startsWith(link.href as string)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                  i < links.length - 1 ? 'border-b border-[var(--color-border-subtle)]' : ''
                } ${
                  active
                    ? 'font-medium bg-[var(--color-bg-tertiary)]/60'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)]/50'
                }`}
              >
                {/* Active indicator */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 rounded-r transition-all duration-200 ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-base shrink-0">{link.icon}</span>
                <span className={`transition-colors ${active ? '' : 'group-hover:text-[var(--color-text-primary)]'}`}
                  style={active ? { color: accentColor } : {}}
                >
                  {link.label}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
