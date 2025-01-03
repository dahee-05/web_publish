import React, { useState } from 'react';

export default function SectionWrap({id, title, description, children}) {
  // const [ list, setList] = useState([]);

  return (
    <section id={id} className="section max-container">
      <h2 className="title">{title}</h2>
      {id === 'skill' && <h2 class="description">Skills & Attribute</h2>}
      {id === 'skill' ? <p>{description}</p>
                :<p className='description'>{description}</p> }
      {children}
    </section>
  );
}

