// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Nasa from './components/Nasa'
import Restaurants from './components/Restaurants'


// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  const location = {
    lat: 20,
    lon: -86
  };

  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      <Weather lat={location.lat} lon={location.lon}/>
      <Restaurants lat={location.lat} lon={location.lon}/>
      <Nasa lat={location.lat} lon={location.lon}/>
    </div>
  );
}

// Makes our Component available for import
export default App;