import EventItem from "./EventItem";
import { useEffect, useState } from "react";

export default function Event(){
  const [list, setList] = useState([]);

  useEffect(() => {
     fetch('/data/cgv_content.json')
      .then((result) => result.json()) 
      .then((jsonData) => setList(jsonData.list)) 
      .catch((error)=>console.log(error)) 
  }, []);

  return(
    <section>
        <div class="content-title-style">
          <h3>EVENT</h3>
          <button class="total-view-button">전체보기 &gt;</button>
        </div>
        <ul class="content-event-list">
        {list && list.map((item) => 
            <li>
              <EventItem src={item.src} alt={item.alt} title={item.title} date={item.date}/>
            </li>
          )}
        </ul>
    </section>  
  );
}