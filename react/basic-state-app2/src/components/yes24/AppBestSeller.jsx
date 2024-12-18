import React, { useState, useEffect } from 'react';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';
import BestBook from './BestBook.jsx';

export default function AppBestSeller() {
  const [ bookList, setBookList ] = useState([]);
  const [ menuList, setMenuList ] = useState([]);
  const [ category, setCategory ] = useState('total');

  useEffect(()=> {
    fetch('/data/yes24.json')
      .then((data)=> data.json())
      .then((jsonDate)=>{
                  setMenuList(jsonDate.menuList)
                  setBookList(jsonDate.bookList)
                  if(category === 'total'){
                    setBookList(jsonDate.bookList)
                  }else{
                    const filterArray = jsonDate.bookList.filter(book => book.category === category);
                    setBookList(filterArray);
                  }
                })
      .catch((error)=>console.log(error))
  },[category]);

  const handleMenuClickReq2 = (category) => {
    console.log(`AppBestSeller --> ${category}`);
    setCategory(category);
  };
  

  return (
    <div className='container'>
      <MenuList list={menuList} click={handleMenuClickReq2}/>
      <BestBook list={bookList}/>
    </div>
  );
}

