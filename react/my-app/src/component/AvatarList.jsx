import Avatar from "./Avarta";

export default function AvatarList({list}){
 
  return (
    <ul>
      {list.map((object) =>   
        <li>
          <Avatar img={object.img} name={object.name} age={object.age}/>
        </li>
      )}
    </ul>
  );
};

// {} - 반복하려는 구간 중괄호로 묶기
// props ={
//     list : [
//       { "img":"/images/people1.webp", "name":"Smith", "age":"20"},
//       { "img":"/images/people2.webp", "name":"James", "age":"30"},
//       { "img":"/images/people3.webp", "name":"Kelly", "age":"19"}
//    ],
//    name : "홍길동"    
//  }