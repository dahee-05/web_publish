/*
 * 제어문 : 조건문 : if, while, do ~ while
 *  if(조건식: 비교연산자 포함){조건식이 참인 경우 실행}
 *  if(조건식){조건식 true} else{조건식 false}
 *  삼항연산자 : (조건식) ? 참인경우 : 거짓인 경우  
 *  if(조건식1){조건식1이 참} else if(조건식2){조건식2 참}....else{모든 조건식에 해당되지 않을때}
 */

let fruit = 'orange';
  // if(fruit ==='apple'){
  //   console.log('🍎');
  // }else{
  //   console.log(fruit);
  // }

let display = undefined; // 값 초기화   
(fruit ==='apple')? display = '🍎' : display = fruit;
console.log(display);
  
// 점심메뉴 : 피자, 햄버거 
let lunch = 'pizza';
let display2 = undefined;
(lunch === 'pizza')? display2='🍕' : display2='🌭' ;
console.log(display2);
// ************************************************************
// 학생명이 홍길동, 홍길순, 김영희인지 체크하여 
// 해당하는 경우 이름 출력
// 아닌 경우 '해당 학생 없음' 으로 출력
// 출력포맷 : 실행결과 => 
let a = '홍길동';
let b = '홍길순';
let c = '김영희';
let name = undefined;
let result = undefined;
name = '김영희';

  if(name === a){
    result = a;
  }else if(name === b){
    result = b;           
  }else if(name === c){
    result = c;
  }else { 
    result = '해당 학생 없음';
  }
  console.log(`실행결과 => ${result}`);






// ************************************************************
/* 1. 변수의 유효범위 */
// let, const 블록레벨의 유효범위를 가짐   
// 블록레벨 : 변수가 선언되어 있는 중괄호 안의 범위 
// var 는 블록레벨이 아닌 함수 범위 안의 유효범위를 가짐 > 의도하지 않은 범위에서 변수가 사용될 수 있고 > 메모리 차지, 누수로 발전
function scope(){
  if(true){
    const a = 123;
  }
  console.log(a); // let, const로 선언할 경우 ReferenceError 
}

/* 2.형 변환 type conversion 
  '==' : 동등 연산자
  Falsy(거짓 같은 값) 
  : false, '', null, undefined, 0, -0, NaN

  if('false'){    * 'false' => true로 인식하게 됨
    console.log(123):
    }
*/

/* 3. 화살표 함수  */
// () => {} vs function(){} 
const double = function(x){
  return x * 2
}
console.log('double : ', double(7));

// const doubleArrow = (x) => {
//   return x * 2
// }

// const doubleArrow = (x) => x * 2;  
const doubleArrow = x => x * 2;  // 매개변수가 1개이면 소괄호 생략가능
// 객체 데이터를 반환할때는 꼭 소괄호()로 감싸줘야함 
const doubleArrow2 = x => ({name: 'dahee', age:'29'});
console.log('doubleArrow : ', doubleArrow(7));
console.log('doubleArrow2 : ', doubleArrow2());

