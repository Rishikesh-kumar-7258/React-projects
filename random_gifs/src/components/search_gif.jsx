import React, { useState} from 'react'
import useGif from '../useGif';

const Search1 = () => {

    const [gif, getGif] = useGif()
    const [search, setSearch] = useState('dogs');

    return (
        <div className=" w-100">
            <div className="row">
                <div className="col-12"><h1>Random GIF</h1></div>
                <div className="col-12"><img src={gif} alt="random gif" className='my-3'/></div>
                <div className="col-12"><input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/></div>
                <div className="col-12"><button onClick={() => getGif(search)} className="btn btn-primary">Generate next</button></div>
            </div>
        </div>
    )
}

export default Search1