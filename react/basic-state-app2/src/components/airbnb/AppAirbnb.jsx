import React, { useEffect, useState } from 'react';
import './Airbnb.css';
import AirbnbComponent from './AirbnbComponent.jsx';

export default function AppAirbnb() {
  const [list, setList] = useState([]);

  useEffect(()=> {
    fetch('/data/airbnb.json')
      .then((result)=> result.json())
      .then((jsonData)=> setList(jsonData))
      .catch((error)=>console.log(error))
  },[]);

  return (
    <div className='container'>
      {list.map(item =>
        <AirbnbComponent {...item}/>
      )}
    </div>
  );
}

