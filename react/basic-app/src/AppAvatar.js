import './App.css';
import Avatar  from './components/Avatar.jsx';
import AvatartImage from './components/AvatarImage.jsx';
import AvatartImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';
import Menu from './components/menu.jsx';

export default function App() {
  const imgList = [
    {"img" :"/images/people1.webp"},
    {"img" :"/images/people2.webp"},
    {"img" :"/images/people3.webp"}
  ];
  const avatarList = [
    {"img" :"/images/people1.webp", "name":"Smith"},
    {"img" :"/images/people2.webp", "name":"James"},
    {"img" :"/images/people3.webp", "name":"Kelly"}
  ];

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
