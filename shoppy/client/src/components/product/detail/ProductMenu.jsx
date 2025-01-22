import React from 'react';

export default function ProductMenu(props) {
  console.log('props',props);
  console.log('idx',props.idx);
  
  return (
    <li className={props.isActive ? "on" : ''}>
      <a href={props.href} onClick={props.onClick}>{props.name}</a>
    </li>
  );
}

