import React, { useRef, useState } from 'react';
import '../style/signup.css';
import { validateSignup, handleDuplecateIdCheck, handlePwdCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcinitialize.js';

export default function Signup() {
  // 값이 없을 경우 확인해줄 ref 값이 필요 
  // 값이 없다는게 확인되었을 경우 띄어줄 msgRef값이 필요 
  const { names, initFormData, labels, placeholders } = initSignup();
  const { refs, msgRefs }= useInitSignupRefs(names);
  const [ formData, setFormData ] = useState(initFormData);
  const [ idCheckResult, setIdCheckResult ] = useState('default');

  // handelChange 이벤트 
  const handelChangeForm = (e) => {
    const { name , value } = e.target;
    setFormData({...formData, [name]:value });
  };

  // Submit 보내기
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateSignup(refs, msgRefs)) {
      if(idCheckResult === 'default'){
        alert('중복체크를 진행해주세요');
        return false;  
      }else{
        console.log('formData--->',formData);
      } 
    } 
  };

  return (
      <div className="content">
        <h1 className="center-title">SIGINUP</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul>
            {names && names.map((name)=> (
              <li>
                <label><b>{labels[name]}</b></label>
                <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}를 입력해주세요</span>
                <div>
                  {(name === 'emailname')? (
                    <>
                      <input type="text" 
                              name={name}
                              ref={refs.current[name.concat('Ref')]} // ref를 만들어 현재 주소값을 만들어줌
                              onChange={handelChangeForm}
                              placeholder={placeholders[name]} />
                      <span>@</span>       
                      <select name="emaildomain" 
                              ref={refs.current['emaildomainRef']}
                              onChange={handelChangeForm}>
                        <option value="default">선택</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="daum.net">daum.net</option>
                      </select>
                    </>
                  ):(
                   <>
                    <input type={(name === 'pwd' || name === 'cpwd')? "password": "text" }
                            name={name}
                            ref={refs.current[name.concat('Ref')]}
                            onChange={handelChangeForm}
                            onBlur={(name === 'cpwd')
                                        ?()=>{handlePwdCheck(refs.current['pwdRef']
                                                            , refs.current['cpwdRef']
                                                            , msgRefs.current['pwdMsgRef']
                                                            , msgRefs.current['cpwdMsgRef']
                                                            , refs.current['nameRef'])}
                                        :null}
                            placeholder = {placeholders[name]} />
                    {(name === 'id')? (
                      <>    
                        <button type="button" 
                                onClick={()=>{handleDuplecateIdCheck(refs.current['idRef']
                                                    , msgRefs.current['idMsgRef']
                                                    , refs.current['pwdRef']
                                                    ,setIdCheckResult)}}>중복확인
                        </button>
                        <input type="hidden" value={idCheckResult} />
                      </>) : null}    
                   </>)}
                </div>
              </li>
            ))
            } {/* end of map */} 
            <li>
              <button type="submit">가입하기</button>
              <button type="reset">가입취소</button>
            </li>
          </ul>
        </form>
      </div>
  )
};




            {/* <li>
                <label for="" ><b>아이디</b></label>
                <span id="error-msg-id">아이디를 입력해주세요</span>
                <div>
                    <input type="text" 
                            name="id"
                            id="id"
                            placeholder = "아이디 입력(6~20자)" />
                    <button type="button" >중복확인</button>
                    <input type="hidden" id="idCheckResult" value="default" />
                </div>
              </li>
              <li>
                <label for=""><b>비밀번호</b></label>
                <span id="error-msg-pwd">12자 이내의 비밀번호를 입력해주세요</span>
                <div>
                    <input type="password" 
                            name="pwd"
                            id="pwd"
                            placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                </div>
              </li>
              <li>
                <label for=""><b>비밀번호 확인</b></label>
                <span id="error-msg-cpwd">비밀번호 확인을 입력해주세요</span>
                <div>
                    <input type="password" 
                            name="cpwd"
                            id="cpwd"
                            placeholder="비밀번호 재입력" />
                </div>
              </li>
              <li>
                <label for=""><b>이름</b></label>
                <span id="error-msg-name">이름을 입력해주세요</span>
                <div>
                    <input type="text" 
                            name="name"
                            id="name"
                            placeholder="이름을 입력해주세요" />
                </div>
              </li>
              <li>
                <label for=""><b>휴대폰번호</b></label>
                <span id="error-msg-phone">휴대폰번호를 입력해주세요('-' 포함)</span>
                <div>
                    <input type="text" 
                            name="phone"
                            id="phone"
                            placeholder="휴대폰 번호 입력('-' 포함)" />
                </div>
              </li>
              <li>
                <label for=""><b>이메일 주소</b></label>
                <span id="error-msg-emailname">이메일 주소를 입력해주세요</span>
                <div>
                  <input type="text" 
                          name="emailname"
                          id = "emailname"
                          placeholder="이메일 주소" />
                  <span>@</span>       
                  <select name="emaildomain" 
                          id="emaildomain"  >
                    <option value="default">선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                  </select>
                </div>
              </li>*/}