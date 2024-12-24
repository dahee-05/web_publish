import React from 'react';

export default function Category({name, count, style, click}) {
  return (
    <button class={style}
            onClick={()=>{click(name)}}  >{name}
      <span class="category__count">{count}</span>
    </button>
  );
}

