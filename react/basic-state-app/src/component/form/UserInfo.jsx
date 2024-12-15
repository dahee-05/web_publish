import React, { useRef, useState } from 'react';

export default function UserInfo() {
  const initForm = {"name":"", "address":"", "age":""}; 
  const [ form, setForm ] = useState(initForm); // 폼 데이터 저장소
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const ageRef = useRef(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const list = setForm({...form, [name]:value}) //오브젝트 객체의 필드값을 변수로 입력하는 경우에는 []
  };
  
  const validateForm = () => {
    let result = true;

    if (nameRef.current.value === ''){
      alert('이름을 입력해주세요');
      nameRef.current.focus();
      result = false;
    }else if(addressRef.current.value === ''){
      alert('주소를 입력해주세요');
      addressRef.current.focus();
      result = false;
    } else if (ageRef.current.value === ''){
      alert('나이를 입력해주세요');
      ageRef.current.focus();
      result = false;
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) console.log(form);
  };

  return (
    <div>
      <h1>User Info</h1>
      <form  name='login-form' onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={form.name} ref={nameRef}  onChange={handleChange}/>
          </li>
          <li>
            <label htmlFor="">Address</label>
            <input type="text" name='address' value={form.address} ref={addressRef} onChange={handleChange}/>
          </li>
          <li>
            <label htmlFor="">Age</label>
            <input type="text" name='age' value={form.age} ref={ageRef} onChange={handleChange}/>
          </li>
          <li>
            <button type='submit'>Send</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

