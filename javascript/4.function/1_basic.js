/*
 * 함수 정의 :: 
 * function 함수명(파라미터(=매개변수)){
 *  실행로직;
 * } 
 * 함수는 객체로 힙에 생성이되어 저장되나 주소값을 어딘가에서 가지고 있지 않다. > 함수 호출로 사용
 * 
 * 함수 호출 ::  함수명(파라미터 형식); 
 * 리엑트는 함수형 기반으로 만들어짐
 * 
 * 내장(Built-In)함수 =  자주 사용하는 기능을 함수로 구현하여 엔진에서 제공
 * : parsint(문자열): 문자열을 숫자로 변환하는 함수
 * : parsFloat()/string()/ number()/ boolean()
 * 
 * 외장함수는 코드짜면서 만드는 함수
 * 
*/

// 빌트인 함수 parseInt() 호출
let a = '100';
// console.log(a, typeof a);
// console.log(parseInt(a), typeof parseInt(a));
// console.log(a +100);
// console.log(parseInt(a) +100);

// 두개의 숫자를 입력받아, 함계를 출력하는 로직 작성
let num1 =10;
let num2 =20;
// console.log(`sum ===> ${num1} + ${num2} = ${num1 + num2}`);

// parseInt 
let cnumber = parseInt('1234');
// console.log(cnumber, typeof cnumber);

// 두개의 숫자를 입력받아, 함계를 출력하는 로직 작성
// 함수 정의 
// 힙에 올라가있음, 함수 호출 위치에 결과값 출력
function add(num1, num2){
  let n1 = parseInt(num1);
  let n2 = parseInt(num2);
  console.log(`add sum ===> ${n1 + n2}`);
}

// 두 숫자의 차를 구하되, 결과는 음수가 출력되지 않도록 한다.
// a는 b 보다 큰 경우 결과값 출력
function min(a, b){ 
  if(a > b){
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    console.log(`min sum ===> ${ num1 - num2}`);
  }else{
    console.log(`a는 b보다 커야합니다.`);
  }
}

add('10232', '2232320');
min('50', '20');
