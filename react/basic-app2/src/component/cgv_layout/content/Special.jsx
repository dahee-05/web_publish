import SpecialItem from "./SpecialItem.jsx";

export default function Special(){
  const list =[
    {"content":"SUITE CINEMA", "text":"#호텔 컨셉의 프리미엄관"},
    {"content":"CINE & LIVINGROOM", "text":"#신개념 소셜 상영관"},
    {"content":"4DX", "text":"#모션시트 #오감체험"},
    {"content":"CINE de CHEF", "text":"#쉐프가 있는 영화관"}
  ];

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
        {list && list.map(item => 
          <li>
            <SpecialItem content={item.content} text={item.text} />
          </li>
        )}
      </ul>
    </div>
  </section>
   ); 
}