// 배열 생성 
// 1. 배열의 크기만 할당
let array1 = new Array(2); // undefined로 값 초기화
console.log(array1.length);
console.log(array1[0]);
console.log(typeof array1); // object형태 

// 2. 배열의 크기 및 데이터 초기화
let arr = new Array(1,2,3);
console.log(arr);   // [ 1, 2, 3 ]
 
// quiz)_배열의 마지막 요소 출력
let arr2 = ['🍎','🍓','🍋','🍏'];
console.log(arr2[arr2.length-1]);

let obj1 = {name:'홍길동', age: 20};
let obj2 = {name:'김철수', age: 25};
let objList = [obj1, obj2];
console.log(objList);
console.log(objList[0].name); // 홍길동 출력
