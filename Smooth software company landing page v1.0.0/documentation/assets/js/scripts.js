$(document).ready(function(){
    $(".js-sticker").sticky({topSpacing:100});

    $('.js-link-scroll').click(function(){
        var _scrollTarget = $(this).attr('href'),
            _dataTarget = $('html, body').find(_scrollTarget).length,
            _winWidth = $(window).width();;
        if(_winWidth  > 991 ){
           var _offsetTop = 95
        }else{
            var _offsetTop = 120
        }

        if (_dataTarget != 0){
            $('html, body').animate({
                scrollTop: $(_scrollTarget).offset().top - _offsetTop
            }, 1000);
            return false;
        }
    });

    $(window).on("scroll", function(){
        var scrollPos = $(document).scrollTop();
        $('.js-link-scroll').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.js-link-scroll').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    });
  });

  