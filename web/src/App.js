import Navbar from './components/Navbar';
import './App.css'
import Home from './components/pages/home.js'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React from 'react'



function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home}/>
    </Routes>

   </Router>
   </>
  );
}

export default App;
