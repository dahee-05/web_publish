import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';


export default function Layout({cartCount}) {
  return (
    <div>
      <Header cartCount={cartCount}/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
/*
 * React Router에서 제공하는 컴포넌트 (중첩 라우팅)구조에서 자식 라우터를 렌더링하는 역할 
 * <Outlet> 사용 이유
 *  : 
*/
