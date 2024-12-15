import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function ProductList({productId}) {
  const [productList, setProducjList]  = useState([]);

  useEffect(()=> {
    fetch('/data/olive.json')
      .then((result)=> result.json())
      .then((jsonData)=> setProducjList(jsonData))
      .catch((error)=>console.log(error))
  },[]);

  const totalCart = (id) =>{
    productId(id);
  };

  return (
    <ul className='product-list-container'>
      {productList.map(item => 
        <li className='list-content'>
          <Product {...item} totalCart={totalCart}/>
        </li>
      )}
    </ul>
  );
}

