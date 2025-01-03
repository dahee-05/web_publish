import React from 'react';

export default function Top({title, desc}) {
  return (
    <>
      <h2 class="title">{title}</h2>
      <p class="description">{desc}</p> 
    </>
  );
}

