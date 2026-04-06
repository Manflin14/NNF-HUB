import React from 'react';

/* ============================================
   TYPES
   ============================================ */

export type CardVariant = 'default' | 'elevated' | 'bordered' | 'glow';

export interface CardProps {
  variant?: CardVariant;
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

/* ============================================
   VARIANT MAPS
   ============================================ */

const variantClasses: Record<CardVariant, string> = {
  default:
    'border border-[var(--color-border-primary)] bg-[var(--color-bg-card)]',

  elevated:
    'border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] ' +
    'shadow-[var(--shadow-md)]',

  bordered:
    'border-2 border-[var(--color-slate-600)] bg-[var(--color-bg-card)]',

  glow:
    'border border-[var(--color-emerald-500)] bg-[var(--color-bg-card)] ' +
    'shadow-[var(--shadow-glow-eafc)]',
};

const baseClasses =
  'rounded-[var(--radius-lg)] p-4 ' +
  'transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)]';

/* ============================================
   CARD
   ============================================ */

export function Card({
  variant = 'default',
  hover: withHover = false,
  children,
  className = '',
}: CardProps) {
  return (
    <div
      className={[
        baseClasses,
        variantClasses[variant],
        withHover &&
          'hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-slate-600)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

/* ============================================
   CARD HEADER
   ============================================ */

export function CardHeader({
  children,
  className = '',
}: CardSectionProps) {
  return (
    <div
      className={[
        'flex items-center justify-between pb-3 mb-3',
        'border-b border-[var(--color-border-primary)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

/* ============================================
   CARD CONTENT
   ============================================ */

export function CardContent({
  children,
  className = '',
}: CardSectionProps) {
  return (
    <div className={[className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}

/* ============================================
   CARD FOOTER
   ============================================ */

export function CardFooter({
  children,
  className = '',
}: CardSectionProps) {
  return (
    <div
      className={[
        'flex items-center justify-between pt-3 mt-3',
        'border-t border-[var(--color-border-primary)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
