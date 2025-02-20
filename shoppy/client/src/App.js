import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from'react';
import './style/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx'; 
import Products from './pages/Products.jsx'; 
import Cart from './pages/Cart.jsx'; 
import Login from './pages/Login.jsx'; 
import Signup from './pages/Signup.jsx'; 
import DetailProduct from './pages/DetailProduct.jsx'; 
import Employees from './pages/Employees.jsx'; 
import NewProduct from './pages/NewProduct.jsx';
import CheckoutInfo from './pages/CheckoutInfo.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import { CartProvider } from './context/CartContext.js';
import { OrderProvider } from './context/OrderContext.js';
import PaymentSuccess from './pages/PaymentSuccess.jsx';
export default function App() {
 
  return (
    <div className="App">
      <OrderProvider>
      <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='/all' element={<Products/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/products/:pid' element={<DetailProduct/>} />
              <Route path='/products/new' element={<NewProduct />}/>
              <Route path='/checkout' element={<CheckoutInfo />}/>
              <Route path='/payment/success' element={<PaymentSuccess />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </CartProvider>
      </OrderProvider>
    </div>
  );
}



// path : 경로를 설정할 뿐 실제로 이동x
// path를 통해서 넘어오는 url의 값은 리엑트가 관리 -> useParam 
// 받는 곳에서는 path를 통해 넘어오는 값은 useParams 를 사용해 값을 가져옴

