import React from 'react';

/* ============================================
   TYPES
   ============================================ */

export type BadgeVariant = 'default' | 'solid' | 'outline' | 'ghost';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  color?: string;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

/* ============================================
   VARIANT MAPS
   ============================================ */

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--badge-bg)] text-[var(--badge-text)]',

  solid:
    'bg-[var(--badge-bg)] text-[var(--badge-solid-text)]',

  outline:
    'bg-transparent border border-[var(--badge-border)] text-[var(--badge-text)]',

  ghost:
    'bg-transparent text-[var(--badge-text)]',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 gap-1 text-xs',
  md: 'px-2.5 py-1 gap-1 text-xs',
  lg: 'px-3 py-1.5 gap-1.5 text-sm',
};

const dotSizes: Record<BadgeSize, string> = {
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
};

const badgeDefaults: Record<BadgeVariant, { bg: string; text: string; solidText?: string; border?: string }> = {
  default: {
    bg: 'rgba(16, 185, 129, 0.1)',
    text: 'var(--color-emerald-400)',
  },
  solid: {
    bg: 'var(--color-emerald-500)',
    solidText: '#ffffff',
    text: 'var(--color-emerald-400)',
  },
  outline: {
    bg: 'transparent',
    text: 'var(--color-slate-300)',
    border: 'var(--color-slate-600)',
  },
  ghost: {
    bg: 'transparent',
    text: 'var(--color-text-secondary)',
  },
};

/* ============================================
   COMPONENT
   ============================================ */

export function Badge({
  variant = 'default',
  size = 'md',
  color,
  dot = false,
  children,
  className = '',
}: BadgeProps) {
  const defaults = badgeDefaults[variant];

  const customVars: React.CSSProperties & Record<string, string> = {};

  if (color) {
    customVars['--badge-bg'] = variant === 'solid' ? color : `${color}18`;
    customVars['--badge-text'] = color;
    customVars['--badge-solid-text'] = '#ffffff';
    if (variant === 'outline') {
      customVars['--badge-border'] = color;
    }
  } else {
    customVars['--badge-bg'] = defaults.bg;
    customVars['--badge-text'] = defaults.text;
    if (defaults.solidText) customVars['--badge-solid-text'] = defaults.solidText;
    if (defaults.border) customVars['--badge-border'] = defaults.border;
  }

  return (
    <span
      className={[
        'inline-flex items-center font-medium rounded-[var(--radius-full)] whitespace-nowrap',
        'transition-colors duration-[var(--duration-fast)]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={customVars}
    >
      {dot && (
        <span
          className={[
            'shrink-0 rounded-full',
            dotSizes[size],
            'bg-current',
          ].join(' ')}
        />
      )}

      <span className="truncate max-w-[200px]">{children}</span>
    </span>
  );
}
