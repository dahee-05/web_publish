import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';

export default function BookList() {
  const [ books, setBook ] = useState([]);
  const [ category, setCategory ] = useState([]);
  const [ type, setType ] = useState('total');
  const [ selectCategory, setSelectCategory ] = useState('default');

  useEffect(() => {
    // fetch(`/data/aladin.json?type=${type}&category=${category}}`)
    fetch(`/data/aladin.json`)
      .then((data)=> data.json())
      .then((jsonData)=> {
          setCategory(jsonData.category);
          
          const filterBooks = jsonData.books.filter((book) => {
            const changeType = type === 'total' || book.type === type;      
            const changeCategory = selectCategory === 'default' || book.category === selectCategory;
            return changeType && changeCategory;
          });
          setBook(filterBooks);
      })
      .catch((error)=>console.log(error))
  },[type, selectCategory]);

  const handleClick = (e) => {
    setType(e.target.value);
  };
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  }; 

  return (
    <>
      <div>
        <input type="radio" name='type' value="total" onClick={handleClick}/>전체
        <input type="radio" name='type' value="domestic" onClick={handleClick}/>국내 
        <input type="radio" name='type' value="overseas" onClick={handleClick}/>국외
        <select name="" id="" className='select-box' onChange={handleChange}>
          <option value="default">선택</option>
          {category.map(item => 
            <option value={item.name}>{item.name}</option>
          )}
        </select>
      </div>
      <ul className='container'>
        {books.map( item =>
          <li className='container-content'>
            <Book {...item}/>
          </li>    
        )}
      </ul>
    </>  
  );
}

