import './App.css';
import Avatar from './component/Avatar.jsx';
import AvatartImage from './component/AvatarImage.jsx';
import AvatartImageList from './component/AvatarImageList.jsx';
import AvatarList from './component/AvartList.jsx';

export default function App() {
  const list = [
    {"img":"/images/people1.webp", "name":"Smith"},
    {"img":"/images/people2.webp", "name":"James"},
    {"img":"/images/people3.webp", "name":"Kelly"}
  ];
  const propsList = [
    {"img":"/images/people1.webp", "name":"Smith"},
    {"img":"/images/people2.webp", "name":"James"},
    {"img":"/images/people3.webp", "name":"Kelly"}
  ];

  return (
    <>
      <div className="App">
        <div className='App-container'>
          <Avatar img="/images/people1.webp" name="Smith"/>
          <Avatar img="/images/people2.webp" name="James"/>
          <Avatar img="/images/people3.webp" name="Kelly"/>
        </div>
        <div className='App-container'>
          <AvatartImage img="/images/people1.webp" name="Smith" />
          <AvatartImage img="/images/people2.webp" name="James" />
          <AvatartImage img="/images/people3.webp" name="Kelly" />
        </div>
        <div className='App-container'>
          <AvatartImageList list={list} />  
        </div>
        <div className='App-container'>
          <AvatarList list={propsList} />  
        </div>
      </div>
    </>
  );
}


