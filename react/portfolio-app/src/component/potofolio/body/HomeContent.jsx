import React, { useEffect, useState } from 'react';

export default function HomeContent() {
    const [ homeData, setHomeData ] = useState({});
  
    useEffect(()=> {
      fetch('/data/json/body.json')
        .then((data)=> data.json())
        .then((jsonData)=> setHomeData(jsonData.homeData))
        .catch((error)=>console.log(error))
    },[]);

  return (
    <section id={homeData.id}>
      <img className="home__avatar" src={homeData.img} alt="portfolio" />
      <h2 className="home__title">Hello<br/>I'm
      <strong className="home__title--strong">Dream Coder</strong>, Judy
      </h2>
      <p className="home__description">{homeData.text}</p>
      <a className = "home__contact" href="#contact">Contact Me</a>
    </section>
  );
}

