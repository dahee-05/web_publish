import React, { useEffect, useState } from 'react';
import Major from './Major.jsx';

export default function Majors() {
  const [ majorList, setMajorList ] = useState([]);

  useEffect(()=> {
    fetch('data/content.json')
      .then((data)=>data.json())
      .then((jsonData)=> setMajorList(jsonData.majorList))
      .catch((error)=>console.log(error))
  },[]);

  return (
    <ul className="majors">
      {majorList && majorList.map((item) =>
        <li className="major">
          <Major {...item}/>
        </li>  
      )}  
    </ul>
  );
}

