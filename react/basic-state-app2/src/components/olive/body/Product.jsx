import React, { useState } from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product(props) {
  const [ count, setCount ] = useState([]);
  
  const handleClick = () => {
    props.totalCart(props.id);
  };

  return (
      <div className='product-container'>
        <div className='product-img-content'>
          <img src={props.src} className='product-img'/>
          <p className='rank'>{props.rank}</p>
          <FontAwesomeIcon icon={faCartShopping} className='cart-icon' onClick={handleClick}/>
        </div>
        <p className='product-title'>{props.title}</p>
        <div className='description'>
          <p className='description-text'>{props.text}</p>
        </div>
        <div className='price'>
          <span className='fprice'>{props.fprice}</span>
          <span className='sprice'>{props.sprice}</span>
        </div>  
        <div className='tags'>
          {props.isSale && <span className='t1'>세일</span>}
          {props.isCoupon && <span className='t2'>쿠폰</span>}
          {props.isToday && <span className='t3'>오늘드림</span>}
        </div>
      </div>
  );
}

