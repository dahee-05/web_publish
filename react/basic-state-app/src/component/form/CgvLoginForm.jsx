import React, { useState } from 'react';
import './login.css';
import './commons.css';

export default function CgvLoginForm() {
  const initFormData = {'id':'','pwd':''};
  const [ formData ,setFormData ] = useState(initFormData);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    const list = setFormData({...formData, [name]:value}) 
  };
  
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formData);
  };

  return (
    <div class="content"> 
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
              <input type="text" name="id" id="id" onChange={handleChangeForm} placeholder="아이디를 입력해주세요" />
            </div>
            <p id="error-msg-id"></p>
          </li>
          <li>
            <div className="login-input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name="pwd" id="pwd" onChange={handleChangeForm} placeholder="비밀번호를 입력해주세요" />
            </div>
            <p id="error-msg-pwd"></p>
          </li>
          <li>
            <button type="submit" className="login-btn btn-main-color" >로그인</button>
          </li>
          <li>
            <div>
              <input type="checkbox" name="status" />
              <label for="">아이디 저장</label>
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

