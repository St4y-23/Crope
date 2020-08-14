
$(window).on('load', function () {
  $('.preloader').delay(500).fadeToggle(500);


  if (window.matchMedia("(min-width: 851px)").matches) {

    // var link = Array.prototype.slice.call(document.querySelectorAll(".header__link")).reverse();

    // var tl = gsap.timeline({ defaults: { duration: 1 } });
    // tl.from(".intro__bg", { delay: 1, x: '-100%' })
    //   .from(".header__bg", { x: '-100%', opacity: 0 }, "-=.5")


    
  } else {


    
  }

});


$(function () {

  // Swiper
  var mySwiper = new Swiper('.ourServices__slider', {
    loop: true,
    slidesPerView: 5,
  
      
    navigation: {
      prevEl: '.slide__prev',
      nextEl: '.slide__next',
    }
  });

  var mySwiper2 = new Swiper('.portfolio__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
  });


  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollBar: false,
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Our Services', 'Consultation'],
    showActiveTooltip: true,
    loopBottom: true,
  });


  

});