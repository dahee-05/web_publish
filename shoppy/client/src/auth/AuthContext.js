// 인증 관련 작업 - 리엑트에서 처리하도록
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// app.js의 컴포넌트가 실행되기 전 로그인 여부 체크
export const AuthProvider = ({children}) =>{
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // !! : boolean으로 변환하는 역할, 존재시 true
  }, [setIsLoggedIn]);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
)};



/* AuthContext 
 * = React의 Context API를 사용하여 인증 관련 상태(Auth)를 전역적으로 관리하기 위해 컨텍스트 생성
 *
 *
 *
*/