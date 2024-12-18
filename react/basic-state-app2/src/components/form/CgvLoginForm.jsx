import React, { useRef, useState } from 'react';
import './login.css';
import './commons.css';
import { validationLogin } from '../../api/validate.js';

export default function CgvLoginForm() {
  
  const init = {"id":"", "pwd":""};
  const [ form ,setForm ] = useState(init);
  const [ error ,setError ] = useState(init);

  const refs = {idRef: useRef(null), pwdRef: useRef(null)};
  const param = {"refs": refs, "error":error,"setError":setError};

  const handleChangeForm = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
    if(name === 'id'){
      (refs.idRef.current.value === '') ?
             setError({...error, ['id']:'아이디를 입력하세요'})
             : setError({...error, ['id']:''});
    }else if(name === 'pwd'){
      (refs.pwdRef.current.value ==='')?
             setError({...error, ['pwd']:'패스워드를 입력하세요'})
             : setError({...error, ['pwd']:''});
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validationLogin(param)) console.log(form);
  };

  return (
    <div className="content"> 
    <div className="login-form center-layout">
      <h1 className="center-title">로그인</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
          </li>
          <li>
            <div className="login-input">
              <i className="fa-regular fa-user"></i>
              <input type="text" 
                     name="id" 
                     id="id" 
                     value={form.id} 
                     ref={refs.idRef}
                     onChange={handleChangeForm} 
                     placeholder="아이디를 입력해주세요" 
              />
            </div>
            <p id="error-msg-id">{error.id}</p>
          </li>
          <li>
            <div className="login-input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" 
                     name="pwd" 
                     id="pwd" 
                     value={form.pwd}
                     ref={refs.pwdRef}
                     onChange={handleChangeForm} 
                     placeholder="비밀번호를 입력해주세요" 
              />
            </div>
            <p id="error-msg-pwd">{error.pwd}</p>
          </li>
          <li>
            <button type="submit" className="login-btn btn-main-color" >로그인</button>
          </li>
          <li>
            <div>
              <input type="checkbox" name="status" />
              <label>아이디 저장</label>
            </div>
            <div>
              <a href="#">아이디 찾기</a>
              <span>&gt;</span>
              <a href="#">비밀번호 찾기</a>
              <span>&gt;</span>
            </div>  
          </li>
          <li>
            <button className="join-btn">네이버 로그인</button>
          </li>
        </ul>
        <div>
          <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="로그인" />
        </div>
      </form>  
    </div>
  </div>
  );
}

