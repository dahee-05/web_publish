// Map 클래스 생성
// 생성방법  1.new Map() / 2.new Map(iterable)
// : iterable객체를 파라미터로 넣을 수 있음
// : map, set...등  Array 혹은 키-값 쌍인 요소를 가진 반복 가능 객체

// 이터러블 객체로 파라미터가 들어오면 map에 적합한 형태로 내부에서  구조분해할당을 한다
const fList = new Map([ [1, 'one'], [2,'two'] ]);
console.log(fList);
console.log(fList.get(1));

// Map 사이즈 확인
console.log(`size = ${fList.size}`);

// Map 데이터 추가
fList.set(3, 'three');
// set메소드는 구조분해할당 x, set은 key,vale의 값으로 받아야 함  
// fList.set([4,'four'])  // [ 4, 'four' ] => undefined 
// fList.set([[4,'four'],[5,'five']]) 
console.log(fList);

// Map 데잍터 확인
if(fList.has(3)) console.log(fList.get(3));
console.log(fList.has(3));

// 모든 키값 출력
console.log(fList.keys());

// 모든 value 출력
console.log(fList.values());

// key, value를 입력된 순서대로 배열 형태로 반환
let iteratotObj = fList.entries(); 
console.log(iteratotObj); 
// { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }
console.log(iteratotObj.next()); 
// { value: [ 1, 'one' ], done: false }
console.log(iteratotObj.next().value); 
// [ 1, 'one' ]

// 순회 : forEach
fList.forEach((element) => {console.log(element)});
fList.forEach((key, value, map) => {console.log(key, value, map)});

// 순회: for...of
// 1. [key, value] - [ 1, 'one' ] / [ 2, 'two' ] / [ 3, 'three' ]
for(let element of fList) console.log(element); 

// 2. key 출력 - key => 1 / key => 2 / key => 3
for(let key of fList.keys()) console.log(`key => ${key}`);

// 3. value 출력 - value => one / value => two / value => three
for(let value of fList.values()) console.log(`value => ${value}`);

// 4.entris -  entry => 1,one / entry => 2,two / entry => 3,three
for(let entry of fList.entries()) console.log(`entry => ${entry}`);

// 데이터 삭제 
if(fList.has(1)) fList.delete(1);
console.log(fList); // Map(2) { 2 => 'two', 3 => 'three' }

// 전체 삭제
fList.clear();
console.log(fList); // Map(0) {}



