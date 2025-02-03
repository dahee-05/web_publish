import React, { useState } from 'react';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import ReviewListItem from './ReviewListItem.jsx';

export default function ReviewList() {
  const [ tabName, setTabName ] = useState('newest');
    const tabList = [
      {"title":"newest", "name":"최신순"},
      {"title":"highest", "name":"평점 높은순"},
      {"title":"lowest", "name":"평점 낮은순"},
      {"title":"recommended", "name":"추천순"}
    ];
    // console.log('tabName-->',tabName);
    return (
      <div>
        <ul className='review-list-title'>
          {tabList && tabList.map((tab,idx) => (
            <li className={(tabName === tab.title)? 'active':''}>
              <button type='button' onClick={()=>{setTabName(tab.title)}}>{tab.name}</button>
              {idx === 3 && <HiOutlineQuestionMarkCircle />}
            </li>
          ))}
        </ul>
        <ReviewListItem/>
      </div>
    );
  }
  