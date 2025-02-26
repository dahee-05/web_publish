// 인증 관련 작업 - 리엑트에서 처리하도록
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();  // 전역 변수를 선언

// app.js의 컴포넌트가 실행되기 전 로그인 여부 체크
export const AuthProvider = ({children}) =>{
  const [ isLoggedIn, setIsLoggedIn ] = useState(()=>{
    try {
        const token =  localStorage.getItem("token");
        return token ? true : false; // count 값으로 들어가도록 리턴
      }catch (error) {
        console.log('로컬 스토리지 json 파싱 오류~', error);
        return false; // 오류 발생시 빈 배열 반환
      }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // !! : boolean으로 변환하는 역할, 존재시 true
  }, [setIsLoggedIn]);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
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