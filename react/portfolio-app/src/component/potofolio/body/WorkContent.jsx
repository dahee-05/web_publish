import React, { useState, useEffect } from 'react';
import WorkMenu from './WorkMenu.jsx';
import WorkProject from './WorkProject.jsx';

export default function WorkContent() {
  const [ projectList, setProjectList ] = useState([]);
  const [ projectMenu, setProjectMenu ] = useState([]);
  const [ type, setType ] = useState('All');
  const [ htype, setHtype ] = useState('All');
  const [ pcnt, setPcnt ] = useState(0);
  const [ hoveredIndex, setHoveredIndex ] = useState(null);

  useEffect(()=> {
    fetch('/data/json/body.json')
      .then((data)=> data.json())
      .then((jsonData)=>{
        setProjectMenu(jsonData.projectMenu)
        const filterArray = ( type === 'All') ? jsonData.projectList
              :  jsonData.projectList.filter(project=> project.type === type);
        setProjectList(filterArray);
        const ctn = (htype==='All') ? jsonData.projectList.length
            :jsonData.projectList.filter(project => project.type  === htype).length
        setPcnt(ctn);    
      })
      .catch((error)=>console.log(error))
    },[type, htype]);
 
  const handleClick = (ptype) => {
    setType(ptype);
  };

  const handleHover = (htype) => {
    setHtype(htype);
  };

  
  return (
    <section id="work" className="section max-container">    
    <h2 className="title">My work</h2>
    <p className="description">Projects</p>
    <ul className="categories">
      {projectMenu && projectMenu.map((item, index) => 
        <li>
          <WorkMenu menu={item.menu} pcnt={pcnt} click={handleClick} hover={handleHover} isHovered={hoveredIndex === index}/>
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


