import React, { useState } from 'react';

export default function ReviewListItem() {
  

  return (
    <div className="review-list-item">
      <div className='review-list-info'>
        <div className='product_review_info_left'>
          <p>
             <span>구매옵션 : MEDIUM </span>
          </p>
          <p>
             <span>사이즈 정보 : 169cm</span>
          </p>
        </div>
        <div className='product_review_info_right'>
          <p>
            <span>da********</span>
            <span>2025.01.22</span>
          </p>
        </div>
      </div> {/* END OF review-list-info */}
    </div>
  );
}

