import React, { useEffect, useState } from 'react';
import Tool from './Tool.jsx';

export default function Tools({type}) {
  // const [ list, setList] = useState({ tools:[], etc:[] });
  const [ tList, setToolList] = useState([]);
  const [ eList, setEtcList] = useState([]);

  useEffect(()=>{
    fetch('data/content.json')
      .then((data)=> data.json())
      .then((jsonData)=> {
        setToolList(jsonData.toolsList.tools)
        setEtcList(jsonData.toolsList.etc)
      })
      .catch((error)=>console.log(error))
  },[]);
  
  // console.log(`type--->`, type);
  

  return (
    <>
     { type === 'Tools' ? 
        <article className="skills__tools">
          <Tool list={tList} type={type}/>
        </article>
      : <article className="skills__etc">
         <Tool list={eList} type={type}/>
        </article>
      } 
    </>
  );
}

