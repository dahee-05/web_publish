// Map 클래스 생성
// 생성방법  1.new Map() / 2.new Map(iterable)
// : iterable객체를 파라미터로 넣을 수 있음
// : map, set...등  Array 혹은 키-값 쌍인 요소를 가진 반복 가능 객체

// 이터러블 객체로 파라미터가 들어오면 map에 적합한 형태로 내부에서  구조분해할당을 한다
const fList = new Map([ [1,'one'],[2,'two'] ]);
console.log(fList); //Map(2) { 1 => 'one', 2 => 'two' }
console.log(fList.get(1)); //one

// Map 사이즈 확인 
console.log(fList.size);  //2
console.log('***** size end ****');

// Map 데이터 추가 
// set메소드는 구조분해할당 x, set은 key,vale의 값으로 받아야 함  
fList.set(3,'three');
console.log(fList);   //Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
console.log('***** set end ****');

// Map 데잍터 확인
console.log(fList.has(2));    // true
if(fList.has(2)) console.log(fList.get(2));
console.log('***** has end ****');

// 모든 키값 출력
console.log(fList.keys());     // [Map Iterator] { 1, 2, 3 }
console.log('***** keys() end ****');

// 모든 value 출력
console.log(fList.values());  // [Map Iterator] { 'one', 'two', 'three' }
console.log('***** values() end ****');

// key, value를 입력된 순서대로 배열 형태로 반환 : entries()
// iteratorObj.next()
//   - next()는 이터레이터의 다음 요소를 반환, 
//   - value: 현재 이터레이터의 값 (배열의 [key, value] 형태).
//   - done: 이터레이션이 끝났는지 여부 (true 또는 false).
// iteratorObj.next().value
//   - next()가 반환한 객체 중에서 value 프로퍼티에 직접 접근해 해당 데이터 반환
let iteratorObj = fList.entries();
console.log(iteratorObj);         // { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }
console.log(iteratorObj.next());  // { value: [ 1, 'one' ], done: false } 
console.log(iteratorObj.next().value); //[ 2, 'two' ]
console.log('***** entries() end ****');


// 1. 순회 : forEach
fList.forEach((element) => console.log(element));   // one two three
console.log('***** forEach end ****');

// 2. 순회: for...of
// 2-1. [key, value] - [ 1, 'one' ] / [ 2, 'two' ] / [ 3, 'three' ]
for(let element of fList) console.log(element);
console.log('*****  for...of end ****');

// 2-2. key 출력 - key => 1 / key => 2 / key => 3
for(let key of fList.keys()) console.log(key);
console.log('***** keys() end ****');

// 2-3. value 출력 - value => one / value => two / value => three
for(let value of fList.values()) console.log(value);
console.log('***** values() end ****');

// 2-4.entris -  entry => 1,one / entry => 2,two / entry => 3,three
for(let element of fList.entries()) console.log(element);
console.log('***** entries() end ****');

// 데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList);   //Map(2) { 2 => 'two', 3 => 'three' }
console.log('***** delete() end ****');

// 전체 삭제
fList.clear();
console.log(fList);   // Map(0) {}
console.log('***** clear() end ****');