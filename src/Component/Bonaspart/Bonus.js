import React from 'react';
import './Bonus.css';

const Bonus = () => {
    return (
        <div>
            
       <div className="bonus-container">
            <div className="react-para">

            <h1>HOW REACT WORKS:</h1> 
            <p className='fisrt-para'>At first react bassically maintain a tree. <br /> 
                                      This tree  is able to do efficient diff computation on the nodes.<br /> 
                                      Think og HTML code as tree. <br/> Infact that is exactly How the browser treates the DOM.<br /> 
                                      Then reacts allows to   effectively re-contsruct the DOM  in javasript and push only <br /> 
                                       those changes  to the DOM which hav actually occured.</p>
               </div>

            <div className="props-state">

            <h1> PROPS AND STATE: </h1> 
            <h2>Props: </h2> 
            <p className='second-para'>
             props can be used with state and funtional component. <br />
             props are used to pass data one component to another.
            </p>

            <h2>State </h2> 
            <p className='second-para'>
             State only used with state and state/class component. <br />
             State can not pass data to one component to another.
            </p>
               </div>
           
              </div>

        </div>
    );
};

export default Bonus;