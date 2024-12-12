import React from 'react';

export default function Menu({title}) {
  return (
    <div>
        <button type='button' className='menu-list-btn'>{title}</button>
    </div>
  );
}

