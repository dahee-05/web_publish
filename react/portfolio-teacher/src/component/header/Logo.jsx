import React from 'react';

export default function Logo({img, name}) {
  return (
    <div class="header__logo">
      <img class="header__logo__img" src={img} alt="logo" />
      <h1 class="header__logo__title">{name}</h1>
    </div>
  );
}

