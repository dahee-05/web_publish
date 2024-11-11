// 사칙연산 : +, -, *, /, %, **
console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5);  // 모듈러 연산, 나머지 연산
console.log(3 ** 5); // 지수 

// % ( 모듈러 연산자 )
let a = 101;
console.log(a % 2); // a가 짝수? 홀수? 

// + (접합연산자) : 문자로 시작하면 뒤에 나오는 +는 접합연산자로 실행
// 숫자먼저 괄호로 묶은 후 실행하면 정상 연산처리됨
console.log(10 + 20);
console.log("sum : " +10 + 20); // 접합연산  ( sum : 1020 )
console.log("sum : " +(10 + 20)); // 연산  ( sum : 30 )
console.log(`sum : ${10 + 20}`); // 연산  ( sum : 30 )

console.log(10 + 20 + "sum : "); // 접합연산 ( 30sum : )
