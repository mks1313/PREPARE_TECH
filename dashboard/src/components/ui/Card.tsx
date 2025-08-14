import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('rounded-2xl border bg-white p-4 shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h3 className={cn('text-sm font-semibold text-slate-700', className)}>{children}</h3>;
}

export function CardValue({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn('text-2xl font-bold', className)}>{children}</div>;
}

export function CardHint({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn('text-xs text-slate-500', className)}>{children}</div>;
}