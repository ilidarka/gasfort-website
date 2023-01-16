//----------JQuery-----------------//
$(function(){
    flag=0;
    $('.next').click(function(){
      if(flag == 0){
        $('.c1').css({'transform':'translateX(-10px) translateY(-10px) scale(0.3)','z-index':'9'});
        $('.c2').css({'transform':'translateX(100px) translateY(100px) scale(0.3)','z-index':'100'});
        $('.c3').css({'transform':'translateX(0) scale(1)','z-index':'99'});
        flag = 1;
      } else if(flag == 1){
        $('.c3').css({'transform':'translateX(-100px) translateY(-100px)','z-index':'9'});
        $('.c1').css({'transform':'translateX(100px) translateY(100px) scale(0.3)','z-index':'100'});
        $('.c2').css({'transform':'translateX(0) scale(1)','z-index':'99'});
        flag = 2;
      }else if(flag == 2){
        $('.c2').css({'transform':'translateX(-100px) translateY(-100px) scale(0.3)','z-index':'9'});
        $('.c3').css({'transform':'translateX(100px) translateY(100px) scale(0.3)','z-index':'100'});
        $('.c1').css({'transform':'translateX(0) scale(1)','z-index':'99'});
        flag = 0;
      }
    });
    $('.prev').click(function(){
      if(flag == 0){
        $('.c3').css({'transform':'translateX(-100px) translateY(-100px) scale(0.3)','z-index':'9'});
        $('.c1').css({'transform':'translateX(100px) translateY(100px) scale(0.3)','z-index':'100'});
        $('.c2').css({'transform':'translateX(0) scale(1)','z-index':'99'});
        flag = 1;
      } else if(flag == 1){
        $('.c1').css({'transform':'translateX(-100px) translateY(-100px) scale(0.3)','z-index':'9'});
        $('.c2').css({'transform':'translateX(100px) translateY(100px) scale(0.3)','z-index':'100'});
        $('.c3').css({'transform':'translateX(0) scale(1)','z-index':'99'});
        flag = 2;
      }else if(flag == 2){
        $('.c2').css({'transform':'translateX(-100px) translateY(-100px) scale(0.3)','z-index':'9'});
        $('.c3').css({'transform':'translateX(100px) translateY(100px) scale(0.3)','z-index':'100'});
        $('.c1').css({'transform':'translateX(0) scale(1)','z-index':'99'});
        flag = 0;
      }
    });
  });