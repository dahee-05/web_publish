/***************************
 *  로그인 validation 체크  
***************************/
export const validateLogin = ({idRef, pwdRef}) => {
  let result =true; 

  if(idRef.current.value ===''){
    alert('아이디를 입력하세요');
    idRef.current.focus();
    result = false;
  }else if(pwdRef.current.value ===''){
    alert('패스워드를 입력하세요');
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
 *  회원가입 validation 체크  
***************************/