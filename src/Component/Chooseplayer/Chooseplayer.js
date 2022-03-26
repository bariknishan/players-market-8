import React from 'react';
import './Chooseplayer.css';

const Chooseplayer = (props) => {
    // console.log(props.player)
    const{img,name,id,price}=props.player;

    return (
        <div className='player'>
           <img src={img} alt="" />

          <div className='player-detail'>
          <p className='player-name'>{name}</p>
           <p>ID:{id}</p>
           <p>Price:${price}</p>  
          </div>
          <button className='btn-area'><p>ADD TO LIST</p></button>
        </div>
    );
};

export default Chooseplayer;