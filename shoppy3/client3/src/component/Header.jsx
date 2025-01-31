import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Header({cartCnt}) {
  return (
    <div className='header-outer'>
      <div className='header'>
        <div>
          <Link to='/' className='header-left'>
            <FiShoppingBag />
            <span>Shoppy</span>
          </Link>
        </div>
        <div className='header-right'>
          <Link to='/all'>Products</Link>
          <Link to='/carts'>MyCart({cartCnt})</Link>
          <Link to='/login'><button type='button'>Login</button></Link>
          <Link to='/signup'><button type='button'>Signup</button></Link>
        </div>
      </div>
    </div>
  );
}

