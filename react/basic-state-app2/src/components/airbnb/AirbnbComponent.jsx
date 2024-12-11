import React from 'react';

export default function AirbnbComponent(props) {
  return (
    <div className='content'>
      <img src={props.src} className='content-img'/>
      <div className='text-content'>
        <p className='d1'>{props.name}</p>
        <p className='d2'>{props.text}</p>
        <p className='d3'>{props.date}</p>
        <p className='d4'>{props.price}</p>
      </div>  
    </div>
  );
}

