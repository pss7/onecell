
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  //시스템영역 - 세로 슬라이드
  $('#systemWrap .sliderMain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '#systemWrap .sliderNav',
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  //바이오 연구 센터
  $('#researchRoleWrap .tabContent').hide();
  $('#researchRoleWrap .tabContent').first().show();

  $('#researchRoleWrap .tabList li').click(function () {
    $('#researchRoleWrap .tabList li').children().removeClass('active');
    $(this).children().addClass('active');

    let idx = $(this).index();

    $('#researchRoleWrap .tabContent').hide();
    $('#researchRoleWrap .tabContent').eq(idx).show();

  });

  //진단치료장비
  $('.equipmentBox .tabContent').hide();
  $('.equipmentBox .tabContent').first().show();

  $('.equipmentBox .tabList li').click(function () {
    $('.equipmentBox .tabList li').children().removeClass('active');
    $(this).children().addClass('active');

    let idx = $(this).index();

    $('.equipmentBox .tabContent').hide();
    $('.equipmentBox .tabContent').eq(idx).show();

    $('.equipmentBox .tabContent').eq(idx).find('.slick').slick('setPosition');

  });

  $('.equipmentBox .equipmentMainSlide .slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: '.equipmentBox .equipmentSlideList .slick',
  });

  $('.equipmentBox .equipmentSlideList .slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    variableWidth: true,
    asNavFor: '.equipmentBox .equipmentMainSlide .slick',
    prevArrow: $('.equipmentBox .equipmentSlideList .prev'),
    nextArrow: $('.equipmentBox .equipmentSlideList .next'),
  });

  //오시는 길
  $('.locationBox .tabContent').hide();
  $('.locationBox .tabContent').first().show();

  $('.locationBox .tabList li').click(function () {
    $('.locationBox .tabList li').children().removeClass('active');
    $(this).children().addClass('active');

    let idx = $(this).index();

    $('.locationBox .tabContent').hide();
    $('.locationBox .tabContent').eq(idx).show();
  });


});