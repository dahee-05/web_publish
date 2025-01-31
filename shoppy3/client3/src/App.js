import './style/shoppy.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DeatailProduct from './pages/DeatailProduct.jsx';
import { useState } from 'react';

export default function App() {
  const [cartList, setCartList ] = useState([]);
  const [ cartCnt, setCartCnt ] = useState(0);

  const addCart = (cartItem) => {
    setCartList([...cartList,cartItem]);
    setCartCnt(cartCnt + 1);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cartCnt={cartCnt}/>}>
            <Route index element={<Home />}/>
            <Route path='/all' element={<Products />}/>
            <Route path='/carts' element={<Carts cartList={cartList}/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/products/:pid' element={<DeatailProduct addCart={addCart}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


