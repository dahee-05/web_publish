import React from 'react';
import ProductList from '../component/ProductList.jsx';

export default function Home() {
  return (
    <div className='content'>
      <div className='banner'>
        <h1>Shop with US</h1>
        <h3>Best Products, High Quality</h3>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

