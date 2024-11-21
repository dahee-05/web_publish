// 1-1. 배열을 분해하여 변수에 할당 - index가 중요함
let numbers = [1,2,3,4,5];
let aa = numbers; 
let [a, b, ...nlist] = numbers; //기존의 배열의 구조를 분해해서 할당
console.log(a, b);  // 1 2
console.log(aa);    // 주소의 값을 할당
console.log(nlist); // [ 3, 4, 5 ]


// 1-2. 배열 분해
let flist = ['🍎','🍊','🍋'];
let [apple, orange, lemon] = flist;
console.log(apple, orange, lemon);



// 2-1. 객체 형태를 데이터를 받아서 변수에 할당
/*  
 *  구조분해 할당으로 정의되는 변수는 
 *  객체의 속성(프로퍼티, 키)과 동일한 이름으로 정의되어야 한다
 *  let name = hong.name;
 *  let age = hong.age;
 *  let address = hong.address;
*/
let hong = {
  name:'홍길동',
  age: 20,
  address: '서울시 강남구'
}
let name = hong.name;
let age = hong.age;
let address = hong.address;
console.log(name);  console.log(age);  console.log(address);


// 2-2. 변수를 객체로 받았을 때 구조 분해 할당
// ...param : 전개구문 
function test({...params}){
  let {aaa, bbb, ccc} = params;
  console.log(aaa,bbb,ccc);
}
let aaa =1;
let bbb =1;
let ccc =1;    
test({aaa,bbb,ccc});


//2-3. 함수의 반환값을 받아 구조 분해 할당 방식으로 정의
function createEmoji(){
  return{
    fname: 'apple',
    color: 'red',
    emoji: '🍎'
  };
}
let {fname, color, emoji, price=10} = createEmoji();
console.log(fname, color, emoji, price);


// 중첩 구조 분해 
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
}
let arr = [];  // 구조분해할당은 값을 추출할뿐 결과를 배열이나 다른 데이터 형태로 다시 대입불가능
arr ={
  size: {width, height},
  items: [item1, item2],
  extra,
  title = 'Menu'
} = options;

console.log(width); //100
console.log(extra); //true
console.log(title); //Menu

