// Button Hover Effect

const btnObj = {
  // DOM 컨트롤 클래스 요소 객체 정의
  commonBtn: '.common-btn', // 버튼 요소
  wArrow: '.white', // 흰색 화살표 요소
  bArrow: '.black', // 검은색 화살표 요소
};

const swiperObj = {
  commonBtn: '.swiper-navigation div', // 버튼 요소
  wArrow: '.arrow-white', // 흰색 화살표 요소
  bArrow: '.arrow-black', // 검은색 화살표 요소
};

// 호버 시 화살표 색상 교체 함수 정의
function btnHoverEffect(obj) {
  const hoverBtn = document.querySelectorAll(obj.commonBtn);

  hoverBtn.forEach((btn) => {
    const wArrow = btn.querySelector(obj.wArrow);
    const bArrow = btn.querySelector(obj.bArrow);

    btn.addEventListener('mouseenter', function () {
      wArrow.style.display = 'block';
      bArrow.style.display = 'none';
    });

    btn.addEventListener('mouseleave', function () {
      wArrow.style.display = 'none';
      bArrow.style.display = 'block';
    });
  });
}

btnHoverEffect(btnObj);
btnHoverEffect(swiperObj);

// Swiper plugin codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
