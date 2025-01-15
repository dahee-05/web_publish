import React from 'react';
import {Link} from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header({cartCount}) {

  console.log(cartCount);
    
  return (
    <div className='header-outer'>
       <div className='header'>
          <Link to='/' className='header-left'>
          <FiShoppingBag />
          <span>Shoppy</span>
          </Link>
          <nav className='header-right'>
            <Link to='/all'>Products</Link> 
            <Link to='/carts'>MyCart({cartCount})</Link> 
            <Link to='/login'>
              <button type='button'>Login</button>
            </Link> 
            <Link to='/signup'>
              <button type='button'>Signup</button>
            </Link> 
          </nav> 
       </div>
    </div>
  );
}

// 실질적으로 경로를 보내는 곳
