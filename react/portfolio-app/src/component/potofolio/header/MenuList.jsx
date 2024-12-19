import React from 'react';

export default function MenuList(menu) {
  return (
    <li>
      <a className={menu.cname} href={menu.href}>{menu.name}</a>
    </li>
  );
}

