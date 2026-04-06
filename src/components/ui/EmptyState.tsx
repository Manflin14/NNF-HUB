'use client';

import React from 'react';
import { Button } from './Button';

/* ============================================
   TYPES
   ============================================ */

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/* ============================================
   COMPONENT
   ============================================ */

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={[
        'flex flex-col items-center justify-center',
        'py-12 px-6 rounded-[var(--radius-xl)]',
        'bg-[var(--color-bg-secondary)]',
        'text-center',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon && (
        <div className="mb-4 text-4xl text-[var(--color-slate-400)]">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-[var(--color-text-secondary)] max-w-xs mb-5">
          {description}
        </p>
      )}

      {action && (
        <Button variant="primary" size="md" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
