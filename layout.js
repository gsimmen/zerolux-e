jQuery(document).ready(function($) {

$(function() {
/**
* Smooth scrolling to page anchor on click
**/
$("a[href*='#']:not([href='#'])").click(function() {
    if (
        location.hostname == this.hostname
        && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
    ) {
        var anchor = $(this.hash);
        var headerHeight = $('#header').outerHeight();
        anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
        if ( anchor.length ) {
            $("html, body").animate( { scrollTop: anchor.offset().top - headerHeight -30 }, 400);
        }
    }
});
});

    //ajuste le padding du contenu à la hauteur du header
$(window).on('load resize' , function(){
var headerHeight = $('#header').outerHeight();
   $('#primary').animate({"padding-top" : headerHeight }, 400);
      });
    
    
//créer un effet de focus sous le lien du menu    
$('a[href*="#"]').on('click' , function(){
  var clicked = $(this) ;
  $(this).addClass('focused');
    $('a[href*="#"]').not(clicked).removeClass('focused');
  });    


//
//
});//jquery function
