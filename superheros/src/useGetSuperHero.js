import axios from 'axios'
import { useState, useEffect } from 'react'

const useGetSuperHero = (id) => {
    const [superHero, setSuperHero] = useState(null)
    const [loading, setloading] = useState(true)

    if (id === null || id === '') id = '1';

    useEffect(() => {

        let cancel;
        setloading(true);
        axios({
            method: 'get',
            url : `https://akabab.github.io/superhero-api/api/id/${id}.json`,
            cancelToken : new axios.CancelToken(c => cancel = c)
        })
        .then(res => {
            setSuperHero(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return;
        })

        setloading(false)
        return () => cancel()

    }, [id])

    return [superHero, loading]
}

export default useGetSuperHero