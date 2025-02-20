import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext.js';
import { useOrder, saveToOrder } from "../hooks/useOrder.js";
export default function PaymentSuccess() {

  const { getOrderList, saveToOrder } = useOrder();
  const { orderList } = useContext(OrderContext);
  const [searchParams] = useSearchParams();
  const pg_token = searchParams.get('pg_token');
  const [ isRun, setIsRun ] = useState(false);
  // console.log('pg_token', pg_token);
  // console.log('tid', tid);
  
  useEffect(()=>{
    const tid = localStorage.getItem('tid'); //결제번호
    tid && setIsRun(true);

    const fetchOrderList = async() =>{ 
      const orderList = await getOrderList();
      console.log('fetchOrderList-->', orderList);
      
      if(orderList.length > 0){
        const totalPrice = orderList.reduce((sum, item)=> sum + item.price * item.qty,0);
        if(pg_token && tid ){
          saveToOrder(orderList, totalPrice, tid, 'kakaopay');
          // 1. axios를 통한 DB insert --> orderList, total_price
          // 2. useOrder 커스텀 훅을 이용한 DB insert 
        }
      }
    }
    if(pg_token && tid ){fetchOrderList()};

  },[pg_token]);
  
  // console.log('total_price', orderList.reduce((sum, item)=> sum + item.price * item.qty,0));
  // console.log('payment success orderList', orderList);
  

  return (
    <div>
      {pg_token &&
        <h2>결제가 완료되었습니다.</h2>
      }
    </div>
  );
}

