$(function() {
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 150,
        itemMargin: 15,
        asNavFor: '#slider',
        touch: true
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: true,
        sync: "#carousel",
        slideshow: true,
        touch: true,
        slideshowSpeed: 3000,
        start: function() {
            //var index = 0;
            $('#slider').find('ul li').each(function(index, e) {
                //alert(e);
                $(this).find('span').data('rel', index);
            });
        }
    });


    $('#carousel .slides li').on('click touchstart', function() {
        $('.yt-play').each(function() {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            resetUrl();
        });
    });

    $('.play-btn').on('click touchstart', function(ev) {
        $('#carousel').flexslider('pause');
        $('#slider').flexslider('pause');
        $(this).siblings('.video-overlay').show();


        $('.yt-play').each(function() {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });

        var index = parseInt($(this).data('rel'));
        $(".yt-play")[index].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        $(".yt-play").contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        ev.preventDefault();        
    });
    
    function resetUrl() {
        $('#iframe1').attr('src', $('#iframe1').attr('src'));
        $('#iframe2').attr('src', $('#iframe2').attr('src'));
        $('#iframe3').attr('src', $('#iframe3').attr('src'));
        $('#iframe4').attr('src', $('#iframe4').attr('src'));
        $('#iframe5').attr('src', $('#iframe5').attr('src'));
    }
});
