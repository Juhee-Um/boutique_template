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

//mobile header toggle active
//1. 아이콘 클릭 -> 2.아이콘에 'on' 클래스 추가(toggle) -> 3.네비게이션 높이 저장 -> 4.'on'클래스가 있을 때 네비게이션 활성화 -> 5.'on'클래스가 없을 때 네비게이션 비활성화

const menuIcon = document.querySelector('.menu-icon'); //메뉴 아이콘 요소 저장
const navi = document.querySelector('.navi'); //네비게이션 박스 요소 저장
//const에 저장하면 램에 저장되고 앞으로 자바에서 가져다 쓸 요소가 됨. 잘 저장되었는지는 console.log로 확인
//구조는 const 이름 = document.querySelector('.html의 클래스 이름')

// console.log('menuIcon', menuIcon);
// console.log('navi', menuIcon); //const 잘 들어갔는지 확인용. 나중에 sql 데이터 가져올 때 안 가져와진다 그러면 콘솔에서 뭐가 잘못되었는지 확인한대~

menuIcon.addEventListener('click', function () {
  this.classList.toggle('on'); //여기서 this는 menuIcon임. menu-icon클릭 할때마다 on 클래스 추가 및 제거

  const navHeight = navi.scrollHeight; //navi 박스의 자식요소를 포함한 높이
  console.log(navHeight);

  if (this.classList.contains('on')) {
    navi.style.height = navHeight + 'px';
  } else {
    navi.style.height = 0;
  }
});
//구조: 저장된 const이름.addEventListner('할 행동', 변화 함수(){})

// If PC size browser, navigation height to normal
window.addEventListener('resize', function () {
  const winWidth = window.outerWidth; // 윈도우 화면 가로 사이즈 저장
  if (winWidth > 980) {
    menuIcon.classList.remove('on');
    navi.style.height = 'auto';
  } else {
    navi.style.height = 0;
  }
});
