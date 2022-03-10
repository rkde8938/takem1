
// 카피라이트 현재 년도 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재의 년도 (2022)


// 썸네일 세로 사이즈 조절
// AOS.init();
let thumbHeight = function () {
    $('.content').each(function () {
      let thumbWidth = $(this).width();
      $(this).height(thumbWidth * 0.666);
      // $(this).attr('data-aos', 'fade-in');
    });
}

thumbHeight();
$(window).resize(thumbHeight);


// 요소 AOS 일괄 적용
AOS.init({
  disable: false, // 'phone', 'tablet', 'mobile'
});
// $(document).ready(function () {
//   $('.content').attr('data-aos', 'fade-up')
// });