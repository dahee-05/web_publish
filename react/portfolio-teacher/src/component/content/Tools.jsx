import React, { useEffect, useState } from 'react';
import Tool from './Tool.jsx';

export default function Tools() {
  const [ tlist, setTList] = useState([]);
  const [ elist, setEList] = useState([]);

  useEffect(()=>{
    fetch('/data/content.json')
      .then((data)=> data.json())
      .then((jsonData)=> {
        setTList(jsonData.toolsList)
        setEList(jsonData.etcList)
      })
      .catch((error)=>console.log(error))
  },[]);

  console.log(tlist);
  
  return (
    <>
      <article class="skills__tools">
        <Tool list={tlist}/>
      </article>
     
    </>
  );
}

