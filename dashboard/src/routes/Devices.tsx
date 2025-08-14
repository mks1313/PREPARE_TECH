import { useMemo, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import type { Device } from '../types';
import DeviceTable from '../components/DeviceTable';
import { Card } from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import Empty from '../components/ui/Empty';

export default function Devices() {
  const { data, error, loading } = useFetch<Device[]>('/devices');
  type FilterStatus = 'all' | 'online' | 'offline' | 'maintenance';

  const [q, setQ] = useState('');
  const [status, setStatus] = useState<FilterStatus>('all');

  const filtered = useMemo(() => {
    if (!data) return [];
    const qn = q.trim().toLowerCase();
    return data.filter(d => {
      const okStatus = status === 'all' ? true : d.status === status;
      const okText =
        !qn ||
        d.name.toLowerCase().includes(qn) ||
        d.firmware.toLowerCase().includes(qn) ||
        (d.location?.toLowerCase().includes(qn) ?? false);
      return okStatus && okText;
    });
  }, [data, q, status]);

  function handleStatus(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(e.target.value as FilterStatus);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Devices</h1>

      <Card className="flex flex-wrap items-center gap-3">
        <label htmlFor="q" className='sr-only'>Buscar</label>
        <input
          id="q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nombre, firmware, ubicación…"
          className="px-3 py-2 border rounded-md w-72"
        />
        <label htmlFor="status" className='sr-only'>Estado</label>
        <select
          id="status"
          value={status}
          onChange={handleStatus}
          className="px-3 py-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </Card>

      {loading && <div className="flex items-center gap-2 text-slate-500"><Spinner/> Cargando…</div>}
      {error && <div className="text-red-600">Error: {error}</div>}

      {data && filtered.length > 0 && <DeviceTable items={filtered} />}
      {data && filtered.length === 0 && !loading && !error && <Empty text="No results." />}
    </div>
  );
}