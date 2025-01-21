import React,{ useRef } from "react";

/*****************************
 * Signup 컴포넌트 초기화 작업 --> 일반 fuction 메모리에 저장됨
 *****************************/
export const initSignup = ()=> {
  const names = ['id', 'pwd','cpwd','name','phone','emailname'];
  const nameKor = ['아이디','비밀번호','비밀번호 확인','이름','전화번호','이메일'];
  const placeholerKor = ['아이디 입력(6~20자)',
                        '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
                        '비밀번호 재입력',
                        '이름을 입력해주세요',
                        "휴대폰 번호 입력('-' 포함)",
                        '이메일 주소'];
   
   /* 배열.reduce(콜백함수, 리턴데이터 타입정의) */
   const initFormData = names.reduce((acc, name)=>{ 
    acc[name] = ''; // {'id':''}, 뒤의 값을 어떻게 연산하는지에 따라 acc의 타입이 정해짐
    return acc;
  }, {});   

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

  // const refs = useRef( //리엑트 훅에 생성됨 --> 부르는 곳에서 refs 로 부르면 에러남
  //   names.reduce((acc, name)=>{
  //   acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 사용하면 에러
  //   return acc; //idRef: {current: input#id} input의 주소값을 가져옴
  //   },{})
  // ); 
  // refs.current['emaildomainRef'] = React.createRef(); 
  
  // // console.log('ref--->', refs);
  
  // const msgRefs = useRef(
  //   names.reduce((acc, name)=>{
  //     acc[name.concat('MsgRef')] = React.createRef();
  //     return acc; // idMsgRef : {current: null} 아래에서 주소값이 없기때문에 null
  //   },{})
  // );
  return {names, placeholers, labels, initFormData};
};



/*********************************************************
 * 커스텀 HOOK -> HOOK 메모리 영역에 저장됨(use로 시작) 
 * 훅 영역에 들어가기 위해서 함수에 use를 붙여 넘겨줘야함
*********************************************************/
export function useInitSignupRefs(names){ 
  const refs = useRef(        //리엑트 훅에 생성됨 --> 부르는 곳에서 refs 로 부르면 에러남
    names.reduce((acc, name)=>{
    acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 사용하면 에러
    return acc; //idRef: {current: input#id} input의 주소값을 가져옴
    },{})
  ); 
  refs.current.emaildomainRef = React.createRef(); // emaildomainRef 새로운 래퍼런스 추가

  // console.log('ref--->', refs);
  
  const msgRefs = useRef(
    names.reduce((acc, name)=>{
      acc[name.concat('MsgRef')] = React.createRef();
      return acc; // idMsgRef : {current: null} 아래에서 주소값이 없기때문에 null
    },{})
  );
  return {refs, msgRefs};
};