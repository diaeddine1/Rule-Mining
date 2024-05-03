import axios from 'axios';
import React, { useState } from 'react'

export default function Random_items() {
    const [items, setItems] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
  
    
  
    const fetchItems = async () => {
      try {
        const tokenFromStorage = localStorage.getItem('token');
        if (!tokenFromStorage) {
          console.log("Token not found in local storage");
          return;
        }
        
        const response = await axios.get("http://localhost:3000/items/random_items", {
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
  
    return (
      <div className="card">
        <h1>Random Items</h1>
        <button className='LoginButton' onClick={fetchItems}>Get Random Items</button>
        <ul style={{height:"10px"}}>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  