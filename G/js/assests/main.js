/**
* @package Helix3 Framework
* @author JoomShaper http://www.joomshaper.com
* @copyright Copyright (c) 2010 - 2015 JoomShaper
* @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/

jQuery(function($) {

    // The function actually applying the offset
    function offsetAnchor() {
        if(location.hash.length !== 0) {            
            var spHeaderHeight = $('#sp-header').height();
            var scrollHeight = parseInt(spHeaderHeight) + parseInt(50);
            window.scrollTo(window.scrollX, window.scrollY - scrollHeight );
        }
    }

    // This will capture hash changes while on the page
    $(window).on("hashchange", function () {
        offsetAnchor();
		jQuery('html, body').animate({
			scrollTop: jQuery('body').find(getClass).offset().top
		}, 500);
    });

    // This is here so that when you enter the page with a hash,
    // seems necessary to allow the browser to jump to the anchor first.
    $(window).load(function() {
        offsetAnchor();
    });

    $('#offcanvas-toggler').on('click', function(event){
        event.preventDefault();
        $('body').toggleClass('offcanvas');
    });

    $('.close-offcanvas').on('click', function(event){
        event.preventDefault();
        $('body').removeClass('offcanvas');
    });

    //Mega Menu
    $('.sp-megamenu-wrapper').parent().parent().css('position','static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function(){
        $(this).parent().addClass('menu-justify');
    });

    //Sticky Menu
    $(document).ready(function(){
    	$("body.sticky-header").find('#sp-header').sticky({topSpacing:0})
    });

    //Tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
	
	//parallax-scrolling
	$('section.parallax-scroll').attr('data-stellar-background-ratio','0.3');
	
	//remove this to validate html5
	$('ul.sp-contact-info').find("script").removeAttr('cf-hash');
	
	//charts
	$(function() {
		$('.chart').easyPieChart({
        //your configuration goes here
		lineWidth:11,
		trackColor:'#dddddd' ,
		barColor:mjcolor,
		scaleColor:false,
		lineCap:'butt',
		animate:({ duration: 6000, enabled: true })
    });
});

});