import axios from 'axios';
import React, { useState } from 'react'

export default function Container() {
    const [items, setItems] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [randomitems, setrandomitems] = useState([]);
    const [username, setusername] = useState("")



    const Login=async()=>{

        try{
          if(!username){
            console.log("please give us your username")
            return
          }
          const response  = await axios.post('https://rule-mining-server.vercel.app/auth/login',{
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


    const fetchItems = async () => {
        try {
          const tokenFromStorage = localStorage.getItem('token');
          if (!tokenFromStorage) {
            console.log("Token not found in local storage");
            return;
          }
          
          const response = await axios.get("https://rule-mining-server.vercel.app/items/all_items", {
            headers: {
              Authorization: `Bearer ${tokenFromStorage}`
            }
          });
          setItems(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };


    const fetchrandomitems = async () => {
        try {
          const tokenFromStorage = localStorage.getItem('token');
          if (!tokenFromStorage) {
            console.log("Token not found in local storage");
            return;
          }
          
          const response = await axios.get("https://rule-mining-server.vercel.app/randomitems/items_randomitems", {
            headers: {
              Authorization: `Bearer ${tokenFromStorage}`
            }
          });
          setrandomitems(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className='container'>

        <div className='loginform'>
    
            <input className='LoginInput' onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Please Enter your username'></input>
            <button className='LoginButton' onClick={Login}>Login</button>
        </div>
        <div className="card">
            <h1>Get Items</h1>
            <button className='LoginButton' onClick={fetchItems}>Get Items</button>
            <ul style={{height:"10px"}}>
                {items.map(item => (
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>




        <div className="card">
            <h1>Random randomitems</h1>
            <button className='LoginButton' onClick={fetchrandomitems}>Get Random randomitems</button>
            <ul style={{height:"10px"}}>
            {randomitems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
            </ul>
        </div>








    </div>
  )
}
