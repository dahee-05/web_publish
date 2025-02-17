import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Carts({refreshStorage}) {
  // localStorage에 담긴 cartItems 배열 객체 출력
  // 문자열이기 때문에 cartItems[0].pid로 쓸 수 없음 -> JSON.parse()
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [cartList, setCartList] = useState([]);

  // 페이지가 실행될 때 확인이 되어야 하는 작업이므로 useEffect로 처리
  useEffect(()=>{
      if(isLoggedIn) {  // 로그인O -> DB - shoppy_cart에서 정보
          const id = localStorage.getItem("user_id");
          console.log('db');

          axios
              .post("http://localhost:9000/cart/items", {"id":id} )
              .then(res => setCartList(res.data))
              .catch(error => console.log(error));

      } else {   // 로그인X -> localStorage
          console.log('localStorage');
          addCartList(); 
      }
  },[isLoggedIn]); 

  /* 로컬스토리지 데이터 --> cartList추가  */
  const addCartList = () =>{
    const items = localStorage.getItem("cartItems"); //비동기라 아래에두 비동기로 처리
    setTimeout(setCartList([...JSON.parse(items)]),0);
  };


  return (
    <div className='content'>
      <h1>My Cart !!</h1>
      {/* <button type='button' onClick={()=>{handleOder("all")}}>주문하기</button> */}
        <table border='1'>
         <tr>
            <th>Pid</th>
            <th>Pname</th>
            <th>Size</th>
            <th>Qty</th>
            <th>Desciption</th>
            <th>Image</th>
            {
              isLoggedIn && 
              <>
                <th>배송지주소</th>
              </>
            }
         </tr>
       {cartList.map((item) =>
          <tr>
            <td>{item.pid}</td>
            <td>{item.pname}</td>
            <td>{item.size}</td>
            <td>{item.qty}</td>
            <td>{item.info}</td>
            <td>
              <img src={item.image} alt="" style={{width:"100px"}} />
            </td>
            { isLoggedIn && 
              <td>{item.zipcode}/{item.address}</td> 
            }  
            {/* <td>
              <button onClick={()=>{handleOder("each", item.pid, item.size)}}>계속 담아두기</button>
            </td>  */}
          </tr>
        )} 
        </table>
    </div>
  );
}


