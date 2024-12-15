import React from 'react';

export default function Menu({title, total}) {
  return (
    <div>
        <button type='button' className='menu-list-btn'>
          {title} {( title === '장바구니')?<span>{total}</span> : ''}
        </button>
    </div>
  );
}

