'use client';

import { forwardRef, useState } from 'react';

/* ============================================
   TYPES
   ============================================ */

export type InputVariant = 'default' | 'search';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
}

/* ============================================
   INLINE SVG ICONS
   ============================================ */

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-[var(--color-slate-500)] shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

/* ============================================
   COMPONENT
   ============================================ */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      label,
      error,
      leftIcon,
      rightIcon,
      onClear,
      className = '',
      disabled = false,
      id,
      onChange,
      defaultValue,
      value: controlledValue,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const hasValue = controlledValue
      ? String(controlledValue).length > 0
      : String(internalValue).length > 0;

    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    /* State-derived class string */
    const stateClasses = error
      ? 'border-[var(--color-red-400)] focus-visible:border-[var(--color-red-400)] ' +
        'focus-visible:ring-[var(--color-red-400)] ' +
        'placeholder:text-[var(--color-red-300)]'
      : disabled
        ? 'border-[var(--color-slate-700)] ' +
          'text-[var(--color-slate-600)] placeholder:text-[var(--color-slate-600)] ' +
          'bg-[var(--color-slate-900)] cursor-not-allowed'
        : 'border-[var(--color-slate-700)] hover:border-[var(--color-slate-600)] ' +
          'focus-visible:border-[var(--color-emerald-500)] focus-visible:ring-[var(--color-emerald-500)] ' +
          'placeholder:text-[var(--color-slate-500)]';

    const hasLeft = variant === 'search' || leftIcon;
    const hasRight =
      (onClear && hasValue && variant === 'search') || rightIcon;

    const clearBtn =
      onClear && hasValue && variant === 'search' ? (
        <button
          type="button"
          tabIndex={-1}
          className="p-0.5 rounded-full text-[var(--color-slate-500)] hover:text-[var(--color-slate-300)] transition-colors"
          onClick={() => {
            setInternalValue('');
            onClear();
          }}
          aria-label="Clear input"
        >
          <XIcon />
        </button>
      ) : (
        rightIcon
      );

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {hasLeft && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
              {variant === 'search' ? <SearchIcon /> : leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={[
              'w-full bg-[var(--color-slate-800)] text-[var(--color-text-primary)]',
              'text-sm px-3 py-2 rounded-[var(--radius-md)]',
              'border transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
              stateClasses,
              hasLeft && 'pl-9',
              hasRight && 'pr-9',
              disabled && 'opacity-60',
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            onChange={(e) => {
              setInternalValue(e.target.value);
              onChange?.(e);
            }}
            {...rest}
          />

          {hasRight && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              {/* Re-enable pointer events on clear button */}
              {clearBtn && (
                <div className="pointer-events-auto">{clearBtn}</div>
              )}
              {!clearBtn && rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-xs text-[var(--color-red-400)]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
