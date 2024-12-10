export default function AvatarItem(props){
  return(
    <div className="container">
        <img src={props.src} alt='' className="image" />
        {props.isNew && <span className="mark">new</span>}
        <p className="name">{props.name}</p>
    </div>
  );
}