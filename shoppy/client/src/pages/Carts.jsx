import React from 'react';

export default function Carts({cartList}) {
  return (
    <div className='content'>
      <h1>My Cart !!</h1>
        <table border='1'>
         <tr>
            <th>Pid</th>
            <th>Size</th>
            <th>Qty</th>
            <th>Price</th>
         </tr>
          {cartList.map((item) =>
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

