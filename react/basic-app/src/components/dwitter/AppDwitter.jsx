import { useEffect, useState } from "react";  
import Dwitter from "./Dwitter.jsx";
import './Dwitter.css';

// 자바스크립트에서 JSON데이터 불러올때 fetch()사용
export default function AppDwitter(){
  const [dwitters, setDwitters] = useState([]); 

  useEffect(() => {  // 맨처름 한번만 호출하도록 상태 관리
    fetch("data/dwitters.json")      // fetch로 네트워크통해 json데이터 가져옴 
    .then((result) => result.json()) //string 값으로 받음
    .then((jsonData) => setDwitters(jsonData)) 
    .catch((error)=>console.log(error));
  }, []);
  
  // console.log(`dwitters-->${dwitters}`);

  return (
    <div className="dwitter-container">
      <h1>Dwitter</h1>
      <ul className="dwitter-menu">
        <li>All Dwitter</li>
        <li>My Dwitter</li>
        <li>Login / SignUp</li>
      </ul>
      { dwitters.map((dwitter)=> 
         <Dwitter img={dwitter.img} name={dwitter.name} id={dwitter.id} date={dwitter.date} content={dwitter.content}/>
      )};
    </div>
  );
};


// url: "http://localhost:3000/data/dwitters.json"
// react netmork 접속 진행 시 -> useEffect() 리엑트 Hooks 사용!!!

// useStatus -> 리엑트에서 변수를 선언, 객체들의 상태를 관리  
// useStatus가 데이터를 넣고 빼는 것을 관리하며 배열 형태로 관리

/*
useState()를 사용하지 않고 보통의 변수처럼 사용하면 (let dwitters =[];) -> 실행시 dwitters에 값이 없음 -> 직접적으로 데이터를 넣었을때는 값이 인식되지만 useEffect()로 관리하는 변수는 useState()에서만 관리하는 함수에만 넣을 수 있음

왜 리엑트에서 변수,객체를 관리해야하는가? 
: 새로고침을 안함 -> 바뀐 부분만 변경해줘야 함 ->리엑트가 관리한다 
useStatus([]) 가 관리할때 항상 배열형태로 만들어줘야 함

useStatus()가 붙어있으면 dwitters값이 변동이 있을때마다 상태관리를 통해 출력 화면을 관리한다->렌더링
useState([]) : 변수의 초기값 -> setDwitters(jsonData)를 통해 dwitters 값을 가짐
-> useEffect()없이 fetch()만 사용하게 되면 무한 루프에 빠짐
-> 한번만 다녀와서 작업이 끝나나 사용하지 않으면 비동기처리에 들어가고 불러내는 작업[ dwitters.map((dwitter)=> ]을 통해 계속한다


react-jsx-dev-runtime.development.js:85 Warning: Each child in a list should have a unique "key" prop -> 실행결과에 영향을 주지 않음 -> Dwitter.jsx의 div가 계속 반복되어지는데 반복하는 이를 구분하는 key가 없기 때문 -> 만들어질때 구분하는 key값을 줌
->가장 최상단의 div에 <div className="dwitter"  key={props.id}>를 주어 에러 해결 
-> key는 유니크한 값
-> 에러 해결 안됨 ???



*/