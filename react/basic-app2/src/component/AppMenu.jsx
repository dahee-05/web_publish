import Menu from "./Menu.jsx";
import MenuList from './MenuList.jsx';

export default function AppMenu(){
  const propsList = [
    {"name":"Home", "href":"#Home", "bg":"gray", "color":"white" },
    {"name":"About", "href":"#About", "bg":"tomato"},
    {"name":"Skills", "href":"#Skills", "bg":"tomato"},
    {"name":"Mywork", "href":"#Mywork", "bg":"tomato"},
    {"name":"Testimonial", "href":"#Testimonial","bg":"tomato"},
    {"name":"Concat", "href":"#Concat", "bg":"tomato"},
    {"name":"Support", "href":"#Support", "bg":"tomato"},
    {"name":"Submit", "href":"#Submit", "bg":"tomato"},
    {"name":"Reaset", "href":"#Reaset", "bg":"tomato"}
  ];
  return(
    <>
      <div >
        <Menu name="Home" href="#Home"  bg="gray" color="white"/>
        <Menu name="About" href="#About"   bg="tomato"/>
        <Menu name="Skills" href="#Skills"  bg="gray"/>
        <Menu name="Mywork" href="#Mywork" bg="tomato"/>
        <Menu name="Testimonial" href="#Testimonial" bg="gray" />
        <Menu name="Concat" href="#Concat"  bg="tomato"/>
        <Menu name="Support" href="#Support"  bg="gray"/>
      </div>
      <div>
        <MenuList list={propsList} />  
      </div>
    </>    
  );
};
