import React from 'react';
import ProductList from '../component/ProductList.jsx';

export default function Products() {
  return (
    <div className='content'>
      <h3 className='product-title'>All Product</h3>
      <ProductList/>
    </div>
  );
}

