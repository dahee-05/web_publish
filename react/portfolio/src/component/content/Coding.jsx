import React from 'react';
import CondingBar from './CondingBar.jsx';

export default function Coding() {
 const codeList =[
  {
    "title":"HTML", 
    "percent":"98%"
  },
  {
    "title":"CSS", 
    "percent":"90%"
  },
  {
    "title":"JavaScript", 
    "percent":"90%"
  },
  {
    "title":"TypeScript", 
    "percent":"80%"
  },
  {
    "title":"React", 
    "percent":"79%"
  },
  {
    "title":"NodeJS", 
    "percent":"68%"
  }
 ];

  return (
    <article className="skills__coding">
      <h3 className="skill__title">Coding Skills</h3>
      <ul>
        {codeList && codeList.map(item =>
          <li className="bar">
            <CondingBar {...item}/>
          </li>
        )}
      </ul>
    </article>
  );
}

