import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

/*
 * React Router에서 제공하는 컴포넌트 (중첩 라우팅)구조에서 자식 라우터를 렌더링하는 역할 
 * <Outlet> 사용 이유
 *  : 현재 라우트의 자식 라우트를 렌더링할 위치를 지정하는데 사용
 *  : 부모 라우트는 기본 레이아웃(헤더, 푸터), 자식 라우트는 <Outlet> 위치에 렌더링
*/