import React, { useRef, useState } from 'react';

export default function Login() {
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const initForm = {'id':'', 'password':''};
  const [ form, setrForm ] = useState(initForm);  // {"id":"test"...}

  //아이디, 패스워드가 변경되면 setForm 함수를 이용하여 "id":"test"형식으로 저장
  // form ={'id':'', 'password':''}--> 마지막 입력값만 들어감 / 이전 값 undefined
  // id input => form ={'id':'test1'} / pass input => form={'password':'1234'}
  // 오브젝트 객체의 필드값을 변수로 입력하는 경우에는 []로 감싼다, 뒤에 온 값 > 값이 있으면 대체, 없으면 추가 
  const handleChangeForm =(e) =>{
    console.log(e.target);
    const {name, value} = e.target;
    const list = setrForm({...form,  [name]:value});  
  };

  const validate = () => {
    let result =true;

    if(idRef.current.value === ''){
      alert('아이디를 입력해주세요');
      idRef.current.focus();
      result = false;
    } else if(passwordRef.current.value === ''){
      alert('패스워드를 입력해주세요');
      passwordRef.current.focus();
      result = false;
    } 
    return result;
    console.log(idRef.current.value); // id가 현시점에서 갖고 있는 벨류값
    console.log(passwordRef.current.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(validate()){
      console.log(form);
    }
    // 로그인 폼에 입력된 값을 --> 서버(express, WAS,...)로 보내준다 --> 어떤 형태로 넘어가는가?
    // {}오브젝트 리터럴 형태로 싸여져서 넘어감/ FORM사용시 {}이 만들어짐
    // { {"id":""}, {"password":""} ...}  -> 서버에서 키값으로 받음
  };

  return (
    <div>
      <h1>Login</h1>
      <form name='login-form' onSubmit={handleSubmit}>
        <div>
          <label >아이디</label>
          <input type='text' name='id' value={form.id} ref={idRef} onChange={handleChangeForm}/>
        </div>
        <div>
          <label >패스워드</label>
          <input type='password' name='password' value={form.password} ref={passwordRef} onChange={handleChangeForm}/>
        </div>
        <div>
          <button type='submit'>로그인</button>
        </div>
      </form>
    </div>
  );
};

/* 브라우저가 제어했던 것을 리엑트가 가져와야 한다
 * onChange() -id의 폼이 입력되거나 삭제 될때, 즉 내용이 변경될때마다 이벤트 객체 생성 -> event객체로 받으면 됨
 * handleChangeId에서 setId에 넣지 않고 console.log(event.target.value);만 하면 입력은 되지 않지만 로그에는 찍힘
 * 
 * value={id} 
 * 이 경우 <input> 요소는 "제어 컴포넌트"(controlled component)로 동작 
 * value 속성을 id 상태 값과 연결했기 때문에, 입력 필드의 값은 항상 id 상태와 동기화됨
 * React의 주요 원칙인 단방향 데이터 흐름을 유지할 수 있음
 * React 상태와 DOM 값을 동기화하여 일관된 상태 관리가 가능
 * 
 *  ** 모든 이벤트를 리엑트가 하세 해야한다 ***
 * onSubmit{} - 리엑트가 관리하는 서버에 보내는 이벤트/ form에서 실행되는 이벤트
 * <button type='submit'>로그인</button> ==> 브라우저에서 처리하는 상태
 * type='submit' - 브라우저가 실행하는 / 리엑틑에서는 의미 x
 * 
 * const handleSubmit = (e) => {
    console.log(e);
  }; 
   -> 로그가 찍지 못하면 브라우저에서 실행하는 것 
   -> 브라우저가 실행하는 submit을 중지시켜 리엑트가 실행하도록 해야함
 *  e.preventDefault(); --> 브라우저가 실행하는 것을 막음
 */


  // const handleChangeId = (event) => {
  //   setId(event.target.value);
  // };

  // const handleChangePassword = (e) =>{
  //   setPassword(e.target.value);
  // };