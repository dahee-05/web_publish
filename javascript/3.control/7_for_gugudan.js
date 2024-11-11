// 2단~9단까지 출력  
for(let i =1; i<=9; i++){
  for(let j=1; j <=9; j++){
    // console.log(`${i}*${j} = ${i*j}`);
   }
  //  console.log(`*********`);
 } 

// 2~9단 구구단 출력 
 for(let i=1; i<=9; i++){
   let rows = ''; // 콘솔은 무조건 한줄씩나옴 중간결과 넣기
   for(let j=2; j <=9; j++){
    rows += `${j} * ${i} = ${i * j}\t`;
  }
  // console.log(rows);
 }

// 별 찍기 
for(let i=1; i<=5; i++){
  let rows = '';
  for(let j=1; j<=i; j++){
    rows += `*`
  }
  // console.log(rows);
} 

// 1. 별 거꾸로 찍기 
for(let i=5; i>=1; i--){
  let rows = '';
  for(let j=1; j<=i; j++){
    rows += `*`
  }
  // console.log(rows);
} 

// 2. 별 거꾸로 찍기 
for(let i=5; i>=1; i--){
  let rows = '';
  for(let j=i; j>=1; j--){
    rows += `*`;
  }
  // console.log(rows);
}

// 3. 별 거꾸로 찍기 
for(let i=1; i<=5; i++){
  let rows = '';
  for(let j=5; j>=1; j--){
    rows += `*`;
  }
  console.log(rows);
}
