const btn_start1 = document.getElementById('btn-start1');
const btn_start2 = document.getElementById('btn-start2');
const btn_start3 = document.getElementById('btn-start3');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

btn_start1.addEventListener('click',function(){
    video1.play();
  });
  btn_start2.addEventListener('click',function(){
    video2.play();
  });
  btn_start3.addEventListener('click',function(){
    video3.play();
  });