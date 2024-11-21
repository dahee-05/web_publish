// 1. Set 생성 및 데이터 저장
let mySet = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add({age:20});
mySet.add([1,2,3]);

console.log(mySet); //Set(4) { 10,'홍길동',{ age: 20 },[ 1, 2, 3 ] }
console.log('********* add() end *********');


// 2. 데이터 출력 & 순회
// 1)_ for...of
// value-> 10/value-> 홍길동 /value-> [object Object] /value-> 1,2,3
for(my of mySet) console.log(my);
console.log('********* add() end ********');

// 2)_ forEach
// 10 /홍길동/{ age: 20 }/[ 1, 2, 3 ]
mySet.forEach((item) => console.log(item));

// 10 10 Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3 ] }
// 홍길동 홍길동 Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3 ] }...
mySet.forEach((item, key, set) => console.log(item, key, set));
console.log('********* forEach() end ********');

// 3. 데이터 확인 - 원시타입은 값 자체를 저장하고 비교 / 참조값은 has사용시 새로운 객체 생성 -> 변수에 넣어 비교필요
console.log(mySet.has('홍길동'));
// console.log(mySet.has({age:20})); 
// console.log(mySet.has([1,2,3]));

// 4. 데이터 삭제
if(mySet.has(10)) mySet.delete(10);
else console.log('삭제할 데이터가 없음');
console.log(mySet);


// 5. 전체 삭제
mySet.clear();
console.log(mySet);
