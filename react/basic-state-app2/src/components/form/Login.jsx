import React, { useRef, useState } from 'react';

export default function Login() {
  const idRef = useRef(null);
  const passwordRef = useRef();

  const initForm = {"id":"", "pwd":""};
  const [form , setForm] = useState(initForm);

  const handleChangeForm = (e) => {
    const {name, value} = e.target;
    setForm({...initForm, [name]:value});
  };
  // console.log(JSON.stringify(form));
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(validate()){
      console.log(form);
    }
  };

  const validate = () => {
    let result = true;
    if(idRef.current.value === ''){
      alert('아이디를 입력해주세요');
      idRef.current.focus();
      result = false;
    }else if(passwordRef.current.value === ''){
      alert('패스워드를 입력해주세요');
      passwordRef.current.focus();
      result = false;
    }
    return result;
  };

  return (
    <div>
      <form name="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>아이디</label>
          <input type="text" name='id' value={form.id} ref={idRef} onChange={handleChangeForm}/>
        </div>
        <div>
          <label>패스워드</label>
          <input type="password" name='pwd' value={form.pwd} ref={passwordRef} onChange={handleChangeForm}/>
        </div>
        <div>
          <button type='submit'>로그인</button>
        </div>
      </form>
    </div>
  );
}

