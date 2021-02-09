import { useState, useEffect, useCallback } from "react";
const Nasa = ({ lat, long }) => {
  console.log(lat, long);
  const [data, setData] = useState();
  const urlCreator = window.URL || window.webkitURL;

  const initImgSrc = async () => {
    if (lat && long) {
        const key = 'wYN5Dx5DUa7fm5NenrhhlcEeHGviL8bfDcB8drgs'
        const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2018-02-07&api_key=${key}`
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'application/json',
            })})
        const blobData = await response.blob();
      setData(blobData);
    }
  };
  useEffect(() => {
    initImgSrc();
  }, [lat, long]);
  return (
    <div>
      Hello
      {data && <img src={urlCreator.createObjectURL(data)}/>}
    </div>
  );
};
export default Nasa;


