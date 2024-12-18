import React, { useState, useRef } from 'react';
import './join.css';
import './commons.css';
import { validateSignup, errorCheckSignup } from '../../api/validate.js';
import { initFormNames } from '../../api/initial.js';

export default function Signup() {
  const refs = {
                idRef : useRef(null), 
                pwdRef : useRef(null),
                cpwdRef : useRef(null), 
                nameRef : useRef(null), 
                phoneRef : useRef(null), 
                emailnameRef :useRef(null), 
                emaildomainRef : useRef(null)
              };  
  
  const init = ["id", "pwd", "cpwd", "name", "phone", "emailname", "emaildomain"];
  const [ form, setForm ] = useState(initFormNames(init));
  const [ error, setError ] = useState(initFormNames(init));
  const param = {'refs':refs, 'error':error, 'setError':setError};        
  
  // 폼의 입력이 변경되는 경우 호출
  const handleChangeForm = (e) => {
    const { name , value} = e.target;
    setForm({...form, [name]:value});
    errorCheckSignup(name, value, error, setError);
  };

  // 아이디 중복체크 

  // 패스워드 중복체크 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateSignup(param)) console.log(form);
  };

  return (
    <div className="content"> 
      <div className="join-form center-layout">
      <h1 className="center-title">회원가입</h1>
      <form onSubmit={handleSubmit} >
        <ul>
          <li>
            <label className="join-title-font">아이디</label>
            <span id="error-msg-id">{error.id}</span>
            <div>
              <input type="text" 
                     name="id" 
                     id="id" 
                     value={form.id}
                     ref={refs.idRef}
                     onChange={handleChangeForm}
                     placeholder="아이디 입력 (6~20자)"
              />
              <button type="button" 
                      className="id-confirm-btn" 
                      id="CheckId" 
                      onclick="idCheck(event)">중복확인
              </button>
              <input type="hidden" 
                     id="idCheckResult" 
                     value="default" 
              />
            </div>
          </li>
          <li>
            <label className="join-title-font">비밀번호</label>
            <span id="error-msg-pwd">{error.pwd}</span>
            <div>
              <input type="password" 
                     name="pwd" 
                     id="pwd" 
                     value={form.pwd}
                     ref={refs.pwdRef}
                     onChange={handleChangeForm}
                     placeholder="비밀번호 입력(문자,숫자,특수문자 포함8~20자)" 
              />
            </div>
          </li>
          <li>
            <label className="join-title-font">비밀번호 확인</label>
            <span id="error-msg-cpwd">{error.cpwd}</span>
            <div>
              <input type="password" 
                     name="cpwd" 
                     id="cpwd" 
                     value={form.cpwd}
                     ref={refs.cpwdRef}
                     onChange={handleChangeForm}
                    //  onblur="passwordCheck()" 
                     placeholder="비밀번호 재입력" 
              />
            </div>
          </li>
          <li>
            <label className="join-title-font">이름</label>
            <span id="error-msg-name">{error.name}</span>
            <div>
              <input type="text" 
                     name="name"  
                     id="name" 
                     value={form.name}
                     ref={refs.nameRef}
                     onChange={handleChangeForm}  
                     placeholder="이름을 입력하세요" 
              />
            </div>
          </li>
          <li>
            <label className="join-title-font">전화번호</label>
            <span id="error-msg-phone">{error.phone}</span>
            <div>
              <input type="tel" 
                     name="phone"  
                     id="phone" 
                     value={form.phone}
                     ref={refs.phoneRef}
                     onChange={handleChangeForm}
                     placeholder="휴대폰 번호 입력('-'포함)" 
              />
            </div>
          </li>
          <li>
            <label className="join-title-font">이메일 주소</label>
            <span id="error-msg-email">{error.emailname}</span>
            <div>
              <input type="text" 
                     name="emailname"  
                     id="email" 
                     value={form.emailname}
                     ref={refs.emailnameRef}
                     onChange={handleChangeForm}   
                     placeholder="이메일 주소" 
              />
              <span>@</span>
              <select name="emaildomain" id="emaildomain" value={form.emaildomain} ref={refs.emaildomainRef} onChange={handleChangeForm}>
                <option value="default">선택</option>
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
                <option value="daum.net">daum.net</option>
              </select>
            </div>
          </li>
          <li>
            <button type="submit"  className="join-btn">가입하기</button>
            <button type="reset" className="join-cancle-btn">가입취소</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
  );
}

