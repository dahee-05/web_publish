import React, { useState } from 'react';

export default function Counter({total, click}) {
  const [number, setNumber] = useState(0);

  const handleClick= (type)=> {
    if(type === '+'){
      (number < 10)? setNumber(number +1) : setNumber(number);
      click(number, type);
    }else if(type === '-'){
      (number > 0)? setNumber(number -1) : setNumber(number);
      click(number, type);
    }
  };
 
  return (
    <div style={{width:300, margin:'auto'}}>
      <div style={{fontSize:27, fontWeight:'bold'}}>
        <span>{number} </span>
        <span>/</span>
        <span className='total'> {total}</span>
      </div>
      <div >
        <button type='button' onClick={()=>{handleClick('+')}} style={{fontSize:20, padding:5}}>증가 (+)</button>
        <button type='button' onClick={()=>{handleClick('-')}}  style={{fontSize:20, padding:5}}>감소 (-)</button>
      </div>
    </div>
  );
}

