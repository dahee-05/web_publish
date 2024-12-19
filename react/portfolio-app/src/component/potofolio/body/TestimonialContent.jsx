import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial.jsx';

export default function TestimonialContent() {
  const [ tmList, setTmList ] = useState([]);

  useEffect(()=> {
      fetch('/data/json/body.json')
        .then((data)=> data.json())
        .then((jsonData)=>setTmList(jsonData.testimonialList))
        .catch((error)=>console.log(error))
      },[]);

  return (
    <section id="testimonial" className="section max-container">
    <h2 className="title">Testimonial</h2>
    <p className="description">See what they say about me</p>
    <ul className="testimonials">
      {tmList.map( item =>
        <Testimonial {...item}/>
      )}
    </ul>
  </section>
  );
}

