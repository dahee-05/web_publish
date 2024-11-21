// 1.파라미터(...Iterable) : 변수에 적용 -> for...of 사용
add = (...element) => { // 배열로 받음 
  let result = 0;
  for(ele of element) result += parseInt(ele);
  return result;
}

let sum1 = add(1,2);
let sum2 = add(1,2,'3');
console.log(`sum1= ${sum1}`);
console.log(`sum2 = ${sum2}`);


// 2.배열 [...Iterable] : 두개의 배열 연결하기
// fruit5 = fruit1, fruit2 사이에 '🍍'을 추가
// [...fruit1]- 요소만 가져옴, [fruit1]-주소값을 가져
let fruit1 = ['🍏','🍋'];
let fruit2 = ['🍓','🍊','🍉'];

let fruit3 = fruit1.concat(fruit2);
let fruit4 = [...fruit1, ...fruit2];
let fruit5 = fruit1.concat('🍍',fruit2);
console.log(fruit3);
console.log(fruit4);
console.log(fruit5);



// 3.객체 {...Iterable} : Object Iterable
const hong = {
  name: '홍길동',
  age: 20,
  address: '서울시 강남구'
};
const hongUpdate = {
  job :'개발자',
  ...hong
};
console.log(hongUpdate);