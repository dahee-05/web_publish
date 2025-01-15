import React from 'react';

export default function Carts({cartList}) {
  return (
    <table border='1'>
      <tr>
        <th>PID</th>
        <th>SIZE</th>
        <th>QTY</th>
        <th>PRICE</th>
      </tr>
      {cartList.map( item=>
        <tr>
            <td>{item.pid}</td>
            <td>{item.size}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
        </tr>
        )}
    </table>
  );
}

