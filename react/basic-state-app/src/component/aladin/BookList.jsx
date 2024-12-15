import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';

export default function BookList() {
  const [ books, setBooks ] = useState([]);
  const [ category, setCategory ] = useState([]);
  const [ type, setType ] = useState('total');
  const [ selectCategoty, setSelectCategoty ] = useState('default');

  useEffect(()=>{
      fetch('/data/aladin.json')
        .then((result)=> result.json())
        .then((jsonData)=> {
            setCategory(jsonData.category);

            const filterBook = jsonData.books.filter(book => {
              const filterType = type ==='total' || book.type === type; 
              const filterCategory = selectCategoty === 'default' || book.category === selectCategoty ; 
              return filterType && filterCategory ;
            })
            setBooks(filterBook);
          })
          .catch((error)=>console.log(error));
          console.log(`selectCategoty-->${selectCategoty}`);
  },[type, selectCategoty]);

  const handleClick = (event) => {
    setType(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setSelectCategoty(event.target.value);
  };
  return (
    <>
      <div>
        <input type="radio" name="type" value="total" onClick={handleClick}/>전체
        <input type="radio" name="type" value="domestic" onClick={handleClick}/>국내도서
        <input type="radio" name="type" value="overseas" onClick={handleClick} />국외도서
        <select onChange={handleChangeCategory}>
          <option value='default'>선택</option>
          {category && category.map( item =>
            <option value={item.name}>{item.name}</option>
          )}
        </select>
      </div>
      <ul className='container'>
        {books && books.map(book =>
          <li className='container-list'>
            <Book img={book.img} title={book.title} type={book.type}/>
          </li>
        )}
      </ul>
    </>
  );
}

