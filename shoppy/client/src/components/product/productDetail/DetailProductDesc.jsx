import React from 'react';

export default function DetailProductDesc(props, idx, isMoreView) {
  return (
    <>
      <li key={props.idx}>
        <p className='product_description_title'>{props.title}</p>
        {props.desc.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </li>
    </>
  );
}

