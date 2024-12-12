import React, { useState } from 'react';
import Menu from './Menu.jsx';

export default function MenuList({count}) {

  // const [ cartCount, setCartCount ] = useState(0);

  const menuList = [
    {"name":"회원가입"},
    {"name":"로그인"},
    {"name":"장바구니"},
    {"name":"주문배송"},
    {"name":"고객센터"},
    {"name":"올영매장"},
    {"name":"Global"}
  ];

  return (
    <ul className='menu-container'>
      {menuList.map( item =>
        <li>
          <Menu name={item.name} count={count}/>
          {/* {(item.name === '장바구니') ? <span>{cartCount}</span> : ''} */}
        </li>
      )}
    </ul>
  );
}

