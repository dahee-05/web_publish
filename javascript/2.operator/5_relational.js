// 비교 연산자 : >, <, >=, <=, !=, ==(값비교), ===(값,데이터타입비교)
// 실행결과 타입 : boolean 
// 제어문 if, while문에서 사용

  // if(조건식 : 3 > 2){
  //   // true
  // }else {
  //   // false
  // }


console.log(3 > 2);
console.log(3 < 2);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 == '2');  // 3 == 2
console.log(3 == 'A');  // 3 == A의 아스키코드의 숫자와 비교 3 ==67
console.log(3 === '2'); // 데이터타입 비교 FALSE(Number / String)
console.log(3 === 'A'); // 데이터타입 비교 FALSE(Number / String)

// 메모리 heap에 2가지의 저장공간이 생김
let obj1 = {
    name: "홍길동"
};

let obj2 = {
    name: "홍길순"
};

let obj3 = obj1; // call by reference

console.log(obj1);
console.log(obj2);
console.log(`obj1 : ${obj1}`); // 주소만 리턴
console.log(`obj2 : ${obj2}`);
console.log(`*******************`);
console.log(obj1 == obj2);      // false 콜 스택의 (주소)값으로 비교  
console.log(obj1 === obj2);     // false 주소의 값으로 비교  
console.log(typeof obj1 === typeof obj2);    

console.log(obj1 == obj3);      // false 콜 스택의 (주소)값으로 비교  
console.log(obj1 === obj3);     // false 주소의 값으로 비교  
console.log(typeof obj1 === typeof obj3);    

console.log(obj1.name === obj2.name);

