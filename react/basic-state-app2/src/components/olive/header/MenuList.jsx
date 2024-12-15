import React from 'react';
import Menu from './Menu';

export default function MenuList({cartTotal}) {
  const menuList = [
    {"title":"회원가입"},
    {"title":"로그인"},
    {"title":"장바구니"},
    {"title":"주문배송"},
    {"title":"고객센터"},
    {"title":"올영매장"},
    {"title":"Global"}
  ]; 

  return (
    <div className='menu-container'>
      <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" alt="" />
      <div className='menu-list'>
        {menuList.map( itme =>
          <Menu title={itme.title} total={cartTotal}/>
        )}
      </div>
    </div>
  );
}

