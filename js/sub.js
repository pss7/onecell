
$(function () {

  //자주하는질문
  $('#faqWrap .faqBtn').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().stop().slideUp(300);
    } else {
      $('#faqWrap .faqBtn').removeClass('active');
      $('#faqWrap .faqContentBox').stop().slideUp(300);

      $(this).addClass('active');
      $(this).next().stop().slideDown(300);
    }

  });

  //포인트영역 - 세로 슬라이드
  $('#pointWrap .sliderMain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '#pointWrap .sliderNav',
  });

  $('#pointWrap .sliderNav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '#pointWrap .sliderMain',
    // responsive: [
    //   {
    //     breakpoint: 1025,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: false,
    //       vertical: false,
    //       verticalSwiping: false
    //     }
    //   }
    // ]
  });

  //시스템영역 - 세로 슬라이드
  $('#systemWrap .sliderMain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '#systemWrap .sliderNav'
  });
  $('#systemWrap .sliderNav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '#systemWrap .sliderMain',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerMode: true,
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });





});