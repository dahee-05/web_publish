import React, { useEffect, useState } from 'react';
import ProductAvata from'./ProductAvata.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [ list, setList ] = useState([]);

  useEffect(()=>{
    axios.get('data/product.json')
         .then((res)=> setList(res.data))
         .catch((error)=> console.log(error));
  },[]);

  // 출력 리스트 생성 [[{},{},{}], [{},{},{}], [{}]]
  const rows = [];
  for(let i=0; i < list.length; i+=3){  // [{0},{1},{2}] 
    rows.push(list.slice(i, i+3));      // [{0},{1},{2}] 
  };

  // console.log('rows-->' , rows);
  
  return (
    <div>
      {
        rows.map((rowArray)=>
          <div className='product-list'>
            {rowArray.map((product) =>
              <Link key={product.pid} to={`/products/${product.pid}`}>
                <ProductAvata img={product.image} />
              </Link>
            )}
          </div>
       )}
    </div>
  );
}

