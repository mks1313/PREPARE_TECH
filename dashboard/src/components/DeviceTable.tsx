import type { Device } from '../types';
import StatusPill  from './ui/StatusPill';

export default function DeviceTable({ items }: { items: Device[] }) {
  return (
    <div className="overflow-auto rounded-2xl border bg-white">
      <table className="min-w-full text-sm">
        <thead className="sticky top-0 bg-slate-50 text-left text-slate-600 border-b">
          <tr>
            <th className="p-3 font-medium">Name</th>
            <th className="p-3 font-medium">Status</th>
            <th className="p-3 font-medium">Firmware</th>
            <th className="p-3 font-medium">Sensors</th>
            <th className="p-3 font-medium">Location</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d, i) => (
            <tr key={d.id} className={`border-t ${i % 2 ? 'bg-slate-50/50' : ''} hover:bg-slate-100/60`}>
              <td className="p-3 font-medium">{d.name}</td>
              <td className="p-3"><StatusPill status={d.status} /></td>
              <td className="p-3">{d.firmware}</td>
              <td className="p-3">{d.sensors?.length ?? 0}</td>
              <td className="p-3">{d.location ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}