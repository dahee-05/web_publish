// DHTML 형식으로 계산기 프로그램

initForm();

// 계산기 폼을 생성하는 함수 
function initForm(){
  let output =`
     <h1>DHTML - Caculator</h1>
     <ul>
      <li>
        <input type="text" id="number1" placeholder="첫번째 숫자">
        <input type="text" id="number2" placeholder="두번째 숫자">
      </li>
      <li>
        <button type="button" class="button" data-operation="sum">+</button>
        <button type="button" class="button" data-operation="sub">-</button>
        <button type="button" class="button" data-operation="mul">*</button>
        <button type="button" class="button" data-operation="div">/</button>
      </li>
      <li>
        <h3>Result : </h3>
      </li>
    </ul>
  `;
  // 화면 출력
  document.querySelector('#content').innerHTML = output;

  // 버튼 이벤트 처리
  let buttonList = document.querySelectorAll('.button');
  console.log(buttonList);
  

} // -- initForm() END --