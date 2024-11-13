// 논리연산자 : &&(and), ||(or)
// 논리연산자를 짤때는 숏컷연산 **
/*
  논리식은 true & false 
  (논리식1) && (논리식2) = 결과값
    true         true   = true;
    true        false   = false;
    false       true    = false;
    false       false   = false;
 
  (논리식1) || (논리식2) = 결과값
    true         true   = true;
    true        false   = true;
    false       true    = true;
    false       false   = false;
*/

let a = 1;
let b = 2;
console.log((a < b) && (b > a)); // true  && true  = true
console.log((a < b) && (b < a)); // true  && false = false
console.log((a === b) && (b > a)); // false && true  = false
console.log((a === b) && (b < a)); // false && false = false

console.log(`******************`);

console.log((a < b) || (b > a)); // true  || true  = true
console.log((a < b) || (b < a)); // true  || false = true
console.log((a === b) || (b > a)); // false || true  = true
console.log((a === b) || (b < a)); // false || false = false

// [ 숏컷연산 ]** 
// 임의의 숫자를 입력받아, 1~9 까지의 범위에 포함되면 출력 
let num = 11;
if((num < 10) && (num > 0)){ 
  // && 연산인 경우 == 앞쪽에 false를 넣으면 두번째는 체크하지 않고 넘어감 -> 효율성 높아짐 ****
  console.log(`사용가능한 숫자 [${num}] 입니다.`);
}else {
  console.log(`사용불가능한 숫자 [${num}]입니다, 다시입력해주세요`);
}

// [ 숏컷연산 ]** 
// 임의의 숫자를 입력받아, 0보다 크면 출력 
let number = 11;
if((number > 0) || (number < 10)){ 
  // ||연산인 경우 == 앞쪽에 true를 넣으면 두번째는 체크하지 않고 넘어감 -> 효율성 높아짐 ****
  console.log(`사용가능한 숫자 [${number}] 입니다.`);
}else {
  console.log(`사용불가능한 숫자 [${number}]입니다, 다시입력해주세요`);
}