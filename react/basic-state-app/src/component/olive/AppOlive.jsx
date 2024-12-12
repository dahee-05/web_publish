import React, { useState } from 'react';
import './Olive.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import MenuList from './header/MenuList.jsx';
import ProductList from './body/ProductList.jsx';


export default function AppOlive() {
  const [ cartList, setCartList ] = useState([]);
  // 배열의 id 저장 --> 배열의 길이 ---> cartCount // 리엑트에서 관리

  const handleCartApp = (id) => {
    setCartList([...cartList, id]);  
    // cartList의 주소값을 가지고 넣어준 값을 가지게 됨/cartList =id의 값이 됨 ****
    // setCartList([]) 형태로 넣어줘야함 -> setCartList([...cartList, id])
    // cartList.push(id);  //cartList배열에 들어가는 값
  };

  console.log(`cartList--> ${cartList}`);
  

  return (
    <>
      <Header>
        <img src='https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png' />
        <MenuList count={cartList.length} />
      </Header>
      <Body>
        <ProductList cart={handleCartApp}/>
      </Body>
      {/* <Footer>
      
      </Footer>  */}
    </>
  );
}

