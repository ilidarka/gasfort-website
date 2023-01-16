//----------JQuery-----------------//
let allSlides = $('.slider_item');
let dotIndicator = $('.dot_indicator');

for(let i = 0; i < allSlides.length; i++) {
  dotIndicator.append('<img src="./img/dotIndicatorGrey.svg" alt="dotIndicatorGrey">');
}

let dots = $('.dot_indicator img');
dots[$('.slider_item').index($('.active_slide'))].src = "./img/dotIndicatorColored.svg";

$(function() {
  $('.next').click(function() {
    let currentSlide = $('.active_slide');
    let nextSlide = currentSlide.next();
    let currentDot = dots[allSlides.index(nextSlide)];
    let prevDot = dots[allSlides.index(currentSlide)];
    if(nextSlide.hasClass('slider_item')) {
      currentSlide.removeClass('active_slide');
      currentSlide.addClass('prev_slide');
      nextSlide.removeClass('next_slide');
      nextSlide.addClass('active_slide');
      currentDot.src = "./img/dotIndicatorColored.svg";
      prevDot.src = "./img/dotIndicatorGrey.svg";
      changeSliderControll(nextSlide);
    }
  });
  $('.prev').click(function() {
    let currentSlide = $('.active_slide');
    let prevSlide = currentSlide.prev();
    let currentDot = dots[allSlides.index(prevSlide)];
    let prevDot = dots[allSlides.index(currentSlide)];
    if(prevSlide.hasClass('slider_item')) {
      currentSlide.removeClass('active_slide');
      currentSlide.addClass('next_slide');
      prevSlide.removeClass('prev_slide');
      prevSlide.addClass('active_slide');
      currentDot.src = "./img/dotIndicatorColored.svg";
      prevDot.src = "./img/dotIndicatorGrey.svg";
      changeSliderControll(prevSlide);
    }
  });
});

function changeSliderControll(slideNumber) {
  if(allSlides.index(slideNumber) == allSlides.length - 1) {
    $('span:contains(Следующий кейс)').css('color', '#fff');
    $(".next img").attr("src","./img/slider_arrow_last.svg").addClass('rotated_arrow');
  } else if (allSlides.index(slideNumber) == 0) {
    $('span:contains(Предыдущий кейс)').css('color', '#fff')
    $(".prev img").attr("src","./img/slider_arrow_last.svg").removeClass('rotated_arrow');
  } else {
    $('span:contains(Следующий кейс)').css('color', '#FEAC5E')
    $('span:contains(Предыдущий кейс)').css('color', '#FEAC5E')
    $(".next img").attr("src","./img/slider_arrow.svg").removeClass('rotated_arrow');
    $(".prev img").attr("src","./img/slider_arrow.svg").addClass('rotated_arrow');
  }
}