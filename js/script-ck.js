/* Author:

*/$(document).ready(function(){$("#stor").waypoint(function(){$(".story").toggleClass("active")});$("nav").waypoint(function(){$(this).toggleClass("wbg")});$.scrollTo(0);$("a[href^='#']").click(function(){$.scrollTo(this.hash,800,{offset:-140});return!1})});