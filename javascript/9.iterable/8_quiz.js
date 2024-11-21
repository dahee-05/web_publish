// 1. 중복된 배열을 입력받아, 중복을 제거한 후 출력
let numbers = [1,2,3,4,1,2,1,2,3,3,5,6,7,8,9];
let names = ['홍길동','김영희','최철수','홍길동'];

let nSet = new Set(numbers); // iterable object : string, Array, Map, Set
console.log(numbers.length, numbers); // 15
console.log(nSet.size, nSet); // 9
// 크기는 실제 메모리에 잡히기 때문에 효율성 부분에서도 좋다

// 2. 중복된 배열을 입력받아, 중복을 제거한 후 출력하는 함수 작성
console.clear();

function filtering(iterable){
  return new Set(iterable);
};
let result = filtering(numbers);
let result2 = filtering(names);
console.log(result);
console.log(result2);

console.clear();
// 3. 사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조 분해 할당) 함수 작성, map ,random
// ['smith_123456','kelly_876543']
function createEmployeeNumber(iterable){
  return iterable.map((item)=>{
    return item.concat('_',Math.floor(Math.random()*1000000));
  }); // map이 실행되면 새로운 []배열 객체 생성
}
let employeeNames = ['smith','kelly'];
let result3 = createEmployeeNumber(employeeNames); 
console.log(result3);
let [smith, kelly] = result3; // 구조 분해 할당
console.log(`smith => ${smith}`);
console.log(`kelly => ${kelly}`);

