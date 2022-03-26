import React, { useEffect, useState } from 'react';
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
                addToList={addToCart}
            ></Chooseplayer>)
             }
            </div>

            <div className="cart-container">
            <h2>Players Checklist</h2>
            <p>Selected Players:{cart.length}</p>
            <br />
            <div className='button-one' ><button ><span className='btn-text1'> Choose One </span> </button> </div>
            <div className='button-two' ><button><span className='btn-text2'> Choose Again</span></button> </div>
            </div>
            </div>
       
    );
};

export default Player;