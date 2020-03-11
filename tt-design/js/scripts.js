// BOOTSTRAP VARS
const bootstrap_sm = '769px';
const bootstrap_md = '992px';


jQuery(document).ready(function ($) {

  //--ALL PAGES--//
  //HAMBURGER
  $('.hamburger').on('click',function () {
    let ham = $(this);
    ham.toggleClass('is-active');
    toggleMenu(ham);
  });

  // $('[data-toggle="tooltip"]').tooltip();

  //--HOME PAGE--//
  if ( $('body.home').length ) {

    //READ MORE SLIDE
    $('.readMoreLink').on('click',function () {
      let that = $(this);
      let target = that.siblings('.readMoreContent');
      $.when(that.fadeOut()).then(function () {
        that.addClass('d-none');
        target.slideDown();
      });
    });

    // TESTIMONIALS CAROUSEL
    $('.testis-carousel').slick({
      prevArrow: $('.cs-slick-right'),
      nextArrow: $('.cs-slick-left')
    });

    //MATCH HEIGHT, ADVANTAGES
    if ( window.matchMedia("(min-width: "+bootstrap_sm+")").matches ) {
      matchHeight($('.one-advantage-content .text'));
    }

  } //HOME PAGE

});

jQuery(window).on('load', function () {

  //--DOWNLOADS--//
  if ( $('body.downloads').length ) {

    //MATCH HEIGHT, ADVANTAGES
    if ( window.matchMedia("(min-width: "+bootstrap_md+")").matches ) {
      downloadsMatchHeight();
    }

  }
})

//MENU TOGGLE
function toggleMenu(ham) {

  let hamOffset       = ham.offset();
  let hamOffsetRight  = ($(window).width() - (hamOffset.left + ham.outerWidth()));
  let hamOffsetBottom = hamOffset.top + ham.outerHeight();
  let headerNav       = $('nav#headerNav');

  if (!headerNav.hasClass('toggled')) {
    headerNav.appendTo('body');
  }

  headerNav.addClass('toggled shadow');

  headerNav
    .toggleClass('is-visible')
    .removeClass('align-items-center d-lg-flex')
    .css('top',hamOffsetBottom)
    .css('right',hamOffsetRight);
}

//MATCH HEIGHT
function matchHeight(set) {
  var maxHeight = 0;
  // collect data from all
  set.each(function () {
    var thisHeight = jQuery(this).outerHeight();
    if (thisHeight > maxHeight) {
      maxHeight = thisHeight;
    }
  });
  // set data to all by max
  set.each(function () {
    jQuery(this).outerHeight(maxHeight);
  });
}

//DOWNLOADS MATCH HEIGHT
function downloadsMatchHeight() {
  matchHeight(jQuery('.downloads-item-wrapper .text h4'));
  matchHeight(jQuery('.downloads-item-wrapper .text'));
  matchHeight(jQuery('.downloads-item-wrapper .text-two'));
  matchHeight(jQuery('.downloads-item-wrapper h3'));
}
