/*
 * iterable(이터러블) object - 반복가능한 객체
 * : 순회가 가능하도록 Iteration Protocol내장    * : 순회를 위한 규칙,조약, 
 * : iterable object 없으면 순회가 불가능하다.    
 * : for...of, ...(spread:전개구문), 
 * 구조분해할당(destructing object):spread에 들어있는 데이터들을 자동으로   변수에 할당한다
 * String, Array, Map, Set... : Iteration Protocol포함하고 있어 for~of, spread, 구조분해할당이 가능함
 * Stirng은 글자 하나를 배열로 저장 가능하기 때문에 
*/ 

// 'Hello JavaScript~!!!'
const text1 = 'Hello JavaScript~!!!';
const text2 = new String('Hello JavaScript~!!!');
// element 는 var로 생김
for(let element of text2){
  console.log(element);
}

// [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for(let element of numbers) console.log(element);

// Number 클래스 생성 및 실행 
// TypeError: numberClass is not iterable
const numberClass = new Number(12345);
for(n of numberClass) console.log(a);
