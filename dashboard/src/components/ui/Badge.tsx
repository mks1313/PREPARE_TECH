import type { ReactNode } from 'react';

type Variant = 'gray' | 'green' | 'red' | 'amber' | 'blue';
const variants: Record<Variant, string> = {
  gray:  'bg-slate-100 text-slate-700',
  green: 'bg-green-100 text-green-700',
  red:   'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  blue:  'bg-blue-100 text-blue-700',
};

export default function Badge({
  children, variant = 'gray',
}: { children: ReactNode; variant?: Variant }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}