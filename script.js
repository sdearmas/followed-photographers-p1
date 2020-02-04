// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
$('.details').click(function() {
  $('.details').not(this).toggleClass('sub-nav-active')
  $(this).toggleClass('details-active')
});
// End of Your Code . Don't delete that line below!!
});
