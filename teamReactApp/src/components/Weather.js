import { useState, useEffect, useCallback } from "react";

import "./Weather.css";

const Weather = ({ lat, long }) => {
  console.log(lat, long);
  const [weather, setWeather] = useState();
  const [isCelsius, setIsCelsius] = useState(false);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=b8bcac92fa54899a8320e978e38a3ce3`;

  const initWeather = async () => {
    if (lat && long) {
      const response = await fetch(url);
      const weatherData = await response.json();
      console.log(weatherData);
      setWeather(weatherData);
    }
  };

  useEffect(() => {
    initWeather();
  }, [url, lat, long]);

  const toggle = useCallback(() => setIsCelsius(!isCelsius));
  
  return (
    <div className="weatherbox">
      <h1>Here's the Weather in {weather?.name}!</h1>
      <p className="subtitle">fetched by Jenn</p>
      {(isCelsius === false) ? (<div>
      <p>Current temperature: {weather?.main.temp}&deg;</p>
      <p>Today's high: {weather?.main.temp_max}&deg;</p>
      <p>Today's low: {weather?.main.temp_min}&deg;</p>
      <p>Humidity: {weather?.main.humidity}%</p>
      <button onClick={toggle}>Switch to Celsius</button>
      </div>)
      : <div><p>Current temperature: {((weather?.main.temp) -32) * (5/9)}&deg;</p>
      <p>Today's high: {((weather?.main.temp_max) -32) * (5/9)}&deg;</p>
      <p>Today's low: {((weather?.main.temp_min) -32) * (5/9)}&deg;</p>
      <p>Humidity: {weather?.main.humidity}%</p>
      <button onClick={toggle}>Switch to Fahrenheit</button>
      </div> }
    </div>
  );
};

export default Weather;
