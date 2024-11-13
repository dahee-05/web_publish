// 함수의 값 전달 인자
// parameter, argument, 매개변수

function add(a, b){ 
  return a + b;
}

function add2(...numbers){ //스프레드 연산자
  let abc = 0;
  for(let i=0; i<numbers.length; i++){
    abc += numbers[i];
  }
  return abc;
}

function add3(a, b, ...datas){ // 프리미티브 + 객체
  console.log(`a : ${a}`);
  console.log(`b : ${b}`);
  console.log(`datas : ${datas}`);
};

// 함수 호출
let sum = add(100, 200);
console.log(`sum : ${sum}`);

let sum2 = add2(100, 200, 300, 1, 1, 4);
console.log(`sum2 : ${sum2}`);

let sum3 = add3(1, 2, 3, 4, 5, 6,7);

