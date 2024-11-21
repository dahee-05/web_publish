// 기본 데이터 타입(Primitive DataType) - number, string, boolean...
// 기본 데이터 타입을 클래스로 생성해 놓은 객체들을 wrapper 클래스라 함
// 
console.clear();

// Number
let a = '123';
if(typeof a === 'string') a = parseInt(a);
console.log(typeof a);

if(a === 123) console.log(a);
// 조건값만 확인
if(Number('1234') === 1234) console.log(`a => ${a}`);


// "Not a Number"
let aa = new Number(100);
console.log(Number.isNaN(aa));

// MAX_VALUE 대문자 > static,const로 선언한 상수값일 가능성
let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;
console.log(maxValue);
console.log(minValue);


let x = 100; // 콜스택
let y = new Number(100); //힙 > 힙주소를 콜스택 y에 넣음
console.log(typeof x);
console.log(typeof y);
console.log(x === y);  // false가 나오는 이유 정리!!
console.log(x === y.valueOf()); // .valueOf() = 객체의 값을 찾아옴  

// String class + Templete literal(``) 
// console.clear();
// 콜스택은 메모리가 작기 때문에 한줄 단위로 실행 
// 두줄 단위로 실행하려면 중첩연산자 활용
let str = 'hello~'; 
let str2 = new String('hello~');
console.log(typeof str);
console.log(typeof str2);
console.log(str === str2);
console.log(str === str2.valueOf());
console.log(str2.valueOf());


// Boolean class
console.clear();
let flag = true; 
let flag2 = new Boolean(true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag === flag2);
console.log(flag === flag2.valueOf());
 
