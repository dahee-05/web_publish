import React from 'react';

export default function Testimonial(props) {
  return (
    <>
      <li className="testimonial">
        <img className="testimonial__img" src={props.img} alt={props.alt} />
        <div className="testimonial__bubble">
          <p>{props.text}</p>
          <p>
            <a href="#" className="testimonial__bubble__name">{props.name}</a> / {props.company}
          </p>
        </div>
      </li>
    </>
  );
}

