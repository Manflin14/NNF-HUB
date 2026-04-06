import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 flex items-center gap-1 text-sm overflow-x-auto" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1 shrink-0">
          {i > 0 && (
            <svg className="size-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.href ? (
            <Link href={item.href} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[var(--color-text-primary)] whitespace-nowrap">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
