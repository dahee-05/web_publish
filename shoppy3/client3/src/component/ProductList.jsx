import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';

export default function ProductList() {
  const [ product, setProduct ] = useState([]);


  useEffect(()=> {
    axios.get('/data/product.json')
         .then((res)=> setProduct(res.data))
         .catch((error)=> console.log(error)) 
  },[]);
  
  return (
    <div>

      <ProductAvata />
    </div>
  );
}

