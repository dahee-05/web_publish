import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header.jsx';
import Login from '../form/Login.jsx';
import Signup from '../form/Signup.jsx';
import BestSeller from '../yes24/AppBestSeller.jsx';

export default function Layout() {
  return (
    <div>
      <Header>
        <Link to="" style={{'padding':'20px'}}>Home</Link>
        <Link to="/login" style={{'padding':'20px'}}>Login</Link>
        <Link to="signup" style={{'padding':'20px'}}>Signup</Link>
        <Link to="/about" style={{'padding':'20px'}}>About</Link>
        <Link to="/Support" style={{'padding':'20px'}}>Support</Link>
        <Link to="/bestseller" style={{'padding':'20px'}}>Bestseller</Link>
      </Header>
      <Outlet />
      {/* <Footer></Footer> */}
    </div>
  );
}
/*
 * Outlet 안은 내용이 계속해서 바뀌기 때문에 안의 내용이 추가되어 계속 바뀜
 * Link === a태그 같은 역할
 * <Link to="">Home</Link> -->root로 이동,index라 링크x * 
 * 
 * 
*/
