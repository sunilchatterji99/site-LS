var globalIndex=13;
var left;
function removedata() {
    this.value = "";
}
function showData() {
   
    if (this.id == "nam") {

        if (this.value.length == 0) {
            this.value = "Name :";
        }
    }
    if (this.id == "email") {
        if (this.value.length == 0) {
            this.value = "E-Mail :";
        }
    }
    if (this.id == "phone") {
        if (this.value.length == 0) {
            this.value = "Phone :";
        }
    }
    if (this.id == "rbrief") {
        if (this.value.length == 0) {
            this.value = "Description (Optional) :";
        }
    }
}
$(function() {

    $(document).ready(function() {
        function get_browser() {
            var N = navigator.appName, ua = navigator.userAgent, tem;
            var M = ua.match(/(msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            return M[0];
        }
        function get_browser_version() {
            var N = navigator.appName, ua = navigator.userAgent, tem;
            var M = ua.match(/(msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            return M[1];
        }
        var browser = get_browser();
        var browser_version = parseInt(get_browser_version());
        //alert(browser_version)
        if (browser == 'MSIE' && browser_version < 10) {
            $('.topListing1').hover(function() {
                $('.txt').fadeIn();
            }, function() {
                $('.txt').fadeOut();
            });

            $('.topListing2').hover(function() {
                $('.txt2').fadeIn();
            }, function() {
                $('.txt2').fadeOut();
            });

            $('.topListing3').hover(function() {
                $('.txt3').fadeIn();
            }, function() {
                $('.txt3').fadeOut();
            });

            $('.topListing4').hover(function() {
                $('.txt4').fadeIn();
            }, function() {
                $('.txt4').fadeOut();
            });

        }
        if (browser == 'MSIE' && browser_version < 9) {
            var o = document.getElementById("nam");
            if (o.value.length == 0) {
                o.value = "Name";
                o.onblur = showData;
                o.onfocus = removedata;
            }
            o = document.getElementById("email");
            if (o.value.length == 0) {
                o.value = "E-mail ID";
                o.onblur = showData;
                o.onfocus = removedata;
            }
            o = document.getElementById("phone");
            if (o.value.length == 0) {
                o.value = "Phone";
                o.onblur = showData;
                o.onfocus = removedata;
            }
            o = document.getElementById("rbrief");
            if (o.value.length == 0) {
                o.value = "Share what you want";
                o.onblur = showData;
                o.onfocus = removedata;
            }
        }

    })


    var position = $('.section3 ul').position();
    left = position.left;
    //alert(left);
    //For main hovering
    /*$('.banner').children('li').hover(function(){
    var getIndex = $(this).index();
    $('.detailsSection > div').hide();
    $('.detailsSection').children('div').eq(getIndex).show();
    },function(){
    $('.detailsSection > div').hide();
    $('.detailsSection > div').eq(4).show();
    });*/
    //Scrollstop
    $('.listing a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 500);
        trackEvent("topLink",$(this).attr('href'));
        return false;
    });

    $('.team ul li').click(function() {
        var index = $(this).index();
        globalIndex = index;
        changeData();
          trackEvent("imageClick",globalIndex);
      

    });


});
function changeIndex(val){
	var valNext=globalIndex+val;
	if(valNext>1 && valNext<24){
		globalIndex=valNext;
		changeData();
         trackEvent("sideArrowClick",globalIndex);
      
	}
}
function changeData(){

	if(globalIndex>1 && globalIndex<24){
			$('.teamDescription ul li').hide();
			$('.teamDescription ul').children('li').eq(globalIndex-2).show();
		}	
	if(globalIndex<=1 || globalIndex>=24){
			 $('html, body').animate({
            	scrollTop: $('#contactUs').offset().top-75
       		 }, 500);
        	return false;
		}
		
		if(globalIndex>1 && globalIndex<=13){
		var	index=13-globalIndex;
		var multi=(index*150-(-left))+"px";
		$('.team ul').animate({'left': multi});
		$('.team ul li').removeClass('active');
        var inter=globalIndex+1;
		$('.team ul li:nth-child('+inter+')').addClass('active');
		}
		else if(globalIndex>=14 && globalIndex<24){
		var index=globalIndex-13;
		var multi=("-"+index*155-(-left))+"px";
		$('.team ul').animate({'left': multi});
		$('.team ul li').removeClass('active');
		var inter=globalIndex+1;
		$('.team ul li:nth-child('+inter+')').addClass('active');
		}		
}
$(document).scroll(function () {
	var height1 = $('.section1').height();
	var height2 = $('.section2').height()+height1;
	var height3 = $('.section3').height()+height2;
	var height4 = $('.section4').height()+height3-100;
    var y = $(this).scrollTop();
    if (y < height1 ) { 
        $('ul.nav li a').removeClass('active');
        $('ul.nav li .home1').addClass('active');
         trackEvent("scroll","home");
      
        //$('.fixedTxt2').show();
      //  $('.fixedTxt').hide();
    } 

   else if (y >= height1 && y<height2) {
        $('ul.nav li a').removeClass('active');
        $('ul.nav li .process1').addClass('active');
         trackEvent("scroll","process");
        //$('.fixedTxt').show();
        //$('.fixedTxt2').hide();
    } 
     else if (y >= height2 && y<height3) {
        $('ul.nav li a').removeClass('active');
        $('ul.nav li .team1').addClass('active');
         trackEvent("scroll","team");
        //$('.fixedTxt').hide();
        //$('.fixedTxt2').show();
    } 

    else if (y >= height3 && y<height4) {
        $('ul.nav li a').removeClass('active');
        $('ul.nav li .recetWork1').addClass('active');
         trackEvent("scroll","recentWork");
       // $('.fixedTxt').show();
        //$('.fixedTxt2').hide();
    } 

    else if (y >= height4) {
        $('ul.nav li a').removeClass('active');
        $('ul.nav li .contactUs1').addClass('active');
         trackEvent("scroll","contactUs");
       //$('.fixedTxt2').show();
        //$('.fixedTxt').hide();
    } 
})


