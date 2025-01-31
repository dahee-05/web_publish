import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ProductList() {
  const [ product, setProduct ] = useState([]);
  const rows = [];

  useEffect(()=> {
    axios.get('/data/product.json')
         .then((res)=> setProduct(res.data))
         .catch((error)=> console.log(error)) 
  },[]);
  
  for(let i=0; i< product.length; i+=3){
    rows.push(product.slice(i,i+3));  /// [[],[]...]
  }

  return (
    <div>
      {
        rows && rows.map((row)=>
          <div className='product-list'>
            {row && row.map((product)=>
              <Link key={product.pid} to={`/products/${product.pid}`}>
                <ProductAvata img={product.image}/>
              </Link>
            )}  
          </div>    
        )}
    </div>
  );
}

