import { faRandom } from '@fortawesome/free-solid-svg-icons';
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
      
        const newCart=[...cart,player];
        setCart(newCart);

    }

     const ChooseOneButton=()=>{
         const random= cart[Math.floor(Math.random()*cart.length)]
         if (cart.length <4 ) {
             alert('choose  Atleast 4 players player')
         }
     }
    const reset=()=>{
        setCart([])
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
           <Cart cart={cart} reset={reset} ChooseOneButton={ChooseOneButton}> </Cart>

            </div>

         





          </div>
          
         
       
    );
};

export default Player;