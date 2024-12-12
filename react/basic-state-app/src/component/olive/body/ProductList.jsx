import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {
  const [producjList, setProducjList] = useState([]);

  useEffect(()=> {
    fetch('/data/olive.json')
      .then((result)=> result.json())
      .then((jsonData)=> setProducjList(jsonData))
      .then((error)=>console.log(error))
  },[]);
  
  const totalCart = (id) => {
    cart(id);   // AppOlive의 handleCartApp 함수 호출
  };
  
  return (
    <ul className='product-list-container'>
      {producjList && producjList.map( item =>
        <li className='list-content'>
          <Product {...item} totalCart={totalCart} />
        </li>
      )}
    </ul>
  );
}

