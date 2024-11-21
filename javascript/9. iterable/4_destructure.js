//구조 분해 할당(destructure)

// 1. 배열을 분해하여 변수에 할당
let numbers = [1,2,3,4,5];
let aa = numbers;               // 주소값을 복사
let [a, b, ...nlist] = numbers; //기존의 배열의 구조를 분해해서 할당
// let a = numbers[0];
console.log(aa);  console.log(a);  console.log(b);
console.log(nlist);


// 2-1. 객체 형태를 데이터를 받아서 변수에 할당
let hong = {
  name: '홍길동',
  age: 20,
  address: '서울시 강남구'
}
// hong이라는 사람의 정보를 각각의 변수로 정의
let {name, age, address} = hong; // 객체라 {오브젝트 리터럴}
/*  
 *  구조분해 할당으로 정의되는 변수는 
 *  객체의 속성(프로퍼티, 키)과 동일한 이름으로 정의되어야 한다
 *  let name = hong.name;
 *  let age = hong.age;
 *  let address = hong.address;
*/
console.log(name);  console.log(age);  console.log(address);


// 2-2. 변수를 객체로 받았을 때 구조 분해 할당 
// ...param : 전개구문
function test({...params}) { // {aaa:1, bb:2, cc:3}
  let {aaa, bb, cc} = params;
}
let aaa =1;
let bb =2;
let cc =3;
test(aaa,bb,cc);


//2-3. 함수의 반환값을 받아 구조 분해 할당 방식으로 정의
function createEmoji(){
  return{
    fname: 'apple',
    color: 'red',
    emoji: '🍎'
  };
}
// price: 값을 선언 == undefined > 반드시 초기화 필요
let {color, emoji, fname, price=1000} = createEmoji();
console.log(fname, color, emoji, price);


//
let flist = ['🍎','🍊','🍋'];
let [apple, orange, lemon] = flist;
console.log(apple, orange, lemon);
