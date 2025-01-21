import React, { useRef, useState } from 'react';
import '../style/signup.css';
import { validateSignup, handleDuplecateIdCheck, handlePwdCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcinitialize.js';

export default function Signup() {
  // const names = ['id', 'pwd','cpwd','name','phone','emailname'];
  // const nameKor = ['아이디','비밀번호','비밀번호 확인','이름','전화번호','이메일'];
  // const placeholerKor = ['아이디 입력(6~20자)',
  //                      '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
  //                      '비밀번호 재입력',
  //                      '이름을 입력해주세요',
  //                      "휴대폰 번호 입력('-' 포함)",
  //                      '이메일 주소'];

  // const labels = names.reduce((acc, name ,idx)=>{
  //   acc[name] = nameKor[idx];
  //   return acc; //{id:'아이디', pwd:'비밀번호'}
  // },{}); 

  // const placeholers = names.reduce((acc, name ,idx)=>{
  //   acc[name] = placeholerKor[idx];
  //   return acc; //{id:'아이디', pwd:'비밀번호'}
  // },{}); 

  // // let initFormData = {};
  // // names.forEach((name) => {
  // //   initFormData = {...initFormData, [name]:''}
  // // });

  // /* 배열.reduce(콜백함수, 리턴데이터 타입정의) */
  // const initFormData = names.reduce((acc, name)=>{ 
  //   acc[name] = ''; // {'id':''}, 뒤의 값을 어떻게 연산하는지에 따라 acc의 타입이 정해짐
  //   return acc;
  // }, {}); 

  // const refs = useRef(
  //   names.reduce((acc, name)=>{
  //   acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 사용하면 에러
  //   return acc; //idRef: {current: input#id} input의 주소값을 가져옴
  //   },{})
  // );  
//   refs.current['emaildomainRef'] = React.createRef(); 

//   // console.log('ref--->', refs);
  
//   const msgRefs = useRef(
//     names.reduce((acc, name)=>{
//       acc[name.concat('MsgRef')] = React.createRef();
//       return acc; // idMsgRef : {current: null} 아래에서 주소값이 없기때문에 null
//     },{})
// );
  const{names, placeholers, labels, initFormData} = initSignup();
  const {refs, msgRefs} = useInitSignupRefs(names);
  console.log('refs-->',refs);
  
  const [ formData, setFormData ] = useState(initFormData);
  const [ idCheckResult, setIdCheckResult ] = useState('default'); 

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value});
    // console.log(name ,value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateSignup(refs, msgRefs)) {
      if(idCheckResult === 'default'){
         alert('중복확인을 진행해 주세요'); 
         return false;
      }else{
        console.log('submit--->',formData);
      }
    } 
  };

  // 아이디 중복체크 
  // const handleDuplecateIdCheck = (idRef, idMsgRef, pwdRef) =>{
  //   if(refs.current['idRef'].current.value === ''){
  //     msgRefs.current['idMsgRef'].current.style.setProperty('color','red');
  //     refs.current['idRef'].current.focus();
  //     return false;
  //   }else {
  //     const dId = 'test1';
  //     if(refs.current['idRef'].current.value === dId){ 
  //       alert('이미 사용중인 아이디입니다.')
  //       refs.current['idRef'].current.focus();
  //       return false;
  //     }else{
  //       alert('사용가능한 아이디 입니다.');
  //       refs.current['pwdRef'].current.focus();
  //       return false;
  //     }   
  //   }
  // };

  
  // const handlePwdCheck = () => {
  //   const pwdRef = refs.current['pwdRef'];
  //   const cpwdRef = refs.current['cpwdRef'];
  //   const pwdMsgRef = msgRefs.current['pwdMsgRef'];
  //   const cpwdMsgRef = msgRefs.current['cpwdMsgRef'];

  //   if(pwdRef.current.value === ''){
  //     pwdMsgRef.current.style.setProperty('color','red');
  //     pwdRef.current.focus();
  //     return false;
  //   } else if(cpwdRef.current.value === ''){
  //     cpwdMsgRef.current.style.setProperty('color','red');
  //     cpwdRef.current.focus();
  //     return false;
  //   }else{
  //     if(pwdRef.current.value === cpwdRef.current.value){
  //       alert('패스워드가 일치합니다');
  //       refs.current['nameRef'].current.focus();
  //       return false;
  //     }else{
  //       alert('패스워드가 일치하지 않습니다. 다시 입력해주세요');
  //       pwdRef.current.value ='';
  //       cpwdRef.current.value ='';
  //       pwdRef.current.focus();
  //       return false;
  //     }
  //   }
  // };

  

  // jsx에서 반복할때는 map, filter를 사용해야한다 
  return (
      <div className="content">
        <h1 className="center-title">SIGINUP</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul>
          {
            names && names.map((name) => (
              <li>
                  <label for="" ><b>{labels[name]}</b></label>
                  <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}를 입력해주세요</span>
                  <div>
                      { (name === 'emailname') ? (
                        <>
                          <input type="text" 
                              name={name}
                              ref={refs.current[name.concat('Ref')]} // ref.idRef를 만들어 (현재)주소값을 만들어줌 
                              onChange={handleChangeForm}
                              placeholder={placeholers[name]} />
                          <span>@</span>
                          <select name="emaildomain"
                              ref={refs.current['emaildomainRef']}
                              onChange={handleChangeForm}  >
                              <option value="default">선택</option>
                              <option value="naver.com">naver.com</option>
                              <option value="gmail.com">gmail.com</option>
                              <option value="daum.net">daum.net</option>
                          </select>
                        </>
                      ) : (
                        <>
                          <input  type={(name==="pwd" || name==="cpwd")? "password":"text"}
                              name={name}
                              ref={refs.current[name.concat('Ref')]}
                              onChange={handleChangeForm}
                              onBlur={(name === 'cpwd')? ()=>{handlePwdCheck(refs.current['pwdRef']
                                                            , refs.current['cpwdRef']
                                                            , msgRefs.current['pwdMsgRef']
                                                            , msgRefs.current['cpwdMsgRef']
                                                            , refs.current['nameRef'])}: null}
                              placeholder={placeholers[name]} />
                              {(name === 'id' &&
                                <>
                                  <button type="button" 
                                        onClick={()=>{handleDuplecateIdCheck(refs.current['idRef']
                                                          ,msgRefs.current['idMsgRef']
                                                          ,refs.current['pwdRef']
                                                          ,setIdCheckResult
                                                          )}}>중복확인</button>
                                  <input type="hidden" 
                                         value={idCheckResult} />
                                </>
                              )}
                        </>
                      )}
                  </div>
              </li>
                ))
            }  {/* end of map */}
            <li>
              <button type="submit">가입하기</button>
              <button type="reset">가입취소</button>
            </li>
          </ul>
        </form>
      </div>
  );
}

