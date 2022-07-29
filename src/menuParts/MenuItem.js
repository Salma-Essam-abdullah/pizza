import React from "react";
import '../styles/Menu.css'

function MenuItem(props){
    return(
        <div className='menuItem'>
            <div style={{backgroundImage: `url(${props.image})`}}></div>
            <p>{props.name}</p>
            <p> $ {props.price}</p>

        </div>
    )
}
export default MenuItem;