import AvatartImage from './AvatarImage.jsx';

// list={[~]}
export default function AvatartImageList({list}){
  return (
    <ul>
      {list.map((item) => <li><AvatartImage img={item.img}/></li> )}
    </ul>
  );
};