// 컴포넌트가 아니므로 파일의 이름 시작은 소문자로 시작한다 
import axios from 'axios';

/***************************
 *  로그인 validation 체크  
***************************/
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



/***************************
 *  회원가입 validation 체크  
***************************/
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
  return result;
};


/***************************
 *  Signup 중복 체크  
***************************/
export const handleDuplecateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult) =>{
  if(idRef.current.value === ''){
    idMsgRef.current.style.setProperty('color','red');
    idRef.current.focus();
    return false;
  }else {
    axios.post('http://localhost:9000/member/idCheck', {"id":idRef.current.value}) // 이벤트 발생시 post
         .then((res)=>{
          console.log('idCheck-->',res.data);
          if(res.data.result === 1){ 
            alert('이미 사용중인 아이디입니다.')
            idRef.current.focus();
            return false; 
          }else{  
            alert('사용가능한 아이디 입니다.');
            setIdCheckResult('complete');
            pwdRef.current.focus();
            return false;
          }   
        })
         .catch((error)=>console.log(error));

    
  }
};

/***************************
 * 비밀번호 확인 체크
***************************/
export const handlePwdCheck = (pwdRef, cpwdRef, pwdMsgRef, cpwdMsgRef, nameRef) => {

  if(pwdRef.current.value === ''){
    pwdMsgRef.current.style.setProperty('color','red');
    pwdRef.current.focus();
    return false;
  } else if(cpwdRef.current.value === ''){
    cpwdMsgRef.current.style.setProperty('color','red');
    cpwdRef.current.focus();
    return false;
  }else{
    if(pwdRef.current.value === cpwdRef.current.value){
      alert('패스워드가 일치합니다');
      nameRef.current.focus();
      return false;
    }else{
      alert('패스워드가 일치하지 않습니다. 다시 입력해주세요');
      pwdRef.current.value ='';
      cpwdRef.current.value ='';
      pwdRef.current.focus();
      return false;
    }
  }
};