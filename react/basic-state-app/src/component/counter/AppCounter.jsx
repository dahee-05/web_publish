import Counter from './Counter.jsx';
import { useState } from 'react';
import './Counter.css';

export default function AppCounter(){
  const [totalNumber, setTotalNumber] = useState(0); 

  //totalNumber 변경/ 자식인 counter 컴포넌트에서 이벤트가 발생했을 때 실행
  const handleClick = (number, type) => {
    if(number < 10 && type === '+'){
      setTotalNumber(totalNumber + 1);
    }else if(number > 0 && type === '-'){
      setTotalNumber(totalNumber - 1);
    }
  }

  return(
    <div className="counter-container">
      <Counter total={totalNumber} click={handleClick} />
      <Counter total={totalNumber} click={handleClick} />
    </div>  
  );
}

/*
 * 자식 컴포넌트의 변경이 있을 경우 부모 컴포넌트가 알고 있어야 total값 변경 가능 
 * handleClick 부모가 가진 함수를 자식에게 넘겨줘서 자식이 onclick이벤트를 발생시키면 부모가 알 수 있게 됨 ****
 */
