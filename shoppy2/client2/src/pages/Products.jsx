import React from 'react';
import ProductList from '../components/ProductList';

export default function Products() {
  return (
    <div className='content'>
      <h3 className='all-products-tilte'>All Product</h3>
        <ProductList />
    </div>
  );
}

