import { useEffect, useState } from 'react';
import { getJSON } from '../lib/api';
import type { KPI } from '../types';
import { KpiCard } from '../components/ui/KpiCard';
import { Activity, Thermometer, Bell } from 'lucide-react';
import Skeleton from '../components/ui/Skeleton';

export default function Dashboard() {
  const [kpis, setKpis] = useState<KPI[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const data = await getJSON<KPI[]>('/kpis');
        if (!cancel) setKpis(data);
      } catch (e: any) {
        if (!cancel) setError(e?.message ?? 'Error');
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => { cancel = true; };
  }, []);

  const iconFor = (key: KPI['key']) =>
    key === 'activeDevices' ? <Activity size={18}/> :
    key === 'avgTemp'      ? <Thermometer size={18}/> :
                             <Bell size={18}/>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {loading && (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <Skeleton className="h-24" />
    <Skeleton className="h-24" />
    <Skeleton className="h-24" />
  </div>
)}
      {error && <div className="text-red-600">Error: {error}</div>}

      {kpis && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map(k => (
            <KpiCard
              key={k.key}
              title={k.label}
              value={k.value}
              hint={k.trend ?? '—'}
              icon={iconFor(k.key)}
            />
          ))}
        </div>
      )}
    </div>
  );
}