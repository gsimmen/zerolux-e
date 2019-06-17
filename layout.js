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
  $('.block').css({ 'min-height' : blockHeight + 'px'});
  $('#map').css({ 'max-height' : adjustMap + 'px'});
});


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
  $('#photoframe').empty();
}

});

});//jquery function


//$(window).on('load' , function render(){
function render(){
  //console.log(document.documentElement.scrollTop);
  checkUnderline();
  checkMagScroll(lastScroll);
  checkParallax();
  changeClass();
  requestAnimationFrame(render);
};

render();
//});

//
//
