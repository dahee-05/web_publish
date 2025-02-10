import axios from 'axios';
import React, { useState } from 'react';
import Form  from 'react-bootstrap/Form';

export default function ImageUploadMultiple({getFileName}) {
  const [ oldFile, setOldFile ] =useState([]);

  const handleFileUPloadMultiple = (e) => {
    const formData = new FormData();
    const files = e.target.files;
    // console.log('files--->',files);
    // if(files.length < 6 ) {
      // formData에 append  - file 개별로 addpend 되어야함! [{},{}..]
      for(const file of files) formData.append("files", file);
      formData.append("oldFile",oldFile);
      
      // for( let i =0; i<files.length; i++) formData.append("files", files[i]);
      // files.forEach((file) => formData.append("files", file)); // iterable 호출로 인해 사용불가
      // for( const [key, value] of formData) console.log(key, value);
      
      // 서버전송(axios), 업로드 파일 개수 제한 없을 때 ?maxFiles=${files.length} 붙임
      axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData, {
        headers : {"Content-Type": "multipart/form-data"},
      })
           .then((res)=> {
            getFileName(res.data); //NewProduct 컴포넌트로 전송
            setOldFile(res.data.oldFile);
           })
           .catch((error)=>console.log(error))
    // }else{
    //   alert('파일 업로드는 최대 5개까지 입니다.');
    // };
  }
  return (
    <div>
      <Form.Control type='file'
                     onChange={(e)=>{handleFileUPloadMultiple(e)}}
                     multiple/>
    </div>
  );
}



