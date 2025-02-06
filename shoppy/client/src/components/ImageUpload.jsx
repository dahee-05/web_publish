import React from 'react';
import Form  from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
  const formData = new FormData(); // [{}] --> {[]}  
  // console.log('formData-->',formData);
  
  const handleFileUpload = (e) => {
    // console.log('e.target.files ---> ',e.target.files);
    formData.append('file', e.target.files[0]); // {[e.target.files[0]]}

    // 서버전송
    axios.post('http://localhost:9000/uploads', formData)
         .then((res)=>{
          console.log('res.data--->',res.data);
          getFileName(res.data); // 부모인 NewProduct.jsx로 넘어감
          })   
         .catch((error)=>console.log(error));   
  };

  return (
    <div>
      <Form.Control type='file'
                    onChange={(e)=>{handleFileUpload(e)}}/>
    </div>
  );
}







/*
 * Form사용이유 : 파일을 통채로 넘기기 위해
 * 이벤트가 발생하면 브라우저가 잠시 해당 값을 가지고 있음 => (e) 
 * 브라우저가 가지고 있는 이벤트 객체 (e)=> 를 콜백함수를 보냄
 * e안에 파일에 대한 정보가 들어있음
 * accept='image/*' ==> 이미지 파일만 선택, 없으면 모든 파일 선택
*/

/*
 * entries() 
 * FormData의 모든 데이터를 배열 형태로 반환 -> 데이터를 반복하면서 확인가능
 * formData.entries()는 [key, value] 쌍을 포함한 이터레이터 객체를 생성
 * 
 * 
*/