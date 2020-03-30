// BOOTSTRAP VARS
const bootstrap_sm    = '769px';
const bootstrap_md    = '992px';
var shuffleHasStarted = false;


jQuery(document).ready(function($) {

  $('.lazy').Lazy();

  //refresh on mobile orientationchange
  $(window).bind('orientationchange', function(event) {
    location.reload(true);
  });

  //--ALL PAGES--//
  //HAMBURGER
  $('.hamburger').on('click', function() {
    let ham = $(this);
    ham.toggleClass('is-active');
    toggleMenu(ham);
  });

  // $('[data-toggle="tooltip"]').tooltip();

  //--HOME PAGE--//
  if ($('body.home').length) {

    //READ MORE SLIDE
    $('.readMoreLink').on('click', function() {
      let that = $(this);
      let target = that.siblings('.readMoreContent');
      $.when(that.fadeOut()).then(function() {
        that.addClass('d-none');
        target.slideDown();
      });
    });

    // TESTIMONIALS CAROUSEL
    $('.testis-carousel').slick({
      prevArrow: $('.cs-slick-right'),
      nextArrow: $('.cs-slick-left'),
      slidesToShow: 3,
      slidesToScroll: 3
    });

    //MATCH HEIGHT, ADVANTAGES
    if (window.matchMedia("(min-width: " + bootstrap_sm + ")").matches) {
      matchHeight($('.one-advantage-content .text'));
    }

    shuffleUsers(true);

  } //HOME PAGE

  // DOWNLOADS
  if ($('body.downloads').length) {
    // TOOLTIPS
    let copyText = 'Copy pull command to clipboard';

    //cn-copy
    $('.cn-copy')
      .attr('data-original-title', copyText)
      .tooltip()
      .click(function() {
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
      .click(function(e) {
        let targetId = $(this).data('copy-target');
        let copyTarget = $(targetId);
        let copyString = copyTarget.val();
        copyString = copyString.trim();
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
      .click(function(event) {

        //already active, turn off.
        if ($(this).hasClass('active')) {
          $('.cn-options').removeClass('active');
          $(this)
            .tooltip('hide')
            .attr('data-original-title', "Show Options")
            .tooltip('show');
        }
        //not active
        else {
          $('.cn-options').removeClass('active');
          $(this)
            .addClass('active')
            .tooltip('hide')
            .attr('data-original-title', "Hide")
            .tooltip('show');
        }


      });

    $('.cn-download').tooltip();

    if ($(window).width() <= 768) { //position option box on small width devices

        $('.cn-options').each(function () {

          let that                = $(this);
          let installersContainer = that.parent('.installers.small-installers.pb-4');
          let icOffset            = installersContainer.offset();
          let tooltip             = that.find('.cn-dl-inner');
          let installersWidth     = installersContainer.outerWidth();
          let tooltipWidth        = tooltip.outerWidth();
          let widthDelta          = installersWidth - tooltipWidth;
          let tooltipOffset       = tooltip.offset();
          let offSetDelta         = icOffset.left - tooltipOffset.left;
          let absIndex            = that.index()+1;
          let alignment           = '';
          if (absIndex%4 <= 2) {
            alignment = 'left';
          } else {
            alignment = 'right';
          }

          tooltip.css('left', 'auto');
          if (alignment == 'left' || $(window).width() < 412) {
            tooltip.css('right', -offSetDelta );
          } else {
            tooltip.css('right', -(offSetDelta+widthDelta) );
          }
        });

    }

  }


});

jQuery(window).on('load', function() {

  //--DOWNLOADS--//
  if ($('body.downloads').length) {

    //MATCH HEIGHT
    if (window.matchMedia("(min-width: " + bootstrap_md + ")").matches) {
      downloadsMatchHeight();
    }

  }

})

//MENU TOGGLE
function toggleMenu(ham) {

  let hamOffset = ham.offset();
  let hamOffsetRight = ($(window).width() - (hamOffset.left + ham.outerWidth()));
  let hamOffsetBottom = hamOffset.top + ham.outerHeight();
  let headerNav = $('nav#headerNav');

  if (!headerNav.hasClass('toggled')) {
    headerNav.appendTo('body');
  }

  headerNav.addClass('toggled shadow');

  headerNav
    .toggleClass('is-visible')
    .removeClass('align-items-center d-lg-flex')
    .css('top', hamOffsetBottom)
    .css('right', hamOffsetRight);
}

//MATCH HEIGHT
function matchHeight(set) {
  var maxHeight = 0;
  // collect data from all
  set.each(function() {
    var thisHeight = jQuery(this).outerHeight();
    if (thisHeight > maxHeight) {
      maxHeight = thisHeight;
    }
  });
  // set data to all by max
  set.each(function() {
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

//shuffle
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//shuffle users
function shuffleUsers(shuffleStack) {

  shuffleHasStarted    = true;

  const intervalFactor = 3000;
  const fadeFactor     = intervalFactor/5;
  const numOfBoxes     = $('.users-flex .user-box').length;
  const stockWrapper   = $('#usersStock'); if (shuffleStack) stockWrapper.find('img').randomize();
  var i                = 0;
  var time             = intervalFactor;
  arr                  = Array.apply(null, {length: numOfBoxes}).map(Number.call, Number);
  shuffleArray(arr);

  setInterval(function(){

    v       = arr[i];
    i++;
    if (i > 14) i = 0;

    userBox = $('.user-box').eq(v);
    boxImg  = userBox.find('img');

    boxImg.fadeOut(fadeFactor, function () {
      boxImg.appendTo(stockWrapper);
      stockImg = stockWrapper.find('img').first();
      stockImg.appendTo(userBox).hide().fadeIn(fadeFactor);
    })

  }, intervalFactor);
}


$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};
