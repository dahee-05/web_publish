import React, { useContext, useEffect, useRef } from "react";
import "../style/cart.css";
import { AuthContext } from "../auth/AuthContext.js";
import { CartContext } from "../context/CartContext.js";
import { useNavigate } from "react-router-dom";
import { useCart } from '../hooks/useCart.js';

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);
    const { getCartList, updateCartList, deleteItem } = useCart();
    const hasCheckedLogin = useRef(false);

    useEffect(()=>{
      if(hasCheckedLogin.current) return; //로그인상태 --> return
      hasCheckedLogin.current = true;

      if(isLoggedIn){
          getCartList();     
      }else{
        const select = window.confirm('로그인 서비스가 필요합니다. \n로그인하시겠습니까?');
        (select) ? navigate('/login') : navigate('/');
        setCartList([]);
      }  
    },[isLoggedIn]);

    // 수량 업데이트 
    const handelQtyUpdate = (cid, type) =>{
       const result = updateCartList(cid, type);
       console.log('result-->',result);
       
    }
    // 아이템 삭제
    const deleteCartItem = (cid) =>{
      const result = deleteItem(cid);
    };

    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
          <>
              {cartList && cartList.map((item)=>(
                <div className="cart-item" >
                  <img src={item.image} alt="" />
                  <div className="cart-item-details">
                      <p className="cart-item-title">{item.pname} </p>
                      <p className="cart-item-title">{item.size} </p> 
                      <p className="cart-item-price">{item.price}원</p>
                  </div>
                  <div className="cart-quantity">
                      <button onClick={()=>{handelQtyUpdate(item.cid, "decrease")}}> - </button>
                      <input type="text" value={item.qty} readOnly />
                      <button onClick={()=>{handelQtyUpdate(item.cid, "increase")}}> + </button>
                  </div>
                  <button className="cart-remove" onClick={()=>{deleteCartItem(item.cid)}}>
                      🗑
                  </button>
                </div>  
              ))}
              <div className="cart-actions">                       
                  <button>주문하기</button>
              </div>       
            </>
        </div>
    );
    }
