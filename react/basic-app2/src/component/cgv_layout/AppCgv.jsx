import './css/cgv.css';
import './css/commons.css';
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import HeaderTop from './header/HeaderTop.jsx';
import HeaderBottom from './header/HeaderBottom.jsx';
import Top from './content/Top.jsx';
import MovieChart from './content/MovieChart.jsx';
import EventSpecial from "./content/EventSpecial.jsx";
import GotoButton from './content/GotoButton.jsx';
import FooterTop from './footer/FooterTop.jsx';
import FooterContent from './footer/FooterContent.jsx';

export default function AppCgv(){
  return (
    <>
      <Header>
         <HeaderTop />
         <HeaderBottom />
      </Header>
      <Content>
        <Top />
        <MovieChart />
        <EventSpecial />
        <GotoButton />
      </Content>
      <Footer>
        <FooterTop src="http://adimg.cgv.co.kr/images/202410/SSG/980x240.png"/>
        <FooterContent />
      </Footer>
    </>
  );
};
