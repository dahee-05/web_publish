import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from'react';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx'; 
import Products from './pages/Products.jsx'; 
import Carts from './pages/Carts.jsx'; 
import Login from './pages/Login.jsx'; 
import Signup from './pages/Signup.jsx'; 
import DetailProduct from './pages/DetailProduct.jsx'; 
import Employees from './pages/Employees.jsx'; 
import './style/shoppy.css';

export default function App() {
  // 장바구니 리스트 : 배열 
  const [ cartList, setCartList] = useState([]);   // 장바구니 아이템 저장 : 배열
  const [ cartCount, setCartCount ] = useState(0); // 장바구니 상품 개수 
  
  const addCart =((cartItem)=>{
    setCartList([...cartList, cartItem]);  
    setCartCount(cartCount + 1); 
  });

  console.log(`cartList--->`,cartList);
  console.log(`cartCount--->`,cartCount);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cartCount={cartCount} />}>
            <Route index element={<Home/>} />
            <Route path='/all' element={<Products/>} />
            <Route path='/cart' element={<Carts cartList={cartList}/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/employees' element={<Employees/>} />
            <Route path='/products/:pid' element={<DetailProduct addCart={addCart}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



// path : 경로를 설정할 뿐 실제로 이동x
// path를 통해서 넘어오는 url의 값은 리엑트가 관리 -> useParam 
// 받는 곳에서는 path를 통해 넘어오는 값은 useParams 를 사용해 값을 가져옴