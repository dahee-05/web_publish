import React from 'react';

export default function Project(props) {
  return (
    <>
      <img class="project__img" src={props.img} alt={props.alt}/>
        <div class="project__metadata">
          <h3 class="project__metadata__title">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
    </>
  );
}

