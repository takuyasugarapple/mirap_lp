$(function () {

  // header background script start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
  // header background script end


  // intro-title type script start 
  var setElm = $('.split'),
    delaySpeed = 100,
    fadeSpeed = 0;

  setText = setElm.html();

  setElm.css({
    visibility: 'visible'
  }).children().addBack().contents().each(function () {
    var elmThis = $(this);
    if (this.nodeType == 3) {
      var $this = $(this);
      $this.replaceWith($this.text().replace(/(\S)/g,
        '<span class="textSplitLoad">$&</span>'));
    }
  });
  $(window).load(function () {
    splitLength = $('.textSplitLoad').length;
    setElm.find('.textSplitLoad').each(function (i) {
      splitThis = $(this);
      splitTxt = splitThis.text();
      splitThis.delay(i * (delaySpeed)).css({
        display: 'inline-block',
        opacity: '0',
        color: '#fff'
      }).animate({
        opacity: '1'
      }, fadeSpeed);
    });
    setTimeout(function () {
      setElm.html(setText);
    }, splitLength * delaySpeed + fadeSpeed);
  });
  // intro-title type script end 


  // fadein script start
  var scrollAnimationElm = document.querySelectorAll('.sa');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 700;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('show');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
  // fadein script end

});