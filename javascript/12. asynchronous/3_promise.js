// 빌트인 클래스인 Promise를 통해 비동기식 처리
// promise : 백그라운드를 전체 관리(?)하는 관리자 -> 성공시 전담하는 promise1객체에서 결과를 찍어줌
// 성공여부를 알려주는 관리자를 만듬 

let promise1 = new Promise((resolve, reject) => {
  // 실행할 비동기 로직
  setTimeout(()=>{
    resolve('javascript'); 
    // reject('fail'); 
  }, 3000);
});
  //3초가 지나면 큐 -> 이벤트루프가 resolve를 콜스택으로 데려와 성공하면 promise1의 then()에게 값을줌


//성공한 경우 순서대로 실행, 시간경과후 callback queu에 들어가는 실행함수를 then()정의
promise1
    .then((result)=>{console.log('3초 경과!!')}) // 성공시 실행함수 작성  
    .catch((error) => {console.log(error)}); //에러가 떴을때 작업


//Promise(비동기처리함수)
//:클래스 형태 , 아직 작업이 완료되지 않은 함수에 의해 반환된 객체
// resolve(성공) 및 reject(에러) 인수를 전달할 실행 함수
// const myFirstPromise = new Promise((const myFirstPromise = new Promise((resolve, reject) => {, reject) => {비동기 함수});
// resolve -> then  / reject -> catch
// 









