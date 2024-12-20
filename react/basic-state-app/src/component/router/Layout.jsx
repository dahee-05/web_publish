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
여기가 어제 쌤이랑 배운 라우터인데 이렇게 주면 될 것 같았는데 
내 프로젝트에 적용하려고 찾아보니 보통은 App.js에서 라우터를 적용한다는거야야
그래서 App.js로 가서 이렇게 만ㄷ들어 봤는데 
링크를 걸어줄 곳은 헤더잖아 
그래서 이전에 만든 헤더레 링크테그를 걸었더니 
<BrowserRouter> 태그 안에 속하지 않아서 오류가 난데 
왜냐하면 내 코드는 AppPotofolio에 헤더.바디,풋터 이렇게 넣어놓고 
헤더의 AppHeader안에 링크 태그를 남겼거든 
그래서 챗한테 물어보니 그럼 AppHeader안의 
<Header>
  <AppHeader/>
</Header> 이부분을 삭제하고 App.js에서 연동되게 하라는거야  
그래서 이런 구조가  맞나 해서 물어보고 싶었어

App.js는 불러오지 않고 기본 루트에 잇는걸로 사용했구 나머지 헤드의 메뉴리스트 들을 그냥 Element에 선언했엉

어디다가 선언을 해야해?? 링크를 사용하는 곳에 선언해서 써야하는건가


