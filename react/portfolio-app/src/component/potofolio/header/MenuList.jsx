import React from 'react';
import {Link} from 'react-router-dom';

export default function MenuList(props) {
  return (
    <li>
      <li>
        <a className={props.cname} href={props.href}>{props.name}</a>
      </li>
    </li>
  );
}
