// 1~6 까지 출력
// 3인 경우 for문을 빠져나온다

for(let i =1; i <=6; i++){
  if(i ===3){
    break;  // break보다 자연스러운 방법으로 빠져나오는 방법이 더 효율적
  }else{
    console.log(`i = ${i}`);
  }
}

for(let i =1; i <=6; i++){
  if(i ===3){
    // break;
    i = 10;
  }else{
    console.log(`i = ${i}`);
  }
}








