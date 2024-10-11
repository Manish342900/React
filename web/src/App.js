import Navbar from './components/Navbar';
import './App.css'
import Home from './components/pages/home.js'
import Product from './components/pages/products.js';
import Services from './components/pages/services.jsx';
import SignUp from './components/pages/signup.jsx';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React from 'react'



function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/home' exact Component={Home}/>
      <Route path='/services' Component={Services}/>
      <Route path='/product' Component={Product}/>
      <Route path='/sign-up' Component={SignUp}/>


    </Routes>

   </Router>
   </>
  );
}

export default App;
