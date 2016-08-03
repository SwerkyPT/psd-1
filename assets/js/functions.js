/*global $, alert, console*/
$(document).ready(function () {
  'use strict';

  $('ul>li:not(.lang)').click(function (event) {
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });

  $(".rslides").responsiveSlides({
    pager: true,
  });

  $('#Container').mixItUp();

  $('a[data-nav]').click(function () {
    $('html, body').animate({
        scrollTop: $("#"+ $(this).data('nav') +"").offset().top - $('nav').innerHeight()
    }, 1000);
  });

});


$(window).scroll(function () {
  'use strict';
  var STop = $(window).scrollTop();

  if (STop >= $('.slider').innerHeight()) {
    $('nav').addClass('is-floated');
  } else {
    $('nav').removeClass('is-floated');
  }

  console.log($('.slider').offset().top + $('.slider').innerHeight());

});
