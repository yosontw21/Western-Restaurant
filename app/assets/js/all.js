$(document).ready(function () {
  $('.burger-btn').on('click', function (e) {
    e.preventDefault();
    $('.navbar ul').toggleClass('navbar-nav');
  });
});
