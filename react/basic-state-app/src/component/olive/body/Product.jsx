import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 

export default function Product(props) {
  const [cart, setCart] = useState(0);

  const handleCart = () => {
    props.totalCart(props.id);
  };

  return (
    <div className='product-container'>
      <div className='poduct-img'>
        <img src={props.src}/>
        <span className='rank'>{props.rank}</span>
        <FontAwesomeIcon icon={faCartShopping} className='cart' onClick={handleCart}/>
      </div>
        <p className='title'>{props.title}</p>
        <div className='description'>
          <p className='description-text'>{props.text}</p>
        </div>
        <div className='price'>
          <span className='sprice'>{props.sprice}</span>
          <span className='fprice'>{props.fprice}</span>
        </div>
        <div className='tags'>
          {props.isSale && <span className='t1'>세일</span>}
          {props.isCoupon && <span className='t2'>쿠폰</span>}
          {props.isToday && <span className='t3'>오늘드림</span>}
        </div>
    </div>
  );
}

