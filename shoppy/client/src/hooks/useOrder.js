import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext.js';
import { useCart } from '../hooks/useCart.js';
import axios from 'axios';

export function useOrder() {
  const { orderList, setOrderList, totalOrderPrice, setTotalOrderPrice, member, setMember} = useContext(OrderContext);
  const { calculateTotalPrice } = useCart();
  // useContext로 관리되는 객체들의 CRUD 함수 정의

  /* 1. 전체 주문 정보 조회 */
  const getOrderList = async() => {
    const id = localStorage.getItem('user_id');
    const result = await axios.post('http://localhost:9000/order/all' , {'id':id});
    console.log('result.data----->',result.data);
    setOrderList(result.data);
    setMember(result.data[0]);
    calculateTotalPrice(result.data);
    return result.data;
  };
  
  /* 2. */
  const saveToOrder = async(orderList, totalPrice, tid, type) =>{
    console.log('saveToOrder orderList-->',orderList);
    console.log('saveToOrder totalPrice-->',totalPrice);
    const id = localStorage.getItem('user_id');
    const formData = { 'id':id,
                      'totalPrice':totalPrice,
                      'orderList': orderList,
                      'tid': tid,
                      'type': type
    };


    const result = await axios.post('http://localhost:9000/order/add' , formData);
    console.log('order add : result----->',result.data);
    // setOrderList(result.data);
    // setMember(result.data[0]);
  };


  return { getOrderList, saveToOrder };
}

