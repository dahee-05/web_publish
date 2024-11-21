/*
 * Map 객체 :  key-value를 한쌍으로 가지는 집합, 키는 오직 단 하나만 존재
 * set(key, value) : 데이터를 추가
 * get(key) : 데이터 출력
 * has(key) : 데이터 존재 여부 확인 true, false
 * delete(key) : 데이터 삭제
 * Map은 Iterable object이므로 for...of, spread, destructure 가능함
*/

let fruitMap = new Map();

// 데이터 추가 
fruitMap.set('apple','🍎');   //apple 하나만 저장됨
fruitMap.set('orange','🍊');
console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

console.log(fruitMap.has('orange')); // true
console.log(fruitMap.has('lemon')); // false
console.log(fruitMap);  // { 'apple' => '🍎', 'orange' => '🍊' }

if(fruitMap.has('orange')) fruitMap.delete('orange');
console.log(fruitMap); // { 'apple' => '🍎' }
