$(function () {
  // var $win = $(window),
  //   $header = $('header'),
  //   headerHeight = $header.outerHeight(),
  //   startPos = 0;

  // $win.on('load scroll', function () {
  //   var value = $(this).scrollTop();
  //   if (value > startPos && value > headerHeight) {
  //     $header.css('top', '-' + headerHeight *2 + 'px');
  //   } else {
  //     $header.css('top', '0');
  //   }
  //   startPos = value;
  // });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })
});