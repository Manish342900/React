import Navbar from './components/Navbar';
import './App.css'
import Home from './components/pages/home.js'
import Product from './components/pages/products.js';
import Services from './components/pages/services.js';
import SignUp from './components/pages/signup.js';
import Trailer from  './components/pages/trailer.js'


import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React from 'react'



function App() {
  return (
   <>
   <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' exact Component={Home}/>
      <Route path='/services' Component={Services}/>
      <Route path='/product' Component={Product}/>
      <Route path='/sign-up' Component={SignUp}/>
      <Route path='/trailer' Component={Trailer}/>
    </Routes>

   </Router>
   </>
  );
}

export default App;
