import React, { useState } from 'react';
import Category from './Category.jsx';

export default function Categories() {
  const [ selected, setSelected ] = useState('All');

  const categoryList = [
    {
      "name":"All",
      "count":"8"
    },
    {
      "name":"Front-end",
      "count":"4"
    },
    {
      "name":"Back-end",
      "count":"2"
    },
    {
      "name":"Mobile",
      "count":"2"
    }
  ];

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

