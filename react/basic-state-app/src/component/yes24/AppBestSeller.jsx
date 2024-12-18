import './BestBook.css';
import './Menu.css';
// import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';
import BestBook from './BestBook.jsx';
import { useEffect, useState } from 'react';

export default function AppBestSeller(){
  const [mList, setMList] = useState([]);
  const [ bookList, setBookList ] = useState([]);
  const [ category, setCategory ] = useState('total');

  useEffect(()=> {
    fetch('/data/yes24.json')
      .then((data)=> data.json())
      .then((jsonDate)=> {
                    setMList(jsonDate.menuList)
                    setBookList(jsonDate.bookList)
                    if(category === 'total'){
                      setBookList(jsonDate.bookList);
                    }else{ // category 값에 따라 필터링 후 setBookList에 추가
                      const filterArray = jsonDate.bookList.filter(book => book.category === category);
                      setBookList(filterArray);
                    } 
                  })
      .catch((error)=>console.log(error))
  },[category]);
  
  const handleMenuClickReq2 = (category) => {
    console.log(`AppBestSeller ---> ${category}`);
    setCategory(category);
  };
  // console.log(`category ---> ${category}`);

  return(
    <div className='container'>
      <MenuList list={mList} click ={handleMenuClickReq2}/>
      <BestBook list={bookList}/>
    </div>
  );
}





