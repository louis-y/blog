/*

Template: Showkase - Minimal Portfolio Template
Author: iqonicthemes.in
Version: 1.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Back To Top
3.Header
4.tilt
5.Isotope
6.Portfolio move
7.Progress Bar
8.Magnific Popup
9.Countdown
10.widget
11.counter
12.Image Pieces
13.Wow Animation
14.Owl Carousel
15.Contact from

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");



    /*------------------------
    Back To Top
    --------------------------*/
    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    /*------------------------
    Header
    --------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
    var touch = $('#resp-menu');
    var menu = $('.menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });


    /*------------------------
    tilt
    --------------------------*/
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .9
    })


    /*------------------------
    Isotope
    --------------------------*/
    $('.isotope').isotope({
        itemSelector: '.grid-item',
    });

    // filter items on button click
    $('.isotope-filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.isotope').isotope({
            resizable: true,
            filter: filterValue
        });
        $('.isotope-filters button').removeClass('active');
        $(this).addClass('active');
    });


    /*------------------------
    Portfolio move
    --------------------------*/
    $(' .portfolio-cr> li ').each(function() {
        $(this).hoverdir({});
    });

    /*------------------------
    Progress Bar
    --------------------------*/
    $('.iq-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });


    /*------------------------
    Magnific Popup
    --------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });



    /*------------------------
    Countdown
    --------------------------*/
    $('#countdown').countdown({
        date: '10/01/2019 23:59:59',
        day: 'Day',
        days: 'Days'
    });


    /*------------------------
    widget
    --------------------------*/
    $('.iq-widget-menu > ul > li > a').on('click', function() {
        var checkElement = $(this).next();
        $('.iq-widget-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.iq-widget-menu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length === 0) {
            return true;
        } else {
            return false;
        }
    });


    /*------------------------
    counter
    --------------------------*/
    $('.timer').countTo();


    /*------------------------
    Image Pieces
    --------------------------*/
    {
        imagesLoaded(document.body, {
            background: true
        }, () => document.body.classList.remove('loading'));

        Array.from(document.querySelectorAll('.grid .pieces')).forEach((el, pos) => {
            const piecesObj = new Pieces(el, {
                pieces: {
                    rows: 10,
                    columns: 8
                },
                delay: [0, 25],
                bgimage: el.dataset.imageAlt
            });
            el.addEventListener('mouseenter', () => animateOut(piecesObj, pos));
            el.addEventListener('touchstart', () => animateOut(piecesObj, pos));
            el.addEventListener('mouseleave', () => animateIn(piecesObj, pos));
            el.addEventListener('touchend', () => animateOut(piecesObj, pos));
        });

        const animateOut = (instance, pos) => instance.animate({
            delay: (t, i, l) => {
                return parseInt(t.dataset.column) * parseInt(t.dataset.delay);
            },
            translateX: [{
                value: pos % 2 === 1 ? (t, i) => {
                    return anime.random(75, 150) + 'px';
                } : (t, i) => {
                    return anime.random(-150, -75) + 'px';
                },
                duration: 500,
                easing: 'easeOutQuad'
            }, {
                value: pos % 2 === 1 ? (t, i) => {
                    return anime.random(-1000, -400) + 'px';
                } : (t, i) => {
                    return anime.random(400, 1000) + 'px';
                },
                duration: 400,
                easing: 'easeOutExpo'
            }],
            translateY: [{
                value: (t, i) => {
                    return anime.random(-125, -75) + 'px';
                },
                duration: 500,
                easing: 'easeOutQuad'
            }, {
                value: (t, i) => {
                    return t.dataset.row < instance.getTotalRows() / 2 ? anime.random(100, 200) + 'px' : anime.random(-200, -100) + 'px';
                },
                duration: 400,
                easing: 'easeOutExpo'
            }],
            opacity: {
                value: 0,
                delay: 500,
                duration: 400,
                easing: 'easeOutExpo'
            }
        });

        const animateIn = (instance, pos) => instance.animate({
            duration: 500,
            easing: [0.8, 1, 0.3, 1],
            delay: (t, i) => {
                return pos % 2 === 1 ?
                    (instance.getTotalColumns() - parseInt(t.dataset.column)) * parseInt(t.dataset.delay) :
                    parseInt(t.dataset.column) * parseInt(t.dataset.delay);
            },
            translateX: '0px',
            translateY: '0px',
            opacity: {
                value: 1,
                duration: 500,
                easing: 'linear'
            }
        });
    }



    /*------------------------
    Wow Animation
    --------------------------*/
    new WOW().init();


    /*------------------------
    Owl Carousel
    --------------------------*/
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });


    /*------------------------
    Contact from
    --------------------------*/
    $('#contactform').submit(function(e) {
        var flag = 0;
        e.preventDefault(); // Prevent Default Submission
        $('.require').each(function() {
            if ($.trim($(this).val()) == '') {
                $(this).css("border", "1px solid red");
                e.preventDefault(); // Prevent Default Submission
                flag = 1;
            } else {
                $(this).css("border", "1px solid grey");
                flag = 0;
            }
        });

        if (grecaptcha.getResponse() == "") {
            flag = 1;
            alert('Please verify Recaptch');

        } else {
            flag = 0;
        }

        if (flag == 0) {
            $.ajax({
                    url: 'contact-form.php',
                    type: 'POST',
                    data: $("#contactform").serialize() // it will serialize the form data
                })
                .done(function(data) {
                    $("#result").html('Form was successfully submitted.');
                    $('#contactform')[0].reset();
                })
                .fail(function() {
                    alert('Ajax Submit Failed ...');
                });
        }

    });


});