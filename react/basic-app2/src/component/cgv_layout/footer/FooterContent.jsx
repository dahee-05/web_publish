
export default function FooterContent(){
  const companyInfo ={
    "address" : "(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)",  
    "ceo" : "홍길동",  
    "list" : [
              {"text":"회사소개"},
              {"text":"지속가능경영"},
              {"text":"IR"},
              {"text":"채용정보"},
              {"text":"광고/제휴/출점문의"},
              {"text":"이용약관"},
              {"text":"편성기준"},
              {"text":"개인정보처리방침"},
              {"text":"법적고지"},
              {"text":"이메일주소무단수집거부"},
              {"text":"윤리경영"},
              {"text":"사이버감사실"}
         ]   
    };

  return(
    <div class="footer-content">
      <div class="footer-intro">
        <ul>
          {companyInfo.list.map( item =>
            <li><a href="#">{item.text}</a></li>
          )}
        </ul>
      </div>
      <p class="p">{companyInfo.address}</p>
      <p>
        대표이사 : {companyInfo.ceo}, 사업자등록번호 : 123-45-45789, 통신판매업신고번호 : 2017-서울용산-1234 사업자정보확인
      </p>
      <p>호스팅사업자 : 홍길동네트웍스, 대표이메일 : honggildong@naver.com</p>
      <p class="p2">
        <a href="/cgv/admin/admin_main.html"  target="_parent">©</a> CJ CGV. All Rights Reserved
      </p>
    </div>  
  );
}