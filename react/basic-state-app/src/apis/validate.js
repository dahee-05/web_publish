
/*
 *  CGV_LoginForm 유효성 체크
 *  컴포넌트가 아닌 함수이다.  default 붙일 수 없음 
 *  props가 아닌 파라미터로 전달 💡=> 객체, 오브젝트 리터럴 형태로 만들어서 보내기
 */

export const validationFormCheck = (param) => {
  let result = true;
  if(param.refs.idRef.current.value === ''){
    param.setErrors({...param.errors, ['id']:'아이디를 입력해주세요.'});
    param.refs.idRef.current.focus();
    result = false;
  }else if(param.refs.pwdRef.current.value === ''){
    param.setErrors({...param.errors, ['pwd']:'패스워드를 입력해주세요.'});
    param.refs.pwdRef.current.focus();
    result = false;
  }
  return result;
};


/*
 * Login2 유효성 체크 함수
*/
export const validateLogin2 = (param) => {
  let result = true;
  if(param.refs.idRef.current.value === ''){
    param.setErrorMsg({ ...param.errorMsg, ['id']:'아이디를 입력하세요'});
    param.refs.idRef.current.focus();
    result = false;
  }else if(param.refs.pwdRef.current.value === ''){
    param.setErrorMsg({...param.errorMsg, ['pwd']:'패스워드를 입력하세요'});
    param.refs.pwdRef.current.focus();
    result = false;
  }
  return result;
}


/*
 * UserInfo 컴포넌트의 유효성 체크 함수
*/
export const validateForm = (param) => {
  let result = true;

  if (param.refs.nameRef.current.value === ''){
    param.setErrors({...param.errors, ['name']:'이름을 입력해주세요'});
    param.refs.nameRef.current.focus();
    result = false;
  }else if(param.refs.addressRef.current.value === ''){
    param.setErrors({...param.errors, ['address']:'주소를 입력해주세요'});
    param.refs.addressRef.current.focus();
    result = false;
  } else if (param.refs.ageRef.current.value === ''){
    param.setErrors({...param.errors, ['age']:'나이를 입력해주세요'});
    param.refs.ageRef.current.focus();
    result = false;
  }
  return result;
};



/*
 * Signup 유효성 체크
*/
export const validateSingup = (param) => {
  let result = true;

  // const fields = [
  //   {"ref":param.refs.idRef,      "msg":"아이디를 입력해주세요"},
  //   {"ref":param.refs.pwdRef,     "msg":"패스워드를 입력해주세요"},
  //   {"ref":param.refs.cpwdRef,    "msg":"패스워드 확인을 해주세요"},
  //   {"ref":param.refs.nameRef,    "msg":"이름을 입력해주세요"},
  //   {"ref":param.refs.phoneRef,   "msg":"전화번호를 입력해주세요"},
  //   {"ref":param.refs.emailnameRef,   "msg":"이메일주소를 입력해주세요"},
  //   {"ref":param.refs.emaildomainRef, "msg":"이메일주소를 선택해주세요"}
  // ];

  // for(const field of fields){
  //   if(field.ref.current.value === '' || field.ref.current.value === 'default' ){
  //     param.setErrors({...param.errors, ['id']:field.msg})
  //     field.ref.current.focus();
  //     result = false;
  //     return result;
  //   }
  // }
  // return result;

  if(param.refs.idRef.current.value === ''){
    param.setErrors({...param.errors, ['id']:'아이디를 입력해주세요'})
    param.refs.idRef.current.focus();
    result = false;
  }else if(param.refs.pwdRef.current.value === ''){
    param.setErrors({...param.errors, ['pwd']:'패스워드를 입력해주세요'})
    param.refs.pwdRef.current.focus();
    result = false;
  }else if(param.refs.cpwdRef.current.value === ''){
    param.setErrors({...param.errors, ['cpwd']:'패스워드를 확인해주세요'})
    param.refs.cpwdRef.current.focus();
    result = false;
  }else if(param.refs.nameRef.current.value === ''){
    param.setErrors({...param.errors, ['name']:'이름을을 입력해주세요'})
    param.refs.nameRef.current.focus();
    result = false;
  }else if(param.refs.phoneRef.current.value === ''){
    param.setErrors({...param.errors, ['phone']:'전화번호를 입력해주세요'})
    param.refs.phoneRef.current.focus();
    result = false;
  }else if(param.refs.emailnameRef.current.value === ''){
    param.setErrors({...param.errors, ['emailname']:'이메일주소를 입력해주세요'})
    param.refs.emailnameRef.current.focus();
    result = false;
  }else if(param.refs.emaildomainRef.current.value === 'default'){
    param.refs.emaildomainRef.current.focus();
    result = false;
  }
  return result;
};



