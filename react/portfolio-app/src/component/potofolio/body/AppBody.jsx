import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
// import React, { useEffect, useState } from 'react';
import HomeContent from './HomeContent.jsx';
import WorkContent from './WorkContent.jsx';
import AboutMe from './AboutMe.jsx';
import SkillContent from './SkillContent.jsx';
import TestimonialContent from './TestimonialContent.jsx';


export default function AppBody() {

  return (
    <div className=''>
     <main>
      <HomeContent/>
      <AboutMe/>
      <SkillContent />
      <WorkContent />
      <TestimonialContent />
    <aside>
      <a className="arrow--up" href="#"><FontAwesomeIcon icon={faArrowUp} /></a>
    </aside>
  </main>
  </div>
  );
}

