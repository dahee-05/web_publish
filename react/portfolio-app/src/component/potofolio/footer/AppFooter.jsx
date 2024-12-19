import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function AppFooter() {
  return (
    <>
      <h2 className="title">Let's talk</h2>
      <p className="description">jeon.developer.judy@gmail.com</p>
      <ul className="contact__links">
        <li>
          <a className="contact__link" href="http://github.com">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a className="contact__link" href="http://linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <p>Dream Software Engineer Judy - All right reserved</p>
    </>
  );
}

