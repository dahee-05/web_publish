import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function ContactLinks() {
  const [ contactList, setContactList ] = useState([]);

  useEffect(()=> {
     fetch('/data/content.json')
      .then((data)=> data.json()) 
      .then((jsonData)=> setContactList(jsonData.contactList)) 
      .then((error)=>console.log(error)) 
  },[]);

  return (
    <ul className="contact__links">
      {contactList && contactList.map(item => 
        <li>
          <a className="contact__link" href={item.href}>
            { item.type === 'github' && <FontAwesomeIcon icon={faGithub} />}
            { item.type === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
          </a>
        </li>
      )}
    </ul>
  );
}