/*******************************
 ** Signup2 회원가입 유효성 체크 ***  12/17
 *******************************/
export const validateFormSignup2 = (refs) =>{
  // const refValues = Object.values(refs);  // .jsx의 객체 값 태그값을 가져옴
  // const refKey = Object.keys(refs);       // key값만 가져옴 
  const refEntries = Object.entries(refs);   // ['idRef', {…}], 키와 벨류값을 같이 가지고 있음,2차원 배열형태 [[],[]]
  const msg = {'idRef':'아이디를', 'pwdRef':'패스워드를', 'nameRef':'이름을을', 'phone1Ref':'전화번호를', 'phone2Ref':'전화번호를', 'phone3Ref':'전화번호를', 'addressRef':'주소를', 'birth1Ref':'생일을', 'birth2Ref':'생일을', 'birth3Ref':'생일을', 'jobRef':'직업을'};

  // 배열.map() or 배열.forEach()는 배열 객체를 순회하는 것이 목적이므로 if 체크 후 focus가 적용되지 않음
  // 처음부터 끝까지 순회하는 것이 목적이라 포커스가 먹지 않음
  for(const item of refEntries){
    const name = item[0];
    const ref = item[1];        //value
    
    if(ref && ref.current.value === ''){
      alert(`${msg[name]} 입력해주세요`)
      ref.current.focus();
      return false;
    }
  };


}

  
  // 방법_2.
  // export const validateFormSignup2 = (refs) =>{
  // let result =true; 
  // const fields = [
  //   {'ref':refs.idRef, 'msg':'아이디를 입력해주세요'},
  //   {'ref':refs.pwdRef, 'msg':'패스워드를 입력해주세요'},
  //   {'ref':refs.nameRef, 'msg':'이름을 입력해주세요'},
  //   {'ref':refs.phone1Ref, 'msg':'전화번호를 입력해주세요'},
  //   {'ref':refs.phone2Ref, 'msg':'전화번호를 입력해주세요'},
  //   {'ref':refs.phone3Ref, 'msg':'전화번호를 입력해주세요'},
  //   {'ref':refs.addressRef, 'msg':'주소를 입력해주세요'},
  //   {'ref':refs.birth1Ref, 'msg':'생일을 입력해주세요'},
  //   {'ref':refs.birth2Ref, 'msg':'생일을 입력해주세요'},
  //   {'ref':refs.birth3Ref, 'msg':'생일을 입력해주세요'},
  //   {'ref':refs.jobRef, 'msg':'직업을 입력해주세요'},
  //   {'ref':refs.genderRef, 'msg':'성별을을 입력해주세요'},
  //   {'ref':refs.emailRef, 'msg':'이메일을을 입력해주세요'},
  //   {'ref':refs.introRef, 'msg':'자기소개를를 입력해주세요'}
  // ]
  
  // for(const field of fields){
    //   if(field.ref.current.value === '' || field.ref.current.value === 'default'){
      //       alert(field.msg);
      //       field.ref.current.focus();
      //       result = false;  
      //       return result;
      //   }
      // }
//  return result;
// }

