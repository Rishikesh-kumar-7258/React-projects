import { useState, useEffect } from 'react'

const useGetSuperHero = (name) => {
    const [superHero, setSuperHero] = useState(null)
    const [loading, setloading] = useState(true)
    const [allSuperhero, setallSuperhero] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`)
            const data = await response.json()
            setallSuperhero(data);
        }
        fetchData()

    }, [])

    return [superHero, loading]
}

export default useGetSuperHero