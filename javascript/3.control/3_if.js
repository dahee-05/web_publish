// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과 출력 

let number = 101;
let result = undefined;
// number % 2 === 0 또는 
// 1: true / 0: false

if(number % 2) result = '🍏';
else result = '🍎';

console.log(result);


// 삼항연산자 
(!(number % 2))? result = '🍎':result = '🍏';
console.log(`삼항연산자 결과 : ${result}`);

// 삼항연산자2 
let choice = (!(number % 2))? '🍎':'🍏';
console.log(`삼항연산자2 결과 : ${result}`);