import React, { useEffect } from 'react'
import useGetSuperHero from '../useGetSuperHero'

const SuperHero = () => {
    const [superHero, loading] = useGetSuperHero("A-Bomb");

    useEffect(() => {
        console.log(superHero);
    }, [superHero]);

    if (loading) return "loading ..."

    return (
        <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1>{superHero.name}</h1>
                    </div>
                    <div className="col-4">
                        <img src={superHero.images.md} alt={superHero.name} />
                    </div>
                </div>
        </div>
    )
}

export default SuperHero