'use strict';

// window.onunload = function () { };
// function size_check() {
//     w = window.innerWidth ? window.innerWidth : $(window).width();
//     h = window.innerHeight ? window.innerHeight : $(window).height();
// }

let windowSize = $(window).width();
$(function () {
    if (windowSize > 767) {
    } else {
    $("header .drawer").click(function () {
        $('body').toggleClass('nav-open');
        $('header .header-wrapper__nav').fadeToggle(200);
    }); 
    $(".header-wrapper__nav__list__item a").click(function () {
        $('body').toggleClass('nav-open');
        $('header .header-wrapper__nav').fadeToggle(200);
    });
    }
});

//スクロールした際にアニメーションを実行する。
$(function () {
    if (windowSize > 769) {
    } else {
    $("header .drawer").click(function () {
        $('body').toggleClass('nav-open');
        $('header .header-wrapper__nav').fadeToggle(200);
    }); 
    $(".header-wrapper__nav__list__item a").click(function () {
        $('body').toggleClass('nav-open');
        $('header .header-wrapper__nav').fadeToggle(200);
    });
    }
});

// フェードイン
function fadeIn() {
    $('.fadeUpTrigger').each(function() {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
    $(this).addClass('fadeUp');
    }else {
    $(this).removeClass('fadeUp');
    }
});

$('.fadeLeftTrigger').each(function() {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
    $(this).addClass('fadeLeft');
    }else {
    $(this).removeClass('fadeLeft');
    }
});

$('.fadeRightTrigger').each(function() {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
    $(this).addClass('fadeRight');
    }else {
    $(this).removeClass('fadeRight');
    }
});
}

$(window).scroll(function() {
fadeIn();
});


//slider
$(function() {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        dots: false,
    });
});



