// BOOTSTRAP VARS
const bootstrap_sm    = '769px';
const bootstrap_md    = '992px';
var shuffleHasStarted = false;
// import $ from 'jquery.min';


jQuery(document).ready(function($) {

  $('.lazy').Lazy();

  $('.small-title-lazy').Lazy({
    afterLoad: function() {
      if (window.matchMedia("(min-width: " + bootstrap_sm + ")").matches) {
        matchHeight($('.small-title'));
      }
    }
  })

  //refresh on mobile orientationchange
  $(window).bind('orientationchange', function(event) {
    location.reload(true);
  });

  //--ALL PAGES--//
  //HAMBURGER
  $('.hamburger').on('click', function() {
    let ham = $(this);
    ham.toggleClass('is-active');
    toggleMenu($, ham);
  });

  // $('[data-toggle="tooltip"]').tooltip();

  //--HOME PAGE--//
  if ($('body.home').length) {

    testiSlick($);

    //MATCH HEIGHT, ADVANTAGES
    if (window.matchMedia("(min-width: " + bootstrap_sm + ")").matches) {
      matchHeight($('.one-advantage-content .text'));
      matchHeight($('.advantage-text .line-1'));
    }

    //shuffleUsers(true);

  } //HOME PAGE

  // DOWNLOADS
  if ($('body.downloads').length) {
    // TOOLTIPS
    let copyText     = 'Copy install command to clipboard';
    let downloadText = 'Download';
    let goToURLText  = 'Go To URL';
    let showCommandText  = 'Show full install command';


    $('.cn-download').tooltip({
      title: downloadText
    });


    $('.show-full-command').tooltip();

    //cn-link
    $('.cn-link').tooltip({
      title: goToURLText
    });

    //dropdown functionality (windows)
     $('.package-wrapper.normal-dropdown a.dropdown-item').click(function(){
       let that           = $(this);
       let text           = that.text();
       let downloadURL    = that.data('href');
       let packageWrapper = that.closest('.package-wrapper');
       let dropdownToggle = packageWrapper.find('.dropdown-toggle');
       let downloadBtn    = packageWrapper.find('.cn-download');
       dropdownToggle.text(text);
       downloadBtn.attr('href', downloadURL);
     });

     //dropdown functionality (rpm, debian)
     $('.package-wrapper.package-copy-plus-download a.dropdown-item').click(function(e){
       let that           = $(this);
       let text           = that.text();
       let packageWrapper = that.closest('.package-wrapper');
       let dropdownToggle = packageWrapper.find('.dropdown-toggle');
       let packageBtn     = packageWrapper.find('.cn-action');
       dropdownToggle.text(text);
       if (that.hasClass('dropdown-item-copy')) { //clicked on copy option
         packageBtn.removeClass('cn-download').addClass('cn-copy-multiline');
         packageBtn.attr('data-original-title', copyText);
         packageBtn.attr('href', '#');
       } else {
         let downloadURL = packageBtn.data('href');
         packageBtn.removeClass('cn-copy-multiline').addClass('cn-download');
         packageBtn.attr('data-original-title', downloadText);
         packageBtn.attr('href', downloadURL);
       }
     });

     $('.package-wrapper.package-copy-plus-download').on('click', '.cn-copy-multiline', function (e) {
       e.preventDefault();
       console.log($(this));
       let targetSelector = $(this).data('copy-target');
       let copyTarget     = $(targetSelector);
       let copyString     = copyTarget.val();
       copyString         = copyString.trim();
       copyTarget.val(copyString);
       copyTarget.select();
       document.execCommand('copy');
       $(this)
         .tooltip('hide')
         .attr('data-original-title', "Copied!")
         .tooltip('show');
     });


    //cn-copy
    $('.cn-copy')
      .attr('data-original-title', copyText)
      .tooltip()
      .click(function() {
        let textToCopy = $(this).data('copy-value');
        copyToClipboard($, textToCopy);
        $(this)
          .tooltip('hide')
          .attr('data-original-title', "Copied!")
          .tooltip('show');
      });

    $('.cn-copy-multiline').tooltip({
      title: copyText
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

  }



});
$.fn.randomize = function(selector){
  (selector ? this.find(selector) : this).parent().each(function(){
    $(this).children(selector).sort(function(){
      return Math.random() - 0.5;
    }).detach().appendTo(this);
  });

  return this;
};

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
function toggleMenu($, ham) {

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
  if (set.length < 2) return;
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
  matchHeight(jQuery('.front-text'))
}

//copy text to clipboard
function copyToClipboard($, string) {
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




function testiSlick($) {
  // TESTIMONIALS CAROUSEL
  $('.testis-carousel').slick({
    prevArrow: $('.cs-slick-right'),
    nextArrow: $('.cs-slick-left'),
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}
