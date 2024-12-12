import React, { useState } from 'react';

export default function Menu({name, count}) {
  
  // const handleCount = () =>{
  //   setTotalCount(totalCount + count);
  // };

  return (
    <>
      <button type='button' className='menuBtn'>
        {name} {(name === '장바구니') ? <span>({count})</span> : ''}
      </button>
    </>
  );
}

