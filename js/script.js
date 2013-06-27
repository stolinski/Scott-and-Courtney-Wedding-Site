/* Author:

*/
$(document).ready(function() {

    $('#stor').waypoint(function() {
   		$('.story').toggleClass('active');
	});
    $('nav').waypoint(function() {
   		$(this).toggleClass('wbg');
	});

	//$.waypoints.settings.scrollThrottle = 30;

	$.scrollTo( 0 );
		// TOC, shows how to scroll the whole window
	$("a[href^='#']").click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
		$.scrollTo( this.hash, 800, { offset:-140 });
		return false;
	});

	$('.slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});

});

