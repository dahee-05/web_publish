import { useEffect, useState } from 'react';
import HeaderTopMenu from './HeaderTopMenu.jsx';

export default function HeaderTopMenuList(){
  //useEffect를 통해 받아 온 값을 전역변수로 꺼내기 위해서 useState()사용
  // 변수,객체를 리엑트가 관리하기 위해 사용 -> 바뀐 부분만 업데이트 해주기 위해
  const [list, setList] = useState([]);

  // 렌더링시 처음 1번 실행/ 비동기 관리
  useEffect(()=>{ 
    fetch('/data/cgv_header.json')
      .then((result)=> result.json()) //string형태로 json형태로 바꿔줌
      .then((jsonData)=> setList(jsonData))
      .catch((error)=> console.log(error))
  },[]);

  return (
    <nav>
     <ul>
      {list && list.map((item) =>
        <li>
          <HeaderTopMenu href={item.href} src={item.src} alt={item.alt} text={item.text}/>
        </li>
      )}
    </ul>
  </nav>
  );
};