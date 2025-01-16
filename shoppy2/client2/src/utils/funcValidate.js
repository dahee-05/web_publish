
/* 로그인 validation 체크  */
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

/* 회원가입 validation 체크  */