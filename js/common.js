// 카피라이트 현재 년도 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재의 년도 (2022)


// 썸네일 세로 사이즈 조절
let thumbHeight = function () {
    $('.content').each(function () {
    let thumbWidth = $(this).width();
    $(this).height(thumbWidth * 0.666)
  });
}

thumbHeight();
$(window).resize(thumbHeight);