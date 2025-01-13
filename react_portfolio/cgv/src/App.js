import Header from './component/Header.jsx';
import Content from './component/Content.jsx';
import Footer from './component/Footer.jsx';
import AppHeader from './component/header/AppHeader.jsx';
import AppBody from './component/body/AppBody.jsx';
import AppFooter from './component/footer/AppFooter.jsx';
import './component/css/header.css';


function App() {
  return (
    <>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppBody />
      </Content> 
      <Footer>
        <AppFooter />
      </Footer>
    </>
  );
}

export default App;
