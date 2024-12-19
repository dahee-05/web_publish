import React from 'react';

export default function WorkMenu({menu, pcnt, click}) {
  const handleClickMenu = () => {
    click(menu);
  };

  return (
    <>
      <button className="category category--selected" onClick={handleClickMenu}>{menu}
        <span className="category__count">{pcnt}</span>
      </button>
    </>
  );
}

