/*
 * filter - 새로운 배열을 만들어줌
 * 
*/
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter((item) => item.length > 6));
// 콜백함수에 {}을 추가하면 반드시 return을 붙여서 값을 반환
// console.log(words.filter((item) => {return item.length > 6}));


let numbers = [1,2,3,4,5,6,7];
// 1. 5이상의 숫자 출력 
let array = [];
numbers.forEach((x) => {
  if(x >= 5) array.push(x);
});
console.log(array);

// 2. 5이상의 숫자 출력
let array2 = numbers.filter((x)=> x >=5);  //[]
console.log(array2);



let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6, 7];
// 3보다 큰 숫자만 출력 
let a = numbers2.filter((num) => num > 3);
console.log(a);

// number2의 모든 값을 반올림한 후 3보다 크거나 같은 값 출력
console.log(numbers2.map((num) => Math.round(num)).filter((num)=> num >= 3));
// console.log(numbers2.map(Math.round).filter((num)=> num >= 3));
 

console.clear();
// 아이템을 검색하여 갯수를 리턴
function seachItem(array, sItem){
 return array.filter((item) => item === sItem).length;
}

// 요소를 순회하면서 처리 -> filter보다 코드 길이가 길다.
// function seachItem(array, sItem){
//   let count = 0;
//   array.forEach((item) => {
//     if(item === sItem) count++
//   });
//   return count;
// }

let fList = ['🍋','🍓','🍎','🍋'];  
let nList = [1, 2, 4, 5, 7, 4, 6, 45, 33, 90];

console.log(seachItem(fList,'🍋'));  // 2개 출력
console.log(seachItem(nList, 4));  // 1개 출력


