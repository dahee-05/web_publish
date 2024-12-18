import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook({list}) {
  
  return (
    <>
      {list && list.map((book, i) =>
        <div className='main-container'>
          <BestBookAvatar rank={i+1} img={book.img} />
          <BestBookContent {...book}/>
          <BestBookButton />
        </div>
      )} 
    </>
  );
}

