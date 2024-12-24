import React from 'react';
import './component/potofolio/css/style.css';
import Header from './component/potofolio/Header.jsx';
import Body from './component/potofolio/Body.jsx';
import Footer from './component/potofolio/Footer.jsx';
import AppHeader from './component/potofolio/header/AppHeader.jsx';
import AppBody from './component/potofolio/body/AppBody.jsx';
import AppFooter from './component/potofolio/footer/AppFooter.jsx';

function App() {
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

export default App;
