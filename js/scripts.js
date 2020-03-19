// BOOTSTRAP VARS
const bootstrap_sm = '769px';
const bootstrap_md = '992px';


jQuery(document).ready(function ($) {

  //refresh on mobile orientationchange
  $(window).bind('orientationchange', function (event) {
    location.reload(true);
  });

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

  // DOWNLOADS
  if ($('body.downloads').length) {
    // TOOLTIPS
    let copyText = 'Copy pull command to clipboard';

    //cn-copy
    $('.cn-copy')
      .attr('data-original-title', copyText)
      .tooltip()
      .click(function () {
        let textToCopy = $(this).data('copy-value');
        copyToClipboard(textToCopy);
        $(this)
        .tooltip('hide')
        .attr('data-original-title', "Copied!")
        .tooltip('show');
      });

    $(".cn-copy-multiline")
    .attr('data-original-title', copyText)
    .tooltip()
    .click(function () {
      let targetId   = $(this).data('copy-target');
      let copyTarget = $(targetId);
      let copyString = copyTarget.val();
      copyString     = copyString.trim();
      copyTarget.val(copyString);
      copyTarget.select();
      document.execCommand('copy');
      $(this)
      .tooltip('hide')
      .attr('data-original-title', "Copied!")
      .tooltip('show');
    });

    //cn-options
    $('.cn-options')
      .tooltip()
      .click(function () {
        $(this)
          .toggleClass('active');
        if ($(this).hasClass('active')) {
          $(this)
            .tooltip('hide')
            .attr('data-original-title', "Hide")
            .tooltip('show');
        } else {
          $(this)
            .tooltip('hide')
            .attr('data-original-title', "Download")
            .tooltip('show');
        }

      });

    $('.cn-download').tooltip();

  }


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
  matchHeight(jQuery('.downloads-item-wrapper .small-installers'));
}

//copy text to clipboard
function copyToClipboard(string) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(string).select();
    document.execCommand("copy");
    $temp.remove();
}
