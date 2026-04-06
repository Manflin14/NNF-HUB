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
    <nav className="mb-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-[var(--color-text-muted)]">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[var(--color-text-primary)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
