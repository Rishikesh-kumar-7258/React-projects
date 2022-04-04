import React from 'react'
import useGif from '../useGif'


const Random1 = () => {

    const [gif, getGif] = useGif();

    return (
        <div className=" w-100">
            <div className="row">
                <div className="col-12"><h1>Random GIF</h1></div>
                <div className="col-12"><img src={gif} alt="random gif" className='my-3'/></div>
                <div className="col-12"><button onClick={() => getGif()} className="btn btn-primary">Generate next</button></div>
            </div>
        </div>
    )
}

export default Random1