import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial.jsx';

export default function Testimonials() {
  const [ testList, setTestimonialList ] = useState([]);

  useEffect(()=> {
    fetch('data/content.json')
      .then((data)=>data.json())
      .then((jsonData)=>setTestimonialList(jsonData.testimonialList))
      .catch((error)=>console.log(error))
  },[]);
    
  return (
    <ul class="testimonials">
      {testList && testList.map( item =>
        <li class="testimonial">
          <Testimonial {...item}/>
        </li>
      )}  
    </ul>
  );
}

