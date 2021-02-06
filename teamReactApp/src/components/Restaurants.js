import React from 'react';

const Restaurants = ({lat, lon}) => {
    return(
        <div>
            <h1>Here are some restaurants</h1>
            <p>{lat}, {lon}</p>
        </div>
    )
}

export default Restaurants;