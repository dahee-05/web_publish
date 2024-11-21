// Iterable Object - 순회가 가능한 객체들을 말함
// String, Array(인덱스), Map, Set....
// for...of, ...spread Operator(전개구문), Destructure Object(구조분해할당)
// Map : (key, value)- set, get, has, keys, values, entries, clear...
// Set: (value) - add, get, has, delete, keys, values, clear
//    : 큰 주머니에 잡히는대로 꺼냄, 순서 상관 X, 중복되는 데이터 없음

// 1. Spread Operator 
function display(...nums){
  for(num of nums) console.log(num);
}
display(1,2);
display(1,2,3,4,5);

const hong = {
          name : '홍길동',
          age : 20
};
const hongUpdate = {
        ...hong,
        address : '서울시'
}
console.log(hongUpdate);

// 2. Destructure Object(구조 분해 할당)
const getObject = () => {
  return {name: '공유', age: 30};
}
const { name, age } = getObject();
console.log(name, age);

const getObject2 = () => {
  return [1,2,3];
}
const [a, b, c] = getObject2();
console.log(a, b, c);

// 3. 인스턴스객체.forEach(콜백함수) ->인스턴스 객체의 함수
// index 필요시 뒤에 입력
const numbers = [1,2,3];
numbers.forEach((item, idx) => console.log(item, idx));

const myMap = new Map();
myMap.set('name', '홍길동');
myMap.set('age', 20);
myMap.forEach((key, element)=>{console.log(key, element)});

const mySet = new Set();
mySet.add('홍길동');
mySet.add('홍길동');
mySet.add('서현진');
console.log(mySet);
console.log(mySet.keys());
console.log(mySet.values());
mySet.forEach((element, key) => console.log(key, element));



