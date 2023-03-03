var $swiperSelector = $('.swiper-container');
let slidesList = document.querySelectorAll(".swiper-slide");
let slidesCount = 2.5;

slidesList.forEach((elem) => {
    elem.addEventListener("click", (event) => openSlide(event, elem));
});

const openSlide = (event, elem) => {
    if(slidesCount === 2.5) {
        slidesCount = 1;
        console.log(slidesCount);
    } else {
        slidesCount = 2.5;
        console.log(slidesCount);
    }
};

$swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);
    
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : slidesCount;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : slidesCount;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;

    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        992: {
          slidesPerView: slidesTablet
        },
        400: {
           slidesPerView: slidesMobile
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
   });
});
