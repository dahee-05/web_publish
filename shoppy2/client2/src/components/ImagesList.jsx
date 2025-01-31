import React from 'react';
import { FaPlus } from "react-icons/fa6";

export default function ImagesList({imgList, className}) {
  const name = className.substring(0,6);

  return (
    <ul className={className}>
      {(name !== 'review') ? (
        imgList && imgList.map((img) =>
          <li><img src={img} alt="image" /></li>
        )
      ):
      (imgList && imgList.map((img,idx) => (
        <li className='review-top-img-metadata'>
          <img src={img} alt="image" />
          { idx === 6 &&
            <>
              <p className="review-top-imglist-metadata"></p>
              <p className="review-top-imglist-metadata2">
                <span><FaPlus/></span>
                <span>더보기</span>
              </p>
            </>}
        </li>
      )))
      }
    </ul>
  );
}

