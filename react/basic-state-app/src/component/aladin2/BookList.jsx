import React, { useEffect, useState } from 'react';
import Book from '../aladin/Book.jsx';

export default function BookList() {
  const [ books, setBooks ] = useState([]);
  const [ category, setCategory ] = useState([]);
  const [ type, setType ] = useState('total');
  const [ selectCategoty, setSelectCategoty ] = useState('default');

  useEffect(() => {
    fetch('/data/aladin.json')
      .then((data) => data.json())
      .then((jsonData) => {
        setCategory(jsonData.category) 
        
        const filterBooks = jsonData.books.filter( book => {
          const filterType = type === 'total' || book.type === type;
          const filterCategory = selectCategoty ==='default' || book.category === selectCategoty;
          return filterType && filterCategory; 
        })
        setBooks(filterBooks);

      })  
      .catch((error) => console.log(error));
  },[type, category]);
  
  const handleClick = (event) => {
    setType(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setSelectCategoty(event.target.value)
  };

  return (
    <>
    <div>
      <input type="radio" name='type' value='total' onClick={handleClick} /> 전체 
      <input type="radio" name='type' value='domestic' onClick={handleClick} /> 국내
      <input type="radio" name='type' value='overseas' onClick={handleClick} /> 국외
      <select onChange={handleChangeCategory}>
        <option value="default">선택</option>
        {category.map( item =>
          <option value={item.name}>{item.name}</option>
        )}
      </select>
    </div>
    <ul className='container'>
      {books.map(item =>
        <li className='container-list'>
          <Book img={item.img} title={item.title} type={item.type} />
        </li>
      )}
    </ul>
    </>
  );
}

