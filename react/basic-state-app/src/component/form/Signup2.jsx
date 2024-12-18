import React, { useState, useRef } from 'react';
import './Signup2.css';
import { validateFormSignup2 } from '../../apis/validate.js';
import { initFormNames } from '../../apis/iinitial.js';

export default function Signup2() {
  const refs = { //객체로 선언해야한다, React 전용 useRef 함수는 custom Hook 등을 사용 
    idRef:useRef(null),      pwdRef:useRef(null),    nameRef:useRef(null), 
    phone1Ref:useRef(null),  phone2Ref:useRef(null), phone3Ref:useRef(null), 
    addressRef:useRef(null), birth1Ref:useRef(null), birth2Ref:useRef(null), birth3Ref:useRef(null), 
    jobRef:useRef(null),     genderRef:useRef(null), emailRef:useRef(null),  introRef:useRef(null) 
  };

  // 배열 + reduce()
  const initArray = ['id', 'pwd', 'name', 'phone1', 'phone2', 'phone3', 'address', 'birth1', 'birth2', 'birth3', 'job','gender', 'email', 'intro'];
  const [form, setForm] = useState(initFormNames(initArray));

  const handleChangeForm = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
    // console.log(form);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateFormSignup2(refs)) console.log(form);
  };

  return (
    <div className='container'>
      <div className='login-content'>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className='id-content'>
            <label>아이디 : </label>
            <input type="text" 
                   name='id' 
                   value={form.id} 
                   ref={refs.idRef}
                   onChange={handleChangeForm}
            />
          </div>
          <div className='pwd-content'>
            <label>비밀번호 : </label>
            <input type="passsword" 
                   name='pwd' 
                   value={form.pwd} 
                   ref={refs.pwdRef}
                   onChange={handleChangeForm}
            />
          </div>
          <div className='name-content'>
            <label>이름 : </label>
            <input type="text" 
                   name='name' 
                   value={form.name} 
                   ref={refs.nameRef}
                   onChange={handleChangeForm}
            />
          </div>
          <div className='phone-content'>
            <label>전화 : </label>
            <input type="text" 
                   name='phone1' 
                   value={form.phone1} 
                   ref={refs.phone1Ref}
                   onChange={handleChangeForm}
            /> -&nbsp;
            <input type="text" 
                   name='phone2' 
                  value={form.phone2} 
                  ref={refs.phone2Ref}
                  onChange={handleChangeForm}
            /> -&nbsp; 
            <input type="text" 
                   name='phone3' 
                   value={form.phone3} 
                   ref={refs.phone3Ref}
                   onChange={handleChangeForm}
            />
          </div>
          <div className=''>
            <label>주소 : </label>
            <input type="text" 
                   name='address' 
                   value={form.address} 
                   ref={refs.addressRef}
                   onChange={handleChangeForm}
            />
          </div>
          <div className='birth-content'>
            <label>생일 : </label>
            <input type="text" 
                   name='birth1' 
                   value={form.birth1}  
                   ref={refs.birth1Ref}
                   onChange={handleChangeForm}
            /> /&nbsp;
            <input type="text" 
                   name='birth2' 
                   value={form.birth2}  
                   ref={refs.birth2Ref}
                   onChange={handleChangeForm}
            /> /&nbsp;
            <input type="text" 
                   name='birth3' 
                   value={form.birth3} 
                   ref={refs.birth3Ref} 
                   onChange={handleChangeForm}
            /> 
          </div>
          <div className='job-content'>
            <label>직업 : </label>
            <select name="job" id="job" value={form.job} ref={refs.jobRef}  onChange={handleChangeForm}>
              <option value="default">선택</option>
              <option value="frontend">프론트엔드 개발자</option>
              <option value="backend">백엔드개발자</option>
              <option value="system">시스템개발자</option>
            </select>
          </div>
          <div className=''>
            <label htmlFor="">성별 : </label>
            <input type="radio" 
                   name='gender' 
                   value='m' 
                   ref={refs.genderRef} 
                   onChange={handleChangeForm}
            />남
            <input type="radio" 
                   name='gender' 
                   value='f' 
                   ref={refs.genderRef} 
                   onChange={handleChangeForm}
            />여
          </div>
          <div className='email-content'>
            <label>이메일 : </label>
            <input type="text" 
                   name='email' 
                   value={form.email} 
                   ref={refs.emailRef} 
                   onChange={handleChangeForm}
            />
          </div>
          <div className='intro-content'>
            <label>자기소개 : </label>
            <textarea rows='10' cols='50'
                      name='intro'  
                      value={form.intro} 
                      ref={refs.introRef} 
                      onChange={handleChangeForm}
            />
          </div>
          <div className='button-content'>
            <button type='submit'>회원가입</button>
            <button type='reset'>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}

