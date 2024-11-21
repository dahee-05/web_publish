// Array 빌트인 객체의 메소드 익히기 -> mdn 사이트 참조
let array1 = [1,2,3,4,5];
console.log(array1[0]);
console.log(array1['0']);     // 자동으로 숫자로 인식
console.log(array1.length);   // 5

let fruits = ['🍏','🍋'];

// 1. push() : 배열 요소 추가 
fruits[fruits.length] = '🍎';
console.log(fruits);        // [ '🍏', '🍋', '🍎' ]

fruits.push('🍊');         // [ '🍏', '🍋', '🍎', '🍊' ]
console.log(fruits);

let a = ['🍍','🍋','🍓'];
fruits.push(a);
console.log(fruits);     // ['🍏','🍋','🍎','🍊',['🍍','🍋','🍓']]
console.log('******** push() end ********');

// 2. Object.keys(인스턴스명) : 배열의 전체 key값 반환
// 배열의 key값은 인덱스 주소
let keys = Object.keys(fruits); 
console.log(keys);      // [ '0', '1', '2', '3', '4' ]
console.log('******** Object.keys(인스턴스명) end ********');


// 3. pop() : 배열 요소 삭제 
// 3-1.배열 객체의 마지막 요소 삭제
let deleteItem = fruits.pop();
console.log(fruits);        // [ '🍏', '🍋', '🍎', '🍊' ]
console.log(fruits.pop());  // 삭제 및 삭제 된 요소 출력. 🍊
console.log(fruits);        // [ '🍏', '🍋', '🍎' ]
console.log('******** pop() end ********');


// 3. shift() : 배열 요소 삭제 
//3-2. 배열 객체의 처음 요소 삭제 
console.log(fruits);         // [ '🍏', '🍋', '🍎' ]
console.log(fruits.shift()); // 🍏
console.log('******** shift() end ********');


// 3-3. splice(깊은 복사) : 원하는 위치에 배열 요소 삭제/추가/새요소 추가
// .splice(인덱스시작위치, 삭제개수, 추가할 값)
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
fruits.push('🍌','🍍','🍏');
console.log(fruits);   //[ '🍋', '🍎', '🍌', '🍍', '🍏' ]

// (1). 배열에서 요소 제거 + 원하는 위치에 다른 값 넣기
fruits.splice(0, 1, '🍓');
console.log(fruits);  //[ '🍓', '🍎', '🍌', '🍍', '🍏' ]

// (2). 배열에서 요소 제거
fruits.splice(1,3);
console.log(fruits);  //[ '🍓', '🍏' ]

// (3). 배열에 새로운 값 넣기
fruits.splice(0,0,'🍉');
fruits.splice(3,0,'🍉');
console.log(fruits);  // [ '🍉', '🍓', '🍏', '🍉' ]
console.log('******** splice() end ********');


// 4. slice(index1, index2) : 배열 객체의 특정 요소 추출 
// slice - (얕은 복사),원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성
fruits.push('🍊','🍎','🍈','🍌');
console.log(fruits); //['🍉', '🍓', '🍏','🍉', '🍊', '🍎','🍈', '🍌']


console.log('******** slice() end ********');


// 5. concat(배열) : 배열 합치기
console.log('******** concat() end ********');


// 7. reverse() : 배열의 순서 바꾸기 
console.log('******** reverse() end ********');


// 8. flat() : 배열의 중첩 해제
console.log('******** flat() end ********');


// 9. join() : 배열의 문자요소를 하나의 String문자열로 변경 
// join() <--> split()
// jqery로 인해 체이닝이 가능 > 메소드 2개이상 연결하여 사용가능 
console.log('******** join() end ********');