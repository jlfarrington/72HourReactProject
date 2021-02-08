import React,{useEffect} from 'react';


const Nasa = ({lat, long}) => {
  

    return(
        <div>
            <h1>Here's a picture from space!</h1>
            <p>{lat} {long}</p>
        </div>
    )
}

export default Nasa;