import React from 'react';

export default function CondingBar(props) {
  return (
    <>
      <div className="bar__metadata">
        <span>{props.title}</span>
        <span>{props.percent}</span>
      </div>
      <div className="bar__bg">
        <div className="bar__value" style={{'width':props.percent}}></div>
      </div>
    </>
  );
}

