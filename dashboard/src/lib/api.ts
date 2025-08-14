const raw = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';
const base = raw.replace(/\/+$/, '');

export async function getJSON<T>(path: string): Promise<T> {
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}