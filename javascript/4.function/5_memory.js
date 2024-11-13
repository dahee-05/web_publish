// function은 데이터 타입이 object(주소값을 힙에 가지고 있는) -> 호출할때 힙에 주소값을 갖게 됨, 그전엔 내부에 주소를 가짐
function add(a, b) {
  console.log(a + b);
  
}
console.log(add); // 주소호출
let sum = add;    // sum은 콜스택에 만들어 함수의 주소를 가져와 출력(call by reference)
console.log(sum);
console.log('*****************');
add(1,2);
sum(1,2);

