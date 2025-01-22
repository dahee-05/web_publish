import React, { useState, useEffect } from "react";
import ProductMenu from './ProductMenu.jsx';
import axios from "axios";

export default function ProductMenuList({Listidx}) {
  const [productMenu, setProductMenu] = useState([]);
  const [ activeIdx, setActiveIdx ] = useState(0);

  useEffect(()=>{
    axios.get('/data/product.json')
         .then((res)=>setProductMenu(res.data.productMenuList))
         .catch((error)=>console.log(error))
  },[]);  

  const handleClick = (idx) => {
    setActiveIdx(idx);
  };

  return (
      <div className="tab_nav">
        <ul>
          {productMenu && productMenu.map((menu, idx)=> (
            <ProductMenu {...menu} 
                          idx = {idx}
                          isActive={idx === Listidx}
                          onClick={()=>handleClick(Listidx)}/>
          ))}
        </ul>
      </div>
  );
}

