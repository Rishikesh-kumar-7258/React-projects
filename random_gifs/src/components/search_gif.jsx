import axios from 'axios';
import React, { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;

const Search1 = () => {

    const [gif, setGif] = useState('');
    const [search, setSearch] = useState('dogs');

    const getGif = async (value) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${value}`;
        
        const {data} = await axios.get(url);

        setGif(data.data.images.downsized_large.url);

    }
    
    useEffect(() => {
        getGif(search);
    }, []);

    const handleClick = () => {
        getGif(search);
    }

    return (
        <div className="container">
            <h1>Random GIF</h1>
            <img src={gif} alt="random gif" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleClick} className="btn btn-primary">Generate next</button>
        </div>
    )
}

export default Search1