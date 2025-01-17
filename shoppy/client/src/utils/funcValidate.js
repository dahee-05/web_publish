// 컴포넌트가 아니므로 파일의 이름 시작은 소문자로 시작한다 

/* 로그인 Validation 체크 */
export const validateLogin = ({idRef, pwdRef}, {msgRef}) => {
  let result = true; 

  if(idRef.current.value === ''){
    msgRef.current.style.setProperty('color','red');
    idRef.current.focus();
    result = false;
  }else if(pwdRef.current.value ===''){
    msgRef.current.style.setProperty('color','red');
    pwdRef.current.focus();
    result = false;
  }
  return result;
}; 



/* 회원가입 validation 체크  */
export const validateSignup = (refs, msgRefs) => {
  const refEntries = Object.entries(refs.current); // for문을 사용하기 위해 2차원 배열을 만듬
  const msgRefsEntries = Object.entries(msgRefs.current);
  let result = true;

  // refs ={current { {idRef={xxx}}, }}
  // [[idRef : {xxxx}], [pwdRef : {yyyy}]], 데이터 입력 폼 객체주소
  console.log('refs--->',refs);  
  console.log('msgRefs--->',msgRefs);
  
  // refEntries 배열객체와 msgRefsEntries 배열 객체의 인덱스를 동일하게 체크 -> 일반 for문
  // 객체 1개이면 for..of/ 객체 2개 이상, 인덱스 동일하게 체크시 -> 일반 for문
  for(let i=0; i < refEntries.length; i++){
    const item = refEntries[i]; // [idRef : {xxxx}]
    const name = item[0];
    const ref = item[1];  // 데이터 입력폼 객체 주소

    let msgItem, msgName, msgRef = null;

    if(i < refEntries.length -1){
      msgItem = msgRefsEntries[i];
      msgName = msgItem[0];
      msgRef = msgItem[1];  // 데이터 입력폼의 메시지 객체 주소 
    }
    
    if(name !== 'emaildomainRef'){
      if(ref.current.value === ''){
        msgRef.current.style.setProperty('color','red');
        ref.current.focus();
        return false;
      }
    }else{
      if(ref.current.value === 'default'){
        alert('이메일 주소를 선택해주세요.');
        ref.current.focus();
        return false;
      }
    }
  }

  // const list = [
  //   {'ref':refs.idRef,    'msg':msgRefs.msgIdRef.current.value}
  //   , {'ref':refs.pwdRef, 'msg':msgRefs.msgPwdRef}
  //   , {'ref':refs.cpwdRef,  'msg':msgRefs.msgCpwdRef}
  //   , {'ref':refs.nameRef,  'msg':msgRefs.msgNameRef}
  //   , {'ref':refs.phoneRef,  'msg':msgRefs.msgPhoneRef}
  //   , {'ref':refs.emailnameRef,  'msg':msgRefs.msgEmailnameRef}
  //   , {'ref':refs.emaildomainRef,  'msg':msgRefs.msgEmaildomainRef}
  // ];

  // for(const item of list){
  //   if(item.ref.current.value === '' || item.ref.current.value === 'default'){
  //     alert(item.msg);
  //     item.ref.current.focus();
  //     result = false;
  //     break;
  //   }
  // }

  return result;
};