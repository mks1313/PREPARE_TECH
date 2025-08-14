import type { DeviceStatus } from '../../types';
import Badge from './Badge';

export default function StatusPill({ status }: { status: DeviceStatus }) {
  const v = status === 'online' ? 'green' : status === 'offline' ? 'red' : 'amber';
  return <Badge variant={v}>{status}</Badge>;
}