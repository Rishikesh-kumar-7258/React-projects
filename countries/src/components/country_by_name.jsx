import React, { useEffect, useState } from 'react'
import useGetCountry from '../useGetCountry'

const CountryByName = () => {
    const [inputValue, setinputValue] = useState('')
    const [name, setname] = useState("india")
    const [country, loading] = useGetCountry(name)

    // if (loading || country === null) return "Loading...";

    useEffect(() => {
        if (country) console.log(country)
    }, [country])

    if (!country || loading) return "Loading..."

    return (
        <div className="container p-5">

            <div className="row m-5">
                <CountryCard countries={country} />
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="searchInput" placeholder="India" value={inputValue} onChange={e => setinputValue(e.target.value)} />
                        <label htmlFor="searchInput">Search country</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => setname(inputValue)}>search</button>
                </div>
            </div>
        </div>
    )
}

const CountryCard = (props) => {
    return (
        props.countries.map(element => {
            return (
                <div className="col-12 col-md-6 m-auto" key={element.name}>
                    <div className="card bg-dark will-flip" >
                        <img src={element.flags.svg} className="card-img-top" alt={element.name.common} />
                        <div className="card-img-overlay">
                            <h4 className="card-title">{element.name.common}</h4>
                        </div>
                    </div>
                    <div className="flip-card card border bg-dark text-white">
                        <div className="card-title">{element.name.common}</div>
                    </div>
                </div>
            )
        })
    )
}

export default CountryByName