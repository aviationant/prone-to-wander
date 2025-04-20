import { useEffect, useState } from 'react';
import { StrapiResponse } from '../components/Blogs';

const useFetch = (url: string): [boolean, string | null, StrapiResponse | null] => {

    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Unknown error");
            }
        }
        fetchData();
    }, [])

    return [loading, error, data]
}

export default useFetch