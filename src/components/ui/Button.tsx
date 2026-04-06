'use client';

import React from 'react';

/* ============================================
   TYPES
   ============================================ */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

/* ============================================
   VARIANT MAPS
   ============================================ */

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-emerald-500)] text-[var(--color-slate-950)] font-semibold ' +
    'hover:bg-[var(--color-emerald-400)] active:bg-[var(--color-emerald-600)] ' +
    'disabled:bg-[var(--color-slate-600)] disabled:text-[var(--color-slate-400)] ' +
    'disabled:cursor-not-allowed',

  secondary:
    'bg-[var(--color-slate-700)] text-[var(--color-slate-50)] font-medium ' +
    'hover:bg-[var(--color-slate-600)] active:bg-[var(--color-slate-800)] ' +
    'disabled:bg-[var(--color-slate-800)] disabled:text-[var(--color-slate-600)] ' +
    'disabled:cursor-not-allowed',

  outline:
    'bg-transparent border border-[var(--color-slate-600)] text-[var(--color-slate-300)] ' +
    'hover:border-[var(--color-emerald-400)] hover:text-[var(--color-emerald-400)] ' +
    'active:border-[var(--color-emerald-500)] ' +
    'disabled:border-[var(--color-slate-700)] disabled:text-[var(--color-slate-700)] ' +
    'disabled:cursor-not-allowed',

  ghost:
    'bg-transparent text-[var(--color-slate-300)] ' +
    'hover:bg-[var(--color-slate-800)] hover:text-[var(--color-slate-50)] ' +
    'active:bg-[var(--color-slate-700)] ' +
    'disabled:text-[var(--color-slate-700)] disabled:hover:bg-transparent ' +
    'disabled:cursor-not-allowed',

  link:
    'bg-transparent text-[var(--color-emerald-400)] underline underline-offset-4 ' +
    'hover:text-[var(--color-emerald-300)] active:text-[var(--color-emerald-500)] ' +
    'disabled:text-[var(--color-slate-600)] ' +
    'disabled:cursor-not-allowed',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-[var(--radius-sm)] gap-1.5',
  md: 'px-4 py-2 text-sm rounded-[var(--radius-md)] gap-2',
  lg: 'px-6 py-3 text-base rounded-[var(--radius-lg)] gap-2.5',
};

const spinnerSize: Record<ButtonSize, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

/* ============================================
   COMPONENT
   ============================================ */

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className = '',
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={[
        'inline-flex items-center justify-center whitespace-nowrap cursor-pointer',
        'transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emerald-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? (
        <svg
          className={`${spinnerSize[size]} animate-spin`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        leftIcon
      )}

      {children}

      {!isLoading && rightIcon}
    </button>
  );
}
