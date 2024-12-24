import { useEffect, useState } from "react";
import HeaderTopMenu from "./HeaderTopMenu";

export default function HeaderTopMenuList(){
   const [list, setList] = useState([]);

   useEffect(()=> {
     fetch('data/cgv_header.json')
      .then((result) => result.json())     
      .then((jsonData) => setList(jsonData.topMenuList))     
      .catch((error) => console.log(error))     
   }, []);

  return(
    <nav>
      <ul>
        {list && list.map((menu) => (
          <li>
            <HeaderTopMenu src={menu.src} href={menu.href} name={menu.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};