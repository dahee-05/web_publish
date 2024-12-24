export default function PackageContentTitle({title}){
  return (
    <div> 
      <span className="package-title-font">{title}</span>
      <button className="package-view-button">더보기</button>
    </div>
  );
};