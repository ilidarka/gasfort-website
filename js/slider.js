let slidesList = document.querySelectorAll(".swiper-slide");
let slidesImagesList = document.querySelectorAll(".slider_item_container_images");
let smallSlidersList = document.querySelectorAll(".small-slider-wrapper");

let slidesCount = 2.5;
let touchMove = true;

window.onload = function() {
    renderSlider();
}

if(window.screen.width >= 1100) {
    slidesList.forEach((elem) => {
        elem.children[0].addEventListener("click", (event) => openSlide());
        elem.children[1].addEventListener("click", (event) => openSlide());
        elem.addEventListener("mouseover", (event) => mouseOver(event, elem));
        elem.addEventListener("mouseout", (event) => mouseOut(event, elem));
    });
} else {
    slidesCount = 1;
    renderSlider();
}


const openSlide = () => {
    slidesList.forEach((elem) => {
        elem.classList.remove("scaled-slide-min");
        elem.classList.remove("scaled-slide-max");
        elem.children[1].children[1].classList.toggle("clicked-slide-images");
    });
    if(slidesCount === 2.5) {
        slidesCount = 1;
        slidesList.forEach((elem) => {
            elem.classList.add("clicked-slide");
            elem.children[1].classList.add("clicked-slider-item-container");
            elem.children[1].children[0].classList.add("clicked-content");
            elem.children[1].children[0].children[0].classList.add("clicked-videoFrame");
            elem.children[1].children[0].children[1].classList.add("clicked-sliderText");
        });
        smallSlidersList.forEach((elem) => {
            elem.style.display = "flex";
        });
        touchMove = false;
        renderSlider();
    } else {
        slidesCount = 2.5;
        slidesList.forEach((elem) => {
            elem.classList.remove("clicked-slide");
            elem.children[1].classList.remove("clicked-slider-item-container");
            elem.children[1].children[0].classList.remove("clicked-content");
            elem.children[1].children[0].children[0].classList.remove("clicked-videoFrame");
            elem.children[1].children[0].children[1].classList.remove("clicked-sliderText");
        });
        smallSlidersList.forEach((elem) => {
            elem.style.display = "none";
        });
        touchMove = true;
        renderSlider();
    }
};

const mouseOver = (event, elem) => {
    if(slidesCount !== 1) {
        slidesList.forEach((slide) => {
            if(slide != elem) {
                slide.classList.add("scaled-slide-min");
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
            } else {
                slide.classList.remove("scaled-slide-max");
            }
        });
    }
};

function renderSlider() {
    var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: 20,
        initialSlide: 1,
        slidesPerView: slidesCount,
        centeredSlides: true,
        roundLengths: true,
        loop: false,
        loopAdditionalSlides: 30,
        allowTouchMove: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}