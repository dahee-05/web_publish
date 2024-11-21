/*
 * Set (built-in)클래스 : 값의 컬렉션
 * 다양한 데이터(원시데이터(primitive), 객체참조) 저장
 * 데이터 추가 : add(value) -> for..of, forEach로 값을 꺼냄
 * key값은 따로 없어서 value값을 넣으면 동일한 값으로 생성된다
 * 생성 방법 : 1.new Set() 2.new Set(iterable)
 * : 빈주머니를 만들어 뭐든 다 넣을 수 있음 ->랜덤하게 데이터 출력
 * : 동일한 데이터는 하나로 인식함 ** 
 * : key값 없이 value값만 가짐, 구조분해할당 없음
 * : iterable객체를 파라미터로 넣을 수 있음
 * (중복된)정제되지 않은 데이터를 받아 데이터 정처리를 함 -> 중복된 데이터를 거름/ if를 사용하면 버블소팅을 해야해서 set을 사용하는게 좋다 **
*/

// 1. Set 생성 및 데이터 저장
let mySet = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add({age:20});
mySet.add([1,2,3]);

console.log(mySet); //Set(4) { 10,'홍길동',{ age: 20 },[ 1, 2, 3 ] }

// 2. 데이터 출력 & 순회
// 1)_ for...of
// value-> 10/value-> 홍길동 /value-> [object Object] /value-> 1,2,3
for(let value of mySet) console.log(`value -> ${value}`);

// 2)_ forEach
// 10 /홍길동/{ age: 20 }/[ 1, 2, 3 ]
mySet.forEach((value) => {console.log(value)});
// 10 10 Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3 ] }
// 홍길동 홍길동 Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3 ] }...
mySet.forEach((value,  key, set) => {console.log(value, key, set)});


// 3. 데이터 확인
console.log(mySet.has(10));   // true
console.log(mySet.has(100));  // false
 

// 4. 데이터 삭제
if(mySet.has(10)) {
  mySet.delete(100);
console.log('삭제완료!');
}  
else console.log('데이터가 존재하지 않음');


// 5. 전체 삭제
mySet.clear();
console.log(mySet);  // Set(0) {}
