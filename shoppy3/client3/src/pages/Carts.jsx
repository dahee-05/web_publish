import React from 'react';

export default function Carts({cartList}) {
  console.log('cartList-->',cartList);
  
  return (
    <div className='content'>
      <h3>MyCart</h3>
      <table border='1'>
        <tr>
          <th>Pid</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
        { cartList.map(item =>
          <tr>
            <td>{item.pid}</td>
            <td>{item.size}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
          </tr>
        )}
      </table>
    </div>
  );
}

