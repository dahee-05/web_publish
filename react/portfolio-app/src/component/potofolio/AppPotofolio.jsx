import React from 'react';
import './css/style.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import AppHeader from './header/AppHeader.jsx';
import AppBody from './body/AppBody.jsx';
import AppFooter from './footer/AppFooter.jsx';

export default function AppPotofolio() {
  return (
    <>
      <Header>
        <AppHeader/>
      </Header>
      <Body>
        <AppBody/>
      </Body>
      <Footer>
        <AppFooter />
      </Footer>
  </>
  );
}

