import React,{useEffect} from 'react';



const Nasa = ({ lat, long }) => {
  console.log(lat, long);

  const key = 'tbatxuwbbitdx9d24pHWVcijgTtUWP6EVXiQNVN4'
  const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2018-02-07&dim=0.025&api_key=${key}`;


  
  return (
    <div>
      <p>Here's a picture of where you are!</p>
      {url ? <img src={url} width="400px" height="400px" /> : <p>no image found</p>}
      </div>
  );
};

export default Nasa;
