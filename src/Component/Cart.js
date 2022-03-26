import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div className='cart'>
             <h2>Checklist</h2>
            {/* <p>Selected Players:{cart.length}</p> */}
            <p>Players Name: {cart.map((cart)=><li>{cart.name}</li>)}</p>
            <br />

            <div className='btn' ><button  className='button-one'><span className='btn-text1'> Choose One </span> </button> </div>
            <div className='btn' ><button className='button-two' ><span className='btn-text2'> Choose Again</span></button> </div>
        </div>
    );
};

export default Cart;