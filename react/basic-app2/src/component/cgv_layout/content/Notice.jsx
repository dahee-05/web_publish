
export default function Notice(){
  return(
    <section className="notice-content-list">
      <div className="notice-content-border">
        <div className="notice-content"> 
          <div className="notice"> 
            <span className="notice-subtilte">공지사항</span>
            <span>
              <a href="">[시스템점검]iOS18 업데이트 관련 예매 서비스...</a>
            </span>
            <button className="package-view-button">더보기</button>
          </div>

          <div className="customer-service"> 
          <p className="customer-subtilte">고객센터</p>
            <div>
              <p><b>1544-1122</b></p>
              <p>고객센터 운영시간 (평일 09:00~18:00)</p>
              <p>업무시간 외 자동응답 안내 가능합니다.</p>
            </div>  
          </div>

          <div className="notice-button"> 
            <button>FAQ</button>
            <button>1:1문의</button>
            <button>대관/단체 문의</button>
          </div>
        </div>

        <div className="app-download">
          <h3>앱 다운로드</h3>
          <p>CGV앱에서 더 편리하게 이용하세요</p>
          <img src="/images/img_qrcode.gif" alt="QR" />
          <p>QR코드를 스캔하고 <br />앱설치 페이지로 바로 이동하세요</p>
        </div>
      </div>
      <div className="notice-content-img">
        <img src="/images/sale_image.png" alt="CGV*Bugs" width="150px" />
      </div>
    </section>
  );
}