(function ($) {
    "use strict";
    var $breakPoint = 991;
    var $owl = $('.js-tab-carousel');
	var $owlOptions = {
        items:1,
        margin:0,
        nav:true,
        dots:false,
		touchDrag: false
    };
    
    var scripts = {
        initialize: function() {
            this.event(); 
            this.tabnavMobile(); 
            this.scroll(); 
            this.layout();
        },
        
        /*-----------------------------------------------
        * Custom js setting *
        ----------------------------------------------- */
        event : function(){

            /* Navigation */
            $('nav').coreNavigation({
                menuPosition: "right",
                container: true,
                responsideSlide: true,
                dropdownEvent: 'hover',
                onInit: function(){
                    $('ul.tabs > li > a').on( "click", function() {
                        e.preventDefault();
                        var tab_id = $(this).closest('li.tab-link').attr('data-tab');
            
                        $('ul.tabs li').removeClass('active');
                        $('.tab-content').removeClass('active');
            
                        $(this).closest('li.tab-link').addClass('active');
                        $("#"+tab_id).addClass('active');
                    })
                }
            });
            // Back to top click
            $(".js-back-to-top").on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            });

            // Owl carousel
            $('.js-owl-screenshot').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                dots:false,
                autoplay:true,
                autoplaySpeed:1500,
                autoplayTimeout:8000,
                navSpeed:1500,
                items:1
            })

            $('.js-owl-testimoni').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                dots:true,
                autoplay:true,
                autoplaySpeed:1500,
                autoplayTimeout:12000,
                navSpeed:1500,
                items:1
            })

            $('.js-owl-article').owlCarousel({
                loop:true,
                nav:false,
                dots:true,
                autoplay:true,
                responsiveClass:true,
                autoplaySpeed:1500,
                autoplayTimeout:18000,
                navSpeed:1500,
                responsive:{
                    0:{
                        slideBy:1,
                        margin:0,
                        items:1
                    },
                    991:{
                        slideBy:2,
                        margin:30,
                        items:2
                    }
                }
            })

            $('.js-owl-clients').owlCarousel({
                loop:true,
                nav:true,
                dots:false,
                autoplay:true,
                autoplaySpeed:1500,
                autoplayTimeout:20000,
                navSpeed:1500,
                responsive:{
                    0:{
                        margin:15,
                        items:1
                    },
                    767:{
                        margin:30,
                        items:3
                    },
                    991:{
                        margin:30,
                        items:3
                    },
                    1025:{
                        margin:60,
                        items:4
                    },
                    1200:{
                        margin:60,
                        items:5
                    }
                }
            })

            $('.js-owl-fullwidth').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                dots:false,
                autoplay:true,
                autoplaySpeed:1500,
                autoplayTimeout:9000,
                navSpeed:1500,
                items:3,
                responsive:{
                    0:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    991:{
                        items:2
                    },
                    1025:{
                        items:3
                    },
                    1200:{
                        items:3
                    }
                }
            })

            $('.js-owl-features').owlCarousel({
                loop:true,
                nav:false,
                dots:false,
                autoplay:true,
                margin:40,
                autoplaySpeed:1500,
                autoplayTimeout:9000,
                items:5,
                responsive:{
                    0:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    991:{
                        items:3
                    },
                    1025:{
                        items:4
                    },
                    1200:{
                        items:4
                    }
                }
            })

            $('.js-owl-team').owlCarousel({
                loop:true,
                nav:true,
                dots:false,
                autoplay:false,
                autoplaySpeed:1500,
                autoplayTimeout:20000,
                navSpeed:1500,
                responsive:{
                    0:{
                        margin:15,
                        items:1
                    },
                    767:{
                        margin:30,
                        items:2
                    },
                    991:{
                        margin:30,
                        items:2
                    },
                    1025:{
                        margin:60,
                        items:3
                    },
                    1200:{
                        margin:30,
                        items:3
                    }
                }
            })


            // Video player 
            $('.plyr__control--overlaid').on('click', function(){
                $('.plyr__controls').addClass("show")
            });

            // Video popup 
            $(".js-video-button").modalVideo({
                channel: 'youtube',
                youtube:{
                    autoplay: 1,
                    cc_load_policy: 1,
                    color: null,
                    controls: 1,
                    disablekb: 0,
                    enablejsapi: 0,
                    end: null,
                    fs: 1,
                    h1: null,
                    iv_load_policy: 1,
                    list: null,
                    listType: null,
                    loop: 0,
                    modestbranding: null,
                    origin: null,
                    playlist: null,
                    playsinline: null,
                    rel: 0,
                    showinfo: 1,
                    start: 0,
                    wmode: 'transparent',
                    theme: 'dark'
                }
              });

            //Tabs
            $('.js-tabs-navigation').each(function(){
                var $list = $('.js-nav-item', this).length;
                var $itemWidth = 100 / $list;

                $('.js-nav-item', this).css('width', $itemWidth + '%');
            });

            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                $('.tab-pane img').removeAttr('height');
                $('.tab-pane img').removeAttr('width');
            })

            // Select2
            $(".js-select").each(function(){
                var placeholder = $(this).attr('placeholder');
                $(this).select2({
                    placeholder: placeholder,
                    minimumResultsForSearch: -1,
                });
            });

            // Accordion
            $('.collapse').on('shown.bs.collapse', function(e) {
                var $card = $(this).closest('.accordion__group');
                var offsetTop = $('.header').height() + 30;

                if ( $(window).width() < $breakPoint ) {
                    var offsetTop = $('.header').height() + 50;
                } else {
                    var offsetTop = $('.header').height() + 30;
                }	

                console.log(offsetTop)
                $('html,body').animate({
                  scrollTop: $card.offset().top - offsetTop
                }, 500);
            });

            // Gallery filter
            $('.js-image-background').each(function(){
                var image =  $(this).data('image');
                $(this).css('background-image','url("'+ image +'")');
            });

            $('.js-item-image').mouseenter(function() {
                $('.gallery__item--image--overlay', this).addClass('show');
            })
            .mouseleave(function() {
                $('.gallery__item--image--overlay', this).removeClass('show');
            });

            // Imagge zooom
            $('.js-zoom-image').magnificPopup({
                type:'image',
                image: {
                    verticalFit: true,
                    titleSrc: function(item) {
                        return '<div class="mfp-heading">' + item.el.attr('data-title') + '</div> <div class="mfp-author"><strong>By : </strong>' + item.el.attr('data-author') + '</div>';
                    }
                },
                gallery: {
                    enabled: true
                },
            });

            // Link scroll
            $('.js-link-scroll').on( "click", function() {
                var _scrollTarget = $(this).attr('href'),
                    _dataTarget = $('html, body').find(_scrollTarget).length;

                if (_dataTarget != 0){
                    $('html, body').animate({
                        scrollTop: $(_scrollTarget).offset().top - 60
                    }, 1000);
                    return false;
                }
            });
        },
        
        tabnavMobile : function(){
            if ( $(window).width() < $breakPoint ) {
                $owl.addClass('owl-carousel');
                $owl.owlCarousel($owlOptions);
                setTimeout(function(){
                    $owl.trigger('refresh.owl.carousel');
                }, 500);
            } else {
                $('.owl-carousel li a.active').removeClass('active');
                $owl.removeClass('owl-carousel');
                $owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
            }	
        },

        scroll : function(){
            var scrollTop = $(window).scrollTop();
            // Navbar on scroll
            if(scrollTop > 0){
                $(".js-header-scroll").addClass("header__sticky");
            }else {
                $(".js-header-scroll").removeClass("header__sticky");
            }

            // Back to top show
            if(scrollTop > 800){
                $(".js-back-to-top").fadeIn();
            }else {
                $(".js-back-to-top").fadeOut();
            }
        },

        layout : function(){
            // Match height
            $('.js-match-height').matchHeight();

            // Header menu on mobile
            $( ".js-header-menu" ).prependTo( $( ".wrap-core-nav-list" ) );

            
            var $imgBg = $('.js-video-background-image').innerWidth();
            var $videoWidth = $imgBg * 76 / 100;
            var $halper = $imgBg - $videoWidth;
            var $pushLeft = $halper / 2;

            $('.js-video-background-wrapper').css('width', $videoWidth);
            $('.js-video-background-wrapper').css('left', $pushLeft);

        },

    };

    // Document ready
    $(document).ready(function(){
        scripts.initialize();
    });

    // Window on resize
    $(window).on("scroll", function(){  
        scripts.scroll();
    });

    // Reset on resize
    $(window).resize(function() {
        scripts.tabnavMobile();
        scripts.layout();
        setTimeout(function(){
            scripts.tabnavMobile();
            scripts.layout();
        }, 500); 
    });
}(jQuery));

