webpackJsonp([0,1],[function(e,n,t){"use strict";function a(e){var n,t,a,u,p,l,c,h=!1;(0,o.handleType)(e,o.eventType.handleStart,function(e){h=!0,u=e.target,a=u.offsetLeft,p=u.offsetTop,n=e.pageX,l=e.pageY},!1).handleType,(0,o.handleType)(e,o.eventType.handleMove,function(e){h&&(t=e.pageX-n+a,c=e.pageY-l+p,u.style.left=t+"px",u.style.top=c+"px")},!1).handleType,(0,o.handleType)(e,o.eventType.handleLeave,function(e){h=!1},!1).handleType,(0,o.handleType)(e,o.eventType.handleUp,function(e){h=!1},!1).handleType}var o=t(1);a("#btn")},function(e,n){"use strict";function t(){var e=navigator.userAgent,n=e.indexOf("Mobile")>0,t=n?"touchstart":"mousedown",a=n?"touchmove":"mousemove",o=n?"touchend":"mouseleave",u=n?"touchcancel":"mouseup";return{handleStart:t,handleMove:a,handleLeave:o,handleUp:u,isMobile:n}}function a(e,n,t,a){var o=navigator.userAgent,u=document.querySelector(e),p=!!e.attachEvent,l=o.indexOf("Mobile")>0,c=p?u.attachEvent(n,function(e){var n=l?e.targetTouches[0]:e;t(n)}):u.addEventListener(n,function(e){var n=l?e.targetTouches[0]:e;t(n)},a);return{handleType:c}}n.eventType=t(),n.handleType=a}]);