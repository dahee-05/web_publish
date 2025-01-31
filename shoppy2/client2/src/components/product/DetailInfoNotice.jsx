import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DetailInfoNotice() {
  const [ productDesc , setProductDesc ] = useState([]);
  
  useEffect(()=>{
    axios.get('/data/productDetail.json')
         .then((res)=> setProductDesc(res.data.product_description_list))
         .catch((error)=> console.log(error))
  },[]);

  // console.log('productDesc-->',productDesc.names);
  
  return (
    <>
      <div className='detail-info-notice'>
        <h3>상품 정보 고시</h3>
        <ul className='notice-list'>
          {productDesc.names && productDesc.names.map((item, idx)=> (
            <li>
              <label htmlFor="">{item}</label>
              <p>{productDesc.values[idx]}</p>
            </li>
          ))}
        </ul>
      </div>
    </>  
  );
}

