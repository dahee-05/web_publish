import { useEffect, useState } from 'react';
import EventItem from './EventItem.jsx';

export default function Event(){
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch('data/cgv_content.json')
      .then((result) => result.json())
      .then((jsonData)=> setList(jsonData.list))
      .catch((error) => console.log(error))
  },[])

  return (
    <section>
        <div className="content-title-style">
          <h3>EVENT</h3>
          <button className="total-view-button">전체보기 &gt;</button>
        </div>
        <ul className="content-event-list">
            {list && list.map(item=>(
              <li>
                <EventItem src={item.src} title={item.title} date={item.date}/>
              </li>
            ))};
        </ul>
      </section>
  );
};