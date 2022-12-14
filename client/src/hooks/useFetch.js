import React, { useState, useEffect } from 'react'

export const useFetch = ({ url, token }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log(url, token);
    useEffect(() => {
        // const abortController = new AbortController();
        const dataFetch = async () => {
            try {
                const resp = await fetch(url,
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${JSON.parse(token)}`,
                            'Content-Type': 'application/json'
                        },
                    });
                const data = await resp.json();
                // console.log(data);
                setData(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        dataFetch();      

        // return () => {
        //     abortController.abort();
        // }
    }, [url]);
    return { data, loading };
}

/**
 * 
 * fetch(url,
            {
                method: 'GET',
                headers: { 
                    'Authorization': `Bearer ${JSON.parse(token)}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                // console.log(response);
                response.json()
            })
            .then((curr) => {
                setLoading(false);
                setData(curr);
                console.log(curr);
            })
            .catch((e) => {
                setLoading(true);
                console.log(e);
            })
 * 
 */