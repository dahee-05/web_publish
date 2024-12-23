import './component/css/style.css';
import Header from './component/Header.jsx';
import Content from './component/Content.jsx';
import Footer from './component/Footer.jsx';
import Logo from './component/header/Logo.jsx';
import MenuList from './component/header/MenuList.jsx';

function App() {
  return (
   <>
    <Header>
      <Logo/>
      <MenuList/>
    </Header>
    <Content>
      <h1>Content</h1>
    </Content>
    <Footer>
      <h1>Footer</h1>
    </Footer>
   </>
  );
}

export default App;
