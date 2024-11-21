// 로그인 체크를 위한 클래스 정의

class Usser { 
  #id;
  #pass;
  constructor(id, pass){
    this.#id =id;
    this.#pass = pass;
  }
  get id() { return this.#id;}
  get pass() { return this.#pass;}
  set id(id) { this.#id = id;}
  set pass(pass) { this.#pass = pass;}
}

/*
 * 로그인 버튼 클릭시 호출하는 함수
*/
let user = null;
const DID = 'test';
const DPASS = '1234';

function loginCheck() {
  let id = document.querySelector('#id');  
  let pass = document.querySelector('#pass');

  if((id.value === '')){
    alert('id값을 입력해주세요');
    id.focus();
  }else if(pass.value === ''){
    alert('pass값을 입력해주세요');
    pass.focus();
  }else {
    // id, pass => User 클래스 객체 생성과 처리작업
    user = new  Usser(id, pass); // 캡슐로 묶여 보안 측면에서 더 좋음
    if(id.value === DID && pass.value === DPASS){ alert('로그인 성공'); }
    else{ alert('로그인 실패'); }
  }
}




// 클래스로 만들어서 private 보안성 향상
// 함수당 기능1개 = > 기능을 너무 많이 넣으면 콜스택에서 해당 함수가 끝날때까지 오래 붙잡고 있음
 
// const hong = new Usser('hong1234' ,'1234');
// console.log(`id : ${hong.id}, pass : ${hong.pass}`);
// hong.id = 'hong12';
// hong.pass = '3456';
// console.log(`id : ${hong.id}, pass : ${hong.pass}`);

// get과 set은 JavaScript에서 클래스 내부의 속성에 접근하거나 수정할 때 사용하는 메서드. 
// 클래스 속성을 외부에서 직접 접근하지 못하게 보호하고, getter와 setter를 통해서만 접근하도록 만듬
// 이를 통해 캡슐화(encapsulation)를 구현할 수 있습니다. 
// #id와 #pass라는 비공개(private) 필드를 사용
// set 키워드를 사용하여 id와 pass의 값을 외부에서 변경할 수 있도록 설정

// .value까지 포함해서 id 변수에 넣어서 test
// id,pass 전역변수로 빼서 사용하는 법