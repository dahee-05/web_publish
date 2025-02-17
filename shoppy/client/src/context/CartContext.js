// 인증 관련 작업 - 리엑트에서 처리하도록
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();  // 전역 변수를 선언

// APP.JS에서 CartProvider를 감싸면 그 안에 있는 사용하는 애들이 이것을 가져다가 씀
export const CartProvider = ({children}) =>{
   const [ cartList, setCartList ] = useState([]); 
   const [ cartCount, setCartCount ] = useState(0); 
    
  return ( // <CartContext>로 감싼 모든 하위자식들은 value값을 가짐
    <CartContext.Provider value={{ cartList, setCartList, cartCount, setCartCount  }}>
      {children}
    </CartContext.Provider>
)};

/*
 * createContext() -> 2가지 객체 반환 / 전역 상태를 생성하는 함수 
 * 1. AuthContext : createContext()가 반환하는 기본 컨텍스트 객체
 * 2. AuthContext.Provider : 컨텍스트 값을 하위 컴포넌트에 전달
 * 
 * AuthContext : 인증 관련 데이터를 저장할 컨텍스트 객체
 * 
 * AuthContext.Provider 란?
 * Provider는 AuthContext를 하위 컴포넌트에 공급(인증정보)
 * value={{ isLoggedIn, setIsLoggedIn }}를 전역 상태로 공유
 * 하위 컴포넌트에서 useContext(AuthContext)를 사용하면 value에 접근 가능
*/


/* AuthContext 
 * = React의 Context API를 사용하여 인증 관련 상태(Auth)를 전역적으로 관리하기 위해 컨텍스트 생성
 *
 *
 *
*/