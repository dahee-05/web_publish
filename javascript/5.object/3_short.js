// 변수를 객체의 value로 사용하는 경우, property 생략 가능
// 
console.clear();

let name = '홍길동';
let age = 20;

const person = {
      name, age 
};
console.log(person.name);
console.log(person.age);


let x =0; let y =0; 
const obj = {x, y}; 
console.log(obj);

let frame = 'apple';
let emoji = '🍎';
let color = 'Red';

const fruits = {frame, emoji, color};
console.log(fruits);


// 사원들의 정보를 입력받아서, 객체로 반환하는 함수를 정의
// 사원정보 - 사번(empno), 이름(ename), 나이(age)
// function createObj(empno, ename, age){
//   return {empno, ename, age};
// };

const createObj = (empno, ename, age) => {
  return {empno,ename,age}
};


let emp1 = createObj('1234', '홍길동', 20);
let emp2 = createObj('7854', '김철수', 30);
console.log(emp1);
console.log(emp2);

// 배열로 묶기
let array = [emp1, emp2];
console.log(array);







