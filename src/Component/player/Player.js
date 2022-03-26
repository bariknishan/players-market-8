import React, { useEffect, useState } from 'react';
import Chooseplayer from '../Chooseplayer/Chooseplayer';
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
            
             {
            players.map(player=> <Chooseplayer
                key={player.id}
                player={player}
            ></Chooseplayer>)
             }
            </div>
            
            <div className="select-container">
            <h2>this is  selection area</h2>
            </div>
        </div>
    );
};

export default Player;