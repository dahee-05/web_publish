import React, { useState } from 'react';
import Counter from './Counter.jsx';

export default function AppCounter() {
  const [ total, setTotal ] = useState(0);
  
  const handleTotal = (number, type) => {
    if(number < 10 && type ==='+'){
      setTotal(total +1)
    }else if(number > 0 && type ==='-'){
      setTotal(total -1)
    }
  };


  return (
    <div>
      <Counter total={total}  click={handleTotal}/>
      <Counter total={total}  click={handleTotal}/>
      <Counter total={total}  click={handleTotal}/>
    </div>
  );
}

