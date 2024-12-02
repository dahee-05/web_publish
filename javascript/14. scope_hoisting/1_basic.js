/*
 * scope(스코프) : 메모리 관리(블록마다 다르게 관리), 이름 충돌 방지, 블록단위의 개념 구분
 * bock(블록 : {}) : 
 * {
 *  블록단위의 실행 개념 : for, switch~case, if~else
 * }
 * 
*/

{
  // 전역변수, Global Variable
  // 파일 전체 어느곳에서든지 호출이 가능
  // 변수의 초기화는 자동 - 선언만 해주면 엔진에서 초기화는 자동으로 해줌
  let ab; 
  let a = 10;
  const b = 20;
  
  console.log(a);
  console.log(b);
  
  {
    // 지역변수, 로컬 변수
    // 선언된 블럭 안에서만 호출이 가능
    // 반드시 초기화를 진행
    let ab = undefined;
    let aa = 100;
    const bb = 200;
    console.log(a, b);
    console.log(a, bb);
  }
  console.log(a);
  console.log('********************');

  // 1~5까지 출력
  let abc = 0;
  for(let i=1; i<=5; i++){
    console.log(i);
  }
  console.log('********************');

  // 1~5까지 합산
  for(let i=1; i<=5; i++){
    abc += i;
  }
  console.log(abc);
}

