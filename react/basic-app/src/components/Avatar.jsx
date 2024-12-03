import '../css/Avatar.css';
import AvatartImage from './AvatarImage.jsx';

export default function Avatar({img, name}){
  return( // JSX 문법, 
    <div className="avatar-container">
      <AvatartImage img={img} />
      <p>{name}</p>
    </div>
  );
};

// AvatartImage를 호출하는 곳에서 변경할 이미지를 넘겨줘야함