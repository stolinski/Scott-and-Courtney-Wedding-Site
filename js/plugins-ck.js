// window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
// (function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
// (function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());
// $(document).ready(function() {
//   function filterPath(string) {
//   return string
//     .replace(/^\//,'')
//     .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
//     .replace(/\/$/,'');
//   }
//   var locationPath = filterPath(location.pathname);
//   var scrollElem = scrollableElement('html', 'body');
//   $('a[href*=#]').each(function() {
//     var thisPath = filterPath(this.pathname) || locationPath;
//     if (  locationPath == thisPath
//     && (location.hostname == this.hostname || !this.hostname)
//     && this.hash.replace(/#/,'') ) {
//       var $target = $(this.hash), target = this.hash;
//       if (target) {
//         var targetOffset = $target.offset().top;
//         $(this).click(function(event) {
//           event.preventDefault();
//           $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
//             location.hash = target;
//           });
//         });
//       }
//     }
//   });
//   // use the first element that is "scrollable"
//   function scrollableElement(els) {
//     for (var i = 0, argLength = arguments.length; i <argLength; i++) {
//       var el = arguments[i],
//           $scrollElement = $(el);
//       if ($scrollElement.scrollTop()> 0) {
//         return el;
//       } else {
//         $scrollElement.scrollTop(1);
//         var isScrollable = $scrollElement.scrollTop()> 0;
//         $scrollElement.scrollTop(0);
//         if (isScrollable) {
//           return el;
//         }
//       }
//     }
//     return [];
//   }
// });
;