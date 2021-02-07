import React,{useEffect} from 'react';


const Nasa = ({lat, lon}) => {
    const key = 'wYN5Dx5DUa7fm5NenrhhlcEeHGviL8bfDcB8drgs'
    const url= `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2021-02-07&api_key=${key}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json)
        .then(json=>console.log(json))
    },[])
    return(
        <div>
            <h1>Here's a picture from space!!</h1>
            
        </div>
    )
}

export default Nasa;