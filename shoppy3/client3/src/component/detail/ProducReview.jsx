import React, { useEffect, useState } from 'react';
import ReviewTop from './ReviewTop.jsx'; 
import ReviewList from './ReviewList.jsx';


export default function ProducReview() {
  return (
    <div className='product-review-content'>
      <ReviewTop />
      <ReviewList />
    </div>
  );
}

