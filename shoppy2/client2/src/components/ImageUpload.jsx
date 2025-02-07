import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from'axios';

export default function ImageUpload() {
  const formData = new FormData();
  const handleFileUpload = (e) => {
    // console.log('e.target확인 -->',e.target.files[0]);

    formData.append('file', e.target.files[0]);
    
    axios.post('http://localhost:9001/uploads', formData) 
         .then((res)=>{
            console.log('res.data--->', res.data)
            
         })
         .catch((error)=> console.log(error));
  };

  return (
    <div>
      <Form.Control type='file'
                    onChange={(e)=>{handleFileUpload(e)}} />
    </div>
  );
}

/*
 * e.target = <input class="form-control" type="file">
 * e.target.files  = FileList {0: File, length: 1} 
 * -> 0번째 인덱스 : 선택된 첫번째 파일 / length : 선택한 파일의 개수
 * 
 * e.target.files[0] === 
 * File {name: '2.webp', lastModified: 1668157818000, lastModifiedDate: Fri Nov 11 2022 
 *      18:10:18 GMT+0900 (한국 표준시), webkitRelativePath: '', size: 33964, …}
 * 
 * const formData = new FormData();
 * = 폼 데이터를 다룰 수 있는 특별한 객체
 * = formData.append()를 사용해 데이터를 추가 가능
 * 
 * 
 * 
*/