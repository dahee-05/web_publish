import React,{ useRef } from "react";

/*****************************
 * Signup 컴포넌트 초기화 작업 --> 일반 function 메모리에 저장됨
 *****************************/
export const initSignup = () => {
  const names = ['id','pwd','cpwd','name','phone','emailname'];  // 왜 배열로 만들어줬지???
  const nameStr = ['아이디','패스워드','패스워드 확인','이름','전화번호','이메일'];
  const placeholderStr = [
        '아이디를 입력해주세요',
        '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
        '비밀번호 확인을 입력해주세요',
        '이름을 입력해주세요',
        "휴대폰번호를 입력해주세요('-' 포함)",
        '이메일 주소'
  ];

  let initFormData = names.reduce((acc, name) => {
    acc[name] ='';
    return acc;
  },{});    // {'id':'', 'pwd':''..}

  const labels = names.reduce((acc, name, idx)=>{
    acc[name] = nameStr[idx];
    return acc;
  },{}); //{id:'아이디', pwd:'비밀번호'}
    
  const placeholders = names.reduce((acc, name, idx)=>{
    acc[name] = placeholderStr[idx];
    return acc;
  },{});
  
   
 return { names, initFormData, labels, placeholders };  
};

/*********************************************************
 * 커스텀 HOOK -> HOOK 메모리 영역에 저장됨(use로 시작) 
 * 훅 영역에 들어가기 위해서 함수에 use를 붙여 넘겨줘야함
*********************************************************/
export const useInitSignupRefs = (names) => {
    const refs = useRef(
      names.reduce((acc,name)=>{
        acc[name.concat('Ref')] = React.createRef();
        return acc;
      },{})
    ); // {'id':{current:null}, 'pwd':{current:null}}..}
    refs.current['emaildomainRef'] = React.createRef(); 
    // console.log('refs*******',refs);
    
    const msgRefs = useRef(
      names.reduce((acc, name)=>{
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;     
      },{})
    );
  return {refs, msgRefs}
};

