
$(function () {

  $(window).load(function () {
    $('#headerWrap').addClass('active');
    $('.subVisualWrap').addClass('active');
  });

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.scrollWrap'),
    smooth: true,
    smoothMobile: false,
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

  //스크롤 시 헤더 클래스 적용
  locoScroll.on('scroll', function (obj) {
    let y = obj.scroll.y;

    if (y > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  //스크롤 시 상단버튼 
  locoScroll.on('scroll', function (obj) {
    let y = obj.scroll.y;

    if (y > 50) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });

  // top 버튼 클릭 시 상단이동
  $("#top").on('click', 'a', function (e) {
    e.preventDefault();
    locoScroll.scrollTo(0, { duration: 500, disableLerp: true });
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

  //비주얼영역 
  $(window).load(function () {
    $('#visualWrap .visualBox').addClass('active');
  });

  $('#visualWrap .slickWrap .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('#visualWrap .visualBox').removeClass('active');
  });
  $('#visualWrap .slickWrap .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#visualWrap .visualBox').addClass('active');
  });

  $('#visualWrap .slickWrap .slick').slick({
    autoplay: false,
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
