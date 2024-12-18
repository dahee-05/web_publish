import { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook(){
  // const [totalQty, setTotalQty] = useState(0);

  // const list = [
  //   {"img":"https://image.yes24.com/goods/13137546/L"},
  //   {"img":"https://image.yes24.com/goods/108422348/L"},
  //   {"img":"https://image.yes24.com/goods/103495056/L"},
  //   {"img":"https://image.yes24.com/goods/125557465/L"},
  //   {"img":"https://image.yes24.com/goods/11467936/L"}
  // ];

  // const handleChangeQty = (total) =>{ 
  //   setTotalQty(totalQty + total)
  // };

  return(
    <>
      <div style={{'display' : 'flex'}}>
      {/* <div style={{fontSize:'25px'}}>전체 카트 수량 : {totalQty}</div> */}
        <BestBookAvatar />
        <BestBookContent />
        <BestBookButton qtyChange={handleChangeQty}  />
      {/* {list.map((item)=> 
        <div style={{display:'flex'}}>
        <img src={item.img} width="180px"/>
        <BestBookButton click={handleChangeQty} />
        </div>
        )} */}
      </div>
    </>
  );
}