// text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환
// filter은 새로운 배열이 만들어짐 []
const textFilter = (object) => {
  return object.filter((text) => text.length >= 3);
} // [ 'nodeJs', 'javascript' ]

function textFilter2(object) {
  return object.filter((text) => text.length >= 3)
}

let objectArray = ['nodeJs','javascript','re','ja']; 
let result = textFilter(objectArray);
console.log(result);


// 2.숫자 배열을 입력받아, 짝수만 필터링하여 출력하는 함수
// 출력되는 값들은 배열 객체에 담아 반환
// 0: false, 1: true
const evenNumber= (nums) => {
  return nums.filter((num) => !(num % 2))
};
const oddNumber = (nums) => {
  return nums.filter((num) => (num % 2))
}

let numbers = [1,2,3,4,5,6,7,8]
let result2 = evenNumber(numbers); 
let result3 = oddNumber(numbers); 
console.log(result2); // [ 2, 4, 6, 8 ]
console.log(result3); // [ 1, 3, 5, 7 ]



//3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 조합하여 사번을 생성
// 사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 출력
// 배열 안의 객체
const createEmployeeNumber = (array) => {
 // 중복된 데이터 처리
 let array2 = new Set(array);
 // 배열로 변환할 순회 가능 또는 유사 배열 객체
 return Array.from(array2).map((id) =>  
  id.concat('_', Math.floor(Math.random() * 1000000)));
};
const employeeId = ['hong','text','abcd','test1234', 'hong', 'test'];
let result4 = createEmployeeNumber(employeeId);
console.log(result4);
