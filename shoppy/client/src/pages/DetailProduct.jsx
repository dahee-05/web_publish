import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct({addCart}) {
  const { pid } = useParams(); // { 'pid': pid }
  const [ product, setProduct ]= useState({});
  const [ size, setSize ] = useState('XS');

  useEffect(()=>{
    axios.get('/data/product.json')
         .then((res)=> {
            res.data.filter((product)=> {
              if(product.pid === pid) setProduct(product)
              })
        })
         .catch((error)=>console.log(error));
  },[]);

  // 장바구니 추가 이벤트
  const addCartItem = (() => {
    // 장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid}-->장바구니 추가 완료`);
    console.log(product.pid, product.price, size, 1);
    const cartItem = {
      "pid":product.pid,
      "size":size,
      "qty":1,
      "price": product.price
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  });

  // 

  return (
    <div className='content'>
      <div className='product-detail'>
          <img src={product.image} />
          <ul>
                  <li className="product-detail-title">{product.name}</li>
                  <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
                  <li className="product-detail-subtitle">{product.info}</li>
                  <li>
                      <span className='product-detail-select1'>옵션 : </span>
                      <select className='product-detail-select2'
                              onChange={(e)=> setSize(e.target.value)}>
                              <option value="XS">XS</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                      </select>
                  </li>
                  <li>
                      <button type="button" 
                              className='product-detail-button'
                              onClick={addCartItem}>장바구니 추가
                      </button>
                  </li>
          </ul>
      </div>
    </div>
  );
};

// path를 통해 넘어오는 값은 useParams 를 사용해 값을 가져옴
// 이벤트를 전역으로 사용할려면 {함수이름}
// 이벤트를 해당 페이진 내에서만 사용하려면 (()=>{})