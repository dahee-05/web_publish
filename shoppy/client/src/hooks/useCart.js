import React, { useContext} from "react";
import { CartContext } from "../context/CartContext.js";
import axios from "axios";


/* custom Hook - 비동기식으로 인해 인터프리터 방식이 적용이 안될 때 */
/* 함수 생성  - 비동기 로직 & useContext가 관리하는 변수는 await/ async를 통해 순서 보장 */
export function useCart(){  
  const { cartList, setCartList, cartCount, setCartCount } = useContext(CartContext);

  /* 1. 장바구니 전체 리스트 조회 함수 [select] */
  const getCartList = async() => {
    const id = localStorage.getItem('user_id');
    const result = await axios.post('http://localhost:9000/cart/items', {'id':id});
    setCartList(result.data);
    setCartCount(result.data.length);
  };

  /* 2. 장바구니 아이템 저장 --> DB연동 [insert] */
  const saveToCartList = async(formData) => {
     const result = await axios.post('http://localhost:9000/cart/add', formData);  // {"result_rows": result_rows}
     if(result.data.result_rows){
      setCartCount(cartCount + 1);  
      getCartList();  // DB 연동 --> formData가 저장된 cartList 가져옴 
     } 
     return result.data.result_rows;
  };
  
  /* 3. 장바구니 아이템 수량 업데이트 --> DB연동 [update] */
  const updateCartList = async(cid, type) => {
    const result = await axios.put('http://localhost:9000/cart/updateQty', 
                                      {'cid':cid, 'type':type} );
    result.data.result_rows && getCartList();
    return result.data.result_rows;
  };

  /* 4. 장바구니 전체 카운트 조회 --> DB연동 [select] */
  const getCount= async() =>{
    const id = localStorage.getItem('user_id');
    const result = await axios.post('http://localhost:9000/cart/count', {'id': id});
    setCartCount(result.data.count);
    return result.data.count;
  };

  /* 5. 장바구니 카운트 조기화  */
  const setCount = (value) =>{ setCartCount(value) };

  /* 6. 장바구니 아이템 삭제  */
  const deleteItem = async(cid) =>{
    const result = await axios.delete('http://localhost:9000/cart/delete',  {data : {'cid':cid}});
    result.data.result_rows && getCartList();
  };


  return { saveToCartList, updateCartList, getCartList, getCount, setCount, deleteItem }; // 다른 곳에서 호출해서 사용하기 위해 









};