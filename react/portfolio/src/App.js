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
  
const sectionList = [
    {
      "id": "about",
      "title": "About me",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
      "children": [
        { "component": "Majors" },
        { "component": "Jobs" }
      ]
    },
    {
      "id": "skill",
      "title": "My Skills",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
      "children": [
        {
          "component": "Skills",
          "children": [
            { "component": "Coding" },
            { "component": "Tools", "props": { "type": "Tools" } },
            { "component": "Tools", "props": { "type": "Etc" } }
          ]
        }
      ]
    },
    {
      "id": "work",
      "title": "My work",
      "description": "Projects",
      "children": [
        { "component": "Categories" },
        { "component": "Projects" }
      ]
    },
    {
      "id": "testimonial",
      "title": "Testimonial",
      "description": "See what they say about me",
      "children": [
        { "component": "Testimonials" }
      ]
    }
  ];
  
  //"Majors": Majors
  const componentMap = {
    Majors, 
    Jobs,
    Skills,
    Coding,
    Tools,
    Categories,
    Projects,
    Testimonials
  };

  //자식 컴포넌트 렌더링 : 재귀함수(자신의 함수에서 자기를 호출하는 함수)
  const renderComponent = (childObj) => { //{ "Majors": Majors } ===>Component가 Majors의 주소값을 가짐
    const Component = componentMap[childObj.component];
    if (!Component) return null;

    return (
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
      </Component>
    );
  };  // 'children':[]가 있다면
  return (
   <>
    <Header>
      <Logo img="images/favicon.ico" name='Judy'/>
      <MenuList/>
      <ToggleButton/>
    </Header>
    <Content>
      <Home img="images/favicon.ico" name='Judy'/>
      {sectionList && sectionList.map((section) => (
          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}

          </SectionWrap>
      ))}      
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
