import React, { useState } from 'react';
import './Counter.css';
import Counter from './Counter.jsx';

export default function AppCounter() {
  const [totalNumber, setTotalNumber] = useState(0); 

  const handleChangeQty = (number, type) => {
    if(number < 10 && type === '+'){
      setTotalNumber(totalNumber+1)
    }else if(number > 0 && type === '-'){
      setTotalNumber(totalNumber-1)
    }
  };

  return (
    <div className='container'>
      <Counter qtyTotal={totalNumber} click={handleChangeQty} />
      <Counter qtyTotal={totalNumber} click={handleChangeQty} />
    </div>
  );
}

