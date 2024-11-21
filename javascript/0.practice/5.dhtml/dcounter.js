// DOMcontentLoad() - 자바스크립트 호출 시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수
// window.onload()  - 웹 페이지의 **모든 요소(HTML, CSS, 이미지, 스크립트 등)**가 완전히 로드된 후 실행되는 이벤트로 DOMcontentLoad() 이후 실행 
// window.onload()-초창기형태, document.ready()-제이쿼리에서사용, DOMcontentLoad()

//브라우저가 DOM 트리를 모두 생성했을 때 발생하는 이벤트를 window 객체에 등록
// DOMContentLoaded가 "body부터 호출"한다는 의미는, 
//DOM 트리가 완전히 준비된 후 JavaScript 코드가 실행될 수 있도록 보장한다
window.addEventListener('DOMContentLoaded', function(){
  initForm();
});

// counter 폼 생성 함수
// 자바스크립트가 만든 객체로 해당 파일에서 레퍼런스 할 수 있다.
function initForm(){
  let output = `
    <h1>DHTML Counter</h1>
    <div class="counter_container">
      <div id="number">0</div>
      <button type="button" class="button" data-operation="increment">increment</button>
      <button type="button" class="button" data-operation="decrement">decrement</button>
    </div>
  `;

  // counter 폼 출력
  document.querySelector('#content').innerHTML = output;

  //DHTML로 생성된 버튼 이벤트 처리 
  let buttons = document.querySelectorAll('.button'); //베열객체로 자동으로 묶어줌
  console.log(buttons);
  
  buttons.forEach((button) => {
    button.addEventListener('click', () =>{
    let flag = button.dataset.operation;
    let number = document.querySelector('#number').textContent;

    if(flag === 'increment'){
      document.querySelector("#number").textContent = ++number;
    }else{
      if(number > 0)
      document.querySelector("#number").textContent = --number;
    }
    });
  });
}