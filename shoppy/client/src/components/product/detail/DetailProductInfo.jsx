import React from 'react';

export default function DetailProductInfo(props) {
  return (
    <>
        <tr>
          <th>{props.info}</th>
          <td>{props.disc}</td>
        </tr>
    </>
  );
}

