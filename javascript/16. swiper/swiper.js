// script에 type으로 module을 주게되면 window로 호출을 하지 않아도 된다
createSwiper();

function createSwiper(){
  let output =`
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381230469_727.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381229034_727.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231558_727.jpg" alt="">
      </div>
      ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  `;
  document.querySelector('.swiper').innerHTML = output;

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical', // vertical-수직으로 움직임
    // default로 하나씩 보여주는것 
    slidesPerView :1, 
    autoplay: { delay: 2000, disableOnInteraction: false },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};