// 방법_3.
  // export const validateFormSignup2 = (refs) =>{
  // let result =true; 
  // if(refs.idRef.current.value === ''){
  //   alert('아이디를 입력해주세요');
  //   refs.idRef.current.focus();
  //   result = false;
  // }else if(refs.pwdRef.current.value === '') {
  //   alert('패스워드를 입력해주세요');
  //   refs.pwdRef.current.focus();
  //   result = false;
  // }else if(refs.nameRef.current.value === '') {
  //   alert('이름을 입력해주세요');
  //   refs.nameRef.current.focus();
  //   result = false;
  // }else if(refs.phone1Ref.current.value === '') {
  //   alert('전화번호를 입력해주세요');
  //   refs.phone1Ref.current.focus();
  //   result = false;
  // }else if(refs.phone2Ref.current.value === '') {
  //   alert('전화번호를 입력해주세요');
  //   refs.phone2Ref.current.focus();
  //   result = false;
  // }else if(refs.phone3Ref.current.value === '') {
  //   alert('전화번호를 입력해주세요');
  //   refs.phone3Ref.current.focus();
  //   result = false;
  // }else if(refs.addressRef.current.value === '') {
  //   alert('주소를를 입력해주세요');
  //   refs.addressRef.current.focus();
  //   result = false;
  // }else if(refs.birth1Ref.current.value === '') {
  //   alert('생일을 입력해주세요');
  //   refs.birth1Ref.current.focus();
  //   result = false;
  // }else if(refs.birth2Ref.current.value === '') {
  //   alert('생일을 입력해주세요');
  //   refs.birth2Ref.current.focus();
  //   result = false;
  // }else if(refs.birth3Ref.current.value === '') {
  //   alert('생일을 입력해주세요');
  //   refs.birth3Ref.current.focus();
  //   result = false;
  // }else if(refs.jobRef.current.value === 'default') {
  //   alert('직업을 선택해주세요');
  //   refs.jobRef.current.focus();
  //   result = false;
  // }else if(refs.genderRef.current.value === '') {
  //   alert('성별을 선택해주세요');
  //   refs.genderRef.current.focus();
  //   result = false;
  // }else if(refs.emailRef.current.value === '') {
  //   alert('이메일을 입력해주세요');
  //   refs.emailRef.current.focus();
  //   result = false;
  // }else if(refs.introRef.current.value === '') {
  //   alert('자기소개를 입력해주세요');
  //   refs.introRef.current.focus();
  //   result = false;
  // }
  // return result;





/*******************************
 ** Signup 아이디 중복체크 ***  12/18
 *******************************/
  export const handleIdCheck = ({idRef, errorCheckSignup, errors, setErrors, idMsgRef}) => {
    const id = idRef.current;
    if(id.value === ''){
      errorCheckSignup('id', id.value, errors, setErrors);
    }else {
      const did = 'test';
      if(id.value === did) {
        setErrors({...errors, ['id']: '이미 사용중인 아이디 입니다.'});
        id.focus();  
      }else {
        setErrors({...errors, ['id']:'사용가능한 아이디입니다'});
        // setIsIdCheck(true);
        idMsgRef.current.style.setProperty('color','green');
        idMsgRef.current.style.setProperty('font-weight','bold');
      }
    }
  };

/*******************************
 ** Signup 패스워드 체크 ***  12/18
 *******************************/
  export const passwordCheck = (param) => {
    const {refs, errors, setErrors, errorCheckSignup, setForm, form, pwdMsgRef} = param; // 구조분해할당
    const pwd = refs.pwdRef.current;
    const cpwd = refs.cpwdRef.current;
    if(pwd.value ===''){
      errorCheckSignup('pwd', pwd.value, errors, setErrors);
      pwd.focus();
    }else if(cpwd.value ===''){
      errorCheckSignup('cpwd', cpwd.value, errors, setErrors);
      cpwd.focus();
    }else{ 
      if(pwd.value !== cpwd.value){
        setErrors({...errors, ['pwd']:'비밀번호가 일치하지 않습니다. 확인해주세요'});
        setForm({...form, ['pwd']:'', ['cpwd']:''});
        pwd.focus();
      }else{
        setErrors({...errors, ['pwd']: '비밀번호가 일치합니다'})
        pwdMsgRef.current.style.setProperty('color', 'green')
      }
    }
  };