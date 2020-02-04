// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
$('.details').click(function() {
  $('.details').not(this).toggleClass('sub-nav-active')
  $(this).toggleClass('details-active')
});

$('.my-slick').slick({
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// End of Your Code . Don't delete that line below!!
});
