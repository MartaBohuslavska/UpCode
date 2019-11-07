$(document).ready(function(){

  $('.slide-header').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.slide-prev').on('click', function(){
    $('.slide-header').slick('slickPrev');
  });

  $('.slide-next').on('click', function(){
      $('.slide-header').slick('slickNext');
  });

  $('.about-person').slick({
    dots: false,
    arrows: false,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    fade: true
  });

  $('.photo-person').slick({
    dots: false,
    arrows: false,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    fade: true
  });

  $('.next').slick({
    dots: false,
    arrows: false,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    fade: true
  });

  $('.previous').slick({
    dots: false,
    arrows: false,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    fade: true
  })

  $('.next-slide').on('click', function(){
    $('.about-person').slick('slickNext');
    $('.photo-person').slick('slickNext');
    $('.next').slick('slickNext');
    $('.previous').slick('slickNext');
  });

  $('.prev-slide').on('click', function(){
    $('.about-person').slick('slickPrev');
    $('.photo-person').slick('slickPrev');
    $('.next').slick('slickPrev');
    $('.previous').slick('slickPrev');
  });

  $('.cities > div').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('#losAngeles').on('click', function(){
    newLocation(34.052235, -118.243683);
    $('#aboutLosAngeles').addClass('active');
    $('#aboutLosAngeles').siblings().removeClass('active');
  });

  $('#newYork').on('click', function(){
    newLocation(40.730610, -73.935242);
    $('#aboutNewYork').addClass('active');
    $('#aboutNewYork').siblings().removeClass('active');
  });

  $('#boston').on('click', function(){
    newLocation(42.361145, -71.057083);
    $('#aboutBoston').addClass('active');
    $('#aboutBoston').siblings().removeClass('active');
  });

  $('#detroit').on('click', function(){
    newLocation(42.331429, -83.045753);
    $('#aboutDetroit').addClass('active');
    $('#aboutDetroit').siblings().removeClass('active');
  });

  $('a[data-target^="anchor"]').on('click.smoothscroll', function(){
    let target = $(this).attr("href"),
        bl_top = $(target).offset().top - 92;
    $('body, html').animate({scrollTop: bl_top}, 700);
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 1000) {
      $('.menu').addClass('color');
    } else {
      $('.menu').removeClass('color');
    }
  });

  if($(window).width() <= 1024) {
    $('#dropdown-btn').addClass('open');
    $('#nav-menu').hide();
    $('#dropdown-btn').parents('.menu-header').css('align-items', 'flex-start');
  };

  $(window).resize(function(){
    if($(this).width() <= 1024) {
      $('#dropdown-btn').addClass('open');
      $('#nav-menu').hide();
      $('#dropdown-btn').parents('.menu-header').css('align-items', 'flex-start');
    } else {
      $('#dropdown-btn').removeClass('open');
      $('#nav-menu').show();
    }
  });

  $('#dropdown-icon').on('click', function(){
    $(this).next().toggleClass('open');
  });
  
});