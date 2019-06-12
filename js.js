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
        anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
        if ( anchor.length ) {
            //$("html, body").css( { scrollTop: anchor.offset().top - 30 });
            $("#primary").animate( { scrollTop: anchor.offset().top - 30 },400);
        }
    }
});
});


var headerHeight = $('#header').height();
$(window).on('load resize' , function(){
    $('#primary').animate({"height" : "calc(100vh - " + headerHeight + ")" - 10 }, 400);
      });


//
//
});//jquery function
