import AvatarItem from './AvatarItem.jsx';
import './Avatar.css';

export default function AppAvatar(){
  const list = [
    {"src":"/images/people1.webp", "name":"Smith", "isNew":true},
    {"src":"/images/people2.webp", "name":"James"},
    {"src":"/images/people3.webp", "name":"Kelly"}
  ];

  return(
    <div className='avatar-container'>
      {list && list.map(item =>
        <AvatarItem {...item}/>
      )}
    </div>
  );
}

/*
gap 속성이 작동하려면 직접 자식 요소가 둘 이상이어야 의미가 있음
.avatar-container의 직접 자식 요소는 list.map을 통해 렌더링된 여러 개의 <AvatarItem> 컴포넌트로 gap적용이 가능

** Gap 이 작동하려면 
- Flex 컨테이너 또는 Grid 컨테이너
- 여러개의 자식요소 필요

** 네트워크를 통해 코드를 못가져 올 것을 생각하여 코드 짜기 
    {list && ---- }



*/
