// type of, typeod(operand, operand ...)
let name = '홍길동';
let age = 20;
let a = 100;
a = 0.1;
a = '가나다';
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = true;

console.log(typeof 100);
console.log(typeof '1000');
console.log(typeof name);
console.log(typeof age);
console.log(typeof a);
console.log(typeof a === typeof age); //데이터타입 비교
console.log(typeof (a, age, name )); // 가장 마지막에 있는 name타입만 출력
console.log(typeof (a) === typeof (age)); // 가장 마지막에 있는 name타입만 출력


