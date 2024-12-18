import React from 'react';

export default function BestBookContent(list) {
  
  return (
    <>
      <div className='container-content'>
        <div className='container-content-tags'>
          { list.suggest && <span>강력추천</span>}
          { list.today && <span>오늘의책</span>}
          { list.text && <span className='container-content-text'>2024 노벨문학상 수상작가</span>}
        </div>
        <div className='container-content-text'>
          <span>[{list.type}]</span>
          <span>{list.title}</span>
        </div>
        <div className='container-content-text'>
          <span>{list.author} 저 |</span>
          <span>&nbsp;{list.company} |</span>
          <span>&nbsp;{list.date}</span>
        </div>
        <div className='container-content-text'>
          <span>{list.price}원</span>
          <span>({list.pSale} 할인)</span>
          <span>p {list.point}원</span>
        </div>
      </div>
  </>  
  );
}

