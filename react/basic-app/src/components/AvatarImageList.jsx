import AvatartImage from "./AvatarImage";

// {list = [~]}
export default function AvatartImageList({list}){

  return(
    <ul>
      {list.map((object) => <li><AvatartImage img={object.img}/></li> )}
    </ul>  
  );
};


