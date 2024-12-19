import React from 'react';

export default function TestimonialContent() {
  return (
    <section id="testimonial" className="section max-container">
    <h2 className="title">Testimonial</h2>
    <p className="description">See what they say about me</p>
    <ul className="testimonials">
      <li className="testimonial">
        <img className="testimonial__img" src="/data/images/testimonials/people1.webp" alt="people1" />
        <div className="testimonial__bubble">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?</p>
          <p><a href="#" className="testimonial__bubble__name">James Kim</a> / Google</p>
        </div>
      </li>
      <li className="testimonial">
        <img className="testimonial__img" src="/data/images/testimonials/people2.webp" alt="people2" />
        <div className="testimonial__bubble">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore necessitatibus sequi id obcaecati, assumenda quam corrupti. Numquam blanditiis praesentium, similique autem, accusamus debitis cupiditate, tempora officiis sed inventore nihil incidunt.</p>
          <p><a href="#" className="testimonial__bubble__name">Smith Park</a> / Samsung</p>
        </div>
      </li>
      <li className="testimonial">
        <img className="testimonial__img" src="/data/images/testimonials/people3.webp" alt="people3" />
        <div className="testimonial__bubble">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nulla incidunt autem ullam, commodi in impedit repellat exercitationem provident at recusandae doloremque pariatur temporibus hic blanditiis explicabo voluptatibus neque aliquam.</p>
          <p><a href="#" className="testimonial__bubble__name">Anna Jin</a> / Samsung</p>
        </div>
      </li>
    </ul>
  </section>
  );
}

