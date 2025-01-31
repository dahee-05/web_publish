import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { SlPresent } from "react-icons/sl";
import ProductDetail from '../component/detail/ProductDetail.jsx';
import ProducReview from '../component/detail/ProducReview.jsx';

export default function DeatailProduct({addCart}) {
  const {pid} = useParams();
  const [ products, setProducts ] = useState([]);
  const [ detailImg, setDetailImg] = useState([]);
  const [ size, setSize] = useState('XS');
  const [ tabMenu, setTabMenu] = useState('REVIEW');
  const menuList = ['DETAIL','REVIEW','Q&A','RETURN & DELIVERY'];

  useEffect(()=>{
    axios.get('/data/product.json')
         .then((res)=>{
           res.data.filter((product)=>{
             if(pid === product.pid){
              setProducts(product);
              setDetailImg(product.detailImg);
            }
           })
        })
         .catch((error)=>console.log(error))
  },[]);

  const addCartItem = ()=> {
    const cartItem ={
      pid: products.pid,
      size: size,
      qty: 1,
      price:products.price
    }
    addCart(cartItem);
  };

  // const handleTab = (e) => {
  //   setTabMenu(e.target.id);
  // };

  return (
    <div className='content'>
       <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={products.image} />
          <ul className="product-detail-image-top-list">
            <li>
              <img src={products.image} alt="" />
            </li>
            <li>
              <img src={products.image} alt="" />
            </li>
            <li>
              <img src={products.image} alt="" />
            </li>
          </ul>
        </div> {/*end of product-detail-image-top */}

        <ul className='product-detail-info-top'>
          <li className='product-detail-title'>{products.name}</li>
          <li className='product-detail-title'>{`${parseInt(products.price).toLocaleString()}원`}</li>
          <li className='product-detail-subtitle'>{products.info}</li>
          <li>
            <p className='product-detail-box'>신규회원, 무이자 할부 등</p>
          </li>
          <li className='flex'>
            <label className="product-detail-label">사이즈</label>
            <select className="product-detail-select2" onChange={(e)=>setSize(e.target.value)}>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className='flex'>
            <button type='button' className='product-detail-button order'>바로 구매</button>
            <button type='button' className='product-detail-button cart'
                    onClick={addCartItem}>쇼핑백 담기</button>
            <button type='button' className='gift'><SlPresent style={{ fontSize: "30px" }}/>
              <p className='gift-span'>선물하기</p>
            </button>
          </li>
          <li>
            <p className='product-detail-summary-info'>상품 요약 정보</p>
          </li>
        </ul>
       </div>   

      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">
        <ul className="tabs">
          { menuList.map((item)=> 
            <li className={(tabMenu === item)? 'active': ''}>
              <button type='button' onClick={(e)=>setTabMenu(item)} id={item}>{item}</button>
            </li>
          )} 
        </ul>
       </div>
       <div className='tabs_contents'>
          {tabMenu === 'DEFAULT' && <ProductDetail/>}
          {tabMenu === 'REVIEW' && <ProducReview/>} 
       </div>
    </div>
  );
}

