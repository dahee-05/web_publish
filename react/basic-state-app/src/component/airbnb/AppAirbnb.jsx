import { useEffect, useState } from "react";
import AirbnbComponent from './AirbnbComponent.jsx';
import './Airbnb.css';

export default function AppAirbnb(){
  const [airbnbInfo, setAirbnbInfo] = useState([]);

  useEffect(() => {
    fetch('/data/airbnb.json')
      .then((result) => result.json())
      .then((jsonData)=>setAirbnbInfo(jsonData))
      .catch((error) => console.log(error))
  },[]);

  return (
    <ul className="content">
      {airbnbInfo.map((item) =>
        <li className="list">
          <AirbnbComponent {...item}/> 
        </li>
      )}
    </ul>
  );
}  