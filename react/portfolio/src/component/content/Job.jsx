import React from 'react';

export default function Job(props) {
  return (
    <>
      <img src={props.img} alt={props.alt} />
      <div>
        <p className="job__name">{props.name}</p>
        <p className="job__period">{props.date}</p>
      </div>
    </>
  );
}

