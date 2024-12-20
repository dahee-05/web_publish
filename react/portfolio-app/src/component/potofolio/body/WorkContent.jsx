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
          <WorkMenu menu={item.menu} pcnt={pcnt} click={handleClick} click2={handleHover} isHovered={hoveredIndex === index}/>
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

// 리스트를 불러와 인덱스를 클릭시 인덱스 함수를 만들어 넣고 클래스 네임에 (,i)를 통해 맵을 돌려 삼항연산자로 클래스 네임 체크
// 값을 물고 있기 

