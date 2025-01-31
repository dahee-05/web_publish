import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewType from './ReviewType.jsx';
import ImageList from '../ImageList.jsx';

export default function ReviewTop() {
  const [reviewList, setReviewList ] = useState([]);

  const reviewImgList = [
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300"    
  ];

  useEffect(()=>{
    axios.get('/data/productReview.json')
         .then((res)=>{
          setReviewList(res.data.csList);
         })
         .catch((error)=>console.log(error))
  },[]);

  return (
    <div className='review-top'>
      <h4>상품 만족도( )</h4>
        <ul className='review-top-list'>
          <li>
            <div>
              <p>구매하신 분들의 상품에 대한 평점입니다.</p>
            </div>
          </li>
            {reviewList&& reviewList.map((item)=>(
              <li>
                <ReviewType {...item}/>
              </li>
            ))}
        </ul>
        <ImageList imgList={reviewImgList} className='review-top-imglist' />
      </div>
  );
}

