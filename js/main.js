// $(document).ready(function(){
//     $('.header').height($(window).height());
//    })
// $(document).ready(function(){
//     $('.caption').height($(window).height());
//    })
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })
  
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    navText:[ '<i class="fa fa-angle-left fa-2x"></i>','<i class="fa fa-angle-right fa-2x"></i>'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
