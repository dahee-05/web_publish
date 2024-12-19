import React from 'react';

export default function WorkProject(props) {
  return (
    <>
      <img className="project__img" 
            src={props.img}
            alt={props.alt} />
      <div className="project__metadata">
        <h3 className="project__metadata__title">{props.num}</h3>
        <p>{props.text}</p>
      </div>
    </>
  );
}

