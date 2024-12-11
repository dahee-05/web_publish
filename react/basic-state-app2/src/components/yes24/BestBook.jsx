import React, { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook() {
  const [ totalQty, setTotalQty ] = useState(0);

  const list =[
    {"src":"https://image.yes24.com/goods/13137546/L"},
    {"src":"https://image.yes24.com/goods/108422348/L"},
    {"src":"https://image.yes24.com/goods/103495056/L"},
    {"src":"https://image.yes24.com/goods/125557465/L"},
    {"src":"https://image.yes24.com/goods/11467936/L"}
  ];

  const handleChangeQty = (number) => {
    setTotalQty(totalQty + number)
  };

  return (
    <>
      <p style={{fontSize:'25px', fontWeight:'bold'}}>전체 카드 수량 : {totalQty}</p>
        {list.map((item) =>
          <div className='content'>
            <img src={item.src} className='book-img'/>
            <BestBookButton click={handleChangeQty} />
          </div>
        )}
    </>
  );
}

