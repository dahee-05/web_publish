import React from 'react';
import Major from './Major.jsx';

export default function Majors() {

  const majorList = [
    {
      "title":"Front-end", 
      "icon":"faCss3Alt",
      "subject":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs"
    },
    {
      "title":"Mobile", 
      "icon":"faMobile",
      "subject":"Android Studio, React Native, iOS, Swift, Java, Kotlin"
    },
    {
      "title":"Back-end", 
      "icon":"faServer",
      "subject":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot"
    }
  ];

  return (
    <ul className="majors">
      {majorList && majorList.map((item) =>
        <li className="major">
          <Major {...item}/>
        </li>  
      )}  
    </ul>
  );
}

