/* 3rd Party Components */
import { useState, useEffect } from 'react';

/* Local Components */
import { apiClient } from './apiClient';

function useRequest(url, params) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);

        setData(null);

        error && setError(!error);

        apiClient(url, { ...params })
            .then(res => {
                setLoading(false);
                setData(res?.data);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                throw new Error(err);
            })

    }, [url])

    return { data, loading, error }
}

export default useRequest;
