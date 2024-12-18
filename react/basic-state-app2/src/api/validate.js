/*********************************
 *  CGV Login Form Validate Check
 *********************************/
export const validationLogin = (param) => {
  let result = true;
  if(param.refs.idRef.current.value === ''){
    param.setError({...param.error, ['id']:'아이디를 입력해주세요'});
    param.refs.idRef.current.focus();
    result = false;
  }else if(param.refs.pwdRef.current.value === ''){
    param.setError({...param.error, ['pwd']:'패스워드를 입력해주세요'});
    param.refs.pwdRef.current.focus();
    result = false;
  }
  return result;
};

export const validateSignup = (param) => {
  let result = true;
  if(param.refs.idRef.current.value == ''){
    param.setError({...param.error, ['id']:'아이디를 입력하세요'})
    param.refs.idRef.current.focus();
    result = false;
  }else if(param.refs.pwdRef.current.value === ''){
    param.setError({...param.error, ['pwd']:'패스워드를 입력하세요'})
    param.refs.pwdRef.current.focus();
    result = false;
  }else if(param.refs.cpwdRef.current.value === ''){
    param.setError({...param.error, ['cpwd']:'패스워드를 확인해주세요'})
    param.refs.cpwdRef.current.focus();
    result = false;
  }else if(param.refs.nameRef.current.value === ''){
    param.setError({...param.error, ['name']:'이름을 입력해주세요'})
    param.refs.nameRef.current.focus();
    result = false;
  }else if(param.refs.phoneRef.current.value ===''){
    param.setError({...param.error, ['phone']:'전화번호를 입력해주세요'})
    param.refs.phoneRef.current.focus();
    result = false;
  }else if(param.refs.emailnameRef.current.value ===''){
    param.setError({...param.error, ['emailname']:'이메일을 입력해주세요'})
    param.refs.emailnameRef.current.focus();
    result = false;
  }else if(param.refs.emaildomainRef.current.value ==='default'){
    param.setError({...param.error, ['emaildomain']:'이메일 주소를 선택해주세요'})
    param.refs.emaildomainRef.current.focus();
    result = false;
  }
};

export const errorCheckSignup = (name, value, error, setError) => {

  // if(){

  // }else if(){
    
  // }
};