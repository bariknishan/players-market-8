import React, { useEffect, useState } from 'react';
import Cart from '../Cart';
import Chooseplayer from '../Chooseplayer/Chooseplayers';
import './Player.css';

const Player = () => {
    const[players,setPlayers]=useState([]);

    const[cart, setCart]=useState([])



    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setPlayers(data))
    },[]);




// button event 
    const addToCart=(player)=>{
        console.log(player);
        const newCart=[...cart,player];
        setCart(newCart);
    }
    return (
        
      
        <div className='header-players'>
            
            <div className="players-container"> 
            
             {
            players.map(player=> <Chooseplayer
                key={player.id}
                player={player}
                addToCart={addToCart}
            ></Chooseplayer>)
             }
            </div>

            <div className="cart-container">
           <Cart cart={cart}></Cart>
            </div>
            </div>
       
    );
};

export default Player;