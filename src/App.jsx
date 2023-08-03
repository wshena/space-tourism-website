// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from "./pages/Destination"
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      <Routes>
        <Route path='/destination' Component={Destination} />
      </Routes>
      <Routes>
        <Route path='/crew' Component={Crew} />
      </Routes>
      <Routes>
        <Route path='/technology' Component={Technology} />
      </Routes>
    </Router>    
    </>
  )
}

export default App
