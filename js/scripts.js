$(document).ready(function(){
    //Activate user slider
    $('.our-users-slider').slick({
        variableWidth: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        cssEase: 'linear',
        //gap: 0,
        arrows: false,
        dots: false,
        pauseOnHover: true
    });

    //Activate testimonials slider
    $('.testimonial-slider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        speed: 800,
        accessibility: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    configClipboard($);
    configPopover($);
});

function configClipboard($) {
    $('#downloads .artifactory-docker-image-cta').click(function (event) {
        event.preventDefault();
        var copytext = $(this).next('.to-copy').val();
        console.log(copytext);
        var $temp = $('<input>');
        $('body').append($temp);
        $temp.val(copytext).select();
        var copied = document.execCommand('copy');

        $temp.remove();
        if (isSafariNine()) {
            $(this).find('.popover-body').html('Press Command+C!');
        }
        else if (copied) {
            $(this).find('.popover-body').html('Copied!');
        }
        else {
            $(this).find('.popover-body').html('Error!');
        }
    });

    document.body.addEventListener('click', function () {
    }, false);
}

function isSafariNine() {

    navigator.sayswho = (function () {
        var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    if (navigator.sayswho.indexOf('Safari') > -1) {
        var version = navigator.sayswho.replace('Safari ', '')
        return parseInt(version) < 10;
    } else {
        return false;
    }
}

function configPopover($) {
    var pop = $('[data-toggle="popover"]');
    pop.each(function () {
        var $elem = $(this);
        $elem.popover({
            placement: 'bottom',
            trigger: 'hover',
            html: false,
            container: $elem,
            animation: false
        });
    });
}
