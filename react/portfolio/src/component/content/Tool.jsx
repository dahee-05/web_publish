import React from 'react';

export default function Tool({list, type}) {

  console.log(`type--->`, type);

  return (
    <>
      <h3 class="skill__title">{type}</h3>
      <ul>
        {list.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>  
    </>
  );
}

