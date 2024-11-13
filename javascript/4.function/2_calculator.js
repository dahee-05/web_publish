// 계산기 기능 구현

function calculator(a, b, op){
  // a = parseInt(a);
  // b = parseInt(b);
  switch(op){
    case '+':
      console.log(`sum : ${a + b}`); break;
    case '-':
      console.log(`minus : ${a - b}`); break;
    case '*':
      console.log(`multi : ${a * b}`); break;
    case '/':
      console.log(`division : ${a / b}`); break;
    case '%':
      console.log(`Modulus : ${a % b}`); break;
    default : console.log('처리할 수 없는 연산자');
  }
};

// calculator(1, 2, '+');
// calculator(10, 2, '-');
// calculator(10, 2, '*');
// calculator(10, 2, '/');
// calculator(10, 2, '%');
// calculator(10, 2, '++');


// input에 입력하는건 모두 다 String타입