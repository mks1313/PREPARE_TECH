import type { ReactNode } from 'react';

export function KpiCard({
  title, value, hint, icon,
}: { title: string; value: ReactNode; hint?: ReactNode; icon?: ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm flex items-start gap-3">
      {icon && <div className="rounded-xl border p-2">{icon}</div>}
      <div className="flex-1">
        <div className="text-sm text-slate-600">{title}</div>
        <div className="text-2xl font-bold leading-tight">{value}</div>
        {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
      </div>
    </div>
  );
}