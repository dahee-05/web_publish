import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faMobile, faServer} from '@fortawesome/free-solid-svg-icons';


export default function AboutContent(props) {
   const iconMap={faCss3Alt: faCss3Alt,faMobile: faMobile, faServer: faServer};
   
  return (
    <>
      <FontAwesomeIcon icon={iconMap[props.icon]} className="major__icon" />
      <p className="major__title">{props.type}</p>
      <p>{props.text}</p>
    </>
  );
}

