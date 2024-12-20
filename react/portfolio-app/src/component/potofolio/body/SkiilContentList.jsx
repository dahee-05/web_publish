import React from 'react';

export default function SkiilContentList({list}) {
  return (
    <>
      <h3 className="skill__title">{list.name}</h3>
      <ul>
        {list.tlist && list.tlist.map(item =>
          <li>{item.text}</li>
        )}
      </ul>
    </>
  );
}

