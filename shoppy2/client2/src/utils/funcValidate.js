import axios from 'axios';

/***************************
 *  로그인 validation 체크  
***************************/
export const validateLogin = ({idRef, pwdRef},{msgRef}) => {
  let result =true; 

  if(idRef.current.value ===''){
    // alert('아이디를 입력하세요');
    msgRef.current.style.setProperty('color','red');
    idRef.current.focus();
    result = false;
  }else if(pwdRef.current.value ===''){
    // alert('패스워드를 입력하세요');
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
  const refEntries = Object.entries(refs.current); //for문 사용하기 위해
  const msgRefsEntries = Object.entries(msgRefs.current);
  console.log('refs-->',refs); // refs= {current:{idRef:{xxx},}
  // console.log('refEntries-->',refEntries); //[[idRef : {xxxx}], [pwdRef : {yyyy}]]

  for(let i=0; i<refEntries.length; i++){
    const item = refEntries[i];
    const name = item[0];
    const ref = item[1];
    
    let msgItem, msgName, msgRef = null;

    if(i < refEntries.length -1){
      msgItem = msgRefsEntries[i];
      msgName = msgItem[0];
      msgRef = msgItem[1];
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
  return true;
  }


/***************************
 *  Signup 중복 체크  
***************************/
export const handleDuplecateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult) => {
  // const did = 'test1';
  console.log('idRef-->',idRef.current.value);
  if(idRef.current.value === ''){
    idMsgRef.current.style.setProperty('color','red');
    idRef.current.focus();
    return false;
  }else{
    axios.post('http://localhost:9001/member/idCheck',{"id":idRef.current.value})
         .then((res)=>{
          console.log('res.data-->',res.data.result);
          if(res.data.result === 1){
            alert('이미 사용중인 아이디입니다.');
            idRef.current.focus();
            return false;
          }else{
            alert('사용가능한 아이디입니다.'); 
            pwdRef.current.focus();
            setIdCheckResult('complete');
            return false;
          }
         })
         .catch((error)=>console.log(error))
  }
}
/***************************
 * 비밀번호 확인 체크
***************************/
export const handlePwdCheck = (pwdRef, cpwdRef, pwdMsgRef, cpwdMsgRef, nameRef)=> {
  const pwd = pwdRef.current;
  const cpwd = cpwdRef.current;

  if(pwd === ''){
    pwdMsgRef.current.style.setProperty('color','red');
    pwd.focus();
    return false;
  }else if(cpwd === ''){
    cpwdMsgRef.current.style.setProperty('color','red');
    cpwd.focus();
    return false;
  }else{
    if(pwd.value === cpwd.value){
      nameRef.current.focus();
      return false;
    }else{
      alert('비밀번호가 일치하지 않습니다. 재입력하세요.');
      pwd.value='';
      cpwd.value='';
      pwd.focus();
      return false;
    }
  }
};