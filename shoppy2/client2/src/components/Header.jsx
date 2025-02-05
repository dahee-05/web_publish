import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext';

export default function Header({cartCount}) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // 전역 value 접근 가능
  const navigate = useNavigate();
   
  const handleClickButton = () => {
    if(isLoggedIn){ // 로그인 상태 -> Logout click
      const result = window.confirm('로그아웃 진행하시겠습니까?');
      if(result){
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate('/')
      }
    }else{
      navigate('/login')
    }
  };

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
            <button type='button' onClick={handleClickButton}>
              { isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <Link to='/signup'>
              <button type='button'>Signup</button>
            </Link> 
            <Link to='/employee'>
              <button type='button'>Employees</button>
            </Link>
          </nav> 
       </div>
    </div>
  );
}

// 실질적으로 경로를 보내는 곳
