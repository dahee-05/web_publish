import './BestBook.css';
import React, { useEffect, useState } from 'react';
import BestBook from './BestBook.jsx';
import MenuList from './MenuList.jsx';


export default function AppBestSeller() {
  const [ bookList, setBookList] = useState([]);

  useEffect(()=>{
    fetch('/data/yes24.json')
      .then((data)=> data.json())
      .then((jsonDate)=> setBookList(jsonDate))
      .then((error)=>console.log(error))
  },[]);

  console.log(bookList);
  
  return (
    <div className='container'>
      <MenuList />
      <BestBook list={bookList} />
    </div>
  );
}

