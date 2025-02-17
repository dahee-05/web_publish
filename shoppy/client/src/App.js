import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from'react';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx'; 
import Products from './pages/Products.jsx'; 
import Cart from './pages/Cart.jsx'; 
import Login from './pages/Login.jsx'; 
import Signup from './pages/Signup.jsx'; 
import DetailProduct from './pages/DetailProduct.jsx'; 
import Employees from './pages/Employees.jsx'; 
import './style/shoppy.css';
import { AuthProvider } from './auth/AuthContext.js';
import { CartProvider } from './context/CartContext.js';
import NewProduct from './pages/NewProduct.jsx';
import CartsDB from './pages/CartsDB.jsx';

export default function App() {
  /* 장바구니 아이템 저장 : 배열 */
  const [cartList, setCartList] = useState(()=>{
    try {
      const initCartList =  localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList) : [];  // JSON.parse() json을 객체로 변경
    }catch (error) {
      console.log('로컬 스토리지 데이터 작업도중 에러 발생~');
      console.log(error);
    }
  }); 
  // console.log('initCartList-->',initCartList);
  
  /* 장바구니 상품 개수 */
  const [cartCount, setCartCount] = useState(()=>{
    try {
      const initCartList =  localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList).length : 0; 
    }catch (error) {
      console.log('로컬 스토리지 데이터 작업도중 에러 발생~');
      console.log(error);
    }
  }); 
  
  /* 로컬스토리지 재호출 ---> cartList, cartCount 업데이트(초기화)*/
  const refreshStorage = (updateCart, updateCount) => {
    setCartList(updateCart);
    setCartCount(updateCount);
  };

  /* cartCOUNT가 업데이트가 되면 localStorage에 cartList 저장*/
  // useEffect(()=>{
  //   localStorage.setItem("cartItems", JSON.stringify(cartList)); // json객체를 문자로 변환하여 저장
  // },[cartCount]);  

  /* 장바구니 추가 */
  // map은 새로운 배열->기존에 장바구니item과 동일x 기존item을 다시 넣어줌
  // 로컬스토리지(checkItem) /  새로추가한Item(cartItem)
  const addCart =((cartItem)=>{ 
    const isCheck = cartList.some(checkItem => checkItem.pid === cartItem.pid 
                                              && checkItem.size === cartItem.size);
    let updateCartList = [];
     
    if(isCheck){  
      updateCartList = cartList.map(item =>
        item.pid === cartItem.pid && item.size === cartItem.size ?
          {...item, qty:item.qty +1}
        : item  
      )
    }else{
      updateCartList = [...cartList, cartItem];
      setCartCount(cartCount + 1); 
    }
    setCartList(updateCartList);  
  });

  // console.log(`cartList--->`,cartList);
  // console.log(`cartCount--->`,cartCount);
  
  return (
    <div className="App">
      <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='/all' element={<Products/>} />
              <Route path='/cart' element={<Cart refreshStorage={refreshStorage}/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/products/:pid' element={<DetailProduct addCart={addCart}/>} />
              <Route path='/products/new' element={<NewProduct />}/>
              <Route path='/cartdb' element={<CartsDB />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </CartProvider>
    </div>
  );
}



// path : 경로를 설정할 뿐 실제로 이동x
// path를 통해서 넘어오는 url의 값은 리엑트가 관리 -> useParam 
// 받는 곳에서는 path를 통해 넘어오는 값은 useParams 를 사용해 값을 가져옴

