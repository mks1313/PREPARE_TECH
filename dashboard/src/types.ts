export type Unit = '°C' | '%RH' | 'mV';
export type DeviceStatus = 'online' | 'offline' | 'maintenance';

export interface SensorMeta {
  id: string;
  kind: 'temp' | 'humidity' | 'strain';
  unit: Unit;
  samplingHz: number;
}

export interface Device {
  id: string;
  name: string;
  firmware: string;
  status: DeviceStatus;
  location?: string;
  sensors: SensorMeta[];
}

export interface Reading {
  deviceId: string;
  sensorId: string;
  ts: number;      // epoch ms
  value: number;
}

export interface KPI {
  key: 'activeDevices' | 'avgTemp' | 'alerts24h';
  label: string;
  value: number;
  trend?: 'up' | 'down' | 'flat';
}