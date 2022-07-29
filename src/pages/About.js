import React from 'react';
import '../styles/About.css'
import bkImg from '../assets/multiplePizzas.jpeg'

function About(){
  return (
    <div className='about' >
        <div className='aboutTop'style={{backgroundImage:`url(${bkImg})`}} >
        </div>
        <div className='aboutBottom'>
            <h1>
                About Us
            </h1>
            <p>
                Try out pizza Try out pizza Try out pizza 
                Try out pizza Try out pizza 
                Try out pizza Try out pizza Try out pizza Try out pizza 
                Try out pizza Try out pizza Try out pizza Try out pizza Try out pizza  
                Try out pizza Try out pizza  Try out pizza Try out pizza  
                Try out pizza Try out pizza 
            </p>
        </div>
    </div>

  );
}

export default About;