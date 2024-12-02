function a() { //구조체: 힙에 저장, a에 주소값
  c(); // return address(복귀 주소)
  console.log(`------> a function!!`);
}

function b() {
  // 이름없는 함수 : ()=>{} / function(){}
  // 전역함수라 호출되어지는 애 없이 바로 사용1000ms = 1s
  // 초를 안줘도 비동기식 함수라 무조건 백그라운드로 보낸다 > 바로 큐에 보냄(1순위) 
  setTimeout(()=>{console.log(`1초 후 실행`)}, 1000); 
  console.log(`------> b function!!`);
}

function c() {
  b();
  console.log(`------> c function!!`);
}

a();
