import React, { useState, useEffect } from 'react';
import WorkMenu from './WorkMenu.jsx';
import WorkProject from './WorkProject.jsx';

export default function WorkContent() {
  const [ projectList, setProjectList ] = useState([]);
  const [ projectMenu, setProjectMenu ] = useState([]);
  const [ type, setType ] = useState('All');
  const [ pcnt, setPcnt ] = useState(0);

  useEffect(()=> {
    fetch('/data/json/body.json')
      .then((data)=> data.json())
      .then((jsonData)=>{
        setProjectMenu(jsonData.projectMenu)
        if( type === 'All'){
          setProjectList(jsonData.projectList)
          setPcnt(jsonData.projectList.length);
        }else {
          const filterArray = jsonData.projectList.filter(project=> project.type === type);
          setProjectList(filterArray)
          setPcnt(filterArray.length);
        }
      })
      .catch((error)=>console.log(error))
    },[type]);
 
  const handleClick = (ptype) => {
    setType(ptype);
  };

  return (
    <section id="work" className="section max-container">    
    <h2 className="title">My work</h2>
    <p className="description">Projects</p>
    <ul className="categories">
      {projectMenu && projectMenu.map(item => 
        <li>
          <WorkMenu menu={item.menu} pcnt={pcnt} click={handleClick}/>
        </li>
      )}
    </ul>
    <ul className="projects">
      {projectList && projectList.map(project=>
        <li className="project">
          <WorkProject {...project}/>
        </li>
      )}
    </ul>    
  </section>
  );
}

