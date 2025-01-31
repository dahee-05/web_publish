import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DetailInfo() {
  const [ productinfo , setProductInfo ] = useState([]);
  
  useEffect(()=>{
    axios.get('/data/productDetail.json')
         .then((res)=> setProductInfo(res.data.product_information_list))
         .catch((error)=> console.log(error))
  },[]);

  return (
   <div className='detail-info'>
      {
        productinfo && productinfo.map((info) => (
          <div>
            <h4 className='detail-info-title'>{info.title}</h4>
              { 
                (info.title === 'SIZE' || info.title === 'MODEL SIZE') ? 
                  <ul className='nolist'>
                    {(info.title === 'SIZE') && 
                      <>
                        <li>{info.type}</li> 
                        <li>총길이 : {info.totalLength}</li> 
                        <li>가슴너비 : {info.shoulderWidth}</li> 
                        <li>밑단너비 : {info.chestWidth}</li> 
                        <li>소매길이 :{info.sleeveLength}</li> 
                        <li>소매밑단 :{info.sleeveHemWidth}</li> 
                      </>}
                      {(info.title ==='MODEL SIZE') &&
                      <>
                        <li>{info.height}</li> 
                        <li>{info.size}</li> 
                      </>  
                      }
                  </ul>
              : 
                <ul className='list nolist'>
                  {(info.title === 'FABRIC') &&
                    <>
                      <li>{info.color}</li>
                      <li>{info.material}</li>
                    </> }
                      {
                        info.description && info.description.map((desc)=>(
                        <li>{desc}</li>
                      ))}
                </ul>
              }
          </div>
      ))}
   </div>
  );
}

