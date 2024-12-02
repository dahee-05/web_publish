// 비동기식 처리 함수를 순차적으로 호출해서 처리하고자 할때...
// 콜백(callback)을 활용해 함수를 순차적으로 실행
//init(초기값),callback(결과값을 처리하기 위해 호출되는 함수)
// callback은 함수의 실행 결과를 다른 함수에 전달하는 방식으로, 비동기 작업을 처리할 때 주로 사용
// 아래 코드가 비동기식 처리 함수가 아닌 이유 
// step1과 step2 내부에서 대기 시간이 없으며, 결과값이 바로 계산
// 콜백 함수도 결과 계산 직후에 즉시 호출되므로, 실행 흐름이 중단되지 않음 
// >> 동기적 실행
// Promise 또는 async/await로 사용하여 가독성을 높여야한다

function step1(init, callback) { 
  let result = init + 1;  // 즉시 실행 = 동기적 실행
  callback(result); // 콜백함수로 전달 
}

function step2(init, callback) {
  let result = init + 2; 
  callback(result);
}

function step3(init, callback){
  let result = init +3;
  callback(result); //리턴시 callback함수로 하게되면 아래처럼 밖에 처리 못함
}

// 함수가 순차적으로 실행됨
step1(0, (result1) =>{ // 전달된 콜백함수 실행
  console.log(`result1==> ${result1}`);     // 1
  step2(result1,(result2) => {    // 콜백함수 내부에서 step2 함수호출
    console.log(`result2==> ${result2}`);   // 3
    step3(result2, (result3) =>{
      console.log(`result3==> ${result3}`); // 6
    })
  });
});