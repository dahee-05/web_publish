import React from 'react';

export default function WorkMenu({menu, pcnt, click, hover, isHovered }) {
  const handleClickMenu = () => {
    click(menu);
  };
  
  const handleMouseEnter = () => {
    hover(menu);
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



