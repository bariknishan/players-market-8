import React, { useEffect, useState } from 'react';
import './Player.css';

const Player = () => {
    const[players,setPlayers]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        
      
        <div className='header-players'>
           
            <div className="players-container">
             <h2>this is players area:{players.length}</h2>
            </div>
            <div className="select-container">
            <h2>this is  selection area</h2>
            </div>
        </div>
    );
};

export default Player;