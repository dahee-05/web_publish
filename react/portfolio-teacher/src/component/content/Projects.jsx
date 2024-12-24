import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';

export default function Projects() {
 const [ projectList, setProjectList ] = useState([]);

 useEffect(()=>{
  fetch('/data/content.json')
    .then((data)=>data.json())
    .then((jsonData)=>setProjectList(jsonData.projectList))
    .catch((error)=>console.log(error))
 },[]);

  return (
    <ul class="projects">
      {projectList && projectList.map(item =>
      <li class="project">
        <Project {...item}/>
      </li> 
      )} 
    </ul>    
  );
}

