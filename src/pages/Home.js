import React from 'react';
import '../styles/Home.css'
import bkImg from '../assets/pizza.jpeg'
import { Link } from 'react-router-dom';
function Home(){
    
  return (
    <div className='home' style={{backgroundImage:`url(${bkImg})`}}>
        <div className='headerContainer'>
            <h1>Pizzarea</h1>
            <p>PIZZA TO FIR ANY TASTE</p>
           <Link to='/menu'>
                <button>ORDER NOW</button>
           </Link>
        </div>
    </div>
  );

}
export default Home;