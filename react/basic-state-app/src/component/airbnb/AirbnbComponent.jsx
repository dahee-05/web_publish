export default function AirbnbComponent(props){
  return(
    <div className="container">
      <div className="img">
        <img src={props.src}  alt="이미지" className="main-image"/>
        {props.isGood && <span className="isGood">게스트 선호</span> }
        <span className="isheart" style={{color:props.isHeart}}>♥</span>
      </div>
      <div className="description">
        <p className="d1">{props.address}</p>
        <p className="d2">{props.text}</p>
        <p className="d3">{props.date}</p>
        <p className="d4">{props.price}</p>
      </div>
    </div>  
  );
}
