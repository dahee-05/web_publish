// 제어문 - 반복문 : for문, while
// for: 정확한 반복 횟수를 알고 있을 때 <--> Array 배열 
// for((1)초기값; (2)조건식; (4)증감식;){
//    (3)실행문;
// }
// 1. 초기값을 선언한다.  ->> 초기값 변수는 for 블록에서만 실행
// 2. 선언한 변수는 조건식을 통해 체크 > boolean 타입 결과
// 3. (2)번의 결과가 true이면 실행문 실행
// 4. 실행문이 종료되면, 증감식 진행
// (2) ~(4)번까지 반복해서 작업 실행 
// 5. 조건식이 false가 되면 for루프 블록을 빠져나온다.

// 숫자 1~5까지 반복해서 출력해주세요 
for(let i=1; i<=5; i++){
  // console.log(i);
}

// 숫자 배열을 출력해주세요.
let numberList = [1,2,3,4,5];
for(let i=0; i<5; i++){
  console.log(numberList[i]);
}

// 배열의 마지막 인덱스주소는 배열 크기 -1
// console.log(numberList2.length);
let numberList2 = ['🍕','🍔','🍟'];
for(let i=0; i< numberList2.length; i++){
  console.log(numberList2[i]);
}

console.log(`*************************`);

//과일리스트 출력
let fruitList = ['apple','orange','lemon'];
let emojList = ['🍎','🍊','🍋'];

for(let i=0; i < fruitList.length; i++){
  let fruit = fruitList[i];
  let emoji = emojList[i];
  if(fruit === 'lemon'){
    console.log(emoji);
  }
}


// while: 종료하는 시점을 정확하게 알고 있을 때 <-> true, false 값을 통해 체크 










