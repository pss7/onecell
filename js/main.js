
$(function () {





  //연구소 영역 
  $('#laboratoryWrap .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('#laboratoryWrap .comTitleBox .box').fadeOut();
  });
  $('#laboratoryWrap .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#laboratoryWrap .comTitleBox .box').fadeIn();
  });

  $('#laboratoryWrap .slick').slick({
    autoplay: false,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 3500,
    speed: 1100,
    fade: true,
    adaptiveHeight: true
  });

  //의료진영역
  let $wrap = $('#doctorsWrap');
  let $slider = $wrap.find('.slick');
  let $texts = $wrap.find('.doctorsInfoBox .textBox');
  let $btns = $wrap.find('.doctorsBtnBox .btn');

  function setActive(i) {
    $texts.stop(true, true).removeClass('active').fadeOut();
    $texts.eq(i).stop(true, true).addClass('active').fadeIn();

    $btns.removeClass('active');
    $btns.eq(i).addClass('active');
  }

  $slider.on('init', function (event, slick) {
    setActive(0);
  });

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $texts.eq(currentSlide).stop(true, true).fadeOut();
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
    setActive(currentSlide);
  });

  $btns.on('click', function () {
    let index = $(this).index();
    $slider.slick('slickGoTo', index);
  });

  $slider.slick({
    variableWidth: true,
    autoplay: false,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplaySpeed: 3500,
    speed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        }
      }
    ]
  });

  //프로모션 영역 
  $('#promotionWrap .slick').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5500,
    speed: 1300,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: $('#promotionWrap .control .prev'),
    nextArrow: $('#promotionWrap .control .next'),
  });




  // $(window).load(function () {
  //   AOS.init({
  //     duration: 2000
  //   });
  // });

  // $('#mainSlideWrap .mainSlickBox .slick01').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   $('#mainSlideWrap .mainSlickBox .textBox p').removeClass('active');
  // });
  // $('#mainSlideWrap .mainSlickBox .slick01').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   $('#mainSlideWrap .mainSlickBox .textBox p').addClass('active');
  // });

  // $('#mainSlideWrap .mainSlickBox .slick01').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   let i = (currentSlide ? currentSlide : 0) + 1;
  //   $('#mainSlideWrap .mainSlickBox .slick01 .count').html('<em>' + i + '</em> / ' + slick.slideCount);
  //   $("#mainSlideWrap .mainSlickBox .textBox p").addClass("active");
  // });

  // $('#mainSlideWrap .mainSlickBox .slick01').slick({
  //   autoplay: false,
  //   arrows: true,
  //   dots: false,
  //   accessibility: false,
  //   draggable: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   zIndex: 1000,
  //   pauseOnHover: false,
  //   autoplaySpeed: 5000,
  //   speed: 1300,
  //   prevArrow: $('#mainSlideWrap .mainSlickBox .slick01 .prev'),
  //   nextArrow: $('#mainSlideWrap .mainSlickBox .slick01 .next'),
  // });


  // $('#mainSlideWrap .noticeBox .slick02').slick({
  //   autoplay: false,
  //   arrows: true,
  //   dots: false,
  //   accessibility: false,
  //   draggable: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   zIndex: 1000,
  //   pauseOnHover: false,
  //   autoplaySpeed: 3000,
  //   speed: 1300,
  //   vertical: true,
  //   prevArrow: $('#mainSlideWrap .noticeBox .prev'),
  //   nextArrow: $('#mainSlideWrap .noticeBox .next'),
  // });


  // $('#mainSlideWrap .mainBannerBox .slick03').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   let i = (currentSlide ? currentSlide : 0) + 1;
  //   $('#mainSlideWrap .mainBannerBox .count').html('<em>' + i + '</em> / ' + slick.slideCount);
  // });

  // $('#mainSlideWrap .mainBannerBox .slick03').slick({
  //   autoplay: false,
  //   arrows: true,
  //   dots: false,
  //   accessibility: false,
  //   draggable: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   zIndex: 1000,
  //   pauseOnHover: false,
  //   autoplaySpeed: 5000,
  //   speed: 1300,
  //   prevArrow: $('#mainSlideWrap .mainBannerBox .prev'),
  //   nextArrow: $('#mainSlideWrap .mainBannerBox .next'),
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         variableWidth: true,
  //         slidesToShow: 1,
  //       }
  //     },
  //   ]
  // });

  // $('#partnerWrap .slick').slick({
  //   autoplay: false,
  //   variableWidth: true,
  //   arrows: true,
  //   dots: false,
  //   accessibility: false,
  //   draggable: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   zIndex: 1000,
  //   pauseOnHover: false,
  //   autoplaySpeed: 5000,
  //   speed: 1300,
  //   prevArrow: $('#partnerWrap .control .prev'),
  //   nextArrow: $('#partnerWrap .control .next'),
  // });

  // $(window).scroll(function () {

  //   const scrollPos = $(window).scrollTop();
  //   const winH = $(window).height();

  //   $('.scrollElement').each(function () {
  //     let elementOffset = $(this).offset().top;
  //     if (scrollPos > elementOffset - winH / 1.2) {
  //       $(this).addClass('active');
  //     } else {
  //       $(this).removeClass('active');
  //     }
  //   });

  // });

  // $('#newsWrap .tabBtn').first().addClass('active');
  // $('#newsWrap .newsContentBox .newsContent').first().show();


  // $('#newsWrap .tabBtn').click(function () {

  //   $('#newsWrap .tabBtn').removeClass('active');
  //   $(this).addClass('active');

  //   let idx = $(this).index();

  //   $('#newsWrap .newsContentBox .newsContent').hide();
  //   $('#newsWrap .newsContentBox .newsContent').eq(idx).show();

  // })














});
