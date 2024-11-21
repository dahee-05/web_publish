// Number 클래스들의 메소드 
// Number객체.valueOf(); > 힙에서 데이터를 가져옴
console.clear();

let a = 100;
let b = new Number(100);
console.log(typeof a, typeof b);
console.log( a.valueOf() === b.valueOf());
// a.valueOf() > a를 Number()데이터 타입으로 변환시켜줌


// Number 객체.toLocalString() 10000 => 10,000
// 3자리씩 끊어서 쉼표로 구분
let num = 123000;
let num2 = new Number(123456);
console.log(num2.toLocaleString()); 

//기본형도 내부에서 num을 클래스로 만드는 처리
console.log(num.toLocaleString()); 

// MAX_VALUE, MIN_VALUE...(static) > Number.MAX_VALUE 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

let num3 = 123.45;
console.log(num3.toFixed()); //반올림함수


























