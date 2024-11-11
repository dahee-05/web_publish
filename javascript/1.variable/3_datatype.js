/*
* primitive 데이터 타입 (데이터가 작음) 
* - 정수형 (Integer): 100, 1 ...
* - 실수형 (Float, Double): 0.123, 234.2...
* - 문자형 (String): '', " "
* - 불린형 (Boolean): true, false
* ex)_ let flag = true;
*
* Reference 데이터 타입 
* - 객체형(object) : 배열([]), JSON({}) .../ 데이터 주소를 알려줌
* 
* 
* 
* 
*/

// 정수형 변수 
let number = 100;

// 실수형 변수
let fnumber = 10.234;
fnumber = 200;

// console.log(number);
// console.log(fnumber);

// Boolean type 
let flag = true; // !(not) 
flag = !true;
let flagTest = !flag;

// 객체형 변수 
let nameList = ['홍길동', '홍길순', '홍길남'];
// console.log(nameList); // 값을 가지고 있는것이 아닌 주소값을 가짐
// console.log(nameList[1]);

// primitive, reference 데이터 타입 초기화 
let address = undefined;  // primitive (작은 데이터처리), 데이터의 값이 없음
let addressList = null;   // reference (큰 데이터처리), 객체의 주소값이 없음

// 데이터 타입 비교 : typeOf()
let x = 10;
let xx = 10;
let y = "10";
let obj = {name:'홍길동'};
console.log(x, typeof x);
console.log(xx, typeof xx);
console.log(y, typeof y);
console.log(typeof(y));
console.log( x == y);  // 값만 비교 
console.log( x === y); // 데이터 타입 비교 
console.log(x === xx);
console.log(obj, typeof obj);
console.log(obj.name);




















