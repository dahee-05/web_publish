import React, { useRef, useState } from 'react';
import { validateForm } from '../../apis/validate.js';

export default function UserInfo() {
  const initForm = {"name":"", "address":"", "age":""}; 
  const [ form, setForm ] = useState(initForm); // 폼 데이터 저장소
  const [ errors, setErrors ] = useState(initForm); // 폼 데이터 저장소
  // const nameRef = useRef(null);
  // const addressRef = useRef(null);
  // const ageRef = useRef(null);

  const refs = {
    nameRef :useRef(null), 
    addressRef :useRef(null), 
    ageRef :useRef(null) 
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    const list = setForm({...form, [name]:value}) 
    if(name === 'name'){
      (refs.nameRef.current.value === '')?
          setErrors({...errors, ['name']:'이름을 입력해주세요'})
          :setErrors({...errors, ['name']:''});
    }else if (name === 'address'){
      (refs.addressRef.current.value === '')?
          setErrors({...errors, ['address']:'주소를 입력해주세요'})
          :setErrors({...errors, ['address']:''});
    }else if(name === 'age'){
      (refs.ageRef.current.value === '')?
          setErrors({...errors, ['age']:'나이를 입력해주세요'})
          :setErrors({...errors, ['age']:''});
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const param = {
      "refs": refs,
      "errors":errors,
      "setErrors":setErrors
    };
    if(validateForm(param)) console.log(form);
  };

  return (
    <div>
      <h1>User Info</h1>
      <form  name='login-form' onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={form.name} ref={refs.nameRef}  onChange={handleChange}/>
            <span>{errors.name}</span>
          </li>
          <li>
            <label htmlFor="">Address</label>
            <input type="text" name='address' value={form.address} ref={refs.addressRef} onChange={handleChange}/>
            <span>{errors.address}</span>
          </li>
          <li>
            <label htmlFor="">Age</label>
            <input type="text" name='age' value={form.age} ref={refs.ageRef} onChange={handleChange}/>
            <span>{errors.age}</span>
          </li>
          <li>
            <button type='submit'>Send</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

