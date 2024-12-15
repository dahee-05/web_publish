import React, { useState } from 'react';
import './Olive.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import MenuList from './header/MenuList.jsx';
import ProductList from './body/ProductList.jsx';

export default function AppOlive() {
  const [ total , setTotal ] = useState(0);
  const [ cartList, setCartList ] = useState([]);

  const handleTotalCart = (productId) =>{
    setCartList([...cartList, productId]);
  };
  console.log(`length--->${cartList.length}`);

  return (
    <>
      <Header>
        <MenuList cartTotal={cartList.length}/>
      </Header>
      <Body>
        <ProductList productId={handleTotalCart}/>
      </Body>
      {/* <Footer>
      </Footer> */}
    </>
  );
}

/**
 * setCartList([...cartList, productId]):
 * cartList를 업데이트하지만, 업데이트된 값은 바로 반영되지 않음
 * React는 상태 변경을 큐에 넣고, 다음 렌더링 때 적용
 * -> andleTotalCart 함수 내부에서 setCartList를 호출한 직후 cartList.length를 참조하면, setCartList가 상태를 업데이트하더라도 이전 상태의 값이 반환 -> 의도한 값이 나오지 않음
 * etTotal(cartList.length)를 함수 밖으로 뺐을 때 안 되는 이유
 * :React의 상태 업데이트는 비동기적이기 때문에, setCartList가 업데이트된 상태를 렌더링에 반영해야만 새로운 cartList 길이를 얻을 수 있음 -> 함수 밖에서는 React가 상태 변경 후 컴포넌트를 다시 렌더링하지 않기 때문에, 업데이트된 cartList 값을 반영할 방법이 없음 
 * > setCartList()는 리엑트의 상태 변경 메서드로 상태가 변경되면 리엑트는 그 상태를 사용하는 컴포넌트를 재 렌더링 함 > 함수가 아닌 상태 변경이 리엑트의 렌더링 과정을 트리거 하는 역할
 * 
 * handleTotalCart 함수가 실행되는 순간에는 cartList가 아직 업데이트되지 않았습니다. 렌더링은 이후 React가 상태를 반영하고 컴포넌트 함수를 다시 호출하는 과정에서 이루어짐 
 */

// cartList의 주소값을 가지고 넣어준 값을 가지게 됨/cartList =id의 값이 됨 ****
// setCartList([]) 형태로 넣어줘야함 -> setCartList([...cartList, id])
// cartList.push(id);  //cartList배열에 들어가는 값
