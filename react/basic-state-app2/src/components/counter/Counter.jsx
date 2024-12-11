import React, { useState } from 'react';

export default function Counter({click, qtyTotal}) {
  const [number, setNumber] = useState(0);

  const handleClick = (type) => {
    if(number < 10 && type === '+'){
      setNumber(number +1)
      click(number, '+')
    }else if(number > 0 && type === '-'){
      setNumber(number -1)  
      click(number, '-')
    }
  };

  return (
    <div className='content'>
      <div>
       <span className='count'>{number} /</span>
       <span className='count'> {qtyTotal}</span>
      </div>
       <button type='button' className='btn' onClick={()=>{handleClick('+')}}>증가 (+)</button> 
       <button type='button' className='btn' onClick={()=>{handleClick('-')}}>감소 (-)</button> 
    </div>
  );
}

