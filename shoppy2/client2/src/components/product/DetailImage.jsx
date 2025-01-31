import React from 'react';
import ImagesList from '../ImagesList.jsx';

export default function DetailImage({imgList}) {
  // console.log('entriesImg',entriesImg);
  
  
  return (
    <div className='detail-images'>
      <img src="/images/product_detail1.jpg"  className='holidays-notice' alt="holidays-notice"/>
      <ImagesList imgList={imgList} className="product-images"/>
    </div>
  );
}


