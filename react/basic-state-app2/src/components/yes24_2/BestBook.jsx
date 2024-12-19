import React from 'react';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook({list}) {
  return (
    <>
      {list && list.map((book) =>
        <div className='main-container'>
          <BestBookAvatar />
          <BestBookContent {...book}/>
          <BestBookButton />
        </div>
      )}
    </>
  );
}

