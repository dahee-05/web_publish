import React, { useState, useRef } from 'react';
import { validateSingup, handleIdCheck, passwordCheck } from '../../apis/validate.js';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import { initFormNames } from '../../apis/iinitial.js';
import './join.css';
import './commons.css';


export default function Signup() {
  const idMsgRef = useRef(null);
  const pwdMsgRef = useRef(null);
  const refs = {
    idRef : useRef(null),
    pwdRef : useRef(null),
    cpwdRef : useRef(null),
    nameRef : useRef(null),
    phoneRef : useRef(null),
    emailnameRef : useRef(null),
    emaildomainRef : useRef(null)
  };

  const names = ["id", "pwd", "cpwd","name","phone","emailname","emaildomain"];
  const [ form, setForm] = useState(initFormNames(names));
  const [ errors, setErrors] = useState(initFormNames(names));
  // const [ isIdCheck, setIsIdCheck ]= useState(false);

  // 폼의 입력이 변경되는 경우 호출
  const handleChangeSignup = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
    idMsgRef.current.style.setProperty('color','red');
    idMsgRef.current.style.setProperty('font-weight','bold');
    pwdMsgRef.current.style.setProperty('color','red');
    errorCheckSignup(name, value, errors, setErrors);
  };

  // 폼의 입력이 종료된 후 Submit 함수
  const handleSubmitSignup = (e) => {
    e.preventDefault();
    const param = {
                    "refs":refs,
                    "errors":errors,
                    "setErrors":setErrors
                  };
    
    if(validateSingup(param)) {
      // if(!isIdCheck) {
      //   alert('아이디 중복체크를 진행해주세요');
      // } 
      alert('회원가입완료');
      console.log(form);}
  }; 


  return (
    <div className="content"> 
      <div className="join-form center-layout">
        <h1 className="center-title">회원가입</h1>
        <form onSubmit={handleSubmitSignup}>
          <ul>
            <li>
              <label className="join-title-font">아이디</label>
              <span id="error-msg-id" ref={idMsgRef} >{errors.id}</span>
              <div>
                <input type="text" 
                       name="id" 
                       id="id" 
                       value={form.id} 
                       ref={refs.idRef} 
                       onChange={handleChangeSignup} 
                       placeholder="아이디 입력 (6~20자)" 
                />
                <button type="button" 
                        className="id-confirm-btn" 
                        id="CheckId" 
                        onClick={()=>{const param ={'idRef':refs.idRef, 
                                                    'errorCheckSignup':errorCheckSignup, 
                                                    'errors':errors, 
                                                    'setErrors':setErrors, 
                                                    'idMsgRef':idMsgRef}
                                      handleIdCheck(param)}}>중복확인
                </button>
                <input type="hidden" 
                       id="idCheckResult" 
                       value="default" 
                />
              </div>
            </li>
            <li>
              <label className="join-title-font">비밀번호</label>
              <span id="error-msg-pwd" ref={pwdMsgRef}>{errors.pwd}</span>
              {/* <span id="error-msg-pwd" style={{color : `비밀번호 !== 비밀번호 확인 ? 'red` : 'black'}} ref={pwdMsgRef}>{errors.pwd}</span> */}
              <div>
                <input type="password" 
                       name="pwd" 
                       id="pwd" 
                       value={form.pwd}  
                       ref={refs.pwdRef} 
                       onChange={handleChangeSignup} 
                       placeholder="비밀번호 입력(문자,숫자,특수문자 포함8~20자)"
                />
              </div>
            </li>
            <li>
              <label className="join-title-font">비밀번호 확인</label>
              <span id="error-msg-cpwd">{errors.cpwd}</span>
              <div>
                <input type="password" 
                       name="cpwd" 
                       id="cpwd" 
                       value={form.cpwd}  
                       ref={refs.cpwdRef} 
                       onChange={handleChangeSignup} 
                       onBlur={()=>{ const param = {'refs': refs, 
                                                    'errors':errors, 
                                                    'setErrors':setErrors, 
                                                    'errorCheckSignup': errorCheckSignup, 
                                                    'setForm': setForm, 
                                                    'form': form, 
                                                    'pwdMsgRef': pwdMsgRef
                                                    }
                              passwordCheck(param)}} 
                       placeholder="비밀번호 재입력" />
              </div>
            </li>
            <li>
              <label className="join-title-font">이름</label>
              <span id="error-msg-name">{errors.name}</span>
              <div>
                <input type="text" 
                       name="name"  
                       id="name" 
                       value={form.name}  
                       ref={refs.nameRef}  
                       onChange={handleChangeSignup}  
                       placeholder="이름을 입력하세요" 
                />
              </div>
            </li>
            <li>
              <label className="join-title-font">전화번호</label>
              <span id="error-msg-phone">{errors.phone}</span>
              <div>
                <input type="text" 
                       name="phone"  
                       id="phone" 
                       value={form.phone}  
                       ref={refs.phoneRef} 
                       onChange={handleChangeSignup}   
                       placeholder="휴대폰 번호 입력('-'포함)"
               />
              </div>
            </li>
            <li>
              <label className="join-title-font">이메일 주소</label>
              <span id="error-msg-email">{errors.emailname}</span>
              <div>
                <input type="text" 
                       name="emailname"  
                       id="email" 
                       value={form.emailname}  
                       ref={refs.emailnameRef}  
                       onChange={handleChangeSignup}   
                       placeholder="이메일 주소" 
                />
                <span>@</span>
                <select name="emaildomain" id="emaildomain" value={form.emaildomain} ref={refs.emaildomainRef} onChange={handleChangeSignup} >
                  <option value="default">선택</option>
                  <option value="naver.com">naver.com</option>
                  <option value="google.com">google.com</option>
                  <option value="daum.net">daum.net</option>
                </select>
              </div>
            </li>
            <li>
              <button type="submit" className="join-btn">가입하기</button>
              <button type="reset" className="join-cancle-btn">가입취소</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

