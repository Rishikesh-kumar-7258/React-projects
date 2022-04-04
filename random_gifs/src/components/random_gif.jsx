import axios from 'axios';
import React, { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;

const Random1 = () => {

    const [gif, setGif] = useState('');

    const getGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        
        const {data} = await axios.get(url);

        setGif(data.data.images.downsized_large.url);

    }
    
    useEffect(() => {
        
        getGif();
    }, []);

    const handleClick = () => {
        getGif();
    }

    return (
        <div className="container">
            <h1>Random GIF</h1>
            <img src={gif} alt="random gif" />
            <button onClick={handleClick} className="btn btn-primary">Generate next</button>
        </div>
    )
}

export default Random1