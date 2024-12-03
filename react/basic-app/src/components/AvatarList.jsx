import Avatar from "./Avatar.jsx";

export default function AvatarList({list}){
  return(
    <ul>
    {list.map((object)=> <li><Avatar img={object.img} name={object.name} /></li>
    )}
    </ul>
  );
};