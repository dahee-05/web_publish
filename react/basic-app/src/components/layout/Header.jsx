import './Header.css';

export default function Header({children}){
  return (
      <header>
        {children}
      </header>
  );
};

/*
헤더의 컴포넌트 3개를 {children} 구조분해할당으로 받아 변수로 받음
 -> 코드의 유지보수가 쉬워짐
*/ 