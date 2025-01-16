import React, { useRef, useState } from 'react';
import '../style/login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { validateLogin } from "../utils/funcValidate.js";

export default function Login() {
  // const idRef = useRef(null);
  // const pwdRef = useRef(null);

  const refs = {'idRef':useRef(null), 'pwdRef':useRef(null)};
  const [ formdata, setFormdata ] = useState({'id':'', 'pwd':''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({...formdata, [name] : value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateLogin(refs)) console.log(formdata);
  };

  return (
    <div className="content">
      <h1 className="center-title">LOGIN</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
          </li>
          <li>
            <div className="login-form-input">
              <span className="login-form-input-icons"><FaUser/></span>
              <input type="text" 
                      name="id" 
                      id="id"
                      ref={refs.idRef}
                      onChange={handleChange} 
                      placeholder="아이디를 입력해주세요" />
            </div>
            <p id="error-msg-id"></p>
          </li>
          <li>
            <div className="login-form-input">
              <span className="login-form-input-icons"><FaLock/></span>
              <input type="password" 
                      name="pwd" 
                      id="pwd" 
                      ref={refs.pwdRef}
                      onChange={handleChange} 
                      placeholder="패스워드를 입력해주세요" />
            </div>
            <p id="error-msg-pwd"></p>
          </li>
          <li>
            <button type="submit" className="login-button">로그인</button>
          </li>
          <li>
            <div  className="login-form-checkbox">
                <input type="checkbox" name="status" />
                <label for="">아이디 저장</label>
            </div>
            <div>
                <a href="#">아이디 찾기</a> 
                <span>&gt;</span>
                <a href="#">패스워드 찾기</a> 
                <span>&gt;</span>
            </div>
          </li>
          <li>
            <button type="button" className="login-button-naver">네이버 로그인</button>
          </li>
        </ul>
        <div className="loginplus-image">
          <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
        </div>
      </form>
    </div>
  );
}


