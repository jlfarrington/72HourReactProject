import React from 'react';

const Nasa = ({lat, lon}) => {
    return(
        <div>
            <h1>Here's a picture from space!</h1>
            <p>{lat}, {lon}</p>
        </div>
    )
}

export default Nasa;