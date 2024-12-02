/*
 * for블록은 루프가 돌아갈때마다 레코드가 하나씩 만들어진다.
 * 로그가 찍힐때마다 해당 레코드에 가서 i값을 찍는다
 * 5번 돌면 5개의 레코드 생성
 * 
 * var로 for문을 돌리게 되면 전역변수로 선언이 되어 내부적으로 얘기치 않은 문제가 발생할 수 잇음 ->for문 사용시 반드시 let을 사용해 선언해야함
 * var로 선언시 ex)_두번째 for문을 돌때 해당 스코프에 i의 값이 없으니 -> 레벨1로 이동(없음)-> 전역으로 선언한 곳에 i가 존재하여 전역에서 선언한 i의 값이 ++되어 변경됨 
 * 최종적으로 i값은 마지막 값으로 종료되어 로그에 찍을 경우 최종선언값으로 찍힘
 * let은 각각의 렉시컬 스코프에 선언이된다.->for블록안에서만 해당 값 생성되어 충돌될 위험이 없다
 * 필요없는 레코드는 가비지 컬렉터가 지워준다.
*/  
// 1~5 까지 출력
for(let i=1; i<=5; i++){
  console.log(i);
}

// let을 활용한 for문
let a = [1,2,3];
for(let i=0; i<a.length; i++ ){
  console.log(`a[${i}] --> ${a[i]}`);
}
console.log(`a[0] --> ${a[0]}`);
console.log(`a[1] --> ${a[1]}`);
console.log(`a[2] --> ${a[2]}`);

console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);

/* for...of */
for(let element of a){
  console.log(element);
  
}

// var를 활용한 for문
let b = [1,2,3];
for(var i=0; i<a.length; i++ ){
  console.log(`a[${i}] --> ${a[i]}`);
}
console.log(`b[0] --> ${b[0]}`);
console.log(`b[1] --> ${b[1]}`);
console.log(`b[2] --> ${b[2]}`);

console.log(`b[${i}] --> ${b[0]}`);
console.log(`b[${i}] --> ${b[1]}`);
console.log(`b[${i}] --> ${b[2]}`);

