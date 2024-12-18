import React, { useRef, useState } from 'react';
import {validateLogin2} from '../../apis/validate.js';

export default function Login2() {
  // const idRef = useRef(null);
  // const pwdRef = useRef(null);

  const refs = {
    idRef : useRef(null),
    pwdRef : useRef(null)
  }; 
  
  const initForm  = {"id":"", "pwd":""};
  const [ form, setForm ] = useState(initForm);
  const [ errorMsg, setErrorMsg] = useState(initForm);

  const handleChange = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    const list = setForm({...form, [name]:value});
    if(name === 'id'){
      (value === '')? setErrorMsg({...errorMsg, ['id']:'아이디를 입력하세요'})
                    : setErrorMsg({...errorMsg, ['id']:''});
    }else if(name ==='pwd'){
      (value === '' )? setErrorMsg({...errorMsg, ['pwd']:'패스워드를 입력하세요'})
                     : setErrorMsg({...errorMsg, ['pwd']:''});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const param = { 
      "refs":refs, 
      "errorMsg":errorMsg,
      "setErrorMsg":setErrorMsg
    };
    if(validateLogin2(param)){
      // console.log(form);
    };
  };

  // const validateLogin2 = () => {
  //   let result = true;
  //   if(idRef.current.value === ''){
  //     setErrorMsg({ ...errorMsg, ['id']:'아이디를 입력하세요'});
  //     idRef.current.focus();
  //     result = false;
  //   }else if(pwdRef.current.value === ''){
  //     setErrorMsg({...errorMsg, ['pwd']:'패스워드를 입력하세요'});
  //     pwdRef.current.focus();
  //     result = false;
  //   }
  //   return result;
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>아이디</label>
          <input type="text" name='id' value={form.id} ref={refs.idRef} onChange={handleChange} />
          <span style={{'color':'red', 'fontWeight':'500'}}>{errorMsg.id}</span>
        </div>
        <div>
          <label>패스워드</label>
          <input type="password" name='pwd' value={form.pwd} ref={refs.pwdRef} onChange={handleChange} />
          <span style={{'color':'red', 'fontWeight':'500'}}>{errorMsg.pwd}</span>
        </div>
        <div>
          <button type='submit'>로그인</button>
        </div>
      </form>  
    </div>
  );
}

