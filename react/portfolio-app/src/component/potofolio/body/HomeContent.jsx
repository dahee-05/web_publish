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
      <h2 className="home__title">{homeData.text1}<br/>{homeData.text2} 
      <strong className="home__title--strong">{homeData.text3}</strong>{homeData.text4}
      </h2>
      <p className="home__description">{homeData.text5}</p>
      <a className = "home__contact" href="#contact">{homeData.text6}</a>
    </section>
  );
}

