import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import MenuList from './MenuList.jsx';
import HeaderLogo from './HeaderLogo.jsx';

export default function AppHeader() {
  const [ menuList, setMenuList ] = useState([]);

  useEffect(() => {
    fetch('/data/json/header.json')
      .then((data)=>data.json())
      .then((jsonData)=> setMenuList(jsonData.list))
      .catch((error)=>console.log(error))
  },[]);

  return (
    <div className='header'>
      <div className='header-contenet'>
        <HeaderLogo img="/data/images/favicon.ico" name='Judy' alt="logo"/>
        <nav>
          <ul className="header__menu">
            {menuList.map( menu => 
              <MenuList {...menu}/>
            )}
          </ul>
        </nav>
        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>  
  );
}

