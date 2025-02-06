import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload.jsx';

// 이벤트 함수로 만들어진 props를 이용해 자식값-> 부모값으로 넘김
export default function NewProduct() {
  const [ fname, setFnames ] = useState({});

  // 자식의 값을 가져옴
  const getFileName = (filesNames) => {
    console.log('filesNames-->', filesNames);
    setFnames(filesNames);
  };

  return (
    <div>
      <h1>상품 등록</h1>
      <form >
        <ul>
          <li>
            <label>상품명</label>
            <input type="text" name='productName'/>
          </li>
          <li>
            <label>가격</label>
            <input type="text" name='price'/>
          </li>
          <li>
            <label>상품정보</label>
            <input type="text" name='description'/>
          </li>
          <li>
            <label>파일업로드</label>
            <ImageUpload getFileName={getFileName}/>
          </li>
          <li>
            <input type="text" name='upload' value={fname.uploadFileName}/>
            <input type="text" name='source' value={fname.sourceFileName} />
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

