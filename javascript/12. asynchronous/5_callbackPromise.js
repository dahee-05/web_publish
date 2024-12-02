// 비동기식 처리 함수를 순차적으로 호출해서 처리하고자 할때...
// Promise는 static 객체라 new안줘도 됨
function step1(init) {
  let result = init + 1; 
  // callback(result);
  return Promise.resolve(result);
}

function step2(init) {
  let result = init + 2; 
  // callback(result);
  return Promise.reject(result);
}

function step3(init){
  let result = init +3;
  // callback(result); //리턴시 callback함수로 하게되면 아래처럼 밖에 처리 못함
  return Promise.resolve(result);
}

step1(0)
  .then((result1) => {
    console.log(`result1 ---> ${result1}`);
    return step2(result1);
  })
  .then((result2) => {
    console.log(`result2 ---> ${result2}`);
    return step3(result2);
  })
  .then((result3) => {
    console.log(`result3 ---> ${result3}`);
    return step3(result3);
  })
  .catch((error) => console.log(error));

// 함수가 순차적으로 실행됨
// step1(0, (result1) =>{
//   console.log(`result1==> ${result1}`);
//   step2(result1,(result2) => {    // step2 함수호출
//     console.log(`result2==> ${result2}`);
//     step3(result2, (result3) =>{
//       console.log(`result3==> ${result3}`);
//     })
//   });
// });