/*
 * 순환 메소드가 적용되는 map함수는 파라미터 인자로 콜백함수를 입력받아,
 * 처리한 결과를 새로운 배열객체로 생성하여 반환
 * 전체 데이터를 받아야 할 때는 map, 일부 데이터 제외하구 받을땐 filter
*/
console.clear(); 

let numbers = [1, 2, 3, 4, 5];
let fnumbers = [1.001, 2.002, 3.03, 4.04, 5.05];

// numbers 배열 요소에 각각 10을 곱한 결과 출력 
let numbers2 = numbers.map((item) => item * 10);
console.log(numbers2);

// fnumbers 배열 요소의 소수점을 절삭하여 출력
let fnumbers2 = fnumbers.map((item) => Math.trunc(item));
// let fnumbers2 = fnumbers.map(Math.trunc); //item공통되기 때문에 생략가능
console.log(fnumbers2);

console.log('****************************************');

// 배열의 요소로 Object literal 값이 있는 경우 
let objects = [
  {name:'홍길동', age: 20},
  {name:'김철수', age: 30},
  {name:'최영희', age: 35}
];
// forEach , idx:인덱스 
objects.forEach((obj, idx) => {console.log(idx, obj);});
objects.forEach((obj, idx) => {console.log(idx, obj.name);});

// let a = {};
// a['name'] = '홍길동';
// console.log(a);

// {홍길동:홍길동, age:20}
let objects2 = objects.map((obj) => { // obj > name:'홍길동'
  let resultObj = {};
  resultObj[obj.name] = obj.value;   // key
  resultObj[obj.name] = 'name';      // value
  resultObj[obj.age] = obj.value;      // value
  resultObj[obj.age] = 'age';      // value
  return resultObj;
});  
console.log(objects2);

// 홍길동, 최영희 이름을 가진 학생정보만 배열 출력
let objects3 = objects.map((obj) => { 
  let robj = {};
  if(obj.name === '홍길동'){
    robj= obj;
  }else if(obj.name === '최영희'){
    robj= obj;
  }
  return robj;
});  
console.log(objects3);
  