import React from 'react';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout({cartCnt}) {
  return (
    <div>
      <Header cartCnt={cartCnt}/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

