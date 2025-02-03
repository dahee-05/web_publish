import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className='content'>
      <div className='banner'>
        <h3>Shop with US</h3>
        <p>Best Products, High Quality</p>
      </div>
      <a href='http://localhost:9001/'>서버 테스트</a>
      <ProductList />
    </div>  
  );
}

