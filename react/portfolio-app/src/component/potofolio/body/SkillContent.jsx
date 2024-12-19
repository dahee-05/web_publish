import React, { useState, useEffect } from 'react';
import SkillCoding from './SkillCoding.jsx';

export default function SkillContent() {
  const [ skillIntro, setSkillIntro ] = useState('');
  const [ codingSkill, setCodingSkill ] = useState([]);
  const [ toolList, setToolList ] = useState([]);
  const [ etcList, setEtcList ] = useState([]);
    
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
          <h3 className="skill__title">Tools</h3>
          <ul>
            {toolList.map(item =>
              <li>{item.tool}</li>
            )}
          </ul>
        </article>
        <article className="skills__etc">
          <h3 className="skill__title">Etc</h3>
          <ul>
            {etcList.map( item => 
              <li>{item.etc}</li>
            )}
          </ul>
        </article>
      </div> 
    </section>
  );
}

