import React from 'react'
import Home from './pages/Home'

import Navbar from './conponents/Navbar'
import Footer from './conponents/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div> 
  )
}

export default App