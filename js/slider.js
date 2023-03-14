let slidesList = document.querySelectorAll(".swiper-slide");
let slidesImagesList = document.querySelectorAll(".slider_item_container_images");
let slidesCount = 2.5;
let space = 20;

window.onload = function() {
    renderSlider();
}

slidesList.forEach((elem) => {
    elem.addEventListener("click", (event) => openSlide());
    elem.addEventListener("mouseover", (event) => mouseOver(event, elem));
    elem.addEventListener("mouseout", (event) => mouseOut(event, elem));
});

const openSlide = () => {
    slidesList.forEach((elem) => {
        elem.classList.remove("scaled-slide-min");
        elem.classList.remove("scaled-slide-max");
        console.log(elem.children[1].children[1]);
    });
    if(slidesCount === 2.5) {
        slidesCount = 1;
        renderSlider();
    } else {
        slidesCount = 2.5;
        renderSlider();
    }
};

const mouseOver = (event, elem) => {
    if(slidesCount !== 1) {
        slidesList.forEach((slide) => {
            if(slide != elem) {
                slide.classList.add("scaled-slide-min");
                space = 50;
            } else {
                slide.classList.add("scaled-slide-max");
            }
        });
    }
};

const mouseOut = (event, elem) => {
    if(slidesCount !== 1) {
        slidesList.forEach((slide) => {
            if(slide != elem) {
                slide.classList.remove("scaled-slide-min");
                space = 20;
            } else {
                slide.classList.remove("scaled-slide-max");
            }
        });
    }
};

function renderSlider() {
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; 
    var $bottomSlideContent = null; 

    var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: space,
        initialSlide: 1,
        slidesPerView: slidesCount,
        centeredSlides: true,
        roundLengths: true,
        loop: false,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}