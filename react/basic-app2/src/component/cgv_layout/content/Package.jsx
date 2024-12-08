

export default function Package(){
  return(
    <section class="package-content-list"> 
      <div class="package-content-border">
        <div> 
          <span class="package-title-font">패키지</span>
          <button class="package-view-button">더보기</button>
        </div>
        <ul>
          <li>
            <img src="/images/package.jpg" alt="Package" width="80px" />
            <div>
              <p>우리 패키지</p>
              <p>62,000원</p>
            </div>
          </li>
          <li>
            <img src="/images/package.jpg" alt="Package" width="80px" />
            <div>
              <p>우리 패키지</p>
              <p>62,000원</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}