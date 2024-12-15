import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {
  const [ producjList, setProducjList ] = useState([]); // 전체 상품 리스트
  const [ list, setList ] = useState([]); //화면출력용 리스트
  const [ type, setType ] = useState(''); 

  useEffect(()=> {
    fetch('/data/olive.json')
      .then((result)=> result.json())
      .then((jsonData)=> {
        setProducjList(jsonData)
        setList(jsonData)
      })
      .then((error)=>console.log(error))
  },[]); //type을 여기서 선언 가능, 실시간으로 데이터가 바뀔 경우 여기서 실행
  
  const totalCart = (id) => {
    cart(id);   // AppOlive의 handleCartApp 함수 호출
  };
  
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  
  useEffect(()=>{
      const list = producjList.filter((item)=>{ // 결과: 새로운 배열 list = [{item},{item}...]
        if(type ==='total'){
          return item; 
        }else if(type ==='sale' && item.isSale){
          return item; 
        }else if(type ==='coupon' && item.isCoupon){
          return item;
        }else if(type ==='today' && item.isToday){
          return item;
        }
      });
      setList(list);
  },[type]);

  return (
    <div className='pcontainer'>
      <div className='radio-btn'>
        <input type='radio' name='type' value="total" onClick={handleTypeChange} />전체
        <input type='radio' name='type' value="sale"  onClick={handleTypeChange}/>세일        
        <input type='radio' name='type' value="coupon" onClick={handleTypeChange}/>쿠폰
        <input type='radio' name='type' value="today"  onClick={handleTypeChange}/>오늘드림
      </div>
      <ul className='product-list-container'>
        {list && list.map( item =>
          <li className='list-content'>
            <Product {...item} totalCart={totalCart} />
          </li>
        )}
      </ul>
    </div>
  );
}

/**
 * imput타입은 객체에 자동으로 이벤트를 넘겨준다
 * console.log(event.target.value);
 * 넘겨주는 이벤트는 '.'형식으로 -> {} -이벤트는 오브젝트 리터럴 타입
 * 
 * 버블소팅 ***
 * producjList에서 필터링으로 진행시 데이터가 줄어듬 -> 필터링 재실행시 줄어든 데이터로 필터링 진행
 * -> 실시간으로 db갔다올 경우 문제없지만 그렇지 않은 경우 출력할 배열을 담을 리스트를 하나더 만들어야 한다.
 */