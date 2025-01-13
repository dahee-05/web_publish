import React from 'react';

export default function AppHeader() {
  return (
    <>
      <div className='header-top'>
        <div className='header-top-logo'>
          <a href='/cgv/index.html' target='_parent'>
            <img src="/images/cgvLogo.png" alt="로고이미지" />
          </a>
          <span>DEEP DIVE SPACE</span>
        </div>

        <div className='header-top-card'>
          <img src="/images/header_card_img.png" alt="Card Image" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" target='_parent' className='header-menu-icon'>
                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인" />
                <span>로그인</span>
              </a>
            </li>
            <li>
              <a href="#" target='_parent' className='header-menu-icon'>
                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입" />
                <span>회원가입</span>
              </a>
            </li>
            <li>
              <a href="#" target='_parent' className='header-menu-icon'>
                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="MY CGV" />
                <span>MY CGV</span>
              </a>
            </li>
            <li>
              <a href="#" target='_parent' className='header-menu-icon'>
                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png" alt="고객센터" />
                <span>고객센터</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header-bottom'>
        <div className='header-bottom-content'>
          <ul>
            <li>
              <a href="#">영화</a>
              <dl>
                <dt>영화</dt>
                <dt>무비차트</dt>
                <dt>아트하우스</dt>
                <dt>ICECON</dt>
              </dl>
            </li>
            <li>
              <a href="#">극장</a>
              <dl>
                <dt>극장</dt>
                <dt>CGV 극장</dt>
                <dt>특별관</dt>
              </dl>
            </li>
            <li>
              <a href="#">예매</a>
              <dl>
                <dt>예매</dt>
                <dt>빠른예매</dt>
                <dt>상영스케줄</dt>
                <dt>English Ticketing</dt>
                <dt>English Schedule</dt>
              </dl>
            </li>
            <li>
              <a href="#">스토어</a>
              <dl>
                <dt>스토어</dt>
                <dt>패키지</dt>
                <dt>영화관람권</dt>
                <dt>기프트카드</dt>
                <dt>콤보</dt>
                <dt>팝콘</dt>
                <dt>음료</dt>
                <dt>스낵</dt>
                <dt>플레이존</dt>
                <dt>씨네샵 </dt>
              </dl>
            </li>
            <li>
              <a href="#">이벤트</a>
              <dl>
                <dt>이벤트</dt>
                <dt>SPECIAL</dt>
                <dt>영화/예매</dt>
                <dt>맴버십/CLUB</dt>
                <dt>CGV 극장별</dt>
                <dt>제휴할인</dt>
                <dt>당첨자 발표</dt>
                <dt>종료된 이벤트</dt>
              </dl>
            </li>
            <li>
              <a href="#">혜택</a>
              <dl>
                <dt>혜택</dt>
                <dt>CGV 할인정보</dt>
                <dt>CLUB 서비스</dt>
                <dt>VIP 라운지</dt>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

