import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';

export default function ProductList() {
  const [ list, setList ] = useState([]);
  const rows = [];
  useEffect(()=> {
    axios.get('data/product.json')
        .then((res)=> setList(res.data))
        .catch((error)=>console.log(error))
  },[]);     

  for(let i=0; i<list.length; i+=3){  //3씩 증가 
    rows.push(list.slice(i, i+3))
  };

  console.log('rows-->', rows);
  
  return (
    <div>
      {
        rows.map((row)=> 
          <div className='product-list'>
            {row.map((product) =>
                <ProductAvata img={product.image}/>
              )}
          </div>  
      )}
    </div>
  );
}

