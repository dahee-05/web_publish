import Menu from "./Menu.jsx";
import MenuList from "./MenuList.jsx";

export default function AppMenu(){
  const nameList = [
    {"name":"Home", "href":"#home", "bg":"tomato", "color":"white"},
    {"name":"About", "href":"#About", "bg":"tomato"},
    {"name":"Skills", "href":"#Skills", "bg":"tomato"},
    {"name":"Mywork", "href":"#Mywork", "bg":"tomato"},
    {"name":"Testimonial", "href":"#Testimonial", "bg":"tomato"},
    {"name":"Contact", "href":"#Contact", "bg":"tomato"},
    {"name":"Support", "href":"#Support", "bg":"tomato"}
  ];
  
  return(
    <>
      <div>
        <Menu name="Home" href="#home" bg="gray" color="white"/>
        <Menu name="About" href="#About" bg="tomato"/>
        <Menu name="Skills" href="#Skills" bg="gray"/>
        <Menu name="Mywork" href="#Mywork" bg="tomato"/>
        <Menu name="Testimonial" href="#Testimonial" bg="gray"/>
        <Menu name="Contact" href="#Contact" bg="tomato"/> 
        <Menu name="Support" href="#Support" bg="gray"/> 
      </div>
      <div>
        <MenuList list={nameList} />
      </div>
    </>
  );
};

