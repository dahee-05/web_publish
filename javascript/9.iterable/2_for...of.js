// iterable object의 요소를 순회하여 출력함
// 형식 : for(variable of iterable_object) {statement(실행문)}

// 1.배열의 요소를 교체하는 함수를 정의 : for...of
function replace(array, origin, target) {
  let resultArray = Array.from(array); // 얕은 복사
  let idx = 0;
  for( element of resultArray) {
    if(element === origin) {
      resultArray.splice(idx, 1, target); // splice(인덱스, 1, 교체할 요소)
    }
    idx++;
  }
  return resultArray;
}
let fruits = ['🍊','🍎','🍓','🍎','🍋','🍎'];
let result = replace(fruits, '🍎', '🍊'); // 사과를 오렌지로 replace()
console.log(result);
console.log('******** for of end ********');


// 2. 기본 for문 사용
function replace2(array, origin, target) {
  let resultArray = Array.from(array); // 얕은 복사
  
  for(let i=0; i<resultArray.length; i++){
    let element = resultArray[i];
    if(element === origin){
      // element = target;
      resultArray.splice(i, 1, target);
    }
  }
  return resultArray;
}
let fruits2 = ['🍊','🍎','🍓','🍎','🍋','🍎'];
let result2 = replace2(fruits, '🍎', '🍊'); // 사과를 오렌지로 replace()
console.log(result2);
console.log('******** 기본 for문  end ********');


// 3. forEach문 사용 
// -> 전체를 다 나오게 하려면 map , 교체한 값만 나오게 하려면 filter
function replace3(array, origin, target) {
  let resultArray = Array.from(array); // 얕은 복사
 
  resultArray.forEach((element, index) => {
    if(element === origin) resultArray.splice(index, 1, target);
  });
  return resultArray;
}
let fruits3 = ['🍊','🍎','🍓','🍎','🍋','🍎'];
let result3 = replace3(fruits, '🍎', '🍊'); // 사과를 오렌지로 replace()
console.log(result3);
console.log('******** forEach문  end ********');


let numbers = [1,2,3,4,2,2,5,2];
let result4 = replace(numbers, 2, 7);
console.log(result4);
