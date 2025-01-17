import React, { useRef, useState } from 'react';
import '../style/signup.css';
import { validateSignup } from '../utils/funcValidate.js';

export default function Signup() {
  const names = ['id', 'pwd','cpwd','name','phone','emailname'];
  const nameKor = ['아이디','비밀번호','비밀번호 확인','이름','전화번호','이메일'];
  const placeholerKor = ['아이디 입력(6~20자)',
                       '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
                       '비밀번호 재입력',
                       '이름을 입력해주세요',
                       "휴대폰 번호 입력('-' 포함)",
                       '이메일 주소'];

  const labels = names.reduce((acc, name ,idx)=>{
    acc[name] = nameKor[idx];
    return acc; //{id:'아이디', pwd:'비밀번호'}
  },{}); 

  const placeholers = names.reduce((acc, name ,idx)=>{
    acc[name] = placeholerKor[idx];
    return acc; //{id:'아이디', pwd:'비밀번호'}
  },{}); 

  // let initFormData = {};
  // names.forEach((name) => {
  //   initFormData = {...initFormData, [name]:''}
  // });

  /* 배열.reduce(콜백함수, 리턴데이터 타입정의) */
  const initFormData = names.reduce((acc, name)=>{ 
    acc[name] = ''; // {'id':''}, 뒤의 값을 어떻게 연산하는지에 따라 acc의 타입이 정해짐
    return acc;
  }, {}); 

  const refs = useRef(
    names.reduce((acc, name)=>{
    acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 사용하면 에러
    return acc; //idRef: {current: input#id} input의 주소값을 가져옴
    },{})
  );  
  refs.current['emaildomainRef'] = React.createRef(); 

  // console.log('ref--->', refs);
  
  const msgRefs = useRef(
    names.reduce((acc, name)=>{
      acc[name.concat('MsgRef')] = React.createRef();
      return acc; // idMsgRef : {current: null} 아래에서 주소값이 없기때문에 null
    },{})
);

  console.log('init-->',initFormData);
  console.log('refs-->',refs);
  console.log('msgRefs-->',msgRefs);
  
  const [ formData, setFormData ] = useState(initFormData);
  

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value});
    // console.log(name ,value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateSignup(refs, msgRefs)) console.log(formData);
  };
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
                          <input type="text"
                              name={name}
                              ref={refs.current[name.concat('Ref')]}
                              onChange={handleChangeForm}
                              placeholder={placeholers[name]} />
                              {(name === 'id' &&
                                <>
                                  <button type="button" >중복확인</button>
                                  <input type="hidden" id="idCheckResult" value="default" />
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

