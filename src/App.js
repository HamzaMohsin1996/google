import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Google  from './Components/Google';
import Home from './Components/Home';
import Facebook from './Components/Facbook';
import Instagram from './Components/Instagram';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/google" element={<Google/>}/>
          <Route path="/instagram" element={<Instagram/>}/>
          <Route path="/facebook" element={<Facebook/>}/>

        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;