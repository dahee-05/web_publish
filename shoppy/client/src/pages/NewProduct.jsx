import React, { useRef, useState } from 'react';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

// 이벤트 함수로 만들어진 props를 이용해 자식값-> 부모값으로 넘김
export default function NewProduct() {
  const navigate = useNavigate();
  const productNameRef = useRef(null);
  const [ fname, setFnames ] = useState({});
  const [ preview, setPreview ] = useState('');
  let [ formData, setFormData ] = useState({});

  // 자식의 값을 가져옴
  const getFileName = (filesNames) => {
    console.log('filesNames-->', filesNames);
    setFnames(filesNames);
    setPreview(`http://localhost:9000/${filesNames.uploadFileName}`);
  };

  // 폼 입력시 값을 formData로 추가하는 이벤트
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value}); 
  };

  // Submit 이벤트
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(productNameRef.current.value === ''){
      alert('상품명을 입력해주세요');
      productNameRef.current.focus();
      return false;
    }else{
      // 서버전송
      formData = {...formData, "uploadFile":fname.uploadFileName,
                                "sourceFile" : fname.sourceFileName};
      console.log('formData-->',formData);
      axios.post('http://localhost:9000/product/new', formData)
           .then((res)=>{
            console.log('res.data-->',res.data);
            if(res.data.result_rows === 1){
              alert('상품이 등록되었습니다.');
              navigate('/all');
            }else{
              alert('상품 등록 실패!!');
            }
           })
           .catch((error)=>{
            alert('상품 등록 실패!!');
            console.log(error)})
    }
  };

  return (
    <div>
      <h1>상품 등록</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>상품명</label>
            <input type="text" name='productName' ref={productNameRef} onChange={handleChange}/>
          </li>
          <li>
            <label>가격</label>
            <input type="text" name='price'  onChange={handleChange}/>
          </li>
          <li>
            <label>상품정보</label>
            <input type="text" name='description' onChange={handleChange}/>
          </li>
          <li>
            <label>파일업로드</label>
            <ImageUpload getFileName={getFileName}/>
            { preview &&
              <img src={preview} 
                   alt="preview Image" 
                   style={{'width':'100px', 'height':'100px'}} />
            }
          </li>
          <li>
            <input type="hidden" name='upload' value={fname.uploadFileName}/>
            <input type="hidden" name='source' value={fname.sourceFileName} />
          </li>
          <li>
            <button type='submit'>등록</button>
            <button type='reset' >취소</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

