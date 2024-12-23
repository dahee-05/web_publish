import './component/css/style.css';
import Header from './component/Header.jsx';
import Content from './component/Content.jsx';
import Footer from './component/Footer.jsx';
import Logo from './component/header/Logo.jsx';
import MenuList from './component/header/MenuList.jsx';
import ToggleButton from './component/header/ToggleButton.jsx';

function App() {
  return (
   <>
    <Header>
      <Logo/>
      <MenuList/>
      <ToggleButton/>
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
