// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
$('.details').click(function() {
  $('.details').not(this).toggleClass('sub-nav-active')
  $(this).toggleClass('details-active').toggleclass('bob')
});

$('.my-slick').slick({
  variableWidth: true,
  dots: false,
  infinite: true,
  speed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500


    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
});

// End of Your Code . Don't delete that line below!!
});
