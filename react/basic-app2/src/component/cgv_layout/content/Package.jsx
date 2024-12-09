import PackageContent from "./PackageContent.jsx";

export default function Package(){
  const plist =[
    { 
      "title":"패키지",
      "list": [
        {"src":"/images/package.jpg", "alt":"Package", "text":"우리 패키지", "pricae":"62,000원"},
        {"src":"/images/package.jpg", "alt":"Package", "text":"우리 패키지", "pricae":"62,000원"}
      ]
    },  
    { 
      "title":"영화관람권",
      "list": [
        {"src":"/images/ticket.jpg", "alt":"ticket", "text":"CGV 영화관람권", "pricae":"13,000원"},
        {"src":"/images/ticket.jpg", "alt":"ticket", "text":"CGV 영화관람권", "pricae":"13,000원"}
      ]
    },  
    { 
      "title":"기프트카드",
      "list": [
        {"src":"/images/giftcard.jpg", "alt":"giftcard", "text":"PACONNIE A형", "pricae":"금액충전형"},
        {"src":"/images/giftcard.jpg", "alt":"giftcard", "text":"PACONNIE A형", "pricae":"금액충전형"}
      ]
    },  
  ];

  return(
    <section class="package-content-list"> 
      {plist && plist.map(object =>
        <PackageContent title={object.title} list={object.list}/>
      )}
    </section>
  );
}