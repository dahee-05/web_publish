import React from 'react';
import './Olive.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import MenuList from './header/MenuList.jsx';
import ProductList from './body/ProductList.jsx';

export default function AppOlive() {
  return (
    <>
      <Header>
        <MenuList />
      </Header>
      <Body>
        <ProductList />
      </Body>
      {/* <Footer>

      </Footer> */}
    </>
  );
}

