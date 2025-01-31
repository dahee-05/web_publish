import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewType from './ReviewType.jsx';
import StartRating from '../StartRating.jsx';
import ImagesList from '../ImagesList.jsx';

export default function ReviewTop() {
  const [ csList, setCsList ] = useState([]);
  const [ names , setNames ] = useState([]);
  const [ values , setValues ] = useState([]);

  const reviewImgList = [
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/10/200/300"    
  ];

  useEffect(()=> {
    axios.get('/data/productReview.json')
         .then((res)=> setCsList(res.data.csList))
        .catch((error)=>console.log(error))
      },[]);
      
  return (
    <div className='review-top'>
    <h4>상품 만족도()</h4>
    <ul className='review-top-list'>
      <li>
        <div>
          <p className='review-top-text'>구매하신 분들의 상품에 대한 평점입니다.</p>
          <StartRating totalRate={4.2} className="start-black-big"/>
        </div>
      </li>
      {csList && csList.map((item)=>
        <li>
          <ReviewType {...item} />
        </li>
      )}
    </ul>
      <ImagesList imgList={reviewImgList} className="review-top-imglist" />
  </div>
  );
}

