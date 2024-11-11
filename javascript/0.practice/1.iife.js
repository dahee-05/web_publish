// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression(표현)

const a =7;
function double() {
  console.log(a * 2);
}
double();

// 즉시 실행 함수 
(function (){
  console.log(a * 2);
}) ();

(function (){
  console.log(a * 2);
}()); 





