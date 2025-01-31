import React from 'react';
import { FaPlus } from "react-icons/fa6";

export default function ImageList({imgList, className}) {
  console.log('check--->',imgList,className);
  
  return (
    <div>
      <ul className='review-imglist-content'>
        { className === 'review-top-imglist' && 
          imgList && imgList.map((image, idx)=>(
          <li className={className}>
            <img src={image} alt="image" />
            {idx === 6 &&
              <>
                <p className='review-top-img-metadata'></p>
                <p className='review-top-imglist-metadata'>
                  <span><FaPlus/></span>
                  <span>더보기</span>
                </p>
              </> 
            }
          </li>
        ))}
      </ul>        
    </div>
  );
}

