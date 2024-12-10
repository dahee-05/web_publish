import SpecialItem from "./SpecialItem.jsx";
import { useEffect, useState } from "react";

export default function Special(){
  const [specialList, setSpecialList] = useState([]);

  useEffect(() => {
     fetch('/data/cgv_content.json')
      .then((result) => result.json()) 
      .then((jsonData) => setSpecialList(jsonData.specialList) ) 
      .catch((error)=>console.log(error)) 
  }, []);

   return(
    <section>
    <div class="content-title-style">
      <h3>특별관</h3>
      <button class="total-view-button">전체보기 &gt;</button>
    </div>
    <div class="spacial-content-list">
      <div>
        <img src="/images/special1.png" alt="Special Image" width="400px" />
      </div>
      <ul>
        {specialList && specialList.map(item => 
          <li>
            <SpecialItem text1={item.text1} text2={item.text2} />
          </li>
        )}
      </ul>
    </div>
  </section>
   ); 
}