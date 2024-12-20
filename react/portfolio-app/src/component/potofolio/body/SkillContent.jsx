import React, { useState, useEffect } from 'react';
import SkillCoding from './SkillCoding.jsx';
import SkiilContentList from './SkiilContentList.jsx';

export default function SkillContent() {
  const [ skillIntro, setSkillIntro ] = useState('');
  const [ codingSkill, setCodingSkill ] = useState([]);
  const [ toolList, setToolList ] = useState({});
  const [ etcList, setEtcList ] = useState({});
    
  useEffect(()=> {
    fetch('/data/json/body.json')
      .then((data)=> data.json())
      .then((jsonData)=>{
        setSkillIntro(jsonData.skillIntro)
        setCodingSkill(jsonData.codingSkill)
        setToolList(jsonData.toolList)
        setEtcList(jsonData.etcList)
      })
      .catch((error)=>console.log(error))
  },[]);

  
  return (
    <section id="skill" className="section max-container">
      <h2 className="title">My Skills</h2>
      <p className="description">Skills & Attributes</p>
      <p>{skillIntro}</p>
      <div className="skills">
        <article className="skills__coding">
          <h3 className="skill__title">Coding Skills</h3>
          <ul>
            {codingSkill.map(item =>
              <li className="bar">
                <SkillCoding {...item}/>
              </li>
            )}
          </ul>
        </article>
        <article className="skills__tools">
          <SkiilContentList list={toolList}/>
        </article>
        <article className="skills__etc">
          <SkiilContentList list={etcList}/>
        </article>
      </div> 
    </section>
  );
}

