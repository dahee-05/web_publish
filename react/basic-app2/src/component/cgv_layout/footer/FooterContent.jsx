import { useEffect, useState } from "react";

export default function FooterContent(){
  const [companyInfo, setCompanyInfo ] = useState([]);
  
  useEffect(()=> {
    fetch('/data/cgv_compinfo.json')
      .then((result)=> result.json())
      .then((jsonData)=> setCompanyInfo(jsonData))
      .catch((error)=> console.log(error))
},[])

  return(
    <div class="footer-content">
      <div class="footer-intro">
        <ul>
          {companyInfo.list && companyInfo.list.map( item =>
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