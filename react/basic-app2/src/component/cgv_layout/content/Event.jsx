import EventItem from "./EventItem";

export default function Event(){
  const list =[
    {
      "src":"/images/event2.jpg", 
      "alt":"Event Image", 
      "title":"[CGV]10월 컬쳐 워크", 
      "date":"2024.09.25~2024.10.31"
    },
    {
      "src":"/images/event3.jpg", 
      "alt":"Event Image", 
      "title":"[베놈-라스트댄스]씨네브리핑", 
      "date":"2024.09.25~2024.10.31"
    },
    {
      "src":"https://img.cgv.co.kr/WebApp/contents/eventV4/42888/17332152020130.jpg", 
      "alt":"Event Image", 
      "title":"[모아나2]4DX 스페셜 포스터", 
      "date":"2024.09.25~2024.10.31"
    }
  ];

  return(
    <section>
        <div class="content-title-style">
          <h3>EVENT</h3>
          <button class="total-view-button">전체보기 &gt;</button>
        </div>
        <ul class="content-event-list">
          {list.map((item) => 
            <li>
              <EventItem src={item.src} alt={item.alt} title={item.title} date={item.date}/>
            </li>
          )}
        </ul>
      </section>  
  );
}