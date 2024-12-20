import React from 'react';

export default function WorkMenu({menu, pcnt, click, click2, isHovered }) {
  const handleClickMenu = () => {
    click(menu);
  };
  
  const handleMouseEnter = () => {
    click2(menu);
  };
  
  return (
    <>
      <button className={`category ${isHovered ? 'category--hovered' : ''}`} 
              onClick={handleClickMenu}
              onMouseEnter={handleMouseEnter}>{menu}
        <span className="category__count">{pcnt}</span>
      </button>
    </>
  );
}



