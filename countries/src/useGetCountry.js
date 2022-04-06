import axios from 'axios';
import { useState, useEffect } from 'react'

const useGetCountry = (name) => {
    const [country, setCountry] = useState(null)
    const [loading, setloading] = useState(false);

    useEffect(() => {
        let cancel;
        setloading(true);
        axios({
            method: 'GET',
            url: `https://restcountries.com/v3.1/name/${name}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setCountry(res.data);
            setloading(false);
        })
            .catch(e => {
                if (axios.isCancel(e)) return;
            })

        return () => cancel();
    }, [name])

    return [country, loading]
}

export default useGetCountry