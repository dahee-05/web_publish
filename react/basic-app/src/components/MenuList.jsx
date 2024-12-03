import Menu from "./menu.jsx";

export default function MenuList({list}){

  // nameList{[~]}
  return(
    <ul className="menu-container">
      { list.map((item)=> 
      <li><Menu name={item.name} href={item.href} bg={item.bg} color={item.color}/></li>)}
    </ul>
  );
};