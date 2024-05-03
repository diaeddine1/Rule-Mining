import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar.jsx'
import './Styles/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Get_Items from './Components/Get_Items.jsx'
import Random_items from './Components/Random_items.jsx'
function App() {
  

  return (
    <>
    {/* <div className='listing'> */}
    <Navbar/>
    <Get_Items/>
    <Random_items/>
    {/* </div> */}
     <BrowserRouter>

        <Routes>
          {/* <Route path="/" element={<Home email={email}  />} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/" element={<Get_Items/>} />
          <Route path="/" element={<Random_items/>} />
        </Routes>
      </BrowserRouter>
   
     
    
    </>
  )
}

export default App
