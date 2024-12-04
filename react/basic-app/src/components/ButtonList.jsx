import Button from './Button.jsx';

export default function ButtonList({list}){
  return (
    <div>
      {list.map((item)=> 
        <Button type={item.type} name={item.name}/>
      )}
    </div>
  );
}; 
