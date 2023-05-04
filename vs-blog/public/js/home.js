// jquery
var body = $('html, body');
var menuButton = $('#menu-button');
var menu = $(".menu");
var links = $(".link-container");

$(window).on("load", function() {
    $(this).scrollTop();
})

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       links.fadeOut(100);
        menu.slideUp(800);
   } else {
      // upscroll code
      menu.slideDown(500);
      links.delay(600).fadeIn(500);
   }
   lastScrollTop = st;
});