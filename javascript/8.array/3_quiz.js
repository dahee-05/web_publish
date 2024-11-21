// 배열의 '🍎'요소를 🍓로 교체,, output = ['🍓','🍍','🍓']; 

let fruits = ['🍎','🍍','🍎'];

// 1-1. for문의 index주소 활용
for(let i=0; i<fruits.length; i++){
  if(fruits[i] === '🍎') fruits[i] = '🍓';
  console.log(fruits[i]);
}

// 1-2.함수 - 일반화시켜야함
// 파라미터(배열객체, old, new) // 교체한 값을 콘솔창에 출력
function replace(array, oldValue, newValue) {
  let result = '';
  for(let i=0; i<array.length; i++){
    if(array[i] === oldValue) array[i] = newValue;
    result += `${array[i]}`;
  }
  console.log(result);
}
replace(fruits, '🍎', '🍓');
let numbers = [1, 2, 3, 1, 2, 1, 5];
replace(numbers, 1, 9);


// 1-3.함수 : 파라미터(배열객체, old, new)
// 배열 타입으로 객체를 반환
// 깊은 복사 :: 인덱스에 레퍼런스할때는 실제 객체가 변경됨 > array.from()을 사용해 얕은 복사
// 객체를 사용할땐 카피본을 만들어 사용 > array.from()
function replace2(array, oldValue, newValue) {
  let resultArray = Array.from(array);  //from ==static메소드
  for(let i=0; i<resultArray.length; i++){
    if(resultArray[i] === oldValue) resultArray[i] = newValue; 
    // result += `${array[i]}`;
  }
  return resultArray;
}
let names = ['hong','kim','park','hong']
let resultObj = replace2(names, 'hong', 'gong'); // [ 'gong', 'kim', 'park', 'gong' ]
console.log(resultObj);
