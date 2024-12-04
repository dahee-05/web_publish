import '../css/Avatar.css';
import AvatartImage from './AvatarImage.jsx';

export default function Avatar({img, name}){
  return(
    <div className="avatar-container">
      <AvatartImage img={img} className="avatar-img" />
      <p>{name}</p>
    </div>
  );
};