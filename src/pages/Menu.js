import React from 'react';
import { MenuList } from '../menuParts/MenuList';
import MenuItem from '../menuParts/MenuItem';
import '../styles/Menu.css';

function Menu(){
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='MenuList'>
        {MenuList.map((mItm)=>{
          return(
            <MenuItem
            image={mItm.image}
            name={mItm.name}
            price={mItm.price}
            />
          )
        })}
      </div>
      
    </div>

  );
}
export default Menu;