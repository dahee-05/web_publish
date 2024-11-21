// 예외 처리 : 에러를 엔진에 넘기는 try~catch문

let numbers = [1,2,3]; //length:3, index: 0,1,2
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[3]); // undefined, 에러 넘어가줌

numbers[0] = 100;
console.log(numbers[0]);

// 자바스크립트에서는 동적으로 배열을 재생성한 후 값을 입력한다 -> 엔진에서 에러 관리
// 자바에서는 동적으로 배열을 재생성하지 않음
// ArrayIndexOutOfBoundsException 예외 상황이 발생함
numbers[9] = 900;
console.log(numbers); //[ 100, 2, 3, <6 empty items>, 900 ]

let number =1234;
try {
  for(n of number) console.log(n);
} catch (error) {
  console.log('엔진아 에러처리 부탁해~!');
}
// 에러를 건너뛰고 다음 로직을 실행시키고 싶을때 에러부분에 try~catch문으로 감싸 에러를 V8엔진에 맡김 ******
console.log('--- 프로그램 종료 ---');


try {
  for(n of number) console.log(n);
  throw new Error('원하는 에러 메세지');
} catch (err) {
  console.log(err);
}

