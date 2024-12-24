import './component/css/style.css';
import Header from './component/Header.jsx';
import Content from './component/Content.jsx';
import Footer from './component/Footer.jsx';
import Logo from './component/header/Logo.jsx';
import MenuList from './component/header/MenuList.jsx';
import ToggleButton from './component/header/ToggleButton.jsx';
import Home from './component/content/Home.jsx';
import SectionWrap from './component/content/SectionWrap.jsx';
import Majors from './component/content/Majors.jsx';
import Jobs from './component/content/Jobs.jsx';
import Skills from './component/content/Skills.jsx';
import Coding from './component/content/Coding.jsx';
import Tools from './component/content/Tools.jsx';
import Categories from './component/content/Categories.jsx';
import Projects from './component/content/Projects.jsx';
import Testimonials from './component/content/Testimonials.jsx';
import Arrow from './component/content/Arrow.jsx';
import Top from './component/footer/Top.jsx';
import ContactLinks from './component/footer/ContactLinks.jsx';
import Bottom from './component/footer/Bottom.jsx';

function App() {
  return (
   <>
    <Header>
      <Logo img="images/favicon.ico" name='Judy'/>
      <MenuList/>
      <ToggleButton/>
    </Header>
    <Content>
      <Home img="images/favicon.ico" name='Judy'/>
      <SectionWrap id="about" 
                   title="About me" 
                   description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?">
        <Majors />
        <Jobs />    
      </SectionWrap>
      <SectionWrap id="skill" 
                   className="section max-container"
                   title="My Skills" 
                   description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod  nulla adipisci. Sunt?"> 
        <Skills>
          <Coding />
          <Tools />
        </Skills>  
      </SectionWrap>
      <SectionWrap id="work" 
                   className="section max-container"
                   title="My work" 
                   description="Projects"> 
        <Categories />
        <Projects />  
      </SectionWrap>
      <SectionWrap id="testimonial" 
                   className="section max-container"
                   title="Testimonial" 
                   description="See what they say about me"> 
        <Testimonials />             
      </SectionWrap>    
      <Arrow />         
      </Content>
    <Footer>
      <Top title="Let's talk" desc="jeon.developer.judy@gmail.com" />
      <ContactLinks />
      <Bottom />
    </Footer>
   </>
  );
}

export default App;
