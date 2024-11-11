// 제어문 - 조건문 : switch(조건) ~ case
/*
* switch(숫자, 문자) {
    case 숫자, 문자 : 
      실행문;
      break;
    case 반복 ~~~
    default : 
      실행문; (마지막 실행문으로 break없어도 됨)  
  }
*/
// 0:월요일, 1:화요일, 2:수요일
let useage = `[0]월요일,[1]화요일,[2]수요일`;
let day = 0;
let resultDay = undefined;
switch(day){
  case 0 :
    resultDay ="월요일"; break;
  case 1 :
    resultDay ="화요일"; break;
  case 2 :
    resultDay ="수요일"; break;
  default : 
    console.log(`사용법 : ${useage}`);
  }
  if(!(resultDay === undefined)){
    console.log(`선택한 요일은 [${resultDay}] 입니다.`);
  }


// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과 출력 

let number = 100;
let result = undefined;

switch(number % 2){
  case 0 :
    result = '🍎';
    break;   // break 없으면 case1의 break로 가서 case1 출력 후 멈추게 됨 
  case 1 : 
  result = '🍏'; 
    break;
  default : 
  result = '해당 과일 없음';
}
console.log(result);





















