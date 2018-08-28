$('.item-mobileMenu').on('click', function() {
  $('#mobileMenuPopup').toggleClass('active');
});
$('.popupCloseButton').on('click', function() {
  $('.popup').removeClass('active');
});