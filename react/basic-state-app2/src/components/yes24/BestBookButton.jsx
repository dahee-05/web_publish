import React, { useState } from 'react';

export default function BestBookButton({click}) {
  const [number, setNumber] = useState(1);

  const handleClick = (type) => {
    if(type === '-'){
      (number > 1 )?setNumber(number - 1 ):alert('1개 이상 구매가능합니다.');
    }else if(type === '+'){
      setNumber(number + 1 )
    }
  };

  return (
    <ul className='container-btn-content'>
      <li>
        <input type='checkbox'></input>
        <button type='button' onClick={()=>{handleClick('-')}}>-</button>
        <span>{number}</span>
        <button type='button' onClick={()=>{handleClick('+')}}>+</button>
      </li>
      <li>
        <button type='button' onClick={()=>{click(number)}}>카트에 넣기</button>
      </li>
      <li>
        <button type='button'>바로구매</button>
      </li>
      <li>
        <button type='button'>리스트에 넣기</button>
      </li>
    </ul>
  );
}

