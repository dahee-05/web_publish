import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout.jsx';
import Airbnb from '../airbnb/AppAirbnb.jsx';
import Aladin from '../aladin/AppAladin.jsx';
import Avatar from '../avatar/AppAvatar.jsx';
import Counter from '../counter/AppCounter.jsx';
import Olive from '../olive/AppOlive.jsx';
import Yes24 from '../yes24/AppBestSeller.jsx';


export default function AppRouter2() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}> 
            <Route index element={<Home />}/>
            <Route path='/airbnb' element={<Airbnb/>} />
            <Route path='/aladin' element={<Aladin/>} />
            <Route path='/avatar' element={<Avatar/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='/olive' element={<Olive/>} />
            <Route path='/yes24' element={<Yes24/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home(){
  return (
    <h1>Home!!!</h1>
  );
};

/*
 * 1.AppRouter2의 실행
 *  이 컴포넌트 내부에서 <BrowserRouter>와 <Routes>가 초기화
 * 2. 라우트 매칭 및 Layout 컴포넌트 렌더링
 *  BrowserRouter가 현재 URL(path='/')을 확인 -> 
 *  URL 경로 '/'이 <Route path='/' element={<Layout />}>와 매칭되므로, Layout 컴포넌트가 렌더링
 * 3.Layout 컴포넌트 내부 렌더링
 *  Layout 컴포넌트 내부의 <Header>와 <Link>가 먼저 렌더링
 *  <Header>는 'Home' 텍스트를 포함하는 링크(<Link>)를 렌더링합
 *  이 링크는 빈 경로 (to='')를 가리키므로 기본적으로 현재 경로 /로 연결 
 *  Outlet이 렌더링
 * 4. 자식 요소 (<Home />) 렌더링
 *  <Route index element={<Home />}/>가 설정되어 있으므로, 경로가 정확히 '/'일 때 <Home />     
 *  컴포넌트가 Outlet의 자리에 렌더링
 * 
 * Q1)_<a href="/">Home</a>는 Layout에 있는데 <Route index element={<Home />}/>는 왜  
 *  Outlet에서 실행되는거야?
 * <Route index element={<Home />}/>가 <Outlet />에서 실행되는 이유는 React Router의 중첩 
 * 라우팅(nested routing) 개념
 * 
 * Outlet의 역할 ***
 * React Router에서 부모 라우트의 자식 요소(하위 경로에 해당하는 컴포넌트)를 렌더링하기 위한 
 * 플레이스홀더 역할
 * 부모 라우트 (<Route path="/" element={<Layout />}>)가 렌더링될 때, <Outlet />은 자식 
 * 라우트를 탐색하고, 매칭되는 컴포넌트를 그 자리에 렌더링
 * Outlet 없이는 자식 라우트를 표시할 위치를 지정할 수 없음
 * 
 * index 라우트란?
 * <Route index element={<Home />}/>는 부모 경로(/)에서 기본적으로 렌더링될 컴포넌트를 지정
 * index는 부모 라우트의 기본 컴포넌트를 지정하는 키워드
 * URL이 정확히 /일 때, 이 index 라우트의 컴포넌트(<Home />)가 렌더링
 * 
 *  
*/