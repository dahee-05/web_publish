import { useState } from "react";
export default function Counter({total, click}){
  const [number, setNumber] = useState(0); 

  function increament(){
    (number < 10)? setNumber(number+1): setNumber(number);
    // console.log(`number --> ${number}`);
    click(number, '+');
  };
  function decreament(){
    (number > 0)? setNumber(number-1):setNumber(number);
    click(number, '-');
  }

  return(
    <div className="container">
      <div>
        <span className="number">{number} / </span>
        <span className="total-number">{total}</span>
      </div>
      <button type="button" className="button" onClick={increament}>증가 (+)</button>
      <button type="button" className="button" onClick={decreament}>감소 (-)</button>
    </div>  
  );
}





/* 
useState(2); -> 리엑트가 관리하는 값이 됨 -> {number}에 자동으로 리엑트가 값을 뿌려줌

jsx안은 확장형 자바스크립트라 onClick={}부를 수도 있지만 onClick={()=>{}}로 바로 실행할 수 있는 콜백 함수로 넣어줄 수 있다

Virtual DOM을 거쳐 1초에 60프레임씩 반복되어 자동으로 화면에 업데이트 됨

 onClick={decreament()}시 에러 나는 이유
 : onClick={decreament()}는 decreament 함수를 호출한 결과값을  onClick에 전달 -> decreament 함수는 setNumber(number - 1)을 호출해서 상태를 업데이트 -> 하지만 반환값을 명시적으로 지정하지 않았기 때문에, 기본적으로 undefined를 반환
 : 일반적으로 React의 이벤트 핸들러에서는 반환값을 사용하지 않음
 : React에서 이벤트 핸들러는 반드시 함수 참조 !!!

만약 onClick={decreament()}로 사용하고 싶다면 
function decreament() {
    return () => {
      setNumber(number - 1);
    };
  } 처럼 만들어야 함
1. onClick={decreament()}는 decreament를 즉시 호출합니다.
2. 호출된 decreament는 새로운 함수를 반환합니다.
3. 반환된 함수는 실제로 버튼 클릭 이벤트가 발생할 때 실행됩니다.

>>> 리엑트에서는 함수를 사용하려면 함수의 참조값을 호출하는 것이 신기
>>> 만약 함수를 일반적처럼 호출해서 사용하려면 호출한 함수 안에 반환할 수 있는 새로운 함수를 만들어야 함
>>> decreament() 함수는 return에서 새롭게 생성된 **익명 함수(closure)**의 참조를 반환
>>> 즉 decreament()는 익명 함수의 참조
>>> decreament 함수는 실행될 때마다 새로운 함수 객체(익명 함수)를 생성

 number++ 
  : useState가 관리하기 때문에 ++ 증감연산자 사용불가 
  : 해당 함수에서 실행한 것을 useState에서 연산해야하는데 사용 불가

: 컴포넌트 안에있는 이벤트는 해당 컴포넌트에만 적용된다.  
*/