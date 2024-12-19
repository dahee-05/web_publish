import React, { useState, useEffect } from 'react';
import SkillCoding from './SkillCoding.jsx';

export default function SkillContent() {
  const [ aboutList, setAboutList ] = useState([]);
  const [ codingSkill, setCodingSkill ] = useState([]);
  const [ skillIntro, setSkillIntro ] = useState('');
    
  useEffect(()=> {
    fetch('/data/json/body.json')
      .then((data)=> data.json())
      .then((jsonData)=>{
        setAboutList(jsonData.aboutList)
        setCodingSkill(jsonData.codingSkill)
        setSkillIntro(jsonData.skillIntro)
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
            <li>Visual Studio Code</li>
            <li>IntelliJ</li>
            <li>Android Studio Code</li>
            <li>iOS development tools</li>
            <li>Eclipse</li>
          </ul>
        </article>
        <article className="skills__etc">
          <h3 className="skill__title">Etc</h3>
          <ul>
            <li>Git</li>
            <li>Scrum Master</li>
            <li>SVN</li>
          </ul>
        </article>
      </div> 
    </section>
    
  );
}

