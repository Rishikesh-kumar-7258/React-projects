import React, { useEffect, useState } from 'react'
import useGetSuperHero from '../useGetSuperHero'

const SuperHero = () => {
    const [id, setid] = useState("1")
    const [superHero, loading] = useGetSuperHero(id);

    useEffect(() => {
        console.log(superHero);
    }, [superHero]);

    if (loading || !superHero) return "loading..."

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input type="text" className="input-group" value={id} onChange={e => setid(e.target.value)} />
                </div>
            </div>
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