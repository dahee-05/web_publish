import React, { useState, useEffect } from 'react';

import AboutContent from './AboutContent.jsx';
import AboutCareer from './AboutCareer.jsx';

export default function AboutMe() {
    const [ aboutList, setAboutList ] = useState([]);
    const [ career, setCareer ] = useState([]);
    const [ aboutIntro, setAboutIntro ] = useState('');
  
    useEffect(()=> {
      fetch('/data/json/body.json')
        .then((data)=> data.json())
        .then((jsonData)=>{
          setAboutList(jsonData.aboutList)
          setCareer(jsonData.career)
          setAboutIntro(jsonData.aboutIntro)
        })
        .catch((error)=>console.log(error))
    },[]);
  
  return (
    <section id="about" className="section max-container">
      <h2 className="title">About me</h2>
      <p className="description">{aboutIntro}</p>
      <ul className="majors">
        {aboutList.map((about) => (
            <li className="major">
              <AboutContent {...about} /> 
            </li>
        ))}
      </ul>
      <ul className="jobs">
        {career.map( item =>
          <li className="job">
            <AboutCareer {...item}/>
          </li>
        )}  
      </ul>
    </section>
  );
}

/*
 * iconMap의 경우 faCss3Alt', 'faMobile', 'faServer'는 문자열이지만, 객체의 키로 사용될 때 JavaScript는 이를 식별자처럼 동작하도록 허용, 라이브러리
 *{icon: faServer} --> faServer라는 변수가 스코프 내에 정의되어 있어야함
 * 즉 해당 값들이 키값일 경우 객체로 자바스크립트가 인식함
 * 
 * 
 * 
 * 
 */