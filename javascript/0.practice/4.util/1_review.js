// 1. Spread Operator 
function display(...nums){
  for(num of nums) console.log(parseInt(num));
}
display(1,2);
display(1,2,3,4,5);


const hong = {
  name : '홍길동',
  age : 20
};
const hongUpdate = {
  ...hong,
  address : '서울어딘가'
}
console.log(hongUpdate);


// 2. Destructure Object(구조 분해 할당)
const getObject = () => {
  return {name: '공유', age: 30};
}
let {name, age} = getObject();
console.log(name, age);

const getObject2 = () => {
  return [1,2,3];
}
let [a, b, c] = getObject2();
console.log(a, b, c);


// 3. 인스턴스객체.forEach(콜백함수) ->인스턴스 객체의 함수
// index 필요시 뒤에 입력
const numbers = [1,2,3];
numbers.forEach((item, idx) => console.log(item, idx));

const myMap = new Map();
myMap.set('name','홍길동');
myMap.set('age', 20);
console.log(myMap);
myMap.forEach((key, value) => console.log(key, value)); //홍길동 name

const mySet = new Set();
mySet.add('홍길동');
mySet.add('홍길동');
mySet.add('서현진');
mySet.add('공유');
console.log(mySet);
mySet.forEach((key, value) => console.log(key, value)); //서현진 서현진
