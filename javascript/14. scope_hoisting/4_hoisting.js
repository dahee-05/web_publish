/*
 * 콜스택 == 코드 실행하는 아이
 * 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업
 * function이 붙은 함수는 미리 꺼내서 메모리의 객체로 만들어 놓음
 * lo 함수는 콜스택 실행전 메모리에 올려놓지 않음
 * const, let으로 선언된 lo 함수는 함수는 호출되기 전에 반드시 미리 선언되어야한다. 
*/

hoist1();
hoist2();
hoist3();

function hoist1() {
  console.log('호이스팅 1');
}

function hoist2() {
  console.log('호이스팅 1');
}

const hoist3 = () => {
  console.log('호이스팅 2');
}
