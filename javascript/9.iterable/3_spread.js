/*
 *  ...(Spread Operator, 전개구문)
 * 모든 Iterable Object에서 사용 가능
 * function 함수명(...param) -> 파라미터 개수와 상관없이 받을 수 있음
 * [...Iterable] : 배열에 요소를 제한 없이 받음
 * {...iterable} : object 리터럴
*/

// 1. (...Iterable) : 변수에 적용 / for...of 사용
function add(...num) { //num은 배열 ,  Rest parameter
  let sum = 0;
  for(element of num) sum += parseInt(element);        
  return sum;
}
let sum = add(1,2);
let sum2 = add(1,2,'3');
console.log(`sum = ${sum}`);
console.log(`sum2 = ${sum2}`);


// 2. [...Iterable] : 배열에 적용
let fruit1 = ['🍏','🍋'];
let fruit2 = ['🍓','🍊','🍉'];

// fruit5 = fruit1, fruit2 사이에 '🍍'을 추가
// [...fruit1]- 요소만 가져옴, [fruit1]-주소값을 가져옴
let fruit3 = fruit1.concat(fruit2);
let fruit4 = [...fruit1, ...fruit2]; 
let fruit5 = fruit1.concat('🍍',fruit2);

console.log(fruit3);
console.log(`fruit4 : ${fruit4}`);
console.log(`fruit5 : ${fruit5}`);


// 3. {...Iterable} : Object Iterable
const hong = {
  name: '홍길동',
  age: 20,
  address: '서울시 강남구'
};
const hongUpdate = {
  ...hong,
  job:'개발자'
};
console.log(hongUpdate);
