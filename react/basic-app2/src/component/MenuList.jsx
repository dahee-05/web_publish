import Menu from "./Menu.jsx";

export default function MenuList({list}){
  return(
    <ul className='btn-container'>
      {list.map((item) => 
      <li><Menu href={item.href} name={item.name} bg={item.bg} color={item.color}/></li>)}
    </ul>
  );
};