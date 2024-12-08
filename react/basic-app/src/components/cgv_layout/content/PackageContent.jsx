import PackageContentTitle from './PackageContentTitle.jsx';
import PackageContentItem from './PackageContentItem.jsx';

export default function PackageContent({title, list}){
  return (
    <div className="package-content-border">
      <PackageContentTitle title={title} /> 
      <ul>
        {list && list.map(item => 
          <li>
            <PackageContentItem src={item.src} alt={item.alt} text={item.text} price={item.price}/>
          </li>
        )}
      </ul>
    </div>
  );
};

// list && --> list객체가 true이면 실행 === if(list !== null){}