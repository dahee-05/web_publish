import React from 'react';

export default function Tool({list}) {
  
  return (
    <>
      <h3 class="skill__title">{list.type}</h3>
      <ul>
        {type === 'Tools' ? 
                  data.tools.map(item =>
                      <li>{item}</li>
                  )
                  : data.etc.map(item => 
                      <li>{item}</li>
                  )
              }        
      </ul>  
    </>
  );
}

