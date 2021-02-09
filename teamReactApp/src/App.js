import React from 'react'
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Weather from './components/Weather'
import Nasa from './components/Nasa'
import Restaurants from './components/Restaurants'


import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({  
  heading: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightBold,
    color: "YELLOW",
      }
     }
));


function App() {
  const classes = useStyles();
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();
 
 React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      },
      (fail) => console.log("Are you a bot?")
    );
  }, [latitude, longitude]);

    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1>72 Hour Group #1 Project</h1>
        <div>
        <h1>NASA</h1>
        <Nasa lat={latitude} long={longitude} />
        </div>
        
        
        <div>
        <h1>Restaurants API from Zomato by Pauline</h1>
                <Restaurants lat={latitude} long={longitude} />
        </div>

        <div>
         <Weather lat={latitude} long={longitude} />
        </div>
      </div>
    );
  }

export default App;
