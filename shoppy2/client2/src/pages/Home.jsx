import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className='content'>
      <div className='banner'>
        <h1>Shop with US</h1>
        <h3>Best Products, High Quality</h3>
      </div>
      <ProductList />
    </div>  
  );
}

