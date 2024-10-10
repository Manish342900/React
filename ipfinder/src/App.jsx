import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import ReactMapGl from 'react-map-gl'
import {useState} from 'react'

function App() {
  const API_KEY='pk.eyJ1IjoibWFuaXNoMDAiLCJhIjoiY20yMXA5ODM3MHQ4eTJqcjFzY2VvOWh3aCJ9.rqiY0LbVB9O0l7_EY5CvXQ';
  const [viewPort , setViewPort]=useState({
    latiude:28.6448,
    longitude:77.216,
    zoom:10,
  });

  return (
    <>
    <div>
      <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken={API_KEY}
      width="100%"
      height="100%"

      mapStyle="mapbox://styles/manish00/cm23j4ru500cf01qvha000hsp"
      >
      
      </ReactMapGl>
    </div>
    </>
    
  );
}

export default App;
