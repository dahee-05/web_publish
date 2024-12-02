// 공통 모듈 저장
// default : 해당 모듈에서 한 함수만 사용할 수 있다
// 자주사용하는 함수에 default를 붙인다.
// default가 붙은 애들은 import시 {}안붙이고 sum,이렇게 사용가능하다

export default sum = (number1, number2) => {
  return number1 + number2;
};

export const sub = (number1, number2) => {
  return number1 - number2;
};

export function mul(number1, number2) {
  return number1 * number2;
};

export function div(number1, number2){
  return number1/number2; 
};