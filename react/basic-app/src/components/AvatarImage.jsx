import '../css/Avatar.css';

// 구조 분해 할당으로 받을 경우 
export default function AvatartImage({img}){
  return (
    <img src={img} className="avatar-img"/>
  );
};

/* props -> 오브젝트 리터럴 {}형태로 값 받을 경우
export default function AvatartImage(props){
  return (
    <img src={props.img} className="avatar-img"/>
  );
};
*/

// props = {img :"/images/people1.webp" }
// 힙에 생성 -> 힙 객체 가져오려면 -> props.img
// 컴포넌트는 작게 만들 수록 재사용성이 높아진다.