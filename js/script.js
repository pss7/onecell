
$(function () {

  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });

  //상단으로 이동
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });

  $("#top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //헤더
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  //모바일메뉴
  $('#headerWrap .mobileBtn').click(function () {
    $('#headerWrap .mobileMenuBox').addClass('active');
    $('#headerWrap .mobileBG').fadeIn();
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $('#headerWrap .mobileMenuBox').removeClass('active');
    $('#headerWrap .mobileBG').fadeOut();
  });

  /* 푸터 */
  $('#footerWrap .consulting').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(this).addClass('active');
      $(this).next().slideDown();
    }
    return false;
  });





});
