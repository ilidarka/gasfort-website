let slidesList = document.querySelectorAll(".swiper-slide");
let slidesImagesList = document.querySelectorAll(".slider_item_container_images");
let videosList = document.querySelectorAll(".videoFrame");
let smallSlidersList = $(".small-slider-wrapper");
let slidesIndicator = $(".slides-indicator");

let slidesCount = 2.5;
let spaceBetweenSlides = 20;
let currentSlide = 1;

let mySwiper;

window.onload = function() {
    renderSlider();
}

document.addEventListener("click", (event) => {
    if(event.target.closest(".swiper-slide") 
        || event.target.closest(".slider-buttons") 
            || event.target.closest(".swiper-button-prev") 
                || event.target.closest(".swiper-button.next")) {
        event.stopImmediatePropagation()
    } else {
        closeSlide();
    }
});

if(window.screen.width >= 1100) {
    slidesList.forEach((elem) => {
        elem.children[0].addEventListener("click", (event) => openSlide(event));
        elem.children[1].addEventListener("click", (event) => openSlide(event));
        elem.addEventListener("mouseover", (event) => mouseOver(event, elem));
        elem.addEventListener("mouseout", (event) => mouseOut(event, elem));
    });
    $(".slides-indicator").each(function(index) {
        let dotNumber = index;
        $(".slides-indicator").append('<img data-dotNumber="'+dotNumber+'" class="dots" src="./img/unactive-slide-indicator.svg" alt="unactive-slide-indicator" >');
        $(".slides-indicator").eq(index).find(".dots").eq(index).attr("src", "./img/active-slide-indicator.svg");
    });
    let dots = document.querySelectorAll(".dots");
    dots.forEach((elem) => {
        elem.addEventListener("click", (event) => {
            setActiveSlide(event.target.dataset.dotnumber);
        });
    });
    $(".slideCloseButton").bind("click", () => {
        closeSlide();
    });
} else {
    slidesCount = 1;
    renderSlider();
}

const openSlide = (event) => {
    if(slidesCount === 2.5) {
        slidesList.forEach((elem) => {
            elem.classList.remove("scaled-slide-min");
            elem.classList.remove("scaled-slide-max");
            elem.children[1].children[1].classList.toggle("clicked-slide-images");
        });
        slidesCount = 1;
        spaceBetweenSlides = 200;
        currentSlide = event.target.closest(".swiper-slide").ariaLabel.split(" /")[0] - 1;
        slidesList.forEach((elem) => {
            elem.classList.add("clicked-slide");
            elem.children[1].classList.add("clicked-slider-item-container");
            elem.children[1].children[0].classList.add("clicked-content");
            elem.children[1].children[0].children[0].classList.add("clicked-videoFrame");
            elem.children[1].children[0].children[1].style.display = "none";
            elem.children[1].children[0].children[2].classList.add("clicked-sliderText");
        });
        smallSlidersList.css("display", "flex");
        $(".slides-indicator").css("display", "flex");
        $(".swiper-container").css("height", "830px");
        $(".slideCloseButton").css("display", "block");
        $(".slider_item_container_images").css("display", "none");
        $(".slider-buttons").css("margin-top", "0");
        renderSlider();
    };
};
const closeSlide = () => {
    if(slidesCount === 1) {
        slidesCount = 2.5;
        spaceBetweenSlides = 20;
        slidesList.forEach((elem) => {
            elem.classList.remove("clicked-slide");
            elem.children[1].classList.remove("clicked-slider-item-container");
            elem.children[1].children[0].classList.remove("clicked-content");
            elem.children[1].children[0].children[0].classList.remove("clicked-videoFrame");
            elem.children[1].children[0].children[1].style.display = "block";
            elem.children[1].children[0].children[2].classList.remove("clicked-sliderText");
        });
        smallSlidersList.css("display", "none");
        $(".slides-indicator").css("display", "none");
        $(".swiper-container").css("height", "830px");
        $(".slideCloseButton").css("display", "none");
        $(".slider_item_container_images").css("display", "flex");
        $(".slider-buttons").css("margin-top", "150px");
        renderSlider();
    }
};

const mouseOver = (event, elem) => {
    if(slidesCount === 2.5) {
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
    if(slidesCount === 2.5) {
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
        mySwiper = new Swiper(".swiper-container", {
        spaceBetween: spaceBetweenSlides,
        initialSlide: currentSlide,
        slidesPerView: slidesCount,
        centeredSlides: true,
        roundLengths: true,
        loop: false,
        loopAdditionalSlides: 30,
        allowTouchMove: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}

function setActiveSlide(slideNumber) {
    currentSlide = slideNumber;
    console.log(mySwiper.navigation.nextEl);
    renderSlider();
}