"use strict";
// Animate loader off screen
$(window).load(function () {

    $(".loader").fadeOut("slow");
});

jQuery(document).ready(function () {

    // navbars
    var navbars = {
        // full screen side navbar
        sideNavBar: function () {
            $('.side-menu-button').on('click', function () {
                $('.sidenav').toggleClass("mySideBar");
                $(this).toggleClass("actives");
                $('.side-menu-button > i').toggleClass("fa-bars");
                $('.side-menu-button > i').toggleClass("fa-times");
            });
            $('.sidenav ul >li a').on('click', function () {
                $('.sidenav').removeClass("mySideBar");
                $('.side-menu-button').removeClass("actives");
                $('.side-menu-button > i').toggleClass("fa-bars");
                $('.side-menu-button > i').toggleClass("fa-times");
            });
        },
        //chainging navbar color on scroll
        navbarColor: function () {
            //scroll nav colors
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 70) { // Set position from top to add class
                    $('.navbar').addClass("shrink");
                    $('.yellow .navbar-brand> img').attr('src', 'images/yellow-dark.png');
                    $('.green .navbar-brand> img').attr('src', 'images/green-dark.png');
                    $('.blue .navbar-brand> img').attr('src', 'images/blue-dark.png');
                    $('.red .navbar-brand> img').attr('src', 'images/red-dark.png');
                    $('.orange .navbar-brand> img').attr('src', 'images/orange-dark.png');


                }
                else {
                    $('.navbar').removeClass("shrink");
                    $('.yellow .navbar-brand> img').attr('src', 'images/yellow-white.png');
                    $('.green .navbar-brand> img').attr('src', 'images/green-white.png');
                    $('.blue .navbar-brand> img').attr('src', 'images/blue-white.png');
                    $('.red .navbar-brand> img').attr('src', 'images/red-white.png');
                    $('.orange .navbar-brand> img').attr('src', 'images/orange-white.png');

                }


            });
        },
        index2Navbar: function () {

            $('.index2 .navbar-toggle').on('click', function () {
                window.scrollTo(0, 72);
            });


        }
    };
    // calling navbars
    navbars.sideNavBar();
    navbars.navbarColor();
    navbars.index2Navbar();

    // Revolution Sliders
    var revolutionSliders = {
        //  animateSlider
        animateSlider: function () {
            var revap = $("#revo_slider").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                scrollbarDrag: "true",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    //mouseScrollNavigation:"off",
                    //keyboardNavigation:"off",
                    arrows: {
                        enable: false
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    bullets: {
                        enable: 'true'
                    }
                },

                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%"
                },
                responsiveLevels: [1170, 992, 767, 480],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 7000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                    disable_onmobile: "on"
                },
                gridwidth: 1170,
                gridheight: 720,
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        },

        // simple and video slider1
        slider1: function () {
            jQuery("#slider1").revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                delay: 9000,
                navigation: {
                    bullets: {
                        enable: true,
                        direction: "vertical",
                        tmp: '<span class="tp-bullet-title">{{title}}</span>'
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                },

                gridwidth: 1230,
                gridheight: 720
            });
        },

        //tabs slider 
        tabSlider: function () {
            //  TABS Slider
            jQuery("#slider-tabs").revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                delay: 9000,
                navigation: {
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    tabs: {
                        style: "hesperiden",
                        enable: true,
                        width: 383,
                        height: 100,
                        min_width: 250,
                        wrapper_padding: 0,
                        wrapper_color: "",
                        wrapper_opacity: "1",
                        tmp: '<div class="tb-tab-content"><span class="tp-tab-number">{{param1}}</span><span class="tb-tab-title">{{title}}</span></div> <div class="tp-tab-desc">{{description}}</div>',
                        visibleAmount: 3,
                        hide_onmobile: true,
                        hide_under: 0,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: "horizontal",
                        span: true,
                        position: "inner",
                        space: 10,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 0

                    }

                },

                gridwidth: 1170,
                gridheight: 720
            });
        },
        // Parallax revo_slider
        parallaxSlider: function () {
            // --------- Revolution Slider

            var revaps = $("#parallax_slider").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                scrollbarDrag: "true",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    //mouseScrollNavigation:"off",
                    //keyboardNavigation:"off",
                    arrows: {
                        enable: false
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    bullets: {
                        enable: 'true'
                    }
                },

                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%"
                },
                responsiveLevels: [1170, 992, 767, 480],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 7000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                    disable_onmobile: "on"
                },
                gridwidth: 1170,
                gridheight: 720,
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                },
            });
        }
    };

    // calling revolution sliders
    revolutionSliders.animateSlider();
    revolutionSliders.slider1();
    revolutionSliders.tabSlider();
    revolutionSliders.parallaxSlider();

    // scrolling animation
    var scroll = {
      onClickScroll: function () {
          //scroll sections on clicking Links
          $(".scroll").on('click', function (event) {
              event.preventDefault();
              $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
          });
      },
        // mouse wheel scroll
       mouseWheelScroll: function () {
           if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
           window.onmousewheel = document.onmousewheel = wheel;

           function wheel(event) {
               var delta = 0;
               if (event.wheelDelta) delta = event.wheelDelta / 120;
               else if (event.detail) delta = -event.detail / 3;

               handle(delta);
               if (event.preventDefault) event.preventDefault();
               event.returnValue = false;
           }

           function handle(delta) {
               var time = 500;
               var distance = 500;

               $('html, body').stop().animate({
                   scrollTop: $(window).scrollTop() - (distance * delta)
               }, time );
           }
       }
    };
    // calling scrolling animation
    scroll.onClickScroll();
    //scroll.mouseWheelScroll();

    //responsive Tabs
    var tabs = "#responsiveTabsDemo";
    var responsiveTabs = {
        callTabs: function () {
            $(tabs).responsiveTabs({
                animation: 'slide'
            }, {'activate': '0'});
        }
    };
    responsiveTabs.callTabs();


    // our team image slider
    var ourTeamSlider = {
        sliderCall: function () {
            var imageSlider = ' #image-slider';
            $(imageSlider).owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 2,
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [979, 1],
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                stopOnHover: true
            });
        }
    };
    //call our team slider
    ourTeamSlider.sliderCall();

    // Client Slide
    var clientSlider = {
        sliderCall: function () {
            $("#client-slider").owlCarousel({

                navigation: true, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                stopOnHover: true

                // "singleItem:true" is a shortcut for:
                // items : 1,
                // itemsDesktop : false,
                // itemsDesktopSmall : false,
                // itemsTablet: false,
                // itemsMobile : false
            });
        }
    };
    //call client slider
    clientSlider.sliderCall();

    // progress bar funtion
    function progressBars() {
        var progressBar = $('.bottom-section .progress .progress-bar');
        progressBar.css({width: 0});
        progressBar.each(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });


    }

    // progress bar funtion call
    progressBars();


    var $portfolioTabs = {
        getAll: function () {
            var $load = $('#load');
            $('#stats').removeClass('bottom').addClass('top');
            $load.unbind();
            $load.text('Load More....');
            var $filter = $('.filter');
            $filter.hide('3000');
            $filter.each(function (index) {
                if (index === 2) {
                    return false;
                }
                $(this).addClass('even').show('3000');


            });


            $load.on('click', function () {
                $filter.addClass('even');
                $filter.show("3000");
                $(this).text("No More Element..");
            });
        },
        getItems: function () {
            var $getAll = this.getAll;
            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');
                var $filter = $('.filter');
                if (value === "all") {
                    $getAll();
                }
                else {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    var $load = $('#load');
                    $load.unbind();
                    $load.text('Load More....');
                    $('#stats').removeClass('top').addClass('bottom');
                    $filter.not('.' + value).hide('3000');
                    $filter.removeClass('even');
                    $filter.filter('.' + value).each(function (index) {
                        if (index === 2) {
                            return false;
                        }
                        $(this).show("3000");

                    });
                    $load.on('click', function () {
                        $filter.filter('.' + value).show("3000");
                        $(this).text("No More Element..");
                    });

                }
            })
        },
        activeClass: function () {
            $(".filter-button").on('click', function () {
                if ($(".filter-button").hasClass('active')) {
                    $(".filter-button").removeClass('active');
                }
                $(this).toggleClass('active');
            })
        },
        fancybox: function () {
            $('.fancybox').fancybox();
        }
    };

    $portfolioTabs.getItems();
    $portfolioTabs.getAll();
    $portfolioTabs.activeClass();
    $portfolioTabs.fancybox();
    //wow .js


    if ($(window).width() > 767) {
        new WOW().init();

    }
    if ($(window).width() < 768) {
    $('.vertical-heading').find('br').hide();

    }else {
        $('.vertical-heading').find('br').show();
        $('.tabs-bg').css({"min-height": $("#responsiveTabsDemo").find('img').height() + "px"});
        $(window).on('resize',function () {
            $('.tabs-bg').css({"min-height": $("#responsiveTabsDemo").find('img').height() + "px"});
        });

    }


    if($(window).width() < 768){
        $('.tabs-bg').css({"min-height": "350px"});
        $(window).on('resize',function () {
            $('.tabs-bg').css({"min-height" : "350px"});
        });
    }
    /* map */
    if ($('#map').length) {
        //Contact Map
        var map;
        map = new GMaps({
            el: '#map'
            , lat: 6.1694911
            , lng: -75.5890103
            , scrollwheel: false,
            zoom: 18
        });
        map.drawOverlay({
            lat: map.getCenter().lat()
            ,
            lng: map.getCenter().lng()
            ,
            layer: 'overlayLayer'
            ,
            content: '<div class="overlay_map"><img src="images/markeryellow.png" alt="marker"></div>'
            ,
            verticalAlign: 'top'
            ,
            horizontalAlign: 'center'
        });
    }
    /* map end*/

        /*----------------------*/ 
    /*       ACCORDION      */ 
    /*----------------------*/

    $('.wpc-accordion').on('click', '.panel-title', function(){
        var self = $(this);
        var panelWrap = self.parent();
        panelWrap.find('.panel-collapse').slideToggle('200');
        self.toggleClass('active');
        panelWrap.siblings().find('.panel-collapse').slideUp('200');
        panelWrap.siblings().find('.panel-title').removeClass('active');       
    });
    

    //========================
    // Back To Top
    //========================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        }
        else
        {
            $("#backToTop").removeClass('showit');
        }

    });
    $("body, html").on("click", "#backToTop", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });


    //========================
    // Contact Submit
    //========================
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit").html('Procesando...');
            var con_name = $("#con_name").val();
            var con_email = $("#con_email").val();
            var con_phone = $("#con_phone").val();
            var con_message = $("#con_message").val();
            var con_company = '';
            if ($("#con_company").length > 0)
            {
                con_company = $("#con_company").val();
            }


            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/mail.php',
                    data: {con_company: con_company, con_name: con_name, con_email: con_email, con_phone: con_phone, con_message: con_message},
                    success: function(data)
                    {
                        //alert(data);
                        $("#con_submit").html('Recibido!');
                        $("#contactForm input, #contactForm textarea").val('');
                        $(".contactSuccess").fadeIn('slow');
                        setTimeout(function() {
                            $(".contactSuccess").fadeOut('slow');
                        }, 2500);
                    }
                });
            }
            else
            {
                $("#con_submit").html('Envio Fallido!');
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }


    if ($("#subscriptionsforms").length > 0)
    {
        $("#subscriptionsforms").on('submit', function(e) {
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            $("#subs_submit").html('Procesando...');
            if (sub_email == '')
            {
                $("#sub_email").addClass('reqError');
                $("#subs_submit").html('Fallido!');
            }
            else
            {
                $("#sub_email").removeClass('reqError');
                $.ajax({
                    type: "POST",
                    url: "php/subscription.php",
                    data: {sub_email: sub_email},
                    success: function(data)
                    {
                        $("#subscriptionsforms input").val('');
                        $("#subs_submit").html('Recibido!');
                        $(".subscriptionSuccess").fadeIn('slow');
                        setTimeout(function() {
                            $(".subscriptionSuccess").fadeOut('slow');
                        }, 2500);
                    }
                });
            }
        });
        $("#sub_email").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }
    $(document).mouseup(function(e) {
        var container = $(".closers");

        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $(".subscriptionSuccess").fadeOut('slow');
        }
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $(".contactSuccess").fadeOut('slow');
        }
    });


})(jQuery);