// 구구단 3단~5단까지 출력

 /*
 3*1 =3   4*1 =4  5*1 =5
 3*2 = 6  4*2 =8   5*2 =10
 row:1~9 / col :3~5
 */
  for(let i=1; i<=9; i++){
    let result='';
    for(let j=3; j<=5; j++){
      result += `${j} * ${i} = ${j*i}\t`;
    }
    console.log(result);
  };



/*
  🍏
  🍏🍏
  🍎🍎🍎
  🍏🍏🍏🍏
  🍏🍏🍏🍏🍏 
*/

// 콜스택에서는 for문을 다 돌고 빠져나옴 *
for(let i=1; i<=5; i++){
  let result='';
  for(let j=1; j<=i; j++){
    if(i === 3){
      result +='🍎'; 
    }else {
      result += '🍏';
    }
  }
  console.log(result);
}


/*
  *
  **
  ***
*/
// for(let i =1; i <=3; i++){
//   let result='';
//   for(let j =1; j=i; j++){
//     result += '*';
//   }
//   console.log(result);
// };