import { useState, useEffect } from 'react';
import { getJSON } from '../lib/api';

export function useFetch<T>(path: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                setLoading(true);
                const d = await getJSON<T>(path);
                if (!cancelled) setData(d);
            } catch (e: any) {
                if (!cancelled) setError(e?.message ?? 'Error');
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {cancelled = true; };
        }, [path]);

    return { data, error, loading };
}