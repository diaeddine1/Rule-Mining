import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
  const [username, setusername] = useState("")
  const Login=async()=>{

    try{
      if(username==""){
        return
      }
      const response  = await axios.post('http://localhost:3000/auth/login',{
        username:username

      })
      //console.log(response.data.token)
      localStorage.setItem("token",response.data.token)
      console.log(localStorage.getItem('token'))
    }catch(error)
    {
      console.log(error)

    }

  }

  return (
    <div className='loginform'>
    
    <input className='LoginInput' onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Please Enter your username'></input>
    <button className='LoginButton' onClick={Login}>Login</button>
    
    
    
    
    </div>
  )
}
