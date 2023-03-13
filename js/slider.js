var $swiperSelector = $('.swiper-container');
let slidesList = document.querySelectorAll(".swiper-slide");
let slidesContent = document.querySelectorAll(".slider_item_container_hover");
let slidesTextContainer = document.querySelectorAll(".sliderTextContainer");
let slidesText = document.querySelectorAll(".sliderText");
let videoFrame = document.querySelectorAll(".videoFrame");
let slidesCount = 2.5;

window.onload = function() {
    renderSlider();
}

slidesList.forEach((elem) => {
    elem.addEventListener("click", (event) => openSlide(event, elem));
});

slidesList.forEach((elem) => {
    elem.addEventListener("mouseover", (event) => hoverSlide(event, elem));
});

slidesList.forEach((elem) => {
    elem.addEventListener("mouseout", (event) => unhoverSlide(event, elem));
});

const openSlide = (event, elem) => {
    if(slidesCount === 2.5) {
        slidesCount = 1;
        slidesList.forEach((elem) => {
            elem.classList.add("clickedSlide");
            elem.classList.toggle("swiper-slide-white");
        });
        slidesContent.forEach((elem) => {
            elem.classList.add("slider_item_container_active");
        });
        slidesTextContainer.forEach((elem) => {
            elem.classList.add("clickedSlideTextContainer");
        });
        slidesText.forEach((elem) => {
            elem.classList.add("clickedSlideText");
        });
        videoFrame.forEach((elem) => {
            elem.classList.add("videoFrameSmall");
        });
        renderSlider();
    } else {
        slidesCount = 2.5;
        slidesList.forEach((elem) => {
            elem.classList.remove("clickedSlide");
            elem.classList.toggle("swiper-slide-white");
        });
        slidesContent.forEach((elem) => {
            elem.classList.remove("slider_item_container_active");
        });
        slidesTextContainer.forEach((elem) => {
            elem.classList.remove("clickedSlideTextContainer");
        });
        slidesText.forEach((elem) => {
            elem.classList.remove("clickedSlideText");
        });
        videoFrame.forEach((elem) => {
            elem.classList.remove("videoFrameSmall");
        });
        renderSlider();
    }
};

const hoverSlide = (event, elem) => {
    slidesList.forEach((elem) => {
        if(event.currentTarget != elem) {
            elem.classList.add("scaled-slide");
        } 
    });
};

const unhoverSlide = (event, elem) => {
    slidesList.forEach((elem) => {
        if(event.currentTarget != elem) {
            elem.classList.remove("scaled-slide");
        }
    });
};

function renderSlider() {
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
        loop: true,
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
}