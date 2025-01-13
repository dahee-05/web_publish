import React from 'react';

export default function AppHeader() {
  return (
    <div className='header-content'>
      <div className='header-top'>
        <div className='header-top-l-menulist'>
          <span><a href="#">친구추천</a></span>
          <span><a href="#">고객센터</a></span>
          <span><a href="#">이벤트/기획전</a></span>
        </div>
        <nav className='header-top-r-menulist'>
          <ul>
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><a href="#">자주구매</a></li>
            <li><a href="#">주문/배송조회</a></li>
          </ul>
        </nav>
      </div>

      <div className='header-middle'>

      </div>

      <div className='header-bottom'>

      </div>
    </div>
  );
}

