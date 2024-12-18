import { useEffect, useState } from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook({list}){

  return(
    <>
      {list && list.map( (book, i) => 
        <div style={{'display' : 'flex', 'margin-bottom':'10px'}}>
          <BestBookAvatar  rank={i+1} img={book.img}/>
          <BestBookContent 
                suggest= {book.suggest}
                today = {book.today}
                text = {book.text}
                type = {book.type}
                title = {book.title}
                author = {book.author}
                company = {book.company}
                pub_date = {book.pub_date}
                price = {book.price}
                perSale = {book.perSale}
                point = {book.point}
          />
          <BestBookButton />
        </div>
      )}  
    </>
  );
}