/*
 *  Array 빌트인 객체의 메소드 익히기 -> mdn 사이트 참조
 * 
*/
let array1 = [1,2,3,4,5];
console.log(array1[0]);    // array1.0  <- x
console.log(array1['0']);  // 자동으로 숫자로 인식
console.log(`array1.length = ${array1.length}`);

let fruits = ['🍏','🍋'];
console.log(fruits);


// 1. 배열 요소 추가 : push(item1..item) 
fruits[fruits.length] = '🍎';
console.log(fruits);

fruits.push('🍊');
console.log(fruits);
// 스프레드 연산자는 끝이 정해져 있지 않고 배열로 인식
let a = ['🍏','🍋','🍎']; // 4번의 인덱스
fruits.push(a);
console.log(fruits);



// 2. fruits 배열의 전체 key값 반환 : Object.keys(인스턴스명)
// 배열의 key값은 인덱스 주소
let keyList = Object.keys(fruits);  // [ '0', '1', '2', '3', '4' ]
console.log(keyList[2]);
Object.keys;


// 3. 배열의 요소 삭제
// 3-1. 배열 객체의 마지막 요소 삭제 - pop()
console.log(fruits);
let deleteItem = fruits.pop();  // 삭제된 마지막 요소 제거
console.log(`delete = ${deleteItem}`);
console.log(fruits.pop());  // 삭제된 요소 출력
console.log(fruits);
console.log('******** pop() end ********');

//3-2. 배열 객체의 처음 요소 삭제 - shift();
console.log(`shift :: ${fruits}`);  //  🍏,🍋,🍎
console.log(fruits.shift()); 
console.log(fruits); // [ '🍋', '🍎' ]
console.log('******** shift() end ********');



// 3-3. 배열 특정요소 삭제 & 교체  & 새요소 추가 - splice(깊은 복사)
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
fruits.push('🍈','🍉','🍌','🍍'); 
console.log(fruits); 
//레몬을 딸기로 교체, 깊은복사: 원본에 영향을 주는 
fruits.splice(0, 1, '🍓');
console.log(fruits); // [ '🍓', '🍎', '🍈', '🍉', '🍌', '🍍' ]
// 1~3 번지 요소를 삭제 
fruits.splice(1, 3);
console.log(fruits); // [ '🍓', '🍌', '🍍' ]
// 0번지 주소에 수박 추가
fruits.splice(0, 0, '🍉'); 
console.log(fruits); // [ '🍉', '🍓', '🍌', '🍍' ]
console.log('******** splice() end ********');



// 3-4. 배열 객체의 특정 요소 추출 - slice(index1, index2);
// slice - (얕은 복사)
// 원본 배열 객체의 특정 요소를 추출하여 새로운  배열로 생성
fruits.push('🍈','🍉','🍌','🍍'); 
console.log(fruits); // ['🍉', '🍓', '🍌','🍍', '🍈', '🍉','🍌', '🍍']

// 1,2 인덱스의 요소를 추출(얕은 복사:shallow copy)
// shallow copy는 원본에 영향을 주지 않음
let sfruits1 = fruits.slice(1,3); // 1,2 인덱스 추출 
console.log(sfruits1);            // [ '🍓', '🍌' ]
console.log(fruits.length);       // 8, 복사되지않은 원본의 길이
console.log('******** slice() end ********');


//3-5. 배열 합치기 : concat(배열)
console.clear();
let numList1 = [1,2,3];
let numList2 = [4,5,6];
console.log(numList1.concat(numList2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numList2.concat(numList1)); // [ 4, 5, 6, 1, 2, 3 ]
console.log('******** concat() end ********');


// 3-6. 배열의 순서 바꾸기 : reverse()
let numbers = [1,2,3,4,5,6]; 
console.log(numbers.reverse());  // [ 6, 5, 4, 3, 2, 1 ]
console.log('******** reverse() end ********');

// 3-7. 배열의 중첩 해제: flat()
// [1,2,3,[5,6]] => [1,2,3,5,6]
// [ 1, 2, 3, [ 5, 6 ] ] >> [1,2,3]과 [5,6]과 [ 1, 2, 3, [ 5, 6 ] ]이 메모리에 만들어짐
// 함수는 종료되면 삭제되기 때문에 중첩함수는 따로 만들어서 실행
let fnumbers = [1,2,3,[5,6]];
console.log(fnumbers);        // [ 1, 2, 3, [ 5, 6 ] ]
console.log(fnumbers.flat()); // [ 1, 2, 3, 5, 6 ]

let fnumbers2 = [1,2,3,[5,6,[7,8]]];
console.log(fnumbers2);        // [ 1, 2, 3, [ 5, 6, [ 7, 8 ]]]
console.log(fnumbers2.flat()); //1level 중첩해제 [1, 2, 3, 5, 6, [ 7, 8 ]]
console.log(fnumbers2.flat(2)); //2level 중첩해제 [1, 2, 3, 5, 6, 7, 8]
console.log('******** flat() end ********');

// 3-8.join(): 배열의 문자요소를 하나의 String문자열로 변경 
// join() <--> split()
// jqery로 인해 체이닝이 가능 > 메소드 2개이상 연결하여 사용가능 
let textList = ['a','b','c'];
console.log(textList);                    // [ 'a', 'b', 'c' ]
console.log(textList.join());             // 'a,b,c'
console.log(textList.join().split(','));  // [ 'a', 'b', 'c' ]
console.log('******** join() end ********');