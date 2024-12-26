import React, { useEffect, useState } from 'react';
import Tool from './Tool.jsx';

export default function Tools({type}) {
  const [ list, setList] = useState({ tools:[], etc:[] });

  useEffect(()=>{
    fetch('data/content.json')
      .then((data)=> data.json())
      .then((jsonData)=> setList(jsonData.toolsList))
      .catch((error)=>console.log(error))
  },[]);
  // console.log(JSON.stringify(list))
  
  return (
    <>
      <article class="skills__tools">
        <Tool list={list} type={type}/>
      </article>
     
    </>
  );
}

