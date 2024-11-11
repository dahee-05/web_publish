// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 보통은 위에서부터 아래로 흐름대로 읽어 내려가는 인터프리터 방식 
const a =7; 

double();

// 함수 선언은 아래에 작성해도 최상단으로 인식 
function double(){
  console.log(a * 2);
}

// 아래처럼 선언하면 최상단으로 인식하지 못함
// const double = function (){
//   console.log(a * 2);
// }

/*
호이스팅 === ‘선언이 먼저 메모리에 저장되었다.’
: 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것 즉, 코드를 실행하기 전 실행 가능한 코드를 형상화하고 구분하는 과정(*실행 컨텍스트를 위한 과정)을 거침
 ->자바스크립트 엔진이 먼저 전체 코드를 한 번 스캔하고 실행컨텍스트에 미리 기록해 놓기 때문에 이런 현상이 발생 ***

: 자바스크립트 엔진은 코드를 실행하기 전 실행 컨텍스트를 위한과정에서 모든 선언(var, let, const, function, class)을 스코프에 등록 
: var 키워드는 선언과 함께 undefined로 초기화되어 메모리에 저장되는데 let과 const는 초기화되지 않은 상태로 선언만 메모리에 저장되기 때문에 초기화 되지 않으면 변수를 참조할 수 없어서 참조에러(reference error)가 발생

: 코드 실행 전 이미 변수선언/함수선언이 저장되어 있기 때문에 선언문보다 참조/호출이 먼저 나와도 오류 없이 동작
-> let, const, class를 이용한 선언문을 호이스팅이 발생하지 않는 것처럼 동작
==>스코프의 시작에서 변수의 선언까지 *일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문

(scope, hoisting, this, function, closure)****
https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/

*/