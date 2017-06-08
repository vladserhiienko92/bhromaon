function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(".menu-item__link").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.length) {
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(".menu-item__link.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }   
        }
    });
}

$(document).ready(function() {

    $(document).on('focus', 'input, textarea', function() {

        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');

    });

    $(document).on('blur', 'input, textarea', function() {

        $(this).attr('placeholder', $(this).data('placeholder'));

    });

    $('.main-slider').slick({
        "arrows": true,
        "dotts": true
    });

    $(document).on('click', '.mobile-icon', function(e) {

        e.preventDefault();

        $('.mobile-menu').addClass("act");
        $('.mobile').css('overflow', 'hidden');

    });

    $(document).on('click', '.mobile-icon-active', function(e) {

        e.preventDefault();

        $('.mobile-menu').removeClass("act");
        $('.mobile').css('overflow', '');

    });

    $(document).on('click', '.scroll-down, .menu-item__link', function(e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(document).on('click', '.mobile-link', function(e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('.mobile-menu').removeClass("act");
        $('.mobile').css('overflow', '');
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var fixed_head_pos = $("#header-menu").offset().top,
        fixed_head_height = $("#header-menu").outerHeight();

    $(document).scroll(function() {

        onScroll();

        var scroll_top = $(window).scrollTop();
        if ( scroll_top >= fixed_head_pos ) {
            $("#header-menu").addClass("fixed");
            $("body").css("padding-top", fixed_head_height + "px");
        } else {
            $("#header-menu").removeClass("fixed");
            $("body").css("padding-top", 0);
        }

    });


});