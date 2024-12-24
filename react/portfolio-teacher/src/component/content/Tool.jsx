import React from 'react';

export default function Tool({list}) {
  
  return (
    <>
      <h3 class="skill__title">{list.title}</h3>
      <ul>
        {list.list && list.list.map( item => 
          <li>{item.text}</li>
        )} 
      </ul>  
    </>
  );
}

