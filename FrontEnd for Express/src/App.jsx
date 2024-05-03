import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar.jsx'
import './Styles/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Get_Items from './Components/Get_Items.jsx'
import Random_items from './Components/Random_items.jsx'
import Container from './Components/Container.jsx'
function App() {
  

  return (
  

      <BrowserRouter>
        <Navbar/>

        <Routes>
          {/* <Route path="/" element={<Home email={email}  />} /> */}
          <Route path="/" element={<Container/>} />
          <Route path="/Items" element={<Get_Items/>} />
          <Route path="/RandomItems" element={<Random_items/>} />
        </Routes>
      </BrowserRouter>
   
     
    
    
  )
}

export default App
