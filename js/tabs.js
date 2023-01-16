$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    // $('.column_bg').removeClass('hidden')
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(".tab-a[data-id='"+$(this).attr('data-id')+"']").addClass("active-a");
   });
   $('.tab_button').click(function(){  
    $(".column_container").removeClass('hidden');
    $('.tab_button').addClass('hidden');
    $('.column_bg').addClass('hidden');
    
    // $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    // $(".tab-a").removeClass('active-a');
    // $(".tab-a[data-id='"+$(this).attr('data-id')+"']").addClass("active-a");
   });
});