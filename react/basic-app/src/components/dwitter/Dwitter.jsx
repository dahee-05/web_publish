// 부모에 css를 import 해놓으면 자식은 같은 css를 사용할 수 잇다
// import './Dwitter.css'; 

// 화면구현 -> return()에 구성
export default function Dwitter(props){
  return(
    <div className="dwitter" key={props.id}>
      <div className="dwitter-image">
        <img src={props.img} alt="image" />
      </div>
      <div className="title">
        <span>{props.name}</span>
        <span>{props.id}</span>
        <span>{props.date}</span>
      </div>
      <div className="content">{props.content}</div>
    </div>
  );
};

