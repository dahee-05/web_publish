import React from 'react';

export default function HeaderLogo({img, name, alt}) {
  return (
    <div className="header__logo">
      <img className="header__logo__img" src={img} alt={alt} /> 
      <h1 className="header__logo__title">{name}</h1>
    </div>
  );
}

