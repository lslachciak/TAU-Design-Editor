!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TComm=e():t.TComm=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e,n){"use strict";var r=n(8)();t.exports=function(t){return t!==r&&null!==t}},function(t,e,n){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&(!0===r.contains("dwa")&&!1===r.contains("foo"))}},function(t,e,n){"use strict";t.exports=n(3)()?String.prototype.contains:n(2)},function(t,e,n){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,n){"use strict";var r=n(0),o=Array.prototype.forEach,i=Object.create;t.exports=function(t){var e=i(null);return o.call(arguments,function(t){r(t)&&function(t,e){var n;for(n in t)e[n]=t[n]}(Object(t),e)}),e}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";var r=n(0),o=Object.keys;t.exports=function(t){return o(r(t)?Object(t):t)}},function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,n){"use strict";t.exports=n(10)()?Object.keys:n(9)},function(t,e,n){"use strict";var r=n(11),o=n(7),i=Math.max;t.exports=function(t,e){var n,c,u,f=i(arguments.length,2);for(t=Object(o(t)),u=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},c=1;c<f;++c)e=arguments[c],r(e).forEach(u);if(void 0!==n)throw n;return t}},function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";t.exports=n(13)()?Object.assign:n(12)},function(t,e,n){"use strict";var r=n(14),o=n(6),i=n(5),c=n(4);(t.exports=function(t,e){var n,i,u,f,s;return arguments.length<2||"string"!=typeof t?(f=e,e=t,t=null):f=arguments[2],null==t?(n=u=!0,i=!1):(n=c.call(t,"c"),i=c.call(t,"e"),u=c.call(t,"w")),s={value:e,configurable:n,enumerable:i,writable:u},f?r(o(f),s):s}).gs=function(t,e,n){var u,f,s,a;return"string"!=typeof t?(s=n,n=e,e=t,t=null):s=arguments[3],null==e?e=void 0:i(e)?null==n?n=void 0:i(n)||(s=n,n=void 0):(s=e,e=n=void 0),null==t?(u=!0,f=!1):(u=c.call(t,"c"),f=c.call(t,"e")),a={get:e,set:n,configurable:u,enumerable:f},s?r(o(s),a):a}},function(t,e,n){"use strict";var r,o,i,c,u,f,s,a=n(15),l=n(1),p=Function.prototype.apply,y=Function.prototype.call,h=Object.create,d=Object.defineProperty,b=Object.defineProperties,v=Object.prototype.hasOwnProperty,_={configurable:!0,enumerable:!1,writable:!0};u={on:r=function(t,e){var n;return l(e),v.call(this,"__ee__")?n=this.__ee__:(n=_.value=h(null),d(this,"__ee__",_),_.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},once:o=function(t,e){var n,o;return l(e),o=this,r.call(this,t,n=function(){i.call(o,t,n),p.call(e,this,arguments)}),n.__eeOnceListener__=e,this},off:i=function(t,e){var n,r,o,i;if(l(e),!v.call(this,"__ee__"))return this;if(!(n=this.__ee__)[t])return this;if("object"==typeof(r=n[t]))for(i=0;o=r[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===r.length?n[t]=r[i?0:1]:r.splice(i,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},emit:c=function(t){var e,n,r,o,i;if(v.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;r=o[e];++e)p.call(r,this,i)}else switch(arguments.length){case 1:y.call(o,this);break;case 2:y.call(o,this,arguments[1]);break;case 3:y.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];p.call(o,this,i)}}},f={on:a(r),once:a(o),off:a(i),emit:a(c)},s=b({},f),t.exports=e=function(t){return null==t?h(s):b(Object(t),f)},e.methods=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(16)).default,i=function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this),this.confs=[],this.wsClients=[],"undefined"!=typeof window&&void 0!==window.TAUCOMM_HOSTS){var e=window.TAUCOMM_HOSTS;Array.isArray(e)?this.confs.concat(e):this.confs.push(e)}}return r(t,[{key:"start",value:function(){var t=this,e=[];return this.confs.forEach(function(n){e.push(new Promise(function(e,r){var o=null;try{o=new WebSocket("ws://"+n)}catch(t){r(t)}o.onopen=function(){e(t)},o.onmessage=function(e){var n=JSON.parse(e.data.toString("utf8"));t.emit(n.event,n)},o.onerror=function(t){console.error(t)},e(o)}))}),new Promise(function(n,r){Promise.all(e).then(function(e){e.forEach(function(e){e instanceof WebSocket&&t.wsClients.push(e)})}).catch(function(t){r(t)})})}},{key:"send",value:function(t,e){var n=JSON.stringify({event:t,data:e});console.log("sending",n),this.wsClients.forEach(function(t){t.send(n)})}}]),t}();e.default=i}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UQ29tbS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVENvbW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvaXMtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvdmFsaWQtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9zaGltLmpzIiwid2VicGFjazovL1RDb21tLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvc3RyaW5nLyMvY29udGFpbnMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9zdHJpbmcvIy9jb250YWlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9pcy1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9ub3JtYWxpemUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC92YWxpZC12YWx1ZS5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L2Z1bmN0aW9uL25vb3AuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9zaGltLmpzIiwid2VicGFjazovL1RDb21tLy4vbm9kZV9tb2R1bGVzL2VzNS1leHQvb2JqZWN0L2tleXMvaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3Qva2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vc2hpbS5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL25vZGVfbW9kdWxlcy9lczUtZXh0L29iamVjdC9hc3NpZ24vaXMtaW1wbGVtZW50ZWQuanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXM1LWV4dC9vYmplY3QvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL1RDb21tLy4vbm9kZV9tb2R1bGVzL2QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVENvbW0vLi9ub2RlX21vZHVsZXMvZXZlbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9UQ29tbS8uL3NyYy90Y29tbS1jbGllbnQuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl91bmRlZmluZWQiLCJ2YWwiLCJmbiIsIlR5cGVFcnJvciIsImluZGV4T2YiLCJTdHJpbmciLCJzZWFyY2hTdHJpbmciLCJ0aGlzIiwiYXJndW1lbnRzIiwic3RyIiwiY29udGFpbnMiLCJvYmoiLCJpc1ZhbHVlIiwiZm9yRWFjaCIsIkFycmF5Iiwib3B0czEiLCJyZXN1bHQiLCJvcHRpb25zIiwic3JjIiwicHJvY2VzcyIsImtleXMiLCJlIiwibWF4IiwiTWF0aCIsImRlc3QiLCJlcnJvciIsImFzc2lnbiIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZvbyIsImJhciIsInRyenkiLCJub3JtYWxpemVPcHRzIiwiaXNDYWxsYWJsZSIsImRzY3IiLCJ3IiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZ3MiLCJzZXQiLCJvbiIsIm9uY2UiLCJvZmYiLCJlbWl0IiwibWV0aG9kcyIsImRlc2NyaXB0b3JzIiwiYmFzZSIsImNhbGxhYmxlIiwiYXBwbHkiLCJGdW5jdGlvbiIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwidHlwZSIsImxpc3RlbmVyIiwiZGF0YSIsIl9fZWVfXyIsInB1c2giLCJzZWxmIiwiX19lZU9uY2VMaXN0ZW5lcl9fIiwibGlzdGVuZXJzIiwiY2FuZGlkYXRlIiwic3BsaWNlIiwiYXJncyIsInNsaWNlIiwiRXZlbnRFbWl0dGVyIiwiZGVmYXVsdCIsIlRDb21tIiwiX2NsYXNzQ2FsbENoZWNrIiwiY29uZnMiLCJ3c0NsaWVudHMiLCJUQVVDT01NX0hPU1RTIiwiY29uZiIsImlzQXJyYXkiLCJjb25jYXQiLCJfdGhpcyIsInJ1bnMiLCJob3N0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjbGllbnQiLCJXZWJTb2NrZXQiLCJlcnIiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsImV2ZW50Iiwib25lcnJvciIsImNvbnNvbGUiLCJhbGwiLCJ0aGVuIiwiY2xpZW50cyIsImNhdGNoIiwic3RyaW5naWZ5IiwibG9nIiwic2VuZCJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsRUFBQUMsR0FDQSxpQkFBQUMsU0FBQSxpQkFBQUMsT0FDQUEsT0FBQUQsUUFBQUQsSUFDQSxtQkFBQUcsZUFBQUMsSUFDQUQsVUFBQUgsR0FDQSxpQkFBQUMsUUFDQUEsUUFBQSxNQUFBRCxJQUVBRCxFQUFBLE1BQUFDLElBUkEsQ0FTQ0ssT0FBQSxXQUNELG1CQ1RB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QUdsQkosRUFBUUUsUUFJVCxJQUFJSCxRQUFRLFNBQUNDLEVBQVNDLEdBQ3pCRixRQUFRZSxJQUFJakIsR0FDUGtCLEtBQUssU0FBQ0MsR0FDSEEsRUFBUWxGLFFBQVEsU0FBQ29FLEdBQ1RBLGFBQWtCQyxXQUNsQlAsRUFBS0wsVUFBVWIsS0FBS3dCLE9BSS9CZSxNQUFNLFNBQUNiLEdBQ0pILEVBQU9HLG9DQUtyQk8sRUFBT25DLEdBQ0wsSUFBTStCLEVBQU1DLEtBQUtVLFdBQVdQLFFBQU9uQyxTQUNuQ3FDLFFBQVFNLElBQUksVUFBV1osR0FDdkIvRSxLQUFLK0QsVUFBVXpELFFBQVEsU0FBQ29FLEdBQ3BCQSxFQUFPa0IsS0FBS2Isd0JBS1RuQiIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUQ29tbVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUQ29tbVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3VuZGVmaW5lZCA9IHJlcXVpcmUoXCIuLi9mdW5jdGlvbi9ub29wXCIpKCk7IC8vIFN1cHBvcnQgRVMzIGVuZ2luZXNcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsKSB7XG4gcmV0dXJuICh2YWwgIT09IF91bmRlZmluZWQpICYmICh2YWwgIT09IG51bGwpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoZm4gKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcblx0cmV0dXJuIGZuO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaW5kZXhPZiA9IFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLyosIHBvc2l0aW9uKi8pIHtcblx0cmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLCBzZWFyY2hTdHJpbmcsIGFyZ3VtZW50c1sxXSkgPiAtMTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0ciA9IFwicmF6ZHdhdHJ6eVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBzdHIuY29udGFpbnMgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gKHN0ci5jb250YWlucyhcImR3YVwiKSA9PT0gdHJ1ZSkgJiYgKHN0ci5jb250YWlucyhcImZvb1wiKSA9PT0gZmFsc2UpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2lzLWltcGxlbWVudGVkXCIpKClcblx0PyBTdHJpbmcucHJvdG90eXBlLmNvbnRhaW5zXG5cdDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIi8vIERlcHJlY2F0ZWRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4vaXMtdmFsdWVcIik7XG5cbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKHNyYywgb2JqKSB7XG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIHNyYykgb2JqW2tleV0gPSBzcmNba2V5XTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0czEgLyosIOKApm9wdGlvbnMqLykge1xuXHR2YXIgcmVzdWx0ID0gY3JlYXRlKG51bGwpO1xuXHRmb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdGlmICghaXNWYWx1ZShvcHRpb25zKSkgcmV0dXJuO1xuXHRcdHByb2Nlc3MoT2JqZWN0KG9wdGlvbnMpLCByZXN1bHQpO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzVmFsdWUgPSByZXF1aXJlKFwiLi9pcy12YWx1ZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0aWYgKCFpc1ZhbHVlKHZhbHVlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgbnVsbCBvciB1bmRlZmluZWRcIik7XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5LWZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc1ZhbHVlID0gcmVxdWlyZShcIi4uL2lzLXZhbHVlXCIpO1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIGtleXMoaXNWYWx1ZShvYmplY3QpID8gT2JqZWN0KG9iamVjdCkgOiBvYmplY3QpOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR0cnkge1xuXHRcdE9iamVjdC5rZXlzKFwicHJpbWl0aXZlXCIpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKSA/IE9iamVjdC5rZXlzIDogcmVxdWlyZShcIi4vc2hpbVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIga2V5cyAgPSByZXF1aXJlKFwiLi4va2V5c1wiKVxuICAsIHZhbHVlID0gcmVxdWlyZShcIi4uL3ZhbGlkLXZhbHVlXCIpXG4gICwgbWF4ICAgPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGVzdCwgc3JjIC8qLCDigKZzcmNuKi8pIHtcblx0dmFyIGVycm9yLCBpLCBsZW5ndGggPSBtYXgoYXJndW1lbnRzLmxlbmd0aCwgMiksIGFzc2lnbjtcblx0ZGVzdCA9IE9iamVjdCh2YWx1ZShkZXN0KSk7XG5cdGFzc2lnbiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHR0cnkge1xuXHRcdFx0ZGVzdFtrZXldID0gc3JjW2tleV07XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlO1xuXHRcdH1cblx0fTtcblx0Zm9yIChpID0gMTsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0c3JjID0gYXJndW1lbnRzW2ldO1xuXHRcdGtleXMoc3JjKS5mb3JFYWNoKGFzc2lnbik7XG5cdH1cblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGVycm9yO1xuXHRyZXR1cm4gZGVzdDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLCBvYmo7XG5cdGlmICh0eXBlb2YgYXNzaWduICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0b2JqID0geyBmb286IFwicmF6XCIgfTtcblx0YXNzaWduKG9iaiwgeyBiYXI6IFwiZHdhXCIgfSwgeyB0cnp5OiBcInRyenlcIiB9KTtcblx0cmV0dXJuIChvYmouZm9vICsgb2JqLmJhciArIG9iai50cnp5KSA9PT0gXCJyYXpkd2F0cnp5XCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaXMtaW1wbGVtZW50ZWRcIikoKVxuXHQ/IE9iamVjdC5hc3NpZ25cblx0OiByZXF1aXJlKFwiLi9zaGltXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduICAgICAgICA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L2Fzc2lnbicpXG4gICwgbm9ybWFsaXplT3B0cyA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L25vcm1hbGl6ZS1vcHRpb25zJylcbiAgLCBpc0NhbGxhYmxlICAgID0gcmVxdWlyZSgnZXM1LWV4dC9vYmplY3QvaXMtY2FsbGFibGUnKVxuICAsIGNvbnRhaW5zICAgICAgPSByZXF1aXJlKCdlczUtZXh0L3N0cmluZy8jL2NvbnRhaW5zJylcblxuICAsIGQ7XG5cbmQgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkc2NyLCB2YWx1ZS8qLCBvcHRpb25zKi8pIHtcblx0dmFyIGMsIGUsIHcsIG9wdGlvbnMsIGRlc2M7XG5cdGlmICgoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHx8ICh0eXBlb2YgZHNjciAhPT0gJ3N0cmluZycpKSB7XG5cdFx0b3B0aW9ucyA9IHZhbHVlO1xuXHRcdHZhbHVlID0gZHNjcjtcblx0XHRkc2NyID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuXHR9XG5cdGlmIChkc2NyID09IG51bGwpIHtcblx0XHRjID0gdyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsICdjJyk7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2UnKTtcblx0XHR3ID0gY29udGFpbnMuY2FsbChkc2NyLCAndycpO1xuXHR9XG5cblx0ZGVzYyA9IHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IGMsIGVudW1lcmFibGU6IGUsIHdyaXRhYmxlOiB3IH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuXG5kLmdzID0gZnVuY3Rpb24gKGRzY3IsIGdldCwgc2V0LyosIG9wdGlvbnMqLykge1xuXHR2YXIgYywgZSwgb3B0aW9ucywgZGVzYztcblx0aWYgKHR5cGVvZiBkc2NyICE9PSAnc3RyaW5nJykge1xuXHRcdG9wdGlvbnMgPSBzZXQ7XG5cdFx0c2V0ID0gZ2V0O1xuXHRcdGdldCA9IGRzY3I7XG5cdFx0ZHNjciA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1szXTtcblx0fVxuXHRpZiAoZ2V0ID09IG51bGwpIHtcblx0XHRnZXQgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoZ2V0KSkge1xuXHRcdG9wdGlvbnMgPSBnZXQ7XG5cdFx0Z2V0ID0gc2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKHNldCA9PSBudWxsKSB7XG5cdFx0c2V0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKHNldCkpIHtcblx0XHRvcHRpb25zID0gc2V0O1xuXHRcdHNldCA9IHVuZGVmaW5lZDtcblx0fVxuXHRpZiAoZHNjciA9PSBudWxsKSB7XG5cdFx0YyA9IHRydWU7XG5cdFx0ZSA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSBjb250YWlucy5jYWxsKGRzY3IsICdjJyk7XG5cdFx0ZSA9IGNvbnRhaW5zLmNhbGwoZHNjciwgJ2UnKTtcblx0fVxuXG5cdGRlc2MgPSB7IGdldDogZ2V0LCBzZXQ6IHNldCwgY29uZmlndXJhYmxlOiBjLCBlbnVtZXJhYmxlOiBlIH07XG5cdHJldHVybiAhb3B0aW9ucyA/IGRlc2MgOiBhc3NpZ24obm9ybWFsaXplT3B0cyhvcHRpb25zKSwgZGVzYyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZCAgICAgICAgPSByZXF1aXJlKCdkJylcbiAgLCBjYWxsYWJsZSA9IHJlcXVpcmUoJ2VzNS1leHQvb2JqZWN0L3ZhbGlkLWNhbGxhYmxlJylcblxuICAsIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LCBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGxcbiAgLCBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xuICAsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIGRlc2NyaXB0b3IgPSB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH1cblxuICAsIG9uLCBvbmNlLCBvZmYsIGVtaXQsIG1ldGhvZHMsIGRlc2NyaXB0b3JzLCBiYXNlO1xuXG5vbiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuXHR2YXIgZGF0YTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkge1xuXHRcdGRhdGEgPSBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlKG51bGwpO1xuXHRcdGRlZmluZVByb3BlcnR5KHRoaXMsICdfX2VlX18nLCBkZXNjcmlwdG9yKTtcblx0XHRkZXNjcmlwdG9yLnZhbHVlID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHRkYXRhID0gdGhpcy5fX2VlX187XG5cdH1cblx0aWYgKCFkYXRhW3R5cGVdKSBkYXRhW3R5cGVdID0gbGlzdGVuZXI7XG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhW3R5cGVdID09PSAnb2JqZWN0JykgZGF0YVt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ZWxzZSBkYXRhW3R5cGVdID0gW2RhdGFbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcblx0dmFyIG9uY2UsIHNlbGY7XG5cblx0Y2FsbGFibGUobGlzdGVuZXIpO1xuXHRzZWxmID0gdGhpcztcblx0b24uY2FsbCh0aGlzLCB0eXBlLCBvbmNlID0gZnVuY3Rpb24gKCkge1xuXHRcdG9mZi5jYWxsKHNlbGYsIHR5cGUsIG9uY2UpO1xuXHRcdGFwcGx5LmNhbGwobGlzdGVuZXIsIHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0pO1xuXG5cdG9uY2UuX19lZU9uY2VMaXN0ZW5lcl9fID0gbGlzdGVuZXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxub2ZmID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG5cdHZhciBkYXRhLCBsaXN0ZW5lcnMsIGNhbmRpZGF0ZSwgaTtcblxuXHRjYWxsYWJsZShsaXN0ZW5lcik7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuIHRoaXM7XG5cdGRhdGEgPSB0aGlzLl9fZWVfXztcblx0aWYgKCFkYXRhW3R5cGVdKSByZXR1cm4gdGhpcztcblx0bGlzdGVuZXJzID0gZGF0YVt0eXBlXTtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IgKGkgPSAwOyAoY2FuZGlkYXRlID0gbGlzdGVuZXJzW2ldKTsgKytpKSB7XG5cdFx0XHRpZiAoKGNhbmRpZGF0ZSA9PT0gbGlzdGVuZXIpIHx8XG5cdFx0XHRcdFx0KGNhbmRpZGF0ZS5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMikgZGF0YVt0eXBlXSA9IGxpc3RlbmVyc1tpID8gMCA6IDFdO1xuXHRcdFx0XHRlbHNlIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmICgobGlzdGVuZXJzID09PSBsaXN0ZW5lcikgfHxcblx0XHRcdFx0KGxpc3RlbmVycy5fX2VlT25jZUxpc3RlbmVyX18gPT09IGxpc3RlbmVyKSkge1xuXHRcdFx0ZGVsZXRlIGRhdGFbdHlwZV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0dmFyIGksIGwsIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIGFyZ3M7XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdfX2VlX18nKSkgcmV0dXJuO1xuXHRsaXN0ZW5lcnMgPSB0aGlzLl9fZWVfX1t0eXBlXTtcblx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblxuXHRpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcblx0XHRmb3IgKGkgPSAxOyBpIDwgbDsgKytpKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuXHRcdGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuXHRcdGZvciAoaSA9IDA7IChsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXSk7ICsraSkge1xuXHRcdFx0YXBwbHkuY2FsbChsaXN0ZW5lciwgdGhpcywgYXJncyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0Y2FsbC5jYWxsKGxpc3RlbmVycywgdGhpcywgYXJndW1lbnRzWzFdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdGNhbGwuY2FsbChsaXN0ZW5lcnMsIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRsID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHRhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblx0XHRcdGFwcGx5LmNhbGwobGlzdGVuZXJzLCB0aGlzLCBhcmdzKTtcblx0XHR9XG5cdH1cbn07XG5cbm1ldGhvZHMgPSB7XG5cdG9uOiBvbixcblx0b25jZTogb25jZSxcblx0b2ZmOiBvZmYsXG5cdGVtaXQ6IGVtaXRcbn07XG5cbmRlc2NyaXB0b3JzID0ge1xuXHRvbjogZChvbiksXG5cdG9uY2U6IGQob25jZSksXG5cdG9mZjogZChvZmYpLFxuXHRlbWl0OiBkKGVtaXQpXG59O1xuXG5iYXNlID0gZGVmaW5lUHJvcGVydGllcyh7fSwgZGVzY3JpcHRvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbiAobykge1xuXHRyZXR1cm4gKG8gPT0gbnVsbCkgPyBjcmVhdGUoYmFzZSkgOiBkZWZpbmVQcm9wZXJ0aWVzKE9iamVjdChvKSwgZGVzY3JpcHRvcnMpO1xufTtcbmV4cG9ydHMubWV0aG9kcyA9IG1ldGhvZHM7XG4iLCJpbXBvcnQgKiBhcyBlZSBmcm9tICdldmVudC1lbWl0dGVyJztcbmNvbnN0IEV2ZW50RW1pdHRlciA9IGVlLmRlZmF1bHQ7XG5cbmNsYXNzIFRDb21tIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0RXZlbnRFbWl0dGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbmZzID0gW107XG4gICAgICAgIHRoaXMud3NDbGllbnRzID0gW107XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVEFVQ09NTV9IT1NUUyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgY29uZiA9IHdpbmRvdy5UQVVDT01NX0hPU1RTO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmYpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25mcy5wdXNoKGNvbmYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZzLmNvbmNhdChjb25mKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG5cblx0c3RhcnQoKSB7XG4gICAgICAgIHZhciBydW5zID0gW107XG5cbiAgICAgICAgdGhpcy5jb25mcy5mb3JFYWNoKChob3N0KSA9PiB7XG4gICAgICAgICAgICBydW5zLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjbGllbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJyArIGhvc3QpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGllbnQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xpZW50Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IEpTT04ucGFyc2UoZS5kYXRhLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQobXNnLmV2ZW50LCBtc2cpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjbGllbnQub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGNsaWVudCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHJ1bnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGNsaWVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50cy5mb3JFYWNoKChjbGllbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGllbnQgaW5zdGFuY2VvZiBXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndzQ2xpZW50cy5wdXNoKGNsaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXHR9XG5cblx0c2VuZChldmVudCwgZGF0YSkge1xuICAgICAgICBjb25zdCBtc2cgPSBKU09OLnN0cmluZ2lmeSh7ZXZlbnQsIGRhdGF9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcnLCBtc2cpO1xuICAgICAgICB0aGlzLndzQ2xpZW50cy5mb3JFYWNoKChjbGllbnQpID0+IHtcbiAgICAgICAgICAgIGNsaWVudC5zZW5kKG1zZyk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRDb21tO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==