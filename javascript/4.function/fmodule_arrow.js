// module or library : 공통된 기능을 구현하는 함수들의 집합
// 함수의 생명주기(라이프사이클)을 넓혀주기 위해 export를 앞에 붙임 <-> import
// export 키워드를 전역에서 사용할 수 있도록 함
// 화살표함수 형식으로 변환
// let/const 함수명 = (파라미터) => {} 
export const gugudan = (start, end) => {
  for(let row=1; row<=9; row++){
    let result = '';
    for(let j=start; j<=end; j++){
      result += `${j} * ${row} = ${row*j} \t`; 
    }
    console.log(result);
  }
};

// 2. 구구단 싱글 함수 형식 : single 단 출력
// 입력되는 매개변수는 0보다 커야함
export const singleGugudan = (dan) => {
  for(let row=1; row<=9; row++){
    let result = '';
    result += `${dan} * ${row} = ${row*dan} \t`; 
    console.log(result);
  }
};

// 3. 선택 함수 형식 : 1~9까지
export const selectGugudan = () => {
  for(let row=1; row<=9; row++){
    let result = '';
    for(let j=1; j<=9; j++){
      result += `${j} * ${row} = ${row*j} \t`; 
    }
    console.log(result);
  }
};

export const fruitTower = (emoji, floor) => {
  for(let i=1; i<=floor; i++){
    let result = '';
    for(let j=1; j<=i; j++){
      result += `${emoji}`;
    }
    console.log(result);
  }
};

// export {gugudan, singleGugudan, selectGugudan, fruitTower}; 