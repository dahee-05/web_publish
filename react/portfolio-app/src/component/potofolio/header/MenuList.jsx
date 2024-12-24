import React, { useState } from 'react';

export default function MenuList(props) {


//  console.log(`isActive---->${props.isActive}`);
 
  // const handle = () => {
  //   click()
  // }
  return (
    <li>
      <a className={`header__menu__item ${props.isActive ? 'active' : ''}`}
         href={props.href}
         onClick={props.onClick}
         >{props.name}
      </a>
    </li>
  );
}

