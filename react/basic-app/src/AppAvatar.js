import { useEffect, useState } from 'react';
import './App.css';
import Avatar  from './components/Avatar.jsx';
import AvatartImage from './components/AvatarImage.jsx';
import AvatartImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';
// import Menu from './components/menu.jsx';

export default function App() {
  const [imgList, setImgList] = useState([]); //리엑트가 알아서 새로고침==렌더링 
  const [avatarList, setAvartaList] = useState([]);

  useEffect(()=>{ //맨처음 한번만 호출하도록 관리
    fetch("data/avatar.json")
      .then((result)=>result.json())
      .then((jsonData)=> {
          setImgList(jsonData.imageList);
          setAvartaList(jsonData.avatarList);
      })
      .catch();
  }, []);
  console.log(`imgList -> ${imgList}`);
  console.log(`avatarList -> ${avatarList}`);
  
  // const imgList = [
  //   {"img" :"/images/people1.webp"},
  //   {"img" :"/images/people2.webp"},
  //   {"img" :"/images/people3.webp"}
  // ];
  // const avatarList = [
  //   {"img" :"/images/people1.webp", "name":"Smith"},
  //   {"img" :"/images/people2.webp", "name":"James"},
  //   {"img" :"/images/people3.webp", "name":"Kelly"}
  // ];

  return (
    <div className="App">
      <div className='App-container'>
        <Avatar img="/images/people1.webp" name="Smith" />
        <Avatar img="/images/people2.webp" name="James" />
        <Avatar img="/images/people3.webp" name="Kelly" />
      </div>
      <div className='App-container'>
        <AvatartImage img="/images/people1.webp"/>
        <AvatartImage img="/images/people2.webp"/>
        <AvatartImage img="/images/people3.webp"/>
      </div>
      <div className='App-container'>
        <AvatartImageList list={imgList} />
      </div>
      <div className='App-container'>
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}

// export default App;
/*
const [imgList, setAvartaList] = useState([]); 
: imgList는 시작부터 종료까지 useState()리엑트가 관리하며 형태는 []로 선언

*/