import './Avatar.css'

export default function Avatar({img, name, age}){
  return (
    <div className="avatar-container">
      <img src={img} className="avatar" />
      <div>{name}, {age}</div>
    </div>
  );
};