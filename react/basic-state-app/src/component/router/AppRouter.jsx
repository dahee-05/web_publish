import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Support from './Support.jsx';
import CgvLoginForm from '../form/CgvLoginForm.jsx';
import Signup from '../form/Signup.jsx';
import AppBestSeller from '../yes24/AppBestSeller.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>} />
          <Route path='/login' element={<CgvLoginForm/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/bestseller' element={<AppBestSeller/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}





/* 
 * { BrowserRouter, Routes, Route } -> 대문자로 함수가 아닌 컴포넌트 **** 
 * 코드를 넣어 화면에 출력하는 것이 아닌 이동에 길을 안내해주는 아이
 * <Route>가 가지고 있는 기본 풀옵스 === path='경로' === 들어오면 누구를 보여줄지 정함
 * path='/' -> 기본 경로 / element={}를 통해 컴포넌트를 넣어줌 ->Home의 컴포넌트를 넣어줌
 * index는 기본페이지가 나오고 path='/about'를 사용하여 url을 지정해 새로운 페이지를 보여준다
 * Layout/Root은 실제 메뉴에 등록된것이 아닌 아래의 메뉴들을 어떻게 보여줄지 설계하는 컴포넌트
 * Layout.jsx에 추가했어도 <Route path='/support' element={<Support/>} />로 띄우지 않으면 화면에 뜨지 않음
 * 
 * 
 */