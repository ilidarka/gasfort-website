let slidesList = document.querySelectorAll('.swiper-slide');
let videosList = document.querySelectorAll('.videoFrame');
let smallSlidersList = $('.small-slider-wrapper');
let slidesIndicator = $('.slides-indicator');
let sliderPrevButton = $('.swiper-button-prev');
let sliderNextButton = $('.swiper-button-next');

let slidesCount = 2.5;
let spaceBetweenSlides = 20;
let selectedSlideNumber = 1;

let mySwiper;

window.onload = function () {
    renderSlider();
};

sliderPrevButton.bind('click', (event) => {
    mySwiper.slidePrev(1000);
});

sliderNextButton.bind('click', () => {
    mySwiper.slideNext(1000);
});
if (window.screen.width >= 1100) {
    slidesList.forEach((elem) => {
        elem.addEventListener('mouseover', (event) => mouseOver(event, elem));
        elem.addEventListener('mouseout', (event) => mouseOut(event, elem));
    });
} else {
    slidesCount = 1;
    renderSlider();
}
const mouseOver = (event, elem) => {
    if (slidesCount === 2.5) {
        slidesList.forEach((slide) => {
            if (slide != elem) {
                slide.classList.add('scaled-slide-min');
            } else {
                slide.classList.add('scaled-slide-max');
            }
        });
    }
};

const mouseOut = (event, elem) => {
    if (slidesCount === 2.5) {
        slidesList.forEach((slide) => {
            if (slide != elem) {
                slide.classList.remove('scaled-slide-min');
            } else {
                slide.classList.remove('scaled-slide-max');
            }
        });
    }
};

function renderSlider() {
    mySwiper = new Swiper('.swiper-container', {
        spaceBetween: spaceBetweenSlides,
        slidesPerView: slidesCount,
        initialSlide: selectedSlideNumber,
        centeredSlides: true,
        roundLengths: true,
        loop: false,
        loopAdditionalSlides: 30,
        allowTouchMove: true,
    });
    mySwiper.on('slideChange', (event) => {
        if (mySwiper.activeIndex == 0) {
            sliderPrevButton.css('opacity', '0.5');
        } else if (mySwiper.activeIndex >= mySwiper.slides.length - 1) {
            sliderNextButton.css('opacity', '0.5');
        } else {
            sliderNextButton.css('opacity', '1');
            sliderPrevButton.css('opacity', '1');
        }
    });
}

function setActiveSlide(slideNumber) {
    mySwiper.initialSlide = slideNumber;
}
