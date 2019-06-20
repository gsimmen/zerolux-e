jQuery(document).ready(function($) {



// $(window).on('load resize', function(e) {
//   var headerHeight = $('#header').height();
//   $('#primary').animate({
//     "color": "#e8a010"
//   }, 400);
// });

$(window).on('load resize',function(){
var headerHeight = $('#header').outerHeight();
var windowHeight = $(window).height();
var blockHeight =  windowHeight - headerHeight ;
var adjustMap = windowHeight - headerHeight - 147 ;
var elemHeight1 = $('.elem1').outerHeight();
var elemHeight2 = $('.circle-container').outerHeight();
  $('.block').css({ 'min-height' : blockHeight + 'px'});
  $('#map').css({ 'max-height' : adjustMap + 'px'});
  if( adjustMap > ( elemHeight1 + elemHeight2 )){
  $('#contribute .sub-block-30').css({ 'min-height' : adjustMap + 'px'});
}
else{  $('#contribute .sub-block-30').css({ 'min-height' : elemHeight1 + elemHeight2 + 20 + 'px'});}
});

// $(window).on('scroll', function(){
// var aAll =  $('a') ;
// var aUnderline =  $('a.underline') ;
//     $(aAll).css({'border-bottom' : 'none'}) ;
//     $(aUnderline).css({'border-bottom' : '2px solid #000'}) ;
// });

// for(i = 1 ; i < 99 ; i++) {
//   var imgUrl = "'places/place-" + i + ".jpg'" ;
//  $("[title='place-" + i + "']").on('click', function(e){
//    var depth = $(this).index() ;
//    var imgUrl = "'places/place-" + depth + ".jpg'" ;
//   $('.photoframe').css('background-image' , 'url(' + imgUrl + ')' );
//   // $('.photoframe').append(depth);
// });
// }

$('#photoframe').on('click', function(){
if( $('#photoframe').css('opacity') == '1'){
  $('#photoframe , #photoframe img').animate({'opacity':'0'},400);
  $('#photoframe')
  .delay(400)
  .queue(function (next) {
    $(this).css({'z-index':'-999'});
    next();
  });
  $('#photoframe > div').empty();
}
});

$(".pageTitle").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 500 );
  });


// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });
//
// $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.animated').each( function(i){
//
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//
//                 $(this).addClass('come-in');
//                 //tester
//                 //$(this).html( bottom_of_object + " " + bottom_of_window);
//             }
//
//         });
//
//     });
//
// });



});//jquery function


//$(window).on('load' , function render(){
function render(){
  //console.log(document.documentElement.scrollTop);
  checkUnderline();
  checkMagScroll(lastScroll);
  checkParallax();
  changeClass();
  selfChangeClass();
  checkHeader();
  updateRotation()
  requestAnimationFrame(render);
};

render();
//});

//
//
