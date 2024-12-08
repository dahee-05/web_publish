import { useEffect, useState } from 'react';
import PackageContent from './PackageContent.jsx';

export default function EventSpecial(){
  const [plist, setPlist] = useState([]);
  
  useEffect(()=>{
    fetch('/data/cgv_content.json')
      .then((result) => result.json())
      .then((jsonData)=> setPlist(jsonData.plist))
      .catch((error) => console.log(error))
  },[])

  return (
    <section className="package-content-list">
      {plist && plist.map(object =>
        <PackageContent title={object.title} list={object.list}/>
      )}
    </section>
  );
};