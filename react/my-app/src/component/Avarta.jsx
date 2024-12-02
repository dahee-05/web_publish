import './Avatar.css';

// 파일명이 함수의 이름과 같은 함수에는 default를 붙일 수 있다.
export default function Avatar({img, name, age}){
  return (
    <div className='avatar-container'> 
      <img src={img} className="avatar"/>
      <div>{name}, {age}</div>
    </div>
  );
};
