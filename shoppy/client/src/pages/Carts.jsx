import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Carts() {
  // localStorage에 담긴 cartItems 배열 객체 출력
  // 문자열이기 때문에 cartItems[0].pid로 쓸 수 없음 -> JSON.parse()
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));
   const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); 

  /* 장바구니 아이템 저장 : 배열 */
  const [cartList, setCartList] = useState(()=>{
    try {
      const initCartList =  localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList) : []; // count 값으로 들어가도록 리턴
    }catch (error) {
      console.log('로컬 스토리지 데이터 작업도중 에러 발생~');
      console.log(error);
    }
  }); 
  
  const pids = cartList && cartList.map((item)=> item.pid);  

  // DB연동
  useEffect(()=>{
    if(pids.length > 0){
      axios.post('http://localhost:9000/product/cartItems', {"pids": pids})
            .then((res)=> {
              const updateCartList  = cartList.map((item)=> {
                            const filterItem = res.data.find((ritem) => ritem.pid === item.pid)
                            return filterItem ?
                            { ...item , 
                              "pname": filterItem.pname,
                              "price": filterItem.price,
                              "description": filterItem.description,
                              "image": filterItem.image,
                            } 
                            : item
                          });
              setCartList(updateCartList );
            })  
            .catch((error)=>console.log(error));  
    }
    },[]);


    const handleOder = () => {
      // 1.로그인 여부 확인    
      if(isLoggedIn){
        // console .log('isLoggedIn-->',isLoggedIn);
        // {"id":"test2", "cartList": [~~~]}
        const id = localStorage.getItem("user_id");
        const formData = {"id":id, "cartList":cartList};

        axios.post("http://localhost:9000/cart/add", formData)
             .then((res)=> {
                 if(res.data.result_rows !== 0) {
                    alert('장바구니 추가완료');
                    localStorage.removeItem("cartItems");
                 }else {

                 } 
            })
            .catch((error)=>console.log(error))
      }else{
        window.confirm('로그인이 필요한 서비스입니다.') && navigate('/login');
      }
    };


  return (
    <div className='content'>
      <h1>My Cart !!</h1>
      <button type='button' onClick={handleOder}>주문하기</button>
        <table border='1'>
         <tr>
            <th>Pid</th>
            <th>Pname</th>
            <th>Size</th>
            <th>Qty</th>
            <th>Desciption</th>
            <th>Price</th>
            <th>Image</th>
            <th></th>
         </tr>
          {cartList.map((item) =>
            <tr>
              <td>{item.pid}</td>
              <td>{item.pname}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.image} alt="" style={{width:"100px"}} />
              </td>
              <td><button>계속 담아두기</button></td>
            </tr>
          )}
        </table>
    </div>
  );
}
