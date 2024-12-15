import React from 'react';

export default function Book({img, title, type}) {
  return (
    <div style={{width:200}} className='book-content'>
      <img src={img} style={{width:200}} className='book-img'/>
      <div className='book-title'>{title}</div>
    </div>
  );
}

