import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Chooseplayers.css';

const Chooseplayer = (props) => {
    // console.log(props.player)

    // console.log(props)
    const{img,name,id,price}=props.player;
  

    return (
        <div className='player'>
           <img src={img} alt="" />

          <div className='player-detail'>
          <p className='player-name'>{name}</p>
           <p>ID:{id}</p>
           <p>Price:${price}</p>  
          </div>
          <button onClick={()=>props.addToCart(props.player)} className='btn-area'><p>ADD TO CART</p>
          
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Chooseplayer;