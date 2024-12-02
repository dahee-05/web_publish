/********************************* 
*** 로그인 폼 체크 
******************************** */
function loginFonrmCheck(){
  const id = document.querySelector('#id');
  const pwd = document.querySelector('#pwd');
  const msgId = document.querySelector('#error-msg-id');
  const msgPwd = document.querySelector('#error-msg-pwd');

  if(id.value === ''){
    // alert('아이디를 입력해주세요.');
    msgId.textContent = '아이디를 입력해주세요';
    msgId.style.fontsize = '12px';
    msgId.style.color = 'red';
    msgId.style.paddingTop = '10px'
    id.focus();

  }else if(pwd.value === ''){
    // alert('비밀번호를 입력해주세요.');
    msgPwd.textContent = '비밀번호를 입력해주세요.';
    msgPwd.style.fontsize = '12px';
    msgPwd.style.color = 'red';
    msgPwd.style.paddingTop = '10px'
    pwd.focus();
  }else{  //아이디 비교 로직 또는 함수 호출
    alert('입력완료');
  }
};
// onchange로 이벤트 호출시 포커스로 빠져나와야 값을 가지고 체크 
// oninput => input event한 글자라도 입력이 되면 (실시간) 이벤트 체크 -> html에서 호출

/********************************* 
*** 아이디, 패스워드 실시간 체크 
******************************** */
function handleChange(event){
  const idMsg = document.querySelector('#error-msg-id');
  const pwdMsg = document.querySelector('#error-msg-pwd');
  
  if(event.target.id === 'id'){
    (event.target.value.trim().length !== 0)? idMsg.style.color = 'blue': idMsg.style.color = 'red';
  }else{
    (event.target.value.trim().length !== 0)? pwdMsg.style.color = 'blue': pwdMsg.style.color = 'red';
  }
};

/********************************* 
*** 회원가입 폼 체크 
******************************** */
function joinFormCheck(){
  const id = document.querySelector('#id');
  const pwd = document.querySelector('#pwd');
  const cpwd = document.querySelector('#cpwd');
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const emaildomain = document.querySelector('#emaildomain');
  const idCheckReult = document.querySelector('#idCheckResult');

  const idMsg = document.querySelector('#error-msg-id');
  const pwdMsg = document.querySelector('#error-msg-pwd');
  const cpwdMsg = document.querySelector('#error-msg-cpwd');
  const nameMsg = document.querySelector('#error-msg-name');
  const phoneMsg = document.querySelector('#error-msg-phone');
  const emailMsg = document.querySelector('#error-msg-email');

  if(id.value === ''){
    idMsg.style.color = 'red';
    idMsg.style.fontWeight = 'bold';
    id.focus();
  } else if(pwd.value === ''){
    pwdMsg.style.color = 'red';
    pwdMsg.style.fontWeight = 'bold';
    pwd.focus();
  } else if(cpwd.value ==='') {
    cpwdMsg.style.color = 'red';
    cpwdMsg.style.fontWeight = 'bold';
    cpwd.focus();
  } else if(name.value === '') {
    nameMsg.style.color = 'red';
    nameMsg.style.fontWeight = 'bold';
    name.focus();
  } else if(phone.value === '') {
    phoneMsg.style.color = 'red';
    phoneMsg.style.fontWeight = 'bold';
    phone.focus();
  } else if(email.value === ''){
    emailMsg.style.color = 'red';
    emailMsg.style.fontWeight = 'bold';
    email.focus();
  } else if(emaildomain.value === 'default'){
    emaildomain.style.outlineColor = 'red';
    emaildomain.focus();
  } else if(idCheckReult.value === 'default'){
    alert('아이디 중복체크를 진행해주세요.');
  } else {
    alert('가입 성공');
  }
}; 


/********************************* 
*** 회원가입 폼 실시간 체크 
******************************** */

function handleChangeJoin(event){
  const idMsg = document.querySelector('#error-msg-id');
  const pwdMsg = document.querySelector('#error-msg-pwd');
  const cpwdMsg = document.querySelector('#error-msg-cpwd');
  const nameMsg = document.querySelector('#error-msg-name');
  const phoneMsg = document.querySelector('#error-msg-phone');
  const emailMsg = document.querySelector('#error-msg-email');
  const idCheckReult = document.querySelector('#idCheckResult');

  if(event.target.id === 'id'){
    (event.target.value.trim().length !== 0)? idMsg.style.color='white':idMsg.style.color='red'; 
  }else if(event.target.id === 'pwd') {
    (event.target.value.trim().length !==0)? pwdMsg.style.color='white': pwdMsg.style.color='red';
  } else if(event.target.id === 'cpwd') {
    (event.target.value.trim().length !==0)? cpwdMsg.style.color='white':cpwdMsg.style.color='red';
  } else if(event.target.id === 'name') {
    (event.target.value.trim().length !==0)? nameMsg.style.color='white':nameMsg.style.color='red';
  } else if(event.target.id === 'phone') {
    (event.target.value.trim().length !==0)? phoneMsg.style.color='white':phoneMsg.style.color='red';
  } else if(event.target.id === 'email') {
    (event.target.value.trim().length !==0)? emailMsg.style.color='white':emailMsg.style.color='red';
  } else if(event.target.id === 'emaildomain'){
    (event.target.value.trim() !== 'default')? emaildomain.style.outlineColor='silver':emaildomain.style.outlineColor='red';
  }
};

/********************************* 
*** 회원가입 아이디 중복체크 
******************************** */
function idCheck(event){
  const did = "test";
  let userId = document.querySelector('#id');
  let idMsg = document.querySelector('#error-msg-id');
  
  if(id.value === ''){
    idMsg.style.color = 'red';
    idMsg.style.fontWeight = 'bold';
    userId.focus();
  } else { // 중복체크
    if(did === userId.value.trim()){
      alert('이미 사용중인 아이디입니다. 다시 입력해주세요');
      id.focus();
    }else{
      alert('사용가능한 아이디입니다.');
      document.querySelector('#idCheckResult').value = 'success';
      event.target.style.backgroundColor = 'gray';
      console.log(document.querySelector('#idCheckResult').value);
      
    }
  }
};

/********************************* 
*** 회원가입 패스워드 확인 체크 
******************************** */
function passwordCheck(){
  const pwd = document.querySelector('#pwd');
  const cpwd = document.querySelector('#cpwd');
  const pwdMsg = document.querySelector('#error-msg-pwd');
  const cpwdMsg = document.querySelector('#error-msg-cpwd');

  if(pwd.value === ''){
    pwdMsg.style.color = 'red';
    pwdMsg.style.fontWeight = 'bold';
    pwd.focus();
  }else if(cpwd.value === '') {
    cpwdMsg.style.color = 'red';
    cpwdMsg.style.fontWeight = 'bold';
    cpwd.focus();
  }else{
    if(pwd.vlaue === cpwd.value){
      alert('비밀번호가 일치합니다.');
    }else{
      alert('비밀번호가 일치하지 않습니다.');
      pwd.value ='';
      cpwd.value ='';
      pwdMsg.style.color = 'red';
      cpwdMsg.style.color = 'red';
      pwd.focus();
    }
  }
};