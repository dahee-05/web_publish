import React from 'react';

export default function Tool({list, type}) {
  // console.log(`list---> ${list.tools}`);
  console.log(JSON.stringify(list.tools))
  if(!list || !list.tools || !list.etc) return null; 
  return (
    <>
      <h3 class="skill__title">{type}</h3>
      <ul>
        {type === 'Tools' ? 
                  list.tools.map((item, index) => 
                  <li key={index}>{item}</li>)
                  : list.etc.map((item, index) => 
                  <li key={index}>{item}</li>)
              }        
      </ul>  
    </>
  );
}

