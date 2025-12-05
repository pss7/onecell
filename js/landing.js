
$(function () {

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.scrollWrap'),
    smooth: true,
    smoothMobile: false,
    paused: true,
    onUpdate: () => {
      window.dispatchEvent(new Event('resize'));
    },
    multiplier: 1,
    smartphone: {
      smooth: false
    },
    tablet: {
      smooth: false
    },
    useKeyboard: true,

  });

  let lastScrollTop = 0;
  let delta = 0;
  locoScroll.on('scroll', (position) => { });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".scrollWrap", {
    scrollTop(value) {
      return arguments.length ?
        locoScroll.scrollTo(value, 0, 0) :
        locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector('.scrollWrap').style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  //상단으로 이동
  $('aside .top').click(function (e) {
    e.preventDefault();
    locoScroll.scrollTo(0);
  });

  //헤더
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  $('[data-scroll-link]').click(function (e) {
    e.preventDefault();
    locoScroll.scrollTo($(this).attr('href'));
  });

  $('#headerWrap .mobileBtn').click(function () {
    $('#headerWrap .mobileMenuBox').addClass('active');
    $('#headerWrap .mobileBG').fadeIn();
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $('#headerWrap .mobileMenuBox').removeClass('active');
    $('#headerWrap .mobileBG').fadeOut();
  });


  //비주얼영역 
  $(window).load(function () {
    $('#visualWrap .visualBox').addClass('active');
    $('#visualWrap .progressbarBox .dots').addClass('active');
  });

  $('#visualWrap .slickWrap .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('#visualWrap .visualBox').removeClass('active');
    $('#visualWrap .progressbarBox .dots').removeClass('active');
  });
  $('#visualWrap .slickWrap .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#visualWrap .visualBox').addClass('active');
    $('#visualWrap .progressbarBox .dots').addClass('active');
  });

  $('#visualWrap .slickWrap .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    $('#visualWrap .progressbarBox .count').html('<em class="current">' + i + '</em> <em class="total">' + slick.slideCount + '</em>');
    $('#mainTitleWrap .progressbarBox .dots').addClass('active');
  });

  $('#visualWrap .slickWrap .slick').slick({
    autoplay: true,
    arrows: false,
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
  });

  //센터 영역
  $('.centerBox01 .slickWrap .slick').slick({
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.centerBox02 .slickWrap .slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.centerBox03 .slickWrap .slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.centerBox04 .slickWrap .slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.doctorsBox .doctorsSlideWrap .slick').slick({
    variableWidth: true,
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    centerMode: true,
    prevArrow: $('.doctorsBox .control .prev'),
    nextArrow: $('.doctorsBox .control .next'),
  });

  //공간 영역 
  $('#spaceWrap .slick').slick({
    variableWidth: true,
    autoplay: true,
    arrows: true,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    centerMode: true,
    prevArrow: $('#spaceWrap .control .prev'),
    nextArrow: $('#spaceWrap .control .next'),
  });

  //프로모션 영역 
  $('#promotionWrap .slick').slick({
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1300,
    centerMode: true,
  });

  /* 팝업 */
  $('.doctorPopup').click(function () {
    $($(this).data('target')).addClass('active');
  });
  $('.popupCloseBtn').click(function () {
    $(this).closest('.popupWrap').removeClass('active');
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
