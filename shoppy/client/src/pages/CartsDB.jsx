import axios from 'axios';
import React, { useState,useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function CartsDB() {
  // const navigate = useNavigate();
  // const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); 

  // /* 장바구니 아이템 저장 : 배열 */
  // const [cartList, setCartList] = useState(()=>{
  //   try {
  //     const initCartList =  localStorage.getItem("cartItems");
  //     return initCartList ? JSON.parse(initCartList) : []; // count 값으로 들어가도록 리턴
  //   }catch (error) {
  //     console.log('로컬 스토리지 데이터 작업도중 에러 발생~');
  //     console.log(error);
  //   }
  // }); 
  
  // const pids = cartList && cartList.map((item)=> item.pid);  

  // // DB연동
  // useEffect(()=>{
  //   if(pids.length > 0){
  //     axios.post('http://localhost:9000/product/cartItems', {"pids": pids})
  //           .then((res)=> {
  //             const updateCartList  = cartList.map((item)=> {
  //                           const filterItem = res.data.find((ritem) => ritem.pid === item.pid)
  //                           return filterItem ?
  //                           { ...item , 
  //                             "pname": filterItem.pname,
  //                             "price": filterItem.price,
  //                             "description": filterItem.description,
  //                             "image": filterItem.image,
  //                           } 
  //                           : item
  //                         });
  //             setCartList(updateCartList );
  //           })  
  //           .catch((error)=>console.log(error));  
  //   }
  //   },[cartList]);


  //   const handleOder = (type, pid, size) => {
  //     // console.log(type, pid, size);
  //     const id = localStorage.getItem("user_id");
  //     let formData = []; 
      
  //     if(type === 'all'){ //주문하기 
  //       formData = {"id":id, "cartList":cartList};
  //     }else{ //계속 담아두기 - 개별 상품 DB저장
  //       const filterItem = cartList.filter(item => item.pid === pid && item.size === size);
  //       formData = { id:id , cartList:filterItem};
  //     }
      
  //     console.log('formData--->',formData);
      

  //     // 1.로그인 여부 확인    
  //     if(isLoggedIn){
  //       // console .log('isLoggedIn-->',isLoggedIn);
  //       // {"id":"test2", "cartList": [~~~]}
  //        // [{}, {}...]

  //       axios.post("http://localhost:9000/cart/add", formData)
  //            .then((res)=> {
  //                if(res.data.result_rows !== 0) {
  //                   alert('장바구니 추가완료');
  //                   if(type ==="all"){
  //                     // 주문하기 페이지 이동
  //                     clearStorageAll();  // 로컬스토리지 전체 아이템 삭제
  //                     refreshStorage([], 0);   // App.js의 cartList, cartCount 초기화
  //                   }else{
  //                     const updateCart = clearStorageEach(pid,size); // 로컬스토리지 개별 아이템 삭제
  //                     refreshStorage(updateCart, updateCart.length);
  //                   }
  //                }else {

  //                } 
  //           })
  //           .catch((error)=>console.log(error))
  //     }else{
  //       window.confirm('로그인이 필요한 서비스입니다.') && navigate('/login');
  //     }
  //   };

  //   // 로컬스토리지 전체아이템 삭제, 같은 영역에서 작업, 비동기는 하나의 함수로 묶어서 처리
  //   const clearStorageAll = () =>{
  //     // console.log('----------> 로컬스토리지 전체 삭제 시작');
  //     localStorage.removeItem("cartItems"); //비동기
  //     navigate('/cartdb');
  //     // setTimeout(()=>{setCartList([])}, 0); //비동기x -> 비동기로 변경해줘야 같은 영역에서 작업가능
  //     // console.log('----------> 로컬스토리지 전체 삭제 종료');
  //   };

  //   /* 로컬스토리지 개별 아이템 삭제 */
  //   const clearStorageEach =(pid, size) => {
  //     const updateCart = cartList.filter((item)=> !(item.pid === pid && item.size === size));
  //     console.log('updateCart-->',updateCart);
  //     localStorage.removeItem("cartItems");
  //     localStorage.setItem("cartItems",updateCart);
  //     setTimeout(()=>{setCartList(updateCart)},0);
  //     return updateCart;
  // };

//   return (
//     <div className='content'>
//       <h1>My Cart !!</h1>
//       <button type='button' onClick={()=>{handleOder("all")}}>주문하기</button>
//         <table border='1'>
//          <tr>
//             <th>Pid</th>
//             <th>Pname</th>
//             <th>Size</th>
//             <th>Qty</th>
//             <th>Desciption</th>
//             <th>Price</th>
//             <th>Image</th>
//          </tr>
//           {cartList.map((item) =>
//             <tr>
//               <td>{item.pid}</td>
//               <td>{item.pname}</td>
//               <td>{item.size}</td>
//               <td>{item.qty}</td>
//               <td>{item.description}</td>
//               <td>{item.price}</td>
//               <td>
//                 <img src={item.image} alt="" style={{width:"100px"}} />
//               </td>
//               {/* <td>
//                 <button onClick={()=>{handleOder("each", item.pid, item.size)}}>계속 담아두기</button>
//               </td> */}
//             </tr>
//           )}
//         </table>
//     </div>
//   );
}
