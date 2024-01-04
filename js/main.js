//<Ch 10. 스타벅스 예제> 12. 헤더와 드롭다운 메뉴 - 전역배지(GSAP) + 33.페이지 상단으로 이동(ScrollTo)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간(=sec), 옵션(=객체데이터 형태));
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //상단이동 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //상단이동 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//_.throttle(함수, 시간(meleesec))

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

//<Ch 10. 스타벅스 예제> 15. 순차적 애니메이션 - 순차적으로 요소 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(=sec), 옵션(=객체데이터 형태));
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

//<Ch 10. 스타벅스 예제> 18. 요소 슬라이드 - 수직 슬라이드(swiper)
// new Swiper(선택자, 옵션(=객체데이터 형태))
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
// new Swiper(선택자, 옵션(=객체데이터 형태))
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//<Ch 10. 스타벅스 예제> 31.다중 요소 슬라이드
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

//<Ch 10. 스타벅스 예제> 22. 요소 슬라이드 - 슬라이드 영역 토글

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function () {
    isHidePromotion = !isHidePromotion  //'!'는 반대의 뜻을 반환하라 (true-> false, false-> ture)
    if(isHidePromotion) {
      //숨김처리
      promotionEl.classList.add('hide');
    } else {
      //보임처리
      promotionEl.classList.remove('hide');
    } 
  });


//<Ch 10. 스타벅스 예제> 26. 유튜브 영상 배경- 반복 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션(객체 데이터));
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
      y: size,  //y축으로 size만큼 이동
      repeat: -1, //무한반복
      yoyo: true,  //처음자리로 이동
      ease: Power1.easeInout,  // 타이밍 처리
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



//<Ch 10. 스타벅스 예제> 29.스크롤 위치 계산 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({  // 감시할 장면(Scene)을 추가
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')  // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});


