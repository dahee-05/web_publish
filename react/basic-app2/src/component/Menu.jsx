import '../css/Menu.css';

export default function Menu({href, name, bg, color}){
  return(
      <a href={href} className='btn-item' style={{backgroundColor:bg, color:color}}>{name}</a>
  );
};