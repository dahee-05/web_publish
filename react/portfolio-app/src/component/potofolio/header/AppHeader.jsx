import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import MenuList from './MenuList.jsx';
import HeaderLogo from './HeaderLogo.jsx';

export default function AppHeader() {
  const [ menuList, setMenuList ] = useState([]);
  const [isActive, setIsActive ] = useState(0);
  const [ activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    fetch('/data/json/header.json')
      .then((data)=>data.json())
      .then((jsonData)=> setMenuList(jsonData.list))
      .catch((error)=>console.log(error))
  },[]);
 
  const handleOnClick = (idx) => {
    setActiveIndex(idx)
  };

  const handleOnClick1 = (idx) => {
    console.log('11', idx)
    // setActiveIndex(idx)
  };

  const handleOnClick2 = (idx) => {
    console.log('22', idx)
    setActiveIndex(idx)
  };
  // console.log(activeIndex);
  

  return (
    <div className='header'>
      <div className='header-contenet'>
        <HeaderLogo img="/data/images/favicon.ico" name='Judy' alt="logo"/>
        <nav>
          <ul className="header__menu">
            {menuList.map((menu, idx) => 
              <MenuList {...menu} 
              idx={idx} 
              isActive = {activeIndex === idx}
              onClick = {()=>handleOnClick(idx)}
              />
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

