$(document).ready(function(){
    $(".main-btn").click(function(){
        $(".main-info").slideToggle(1000);
    })
   $(".exit").click(function(){

        $(".main-info").slideToggle(1500);
   });
});
var typed = new Typed('#typed',{
    strings : ['HI! IM Hessin Mostafa <br> IM FrontEnd'],
    typeSpeed : 50,
    delaySpeed : 50,
    loop : true
  });
$(document).ready(function(){
    $(".dropdown").hover(function(){
        if($(this).children(".dropdown-menu").hasClass('pages')){
            $(this).children(".dropdown-menu").removeClass('pages');
            $(this).children(".dropdown-menu").slideUp(50);
        } else {
        
            $(this).parent().find('.dropdown-menu').removeClass('pages');
            $(this).parent().find('.dropdown-menu').slideUp(50);
            $(this).children(".dropdown-menu").toggleClass('pages');
            $(this).children(".dropdown-menu").slideToggle(0);
        }
        
    })
   
   $(".img-tower1").hover(function(){

    $(this).children(".absl").slideToggle(300);

   });
});