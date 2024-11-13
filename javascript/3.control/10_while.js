// while : 반복이 종료되는 시점을 알고 있을때까지 반복 ****
/*
  while(조건식(true&false)){
    실행문;
  }
*/

// 1~5까지 출력
// 3이면 종료
for(let i=1; i<=5; i++){
  if(i ===3 ) break;
  console.log(i);
}


// while 문 : 1~5까지 출력, 무한루프 > 강제종료 필요
// 3이면 종료
let cnt = 1;   
while(cnt <= 5){
  if(cnt ===3 ) break;
  console.log(`cnt = ${cnt}`);
  cnt++;
  }


// 메뉴선택 
let flag = true; 
let menu = 1;
while(flag){
  console.log(`1: 🍕\t 2:🌭\t  0:종료`);
  if(menu === 1){
    console.log(`선택하신 메뉴는 🍕`);
    // while loop 자연스럽게 종료
    flag =false;
  }else if( menu === 2 ){
    console.log(`선택하신 메뉴는 🌭`);
    // while loop 자연스럽게 종료
    flag =false;
  }else if( menu === 0 ){
    console.log(`선택을 종료합니다.`);
    // while loop 자연스럽게 종료
    flag =false;
  }
}





