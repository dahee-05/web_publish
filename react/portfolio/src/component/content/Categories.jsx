import React, { useEffect, useState } from 'react';
import Category from './Category.jsx';

export default function Categories() {
  const [ categoryList, setCategoryList ] = useState([]);
  const [ projectList, setProjectList ] = useState([]);
  const [ selected, setSelected ] = useState('All');
  
  useEffect(()=> {
    fetch('data/content.json')
      .then((data)=> data.json())
      .then((jsonData)=> {
        setCategoryList(jsonData.categoryList)
        setProjectList(jsonData.projectList)
      })
      .catch((error)=>console.log(error))
  },[]);

  const handleClick = (name) => {
    setSelected(name);
  };

  return (
    <ul class="categories">
      {categoryList && categoryList.map( category => 
        <li>
          <Category name={category.name} 
                    count={category.count}
                    click = {handleClick}
                    style = {category.name === selected ? 'category category--selected' : 'category'}
                  />
        </li>
      )}
    </ul>
  );
}

