import React from 'react';

export default function Home({img, name}) {
  return (
    <section id="home">
      <img className="home__avatar" src={img} alt="portfolio" />
      <h2 className="home__title">Hello <br/> I'm 
        <strong className="home__title--strong">Dream Coder</strong>, {name}
      </h2>
      <p className="home__description">
        A software engineer currently residing in Seoul, South Korea
      </p>
      <a className = "home__contact" href="#contact">Contact Me</a>
  </section>
  );
}

