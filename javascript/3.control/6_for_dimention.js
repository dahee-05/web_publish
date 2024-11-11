// 중첩 for문 : 이파원 형태의 저장소 데이터 출력 
/*
  1(1,1) 2(1,2) 3(1,3)
  4(2,1) 5(2,2) 6(2,3)
  행, 열 
*/

// 1번째 방법
for(let i=1; i<=2; i++){  // outer for문 / 행기준
  let rows = '';
  for(let k=1; k<4 ; k++){   // inner for문/ 열기준 
    let num = (i - 1) * 3 + k;  // 
    rows += `${num}(${i},${k})\t` 
  }
  // console.log(rows);
}

// 2번째 방법
let count = 1; //누적되는 값은 for문 밖에 선언해야 한다 *****  
for(let i=1; i<=2; i++){  // outer for문 / 행기준
  let rows = '';
  for(let k=1; k<4 ; k++){   // inner for문/ 열기준 
    // let count = 1; 여기서 선언시 for문 돌때마다 1로 초기화
    rows += `${count++}(${i},${k})\t` 
  }
  console.log(rows);
}


for(let i=1; i<=2; i++){  // outer for문 / 행기준
  for(let k=1; k<4 ; k++){   // inner for문/ 열기준 
    // console.log(`(${i},${k})`);
  }
}

// 구구단 2단 출력 
  for(let j=1; j <=9; j++){
    console.log(`2*${j} = ${j*2}`);
  }
console.log(`***************************`);


// 2단~9단까지 출력  
 for(let i =1; i<=9; i++){
   for(let j=1; j <=9; j++){
     console.log(`${i}*${j} = ${i*j}`);
    }
    console.log(`*********`);
  } 
