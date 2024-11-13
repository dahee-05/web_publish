// 콜백 함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
// 비동기방식에서 많이 처리함


const job = (a, callback) => {  //2.실행
  callback(a);  //3-1.실행 4.실행
}
const job2 = (a, b, callback) => {
  callback(a, b);
}
const print = (a) => console.log(a); //3-2.실행
const printAll = (a, b) => {
  console.log(a + b);
}

job( 100, print); //1.실행 , 주소값이 맵핑되어 변수로 선언해도 가능 , 5.실행
job2( 100, 200, printAll); //함수의 주소값을 파라미터로 전달


// setTimeout 함수 호출 
// setTimeout(functionRef, delay, param1)
console.clear();
setTimeout(() => console.log('setTimeout 실행')); // 이름없이 표현식 작성 > 한번작성하고 종료
// 시간을 주면 웹 api에 있다가 나오게 됨
// 노드에서는 웹api를 백그라운드라고 부름 => 현재는 백그라운드에 있다가 옴
// 내장함수는 api문서 참고 *** >> api = 자바스크립트 모듈로 만들어진 것 
setTimeout((second) => console.log(`${second}초 후 실행`), 3000, 3); // 1은 (second)함수로 넘어감  
