/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
(function () {
	'use strict';

	var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
	function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }


	var babelHelpers = {};
	babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	babelHelpers.defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	babelHelpers.extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	babelHelpers.objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	babelHelpers.toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	babelHelpers;

	var webflowEnv = __commonjs(function (module, exports) {
	/**
	 * Returns a Boolean representing whether or not the client is a mobile browser.
	 *
	 * NOTE: Many thanks to detectmobilebrowsers.com for this user agent detection
	 * regex, without which the mobile internet probably wouldn't exist.
	 */
	exports.isMobile = function() {
	  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
	         .test(userAgent) ||
	         /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
	         .test(userAgent.substr(0, 4));
	};
	});

	var require$$0 = (webflowEnv && typeof webflowEnv === 'object' && 'default' in webflowEnv ? webflowEnv['default'] : webflowEnv);

	/*!
	 * tram.js v0.8.2-global
	 * Cross-browser CSS3 transitions in JavaScript
	 * https://github.com/bkwld/tram
	 * MIT License
	 */
	window.tram=function(a){function b(a,b){var c=new M.Bare;return c.init(a,b)}function c(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function d(a){var b=parseInt(a.slice(1),16),c=b>>16&255,d=b>>8&255,e=255&b;return[c,d,e]}function e(a,b,c){return"#"+(1<<24|a<<16|b<<8|c).toString(16).slice(1)}function f(){}function g(a,b){j("Type warning: Expected: ["+a+"] Got: ["+typeof b+"] "+b)}function h(a,b,c){j("Units do not match ["+a+"]: "+b+", "+c)}function i(a,b,c){if(void 0!==b&&(c=b),void 0===a)return c;var d=c;return $.test(a)||!_.test(a)?d=parseInt(a,10):_.test(a)&&(d=1e3*parseFloat(a)),0>d&&(d=0),d===d?d:c}function j(a){U.debug&&window&&window.console.warn(a)}function k(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}var l=function(a,b,c){function d(a){return"object"==typeof a}function e(a){return"function"==typeof a}function f(){}function g(h,i){function j(){var a=new k;return e(a.init)&&a.init.apply(a,arguments),a}function k(){}i===c&&(i=h,h=Object),j.Bare=k;var l,m=f[a]=h[a],n=k[a]=j[a]=new f;return n.constructor=j,j.mixin=function(b){return k[a]=j[a]=g(j,b)[a],j},j.open=function(a){if(l={},e(a)?l=a.call(j,n,m,j,h):d(a)&&(l=a),d(l))for(var c in l)b.call(l,c)&&(n[c]=l[c]);return e(n.init)||(n.init=h),j},j.open(i)}return g}("prototype",{}.hasOwnProperty),m={ease:["ease",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-2.75*f*e+11*e*e+-15.5*f+8*e+.25*a)}],"ease-in":["ease-in",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-1*f*e+3*e*e+-3*f+2*e)}],"ease-out":["ease-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(.3*f*e+-1.6*e*e+2.2*f+-1.8*e+1.9*a)}],"ease-in-out":["ease-in-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(2*f*e+-5*e*e+2*f+2*e)}],linear:["linear",function(a,b,c,d){return c*a/d+b}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(a,b,c,d){return c*(a/=d)*a+b}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(a,b,c,d){return-c*(a/=d)*(a-2)+b}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(a,b,c,d){return c*(a/=d)*a*a+b}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(a,b,c,d){return c*(a/=d)*a*a*a+b}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(a,b,c,d){return c*(a/=d)*a*a*a*a+b}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(a,b,c,d){return 0===a?b:a===d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}]},n={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},o=document,p=window,q="bkwld-tram",r=/[\-\.0-9]/g,s=/[A-Z]/,t="number",u=/^(rgb|#)/,v=/(em|cm|mm|in|pt|pc|px)$/,w=/(em|cm|mm|in|pt|pc|px|%)$/,x=/(deg|rad|turn)$/,y="unitless",z=/(all|none) 0s ease 0s/,A=/^(width|height)$/,B=" ",C=o.createElement("a"),D=["Webkit","Moz","O","ms"],E=["-webkit-","-moz-","-o-","-ms-"],F=function(a){if(a in C.style)return{dom:a,css:a};var b,c,d="",e=a.split("-");for(b=0;b<e.length;b++)d+=e[b].charAt(0).toUpperCase()+e[b].slice(1);for(b=0;b<D.length;b++)if(c=D[b]+d,c in C.style)return{dom:c,css:E[b]+a}},G=b.support={bind:Function.prototype.bind,transform:F("transform"),transition:F("transition"),backface:F("backface-visibility"),timing:F("transition-timing-function")};if(G.transition){var H=G.timing.dom;if(C.style[H]=m["ease-in-back"][0],!C.style[H])for(var I in n)m[I][0]=n[I]}var J=b.frame=function(){var a=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return a&&G.bind?a.bind(p):function(a){p.setTimeout(a,16)}}(),K=b.now=function(){var a=p.performance,b=a&&(a.now||a.webkitNow||a.msNow||a.mozNow);return b&&G.bind?b.bind(a):Date.now||function(){return+new Date}}(),L=l(function(b){function d(a,b){var c=k((""+a).split(B)),d=c[0];b=b||{};var e=Y[d];if(!e)return j("Unsupported property: "+d);if(!b.weak||!this.props[d]){var f=e[0],g=this.props[d];return g||(g=this.props[d]=new f.Bare),g.init(this.$el,c,e,b),g}}function e(a,b,c){if(a){var e=typeof a;if(b||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==e&&b)return this.timer=new S({duration:a,context:this,complete:h}),void(this.active=!0);if("string"==e&&b){switch(a){case"hide":o.call(this);break;case"stop":l.call(this);break;case"redraw":p.call(this);break;default:d.call(this,a,c&&c[1])}return h.call(this)}if("function"==e)return void a.call(this,this);if("object"==e){var f=0;u.call(this,a,function(a,b){a.span>f&&(f=a.span),a.stop(),a.animate(b)},function(a){"wait"in a&&(f=i(a.wait,0))}),t.call(this),f>0&&(this.timer=new S({duration:f,context:this}),this.active=!0,b&&(this.timer.complete=h));var g=this,j=!1,k={};J(function(){u.call(g,a,function(a){a.active&&(j=!0,k[a.name]=a.nextStyle)}),j&&g.$el.css(k)})}}}function f(a){a=i(a,0),this.active?this.queue.push({options:a}):(this.timer=new S({duration:a,context:this,complete:h}),this.active=!0)}function g(a){return this.active?(this.queue.push({options:a,args:arguments}),void(this.timer.complete=h)):j("No active transition timer. Use start() or wait() before then().")}function h(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var a=this.queue.shift();e.call(this,a.options,!0,a.args)}}function l(a){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var b;"string"==typeof a?(b={},b[a]=1):b="object"==typeof a&&null!=a?a:this.props,u.call(this,b,v),t.call(this)}function m(a){l.call(this,a),u.call(this,a,w,x)}function n(a){"string"!=typeof a&&(a="block"),this.el.style.display=a}function o(){l.call(this),this.el.style.display="none"}function p(){this.el.offsetHeight}function r(){l.call(this),a.removeData(this.el,q),this.$el=this.el=null}function t(){var a,b,c=[];this.upstream&&c.push(this.upstream);for(a in this.props)b=this.props[a],b.active&&c.push(b.string);c=c.join(","),this.style!==c&&(this.style=c,this.el.style[G.transition.dom]=c)}function u(a,b,e){var f,g,h,i,j=b!==v,k={};for(f in a)h=a[f],f in Z?(k.transform||(k.transform={}),k.transform[f]=h):(s.test(f)&&(f=c(f)),f in Y?k[f]=h:(i||(i={}),i[f]=h));for(f in k){if(h=k[f],g=this.props[f],!g){if(!j)continue;g=d.call(this,f)}b.call(this,g,h)}e&&i&&e.call(this,i)}function v(a){a.stop()}function w(a,b){a.set(b)}function x(a){this.$el.css(a)}function y(a,c){b[a]=function(){return this.children?A.call(this,c,arguments):(this.el&&c.apply(this,arguments),this)}}function A(a,b){var c,d=this.children.length;for(c=0;d>c;c++)a.apply(this.children[c],b);return this}b.init=function(b){if(this.$el=a(b),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,U.keepInherited&&!U.fallback){var c=W(this.el,"transition");c&&!z.test(c)&&(this.upstream=c)}G.backface&&U.hideBackface&&V(this.el,G.backface.css,"hidden")},y("add",d),y("start",e),y("wait",f),y("then",g),y("next",h),y("stop",l),y("set",m),y("show",n),y("hide",o),y("redraw",p),y("destroy",r)}),M=l(L,function(b){function c(b,c){var d=a.data(b,q)||a.data(b,q,new L.Bare);return d.el||d.init(b),c?d.start(c):d}b.init=function(b,d){var e=a(b);if(!e.length)return this;if(1===e.length)return c(e[0],d);var f=[];return e.each(function(a,b){f.push(c(b,d))}),this.children=f,this}}),N=l(function(a){function b(){var a=this.get();this.update("auto");var b=this.get();return this.update(a),b}function c(a,b,c){return void 0!==b&&(c=b),a in m?a:c}function d(a){var b=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);return(b?e(b[1],b[2],b[3]):a).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var f={duration:500,ease:"ease",delay:0};a.init=function(a,b,d,e){this.$el=a,this.el=a[0];var g=b[0];d[2]&&(g=d[2]),X[g]&&(g=X[g]),this.name=g,this.type=d[1],this.duration=i(b[1],this.duration,f.duration),this.ease=c(b[2],this.ease,f.ease),this.delay=i(b[3],this.delay,f.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=A.test(this.name),this.unit=e.unit||this.unit||U.defaultUnit,this.angle=e.angle||this.angle||U.defaultAngle,U.fallback||e.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+B+this.duration+"ms"+("ease"!=this.ease?B+m[this.ease][0]:"")+(this.delay?B+this.delay+"ms":""))},a.set=function(a){a=this.convert(a,this.type),this.update(a),this.redraw()},a.transition=function(a){this.active=!0,a=this.convert(a,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==a&&(a=b.call(this))),this.nextStyle=a},a.fallback=function(a){var c=this.el.style[this.name]||this.convert(this.get(),this.type);a=this.convert(a,this.type),this.auto&&("auto"==c&&(c=this.convert(this.get(),this.type)),"auto"==a&&(a=b.call(this))),this.tween=new R({from:c,to:a,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.get=function(){return W(this.el,this.name)},a.update=function(a){V(this.el,this.name,a)},a.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,V(this.el,this.name,this.get()));var a=this.tween;a&&a.context&&a.destroy()},a.convert=function(a,b){if("auto"==a&&this.auto)return a;var c,e="number"==typeof a,f="string"==typeof a;switch(b){case t:if(e)return a;if(f&&""===a.replace(r,""))return+a;c="number(unitless)";break;case u:if(f){if(""===a&&this.original)return this.original;if(b.test(a))return"#"==a.charAt(0)&&7==a.length?a:d(a)}c="hex or rgb string";break;case v:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit)";break;case w:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit or %)";break;case x:if(e)return a+this.angle;if(f&&b.test(a))return a;c="number(deg) or string(angle)";break;case y:if(e)return a;if(f&&w.test(a))return a;c="number(unitless) or string(unit or %)"}return g(c,a),a},a.redraw=function(){this.el.offsetHeight}}),O=l(N,function(a,b){a.init=function(){b.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),u))}}),P=l(N,function(a,b){a.init=function(){b.init.apply(this,arguments),this.animate=this.fallback},a.get=function(){return this.$el[this.name]()},a.update=function(a){this.$el[this.name](a)}}),Q=l(N,function(a,b){function c(a,b){var c,d,e,f,g;for(c in a)f=Z[c],e=f[0],d=f[1]||c,g=this.convert(a[c],e),b.call(this,d,g,e)}a.init=function(){b.init.apply(this,arguments),this.current||(this.current={},Z.perspective&&U.perspective&&(this.current.perspective=U.perspective,V(this.el,this.name,this.style(this.current)),this.redraw()))},a.set=function(a){c.call(this,a,function(a,b){this.current[a]=b}),V(this.el,this.name,this.style(this.current)),this.redraw()},a.transition=function(a){var b=this.values(a);this.tween=new T({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease});var c,d={};for(c in this.current)d[c]=c in b?b[c]:this.current[c];this.active=!0,this.nextStyle=this.style(d)},a.fallback=function(a){var b=this.values(a);this.tween=new T({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.update=function(){V(this.el,this.name,this.style(this.current))},a.style=function(a){var b,c="";for(b in a)c+=b+"("+a[b]+") ";return c},a.values=function(a){var b,d={};return c.call(this,a,function(a,c,e){d[a]=c,void 0===this.current[a]&&(b=0,~a.indexOf("scale")&&(b=1),this.current[a]=this.convert(b,e))}),d}}),R=l(function(b){function c(a){1===n.push(a)&&J(g)}function g(){var a,b,c,d=n.length;if(d)for(J(g),b=K(),a=d;a--;)c=n[a],c&&c.render(b)}function i(b){var c,d=a.inArray(b,n);d>=0&&(c=n.slice(d+1),n.length=d,c.length&&(n=n.concat(c)))}function j(a){return Math.round(a*o)/o}function k(a,b,c){return e(a[0]+c*(b[0]-a[0]),a[1]+c*(b[1]-a[1]),a[2]+c*(b[2]-a[2]))}var l={ease:m.ease[1],from:0,to:1};b.init=function(a){this.duration=a.duration||0,this.delay=a.delay||0;var b=a.ease||l.ease;m[b]&&(b=m[b][1]),"function"!=typeof b&&(b=l.ease),this.ease=b,this.update=a.update||f,this.complete=a.complete||f,this.context=a.context||this,this.name=a.name;var c=a.from,d=a.to;void 0===c&&(c=l.from),void 0===d&&(d=l.to),this.unit=a.unit||"","number"==typeof c&&"number"==typeof d?(this.begin=c,this.change=d-c):this.format(d,c),this.value=this.begin+this.unit,this.start=K(),a.autoplay!==!1&&this.play()},b.play=function(){this.active||(this.start||(this.start=K()),this.active=!0,c(this))},b.stop=function(){this.active&&(this.active=!1,i(this))},b.render=function(a){var b,c=a-this.start;if(this.delay){if(c<=this.delay)return;c-=this.delay}if(c<this.duration){var d=this.ease(c,0,1,this.duration);return b=this.startRGB?k(this.startRGB,this.endRGB,d):j(this.begin+d*this.change),this.value=b+this.unit,void this.update.call(this.context,this.value)}b=this.endHex||this.begin+this.change,this.value=b+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},b.format=function(a,b){if(b+="",a+="","#"==a.charAt(0))return this.startRGB=d(b),this.endRGB=d(a),this.endHex=a,this.begin=0,void(this.change=1);if(!this.unit){var c=b.replace(r,""),e=a.replace(r,"");c!==e&&h("tween",b,a),this.unit=c}b=parseFloat(b),a=parseFloat(a),this.begin=this.value=b,this.change=a-b},b.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=f};var n=[],o=1e3}),S=l(R,function(a){a.init=function(a){this.duration=a.duration||0,this.complete=a.complete||f,this.context=a.context,this.play()},a.render=function(a){var b=a-this.start;b<this.duration||(this.complete.call(this.context),this.destroy())}}),T=l(R,function(a,b){a.init=function(a){this.context=a.context,this.update=a.update,this.tweens=[],this.current=a.current;var b,c;for(b in a.values)c=a.values[b],this.current[b]!==c&&this.tweens.push(new R({name:b,from:this.current[b],to:c,duration:a.duration,delay:a.delay,ease:a.ease,autoplay:!1}));this.play()},a.render=function(a){var b,c,d=this.tweens.length,e=!1;for(b=d;b--;)c=this.tweens[b],c.context&&(c.render(a),this.current[c.name]=c.value,e=!0);return e?void(this.update&&this.update.call(this.context)):this.destroy()},a.destroy=function(){if(b.destroy.call(this),this.tweens){var a,c=this.tweens.length;for(a=c;a--;)this.tweens[a].destroy();this.tweens=null,this.current=null}}}),U=b.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!G.transition,agentTests:[]};b.fallback=function(a){if(!G.transition)return U.fallback=!0;U.agentTests.push("("+a+")");var b=new RegExp(U.agentTests.join("|"),"i");U.fallback=b.test(navigator.userAgent)},b.fallback("6.0.[2-5] Safari"),b.tween=function(a){return new R(a)},b.delay=function(a,b,c){return new S({complete:b,duration:a,context:c})},a.fn.tram=function(a){return b.call(null,this,a)};var V=a.style,W=a.css,X={transform:G.transform&&G.transform.css},Y={color:[O,u],background:[O,u,"background-color"],"outline-color":[O,u],"border-color":[O,u],"border-top-color":[O,u],"border-right-color":[O,u],"border-bottom-color":[O,u],"border-left-color":[O,u],"border-width":[N,v],"border-top-width":[N,v],"border-right-width":[N,v],"border-bottom-width":[N,v],"border-left-width":[N,v],"border-spacing":[N,v],"letter-spacing":[N,v],margin:[N,v],"margin-top":[N,v],"margin-right":[N,v],"margin-bottom":[N,v],"margin-left":[N,v],padding:[N,v],"padding-top":[N,v],"padding-right":[N,v],"padding-bottom":[N,v],"padding-left":[N,v],"outline-width":[N,v],opacity:[N,t],top:[N,w],right:[N,w],bottom:[N,w],left:[N,w],"font-size":[N,w],"text-indent":[N,w],"word-spacing":[N,w],width:[N,w],"min-width":[N,w],"max-width":[N,w],height:[N,w],"min-height":[N,w],"max-height":[N,w],"line-height":[N,y],"scroll-top":[P,t,"scrollTop"],"scroll-left":[P,t,"scrollLeft"]},Z={};G.transform&&(Y.transform=[Q],Z={x:[w,"translateX"],y:[w,"translateY"],rotate:[x],rotateX:[x],rotateY:[x],scale:[t],scaleX:[t],scaleY:[t],skew:[x],skewX:[x],skewY:[x]}),G.transform&&G.backface&&(Z.z=[w,"translateZ"],Z.rotateZ=[x],Z.scaleZ=[t],Z.perspective=[v]);var $=/ms/,_=/s|\./;return a.tram=b}(window.jQuery);

	var require$$0$2 = {};

	var underscoreCustom = __commonjs(function (module) {
	// Include tram for frame-throttling
	var $ = window.$;
	var tram = require$$0$2 && $.tram;

	/*eslint-disable */

	/*!
	 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
	 * _.each
	 * _.map
	 * _.find
	 * _.filter
	 * _.any
	 * _.contains
	 * _.delay
	 * _.defer
	 * _.throttle (webflow)
	 * _.debounce
	 * _.keys
	 * _.has
	 * _.now
	 *
	 * http://underscorejs.org
	 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Underscore may be freely distributed under the MIT license.
	 * @license MIT
	 */
	module.exports = (function() {
	  var _ = {};

	  // Current version.
	  _.VERSION = '1.6.0-Webflow';

	  // Establish the object that gets returned to break out of a loop iteration.
	  var breaker = {};

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeForEach      = ArrayProto.forEach,
	    nativeMap          = ArrayProto.map,
	    nativeReduce       = ArrayProto.reduce,
	    nativeReduceRight  = ArrayProto.reduceRight,
	    nativeFilter       = ArrayProto.filter,
	    nativeEvery        = ArrayProto.every,
	    nativeSome         = ArrayProto.some,
	    nativeIndexOf      = ArrayProto.indexOf,
	    nativeLastIndexOf  = ArrayProto.lastIndexOf,
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles objects with the built-in `forEach`, arrays, and raw objects.
	  // Delegates to **ECMAScript 5**'s native `forEach` if available.
	  var each = _.each = _.forEach = function(obj, iterator, context) {
	    /* jshint shadow:true */
	    if (obj == null) return obj;
	    if (nativeForEach && obj.forEach === nativeForEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	      for (var i = 0, length = obj.length; i < length; i++) {
	        if (iterator.call(context, obj[i], i, obj) === breaker) return;
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iterator to each element.
	  // Delegates to **ECMAScript 5**'s native `map` if available.
	  _.map = _.collect = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	    each(obj, function(value, index, list) {
	      results.push(iterator.call(context, value, index, list));
	    });
	    return results;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var result;
	    any(obj, function(value, index, list) {
	      if (predicate.call(context, value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Delegates to **ECMAScript 5**'s native `filter` if available.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
	    each(obj, function(value, index, list) {
	      if (predicate.call(context, value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Delegates to **ECMAScript 5**'s native `some` if available.
	  // Aliased as `any`.
	  var any = _.some = _.any = function(obj, predicate, context) {
	    predicate || (predicate = _.identity);
	    var result = false;
	    if (obj == null) return result;
	    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
	    each(obj, function(value, index, list) {
	      if (result || (result = predicate.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
	    return any(obj, function(value) {
	      return value === target;
	    });
	  };

	  // Function (ahem) Functions
	  // --------------------

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){ return func.apply(null, args); }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered once every
	  // browser animation frame - using tram's requestAnimationFrame polyfill.
	  _.throttle = function(func) {
	    var wait, args, context;
	    return function() {
	      if (wait) return;
	      wait = true;
	      args = arguments;
	      context = this;
	      tram.frame(function() {
	        wait = false;
	        func.apply(context, args);
	      });
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;
	      if (last < wait) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) {
	        timeout = setTimeout(later, wait);
	      }
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Object Functions
	  // ----------------

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (obj[prop] === void 0) obj[prop] = source[prop];
	      }
	    }
	    return obj;
	  };

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return hasOwnProperty.call(obj, key);
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    return obj === Object(obj);
	  };

	  // Utility Functions
	  // -----------------

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() { return new Date().getTime(); };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Export underscore
	  return _;
	}());

	/* eslint-enable */
	});

	var require$$1 = (underscoreCustom && typeof underscoreCustom === 'object' && 'default' in underscoreCustom ? underscoreCustom['default'] : underscoreCustom);

	var webflowLib = __commonjs(function (module) {
	/**
	 * Webflow: Core site library
	 */

	var Webflow = {};
	var modules = {};
	var primary = [];
	var secondary = window.Webflow || [];
	var $ = window.jQuery;
	var $win = $(window);
	var $doc = $(document);
	var isFunction = $.isFunction;
	var _ = Webflow._ = require$$1;
	var tram = require$$0$2 && $.tram;
	var domready = false;
	var destroyed = false;
	tram.config.hideBackface = false;
	tram.config.keepInherited = true;

	/**
	 * Webflow.define - Define a named module
	 * @param  {string} name
	 * @param  {function} factory
	 * @param  {object} options
	 * @return {object}
	 */
	Webflow.define = function(name, factory, options) {
	  if (modules[name]) unbindModule(modules[name]);
	  var instance = modules[name] = factory($, _, options) || {};
	  bindModule(instance);
	  return instance;
	};

	/**
	 * Webflow.require - Require a named module
	 * @param  {string} name
	 * @return {object}
	 */
	Webflow.require = function(name) {
	  return modules[name];
	};

	function bindModule(module) {
	  // If running in Webflow app, subscribe to design/preview events
	  if (Webflow.env()) {
	    isFunction(module.design) && $win.on('__wf_design', module.design);
	    isFunction(module.preview) && $win.on('__wf_preview', module.preview);
	  }
	  // Subscribe to front-end destroy event
	  isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy);
	  // Look for ready method on module
	  if (module.ready && isFunction(module.ready)) {
	    addReady(module);
	  }
	}

	function addReady(module) {
	  // If domready has already happened, run ready method
	  if (domready) {
	    module.ready();
	    return;
	  }
	  // Otherwise add ready method to the primary queue (only once)
	  if (_.contains(primary, module.ready)) return;
	  primary.push(module.ready);
	}

	function unbindModule(module) {
	  // Unsubscribe module from window events
	  isFunction(module.design) && $win.off('__wf_design', module.design);
	  isFunction(module.preview) && $win.off('__wf_preview', module.preview);
	  isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy);
	  // Remove ready method from primary queue
	  if (module.ready && isFunction(module.ready)) {
	    removeReady(module);
	  }
	}

	function removeReady(module) {
	  primary = _.filter(primary, function(readyFn) {
	    return readyFn !== module.ready;
	  });
	}

	/**
	 * Webflow.push - Add a ready handler into secondary queue
	 * @param {function} ready  Callback to invoke on domready
	 */
	Webflow.push = function(ready) {
	  // If domready has already happened, invoke handler
	  if (domready) {
	    isFunction(ready) && ready();
	    return;
	  }
	  // Otherwise push into secondary queue
	  secondary.push(ready);
	};

	/**
	 * Webflow.env - Get the state of the Webflow app
	 * @param {string} mode [optional]
	 * @return {boolean}
	 */
	Webflow.env = function(mode) {
	  var designFlag = window.__wf_design;
	  var inApp = typeof designFlag !== 'undefined';
	  if (!mode) return inApp;
	  if (mode === 'design') return inApp && designFlag;
	  if (mode === 'preview') return inApp && !designFlag;
	  if (mode === 'slug') return inApp && window.__wf_slug;
	  if (mode === 'editor') return window.WebflowEditor;
	  if (mode === 'test') return false || window.__wf_test;
	  if (mode === 'frame') return window !== window.top;
	};

	// Feature detects + browser sniffs  ಠ_ಠ
	var userAgent = navigator.userAgent.toLowerCase();
	var appVersion = navigator.appVersion.toLowerCase();
	var touch = Webflow.env.touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
	var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(appVersion.match(/chrome\/(\d+)\./)[1], 10);
	var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
	Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;

	// Maintain current touch target to prevent late clicks on touch devices
	var touchTarget;
	// Listen for both events to support touch/mouse hybrid devices
	touch && $doc.on('touchstart mousedown', function(evt) {
	  touchTarget = evt.target;
	});

	/**
	 * Webflow.validClick - validate click target against current touch target
	 * @param  {HTMLElement} clickTarget  Element being clicked
	 * @return {Boolean}  True if click target is valid (always true on non-touch)
	 */
	Webflow.validClick = touch ? function(clickTarget) {
	  return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
	} : function() { return true; };

	/**
	 * Webflow.resize, Webflow.scroll - throttled event proxies
	 */
	var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
	var scrollEvents = 'scroll.webflow ' + resizeEvents;
	Webflow.resize = eventProxy($win, resizeEvents);
	Webflow.scroll = eventProxy($win, scrollEvents);
	Webflow.redraw = eventProxy();

	// Create a proxy instance for throttled events
	function eventProxy(target, types) {

	  // Set up throttled method (using custom frame-based _.throttle)
	  var handlers = [];
	  var proxy = {};
	  proxy.up = _.throttle(function(evt) {
	    _.each(handlers, function(h) { h(evt); });
	  });

	  // Bind events to target
	  if (target && types) target.on(types, proxy.up);

	  /**
	   * Add an event handler
	   * @param  {function} handler
	   */
	  proxy.on = function(handler) {
	    if (typeof handler !== 'function') return;
	    if (_.contains(handlers, handler)) return;
	    handlers.push(handler);
	  };

	  /**
	   * Remove an event handler
	   * @param  {function} handler
	   */
	  proxy.off = function(handler) {
	    // If no arguments supplied, clear all handlers
	    if (!arguments.length) {
	      handlers = [];
	      return;
	    }
	    // Otherwise, remove handler from the list
	    handlers = _.filter(handlers, function(h) {
	      return h !== handler;
	    });
	  };

	  return proxy;
	}

	// Webflow.location - Wrap window.location in api
	Webflow.location = function(url) {
	  window.location = url;
	};

	if (Webflow.env()) {
	  // Ignore redirects inside a Webflow design/edit environment
	  Webflow.location = function() {
	  };
	}

	// Webflow.ready - Call primary and secondary handlers
	Webflow.ready = function() {
	  domready = true;

	  // Restore modules after destroy
	  if (destroyed) {
	    restoreModules();

	  // Otherwise run primary ready methods
	  } else {
	    _.each(primary, callReady);
	  }

	  // Run secondary ready methods
	  _.each(secondary, callReady);

	  // Trigger resize
	  Webflow.resize.up();
	};

	function callReady(readyFn) {
	  isFunction(readyFn) && readyFn();
	}

	function restoreModules() {
	  destroyed = false;
	  _.each(modules, bindModule);
	}

	/**
	 * Webflow.load - Add a window load handler that will run even if load event has already happened
	 * @param  {function} handler
	 */
	var deferLoad;
	Webflow.load = function(handler) {
	  deferLoad.then(handler);
	};

	function bindLoad() {
	  // Reject any previous deferred (to support destroy)
	  if (deferLoad) {
	    deferLoad.reject();
	    $win.off('load', deferLoad.resolve);
	  }
	  // Create deferred and bind window load event
	  deferLoad = new $.Deferred();
	  $win.on('load', deferLoad.resolve);
	}

	// Webflow.destroy - Trigger a destroy event for all modules
	Webflow.destroy = function(options) {
	  options = options || {};
	  destroyed = true;
	  $win.triggerHandler('__wf_destroy');

	  // Allow domready reset for tests
	  if (options.domready != null) {
	    domready = options.domready;
	  }

	  // Unbind modules
	  _.each(modules, unbindModule);

	  // Clear any proxy event handlers
	  Webflow.resize.off();
	  Webflow.scroll.off();
	  Webflow.redraw.off();

	  // Clear any queued ready methods
	  primary = [];
	  secondary = [];

	  // If load event has not yet fired, replace the deferred
	  if (deferLoad.state() === 'pending') bindLoad();
	};

	// Listen for domready
	$(Webflow.ready);

	// Listen for window.onload and resolve deferred
	bindLoad();

	// Export commonjs module
	module.exports = window.Webflow = Webflow;
	});

	var require$$0$1 = (webflowLib && typeof webflowLib === 'object' && 'default' in webflowLib ? webflowLib['default'] : webflowLib);

	var webflowBackgroundVideo = __commonjs(function (module) {
	/**
	 * Webflow: Background Video component
	 */

	var Webflow = require$$0$1;
	var WebflowEnv = require$$0;

	Webflow.define('backgroundVideo', module.exports = function ($) {

	  function ready () {
	    // Prevent default render while in-app
	    if (Webflow.env()) {
	      return;
	    }

	    var backgroundVideoNodes = $(document).find('.w-background-video').not('.w-background-video-atom');

	    if (backgroundVideoNodes.length === 0) {
	      return;
	    }

	    backgroundVideoNodes.each(function (_, node) {
	      var video = createVideoNode(node);
	      if (video) {
	        $(node).prepend(video);
	      }
	    });
	  }

	  function createVideoNode (nativeNode) {
	    var nodeData = $(nativeNode).data();

	    if (!nodeData.videoUrls) {
	      return;
	    }

	    // Prevent loading the videos on mobile browsers as its likely that they
	    // are on low-bandwidth connections.
	    if (WebflowEnv.isMobile()) {
	      if (nodeData.posterUrl) {
	        return $('<div class="w-background-video-poster">').css({
	          backgroundImage: 'url(' + nodeData.posterUrl + ')',
	          backgroundSize: 'cover',
	          backgroundPosition: '50% 50%',
	          position: 'absolute',
	          // zIndex needed for video poster to render behind a background set
	          // on the div.w-background-video
	          zIndex: -100,
	          width: '100%',
	          height: '100%',
	          top: 0,
	          left: 0
	        });
	      }
	      return;
	    }

	    var videoURLs = nodeData.videoUrls.split(',');
	    var sourceNodes = videoURLs.map(function (url) {
	      return $('<source />').attr({
	        src: url,
	        'data-wf-ignore': '',
	      });
	    });

	    var videoNode = $('<video />').attr({
	      autoplay: nodeData.autoplay,
	      loop: nodeData.loop,
	    })
	    .css('background-image', 'url(' + nodeData.posterUrl + ')');

	    videoNode.append(sourceNodes);

	    return videoNode;
	  }

	  return { ready: ready };
	});
	});

	var webflowBrand = __commonjs(function (module) {
	/**
	 * Webflow: Brand pages on the subdomain
	 */

	var Webflow = require$$0$1;

	Webflow.define('brand', module.exports = function($) {
	  var api = {};
	  var $html = $('html');
	  var $body = $('body');
	  var namespace = '.w-webflow-badge';
	  var location = window.location;
	  var isPhantom = /PhantomJS/i.test(navigator.userAgent);
	  var brandElement;

	  // -----------------------------------
	  // Module methods

	  api.ready = function() {
	    var shouldBrand = $html.attr('data-wf-status');
	    var publishedDomain = $html.attr('data-wf-domain') || '';
	    if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
	      shouldBrand = true;
	    }
	    if (shouldBrand && !isPhantom) {
	      brandElement = brandElement || createBadge();
	      ensureBrand();
	      setTimeout(ensureBrand, 500);
	    }
	  };

	  function createBadge() {
	    var $brand = $('<a class="w-webflow-badge"></a>')
	    .attr('href', 'https://webflow.com?utm_campaign=brandjs');

	    var $logoArt = $('<img>')
	    .attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg')
	    .css({
	      marginRight: '8px',
	      width: '16px',
	    });

	    var $logoText = $('<img>')
	    .attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg');

	    $brand.append($logoArt, $logoText);
	    return $brand[0];
	  }

	  function ensureBrand() {
	    var found = $body.children(namespace);
	    var match = found.length && found.get(0) === brandElement;
	    var inEditor = Webflow.env('editor');
	    if (match) {
	      // Remove brand when Editor is active
	      if (inEditor) {
	        found.remove();
	      }
	      // Exit early, brand is in place
	      return;
	    }
	    // Remove any invalid brand elements
	    if (found.length) {
	      found.remove();
	    }
	    // Append the brand (unless Editor is active)
	    if (!inEditor) {
	      $body.append(brandElement);
	    }
	  }

	  // Export module
	  return api;
	});
	});

	var webflowIxEvents = __commonjs(function (module) {
	'use strict';

	/**
	 * Webflow: IX Event triggers for other modules
	 */

	var $ = window.jQuery;
	var api = {};
	var eventQueue = [];
	var namespace = '.w-ix';

	var eventTriggers = {
	  reset: function(i, el) {
	    el.__wf_intro = null;
	  },
	  intro: function(i, el) {
	    if (el.__wf_intro) return;
	    el.__wf_intro = true;
	    $(el).triggerHandler(api.types.INTRO);
	  },
	  outro: function(i, el) {
	    if (!el.__wf_intro) return;
	    el.__wf_intro = null;
	    $(el).triggerHandler(api.types.OUTRO);
	  }
	};

	api.triggers = {};

	api.types = {
	  INTRO: 'w-ix-intro' + namespace,
	  OUTRO: 'w-ix-outro' + namespace
	};

	// Trigger any events in queue + restore trigger methods
	api.init = function() {
	  var count = eventQueue.length;
	  for (var i = 0; i < count; i++) {
	    var memo = eventQueue[i];
	    memo[0](0, memo[1]);
	  }
	  eventQueue = [];
	  $.extend(api.triggers, eventTriggers);
	};

	// Replace all triggers with async wrapper to queue events until init
	api.async = function() {
	  for (var key in eventTriggers) {
	    var func = eventTriggers[key];
	    if (!eventTriggers.hasOwnProperty(key)) continue;

	    // Replace trigger method with async wrapper
	    api.triggers[key] = function(i, el) {
	      eventQueue.push([func, el]);
	    };
	  }
	};

	// Default triggers to async queue
	api.async();

	module.exports = api;
	});

	var require$$0$4 = (webflowIxEvents && typeof webflowIxEvents === 'object' && 'default' in webflowIxEvents ? webflowIxEvents['default'] : webflowIxEvents);

	var webflowIx2Events = __commonjs(function (module) {
	'use strict';
	var IXEvents = require$$0$4;

	function dispatchCustomEvent(element, eventName) {
	  var event = document.createEvent('CustomEvent');
	  event.initCustomEvent(eventName, true, true, null);
	  element.dispatchEvent(event);
	}

	/**
	 * Webflow: IX Event triggers for other modules
	 */

	var $ = window.jQuery;
	var api = {};
	var namespace = '.w-ix';

	var eventTriggers = {
	  reset: function(i, el) {
	    IXEvents.triggers.reset(i, el);
	  },
	  intro: function(i, el) {
	    IXEvents.triggers.intro(i, el);
	    dispatchCustomEvent(el, 'COMPONENT_ACTIVE');
	  },
	  outro: function(i, el) {
	    IXEvents.triggers.outro(i, el);
	    dispatchCustomEvent(el, 'COMPONENT_INACTIVE');
	  }
	};

	api.triggers = {};

	api.types = {
	  INTRO: 'w-ix-intro' + namespace,
	  OUTRO: 'w-ix-outro' + namespace
	};

	$.extend(api.triggers, eventTriggers);

	module.exports = api;
	});

	var require$$0$3 = (webflowIx2Events && typeof webflowIx2Events === 'object' && 'default' in webflowIx2Events ? webflowIx2Events['default'] : webflowIx2Events);

	var webflowDropdown = __commonjs(function (module) {
	/**
	 * Webflow: Dropdown component
	 */

	var Webflow = require$$0$1;
	var IXEvents = require$$0$3;

	Webflow.define('dropdown', module.exports = function($, _) {
	  var api = {};
	  var $doc = $(document);
	  var $dropdowns;
	  var designer;
	  var inApp = Webflow.env();
	  var touch = Webflow.env.touch;
	  var namespace = '.w-dropdown';
	  var stateOpen = 'w--open';
	  var closeEvent = 'w-close' + namespace;
	  var ix = IXEvents.triggers;
	  var defaultZIndex = 900; // @dropdown-depth
	  var inPreview = false;

	  // -----------------------------------
	  // Module methods

	  api.ready = init;

	  api.design = function() {
	    // Close all when returning from preview
	    if (inPreview) {
	      closeAll();
	    }
	    inPreview = false;
	    init();
	  };

	  api.preview = function() {
	    inPreview = true;
	    init();
	  };

	  // -----------------------------------
	  // Private methods

	  function init() {
	    designer = inApp && Webflow.env('design');

	    // Find all instances on the page
	    $dropdowns = $doc.find(namespace);
	    $dropdowns.each(build);
	  }

	  function build(i, el) {
	    var $el = $(el);

	    // Store state in data
	    var data = $.data(el, namespace);
	    if (!data) data = $.data(el, namespace, { open: false, el: $el, config: {} });
	    data.list = $el.children('.w-dropdown-list');
	    data.toggle = $el.children('.w-dropdown-toggle');
	    data.links = data.list.children('.w-dropdown-link');
	    data.outside = outside(data);
	    data.complete = complete(data);
	    data.leave = leave(data);
	    data.moveOutside = moveOutside(data);

	    // Remove old events
	    $el.off(namespace);
	    data.toggle.off(namespace);

	    // Set config from data attributes
	    configure(data);

	    if (data.nav) data.nav.off(namespace);
	    data.nav = $el.closest('.w-nav');
	    data.nav.on(closeEvent, handler(data));

	    // Add events based on mode
	    if (designer) {
	      $el.on('setting' + namespace, handler(data));
	    } else {
	      data.toggle.on('tap' + namespace, toggle(data));
	      if (data.config.hover) {
	        data.toggle.on('mouseenter' + namespace, enter(data));
	      }
	      $el.on(closeEvent, handler(data));

	      // Close in preview mode and clean the data.hovering state
	      if (inApp) {
	        data.hovering = false;
	        close(data);
	      }
	    }
	  }

	  function configure(data) {
	    // Determine if z-index should be managed
	    var zIndex = Number(data.el.css('z-index'));
	    data.manageZ = zIndex === defaultZIndex || zIndex === defaultZIndex + 1;

	    data.config = {
	      hover: Boolean(data.el.attr('data-hover')) && !touch,
	      delay: Number(data.el.attr('data-delay')) || 0
	    };
	  }

	  function handler(data) {
	    return function(evt, options) {
	      options = options || {};

	      if (evt.type === 'w-close') {
	        return close(data);
	      }

	      if (evt.type === 'setting') {
	        configure(data);
	        options.open === true && open(data, true);
	        options.open === false && close(data, true);
	        return;
	      }
	    };
	  }

	  function toggle(data) {
	    return _.debounce(function() {
	      data.open ? close(data) : open(data);
	    });
	  }

	  function open(data) {
	    if (data.open) return;
	    closeOthers(data);
	    data.open = true;
	    data.list.addClass(stateOpen);
	    data.toggle.addClass(stateOpen);
	    ix.intro(0, data.el[0]);
	    Webflow.redraw.up();

	    // Increase z-index to keep above other managed dropdowns
	    data.manageZ && data.el.css('z-index', defaultZIndex + 1);

	    // Listen for tap outside events
	    var isEditor = Webflow.env('editor');
	    if (!designer) $doc.on('mouseup' + namespace, data.outside);
	    if (data.hovering && !isEditor) data.el.on('mouseleave' + namespace, data.leave);
	    if (data.hovering && isEditor) $doc.on('mousemove' + namespace, data.moveOutside);

	    // Clear previous delay
	    window.clearTimeout(data.delayId);
	  }

	  function close(data, immediate) {
	    if (!data.open) return;

	    // Do not close hover-based menus if currently hovering
	    if (data.config.hover && data.hovering) return;

	    data.open = false;
	    var config = data.config;
	    ix.outro(0, data.el[0]);

	    // Stop listening for tap outside events
	    $doc.off('mouseup' + namespace, data.outside);
	    data.el.off('mouseleave' + namespace, data.leave);
	    $doc.off('mousemove' + namespace, data.moveOutside);

	    // Clear previous delay
	    window.clearTimeout(data.delayId);

	    // Skip delay during immediate
	    if (!config.delay || immediate) return data.complete();

	    // Optionally wait for delay before close
	    data.delayId = window.setTimeout(data.complete, config.delay);
	  }

	  function closeAll() {
	    $doc.find(namespace).each(function(i, el) {
	      $(el).triggerHandler(closeEvent);
	    });
	  }

	  function closeOthers(data) {
	    var self = data.el[0];
	    $dropdowns.each(function(i, other) {
	      var $other = $(other);
	      if ($other.is(self) || $other.has(self).length) return;
	      $other.triggerHandler(closeEvent);
	    });
	  }

	  function outside(data) {
	    // Unbind previous tap handler if it exists
	    if (data.outside) $doc.off('mouseup' + namespace, data.outside);

	    // Close menu when tapped outside
	    return _.debounce(function(evt) {
	      if (!data.open) return;
	      var $target = $(evt.target);
	      if ($target.closest('.w-dropdown-toggle').length) return;
	      var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
	      var isEditor = Webflow.env('editor');
	      if (isEventOutsideDropdowns) {
	        if (isEditor) {
	          var isEventOnDetachedSvg = $target.parents().length === 1 && $target.parents('svg').length === 1;
	          var isEventOnHoverControls = $target.parents('.w-editor-bem-EditorHoverControls').length;
	          if (isEventOnDetachedSvg || isEventOnHoverControls) { return; }
	        }
	        close(data);
	      }
	    });
	  }

	  function complete(data) {
	    return function() {
	      data.list.removeClass(stateOpen);
	      data.toggle.removeClass(stateOpen);

	      // Reset z-index for managed dropdowns
	      data.manageZ && data.el.css('z-index', '');
	    };
	  }

	  function enter(data) {
	    return function() {
	      data.hovering = true;
	      open(data);
	    };
	  }

	  function leave(data) {
	    return function() {
	      data.hovering = false;
	      close(data);
	    };
	  }

	  function moveOutside(data) {
	    return _.debounce(function(evt) {
	      if (!data.open) { return; }
	      var $target = $(evt.target);
	      var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
	      if (isEventOutsideDropdowns) {
	        var isEventOnHoverControls = $target.parents('.w-editor-bem-EditorHoverControls').length;
	        var isEventOnHoverToolbar = $target.parents('.w-editor-bem-RTToolbar').length;
	        var $editorOverlay = $('.w-editor-bem-EditorOverlay');
	        var isDropdownInEdition = $editorOverlay.find('.w-editor-edit-outline').length ||
	          $editorOverlay.find('.w-editor-bem-RTToolbar').length;
	        if (isEventOnHoverControls || isEventOnHoverToolbar || isDropdownInEdition) { return;}
	        data.hovering = false;
	        close(data);
	      }
	    });
	  }

	  // Export module
	  return api;
	});
	});

	var xdomainMin = __commonjs(function (module) {
	/*!
	 * jQuery-ajaxTransport-XDomainRequest - v1.0.3
	 * 2014-12-16 WEBFLOW - Removed UMD wrapper
	 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
	 * Copyright (c) 2014 Jason Moon (@JSONMOON)
	 * @license MIT (/blob/master/LICENSE.txt)
	 */
	module.exports=function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var httpRegEx=/^https?:\/\//i;var getOrPostRegEx=/^get|post$/i;var sameSchemeRegEx=new RegExp("^"+location.protocol,"i");$.ajaxTransport("* text html xml json",function(options,userOptions,jqXHR){if(!options.crossDomain||!options.async||!getOrPostRegEx.test(options.type)||!httpRegEx.test(options.url)||!sameSchemeRegEx.test(options.url)){return}var xdr=null;return{send:function(headers,complete){var postData="";var userType=(userOptions.dataType||"").toLowerCase();xdr=new XDomainRequest;if(/^\d+$/.test(userOptions.timeout)){xdr.timeout=userOptions.timeout}xdr.ontimeout=function(){complete(500,"timeout")};xdr.onload=function(){var allResponseHeaders="Content-Length: "+xdr.responseText.length+"\r\nContent-Type: "+xdr.contentType;var status={code:200,message:"success"};var responses={text:xdr.responseText};try{if(userType==="html"||/text\/html/i.test(xdr.contentType)){responses.html=xdr.responseText}else if(userType==="json"||userType!=="text"&&/\/json/i.test(xdr.contentType)){try{responses.json=$.parseJSON(xdr.responseText)}catch(e){status.code=500;status.message="parseerror"}}else if(userType==="xml"||userType!=="text"&&/\/xml/i.test(xdr.contentType)){var doc=new ActiveXObject("Microsoft.XMLDOM");doc.async=false;try{doc.loadXML(xdr.responseText)}catch(e){doc=undefined}if(!doc||!doc.documentElement||doc.getElementsByTagName("parsererror").length){status.code=500;status.message="parseerror";throw"Invalid XML: "+xdr.responseText}responses.xml=doc}}catch(parseMessage){throw parseMessage}finally{complete(status.code,status.message,responses,allResponseHeaders)}};xdr.onprogress=function(){};xdr.onerror=function(){complete(500,"error",{text:xdr.responseText})};if(userOptions.data){postData=$.type(userOptions.data)==="string"?userOptions.data:$.param(userOptions.data)}xdr.open(options.type,options.url);xdr.send(postData)},abort:function(){if(xdr){xdr.abort()}}}})}(window.jQuery);
	});

	var webflowForms = __commonjs(function (module) {
	/**
	 * Webflow: Forms
	 */

	var Webflow = require$$0$1;

	Webflow.define('forms', module.exports = function($, _) {
	  var api = {};

	  // Cross-Domain AJAX for IE8
	  

	  var $doc = $(document);
	  var $forms;
	  var loc = window.location;
	  var retro = window.XDomainRequest && !window.atob;
	  var namespace = '.w-form';
	  var siteId;
	  var emailField = /e(-)?mail/i;
	  var emailValue = /^\S+@\S+$/;
	  var alert = window.alert;
	  var inApp = Webflow.env();
	  var listening;

	  // MailChimp domains: list-manage.com + mirrors
	  var chimpRegex = /list-manage[1-9]?.com/i;

	  var disconnected = _.debounce(function() {
	    alert('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
	  }, 100);

	  api.ready = api.design = api.preview = function() {
	    // Init forms
	    init();

	    // Wire document events on published site only once
	    if (!inApp && !listening) {
	      addListeners();
	    }
	  };

	  function init() {
	    siteId = $('html').attr('data-wf-site');

	    $forms = $(namespace + ' form');
	    if (!$forms.length) return;
	    $forms.each(build);
	  }

	  function build(i, el) {
	    // Store form state using namespace
	    var $el = $(el);
	    var data = $.data(el, namespace);
	    if (!data) data = $.data(el, namespace, { form: $el }); // data.form

	    reset(data);
	    var wrap = $el.closest('div.w-form');
	    data.done = wrap.find('> .w-form-done');
	    data.fail = wrap.find('> .w-form-fail');

	    var action = data.action = $el.attr('action');
	    data.handler = null;
	    data.redirect = $el.attr('data-redirect');

	    // MailChimp form
	    if (chimpRegex.test(action)) { data.handler = submitMailChimp; return; }

	    // Custom form action
	    if (action) return;

	    // Webflow form
	    if (siteId) { data.handler = submitWebflow; return; }

	    // Alert for disconnected Webflow forms
	    disconnected();
	  }

	  function addListeners() {
	    listening = true;

	    // Handle form submission for Webflow forms
	    $doc.on('submit', namespace + ' form', function(evt) {
	      var data = $.data(this, namespace);
	      if (data.handler) {
	        data.evt = evt;
	        data.handler(data);
	      }
	    });
	  }

	  // Reset data common to all submit handlers
	  function reset(data) {
	    var btn = data.btn = data.form.find(':input[type="submit"]');
	    data.wait = data.btn.attr('data-wait') || null;
	    data.success = false;
	    btn.prop('disabled', false);
	    data.label && btn.val(data.label);
	  }

	  // Disable submit button
	  function disableBtn(data) {
	    var btn = data.btn;
	    var wait = data.wait;
	    btn.prop('disabled', true);
	    // Show wait text and store previous label
	    if (wait) {
	      data.label = btn.val();
	      btn.val(wait);
	    }
	  }

	  // Find form fields, validate, and set value pairs
	  function findFields(form, result) {
	    var status = null;
	    result = result || {};

	    // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
	    form.find(':input:not([type="submit"])').each(function(i, el) {
	      var field = $(el);
	      var type = field.attr('type');
	      var name = field.attr('data-name') || field.attr('name') || ('Field ' + (i + 1));
	      var value = field.val();

	      if (type === 'checkbox') {
	        value = field.is(':checked');
	      } if (type === 'radio') {
	        // Radio group value already processed
	        if (result[name] === null || typeof result[name] === 'string') {
	          return;
	        }

	        value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
	      }

	      if (typeof value === 'string') value = $.trim(value);
	      result[name] = value;
	      status = status || getStatus(field, type, name, value);
	    });

	    return status;
	  }

	  function getStatus(field, type, name, value) {
	    var status = null;

	    if (type === 'password') {
	      status = 'Passwords cannot be submitted.';
	    } else if (field.attr('required')) {
	      if (!value) {
	        status = 'Please fill out the required field: ' + name;
	      } else if (emailField.test(name) || emailField.test(field.attr('type'))) {
	        if (!emailValue.test(value)) status = 'Please enter a valid email address for: ' + name;
	      }
	    }

	    return status;
	  }

	  // Submit form to Webflow
	  function submitWebflow(data) {
	    reset(data);

	    var form = data.form;
	    var payload = {
	      name: form.attr('data-name') || form.attr('name') || 'Untitled Form',
	      source: loc.href,
	      test: Webflow.env(),
	      fields: {},
	      dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html())
	    };

	    preventDefault(data);

	    // Find & populate all fields
	    var status = findFields(form, payload.fields);
	    if (status) return alert(status);

	    // Disable submit button
	    disableBtn(data);

	    // Read site ID
	    // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work
	    if (!siteId) { afterSubmit(data); return; }
	    var url = "https://webflow.com" + '/api/v1/form/' + siteId;

	    // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
	    if (retro && url.indexOf("https://webflow.com") >= 0) {
	      url = url.replace("https://webflow.com", "http://formdata.webflow.com");
	    }

	    $.ajax({
	      url: url,
	      type: 'POST',
	      data: payload,
	      dataType: 'json',
	      crossDomain: true
	    }).done(function() {
	      data.success = true;
	      afterSubmit(data);
	    }).fail(function() {
	      afterSubmit(data);
	    });
	  }

	  // Submit form to MailChimp
	  function submitMailChimp(data) {
	    reset(data);

	    var form = data.form;
	    var payload = {};

	    // Skip Ajax submission if http/s mismatch, fallback to POST instead
	    if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
	      form.attr('method', 'post');
	      return;
	    }

	    preventDefault(data);

	    // Find & populate all fields
	    var status = findFields(form, payload);
	    if (status) return alert(status);

	    // Disable submit button
	    disableBtn(data);

	    // Use special format for MailChimp params
	    var fullName;
	    _.each(payload, function(value, key) {
	      if (emailField.test(key)) payload.EMAIL = value;
	      if (/^((full[ _-]?)?name)$/i.test(key)) fullName = value;
	      if (/^(first[ _-]?name)$/i.test(key)) payload.FNAME = value;
	      if (/^(last[ _-]?name)$/i.test(key)) payload.LNAME = value;
	    });

	    if (fullName && !payload.FNAME) {
	      fullName = fullName.split(' ');
	      payload.FNAME = fullName[0];
	      payload.LNAME = payload.LNAME || fullName[1];
	    }

	    // Use the (undocumented) MailChimp jsonp api
	    var url = data.action.replace('/post?', '/post-json?') + '&c=?';
	    // Add special param to prevent bot signups
	    var userId = url.indexOf('u=') + 2;
	    userId = url.substring(userId, url.indexOf('&', userId));
	    var listId = url.indexOf('id=') + 3;
	    listId = url.substring(listId, url.indexOf('&', listId));
	    payload['b_' + userId + '_' + listId] = '';

	    $.ajax({
	      url: url,
	      data: payload,
	      dataType: 'jsonp'
	    }).done(function(resp) {
	      data.success = (resp.result === 'success' || /already/.test(resp.msg));
	      if (!data.success) console.info('MailChimp error: ' + resp.msg);
	      afterSubmit(data);
	    }).fail(function() {
	      afterSubmit(data);
	    });
	  }

	  // Common callback which runs after all Ajax submissions
	  function afterSubmit(data) {
	    var form = data.form;
	    var redirect = data.redirect;
	    var success = data.success;

	    // Redirect to a success url if defined
	    if (success && redirect) {
	      Webflow.location(redirect);
	      return;
	    }

	    // Show or hide status divs
	    data.done.toggle(success);
	    data.fail.toggle(!success);

	    // Hide form on success
	    form.toggle(!success);

	    // Reset data and enable submit button
	    reset(data);
	  }

	  function preventDefault(data) {
	    data.evt && data.evt.preventDefault();
	    data.evt = null;
	  }

	  // Export module
	  return api;
	});
	});

	var webflowIx = __commonjs(function (module) {
	/**
	 * Webflow: Interactions
	 */

	var Webflow = require$$0$1;
	var IXEvents = require$$0$4;

	Webflow.define('ix', module.exports = function($, _) {
	  var api = {};
	  var designer;
	  var $win = $(window);
	  var namespace = '.w-ix';
	  var tram = $.tram;
	  var env = Webflow.env;
	  var inApp = env();
	  var emptyFix = env.chrome && env.chrome < 35;
	  var transNone = 'none 0s ease 0s';
	  var $subs = $();
	  var config = {};
	  var anchors = [];
	  var loads = [];
	  var readys = [];
	  var destroyed;
	  var readyDelay = 1;

	  // Component types and proxy selectors
	  var components = {
	    tabs: '.w-tab-link, .w-tab-pane',
	    dropdown: '.w-dropdown',
	    slider: '.w-slide',
	    navbar: '.w-nav'
	  };

	  // -----------------------------------
	  // Module methods

	  api.init = function(list) {
	    setTimeout(function() { configure(list); }, 1);
	  };

	  api.preview = function() {
	    designer = false;
	    readyDelay = 100;
	    setTimeout(function() { configure(window.__wf_ix); }, 1);
	  };

	  api.design = function() {
	    designer = true;
	    api.destroy();
	  };

	  api.destroy = function() {
	    destroyed = true;
	    $subs.each(teardown);
	    Webflow.scroll.off(scroll);
	    IXEvents.async();
	    anchors = [];
	    loads = [];
	    readys = [];
	  };

	  api.ready = function() {
	    // Redirect IX init while in design/preview modes
	    if (inApp) return env('design') ? api.design() : api.preview();

	    // Ready should only be used after destroy, as a way to re-init
	    if (config && destroyed) {
	      destroyed = false;
	      init();
	    }
	  };

	  api.run = run;
	  api.style = inApp ? styleApp : stylePub;

	  // -----------------------------------
	  // Private methods

	  function configure(list) {
	    if (!list) return;

	    // Map all interactions by slug
	    config = {};
	    _.each(list, function(item) {
	      config[item.slug] = item.value;
	    });

	    // Init ix after config
	    init();
	  }

	  function init() {

	    initIX1Engine();

	    // Need init IXEvents regardless if IX1 events exist since
	    // IXEvents _also_ dispatch IX2 events.

	    // Trigger queued events, must happen after init
	    IXEvents.init();

	    // Trigger a redraw to ensure all IX intros play
	    Webflow.redraw.up();
	  }
	  
	  function initIX1Engine() {
	    // Build each element's interaction keying from data attribute
	    var els = $('[data-ix]');
	    if (!els.length) {
	      return;
	    }

	    els.each(teardown);
	    els.each(build);

	    // Listen for scroll events if any anchors exist
	    if (anchors.length) {
	      Webflow.scroll.on(scroll);
	      setTimeout(scroll, 1);
	    }

	    // Handle loads or readys if they exist
	    if (loads.length) Webflow.load(runLoads);
	    if (readys.length) setTimeout(runReadys, readyDelay);
	  }

	  function build(i, el) {
	    var $el = $(el);
	    var id = $el.attr('data-ix');
	    var ix = config[id];
	    if (!ix) return;
	    var triggers = ix.triggers;
	    if (!triggers) return;

	    // Set styles immediately to provide tram with starting transform values
	    api.style($el, ix.style);

	    _.each(triggers, function(trigger) {
	      var state = {};
	      var type = trigger.type;
	      var stepsB = trigger.stepsB && trigger.stepsB.length;

	      function runA() { run(trigger, $el, { group: 'A' }); }
	      function runB() { run(trigger, $el, { group: 'B' }); }

	      if (type === 'load') {
	        (trigger.preload && !inApp) ? loads.push(runA) : readys.push(runA);
	        return;
	      }

	      if (type === 'click') {
	        $el.on('click' + namespace, function(evt) {
	          // Avoid late clicks on touch devices
	          if (!Webflow.validClick(evt.currentTarget)) return;

	          // Prevent default on empty hash urls
	          if ($el.attr('href') === '#') evt.preventDefault();

	          run(trigger, $el, { group: state.clicked ? 'B' : 'A' });
	          if (stepsB) state.clicked = !state.clicked;
	        });
	        $subs = $subs.add($el);
	        return;
	      }

	      if (type === 'hover') {
	        $el.on('mouseenter' + namespace, runA);
	        $el.on('mouseleave' + namespace, runB);
	        $subs = $subs.add($el);
	        return;
	      }

	      if (type === 'scroll') {
	        anchors.push({
	          el: $el, trigger: trigger, state: { active: false },
	          offsetTop: convert(trigger.offsetTop),
	          offsetBot: convert(trigger.offsetBot)
	        });
	        return;
	      }

	      // Check for a proxy component selector
	      // type == [tabs, dropdown, slider, navbar]
	      var proxy = components[type];
	      if (proxy) {
	        var $proxy = $el.closest(proxy);
	        $proxy.on(IXEvents.types.INTRO, runA).on(IXEvents.types.OUTRO, runB);
	        $subs = $subs.add($proxy);
	        return;
	      }
	    });
	  }

	  function convert(offset) {
	    if (!offset) return 0;
	    offset = String(offset);
	    var result = parseInt(offset, 10);
	    if (result !== result) return 0;
	    if (offset.indexOf('%') > 0) {
	      result /= 100;
	      if (result >= 1) result = 0.999;
	    }
	    return result;
	  }

	  function teardown(i, el) {
	    $(el).off(namespace);
	  }

	  function scroll() {
	    var viewTop = $win.scrollTop();
	    var viewHeight = $win.height();

	    // Check each anchor for a valid scroll trigger
	    var count = anchors.length;
	    for (var i = 0; i < count; i++) {
	      var anchor = anchors[i];
	      var $el = anchor.el;
	      var trigger = anchor.trigger;
	      var stepsB = trigger.stepsB && trigger.stepsB.length;
	      var state = anchor.state;
	      var top = $el.offset().top;
	      var height = $el.outerHeight();
	      var offsetTop = anchor.offsetTop;
	      var offsetBot = anchor.offsetBot;
	      if (offsetTop < 1 && offsetTop > 0) offsetTop *= viewHeight;
	      if (offsetBot < 1 && offsetBot > 0) offsetBot *= viewHeight;
	      var active = (top + height - offsetTop >= viewTop && top + offsetBot <= viewTop + viewHeight);
	      if (active === state.active) continue;
	      if (active === false && !stepsB) continue;
	      state.active = active;
	      run(trigger, $el, { group: active ? 'A' : 'B' });
	    }
	  }

	  function runLoads() {
	    var count = loads.length;
	    for (var i = 0; i < count; i++) {
	      loads[i]();
	    }
	  }

	  function runReadys() {
	    var count = readys.length;
	    for (var i = 0; i < count; i++) {
	      readys[i]();
	    }
	  }

	  function run(trigger, $el, opts, replay) {
	    opts = opts || {};
	    var done = opts.done;
	    var preserve3d = trigger.preserve3d;

	    // Do not run in designer unless forced
	    if (designer && !opts.force) return;

	    // Operate on a set of grouped steps
	    var group = opts.group || 'A';
	    var loop = trigger['loop' + group];
	    var steps = trigger['steps' + group];
	    if (!steps || !steps.length) return;
	    if (steps.length < 2) loop = false;

	    // One-time init before any loops
	    if (!replay) {

	      // Find selector within element descendants, siblings, or query whole document
	      var selector = trigger.selector;
	      if (selector) {
	        if (trigger.descend) {
	          $el = $el.find(selector);
	        } else if (trigger.siblings) {
	          $el = $el.siblings(selector);
	        } else {
	          $el = $(selector);
	        }
	        if (inApp) $el.attr('data-ix-affect', 1);
	      }

	      // Apply empty fix for certain Chrome versions
	      if (emptyFix) $el.addClass('w-ix-emptyfix');

	      // Set preserve3d for triggers with 3d transforms
	      if (preserve3d) $el.css('transform-style', 'preserve-3d');
	    }

	    var _tram = tram($el);

	    // Add steps
	    var meta = {omit3d: !preserve3d};
	    for (var i = 0; i < steps.length; i++) {
	      addStep(_tram, steps[i], meta);
	    }

	    function fin() {
	      // Run trigger again if looped
	      if (loop) return run(trigger, $el, opts, true);

	      // Reset any 'auto' values
	      if (meta.width === 'auto') _tram.set({ width: 'auto' });
	      if (meta.height === 'auto') _tram.set({ height: 'auto' });

	      // Run callback
	      done && done();
	    }

	    // Add final step to queue if tram has started
	    meta.start ? _tram.then(fin) : fin();
	  }

	  function addStep(_tram, step, meta) {
	    var addMethod = 'add';
	    var startMethod = 'start';

	    // Once the transition has started, we will always use then() to add to the queue.
	    if (meta.start) addMethod = startMethod = 'then';

	    // Parse transitions string on the current step
	    var transitions = step.transition;
	    if (transitions) {
	      transitions = transitions.split(',');
	      for (var i = 0; i < transitions.length; i++) {
	        var transition = transitions[i];
	        _tram[addMethod](transition);
	      }
	    }

	    // Build a clean object to pass to the tram method
	    var clean = tramify(step, meta) || {};

	    // Store last width and height values
	    if (clean.width != null) meta.width = clean.width;
	    if (clean.height != null) meta.height = clean.height;

	    // When transitions are not present, set values immediately and continue queue.
	    if (transitions == null) {

	      // If we have started, wrap set() in then() and reset queue
	      if (meta.start) {
	        _tram.then(function() {
	          var queue = this.queue;
	          this.set(clean);
	          if (clean.display) {
	            _tram.redraw();
	            Webflow.redraw.up();
	          }
	          this.queue = queue;
	          this.next();
	        });
	      } else {
	        _tram.set(clean);

	        // Always redraw after setting display
	        if (clean.display) {
	          _tram.redraw();
	          Webflow.redraw.up();
	        }
	      }

	      // Use the wait() method to kick off queue in absence of transitions.
	      var wait = clean.wait;
	      if (wait != null) {
	        _tram.wait(wait);
	        meta.start = true;
	      }

	    // Otherwise, when transitions are present
	    } else {

	      // If display is present, handle it separately
	      if (clean.display) {
	        var display = clean.display;
	        delete clean.display;

	        // If we've already started, we need to wrap it in a then()
	        if (meta.start) {
	          _tram.then(function() {
	            var queue = this.queue;
	            this.set({ display: display }).redraw();
	            Webflow.redraw.up();
	            this.queue = queue;
	            this.next();
	          });
	        } else {
	          _tram.set({ display: display }).redraw();
	          Webflow.redraw.up();
	        }
	      }

	      // Otherwise, start a transition using the current start method.
	      _tram[startMethod](clean);
	      meta.start = true;
	    }
	  }

	  // (In app) Set styles immediately and manage upstream transition
	  function styleApp(el, data) {
	    var _tram = tram(el);

	    // Exit early when data is empty to avoid clearing upstream
	    if ($.isEmptyObject(data)) return;

	    // Get computed transition value
	    el.css('transition', '');
	    var computed = el.css('transition');

	    // If computed is set to none, clear upstream
	    if (computed === transNone) computed = _tram.upstream = null;

	    // Set upstream transition to none temporarily
	    _tram.upstream = transNone;

	    // Set values immediately
	    _tram.set(tramify(data));

	    // Only restore upstream in preview mode
	    _tram.upstream = computed;
	  }

	  // (Published) Set styles immediately on specified jquery element
	  function stylePub(el, data) {
	    tram(el).set(tramify(data));
	  }

	  // Build a clean object for tram
	  function tramify(obj, meta) {
	    var omit3d = meta && meta.omit3d;
	    var result = {};
	    var found = false;
	    for (var key in obj) {
	      if (key === 'transition') continue;
	      if (key === 'keysort') continue;
	      if (omit3d) {
	        if (key === 'z' || key === 'rotateX' || key === 'rotateY' || key === 'scaleZ') {
	          continue;
	        }
	      }
	      result[key] = obj[key];
	      found = true;
	    }
	    // If empty, return null for tram.set/stop compliance
	    return found ? result : null;
	  }

	  // Export module
	  return api;
	});
	});

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Built-in value references. */
	var Symbol = root.Symbol;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$2.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var nullTag = '[object Null]';
	var undefinedTag = '[object Undefined]';
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var ponyfill = __commonjs(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};
	});

	var require$$0$7 = (ponyfill && typeof ponyfill === 'object' && 'default' in ponyfill ? ponyfill['default'] : ponyfill);

	var index$1 = __commonjs(function (module, exports, global) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = require$$0$7;

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (typeof module !== 'undefined') {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	});

	var require$$0$6 = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

	var index = __commonjs(function (module) {
	module.exports = require$$0$6;
	});

	var $$observable = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if ("production" !== 'production') {}

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if ("production" !== 'production') {}

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if ("production" !== 'production') {}

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

	var IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
	var IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
	var IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
	var IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
	var IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
	var IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
	var IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
	var IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
	var IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
	var IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
	var IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
	var IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
	var IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
	var IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
	var IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
	var IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';

	var ixData = function ixData() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.freeze({});
	  var action = arguments[1];

	  switch (action.type) {
	    case IX2_RAW_DATA_IMPORTED:
	      {
	        return action.payload.ixData || Object.freeze({});
	      }
	    default:
	      {
	        return state;
	      }
	  }
	};

	var invariant = __commonjs(function (module) {
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var NODE_ENV = "production";

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	});

	var require$$0$8 = (invariant && typeof invariant === 'object' && 'default' in invariant ? invariant['default'] : invariant);

	var index$2 = __commonjs(function (module) {
	var invariant = require$$0$8;

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var splice = Array.prototype.splice;

	var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
	  getAllKeys(source).forEach(function(key) {
	    if (hasOwnProperty.call(source, key)) {
	      target[key] = source[key];
	    }
	  });
	  return target;
	};

	var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
	  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
	  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

	function copy(object) {
	  if (object instanceof Array) {
	    return object.slice();
	  } else if (object && typeof object === 'object') {
	    return assign(new object.constructor(), object);
	  } else {
	    return object;
	  }
	}

	function newContext() {
	  var commands = assign({}, defaultCommands);
	  update.extend = function(directive, fn) {
	    commands[directive] = fn;
	  };

	  return update;

	  function update(object, spec) {
	    if (!(Array.isArray(object) && Array.isArray(spec))) {
	      invariant(
	        !Array.isArray(spec),
	        'update(): You provided an invalid spec to update(). The spec may ' +
	        'not contain an array except as the value of $set, $push, $unshift, ' +
	        '$splice or any custom command allowing an array value.'
	      );
	    }

	    invariant(
	      typeof spec === 'object' && spec !== null,
	      'update(): You provided an invalid spec to update(). The spec and ' +
	      'every included key path must be plain objects containing one of the ' +
	      'following commands: %s.',
	      Object.keys(commands).join(', ')
	    );

	    var nextObject = object;
	    var specKeys = getAllKeys(spec);
	    var index, key;
	    getAllKeys(spec).forEach(function(key) {
	      if (hasOwnProperty.call(commands, key)) {
	        nextObject = commands[key](spec[key], nextObject, spec, object);
	      } else {
	        var nextValueForKey = update(object[key], spec[key]);
	        if (nextValueForKey !== nextObject[key]) {
	          if (nextObject === object) {
	            nextObject = copy(object);
	          }
	          nextObject[key] = nextValueForKey;
	        }
	      }
	    })
	    return nextObject;
	  }

	}

	var defaultCommands = {
	  $push: function(value, original, spec) {
	    invariantPushAndUnshift(original, spec, '$push');
	    return original.concat(value);
	  },
	  $unshift: function(value, original, spec) {
	    invariantPushAndUnshift(original, spec, '$unshift');
	    return value.concat(original);
	  },
	  $splice: function(value, nextObject, spec, object) {
	    var originalValue = nextObject === object ? copy(object) : nextObject;
	    invariantSplices(originalValue, spec);
	    value.forEach(function(args) {
	      invariantSplice(args);
	      splice.apply(originalValue, args);
	    });
	    return originalValue;
	  },
	  $set: function(value, original, spec) {
	    invariantSet(spec);
	    return value;
	  },
	  $unset: function(value, nextObject, spec, object) {
	    invariant(
	      Array.isArray(value),
	      'update(): expected spec of $unset to be an array; got %s. ' +
	      'Did you forget to wrap the key(s) in an array?',
	      value
	    );
	    var originalValue = nextObject;
	    value.forEach(function(key) {
	      if (Object.hasOwnProperty.call(originalValue, key)) {
	        if (nextObject === object) nextObject = copy(object);
	        delete nextObject[key];
	      }
	    });
	    return nextObject;
	  },
	  $merge: function(value, nextObject, spec, object) {
	    var nextObject = nextObject;
	    invariantMerge(nextObject, value);
	    getAllKeys(value).forEach(function(key) {
	      if (value[key] !== nextObject[key]) {
	        if (nextObject === object) nextObject = copy(object);
	        nextObject[key] = value[key];
	      }
	    });
	    return nextObject;
	  },
	  $apply: function(value, original) {
	    invariantApply(value);
	    return value(original);
	  }
	};

	module.exports = newContext();
	module.exports.newContext = newContext;

	// invariants

	function invariantPushAndUnshift(value, spec, command) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  );
	  var specValue = spec[command];
	  invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  );
	}

	function invariantSplices(value, spec) {
	  invariant(
	    Array.isArray(value),
	    'Expected $splice target to be an array; got %s',
	    value
	  );
	  invariantSplice(spec['$splice']);
	}

	function invariantSplice(value) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
	    'Did you forget to wrap your parameters in an array?',
	    value
	  );
	}

	function invariantApply(fn) {
	  invariant(
	    typeof fn === 'function',
	    'update(): expected spec of $apply to be a function; got %s.',
	    fn
	  );
	}

	function invariantSet(spec) {
	  invariant(
	    Object.keys(spec).length === 1,
	    'Cannot have more than one key in an object with $set'
	  );
	}

	function invariantMerge(target, specValue) {
	  invariant(
	    specValue && typeof specValue === 'object',
	    'update(): $merge expects a spec of type \'object\'; got %s',
	    specValue
	  );
	  invariant(
	    target && typeof target === 'object',
	    'update(): $merge expects a target of type \'object\'; got %s',
	    target
	  );
	}
	});

	var update = (index$2 && typeof index$2 === 'object' && 'default' in index$2 ? index$2['default'] : index$2);

	var _Object$create;

	var initialState = {
	  preview: {},
	  playback: {},
	  stop: {},
	  clear: {}
	};

	var stateKeys = Object.create(null, (_Object$create = {}, babelHelpers.defineProperty(_Object$create, IX2_PREVIEW_REQUESTED, { value: 'preview' }), babelHelpers.defineProperty(_Object$create, IX2_PLAYBACK_REQUESTED, { value: 'playback' }), babelHelpers.defineProperty(_Object$create, IX2_STOP_REQUESTED, { value: 'stop' }), babelHelpers.defineProperty(_Object$create, IX2_CLEAR_REQUESTED, { value: 'clear' }), _Object$create));

	var ixRequest = function ixRequest() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  if (action.type in stateKeys) {
	    return update(state, babelHelpers.defineProperty({}, stateKeys[action.type], { $set: babelHelpers.extends({}, action.payload) }));
	  }
	  return state;
	};

	var initialState$1 = {
	  active: false,
	  eventListeners: [],
	  eventState: {},
	  playbackState: {},
	  viewportWidth: 0,
	  mediaQueryKey: null
	};

	var ixSession = function ixSession() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
	  var action = arguments[1];

	  switch (action.type) {
	    case IX2_SESSION_STARTED:
	      {
	        return update(state, {
	          active: { $set: true }
	        });
	      }
	    case IX2_SESSION_STOPPED:
	      {
	        return initialState$1;
	      }
	    case IX2_EVENT_LISTENER_ADDED:
	      {
	        return update(state, {
	          eventListeners: { $push: [action.payload] }
	        });
	      }
	    case IX2_EVENT_STATE_CHANGED:
	      {
	        return update(state, {
	          eventState: babelHelpers.defineProperty({}, action.payload.stateKey, { $set: action.payload.newState })
	        });
	      }
	    case IX2_ACTION_LIST_PLAYBACK_CHANGED:
	      {
	        var _action$payload = action.payload,
	            actionListId = _action$payload.actionListId,
	            isPlaying = _action$payload.isPlaying;

	        return update(state, {
	          playbackState: babelHelpers.defineProperty({}, actionListId, { $set: isPlaying })
	        });
	      }
	    case IX2_VIEWPORT_WIDTH_CHANGED:
	      {
	        var _action$payload2 = action.payload,
	            width = _action$payload2.width,
	            mediaQueries = _action$payload2.mediaQueries;

	        var mediaQueryCount = mediaQueries.length;
	        var mediaQueryKey = null;
	        for (var i = 0; i < mediaQueryCount; i++) {
	          var _mediaQueries$i = mediaQueries[i],
	              key = _mediaQueries$i.key,
	              min = _mediaQueries$i.min,
	              max = _mediaQueries$i.max;

	          if (width >= min && width <= max) {
	            mediaQueryKey = key;
	            break;
	          }
	        }
	        return update(state, {
	          viewportWidth: { $set: width },
	          mediaQueryKey: { $set: mediaQueryKey }
	        });
	      }
	    default:
	      {
	        return state;
	      }
	  }
	};

	// Easing functions adapted from Thomas Fuchs & Jeremy Kahn
	// Easing Equations (c) 2003 Robert Penner, BSD license
	// https://raw.github.com/danro/easing-js/master/LICENSE

	var magicSwing = 1.70158;

	function inQuad(pos) {
	  return Math.pow(pos, 2);
	}

	function outQuad(pos) {
	  return -(Math.pow(pos - 1, 2) - 1);
	}

	function inOutQuad(pos) {
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(pos, 2);
	  }
	  return -0.5 * ((pos -= 2) * pos - 2);
	}

	function inCubic(pos) {
	  return Math.pow(pos, 3);
	}

	function outCubic(pos) {
	  return Math.pow(pos - 1, 3) + 1;
	}

	function inOutCubic(pos) {
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(pos, 3);
	  }
	  return 0.5 * (Math.pow(pos - 2, 3) + 2);
	}

	function inQuart(pos) {
	  return Math.pow(pos, 4);
	}

	function outQuart(pos) {
	  return -(Math.pow(pos - 1, 4) - 1);
	}

	function inOutQuart(pos) {
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(pos, 4);
	  }
	  return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
	}

	function inQuint(pos) {
	  return Math.pow(pos, 5);
	}

	function outQuint(pos) {
	  return Math.pow(pos - 1, 5) + 1;
	}

	function inOutQuint(pos) {
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(pos, 5);
	  }
	  return 0.5 * (Math.pow(pos - 2, 5) + 2);
	}

	function inSine(pos) {
	  return -Math.cos(pos * (Math.PI / 2)) + 1;
	}

	function outSine(pos) {
	  return Math.sin(pos * (Math.PI / 2));
	}

	function inOutSine(pos) {
	  return -0.5 * (Math.cos(Math.PI * pos) - 1);
	}

	function inExpo(pos) {
	  return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
	}

	function outExpo(pos) {
	  return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
	}

	function inOutExpo(pos) {
	  if (pos === 0) {
	    return 0;
	  }
	  if (pos === 1) {
	    return 1;
	  }
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * Math.pow(2, 10 * (pos - 1));
	  }
	  return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
	}

	function inCirc(pos) {
	  return -(Math.sqrt(1 - pos * pos) - 1);
	}

	function outCirc(pos) {
	  return Math.sqrt(1 - Math.pow(pos - 1, 2));
	}

	function inOutCirc(pos) {
	  if ((pos /= 0.5) < 1) {
	    return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
	  }
	  return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
	}

	function outBounce(pos) {
	  if (pos < 1 / 2.75) {
	    return 7.5625 * pos * pos;
	  } else if (pos < 2 / 2.75) {
	    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
	  } else if (pos < 2.5 / 2.75) {
	    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
	  } else {
	    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
	  }
	}

	function inBack(pos) {
	  var s = magicSwing;
	  return pos * pos * ((s + 1) * pos - s);
	}

	function outBack(pos) {
	  var s = magicSwing;
	  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
	}

	function inOutBack(pos) {
	  var s = magicSwing;
	  if ((pos /= 0.5) < 1) {
	    return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
	  }
	  return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
	}

	function inElastic(pos) {
	  var s = magicSwing;
	  var p = 0;
	  var a = 1;
	  if (pos === 0) {
	    return 0;
	  }
	  if (pos === 1) {
	    return 1;
	  }
	  if (!p) {
	    p = 0.3;
	  }
	  if (a < 1) {
	    a = 1;
	    s = p / 4;
	  } else {
	    s = p / (2 * Math.PI) * Math.asin(1 / a);
	  }
	  return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
	}

	function outElastic(pos) {
	  var s = magicSwing;
	  var p = 0;
	  var a = 1;
	  if (pos === 0) {
	    return 0;
	  }
	  if (pos === 1) {
	    return 1;
	  }
	  if (!p) {
	    p = 0.3;
	  }
	  if (a < 1) {
	    a = 1;
	    s = p / 4;
	  } else {
	    s = p / (2 * Math.PI) * Math.asin(1 / a);
	  }
	  return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
	}

	function inOutElastic(pos) {
	  var s = magicSwing;
	  var p = 0;
	  var a = 1;
	  if (pos === 0) {
	    return 0;
	  }
	  if ((pos /= 1 / 2) === 2) {
	    return 1;
	  }
	  if (!p) {
	    p = 0.3 * 1.5;
	  }
	  if (a < 1) {
	    a = 1;
	    s = p / 4;
	  } else {
	    s = p / (2 * Math.PI) * Math.asin(1 / a);
	  }
	  if (pos < 1) {
	    return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
	  }
	  return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
	}

	function swingFromTo(pos) {
	  var s = magicSwing;
	  return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
	}

	function swingFrom(pos) {
	  var s = magicSwing;
	  return pos * pos * ((s + 1) * pos - s);
	}

	function swingTo(pos) {
	  var s = magicSwing;
	  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
	}

	function bounce(pos) {
	  if (pos < 1 / 2.75) {
	    return 7.5625 * pos * pos;
	  } else if (pos < 2 / 2.75) {
	    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
	  } else if (pos < 2.5 / 2.75) {
	    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
	  } else {
	    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
	  }
	}

	function bouncePast(pos) {
	  if (pos < 1 / 2.75) {
	    return 7.5625 * pos * pos;
	  } else if (pos < 2 / 2.75) {
	    return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
	  } else if (pos < 2.5 / 2.75) {
	    return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
	  } else {
	    return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
	  }
	}

var easings = Object.freeze({
	  inQuad: inQuad,
	  outQuad: outQuad,
	  inOutQuad: inOutQuad,
	  inCubic: inCubic,
	  outCubic: outCubic,
	  inOutCubic: inOutCubic,
	  inQuart: inQuart,
	  outQuart: outQuart,
	  inOutQuart: inOutQuart,
	  inQuint: inQuint,
	  outQuint: outQuint,
	  inOutQuint: inOutQuint,
	  inSine: inSine,
	  outSine: outSine,
	  inOutSine: inOutSine,
	  inExpo: inExpo,
	  outExpo: outExpo,
	  inOutExpo: inOutExpo,
	  inCirc: inCirc,
	  outCirc: outCirc,
	  inOutCirc: inOutCirc,
	  outBounce: outBounce,
	  inBack: inBack,
	  outBack: outBack,
	  inOutBack: inOutBack,
	  inElastic: inElastic,
	  outElastic: outElastic,
	  inOutElastic: inOutElastic,
	  swingFromTo: swingFromTo,
	  swingFrom: swingFrom,
	  swingTo: swingTo,
	  bounce: bounce,
	  bouncePast: bouncePast
	});

	function optimizeFloat(value) {
	  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
	  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

	  var pow = Math.pow(base, digits);
	  var float = Number(Math.round(value * pow) / pow);
	  return Math.abs(float) > 0.0001 ? float : 0;
	}

	function applyEasing(easing, position) {
	  if (position === 0) {
	    return 0;
	  }
	  if (position === 1) {
	    return 1;
	  }
	  return optimizeFloat(position > 0 && easing && easings[easing] ? easings[easing](position) : position);
	}

	var continuousInstance = function continuousInstance(state, action) {
	  var lastPosition = state.position,
	      parameterId = state.parameterId,
	      actionGroups = state.actionGroups,
	      destinationKeys = state.destinationKeys,
	      smoothing = state.smoothing,
	      restingValue = state.restingValue;
	  var parameters = action.payload.parameters;

	  var velocity = Math.max(1 - smoothing, 0.01);
	  var paramValue = parameters[parameterId];
	  if (paramValue == null) {
	    velocity = 1;
	    paramValue = restingValue;
	  }
	  var nextPosition = Math.max(paramValue, 0) || 0;
	  var positionDiff = optimizeFloat(nextPosition - lastPosition);
	  var position = optimizeFloat(lastPosition + positionDiff * velocity);
	  var keyframePosition = position * 100;

	  if (position === lastPosition && state.current) {
	    return state;
	  }

	  var fromActionItem = void 0;
	  var toActionItem = void 0;
	  var positionOffset = void 0;
	  var positionRange = void 0;

	  for (var i = 0, length = actionGroups.length; i < length; i++) {
	    var _actionGroups$i = actionGroups[i],
	        keyframe = _actionGroups$i.keyframe,
	        actionItems = _actionGroups$i.actionItems;


	    if (keyframePosition >= keyframe) {
	      fromActionItem = actionItems[0];

	      var nextGroup = actionGroups[i + 1];
	      var hasNextItem = nextGroup && keyframePosition !== keyframe;

	      toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;

	      if (hasNextItem) {
	        positionOffset = keyframe / 100;
	        positionRange = (nextGroup.keyframe - keyframe) / 100;
	      }
	    }
	  }

	  var current = {};

	  if (fromActionItem && !toActionItem) {
	    for (var _i = 0, _length = destinationKeys.length; _i < _length; _i++) {
	      var key = destinationKeys[_i];
	      current[key] = fromActionItem.config[key];
	    }
	  } else if (fromActionItem && toActionItem) {
	    var localPosition = (position - positionOffset) / positionRange;
	    var easing = fromActionItem.config.easing;
	    var eased = applyEasing(easing, localPosition);
	    for (var _i2 = 0, _length2 = destinationKeys.length; _i2 < _length2; _i2++) {
	      var _key = destinationKeys[_i2];
	      var fromVal = fromActionItem.config[_key];
	      var toVal = toActionItem.config[_key];
	      var diff = toVal - fromVal;
	      var value = diff * eased + fromVal;
	      current[_key] = value;
	    }
	  }

	  return update(state, {
	    position: { $set: position },
	    current: { $set: current }
	  });
	};

	var timedInstance = function timedInstance(state, action) {
	  var _state = state,
	      active = _state.active,
	      origin = _state.origin,
	      start = _state.start,
	      immediate = _state.immediate,
	      isGeneral = _state.isGeneral,
	      verbose = _state.verbose,
	      actionItem = _state.actionItem,
	      destination = _state.destination,
	      destinationKeys = _state.destinationKeys;


	  var easing = actionItem.config.easing;
	  var _actionItem$config = actionItem.config,
	      duration = _actionItem$config.duration,
	      delay = _actionItem$config.delay;

	  if (isGeneral) {
	    duration = 0;
	  } else if (immediate) {
	    duration = delay = 0;
	  }
	  var now = action.payload.now;


	  if (active && origin) {
	    var delta = now - (start + delay);

	    if (verbose) {
	      var verboseDelta = now - start;
	      var verboseDuration = duration + delay;
	      var verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
	      state = update(state, {
	        verboseTimeElapsed: { $set: verboseDuration * verbosePosition }
	      });
	    }

	    if (delta < 0) {
	      return state;
	    }

	    var position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
	    var eased = applyEasing(easing, position);

	    var query = {};

	    var current = destinationKeys.length ? destinationKeys.reduce(function (result, key) {
	      var destValue = destination[key];
	      var originVal = parseFloat(origin[key]) || 0;
	      var diff = parseFloat(destValue) - originVal;
	      var value = diff * eased + originVal;
	      result[key] = value;
	      return result;
	    }, {}) : null;

	    query.current = { $set: current };
	    query.position = { $set: position };

	    if (position === 1) {
	      query.active = { $set: false };
	      query.complete = { $set: true };
	    }

	    return update(state, query);
	  }
	  return state;
	};

	var ixInstances = function ixInstances() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.freeze({});
	  var action = arguments[1];

	  switch (action.type) {
	    case IX2_RAW_DATA_IMPORTED:
	      {
	        return action.payload.ixInstances || Object.freeze({});
	      }
	    case IX2_SESSION_STOPPED:
	      {
	        return Object.freeze({});
	      }
	    case IX2_INSTANCE_ADDED:
	      {
	        var _action$payload = action.payload,
	            instanceId = _action$payload.instanceId,
	            actionItem = _action$payload.actionItem,
	            element = _action$payload.element,
	            eventId = _action$payload.eventId,
	            actionListId = _action$payload.actionListId,
	            groupIndex = _action$payload.groupIndex,
	            isCarrier = _action$payload.isCarrier,
	            origin = _action$payload.origin,
	            destination = _action$payload.destination,
	            immediate = _action$payload.immediate,
	            verbose = _action$payload.verbose,
	            continuous = _action$payload.continuous,
	            parameterId = _action$payload.parameterId,
	            actionGroups = _action$payload.actionGroups,
	            smoothing = _action$payload.smoothing,
	            restingValue = _action$payload.restingValue;
	        var actionTypeId = actionItem.actionTypeId;

	        var typeFound = void 0;
	        var isTransform = typeFound = /^TRANSFORM_/.test(actionTypeId);
	        var isStyle = !typeFound ? typeFound = /^STYLE_/.test(actionTypeId) : false;
	        var isGeneral = !typeFound ? typeFound = /^GENERAL_/.test(actionTypeId) : false;
	        var styleProp = isStyle && actionTypeId.replace('STYLE_', '').toLowerCase();
	        var destinationKeys = Object.keys(destination).filter(function (key) {
	          return destination[key] != null;
	        });

	        return update(state, babelHelpers.defineProperty({}, instanceId, { $set: {
	            id: instanceId,
	            active: false,
	            position: 0,
	            start: 0,
	            origin: origin,
	            destination: destination,
	            destinationKeys: destinationKeys,
	            immediate: immediate,
	            verbose: verbose,
	            current: null,
	            actionItem: actionItem,
	            element: element,
	            eventId: eventId,
	            actionListId: actionListId,
	            groupIndex: groupIndex,
	            isTransform: isTransform,
	            isStyle: isStyle,
	            isGeneral: isGeneral,
	            isCarrier: isCarrier,
	            styleProp: styleProp,
	            continuous: continuous,
	            parameterId: parameterId,
	            actionGroups: actionGroups,
	            smoothing: smoothing,
	            restingValue: restingValue
	          } }));
	      }
	    case IX2_INSTANCE_STARTED:
	      {
	        var _instanceId = action.payload.instanceId;

	        return update(state, babelHelpers.defineProperty({}, _instanceId, { $merge: {
	            active: true,
	            complete: false,
	            start: window.performance.now()
	          } }));
	      }
	    case IX2_INSTANCE_REMOVED:
	      {
	        var _instanceId2 = action.payload.instanceId;

	        return update(state, { $unset: [_instanceId2] });
	      }
	    case IX2_ANIMATION_FRAME_CHANGED:
	      {
	        var newState = state;
	        var keys = Object.keys(state);
	        var length = keys.length;

	        for (var i = 0; i < length; i++) {
	          var key = keys[i];
	          var instance = state[key];
	          var reducer = instance.continuous ? continuousInstance : timedInstance;
	          newState = update(newState, babelHelpers.defineProperty({}, key, { $set: reducer(instance, action) }));
	        }
	        return newState;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	};

	var ixParameters = function ixParameters() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {/*mutable flat state*/};
	  var action = arguments[1];

	  switch (action.type) {
	    case IX2_RAW_DATA_IMPORTED:
	      {
	        return action.payload.ixParameters || {/*mutable flat state*/};
	      }
	    case IX2_SESSION_STOPPED:
	      {
	        return {/*mutable flat state*/};
	      }
	    case IX2_PARAMETER_CHANGED:
	      {
	        var _action$payload = action.payload,
	            key = _action$payload.key,
	            value = _action$payload.value;

	        state[key] = value;
	        return state;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	};

	var reducer = combineReducers({
	  ixData: ixData,
	  ixRequest: ixRequest,
	  ixSession: ixSession,
	  ixInstances: ixInstances,
	  ixParameters: ixParameters
	});

	var isObjectLike$1 = __commonjs(function (module) {
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;
	});

	var require$$1$1 = (isObjectLike$1 && typeof isObjectLike$1 === 'object' && 'default' in isObjectLike$1 ? isObjectLike$1['default'] : isObjectLike$1);

	var _objectToString = __commonjs(function (module) {
	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;
	});

	var require$$0$14 = (_objectToString && typeof _objectToString === 'object' && 'default' in _objectToString ? _objectToString['default'] : _objectToString);

	var _freeGlobal = __commonjs(function (module, exports, global) {
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;
	});

	var require$$0$16 = (_freeGlobal && typeof _freeGlobal === 'object' && 'default' in _freeGlobal ? _freeGlobal['default'] : _freeGlobal);

	var _root = __commonjs(function (module) {
	var freeGlobal = require$$0$16;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;
	});

	var require$$0$15 = (_root && typeof _root === 'object' && 'default' in _root ? _root['default'] : _root);

	var _Symbol = __commonjs(function (module) {
	var root = require$$0$15;

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;
	});

	var require$$2$1 = (_Symbol && typeof _Symbol === 'object' && 'default' in _Symbol ? _Symbol['default'] : _Symbol);

	var _getRawTag = __commonjs(function (module) {
	var Symbol = require$$2$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;
	});

	var require$$1$2 = (_getRawTag && typeof _getRawTag === 'object' && 'default' in _getRawTag ? _getRawTag['default'] : _getRawTag);

	var _baseGetTag = __commonjs(function (module) {
	var Symbol = require$$2$1,
	    getRawTag = require$$1$2,
	    objectToString = require$$0$14;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;
	});

	var require$$2 = (_baseGetTag && typeof _baseGetTag === 'object' && 'default' in _baseGetTag ? _baseGetTag['default'] : _baseGetTag);

	var isSymbol = __commonjs(function (module) {
	var baseGetTag = require$$2,
	    isObjectLike = require$$1$1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;
	});

	var require$$0$13 = (isSymbol && typeof isSymbol === 'object' && 'default' in isSymbol ? isSymbol['default'] : isSymbol);

	var isObject = __commonjs(function (module) {
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;
	});

	var require$$0$17 = (isObject && typeof isObject === 'object' && 'default' in isObject ? isObject['default'] : isObject);

	var toNumber = __commonjs(function (module) {
	var isObject = require$$0$17,
	    isSymbol = require$$0$13;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;
	});

	var require$$0$12 = (toNumber && typeof toNumber === 'object' && 'default' in toNumber ? toNumber['default'] : toNumber);

	var toFinite = __commonjs(function (module) {
	var toNumber = require$$0$12;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;
	});

	var require$$0$11 = (toFinite && typeof toFinite === 'object' && 'default' in toFinite ? toFinite['default'] : toFinite);

	var toInteger = __commonjs(function (module) {
	var toFinite = require$$0$11;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;
	});

	var require$$0$10 = (toInteger && typeof toInteger === 'object' && 'default' in toInteger ? toInteger['default'] : toInteger);

	var _toKey = __commonjs(function (module) {
	var isSymbol = require$$0$13;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;
	});

	var require$$0$19 = (_toKey && typeof _toKey === 'object' && 'default' in _toKey ? _toKey['default'] : _toKey);

	var isArray = __commonjs(function (module) {
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;
	});

	var require$$0$20 = (isArray && typeof isArray === 'object' && 'default' in isArray ? isArray['default'] : isArray);

	var _isKey = __commonjs(function (module) {
	var isArray = require$$0$20,
	    isSymbol = require$$0$13;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;
	});

	var require$$3 = (_isKey && typeof _isKey === 'object' && 'default' in _isKey ? _isKey['default'] : _isKey);

	var _arrayMap = __commonjs(function (module) {
	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;
	});

	var require$$3$2 = (_arrayMap && typeof _arrayMap === 'object' && 'default' in _arrayMap ? _arrayMap['default'] : _arrayMap);

	var _baseToString = __commonjs(function (module) {
	var Symbol = require$$2$1,
	    arrayMap = require$$3$2,
	    isArray = require$$0$20,
	    isSymbol = require$$0$13;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;
	});

	var require$$0$22 = (_baseToString && typeof _baseToString === 'object' && 'default' in _baseToString ? _baseToString['default'] : _baseToString);

	var toString = __commonjs(function (module) {
	var baseToString = require$$0$22;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;
	});

	var require$$0$21 = (toString && typeof toString === 'object' && 'default' in toString ? toString['default'] : toString);

	var _isKeyable = __commonjs(function (module) {
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;
	});

	var require$$0$28 = (_isKeyable && typeof _isKeyable === 'object' && 'default' in _isKeyable ? _isKeyable['default'] : _isKeyable);

	var _getMapData = __commonjs(function (module) {
	var isKeyable = require$$0$28;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;
	});

	var require$$0$27 = (_getMapData && typeof _getMapData === 'object' && 'default' in _getMapData ? _getMapData['default'] : _getMapData);

	var _mapCacheSet = __commonjs(function (module) {
	var getMapData = require$$0$27;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;
	});

	var require$$0$26 = (_mapCacheSet && typeof _mapCacheSet === 'object' && 'default' in _mapCacheSet ? _mapCacheSet['default'] : _mapCacheSet);

	var _mapCacheHas = __commonjs(function (module) {
	var getMapData = require$$0$27;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;
	});

	var require$$1$4 = (_mapCacheHas && typeof _mapCacheHas === 'object' && 'default' in _mapCacheHas ? _mapCacheHas['default'] : _mapCacheHas);

	var _mapCacheGet = __commonjs(function (module) {
	var getMapData = require$$0$27;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;
	});

	var require$$2$5 = (_mapCacheGet && typeof _mapCacheGet === 'object' && 'default' in _mapCacheGet ? _mapCacheGet['default'] : _mapCacheGet);

	var _mapCacheDelete = __commonjs(function (module) {
	var getMapData = require$$0$27;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;
	});

	var require$$3$3 = (_mapCacheDelete && typeof _mapCacheDelete === 'object' && 'default' in _mapCacheDelete ? _mapCacheDelete['default'] : _mapCacheDelete);

	var _getValue = __commonjs(function (module) {
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;
	});

	var require$$0$30 = (_getValue && typeof _getValue === 'object' && 'default' in _getValue ? _getValue['default'] : _getValue);

	var _toSource = __commonjs(function (module) {
	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;
	});

	var require$$0$31 = (_toSource && typeof _toSource === 'object' && 'default' in _toSource ? _toSource['default'] : _toSource);

	var _coreJsData = __commonjs(function (module) {
	var root = require$$0$15;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;
	});

	var require$$0$32 = (_coreJsData && typeof _coreJsData === 'object' && 'default' in _coreJsData ? _coreJsData['default'] : _coreJsData);

	var _isMasked = __commonjs(function (module) {
	var coreJsData = require$$0$32;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;
	});

	var require$$2$6 = (_isMasked && typeof _isMasked === 'object' && 'default' in _isMasked ? _isMasked['default'] : _isMasked);

	var isFunction = __commonjs(function (module) {
	var baseGetTag = require$$2,
	    isObject = require$$0$17;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;
	});

	var require$$1$7 = (isFunction && typeof isFunction === 'object' && 'default' in isFunction ? isFunction['default'] : isFunction);

	var _baseIsNative = __commonjs(function (module) {
	var isFunction = require$$1$7,
	    isMasked = require$$2$6,
	    isObject = require$$0$17,
	    toSource = require$$0$31;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;
	});

	var require$$1$6 = (_baseIsNative && typeof _baseIsNative === 'object' && 'default' in _baseIsNative ? _baseIsNative['default'] : _baseIsNative);

	var _getNative = __commonjs(function (module) {
	var baseIsNative = require$$1$6,
	    getValue = require$$0$30;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;
	});

	var require$$0$29 = (_getNative && typeof _getNative === 'object' && 'default' in _getNative ? _getNative['default'] : _getNative);

	var _Map = __commonjs(function (module) {
	var getNative = require$$0$29,
	    root = require$$0$15;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;
	});

	var require$$1$5 = (_Map && typeof _Map === 'object' && 'default' in _Map ? _Map['default'] : _Map);

	var eq = __commonjs(function (module) {
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;
	});

	var require$$0$36 = (eq && typeof eq === 'object' && 'default' in eq ? eq['default'] : eq);

	var _assocIndexOf = __commonjs(function (module) {
	var eq = require$$0$36;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;
	});

	var require$$0$35 = (_assocIndexOf && typeof _assocIndexOf === 'object' && 'default' in _assocIndexOf ? _assocIndexOf['default'] : _assocIndexOf);

	var _listCacheSet = __commonjs(function (module) {
	var assocIndexOf = require$$0$35;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;
	});

	var require$$0$34 = (_listCacheSet && typeof _listCacheSet === 'object' && 'default' in _listCacheSet ? _listCacheSet['default'] : _listCacheSet);

	var _listCacheHas = __commonjs(function (module) {
	var assocIndexOf = require$$0$35;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;
	});

	var require$$1$8 = (_listCacheHas && typeof _listCacheHas === 'object' && 'default' in _listCacheHas ? _listCacheHas['default'] : _listCacheHas);

	var _listCacheGet = __commonjs(function (module) {
	var assocIndexOf = require$$0$35;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;
	});

	var require$$2$7 = (_listCacheGet && typeof _listCacheGet === 'object' && 'default' in _listCacheGet ? _listCacheGet['default'] : _listCacheGet);

	var _listCacheDelete = __commonjs(function (module) {
	var assocIndexOf = require$$0$35;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;
	});

	var require$$3$4 = (_listCacheDelete && typeof _listCacheDelete === 'object' && 'default' in _listCacheDelete ? _listCacheDelete['default'] : _listCacheDelete);

	var _listCacheClear = __commonjs(function (module) {
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;
	});

	var require$$4$1 = (_listCacheClear && typeof _listCacheClear === 'object' && 'default' in _listCacheClear ? _listCacheClear['default'] : _listCacheClear);

	var _ListCache = __commonjs(function (module) {
	var listCacheClear = require$$4$1,
	    listCacheDelete = require$$3$4,
	    listCacheGet = require$$2$7,
	    listCacheHas = require$$1$8,
	    listCacheSet = require$$0$34;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;
	});

	var require$$0$33 = (_ListCache && typeof _ListCache === 'object' && 'default' in _ListCache ? _ListCache['default'] : _ListCache);

	var _nativeCreate = __commonjs(function (module) {
	var getNative = require$$0$29;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;
	});

	var require$$0$38 = (_nativeCreate && typeof _nativeCreate === 'object' && 'default' in _nativeCreate ? _nativeCreate['default'] : _nativeCreate);

	var _hashSet = __commonjs(function (module) {
	var nativeCreate = require$$0$38;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;
	});

	var require$$0$37 = (_hashSet && typeof _hashSet === 'object' && 'default' in _hashSet ? _hashSet['default'] : _hashSet);

	var _hashHas = __commonjs(function (module) {
	var nativeCreate = require$$0$38;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;
	});

	var require$$1$9 = (_hashHas && typeof _hashHas === 'object' && 'default' in _hashHas ? _hashHas['default'] : _hashHas);

	var _hashGet = __commonjs(function (module) {
	var nativeCreate = require$$0$38;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;
	});

	var require$$2$9 = (_hashGet && typeof _hashGet === 'object' && 'default' in _hashGet ? _hashGet['default'] : _hashGet);

	var _hashDelete = __commonjs(function (module) {
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;
	});

	var require$$3$5 = (_hashDelete && typeof _hashDelete === 'object' && 'default' in _hashDelete ? _hashDelete['default'] : _hashDelete);

	var _hashClear = __commonjs(function (module) {
	var nativeCreate = require$$0$38;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;
	});

	var require$$4$2 = (_hashClear && typeof _hashClear === 'object' && 'default' in _hashClear ? _hashClear['default'] : _hashClear);

	var _Hash = __commonjs(function (module) {
	var hashClear = require$$4$2,
	    hashDelete = require$$3$5,
	    hashGet = require$$2$9,
	    hashHas = require$$1$9,
	    hashSet = require$$0$37;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;
	});

	var require$$2$8 = (_Hash && typeof _Hash === 'object' && 'default' in _Hash ? _Hash['default'] : _Hash);

	var _mapCacheClear = __commonjs(function (module) {
	var Hash = require$$2$8,
	    ListCache = require$$0$33,
	    Map = require$$1$5;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;
	});

	var require$$4 = (_mapCacheClear && typeof _mapCacheClear === 'object' && 'default' in _mapCacheClear ? _mapCacheClear['default'] : _mapCacheClear);

	var _MapCache = __commonjs(function (module) {
	var mapCacheClear = require$$4,
	    mapCacheDelete = require$$3$3,
	    mapCacheGet = require$$2$5,
	    mapCacheHas = require$$1$4,
	    mapCacheSet = require$$0$26;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;
	});

	var require$$0$25 = (_MapCache && typeof _MapCache === 'object' && 'default' in _MapCache ? _MapCache['default'] : _MapCache);

	var memoize = __commonjs(function (module) {
	var MapCache = require$$0$25;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;
	});

	var require$$0$24 = (memoize && typeof memoize === 'object' && 'default' in memoize ? memoize['default'] : memoize);

	var _memoizeCapped = __commonjs(function (module) {
	var memoize = require$$0$24;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;
	});

	var require$$0$23 = (_memoizeCapped && typeof _memoizeCapped === 'object' && 'default' in _memoizeCapped ? _memoizeCapped['default'] : _memoizeCapped);

	var _stringToPath = __commonjs(function (module) {
	var memoizeCapped = require$$0$23;

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;
	});

	var require$$1$3 = (_stringToPath && typeof _stringToPath === 'object' && 'default' in _stringToPath ? _stringToPath['default'] : _stringToPath);

	var _castPath = __commonjs(function (module) {
	var isArray = require$$0$20,
	    isKey = require$$3,
	    stringToPath = require$$1$3,
	    toString = require$$0$21;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;
	});

	var require$$3$1 = (_castPath && typeof _castPath === 'object' && 'default' in _castPath ? _castPath['default'] : _castPath);

	var _baseGet = __commonjs(function (module) {
	var castPath = require$$3$1,
	    toKey = require$$0$19;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;
	});

	var require$$2$4 = (_baseGet && typeof _baseGet === 'object' && 'default' in _baseGet ? _baseGet['default'] : _baseGet);

	var _basePropertyDeep = __commonjs(function (module) {
	var baseGet = require$$2$4;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;
	});

	var require$$2$3 = (_basePropertyDeep && typeof _basePropertyDeep === 'object' && 'default' in _basePropertyDeep ? _basePropertyDeep['default'] : _basePropertyDeep);

	var _baseProperty = __commonjs(function (module) {
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;
	});

	var require$$0$39 = (_baseProperty && typeof _baseProperty === 'object' && 'default' in _baseProperty ? _baseProperty['default'] : _baseProperty);

	var property = __commonjs(function (module) {
	var baseProperty = require$$0$39,
	    basePropertyDeep = require$$2$3,
	    isKey = require$$3,
	    toKey = require$$0$19;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;
	});

	var require$$0$18 = (property && typeof property === 'object' && 'default' in property ? property['default'] : property);

	var identity = __commonjs(function (module) {
	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;
	});

	var require$$0$40 = (identity && typeof identity === 'object' && 'default' in identity ? identity['default'] : identity);

	var _matchesStrictComparable = __commonjs(function (module) {
	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;
	});

	var require$$0$41 = (_matchesStrictComparable && typeof _matchesStrictComparable === 'object' && 'default' in _matchesStrictComparable ? _matchesStrictComparable['default'] : _matchesStrictComparable);

	var _isStrictComparable = __commonjs(function (module) {
	var isObject = require$$0$17;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;
	});

	var require$$1$10 = (_isStrictComparable && typeof _isStrictComparable === 'object' && 'default' in _isStrictComparable ? _isStrictComparable['default'] : _isStrictComparable);

	var isLength = __commonjs(function (module) {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;
	});

	var require$$0$43 = (isLength && typeof isLength === 'object' && 'default' in isLength ? isLength['default'] : isLength);

	var _isIndex = __commonjs(function (module) {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;
	});

	var require$$2$10 = (_isIndex && typeof _isIndex === 'object' && 'default' in _isIndex ? _isIndex['default'] : _isIndex);

	var _baseIsArguments = __commonjs(function (module) {
	var baseGetTag = require$$2,
	    isObjectLike = require$$1$1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;
	});

	var require$$1$12 = (_baseIsArguments && typeof _baseIsArguments === 'object' && 'default' in _baseIsArguments ? _baseIsArguments['default'] : _baseIsArguments);

	var isArguments = __commonjs(function (module) {
	var baseIsArguments = require$$1$12,
	    isObjectLike = require$$1$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;
	});

	var require$$1$11 = (isArguments && typeof isArguments === 'object' && 'default' in isArguments ? isArguments['default'] : isArguments);

	var _hasPath = __commonjs(function (module) {
	var castPath = require$$3$1,
	    isArguments = require$$1$11,
	    isArray = require$$0$20,
	    isIndex = require$$2$10,
	    isLength = require$$0$43,
	    toKey = require$$0$19;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;
	});

	var require$$0$42 = (_hasPath && typeof _hasPath === 'object' && 'default' in _hasPath ? _hasPath['default'] : _hasPath);

	var _baseHasIn = __commonjs(function (module) {
	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;
	});

	var require$$1$13 = (_baseHasIn && typeof _baseHasIn === 'object' && 'default' in _baseHasIn ? _baseHasIn['default'] : _baseHasIn);

	var hasIn = __commonjs(function (module) {
	var baseHasIn = require$$1$13,
	    hasPath = require$$0$42;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;
	});

	var require$$4$3 = (hasIn && typeof hasIn === 'object' && 'default' in hasIn ? hasIn['default'] : hasIn);

	var get = __commonjs(function (module) {
	var baseGet = require$$2$4;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;
	});

	var get$1 = (get && typeof get === 'object' && 'default' in get ? get['default'] : get);

	var _nodeUtil = __commonjs(function (module, exports) {
	var freeGlobal = require$$0$16;

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	var require$$0$46 = (_nodeUtil && typeof _nodeUtil === 'object' && 'default' in _nodeUtil ? _nodeUtil['default'] : _nodeUtil);

	var _baseUnary = __commonjs(function (module) {
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;
	});

	var require$$1$14 = (_baseUnary && typeof _baseUnary === 'object' && 'default' in _baseUnary ? _baseUnary['default'] : _baseUnary);

	var _baseIsTypedArray = __commonjs(function (module) {
	var baseGetTag = require$$2,
	    isLength = require$$0$43,
	    isObjectLike = require$$1$1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;
	});

	var require$$2$12 = (_baseIsTypedArray && typeof _baseIsTypedArray === 'object' && 'default' in _baseIsTypedArray ? _baseIsTypedArray['default'] : _baseIsTypedArray);

	var isTypedArray = __commonjs(function (module) {
	var baseIsTypedArray = require$$2$12,
	    baseUnary = require$$1$14,
	    nodeUtil = require$$0$46;

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;
	});

	var require$$0$45 = (isTypedArray && typeof isTypedArray === 'object' && 'default' in isTypedArray ? isTypedArray['default'] : isTypedArray);

	var stubFalse = __commonjs(function (module) {
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;
	});

	var require$$0$47 = (stubFalse && typeof stubFalse === 'object' && 'default' in stubFalse ? stubFalse['default'] : stubFalse);

	var isBuffer = __commonjs(function (module, exports) {
	var root = require$$0$15,
	    stubFalse = require$$0$47;

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	});

	var require$$2$13 = (isBuffer && typeof isBuffer === 'object' && 'default' in isBuffer ? isBuffer['default'] : isBuffer);

	var _WeakMap = __commonjs(function (module) {
	var getNative = require$$0$29,
	    root = require$$0$15;

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;
	});

	var require$$0$48 = (_WeakMap && typeof _WeakMap === 'object' && 'default' in _WeakMap ? _WeakMap['default'] : _WeakMap);

	var _Set = __commonjs(function (module) {
	var getNative = require$$0$29,
	    root = require$$0$15;

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;
	});

	var require$$3$7 = (_Set && typeof _Set === 'object' && 'default' in _Set ? _Set['default'] : _Set);

	var _Promise = __commonjs(function (module) {
	var getNative = require$$0$29,
	    root = require$$0$15;

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;
	});

	var require$$4$4 = (_Promise && typeof _Promise === 'object' && 'default' in _Promise ? _Promise['default'] : _Promise);

	var _DataView = __commonjs(function (module) {
	var getNative = require$$0$29,
	    root = require$$0$15;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;
	});

	var require$$6$1 = (_DataView && typeof _DataView === 'object' && 'default' in _DataView ? _DataView['default'] : _DataView);

	var _getTag = __commonjs(function (module) {
	var DataView = require$$6$1,
	    Map = require$$1$5,
	    Promise = require$$4$4,
	    Set = require$$3$7,
	    WeakMap = require$$0$48,
	    baseGetTag = require$$2,
	    toSource = require$$0$31;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;
	});

	var require$$6 = (_getTag && typeof _getTag === 'object' && 'default' in _getTag ? _getTag['default'] : _getTag);

	var isArrayLike = __commonjs(function (module) {
	var isFunction = require$$1$7,
	    isLength = require$$0$43;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;
	});

	var require$$0$50 = (isArrayLike && typeof isArrayLike === 'object' && 'default' in isArrayLike ? isArrayLike['default'] : isArrayLike);

	var _overArg = __commonjs(function (module) {
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;
	});

	var require$$0$52 = (_overArg && typeof _overArg === 'object' && 'default' in _overArg ? _overArg['default'] : _overArg);

	var _nativeKeys = __commonjs(function (module) {
	var overArg = require$$0$52;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;
	});

	var require$$0$51 = (_nativeKeys && typeof _nativeKeys === 'object' && 'default' in _nativeKeys ? _nativeKeys['default'] : _nativeKeys);

	var _isPrototype = __commonjs(function (module) {
	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;
	});

	var require$$1$15 = (_isPrototype && typeof _isPrototype === 'object' && 'default' in _isPrototype ? _isPrototype['default'] : _isPrototype);

	var _baseKeys = __commonjs(function (module) {
	var isPrototype = require$$1$15,
	    nativeKeys = require$$0$51;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;
	});

	var require$$7 = (_baseKeys && typeof _baseKeys === 'object' && 'default' in _baseKeys ? _baseKeys['default'] : _baseKeys);

	var _baseTimes = __commonjs(function (module) {
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;
	});

	var require$$5 = (_baseTimes && typeof _baseTimes === 'object' && 'default' in _baseTimes ? _baseTimes['default'] : _baseTimes);

	var _arrayLikeKeys = __commonjs(function (module) {
	var baseTimes = require$$5,
	    isArguments = require$$1$11,
	    isArray = require$$0$20,
	    isBuffer = require$$2$13,
	    isIndex = require$$2$10,
	    isTypedArray = require$$0$45;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;
	});

	var require$$2$14 = (_arrayLikeKeys && typeof _arrayLikeKeys === 'object' && 'default' in _arrayLikeKeys ? _arrayLikeKeys['default'] : _arrayLikeKeys);

	var keys = __commonjs(function (module) {
	var arrayLikeKeys = require$$2$14,
	    baseKeys = require$$7,
	    isArrayLike = require$$0$50;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;
	});

	var require$$0$49 = (keys && typeof keys === 'object' && 'default' in keys ? keys['default'] : keys);

	var _equalObjects = __commonjs(function (module) {
	var keys = require$$0$49;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;
	});

	var require$$4$5 = (_equalObjects && typeof _equalObjects === 'object' && 'default' in _equalObjects ? _equalObjects['default'] : _equalObjects);

	var _setToArray = __commonjs(function (module) {
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;
	});

	var require$$0$53 = (_setToArray && typeof _setToArray === 'object' && 'default' in _setToArray ? _setToArray['default'] : _setToArray);

	var _mapToArray = __commonjs(function (module) {
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;
	});

	var require$$1$16 = (_mapToArray && typeof _mapToArray === 'object' && 'default' in _mapToArray ? _mapToArray['default'] : _mapToArray);

	var _cacheHas = __commonjs(function (module) {
	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;
	});

	var require$$0$54 = (_cacheHas && typeof _cacheHas === 'object' && 'default' in _cacheHas ? _cacheHas['default'] : _cacheHas);

	var _arraySome = __commonjs(function (module) {
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;
	});

	var require$$1$17 = (_arraySome && typeof _arraySome === 'object' && 'default' in _arraySome ? _arraySome['default'] : _arraySome);

	var _setCacheHas = __commonjs(function (module) {
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;
	});

	var require$$0$55 = (_setCacheHas && typeof _setCacheHas === 'object' && 'default' in _setCacheHas ? _setCacheHas['default'] : _setCacheHas);

	var _setCacheAdd = __commonjs(function (module) {
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;
	});

	var require$$1$18 = (_setCacheAdd && typeof _setCacheAdd === 'object' && 'default' in _setCacheAdd ? _setCacheAdd['default'] : _setCacheAdd);

	var _SetCache = __commonjs(function (module) {
	var MapCache = require$$0$25,
	    setCacheAdd = require$$1$18,
	    setCacheHas = require$$0$55;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;
	});

	var require$$2$16 = (_SetCache && typeof _SetCache === 'object' && 'default' in _SetCache ? _SetCache['default'] : _SetCache);

	var _equalArrays = __commonjs(function (module) {
	var SetCache = require$$2$16,
	    arraySome = require$$1$17,
	    cacheHas = require$$0$54;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;
	});

	var require$$2$15 = (_equalArrays && typeof _equalArrays === 'object' && 'default' in _equalArrays ? _equalArrays['default'] : _equalArrays);

	var _Uint8Array = __commonjs(function (module) {
	var root = require$$0$15;

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;
	});

	var require$$4$6 = (_Uint8Array && typeof _Uint8Array === 'object' && 'default' in _Uint8Array ? _Uint8Array['default'] : _Uint8Array);

	var _equalByTag = __commonjs(function (module) {
	var Symbol = require$$2$1,
	    Uint8Array = require$$4$6,
	    eq = require$$0$36,
	    equalArrays = require$$2$15,
	    mapToArray = require$$1$16,
	    setToArray = require$$0$53;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;
	});

	var require$$5$1 = (_equalByTag && typeof _equalByTag === 'object' && 'default' in _equalByTag ? _equalByTag['default'] : _equalByTag);

	var _stackSet = __commonjs(function (module) {
	var ListCache = require$$0$33,
	    Map = require$$1$5,
	    MapCache = require$$0$25;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;
	});

	var require$$0$56 = (_stackSet && typeof _stackSet === 'object' && 'default' in _stackSet ? _stackSet['default'] : _stackSet);

	var _stackHas = __commonjs(function (module) {
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;
	});

	var require$$1$20 = (_stackHas && typeof _stackHas === 'object' && 'default' in _stackHas ? _stackHas['default'] : _stackHas);

	var _stackGet = __commonjs(function (module) {
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;
	});

	var require$$2$17 = (_stackGet && typeof _stackGet === 'object' && 'default' in _stackGet ? _stackGet['default'] : _stackGet);

	var _stackDelete = __commonjs(function (module) {
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;
	});

	var require$$3$8 = (_stackDelete && typeof _stackDelete === 'object' && 'default' in _stackDelete ? _stackDelete['default'] : _stackDelete);

	var _stackClear = __commonjs(function (module) {
	var ListCache = require$$0$33;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;
	});

	var require$$4$7 = (_stackClear && typeof _stackClear === 'object' && 'default' in _stackClear ? _stackClear['default'] : _stackClear);

	var _Stack = __commonjs(function (module) {
	var ListCache = require$$0$33,
	    stackClear = require$$4$7,
	    stackDelete = require$$3$8,
	    stackGet = require$$2$17,
	    stackHas = require$$1$20,
	    stackSet = require$$0$56;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;
	});

	var require$$1$19 = (_Stack && typeof _Stack === 'object' && 'default' in _Stack ? _Stack['default'] : _Stack);

	var _baseIsEqualDeep = __commonjs(function (module) {
	var Stack = require$$1$19,
	    equalArrays = require$$2$15,
	    equalByTag = require$$5$1,
	    equalObjects = require$$4$5,
	    getTag = require$$6,
	    isArray = require$$0$20,
	    isBuffer = require$$2$13,
	    isTypedArray = require$$0$45;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;
	});

	var require$$2$11 = (_baseIsEqualDeep && typeof _baseIsEqualDeep === 'object' && 'default' in _baseIsEqualDeep ? _baseIsEqualDeep['default'] : _baseIsEqualDeep);

	var _baseIsEqual = __commonjs(function (module) {
	var baseIsEqualDeep = require$$2$11,
	    isObject = require$$0$17,
	    isObjectLike = require$$1$1;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;
	});

	var require$$0$44 = (_baseIsEqual && typeof _baseIsEqual === 'object' && 'default' in _baseIsEqual ? _baseIsEqual['default'] : _baseIsEqual);

	var _baseMatchesProperty = __commonjs(function (module) {
	var baseIsEqual = require$$0$44,
	    get = get$1,
	    hasIn = require$$4$3,
	    isKey = require$$3,
	    isStrictComparable = require$$1$10,
	    matchesStrictComparable = require$$0$41,
	    toKey = require$$0$19;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;
	});

	var require$$3$6 = (_baseMatchesProperty && typeof _baseMatchesProperty === 'object' && 'default' in _baseMatchesProperty ? _baseMatchesProperty['default'] : _baseMatchesProperty);

	var _getMatchData = __commonjs(function (module) {
	var isStrictComparable = require$$1$10,
	    keys = require$$0$49;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;
	});

	var require$$1$21 = (_getMatchData && typeof _getMatchData === 'object' && 'default' in _getMatchData ? _getMatchData['default'] : _getMatchData);

	var _baseIsMatch = __commonjs(function (module) {
	var Stack = require$$1$19,
	    baseIsEqual = require$$0$44;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;
	});

	var require$$2$18 = (_baseIsMatch && typeof _baseIsMatch === 'object' && 'default' in _baseIsMatch ? _baseIsMatch['default'] : _baseIsMatch);

	var _baseMatches = __commonjs(function (module) {
	var baseIsMatch = require$$2$18,
	    getMatchData = require$$1$21,
	    matchesStrictComparable = require$$0$41;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;
	});

	var require$$4$8 = (_baseMatches && typeof _baseMatches === 'object' && 'default' in _baseMatches ? _baseMatches['default'] : _baseMatches);

	var _baseIteratee = __commonjs(function (module) {
	var baseMatches = require$$4$8,
	    baseMatchesProperty = require$$3$6,
	    identity = require$$0$40,
	    isArray = require$$0$20,
	    property = require$$0$18;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;
	});

	var require$$2$2 = (_baseIteratee && typeof _baseIteratee === 'object' && 'default' in _baseIteratee ? _baseIteratee['default'] : _baseIteratee);

	var _baseFindIndex = __commonjs(function (module) {
	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;
	});

	var require$$2$19 = (_baseFindIndex && typeof _baseFindIndex === 'object' && 'default' in _baseFindIndex ? _baseFindIndex['default'] : _baseFindIndex);

	var findIndex = __commonjs(function (module) {
	var baseFindIndex = require$$2$19,
	    baseIteratee = require$$2$2,
	    toInteger = require$$0$10;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;
	});

	var require$$0$9 = (findIndex && typeof findIndex === 'object' && 'default' in findIndex ? findIndex['default'] : findIndex);

	var _createFind = __commonjs(function (module) {
	var baseIteratee = require$$2$2,
	    isArrayLike = require$$0$50,
	    keys = require$$0$49;

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	module.exports = createFind;
	});

	var require$$1$22 = (_createFind && typeof _createFind === 'object' && 'default' in _createFind ? _createFind['default'] : _createFind);

	var find = __commonjs(function (module) {
	var createFind = require$$1$22,
	    findIndex = require$$0$9;

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	module.exports = find;
	});

	var find$1 = (find && typeof find === 'object' && 'default' in find ? find['default'] : find);

	var _unicodeSize = __commonjs(function (module) {
	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Gets the size of a Unicode `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	function unicodeSize(string) {
	  var result = reUnicode.lastIndex = 0;
	  while (reUnicode.test(string)) {
	    ++result;
	  }
	  return result;
	}

	module.exports = unicodeSize;
	});

	var require$$0$58 = (_unicodeSize && typeof _unicodeSize === 'object' && 'default' in _unicodeSize ? _unicodeSize['default'] : _unicodeSize);

	var _hasUnicode = __commonjs(function (module) {
	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	module.exports = hasUnicode;
	});

	var require$$1$23 = (_hasUnicode && typeof _hasUnicode === 'object' && 'default' in _hasUnicode ? _hasUnicode['default'] : _hasUnicode);

	var _asciiSize = __commonjs(function (module) {
	var baseProperty = require$$0$39;

	/**
	 * Gets the size of an ASCII `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	var asciiSize = baseProperty('length');

	module.exports = asciiSize;
	});

	var require$$2$20 = (_asciiSize && typeof _asciiSize === 'object' && 'default' in _asciiSize ? _asciiSize['default'] : _asciiSize);

	var _stringSize = __commonjs(function (module) {
	var asciiSize = require$$2$20,
	    hasUnicode = require$$1$23,
	    unicodeSize = require$$0$58;

	/**
	 * Gets the number of symbols in `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the string size.
	 */
	function stringSize(string) {
	  return hasUnicode(string)
	    ? unicodeSize(string)
	    : asciiSize(string);
	}

	module.exports = stringSize;
	});

	var require$$0$57 = (_stringSize && typeof _stringSize === 'object' && 'default' in _stringSize ? _stringSize['default'] : _stringSize);

	var isString = __commonjs(function (module) {
	var baseGetTag = require$$2,
	    isArray = require$$0$20,
	    isObjectLike = require$$1$1;

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;
	});

	var require$$1$24 = (isString && typeof isString === 'object' && 'default' in isString ? isString['default'] : isString);

	var size = __commonjs(function (module) {
	var baseKeys = require$$7,
	    getTag = require$$6,
	    isArrayLike = require$$0$50,
	    isString = require$$1$24,
	    stringSize = require$$0$57;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/**
	 * Gets the size of `collection` by returning its length for array-like
	 * values or the number of own enumerable string keyed properties for objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @returns {number} Returns the collection size.
	 * @example
	 *
	 * _.size([1, 2, 3]);
	 * // => 3
	 *
	 * _.size({ 'a': 1, 'b': 2 });
	 * // => 2
	 *
	 * _.size('pebbles');
	 * // => 7
	 */
	function size(collection) {
	  if (collection == null) {
	    return 0;
	  }
	  if (isArrayLike(collection)) {
	    return isString(collection) ? stringSize(collection) : collection.length;
	  }
	  var tag = getTag(collection);
	  if (tag == mapTag || tag == setTag) {
	    return collection.size;
	  }
	  return baseKeys(collection).length;
	}

	module.exports = size;
	});

	var size$1 = (size && typeof size === 'object' && 'default' in size ? size['default'] : size);

	var _nativeKeysIn = __commonjs(function (module) {
	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;
	});

	var require$$0$62 = (_nativeKeysIn && typeof _nativeKeysIn === 'object' && 'default' in _nativeKeysIn ? _nativeKeysIn['default'] : _nativeKeysIn);

	var _baseKeysIn = __commonjs(function (module) {
	var isObject = require$$0$17,
	    isPrototype = require$$1$15,
	    nativeKeysIn = require$$0$62;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;
	});

	var require$$1$25 = (_baseKeysIn && typeof _baseKeysIn === 'object' && 'default' in _baseKeysIn ? _baseKeysIn['default'] : _baseKeysIn);

	var keysIn = __commonjs(function (module) {
	var arrayLikeKeys = require$$2$14,
	    baseKeysIn = require$$1$25,
	    isArrayLike = require$$0$50;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;
	});

	var require$$0$61 = (keysIn && typeof keysIn === 'object' && 'default' in keysIn ? keysIn['default'] : keysIn);

	var stubArray = __commonjs(function (module) {
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;
	});

	var require$$0$63 = (stubArray && typeof stubArray === 'object' && 'default' in stubArray ? stubArray['default'] : stubArray);

	var _getSymbols = __commonjs(function (module) {
	var overArg = require$$0$52,
	    stubArray = require$$0$63;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	module.exports = getSymbols;
	});

	var require$$1$27 = (_getSymbols && typeof _getSymbols === 'object' && 'default' in _getSymbols ? _getSymbols['default'] : _getSymbols);

	var _getPrototype = __commonjs(function (module) {
	var overArg = require$$0$52;

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;
	});

	var require$$2$21 = (_getPrototype && typeof _getPrototype === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype);

	var _arrayPush = __commonjs(function (module) {
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;
	});

	var require$$1$28 = (_arrayPush && typeof _arrayPush === 'object' && 'default' in _arrayPush ? _arrayPush['default'] : _arrayPush);

	var _getSymbolsIn = __commonjs(function (module) {
	var arrayPush = require$$1$28,
	    getPrototype = require$$2$21,
	    getSymbols = require$$1$27,
	    stubArray = require$$0$63;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;
	});

	var require$$1$26 = (_getSymbolsIn && typeof _getSymbolsIn === 'object' && 'default' in _getSymbolsIn ? _getSymbolsIn['default'] : _getSymbolsIn);

	var _baseGetAllKeys = __commonjs(function (module) {
	var arrayPush = require$$1$28,
	    isArray = require$$0$20;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;
	});

	var require$$2$22 = (_baseGetAllKeys && typeof _baseGetAllKeys === 'object' && 'default' in _baseGetAllKeys ? _baseGetAllKeys['default'] : _baseGetAllKeys);

	var _getAllKeysIn = __commonjs(function (module) {
	var baseGetAllKeys = require$$2$22,
	    getSymbolsIn = require$$1$26,
	    keysIn = require$$0$61;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;
	});

	var require$$0$60 = (_getAllKeysIn && typeof _getAllKeysIn === 'object' && 'default' in _getAllKeysIn ? _getAllKeysIn['default'] : _getAllKeysIn);

	var _defineProperty = __commonjs(function (module) {
	var getNative = require$$0$29;

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;
	});

	var require$$1$31 = (_defineProperty && typeof _defineProperty === 'object' && 'default' in _defineProperty ? _defineProperty['default'] : _defineProperty);

	var _baseAssignValue = __commonjs(function (module) {
	var defineProperty = require$$1$31;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;
	});

	var require$$2$23 = (_baseAssignValue && typeof _baseAssignValue === 'object' && 'default' in _baseAssignValue ? _baseAssignValue['default'] : _baseAssignValue);

	var _assignValue = __commonjs(function (module) {
	var baseAssignValue = require$$2$23,
	    eq = require$$0$36;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;
	});

	var require$$4$9 = (_assignValue && typeof _assignValue === 'object' && 'default' in _assignValue ? _assignValue['default'] : _assignValue);

	var _baseSet = __commonjs(function (module) {
	var assignValue = require$$4$9,
	    castPath = require$$3$1,
	    isIndex = require$$2$10,
	    isObject = require$$0$17,
	    toKey = require$$0$19;

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;
	});

	var require$$1$30 = (_baseSet && typeof _baseSet === 'object' && 'default' in _baseSet ? _baseSet['default'] : _baseSet);

	var _basePickBy = __commonjs(function (module) {
	var baseGet = require$$2$4,
	    baseSet = require$$1$30,
	    castPath = require$$3$1;

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, paths, predicate) {
	  var index = -1,
	      length = paths.length,
	      result = {};

	  while (++index < length) {
	    var path = paths[index],
	        value = baseGet(object, path);

	    if (predicate(value, path)) {
	      baseSet(result, castPath(path, object), value);
	    }
	  }
	  return result;
	}

	module.exports = basePickBy;
	});

	var require$$1$29 = (_basePickBy && typeof _basePickBy === 'object' && 'default' in _basePickBy ? _basePickBy['default'] : _basePickBy);

	var pickBy = __commonjs(function (module) {
	var arrayMap = require$$3$2,
	    baseIteratee = require$$2$2,
	    basePickBy = require$$1$29,
	    getAllKeysIn = require$$0$60;

	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pickBy(object, _.isNumber);
	 * // => { 'a': 1, 'c': 3 }
	 */
	function pickBy(object, predicate) {
	  if (object == null) {
	    return {};
	  }
	  var props = arrayMap(getAllKeysIn(object), function(prop) {
	    return [prop];
	  });
	  predicate = baseIteratee(predicate);
	  return basePickBy(object, props, function(value, path) {
	    return predicate(value, path[0]);
	  });
	}

	module.exports = pickBy;
	});

	var require$$0$59 = (pickBy && typeof pickBy === 'object' && 'default' in pickBy ? pickBy['default'] : pickBy);

	var negate = __commonjs(function (module) {
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that negates the result of the predicate `func`. The
	 * `func` predicate is invoked with the `this` binding and arguments of the
	 * created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} predicate The predicate to negate.
	 * @returns {Function} Returns the new negated function.
	 * @example
	 *
	 * function isEven(n) {
	 *   return n % 2 == 0;
	 * }
	 *
	 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	 * // => [1, 3, 5]
	 */
	function negate(predicate) {
	  if (typeof predicate != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  return function() {
	    var args = arguments;
	    switch (args.length) {
	      case 0: return !predicate.call(this);
	      case 1: return !predicate.call(this, args[0]);
	      case 2: return !predicate.call(this, args[0], args[1]);
	      case 3: return !predicate.call(this, args[0], args[1], args[2]);
	    }
	    return !predicate.apply(this, args);
	  };
	}

	module.exports = negate;
	});

	var require$$1$32 = (negate && typeof negate === 'object' && 'default' in negate ? negate['default'] : negate);

	var omitBy = __commonjs(function (module) {
	var baseIteratee = require$$2$2,
	    negate = require$$1$32,
	    pickBy = require$$0$59;

	/**
	 * The opposite of `_.pickBy`; this method creates an object composed of
	 * the own and inherited enumerable string keyed properties of `object` that
	 * `predicate` doesn't return truthy for. The predicate is invoked with two
	 * arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omitBy(object, _.isNumber);
	 * // => { 'b': '2' }
	 */
	function omitBy(object, predicate) {
	  return pickBy(object, negate(baseIteratee(predicate)));
	}

	module.exports = omitBy;
	});

	var omitBy$1 = (omitBy && typeof omitBy === 'object' && 'default' in omitBy ? omitBy['default'] : omitBy);

	var isEmpty = __commonjs(function (module) {
	var baseKeys = require$$7,
	    getTag = require$$6,
	    isArguments = require$$1$11,
	    isArray = require$$0$20,
	    isArrayLike = require$$0$50,
	    isBuffer = require$$2$13,
	    isPrototype = require$$1$15,
	    isTypedArray = require$$0$45;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;
	});

	var isEmpty$1 = (isEmpty && typeof isEmpty === 'object' && 'default' in isEmpty ? isEmpty['default'] : isEmpty);

	var _createBaseFor = __commonjs(function (module) {
	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;
	});

	var require$$0$64 = (_createBaseFor && typeof _createBaseFor === 'object' && 'default' in _createBaseFor ? _createBaseFor['default'] : _createBaseFor);

	var _baseFor = __commonjs(function (module) {
	var createBaseFor = require$$0$64;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;
	});

	var require$$1$34 = (_baseFor && typeof _baseFor === 'object' && 'default' in _baseFor ? _baseFor['default'] : _baseFor);

	var _baseForOwn = __commonjs(function (module) {
	var baseFor = require$$1$34,
	    keys = require$$0$49;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;
	});

	var require$$1$33 = (_baseForOwn && typeof _baseForOwn === 'object' && 'default' in _baseForOwn ? _baseForOwn['default'] : _baseForOwn);

	var mapValues = __commonjs(function (module) {
	var baseAssignValue = require$$2$23,
	    baseForOwn = require$$1$33,
	    baseIteratee = require$$2$2;

	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);

	  baseForOwn(object, function(value, key, object) {
	    baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}

	module.exports = mapValues;
	});

	var mapValues$1 = (mapValues && typeof mapValues === 'object' && 'default' in mapValues ? mapValues['default'] : mapValues);

	var _castFunction = __commonjs(function (module) {
	var identity = require$$0$40;

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;
	});

	var require$$1$35 = (_castFunction && typeof _castFunction === 'object' && 'default' in _castFunction ? _castFunction['default'] : _castFunction);

	var _createBaseEach = __commonjs(function (module) {
	var isArrayLike = require$$0$50;

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;
	});

	var require$$0$65 = (_createBaseEach && typeof _createBaseEach === 'object' && 'default' in _createBaseEach ? _createBaseEach['default'] : _createBaseEach);

	var _baseEach = __commonjs(function (module) {
	var baseForOwn = require$$1$33,
	    createBaseEach = require$$0$65;

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;
	});

	var require$$3$9 = (_baseEach && typeof _baseEach === 'object' && 'default' in _baseEach ? _baseEach['default'] : _baseEach);

	var _arrayEach = __commonjs(function (module) {
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;
	});

	var require$$3$10 = (_arrayEach && typeof _arrayEach === 'object' && 'default' in _arrayEach ? _arrayEach['default'] : _arrayEach);

	var forEach = __commonjs(function (module) {
	var arrayEach = require$$3$10,
	    baseEach = require$$3$9,
	    castFunction = require$$1$35,
	    isArray = require$$0$20;

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;
	});

	var forEach$1 = (forEach && typeof forEach === 'object' && 'default' in forEach ? forEach['default'] : forEach);

	var defaultTo = __commonjs(function (module) {
	/**
	 * Checks `value` to determine whether a default value should be returned in
	 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	 * or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.14.0
	 * @category Util
	 * @param {*} value The value to check.
	 * @param {*} defaultValue The default value.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * _.defaultTo(1, 10);
	 * // => 1
	 *
	 * _.defaultTo(undefined, 10);
	 * // => 10
	 */
	function defaultTo(value, defaultValue) {
	  return (value == null || value !== value) ? defaultValue : value;
	}

	module.exports = defaultTo;
	});

	var defaultTo$1 = (defaultTo && typeof defaultTo === 'object' && 'default' in defaultTo ? defaultTo['default'] : defaultTo);

	var _baseReduce = __commonjs(function (module) {
	/**
	 * The base implementation of `_.reduce` and `_.reduceRight`, without support
	 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initAccum Specify using the first or last element of
	 *  `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initAccum
	      ? (initAccum = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}

	module.exports = baseReduce;
	});

	var require$$1$36 = (_baseReduce && typeof _baseReduce === 'object' && 'default' in _baseReduce ? _baseReduce['default'] : _baseReduce);

	var _arrayReduce = __commonjs(function (module) {
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;
	});

	var require$$4$10 = (_arrayReduce && typeof _arrayReduce === 'object' && 'default' in _arrayReduce ? _arrayReduce['default'] : _arrayReduce);

	var reduce = __commonjs(function (module) {
	var arrayReduce = require$$4$10,
	    baseEach = require$$3$9,
	    baseIteratee = require$$2$2,
	    baseReduce = require$$1$36,
	    isArray = require$$0$20;

	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` thru `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not given, the first element of `collection` is used as the initial
	 * value. The iteratee is invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	 * and `sortBy`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @returns {*} Returns the accumulated value.
	 * @see _.reduceRight
	 * @example
	 *
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */
	function reduce(collection, iteratee, accumulator) {
	  var func = isArray(collection) ? arrayReduce : baseReduce,
	      initAccum = arguments.length < 3;

	  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}

	module.exports = reduce;
	});

	var reduce$1 = (reduce && typeof reduce === 'object' && 'default' in reduce ? reduce['default'] : reduce);

	var TRANSFORM_MOVE = 'TRANSFORM_MOVE';
	var TRANSFORM_SCALE = 'TRANSFORM_SCALE';
	var TRANSFORM_ROTATE = 'TRANSFORM_ROTATE';
	var TRANSFORM_SKEW = 'TRANSFORM_SKEW';

	var STYLE_OPACITY = 'STYLE_OPACITY';
	var STYLE_SIZE = 'STYLE_SIZE';
	var STYLE_BACKGROUND_COLOR = 'STYLE_BACKGROUND_COLOR';
	var STYLE_BORDER = 'STYLE_BORDER';
	var STYLE_TEXT_COLOR = 'STYLE_TEXT_COLOR';

	var GENERAL_DISPLAY = 'GENERAL_DISPLAY';
	var GENERAL_CONTINUOUS_ACTION = 'GENERAL_CONTINUOUS_ACTION';
	var GENERAL_START_ACTION = 'GENERAL_START_ACTION';

	var MOUSE_CLICK = 'MOUSE_CLICK';
	var MOUSE_SECOND_CLICK = 'MOUSE_SECOND_CLICK';
	var MOUSE_DOWN = 'MOUSE_DOWN';
	var MOUSE_UP = 'MOUSE_UP';
	var MOUSE_OVER = 'MOUSE_OVER';
	var MOUSE_OUT = 'MOUSE_OUT';
	var MOUSE_MOVE = 'MOUSE_MOVE';

	var SCROLL_INTO_VIEW = 'SCROLL_INTO_VIEW';
	var SCROLL_OUT_OF_VIEW = 'SCROLL_OUT_OF_VIEW';
	var SCROLLING_IN_VIEW = 'SCROLLING_IN_VIEW';

	var TAB_ACTIVE = 'TAB_ACTIVE';
	var TAB_INACTIVE = 'TAB_INACTIVE';
	var NAVBAR_OPEN = 'NAVBAR_OPEN';
	var NAVBAR_CLOSE = 'NAVBAR_CLOSE';
	var SLIDER_ACTIVE = 'SLIDER_ACTIVE';
	var SLIDER_INACTIVE = 'SLIDER_INACTIVE';
	var DROPDOWN_OPEN = 'DROPDOWN_OPEN';
	var DROPDOWN_CLOSE = 'DROPDOWN_CLOSE';
	var COMPONENT_ACTIVE = 'COMPONENT_ACTIVE';
	var COMPONENT_INACTIVE = 'COMPONENT_INACTIVE';

	var PAGE_START = 'PAGE_START';
	var PAGE_FINISH = 'PAGE_FINISH';
	var PAGE_SCROLL_UP = 'PAGE_SCROLL_UP';
	var PAGE_SCROLL_DOWN = 'PAGE_SCROLL_DOWN';
	var PAGE_SCROLL = 'PAGE_SCROLL';

	var ELEMENT = 'ELEMENT';
	var VIEWPORT = 'VIEWPORT';
	var PAGE = 'PAGE';

	var IX2_ID_DELIMITER = '|';
	var WF_PAGE = 'data-wf-page';
	var TRANSFORM = 'transform';
	var TRANSLATE_X = 'translateX';
	var TRANSLATE_Y = 'translateY';
	var TRANSLATE_Z = 'translateZ';
	var SCALE_X = 'scaleX';
	var SCALE_Y = 'scaleY';
	var SCALE_Z = 'scaleZ';
	var ROTATE_X = 'rotateX';
	var ROTATE_Y = 'rotateY';
	var ROTATE_Z = 'rotateZ';
	var SKEW_X = 'skewX';
	var SKEW_Y = 'skewY';
	var OPACITY = 'opacity';
	var WIDTH = 'width';
	var HEIGHT = 'height';
	var BACKGROUND_COLOR = 'backgroundColor';
	var BACKGROUND = 'background';
	var BORDER_COLOR = 'borderColor';
	var COLOR = 'color';
	var DISPLAY = 'display';
	var FLEX = 'flex';
	var WILL_CHANGE = 'willChange';
	var COMMA_DELIMITER = ',';

	var IS_BROWSER_ENV = typeof window !== 'undefined';

	var withBrowser = function withBrowser(fn, fallback) {
	  if (IS_BROWSER_ENV) {
	    return fn();
	  }
	  return fallback;
	};

	var ELEMENT_MATCHES = withBrowser(function () {
	  return find$1(['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'], function (key) {
	    return key in Element.prototype;
	  });
	});

	var FLEX_PREFIXED = withBrowser(function () {
	  var el = document.createElement('i');
	  var values = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
	  var none = '';
	  try {
	    var length = values.length;

	    for (var i = 0; i < length; i++) {
	      var value = values[i];
	      el.style.display = value;
	      if (el.style.display === value) {
	        return value;
	      }
	    }
	    return none;
	  } catch (err) {
	    return none;
	  }
	}, 'flex');

	var TRANSFORM_PREFIXED = withBrowser(function () {
	  var el = document.createElement('i');
	  if (el.style.transform == null) {
	    var prefixes = ['Webkit', 'Moz', 'ms'];
	    var suffix = 'Transform';
	    var length = prefixes.length;

	    for (var i = 0; i < length; i++) {
	      var prop = prefixes[i] + suffix;
	      if (el.style[prop] !== undefined) {
	        return prop;
	      }
	    }
	  }
	  return 'transform';
	}, 'transform');

	var _Object$freeze;
	var _Object$freeze2;
	var _transformDefaults;
	var trim = function trim(v) {
	  return v.trim();
	};

	var colorStyleProps = Object.freeze((_Object$freeze = {}, babelHelpers.defineProperty(_Object$freeze, STYLE_BACKGROUND_COLOR, BACKGROUND_COLOR), babelHelpers.defineProperty(_Object$freeze, STYLE_BORDER, BORDER_COLOR), babelHelpers.defineProperty(_Object$freeze, STYLE_TEXT_COLOR, COLOR), _Object$freeze));

	var willChangeProps = Object.freeze((_Object$freeze2 = {}, babelHelpers.defineProperty(_Object$freeze2, TRANSFORM_PREFIXED, TRANSFORM), babelHelpers.defineProperty(_Object$freeze2, BACKGROUND_COLOR, BACKGROUND), babelHelpers.defineProperty(_Object$freeze2, OPACITY, OPACITY), babelHelpers.defineProperty(_Object$freeze2, WIDTH, WIDTH), babelHelpers.defineProperty(_Object$freeze2, HEIGHT, HEIGHT), _Object$freeze2));

	var uuid = 1;
	function getInstanceId() {
	  return 'i' + uuid++;
	}

	function reifyState() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      events = _ref.events,
	      actionLists = _ref.actionLists,
	      site = _ref.site;

	  // TODO: rework event aliases to support new data format
	  // const {aliases = []} = rawData;
	  // aliases.forEach(alias => {
	  //   const event = events[alias.id];
	  //   if (!event) {
	  //     return;
	  //   }
	  //   const newEventId = alias.id + '-' + (uuid++);
	  //   events[newEventId] = {
	  //     ...event,
	  //     ...alias,
	  //     id: newEventId,
	  //     overrides: {
	  //       ...event.overrides,
	  //       ...alias.overrides,
	  //     },
	  //   };
	  // });

	  var eventTypeMap = reduce$1(events, function (result, event) {
	    var eventTypeId = event.eventTypeId;

	    if (!result[eventTypeId]) {
	      result[eventTypeId] = {};
	    }
	    result[eventTypeId][event.id] = event;
	    return result;
	  }, {});

	  var mediaQueries = site && site.mediaQueries;
	  var mediaQueryKeys = [];
	  if (mediaQueries) {
	    mediaQueryKeys = mediaQueries.map(function (mq) {
	      return mq.key;
	    });
	  } else {
	    mediaQueries = [];
	    console.warn('IX2 missing mediaQueries in site data');
	  }

	  return {
	    ixData: {
	      events: events,
	      actionLists: actionLists,
	      eventTypeMap: eventTypeMap,
	      mediaQueries: mediaQueries,
	      mediaQueryKeys: mediaQueryKeys
	    }
	  };
	}

	var strictEqual = function strictEqual(a, b) {
	  return a === b;
	};

	function observeStore(_ref2) {
	  var store = _ref2.store,
	      select = _ref2.select,
	      onChange = _ref2.onChange,
	      _ref2$comparator = _ref2.comparator,
	      comparator = _ref2$comparator === undefined ? strictEqual : _ref2$comparator;
	  var getState = store.getState,
	      subscribe = store.subscribe;

	  var unsubscribe = subscribe(handleChange);
	  var currentState = select(getState());
	  function handleChange() {
	    var nextState = select(getState());
	    if (nextState == null) {
	      unsubscribe();
	      return;
	    }
	    if (!comparator(nextState, currentState)) {
	      currentState = nextState;
	      onChange(currentState, store);
	    }
	  }
	  return unsubscribe;
	}

	function normalizeTarget(target) {
	  var type = typeof target === 'undefined' ? 'undefined' : babelHelpers.typeof(target);
	  if (type === 'string') {
	    return { id: target };
	  } else if (target != null && type === 'object') {
	    var id = target.id,
	        selector = target.selector,
	        selectorGuids = target.selectorGuids,
	        appliesTo = target.appliesTo;

	    return { id: id, selector: selector, selectorGuids: selectorGuids, appliesTo: appliesTo };
	  }
	  return {};
	}

	function getAffectedElements(_ref3) {
	  var config = _ref3.config,
	      event = _ref3.event,
	      elementApi = _ref3.elementApi;

	  if (!elementApi) {
	    throw new Error('IX2 missing elementApi');
	  }

	  var getValidDocument = elementApi.getValidDocument,
	      getQuerySelector = elementApi.getQuerySelector,
	      queryDocument = elementApi.queryDocument,
	      getChildElements = elementApi.getChildElements,
	      getSiblingElements = elementApi.getSiblingElements,
	      matchSelector = elementApi.matchSelector;
	  var target = config.target;

	  if (!target) {
	    return [];
	  }

	  var _normalizeTarget = normalizeTarget(target),
	      id = _normalizeTarget.id,
	      selector = _normalizeTarget.selector,
	      appliesTo = _normalizeTarget.appliesTo;

	  if (appliesTo === PAGE) {
	    var doc = getValidDocument(id);
	    return doc ? [doc] : [];
	  }

	  var overrides = get$1(event, 'action.config.affectedElements', {});
	  var override = overrides[id || selector] || {};
	  var validOverride = Boolean(override.id || override.selector);

	  var limitAffectedElements = void 0;
	  var baseSelector = void 0;
	  var finalSelector = void 0;

	  if (validOverride) {
	    limitAffectedElements = override.limitAffectedElements;
	    baseSelector = getQuerySelector(normalizeTarget(event.target));
	    finalSelector = getQuerySelector(override);
	  } else {
	    baseSelector = finalSelector = getQuerySelector({ id: id, selector: selector });
	  }

	  if (baseSelector == null || finalSelector == null) {
	    return [];
	  }

	  if (limitAffectedElements === 'CHILDREN') {
	    return queryDocument(baseSelector, finalSelector);
	  } else if (limitAffectedElements === 'IMMEDIATE_CHILDREN') {
	    return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
	  } else if (limitAffectedElements === 'SIBLINGS') {
	    return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
	  } else {
	    return queryDocument(finalSelector);
	  }
	}

	function getComputedStyle(_ref4) {
	  var element = _ref4.element,
	      actionItem = _ref4.actionItem;

	  if (!IS_BROWSER_ENV) {
	    return {};
	  }
	  var actionTypeId = actionItem.actionTypeId;

	  switch (actionTypeId) {
	    case STYLE_SIZE:
	    case STYLE_BACKGROUND_COLOR:
	    case STYLE_BORDER:
	    case STYLE_TEXT_COLOR:
	    case GENERAL_DISPLAY:
	      return window.getComputedStyle(element);
	    default:
	      return {};
	  }
	}

	function getInstanceOrigin(_ref5) {
	  var element = _ref5.element,
	      actionItem = _ref5.actionItem,
	      _ref5$computedStyle = _ref5.computedStyle,
	      computedStyle = _ref5$computedStyle === undefined ? {} : _ref5$computedStyle,
	      elementApi = _ref5.elementApi;
	  var getStyle = elementApi.getStyle;
	  var actionTypeId = actionItem.actionTypeId;

	  switch (actionTypeId) {
	    case TRANSFORM_MOVE:
	    case TRANSFORM_SCALE:
	    case TRANSFORM_ROTATE:
	    case TRANSFORM_SKEW:
	      return parseTransform(getStyle(element, TRANSFORM_PREFIXED), actionTypeId);
	    case STYLE_OPACITY:
	      return { value: defaultTo$1(parseFloat(getStyle(element, OPACITY)), 1.0) };
	    case STYLE_SIZE:
	      return {
	        widthValue: defaultTo$1(parseFloat(getStyle(element, WIDTH)), parseFloat(computedStyle.width)),
	        heightValue: defaultTo$1(parseFloat(getStyle(element, HEIGHT)), parseFloat(computedStyle.height))
	      };
	    case STYLE_BACKGROUND_COLOR:
	    case STYLE_BORDER:
	    case STYLE_TEXT_COLOR:
	      return parseColor({ element: element, actionTypeId: actionTypeId, computedStyle: computedStyle, getStyle: getStyle });
	    case GENERAL_DISPLAY:
	      return { value: defaultTo$1(getStyle(element, DISPLAY), computedStyle.display) };
	    default:
	      return;
	  }
	}

	function getDestinationValues(actionItem) {
	  switch (actionItem.actionTypeId) {
	    case TRANSFORM_MOVE:
	    case TRANSFORM_SCALE:
	    case TRANSFORM_ROTATE:
	    case TRANSFORM_SKEW:
	      {
	        var _actionItem$config = actionItem.config,
	            xValue = _actionItem$config.xValue,
	            yValue = _actionItem$config.yValue,
	            zValue = _actionItem$config.zValue;

	        return { xValue: xValue, yValue: yValue, zValue: zValue };
	      }
	    case STYLE_SIZE:
	      {
	        var _actionItem$config2 = actionItem.config,
	            widthValue = _actionItem$config2.widthValue,
	            heightValue = _actionItem$config2.heightValue;

	        return { widthValue: widthValue, heightValue: heightValue };
	      }
	    case STYLE_BACKGROUND_COLOR:
	    case STYLE_BORDER:
	    case STYLE_TEXT_COLOR:
	      {
	        var _actionItem$config3 = actionItem.config,
	            rValue = _actionItem$config3.rValue,
	            gValue = _actionItem$config3.gValue,
	            bValue = _actionItem$config3.bValue,
	            aValue = _actionItem$config3.aValue;

	        return { rValue: rValue, gValue: gValue, bValue: bValue, aValue: aValue };
	      }
	    default:
	      {
	        var value = actionItem.config.value;

	        return { value: value };
	      }
	  }
	}

	function renderInstance(instance, elementApi) {
	  var isTransform = instance.isTransform,
	      isStyle = instance.isStyle,
	      isGeneral = instance.isGeneral;


	  if (isTransform) {
	    return renderTransform(instance, elementApi);
	  }
	  if (isStyle) {
	    return renderStyle(instance, elementApi);
	  }
	  if (isGeneral) {
	    return renderGeneral(instance, elementApi);
	  }
	}

	var transformDefaults = (_transformDefaults = {}, babelHelpers.defineProperty(_transformDefaults, TRANSFORM_MOVE, Object.freeze({
	  xValue: 0,
	  yValue: 0,
	  zValue: 0
	})), babelHelpers.defineProperty(_transformDefaults, TRANSFORM_SCALE, Object.freeze({
	  xValue: 1,
	  yValue: 1,
	  zValue: 1
	})), babelHelpers.defineProperty(_transformDefaults, TRANSFORM_ROTATE, Object.freeze({
	  xValue: 0,
	  yValue: 0,
	  zValue: 0
	})), babelHelpers.defineProperty(_transformDefaults, TRANSFORM_SKEW, Object.freeze({
	  xValue: 0,
	  yValue: 0
	})), _transformDefaults);

	var paramCapture = '\\(([^)]+)\\)';
	var translateXRegex = RegExp('' + TRANSLATE_X + paramCapture);
	var translateYRegex = RegExp('' + TRANSLATE_Y + paramCapture);
	var translateZRegex = RegExp('' + TRANSLATE_Z + paramCapture);
	var scaleXRegex = RegExp('' + SCALE_X + paramCapture);
	var scaleYRegex = RegExp('' + SCALE_Y + paramCapture);
	var scaleZRegex = RegExp('' + SCALE_Z + paramCapture);
	var rotateXRegex = RegExp('' + ROTATE_X + paramCapture);
	var rotateYRegex = RegExp('' + ROTATE_Y + paramCapture);
	var rotateZRegex = RegExp('' + ROTATE_Z + paramCapture);
	var skewXRegex = RegExp('' + SKEW_X + paramCapture);
	var skewYRegex = RegExp('' + SKEW_Y + paramCapture);

	var defaultTransform = Object.keys(transformDefaults).map(function (actionTypeId) {
	  var defaults = transformDefaults[actionTypeId];
	  var xValue = defaults.xValue,
	      yValue = defaults.yValue,
	      zValue = defaults.zValue;

	  switch (actionTypeId) {
	    case TRANSFORM_MOVE:
	      return fillTransformValues([[TRANSLATE_X, xValue], [TRANSLATE_Y, yValue], [TRANSLATE_Z, zValue]]);
	    case TRANSFORM_SCALE:
	      return fillTransformValues([[SCALE_X, xValue], [SCALE_Y, yValue], [SCALE_Z, zValue]]);
	    case TRANSFORM_ROTATE:
	      return fillTransformValues([[ROTATE_X, xValue], [ROTATE_Y, yValue], [ROTATE_Z, zValue]]);
	    case TRANSFORM_SKEW:
	      return fillTransformValues([[SKEW_X, xValue], [SKEW_Y, yValue]]);
	    default:
	      return '';
	  }
	}).join(' ');

	function fillTransformValues(pairs) {
	  return pairs.map(function (pair) {
	    return pair[0] + '(' + pair[1] + ')';
	  }).join(' ');
	}

	function getFirstMatch(regex, value) {
	  var match = regex.exec(value);
	  return match ? match[1] : '';
	}

	function parseTransform(transform, actionTypeId) {
	  var defaults = transformDefaults[actionTypeId];
	  if (!transform) {
	    return defaults;
	  }
	  var parseXYZ = function parseXYZ(values) {
	    return {
	      xValue: defaultTo$1(parseFloat(values[0]), defaults.xValue),
	      yValue: defaultTo$1(parseFloat(values[1]), defaults.yValue),
	      zValue: defaultTo$1(parseFloat(values[2]), defaults.zValue)
	    };
	  };
	  switch (actionTypeId) {
	    case TRANSFORM_MOVE:
	      {
	        var values = [getFirstMatch(translateXRegex, transform), getFirstMatch(translateYRegex, transform), getFirstMatch(translateZRegex, transform)];
	        return parseXYZ(values);
	      }
	    case TRANSFORM_SCALE:
	      {
	        var _values = [getFirstMatch(scaleXRegex, transform), getFirstMatch(scaleYRegex, transform), getFirstMatch(scaleZRegex, transform)];
	        return parseXYZ(_values);
	      }
	    case TRANSFORM_ROTATE:
	      {
	        var _values2 = [getFirstMatch(rotateXRegex, transform), getFirstMatch(rotateYRegex, transform), getFirstMatch(rotateZRegex, transform)];
	        return parseXYZ(_values2);
	      }
	    case TRANSFORM_SKEW:
	      {
	        var _values3 = [getFirstMatch(skewXRegex, transform), getFirstMatch(skewYRegex, transform)];
	        return {
	          xValue: defaultTo$1(parseFloat(_values3[0]), defaults.xValue),
	          yValue: defaultTo$1(parseFloat(_values3[1]), defaults.yValue)
	        };
	      }
	    default:
	      {
	        return;
	      }
	  }
	}

	function renderTransform(_ref6, elementApi) {
	  var element = _ref6.element,
	      current = _ref6.current,
	      actionItem = _ref6.actionItem;
	  var getStyle = elementApi.getStyle,
	      setStyle = elementApi.setStyle;

	  var transform = getStyle(element, TRANSFORM_PREFIXED);
	  var newTransform = updateTransformValues(transform, actionItem, current);
	  if (transform !== newTransform) {
	    addWillChange(element, TRANSFORM_PREFIXED, elementApi);
	    setStyle(element, TRANSFORM_PREFIXED, newTransform);
	  }
	}

	function updateTransformValues(transform, actionItem, current) {
	  var actionTypeId = actionItem.actionTypeId,
	      config = actionItem.config;
	  var _config$xUnit = config.xUnit,
	      xUnit = _config$xUnit === undefined ? '' : _config$xUnit,
	      _config$yUnit = config.yUnit,
	      yUnit = _config$yUnit === undefined ? '' : _config$yUnit,
	      _config$zUnit = config.zUnit,
	      zUnit = _config$zUnit === undefined ? '' : _config$zUnit;
	  var xValue = current.xValue,
	      yValue = current.yValue,
	      zValue = current.zValue;

	  var result = transform || defaultTransform;
	  switch (actionTypeId) {
	    case TRANSFORM_MOVE:
	      if (xValue !== undefined) {
	        result = replaceTransformPart(result, translateXRegex, TRANSLATE_X, xValue + xUnit);
	      }
	      if (yValue !== undefined) {
	        result = replaceTransformPart(result, translateYRegex, TRANSLATE_Y, yValue + yUnit);
	      }
	      if (zValue !== undefined) {
	        result = replaceTransformPart(result, translateZRegex, TRANSLATE_Z, zValue + zUnit);
	      }
	      return result;
	    case TRANSFORM_SCALE:
	      if (xValue !== undefined) {
	        result = replaceTransformPart(result, scaleXRegex, SCALE_X, xValue + xUnit);
	      }
	      if (yValue !== undefined) {
	        result = replaceTransformPart(result, scaleYRegex, SCALE_Y, yValue + yUnit);
	      }
	      if (zValue !== undefined) {
	        result = replaceTransformPart(result, scaleZRegex, SCALE_Z, zValue + zUnit);
	      }
	      return result;
	    case TRANSFORM_ROTATE:
	      if (xValue !== undefined) {
	        result = replaceTransformPart(result, rotateXRegex, ROTATE_X, xValue + xUnit);
	      }
	      if (yValue !== undefined) {
	        result = replaceTransformPart(result, rotateYRegex, ROTATE_Y, yValue + yUnit);
	      }
	      if (zValue !== undefined) {
	        result = replaceTransformPart(result, rotateZRegex, ROTATE_Z, zValue + zUnit);
	      }
	      return result;
	    case TRANSFORM_SKEW:
	      if (xValue !== undefined) {
	        result = replaceTransformPart(result, skewXRegex, SKEW_X, xValue + xUnit);
	      }
	      if (yValue !== undefined) {
	        result = replaceTransformPart(result, skewYRegex, SKEW_Y, yValue + yUnit);
	      }
	      return result;
	    default:
	      return result;
	  }
	}

	function replaceTransformPart(input, regex, func, value) {
	  return input.replace(regex, func + '(' + value + ')');
	}

	var rgbValidRegex = /^rgb/;
	var rgbMatchRegex = RegExp('rgba?' + paramCapture);

	function parseColor(_ref7) {
	  var element = _ref7.element,
	      actionTypeId = _ref7.actionTypeId,
	      computedStyle = _ref7.computedStyle,
	      getStyle = _ref7.getStyle;

	  var prop = colorStyleProps[actionTypeId];
	  var inlineValue = getStyle(element, prop);
	  var value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
	  var matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER);
	  return {
	    rValue: defaultTo$1(parseInt(matches[0], 10), 255),
	    gValue: defaultTo$1(parseInt(matches[1], 10), 255),
	    bValue: defaultTo$1(parseInt(matches[2], 10), 255),
	    aValue: defaultTo$1(parseFloat(matches[3]), 1)
	  };
	}

	function renderStyle(_ref8, elementApi) {
	  var element = _ref8.element,
	      actionItem = _ref8.actionItem,
	      current = _ref8.current,
	      styleProp = _ref8.styleProp;
	  var setStyle = elementApi.setStyle;
	  var actionTypeId = actionItem.actionTypeId;

	  switch (actionTypeId) {
	    case STYLE_SIZE:
	      {
	        var _actionItem$config4 = actionItem.config,
	            _actionItem$config4$w = _actionItem$config4.widthUnit,
	            widthUnit = _actionItem$config4$w === undefined ? '' : _actionItem$config4$w,
	            _actionItem$config4$h = _actionItem$config4.heightUnit,
	            heightUnit = _actionItem$config4$h === undefined ? '' : _actionItem$config4$h;
	        var widthValue = current.widthValue,
	            heightValue = current.heightValue;

	        if (widthValue !== undefined) {
	          addWillChange(element, WIDTH, elementApi);
	          setStyle(element, WIDTH, widthValue + widthUnit);
	        }
	        if (heightValue !== undefined) {
	          addWillChange(element, HEIGHT, elementApi);
	          setStyle(element, HEIGHT, heightValue + heightUnit);
	        }
	        break;
	      }
	    case STYLE_BACKGROUND_COLOR:
	    case STYLE_BORDER:
	    case STYLE_TEXT_COLOR:
	      {
	        var prop = colorStyleProps[actionTypeId];
	        var rValue = current.rValue,
	            gValue = current.gValue,
	            bValue = current.bValue,
	            aValue = current.aValue;

	        addWillChange(element, prop, elementApi);
	        setStyle(element, prop, aValue >= 1 ? 'rgb(' + Math.round(rValue) + ',' + Math.round(gValue) + ',' + Math.round(bValue) + ')' : 'rgba(' + Math.round(rValue) + ',' + Math.round(gValue) + ',' + Math.round(bValue) + ',' + aValue + ')');
	        break;
	      }
	    default:
	      {
	        var _actionItem$config$un = actionItem.config.unit,
	            unit = _actionItem$config$un === undefined ? '' : _actionItem$config$un;

	        addWillChange(element, styleProp, elementApi);
	        setStyle(element, styleProp, current.value + unit);
	        break;
	      }
	  }
	}

	function renderGeneral(_ref9, elementApi) {
	  var element = _ref9.element,
	      actionItem = _ref9.actionItem;
	  var setStyle = elementApi.setStyle;

	  switch (actionItem.actionTypeId) {
	    case GENERAL_DISPLAY:
	      {
	        var value = actionItem.config.value;

	        if (value === FLEX && IS_BROWSER_ENV) {
	          setStyle(element, DISPLAY, FLEX_PREFIXED);
	        } else {
	          setStyle(element, DISPLAY, value);
	        }
	        return;
	      }
	  }
	}

	function addWillChange(element, prop, elementApi) {
	  if (!IS_BROWSER_ENV) {
	    return;
	  }
	  var validProp = willChangeProps[prop];
	  if (!validProp) {
	    return;
	  }
	  var getStyle = elementApi.getStyle,
	      setStyle = elementApi.setStyle;

	  var value = getStyle(element, WILL_CHANGE);
	  if (!value) {
	    setStyle(element, WILL_CHANGE, validProp);
	    return;
	  }
	  var values = value.split(COMMA_DELIMITER).map(trim);
	  if (values.indexOf(validProp) === -1) {
	    setStyle(element, WILL_CHANGE, values.concat(validProp).join(COMMA_DELIMITER));
	  }
	}

	function removeWillChange(element, prop, elementApi) {
	  if (!IS_BROWSER_ENV) {
	    return;
	  }
	  var validProp = willChangeProps[prop];
	  if (!validProp) {
	    return;
	  }
	  var getStyle = elementApi.getStyle,
	      setStyle = elementApi.setStyle;

	  var value = getStyle(element, WILL_CHANGE);
	  if (!value || value.indexOf(validProp) === -1) {
	    return;
	  }
	  setStyle(element, WILL_CHANGE, value.split(COMMA_DELIMITER).map(trim).filter(function (v) {
	    return v !== validProp;
	  }).join(COMMA_DELIMITER));
	}

	function clearAllStyles(_ref10) {
	  var store = _ref10.store,
	      elementApi = _ref10.elementApi;

	  var _store$getState = store.getState(),
	      ixData = _store$getState.ixData;

	  var _ixData$events = ixData.events,
	      events = _ixData$events === undefined ? {} : _ixData$events,
	      _ixData$actionLists = ixData.actionLists,
	      actionLists = _ixData$actionLists === undefined ? {} : _ixData$actionLists;

	  Object.keys(events).forEach(function (eventId) {
	    var event = events[eventId];
	    var config = event.action.config;
	    var actionListId = config.actionListId;

	    var actionList = actionLists[actionListId];
	    if (actionList) {
	      clearActionListStyles({ actionList: actionList, event: event, elementApi: elementApi });
	    }
	  });
	  Object.keys(actionLists).forEach(function (actionListId) {
	    clearActionListStyles({ actionList: actionLists[actionListId], elementApi: elementApi });
	  });
	}

	function clearActionListStyles(_ref11) {
	  var _ref11$actionList = _ref11.actionList,
	      actionList = _ref11$actionList === undefined ? {} : _ref11$actionList,
	      event = _ref11.event,
	      elementApi = _ref11.elementApi;
	  var actionItemGroups = actionList.actionItemGroups,
	      continuousParameterGroups = actionList.continuousParameterGroups;

	  actionItemGroups && actionItemGroups.forEach(function (actionGroup) {
	    clearActionGroupStyles({ actionGroup: actionGroup, event: event, elementApi: elementApi });
	  });
	  continuousParameterGroups && continuousParameterGroups.forEach(function (paramGroup) {
	    var continuousActionGroups = paramGroup.continuousActionGroups;

	    continuousActionGroups.forEach(function (actionGroup) {
	      clearActionGroupStyles({ actionGroup: actionGroup, event: event, elementApi: elementApi });
	    });
	  });
	}

	function clearActionGroupStyles(_ref12) {
	  var actionGroup = _ref12.actionGroup,
	      event = _ref12.event,
	      elementApi = _ref12.elementApi;
	  var actionItems = actionGroup.actionItems;

	  actionItems.forEach(function (_ref13) {
	    var actionTypeId = _ref13.actionTypeId,
	        config = _ref13.config;

	    var clearElement = processElementByType({ effect: clearStyleProp, actionTypeId: actionTypeId, elementApi: elementApi });
	    getAffectedElements({ config: config, event: event, elementApi: elementApi }).forEach(clearElement);
	  });
	}

	function cleanupInstance(instance, elementApi) {
	  var actionItem = instance.actionItem,
	      element = instance.element;
	  var getStyle = elementApi.getStyle;


	  if (getStyle(element, WILL_CHANGE)) {
	    var actionTypeId = actionItem.actionTypeId;

	    processElementByType({ effect: removeWillChange, actionTypeId: actionTypeId, elementApi: elementApi })(element);
	  }
	}

	var processElementByType = function processElementByType(_ref14) {
	  var effect = _ref14.effect,
	      actionTypeId = _ref14.actionTypeId,
	      elementApi = _ref14.elementApi;
	  return function (element) {
	    switch (actionTypeId) {
	      case TRANSFORM_MOVE:
	      case TRANSFORM_SCALE:
	      case TRANSFORM_ROTATE:
	      case TRANSFORM_SKEW:
	        effect(element, TRANSFORM_PREFIXED, elementApi);
	        break;
	      case STYLE_OPACITY:
	        effect(element, OPACITY, elementApi);
	        break;
	      case STYLE_SIZE:
	        effect(element, WIDTH, elementApi);
	        effect(element, HEIGHT, elementApi);
	        break;
	      case STYLE_BACKGROUND_COLOR:
	      case STYLE_BORDER:
	      case STYLE_TEXT_COLOR:
	        effect(element, colorStyleProps[actionTypeId], elementApi);
	        break;
	      case GENERAL_DISPLAY:
	        effect(element, DISPLAY, elementApi);
	        break;
	    }
	  };
	};

	function clearStyleProp(element, prop, elementApi) {
	  var setStyle = elementApi.setStyle;

	  removeWillChange(element, prop, elementApi);
	  setStyle(element, prop, '');
	}

	function getMaxDurationItemIndex(actionItems) {
	  var maxDuration = 0;
	  var resultIndex = 0;
	  actionItems.forEach(function (actionItem, index) {
	    var config = actionItem.config;

	    var total = config.delay + config.duration;
	    if (total >= maxDuration) {
	      maxDuration = total;
	      resultIndex = index;
	    }
	  });
	  return resultIndex;
	}

	function reduceListToGroup(_ref15) {
	  var actionListId = _ref15.actionListId,
	      actionItemId = _ref15.actionItemId,
	      rawData = _ref15.rawData;
	  var actionLists = rawData.actionLists;

	  var actionList = actionLists[actionListId];
	  var actionItemGroups = actionList.actionItemGroups,
	      continuousParameterGroups = actionList.continuousParameterGroups;

	  var newActionItems = [];

	  var takeItemUntilMatch = function takeItemUntilMatch(actionItem) {
	    newActionItems.push(update(actionItem, {
	      config: { $merge: { delay: 0, duration: 0 } }
	    }));
	    return actionItem.id === actionItemId;
	  };

	  actionItemGroups && actionItemGroups.some(function (_ref16) {
	    var actionItems = _ref16.actionItems;

	    return actionItems.some(takeItemUntilMatch);
	  });

	  continuousParameterGroups && continuousParameterGroups.some(function (paramGroup) {
	    var continuousActionGroups = paramGroup.continuousActionGroups;

	    return continuousActionGroups.some(function (_ref17) {
	      var actionItems = _ref17.actionItems;

	      return actionItems.some(takeItemUntilMatch);
	    });
	  });

	  return update(rawData, {
	    actionLists: { $set: babelHelpers.defineProperty({}, actionListId, {
	        id: actionListId,
	        actionItemGroups: [{
	          actionItems: newActionItems
	        }]
	      }) }
	  });
	}

	function shouldNamespaceEventParameter(eventTypeId, _ref18) {
	  var basedOn = _ref18.basedOn;

	  return eventTypeId === SCROLLING_IN_VIEW && (basedOn === ELEMENT || basedOn == null) || eventTypeId === MOUSE_MOVE && basedOn === ELEMENT;
	}

	function getNamespacedParameterId(eventId, continuousParameterGroupId) {
	  return eventId + ':' + continuousParameterGroupId;
	}

	function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
	  // During design mode, current media query key does not exist
	  if (mediaQueryKey == null) {
	    return true;
	  }
	  return mediaQueries.indexOf(mediaQueryKey) !== -1;
	}

	var rawDataImported = function rawDataImported(rawData) {
	  return {
	    type: IX2_RAW_DATA_IMPORTED,
	    payload: babelHelpers.extends({}, reifyState(rawData))
	  };
	};

	var sessionStarted = function sessionStarted() {
	  return {
	    type: IX2_SESSION_STARTED,
	    payload: {}
	  };
	};

	var sessionStopped = function sessionStopped() {
	  return {
	    type: IX2_SESSION_STOPPED,
	    payload: {}
	  };
	};

	var previewRequested = function previewRequested(_ref) {
	  var rawData = _ref.rawData;
	  return {
	    type: IX2_PREVIEW_REQUESTED,
	    payload: {
	      rawData: rawData
	    }
	  };
	};

	var playbackRequested = function playbackRequested(_ref2) {
	  var _ref2$actionTypeId = _ref2.actionTypeId,
	      actionTypeId = _ref2$actionTypeId === undefined ? GENERAL_START_ACTION : _ref2$actionTypeId,
	      actionListId = _ref2.actionListId,
	      actionItemId = _ref2.actionItemId,
	      eventId = _ref2.eventId,
	      allowEvents = _ref2.allowEvents,
	      immediate = _ref2.immediate,
	      verbose = _ref2.verbose,
	      rawData = _ref2.rawData;
	  return {
	    type: IX2_PLAYBACK_REQUESTED,
	    payload: {
	      actionTypeId: actionTypeId,
	      actionListId: actionListId,
	      actionItemId: actionItemId,
	      eventId: eventId,
	      allowEvents: allowEvents,
	      immediate: immediate,
	      verbose: verbose,
	      rawData: rawData
	    }
	  };
	};

	var stopRequested = function stopRequested(actionListId) {
	  return {
	    type: IX2_STOP_REQUESTED,
	    payload: {
	      actionListId: actionListId
	    }
	  };
	};

	var clearRequested = function clearRequested() {
	  return {
	    type: IX2_CLEAR_REQUESTED,
	    payload: {}
	  };
	};

	var eventListenerAdded = function eventListenerAdded(target, listenerParams) {
	  return {
	    type: IX2_EVENT_LISTENER_ADDED,
	    payload: {
	      target: target,
	      listenerParams: listenerParams
	    }
	  };
	};

	var eventStateChanged = function eventStateChanged(stateKey, newState) {
	  return {
	    type: IX2_EVENT_STATE_CHANGED,
	    payload: {
	      stateKey: stateKey,
	      newState: newState
	    }
	  };
	};

	var animationFrameChanged = function animationFrameChanged(now, parameters) {
	  return {
	    type: IX2_ANIMATION_FRAME_CHANGED,
	    payload: {
	      now: now,
	      parameters: parameters
	    }
	  };
	};

	var parameterChanged = function parameterChanged(key, value) {
	  return {
	    type: IX2_PARAMETER_CHANGED,
	    payload: {
	      key: key,
	      value: value
	    }
	  };
	};

	var instanceAdded = function instanceAdded(options) {
	  return {
	    type: IX2_INSTANCE_ADDED,
	    payload: babelHelpers.extends({}, options)
	  };
	};

	var instanceStarted = function instanceStarted(instanceId) {
	  return {
	    type: IX2_INSTANCE_STARTED,
	    payload: {
	      instanceId: instanceId
	    }
	  };
	};

	var instanceRemoved = function instanceRemoved(instanceId) {
	  return {
	    type: IX2_INSTANCE_REMOVED,
	    payload: {
	      instanceId: instanceId
	    }
	  };
	};

	var actionListPlaybackChanged = function actionListPlaybackChanged(_ref3) {
	  var actionListId = _ref3.actionListId,
	      isPlaying = _ref3.isPlaying;
	  return {
	    type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
	    payload: {
	      actionListId: actionListId,
	      isPlaying: isPlaying
	    }
	  };
	};

	var viewportWidthChanged = function viewportWidthChanged(_ref4) {
	  var width = _ref4.width,
	      mediaQueries = _ref4.mediaQueries;
	  return {
	    type: IX2_VIEWPORT_WIDTH_CHANGED,
	    payload: {
	      width: width,
	      mediaQueries: mediaQueries
	    }
	  };
	};

var actions = Object.freeze({
	  rawDataImported: rawDataImported,
	  sessionStarted: sessionStarted,
	  sessionStopped: sessionStopped,
	  previewRequested: previewRequested,
	  playbackRequested: playbackRequested,
	  stopRequested: stopRequested,
	  clearRequested: clearRequested,
	  eventListenerAdded: eventListenerAdded,
	  eventStateChanged: eventStateChanged,
	  animationFrameChanged: animationFrameChanged,
	  parameterChanged: parameterChanged,
	  instanceAdded: instanceAdded,
	  instanceStarted: instanceStarted,
	  instanceRemoved: instanceRemoved,
	  actionListPlaybackChanged: actionListPlaybackChanged,
	  viewportWidthChanged: viewportWidthChanged
	});

	function setStyle(element, prop, value) {
	  element.style[prop] = value;
	}

	function getStyle(element, prop) {
	  return element.style[prop];
	}

	function matchSelector(selector) {
	  return function (element) {
	    return element[ELEMENT_MATCHES](selector);
	  };
	}

	function getQuerySelector(_ref) {
	  var id = _ref.id,
	      selector = _ref.selector;

	  if (id) {
	    var nodeId = id;
	    if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
	      var pair = id.split(IX2_ID_DELIMITER);
	      var pageId = pair[0];
	      nodeId = pair[1];
	      // Short circuit query if we're on the wrong page
	      if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
	        return null;
	      }
	    }
	    return '[data-w-id="' + nodeId + '"]';
	  }
	  return selector;
	}

	function getValidDocument(pageId) {
	  if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE)) {
	    return document;
	  }
	  return null;
	}

	function queryDocument(baseSelector, descendantSelector) {
	  return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + ' ' + descendantSelector : baseSelector));
	}

	function getChildElements() {
	  var sourceElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  var elements = [];
	  for (var i = 0, length = sourceElements.length; i < length; i++) {
	    var children = sourceElements[i].children;
	    var childCount = children.length;

	    if (!childCount) {
	      continue;
	    }
	    for (var j = 0; j < childCount; j++) {
	      elements.push(children[j]);
	    }
	  }
	  return elements;
	}

	function getSiblingElements() {
	  var sourceElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  var elements = [];
	  var parentCache = [];
	  for (var i = 0, length = sourceElements.length; i < length; i++) {
	    var parentNode = sourceElements[i].parentNode;

	    if (!parentNode || !parentNode.children || !parentNode.children.length) {
	      continue;
	    }
	    if (parentCache.indexOf(parentNode) !== -1) {
	      continue;
	    }
	    parentCache.push(parentNode);
	    var el = parentNode.firstElementChild;
	    while (el != null) {
	      if (sourceElements.indexOf(el) === -1) {
	        elements.push(el);
	      }
	      el = el.nextElementSibling;
	    }
	  }
	  return elements;
	}

var elementApi = Object.freeze({
	  setStyle: setStyle,
	  getStyle: getStyle,
	  matchSelector: matchSelector,
	  getQuerySelector: getQuerySelector,
	  getValidDocument: getValidDocument,
	  queryDocument: queryDocument,
	  getChildElements: getChildElements,
	  getSiblingElements: getSiblingElements
	});

	var _copyArray = __commonjs(function (module) {
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;
	});

	var require$$0$70 = (_copyArray && typeof _copyArray === 'object' && 'default' in _copyArray ? _copyArray['default'] : _copyArray);

	var _baseLodash = __commonjs(function (module) {
	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}

	module.exports = baseLodash;
	});

	var require$$0$71 = (_baseLodash && typeof _baseLodash === 'object' && 'default' in _baseLodash ? _baseLodash['default'] : _baseLodash);

	var _baseCreate = __commonjs(function (module) {
	var isObject = require$$0$17;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;
	});

	var require$$1$38 = (_baseCreate && typeof _baseCreate === 'object' && 'default' in _baseCreate ? _baseCreate['default'] : _baseCreate);

	var _LodashWrapper = __commonjs(function (module) {
	var baseCreate = require$$1$38,
	    baseLodash = require$$0$71;

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}

	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	module.exports = LodashWrapper;
	});

	var require$$1$37 = (_LodashWrapper && typeof _LodashWrapper === 'object' && 'default' in _LodashWrapper ? _LodashWrapper['default'] : _LodashWrapper);

	var _LazyWrapper = __commonjs(function (module) {
	var baseCreate = require$$1$38,
	    baseLodash = require$$0$71;

	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;

	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}

	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	module.exports = LazyWrapper;
	});

	var require$$2$24 = (_LazyWrapper && typeof _LazyWrapper === 'object' && 'default' in _LazyWrapper ? _LazyWrapper['default'] : _LazyWrapper);

	var _wrapperClone = __commonjs(function (module) {
	var LazyWrapper = require$$2$24,
	    LodashWrapper = require$$1$37,
	    copyArray = require$$0$70;

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}

	module.exports = wrapperClone;
	});

	var require$$0$69 = (_wrapperClone && typeof _wrapperClone === 'object' && 'default' in _wrapperClone ? _wrapperClone['default'] : _wrapperClone);

	var wrapperLodash = __commonjs(function (module) {
	var LazyWrapper = require$$2$24,
	    LodashWrapper = require$$1$37,
	    baseLodash = require$$0$71,
	    isArray = require$$0$20,
	    isObjectLike = require$$1$1,
	    wrapperClone = require$$0$69;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array of at least `200` elements
	 * and any iteratees accept only one argument. The heuristic for whether a
	 * section qualifies for shortcut fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}

	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;

	module.exports = lodash;
	});

	var require$$0$68 = (wrapperLodash && typeof wrapperLodash === 'object' && 'default' in wrapperLodash ? wrapperLodash['default'] : wrapperLodash);

	var _realNames = __commonjs(function (module) {
	/** Used to lookup unminified function names. */
	var realNames = {};

	module.exports = realNames;
	});

	var require$$0$72 = (_realNames && typeof _realNames === 'object' && 'default' in _realNames ? _realNames['default'] : _realNames);

	var _getFuncName = __commonjs(function (module) {
	var realNames = require$$0$72;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}

	module.exports = getFuncName;
	});

	var require$$1$39 = (_getFuncName && typeof _getFuncName === 'object' && 'default' in _getFuncName ? _getFuncName['default'] : _getFuncName);

	var noop = __commonjs(function (module) {
	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;
	});

	var require$$0$73 = (noop && typeof noop === 'object' && 'default' in noop ? noop['default'] : noop);

	var _metaMap = __commonjs(function (module) {
	var WeakMap = require$$0$48;

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;
	});

	var require$$1$40 = (_metaMap && typeof _metaMap === 'object' && 'default' in _metaMap ? _metaMap['default'] : _metaMap);

	var _getData = __commonjs(function (module) {
	var metaMap = require$$1$40,
	    noop = require$$0$73;

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};

	module.exports = getData;
	});

	var require$$2$25 = (_getData && typeof _getData === 'object' && 'default' in _getData ? _getData['default'] : _getData);

	var _isLaziable = __commonjs(function (module) {
	var LazyWrapper = require$$2$24,
	    getData = require$$2$25,
	    getFuncName = require$$1$39,
	    lodash = require$$0$68;

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];

	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}

	module.exports = isLaziable;
	});

	var require$$0$67 = (_isLaziable && typeof _isLaziable === 'object' && 'default' in _isLaziable ? _isLaziable['default'] : _isLaziable);

	var _shortOut = __commonjs(function (module) {
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;
	});

	var require$$0$75 = (_shortOut && typeof _shortOut === 'object' && 'default' in _shortOut ? _shortOut['default'] : _shortOut);

	var constant = __commonjs(function (module) {
	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;
	});

	var require$$2$26 = (constant && typeof constant === 'object' && 'default' in constant ? constant['default'] : constant);

	var _baseSetToString = __commonjs(function (module) {
	var constant = require$$2$26,
	    defineProperty = require$$1$31,
	    identity = require$$0$40;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;
	});

	var require$$1$41 = (_baseSetToString && typeof _baseSetToString === 'object' && 'default' in _baseSetToString ? _baseSetToString['default'] : _baseSetToString);

	var _setToString = __commonjs(function (module) {
	var baseSetToString = require$$1$41,
	    shortOut = require$$0$75;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;
	});

	var require$$0$74 = (_setToString && typeof _setToString === 'object' && 'default' in _setToString ? _setToString['default'] : _setToString);

	var _apply = __commonjs(function (module) {
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;
	});

	var require$$0$76 = (_apply && typeof _apply === 'object' && 'default' in _apply ? _apply['default'] : _apply);

	var _overRest = __commonjs(function (module) {
	var apply = require$$0$76;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;
	});

	var require$$1$42 = (_overRest && typeof _overRest === 'object' && 'default' in _overRest ? _overRest['default'] : _overRest);

	var _isFlattenable = __commonjs(function (module) {
	var Symbol = require$$2$1,
	    isArguments = require$$1$11,
	    isArray = require$$0$20;

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;
	});

	var require$$0$78 = (_isFlattenable && typeof _isFlattenable === 'object' && 'default' in _isFlattenable ? _isFlattenable['default'] : _isFlattenable);

	var _baseFlatten = __commonjs(function (module) {
	var arrayPush = require$$1$28,
	    isFlattenable = require$$0$78;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;
	});

	var require$$0$77 = (_baseFlatten && typeof _baseFlatten === 'object' && 'default' in _baseFlatten ? _baseFlatten['default'] : _baseFlatten);

	var flatten = __commonjs(function (module) {
	var baseFlatten = require$$0$77;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten(array, 1) : [];
	}

	module.exports = flatten;
	});

	var require$$2$27 = (flatten && typeof flatten === 'object' && 'default' in flatten ? flatten['default'] : flatten);

	var _flatRest = __commonjs(function (module) {
	var flatten = require$$2$27,
	    overRest = require$$1$42,
	    setToString = require$$0$74;

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}

	module.exports = flatRest;
	});

	var require$$4$11 = (_flatRest && typeof _flatRest === 'object' && 'default' in _flatRest ? _flatRest['default'] : _flatRest);

	var _createFlow = __commonjs(function (module) {
	var LodashWrapper = require$$1$37,
	    flatRest = require$$4$11,
	    getData = require$$2$25,
	    getFuncName = require$$1$39,
	    isArray = require$$0$20,
	    isLaziable = require$$0$67;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_FLAG = 8,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256;

	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return flatRest(function(funcs) {
	    var length = funcs.length,
	        index = length,
	        prereq = LodashWrapper.prototype.thru;

	    if (fromRight) {
	      funcs.reverse();
	    }
	    while (index--) {
	      var func = funcs[index];
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	        var wrapper = new LodashWrapper([], true);
	      }
	    }
	    index = wrapper ? index : length;
	    while (++index < length) {
	      func = funcs[index];

	      var funcName = getFuncName(func),
	          data = funcName == 'wrapper' ? getData(func) : undefined;

	      if (data && isLaziable(data[0]) &&
	            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
	            !data[4].length && data[9] == 1
	          ) {
	        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	      } else {
	        wrapper = (func.length == 1 && isLaziable(func))
	          ? wrapper[funcName]()
	          : wrapper.thru(func);
	      }
	    }
	    return function() {
	      var args = arguments,
	          value = args[0];

	      if (wrapper && args.length == 1 &&
	          isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	        return wrapper.plant(value).value();
	      }
	      var index = 0,
	          result = length ? funcs[index].apply(this, args) : value;

	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  });
	}

	module.exports = createFlow;
	});

	var require$$0$66 = (_createFlow && typeof _createFlow === 'object' && 'default' in _createFlow ? _createFlow['default'] : _createFlow);

	var flow = __commonjs(function (module) {
	var createFlow = require$$0$66;

	/**
	 * Creates a function that returns the result of invoking the given functions
	 * with the `this` binding of the created function, where each successive
	 * invocation is supplied the return value of the previous.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] The functions to invoke.
	 * @returns {Function} Returns the new composite function.
	 * @see _.flowRight
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flow([_.add, square]);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flow = createFlow();

	module.exports = flow;
	});

	var flow$1 = (flow && typeof flow === 'object' && 'default' in flow ? flow['default'] : flow);

	var _SLIDER_ACTIVE$SLIDER;

	var composableFilter = function composableFilter(predicate) {
	  return function (options) {
	    if ((typeof options === 'undefined' ? 'undefined' : babelHelpers.typeof(options)) === 'object' && predicate(options)) {
	      return true;
	    }
	    return options;
	  };
	};

	var isElement = composableFilter(function (_ref) {
	  var element = _ref.element,
	      nativeEvent = _ref.nativeEvent;

	  return element === nativeEvent.target;
	});

	var containsElement = composableFilter(function (_ref2) {
	  var element = _ref2.element,
	      nativeEvent = _ref2.nativeEvent;

	  return element.contains(nativeEvent.target);
	});

	var isOrContainsElement = flow$1([isElement, containsElement]);

	var actionGroupCreator = function actionGroupCreator(_ref3, state) {
	  var store = _ref3.store,
	      event = _ref3.event;
	  var eventAction = event.action,
	      eventId = event.id;
	  var _eventAction$config = eventAction.config,
	      actionListId = _eventAction$config.actionListId,
	      autoStopEventId = _eventAction$config.autoStopEventId;

	  if (autoStopEventId) {
	    var _store$getState = store.getState(),
	        ixData = _store$getState.ixData;

	    var events = ixData.events;

	    stopActionGroup({
	      store: store,
	      eventId: autoStopEventId,
	      actionListId: get$1(events[autoStopEventId], 'action.config.actionListId')
	    });
	  }
	  stopActionGroup({ store: store, eventId: eventId, actionListId: actionListId });
	  startActionGroup({ store: store, eventId: eventId, actionListId: actionListId });
	  return state;
	};

	var withFilter = function withFilter(filter, handler) {
	  return function (options, state) {
	    return filter(options, state) === true ? handler(options, state) : state;
	  };
	};

	var baseActionGroupOptions = {
	  handler: withFilter(isOrContainsElement, actionGroupCreator)
	};

	var baseActivityActionGroupOptions = babelHelpers.extends({}, baseActionGroupOptions, {
	  types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
	});

	var CONTINUOUS_SCROLL_EVENT_TYPES = [{ target: window, types: 'resize orientationchange' }, { target: document, types: 'scroll readystatechange IX2_PREVIEW_LOAD' }];

	var TRIGGERED_SCROLL_EVENT_TYPES = [{ target: document, types: 'scroll' }];

	var MOUSE_OVER_OUT_TYPES = 'mouseover mouseout';

	var baseScrollActionGroupOptions = {
	  types: TRIGGERED_SCROLL_EVENT_TYPES
	};

	var getDocumentState = function () {
	  var supportOffset = window.pageXOffset !== undefined;
	  var isCSS1Compat = document.compatMode === 'CSS1Compat';
	  var rootElement = isCSS1Compat ? document.documentElement : document.body;
	  return function () {
	    return {
	      scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
	      scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
	      scrollWidth: rootElement.scrollWidth,
	      scrollHeight: rootElement.scrollHeight,
	      clientWidth: rootElement.clientWidth,
	      clientHeight: rootElement.clientHeight
	    };
	  };
	}();

	var areBoxesIntersecting = function areBoxesIntersecting(a, b) {
	  return !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
	};

	var isElementHovered = function isElementHovered(_ref4) {
	  var element = _ref4.element,
	      nativeEvent = _ref4.nativeEvent;
	  var type = nativeEvent.type,
	      target = nativeEvent.target,
	      relatedTarget = nativeEvent.relatedTarget;

	  var containsTarget = element.contains(target);
	  if (type === 'mouseover' && containsTarget) {
	    return true;
	  }
	  var containsRelated = element.contains(relatedTarget);
	  if (type === 'mouseout' && containsTarget && containsRelated) {
	    return true;
	  }
	  return false;
	};

	var isElementVisible = function isElementVisible(_ref5) {
	  var element = _ref5.element;

	  var _getDocumentState = getDocumentState(),
	      clientWidth = _getDocumentState.clientWidth,
	      clientHeight = _getDocumentState.clientHeight;

	  return areBoxesIntersecting(element.getBoundingClientRect(), {
	    left: 0,
	    top: 0,
	    right: clientWidth,
	    bottom: clientHeight
	  });
	};

	var whenComponentActiveChange = function whenComponentActiveChange(handler) {
	  return function (options) {
	    var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	    var isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(options.nativeEvent.type) !== -1 ? options.nativeEvent.type === COMPONENT_ACTIVE : oldState.isActive;

	    var newState = babelHelpers.extends({}, oldState, {
	      isActive: isActive
	    });

	    if (newState.isActive !== oldState.isActive) {
	      return handler(options, newState) || newState;
	    }

	    return newState;
	  };
	};

	var whenElementHoverChange = function whenElementHoverChange(handler) {
	  return function (options, oldState) {
	    var newState = {
	      elementHovered: isElementHovered(options)
	    };
	    if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
	      return handler(options, newState) || newState;
	    }
	    return newState;
	  };
	};

	var whenElementVisibiltyChange = function whenElementVisibiltyChange(handler) {
	  return function (options, oldState) {
	    var newState = babelHelpers.extends({}, oldState, {
	      elementVisible: isElementVisible(options)
	    });
	    if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
	      return handler(options, newState) || newState;
	    }
	    return newState;
	  };
	};

	var whenScrollDirectionChange = function whenScrollDirectionChange(handler) {
	  return function (options, oldState) {
	    var _getDocumentState2 = getDocumentState(),
	        scrollTop = _getDocumentState2.scrollTop;

	    var newState = {
	      scrollTop: scrollTop,
	      scrollingDown: oldState ? scrollTop > oldState.scrollTop : undefined
	    };
	    if (oldState && newState.scrollingDown !== oldState.scrollingDown) {
	      return handler(options, newState) || newState;
	    }
	    return newState;
	  };
	};

	var pointIntersects = function pointIntersects(point, rect) {
	  return point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
	};

	var whenPageLoadFinish = function whenPageLoadFinish(handler) {
	  return function (options, oldState) {
	    var newState = {
	      finished: document.readyState === 'complete'
	    };
	    if (newState.finished && !(oldState && oldState.finshed)) {
	      handler(options);
	    }
	    return newState;
	  };
	};

	var whenPageLoadStart = function whenPageLoadStart(handler) {
	  return function (options, oldState) {
	    var newState = {
	      started: true
	    };
	    if (!oldState) {
	      handler(options);
	    }
	    return newState;
	  };
	};

	var componentActiveOptions = babelHelpers.extends({}, baseActivityActionGroupOptions, {
	  handler: withFilter(isOrContainsElement, whenComponentActiveChange(function (options, state) {
	    return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
	  }))
	});

	var componentInactiveOptions = babelHelpers.extends({}, baseActivityActionGroupOptions, {
	  handler: withFilter(isOrContainsElement, whenComponentActiveChange(function (options, state) {
	    return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
	  }))
	});

	var scrollIntoOutOfViewOptions = babelHelpers.extends({}, baseScrollActionGroupOptions, {
	  handler: whenElementVisibiltyChange(function (options, state) {
	    var elementVisible = state.elementVisible;
	    var event = options.event,
	        store = options.store;

	    var _store$getState2 = store.getState(),
	        ixData = _store$getState2.ixData;

	    var events = ixData.events;

	    // trigger the handler only once if only one of SCROLL_INTO or SCROLL_OUT_OF event types
	    // are registered.

	    if (!events[event.action.config.autoStopEventId] && state.triggered) {
	      return state;
	    }

	    if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
	      actionGroupCreator(options);
	      return babelHelpers.extends({}, state, {
	        triggered: true
	      });
	    } else {
	      return state;
	    }
	  })
	});

	var IX2VanillaEvents = (_SLIDER_ACTIVE$SLIDER = {}, babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, SLIDER_ACTIVE, componentActiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, SLIDER_INACTIVE, componentInactiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, DROPDOWN_OPEN, componentActiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, DROPDOWN_CLOSE, componentInactiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, NAVBAR_OPEN, componentActiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, NAVBAR_CLOSE, componentInactiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, TAB_ACTIVE, componentActiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, TAB_INACTIVE, componentInactiveOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_CLICK, babelHelpers.extends({}, baseActionGroupOptions, {
	  types: 'click'
	})), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_SECOND_CLICK, babelHelpers.extends({
	  types: 'click'
	}, baseActionGroupOptions, {
	  handler: withFilter(isOrContainsElement, function (options) {
	    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { clickCount: 1 };

	    var clickCount = _ref6.clickCount,
	        restState = babelHelpers.objectWithoutProperties(_ref6, ['clickCount']);

	    if (clickCount % 2 === 0) {
	      clickCount = 0;
	      restState = actionGroupCreator(options, restState);
	    }
	    return babelHelpers.extends({ clickCount: clickCount + 1 }, restState);
	  })
	})), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_DOWN, babelHelpers.extends({}, baseActionGroupOptions, {
	  types: 'mousedown'
	})), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_UP, babelHelpers.extends({}, baseActionGroupOptions, {
	  types: 'mouseup'
	})), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_OVER, {
	  types: MOUSE_OVER_OUT_TYPES,
	  handler: withFilter(isOrContainsElement, whenElementHoverChange(function (options, state) {
	    if (state.elementHovered) {
	      actionGroupCreator(options);
	    }
	  }))
	}), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_OUT, {
	  types: MOUSE_OVER_OUT_TYPES,
	  handler: withFilter(isOrContainsElement, whenElementHoverChange(function (options, state) {
	    if (!state.elementHovered) {
	      actionGroupCreator(options);
	    }
	  }))
	}), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, MOUSE_MOVE, {
	  types: 'mousemove mouseout scroll',
	  handler: function handler(_ref7) {
	    var store = _ref7.store,
	        element = _ref7.element,
	        eventConfig = _ref7.eventConfig,
	        event = _ref7.event,
	        nativeEvent = _ref7.nativeEvent;
	    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 };
	    var basedOn = eventConfig.basedOn,
	        selectedAxis = eventConfig.selectedAxis,
	        continuousParameterGroupId = eventConfig.continuousParameterGroupId,
	        reverse = eventConfig.reverse,
	        _eventConfig$restingS = eventConfig.restingState,
	        restingState = _eventConfig$restingS === undefined ? 0 : _eventConfig$restingS;
	    var _nativeEvent$clientX = nativeEvent.clientX,
	        clientX = _nativeEvent$clientX === undefined ? state.clientX : _nativeEvent$clientX,
	        _nativeEvent$clientY = nativeEvent.clientY,
	        clientY = _nativeEvent$clientY === undefined ? state.clientY : _nativeEvent$clientY,
	        _nativeEvent$pageX = nativeEvent.pageX,
	        pageX = _nativeEvent$pageX === undefined ? state.pageX : _nativeEvent$pageX,
	        _nativeEvent$pageY = nativeEvent.pageY,
	        pageY = _nativeEvent$pageY === undefined ? state.pageY : _nativeEvent$pageY;

	    var isXAxis = selectedAxis === 'X_AXIS';
	    var isMouseOut = nativeEvent.type === 'mouseout';
	    var value = restingState / 100;
	    var namespacedParameterId = continuousParameterGroupId;

	    switch (basedOn) {
	      case VIEWPORT:
	        {
	          if (isMouseOut) {
	            break;
	          }

	          var _getDocumentState3 = getDocumentState(),
	              scrollLeft = _getDocumentState3.scrollLeft,
	              scrollTop = _getDocumentState3.scrollTop;

	          value = isXAxis ? Math.min(scrollLeft + clientX, window.innerWidth) / window.innerWidth : Math.min(scrollTop + clientY, window.innerHeight) / window.innerHeight;
	          break;
	        }
	      case PAGE:
	        {
	          if (isMouseOut) {
	            break;
	          }

	          var _getDocumentState4 = getDocumentState(),
	              _scrollLeft = _getDocumentState4.scrollLeft,
	              _scrollTop = _getDocumentState4.scrollTop,
	              scrollWidth = _getDocumentState4.scrollWidth,
	              scrollHeight = _getDocumentState4.scrollHeight;

	          value = isXAxis ? Math.min(_scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(_scrollTop + pageY, scrollHeight) / scrollHeight;
	          break;
	        }
	      case ELEMENT:
	      default:
	        {
	          namespacedParameterId = getNamespacedParameterId(event.id, continuousParameterGroupId);

	          var isMouseEvent = nativeEvent.type.indexOf('mouse') === 0;

	          // Use isOrContainsElement for mouse events since they are fired from the target
	          if (isMouseEvent && isOrContainsElement({ element: element, nativeEvent: nativeEvent }) !== true) {
	            break;
	          }

	          var rect = element.getBoundingClientRect();
	          var left = rect.left,
	              top = rect.top,
	              width = rect.width,
	              height = rect.height;

	          // Otherwise we'll need to calculate the mouse position from the previous handler state
	          // against the target element's rect

	          if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
	            break;
	          }

	          value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
	          break;
	        }
	    }
	    value = reverse ? 1 - value : value;
	    store.dispatch(parameterChanged(namespacedParameterId, value));

	    return {
	      clientX: clientX,
	      clientY: clientY,
	      pageX: pageX,
	      pageY: pageY
	    };
	  }
	}), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, PAGE_SCROLL, {
	  types: CONTINUOUS_SCROLL_EVENT_TYPES,
	  handler: function handler(_ref8) {
	    var store = _ref8.store,
	        eventConfig = _ref8.eventConfig;
	    var continuousParameterGroupId = eventConfig.continuousParameterGroupId,
	        reverse = eventConfig.reverse;

	    var _getDocumentState5 = getDocumentState(),
	        scrollTop = _getDocumentState5.scrollTop,
	        scrollHeight = _getDocumentState5.scrollHeight,
	        clientHeight = _getDocumentState5.clientHeight;

	    var value = scrollTop / (scrollHeight - clientHeight);
	    value = reverse ? 1 - value : value;
	    store.dispatch(parameterChanged(continuousParameterGroupId, value));
	  }
	}), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, SCROLLING_IN_VIEW, {
	  types: CONTINUOUS_SCROLL_EVENT_TYPES,
	  handler: function handler(_ref9) {
	    var element = _ref9.element,
	        store = _ref9.store,
	        eventConfig = _ref9.eventConfig,
	        event = _ref9.event;

	    var _getDocumentState6 = getDocumentState(),
	        scrollLeft = _getDocumentState6.scrollLeft,
	        scrollTop = _getDocumentState6.scrollTop,
	        scrollWidth = _getDocumentState6.scrollWidth,
	        scrollHeight = _getDocumentState6.scrollHeight,
	        visibleWidth = _getDocumentState6.clientWidth,
	        visibleHeight = _getDocumentState6.clientHeight;

	    var viewportWidth = scrollWidth - visibleWidth;
	    var viewportHeight = scrollHeight - visibleHeight;

	    var basedOn = eventConfig.basedOn,
	        selectedAxis = eventConfig.selectedAxis,
	        continuousParameterGroupId = eventConfig.continuousParameterGroupId,
	        startsEntering = eventConfig.startsEntering,
	        startsExiting = eventConfig.startsExiting,
	        addEndOffset = eventConfig.addEndOffset,
	        addStartOffset = eventConfig.addStartOffset,
	        _eventConfig$addOffse = eventConfig.addOffsetValue,
	        addOffsetValue = _eventConfig$addOffse === undefined ? 0 : _eventConfig$addOffse,
	        _eventConfig$endOffse = eventConfig.endOffsetValue,
	        endOffsetValue = _eventConfig$endOffse === undefined ? 0 : _eventConfig$endOffse;


	    var isXAxis = selectedAxis === 'X_AXIS';

	    if (basedOn === VIEWPORT) {
	      var value = isXAxis ? scrollLeft / viewportWidth : scrollTop / viewportHeight;
	      store.dispatch(parameterChanged(continuousParameterGroupId, value));
	    } else {
	      var namespacedParameterId = getNamespacedParameterId(event.id, continuousParameterGroupId);
	      var elementRect = element.getBoundingClientRect();
	      var offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
	      var offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;

	      // flip the offset percentages depending on start / exit type
	      offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
	      offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;

	      var offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
	      var offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
	      var offsetHeight = offsetElementBottom - offsetElementTop;

	      var fixedScrollHeight = Math.min(visibleHeight + offsetHeight, viewportHeight);

	      var fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
	      var fixedScrollPerc = fixedScrollTop / fixedScrollHeight;

	      store.dispatch(parameterChanged(namespacedParameterId, fixedScrollPerc));
	    }
	  }
	}), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, SCROLL_INTO_VIEW, scrollIntoOutOfViewOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, SCROLL_OUT_OF_VIEW, scrollIntoOutOfViewOptions), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, PAGE_SCROLL_DOWN, babelHelpers.extends({}, baseScrollActionGroupOptions, {
	  handler: whenScrollDirectionChange(function (options, state) {
	    if (state.scrollingDown) {
	      actionGroupCreator(options);
	    }
	  })
	})), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, PAGE_SCROLL_UP, babelHelpers.extends({}, baseScrollActionGroupOptions, {
	  handler: whenScrollDirectionChange(function (options, state) {
	    if (!state.scrollingDown) {
	      actionGroupCreator(options);
	    }
	  })
	})), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, PAGE_FINISH, {
	  types: 'readystatechange IX2_PREVIEW_LOAD',
	  handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
	}), babelHelpers.defineProperty(_SLIDER_ACTIVE$SLIDER, PAGE_START, {
	  types: 'readystatechange IX2_PREVIEW_LOAD',
	  handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
	}), _SLIDER_ACTIVE$SLIDER);

	function observeRequests(store) {
	  observeStore({
	    store: store,
	    select: function select(_ref) {
	      var ixRequest = _ref.ixRequest;
	      return ixRequest.preview;
	    },
	    onChange: handlePreviewRequest
	  });
	  observeStore({
	    store: store,
	    select: function select(_ref2) {
	      var ixRequest = _ref2.ixRequest;
	      return ixRequest.playback;
	    },
	    onChange: handlePlaybackRequest
	  });
	  observeStore({
	    store: store,
	    select: function select(_ref3) {
	      var ixRequest = _ref3.ixRequest;
	      return ixRequest.stop;
	    },
	    onChange: handleStopRequest
	  });
	  observeStore({
	    store: store,
	    select: function select(_ref4) {
	      var ixRequest = _ref4.ixRequest;
	      return ixRequest.clear;
	    },
	    onChange: handleClearRequest
	  });
	}

	function handlePreviewRequest(_ref5, store) {
	  var rawData = _ref5.rawData;

	  startEngine({ store: store, rawData: rawData, allowEvents: true });
	  document.dispatchEvent(new CustomEvent('IX2_PREVIEW_LOAD'));
	}

	function handlePlaybackRequest(playback, store) {
	  var actionTypeId = playback.actionTypeId,
	      actionListId = playback.actionListId,
	      actionItemId = playback.actionItemId,
	      eventId = playback.eventId,
	      allowEvents = playback.allowEvents,
	      immediate = playback.immediate,
	      _playback$verbose = playback.verbose,
	      verbose = _playback$verbose === undefined ? true : _playback$verbose;
	  var rawData = playback.rawData;


	  if (actionListId && actionItemId && rawData && immediate) {
	    rawData = reduceListToGroup({
	      actionListId: actionListId,
	      actionItemId: actionItemId,
	      rawData: rawData
	    });
	  }

	  startEngine({ store: store, rawData: rawData, allowEvents: allowEvents });

	  if (actionListId && actionTypeId === GENERAL_START_ACTION) {
	    stopActionGroup({ store: store, actionListId: actionListId });
	    renderInitialGroup({ store: store, actionListId: actionListId, eventId: eventId });
	    var started = startActionGroup({ store: store, eventId: eventId, actionListId: actionListId, immediate: immediate, verbose: verbose });
	    if (verbose && started) {
	      store.dispatch(actionListPlaybackChanged({ actionListId: actionListId, isPlaying: !immediate }));
	    }
	  }
	}

	function handleStopRequest(_ref6, store) {
	  var actionListId = _ref6.actionListId;

	  if (actionListId) {
	    stopActionGroup({ store: store, actionListId: actionListId });
	  } else {
	    stopAllActionGroups({ store: store });
	  }
	  stopEngine(store);
	}

	function handleClearRequest(state, store) {
	  stopEngine(store);
	  clearAllStyles({ store: store, elementApi: elementApi });
	}

	function startEngine(_ref7) {
	  var store = _ref7.store,
	      rawData = _ref7.rawData,
	      allowEvents = _ref7.allowEvents;

	  var _store$getState = store.getState(),
	      ixSession = _store$getState.ixSession;

	  if (rawData) {
	    store.dispatch(rawDataImported(rawData));
	  }
	  if (!ixSession.active) {
	    if (allowEvents) {
	      bindEvents(store);
	    }
	    store.dispatch(sessionStarted());
	    startRenderLoop(store);
	  }
	}

	function startRenderLoop(store) {
	  var handleFrame = function handleFrame(now) {
	    var _store$getState2 = store.getState(),
	        ixSession = _store$getState2.ixSession,
	        ixParameters = _store$getState2.ixParameters;

	    if (ixSession.active) {
	      store.dispatch(animationFrameChanged(now, ixParameters));
	      requestAnimationFrame(handleFrame);
	    }
	  };
	  handleFrame(window.performance.now());
	}

	function stopEngine(store) {
	  var _store$getState3 = store.getState(),
	      ixSession = _store$getState3.ixSession;

	  if (ixSession.active) {
	    var eventListeners = ixSession.eventListeners;

	    eventListeners.forEach(clearEventListener);
	    store.dispatch(sessionStopped());
	  }
	}

	function clearEventListener(_ref8) {
	  var target = _ref8.target,
	      listenerParams = _ref8.listenerParams;

	  target.removeEventListener.apply(target, listenerParams);
	}

	function createGroupInstances(_ref9) {
	  var store = _ref9.store,
	      eventId = _ref9.eventId,
	      eventConfig = _ref9.eventConfig,
	      actionListId = _ref9.actionListId,
	      parameterGroup = _ref9.parameterGroup,
	      smoothing = _ref9.smoothing,
	      restingValue = _ref9.restingValue;

	  var _store$getState4 = store.getState(),
	      ixData = _store$getState4.ixData;

	  var events = ixData.events;

	  var event = events[eventId];
	  var eventTypeId = event.eventTypeId;

	  var targetCache = {};
	  var instanceActionGroups = {};
	  var instanceConfigs = [];

	  var continuousActionGroups = parameterGroup.continuousActionGroups;
	  var parameterId = parameterGroup.id;

	  if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
	    parameterId = getNamespacedParameterId(eventId, parameterId);
	  }

	  continuousActionGroups.forEach(function (actionGroup) {
	    var keyframe = actionGroup.keyframe,
	        actionItems = actionGroup.actionItems;


	    actionItems.forEach(function (actionItem) {
	      var actionTypeId = actionItem.actionTypeId;
	      var target = actionItem.config.target;

	      var key = target + ':' + actionTypeId;

	      if (!target) {
	        return;
	      }

	      instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);

	      if (!targetCache[key]) {
	        targetCache[key] = true;
	        var config = actionItem.config;

	        getAffectedElements({ config: config, event: event, elementApi: elementApi }).forEach(function (element) {
	          instanceConfigs.push({ element: element, key: key });
	        });
	      }
	    });
	  });

	  instanceConfigs.forEach(function (_ref10) {
	    var element = _ref10.element,
	        key = _ref10.key;

	    var actionGroups = instanceActionGroups[key];
	    var actionItem = get$1(actionGroups, '[0].actionItems[0]', {});
	    var destination = getDestinationValues(actionItem);
	    createInstance({
	      store: store,
	      element: element,
	      eventId: eventId,
	      actionListId: actionListId,
	      actionItem: actionItem,
	      destination: destination,
	      continuous: true,
	      parameterId: parameterId,
	      actionGroups: actionGroups,
	      smoothing: smoothing,
	      restingValue: restingValue
	    });
	  });
	}

	function appendActionItem() {
	  var actionGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var keyframe = arguments[1];
	  var actionItem = arguments[2];

	  var newActionGroups = [].concat(babelHelpers.toConsumableArray(actionGroups));
	  var groupIndex = void 0;
	  newActionGroups.some(function (group, index) {
	    if (group.keyframe === keyframe) {
	      groupIndex = index;
	      return true;
	    }
	    return false;
	  });
	  if (groupIndex == null) {
	    groupIndex = newActionGroups.length;
	    newActionGroups.push({
	      keyframe: keyframe,
	      actionItems: []
	    });
	  }
	  newActionGroups[groupIndex].actionItems.push(actionItem);
	  return newActionGroups;
	}

	function bindEvents(store) {
	  var _store$getState5 = store.getState(),
	      ixData = _store$getState5.ixData;

	  var eventTypeMap = ixData.eventTypeMap;


	  forEach$1(eventTypeMap, function (events, key) {
	    var logic = IX2VanillaEvents[key];
	    if (!logic) {
	      console.warn('IX2 event type not configured: ' + key);
	      return;
	    }
	    bindEventType({
	      logic: logic,
	      store: store,
	      events: events
	    });
	  });

	  var _store$getState6 = store.getState(),
	      ixSession = _store$getState6.ixSession;

	  if (ixSession.eventListeners.length) {
	    bindResizeEvents(store);
	  }
	}

	var WINDOW_RESIZE_EVENTS = ['resize', 'orientationchange'];

	function bindResizeEvents(store) {
	  WINDOW_RESIZE_EVENTS.forEach(function (type) {
	    window.addEventListener(type, handleResize);
	    store.dispatch(eventListenerAdded(window, [type, handleResize]));
	  });
	  function handleResize() {
	    var _store$getState7 = store.getState(),
	        ixSession = _store$getState7.ixSession,
	        ixData = _store$getState7.ixData;

	    var width = window.innerWidth;
	    if (width !== ixSession.viewportWidth) {
	      var mediaQueries = ixData.mediaQueries;

	      store.dispatch(viewportWidthChanged({ width: width, mediaQueries: mediaQueries }));
	    }
	  }
	  handleResize();
	}

	var mapFoundValues = function mapFoundValues(object, iteratee) {
	  return omitBy$1(mapValues$1(object, iteratee), isEmpty$1);
	};

	var getAffectedForEvent = function getAffectedForEvent(event) {
	  var config = { target: event.target };
	  return getAffectedElements({ config: config, elementApi: elementApi });
	};

	function bindEventType(_ref11) {
	  var logic = _ref11.logic,
	      store = _ref11.store,
	      events = _ref11.events;
	  var eventTypes = logic.types,
	      eventHandler = logic.handler;

	  var _store$getState8 = store.getState(),
	      ixData = _store$getState8.ixData;

	  var actionLists = ixData.actionLists;

	  var eventTargets = mapFoundValues(events, getAffectedForEvent);

	  if (!size$1(eventTargets)) {
	    return;
	  }

	  forEach$1(eventTargets, function (elements, key) {
	    var event = events[key];
	    var eventAction = event.action,
	        eventId = event.id;
	    var actionListId = eventAction.config.actionListId;


	    if (eventAction.actionTypeId === GENERAL_CONTINUOUS_ACTION) {
	      var configs = Array.isArray(event.config) ? event.config : [event.config];

	      configs.forEach(function (eventConfig) {
	        var continuousParameterGroupId = eventConfig.continuousParameterGroupId;

	        var paramGroups = get$1(actionLists, actionListId + '.continuousParameterGroups', []);
	        var parameterGroup = find$1(paramGroups, function (_ref12) {
	          var id = _ref12.id;
	          return id === continuousParameterGroupId;
	        });
	        var smoothing = (eventConfig.smoothing || 0) / 100;
	        var restingValue = (eventConfig.restingState || 0) / 100;

	        if (!parameterGroup) {
	          return;
	        }

	        createGroupInstances({
	          store: store,
	          eventId: eventId,
	          eventConfig: eventConfig,
	          actionListId: actionListId,
	          parameterGroup: parameterGroup,
	          smoothing: smoothing,
	          restingValue: restingValue
	        });
	      });
	    }

	    if (eventAction.actionTypeId === GENERAL_START_ACTION) {
	      renderInitialGroup({ store: store, actionListId: actionListId, eventId: eventId });
	    }
	  });

	  var handleEvent = function handleEvent(nativeEvent) {
	    var _store$getState9 = store.getState(),
	        ixSession = _store$getState9.ixSession;

	    forEach$1(eventTargets, function (elements, key) {
	      var element = elements[0];
	      var event = events[key];
	      var oldState = ixSession.eventState[key];
	      var eventAction = event.action,
	          _event$mediaQueries = event.mediaQueries,
	          mediaQueries = _event$mediaQueries === undefined ? ixData.mediaQueryKeys : _event$mediaQueries;
	      // Bypass event handler if current media query is not listed in event config

	      if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
	        return;
	      }
	      var handleEventWithConfig = function handleEventWithConfig() {
	        var eventConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        var newState = eventHandler({
	          store: store,
	          element: element,
	          event: event,
	          eventConfig: eventConfig,
	          nativeEvent: nativeEvent
	        }, oldState);
	        if (newState !== oldState) {
	          store.dispatch(eventStateChanged(key, newState));
	        }
	      };
	      if (eventAction.actionTypeId === GENERAL_CONTINUOUS_ACTION) {
	        var configs = Array.isArray(event.config) ? event.config : [event.config];
	        configs.forEach(handleEventWithConfig);
	      } else {
	        handleEventWithConfig();
	      }
	    });
	  };
	  var addListeners = function addListeners(_ref13) {
	    var _ref13$target = _ref13.target,
	        target = _ref13$target === undefined ? document : _ref13$target,
	        types = _ref13.types;

	    types.split(' ').filter(Boolean).forEach(function (type) {
	      target.addEventListener(type, handleEvent);
	      store.dispatch(eventListenerAdded(target, [type, handleEvent]));
	    });
	  };
	  if (Array.isArray(eventTypes)) {
	    eventTypes.forEach(addListeners);
	  } else if (typeof eventTypes === 'string') {
	    addListeners(logic);
	  }
	}

	function renderInitialGroup(_ref14) {
	  var store = _ref14.store,
	      actionListId = _ref14.actionListId,
	      eventId = _ref14.eventId;

	  var _store$getState10 = store.getState(),
	      ixData = _store$getState10.ixData;

	  var actionLists = ixData.actionLists,
	      events = ixData.events;

	  var event = events[eventId];
	  var actionList = actionLists[actionListId];

	  if (actionList && actionList.useFirstGroupAsInitialState) {
	    var initialStateItems = get$1(actionList, 'actionItemGroups[0].actionItems', []);

	    initialStateItems.forEach(function (actionItem) {
	      var config = actionItem.config;

	      var itemElements = getAffectedElements({ config: config, event: event, elementApi: elementApi });

	      itemElements.forEach(function (element) {
	        createInstance({
	          destination: getDestinationValues(actionItem),
	          origin: getInstanceOrigin({ element: element, actionItem: actionItem, elementApi: elementApi }),
	          immediate: true,
	          store: store,
	          element: element,
	          eventId: eventId,
	          actionItem: actionItem,
	          actionListId: actionListId
	        });
	      });
	    });
	  }
	}

	function stopAllActionGroups(_ref15) {
	  var store = _ref15.store;

	  var _store$getState11 = store.getState(),
	      ixInstances = _store$getState11.ixInstances;

	  forEach$1(ixInstances, function (instance) {
	    if (!instance.continuous) {
	      var actionListId = instance.actionListId,
	          verbose = instance.verbose;

	      removeInstance(instance, store);
	      if (verbose) {
	        store.dispatch(actionListPlaybackChanged({ actionListId: actionListId, isPlaying: false }));
	      }
	    }
	  });
	}

	function stopActionGroup(_ref16) {
	  var store = _ref16.store,
	      eventId = _ref16.eventId,
	      actionListId = _ref16.actionListId;

	  var _store$getState12 = store.getState(),
	      ixInstances = _store$getState12.ixInstances;

	  forEach$1(ixInstances, function (instance) {
	    if (instance.actionListId === actionListId && instance.eventId === eventId) {
	      removeInstance(instance, store);
	      if (instance.verbose) {
	        store.dispatch(actionListPlaybackChanged({ actionListId: actionListId, isPlaying: false }));
	      }
	    }
	  });
	}

	function startActionGroup(_ref17) {
	  var store = _ref17.store,
	      eventId = _ref17.eventId,
	      actionListId = _ref17.actionListId,
	      _ref17$groupIndex = _ref17.groupIndex,
	      groupIndex = _ref17$groupIndex === undefined ? 0 : _ref17$groupIndex,
	      immediate = _ref17.immediate,
	      verbose = _ref17.verbose;

	  var _store$getState13 = store.getState(),
	      ixData = _store$getState13.ixData,
	      ixSession = _store$getState13.ixSession;

	  var events = ixData.events;

	  var event = events[eventId] || {};
	  var _event$mediaQueries2 = event.mediaQueries,
	      mediaQueries = _event$mediaQueries2 === undefined ? ixData.mediaQueryKeys : _event$mediaQueries2;

	  var actionList = get$1(ixData, 'actionLists.' + actionListId, {});
	  var actionItemGroups = actionList.actionItemGroups;
	  // Reset to first group when event loop is configured

	  if (groupIndex >= actionItemGroups.length && get$1(event, 'config.loop')) {
	    groupIndex = 0;
	  }
	  // Skip initial state group during action list playback, as it should already be applied
	  if (groupIndex === 0 && actionList.useFirstGroupAsInitialState) {
	    groupIndex++;
	  }
	  // Abort playback if no action items exist at group index
	  var actionItems = get$1(actionItemGroups, [groupIndex, 'actionItems'], []);
	  if (!actionItems.length) {
	    return false;
	  }
	  // Abort playback if current media query is not listed in event config
	  if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
	    return false;
	  }
	  var carrierIndex = getMaxDurationItemIndex(actionItems);
	  var groupStartResult = false;
	  actionItems.forEach(function (actionItem, actionIndex) {
	    var config = actionItem.config;

	    var elements = getAffectedElements({ config: config, event: event, elementApi: elementApi });
	    elements.forEach(function (element, elementIndex) {
	      groupStartResult = true;
	      var isCarrier = carrierIndex === actionIndex && elementIndex === 0;
	      var computedStyle = getComputedStyle({ element: element, actionItem: actionItem });
	      var origin = getInstanceOrigin({ element: element, actionItem: actionItem, computedStyle: computedStyle, elementApi: elementApi });
	      var destination = getDestinationValues(actionItem);
	      createInstance({
	        store: store,
	        element: element,
	        actionItem: actionItem,
	        eventId: eventId,
	        actionListId: actionListId,
	        groupIndex: groupIndex,
	        isCarrier: isCarrier,
	        origin: origin,
	        destination: destination,
	        immediate: immediate,
	        verbose: verbose
	      });
	    });
	  });
	  return groupStartResult;
	}

	function createInstance(options) {
	  var store = options.store,
	      rest = babelHelpers.objectWithoutProperties(options, ['store']);

	  var autoStart = !rest.continuous;
	  var immediate = rest.immediate;

	  var instanceId = getInstanceId();

	  store.dispatch(instanceAdded(babelHelpers.extends({
	    instanceId: instanceId
	  }, rest)));

	  if (immediate) {
	    renderImmediateInstance(store, instanceId);
	    return;
	  }

	  observeStore({
	    store: store,
	    select: function select(_ref18) {
	      var ixInstances = _ref18.ixInstances;
	      return ixInstances[instanceId];
	    },
	    onChange: handleInstanceChange
	  });

	  if (autoStart) {
	    store.dispatch(instanceStarted(instanceId));
	  }
	}

	function removeInstance(instance, store) {
	  cleanupInstance(instance, elementApi);
	  store.dispatch(instanceRemoved(instance.id));
	}

	function renderImmediateInstance(store, instanceId) {
	  store.dispatch(instanceStarted(instanceId));

	  var _store$getState14 = store.getState(),
	      ixParameters = _store$getState14.ixParameters;

	  store.dispatch(animationFrameChanged(Number.POSITIVE_INFINITY, ixParameters));

	  var _store$getState15 = store.getState(),
	      ixInstances = _store$getState15.ixInstances;

	  handleInstanceChange(ixInstances[instanceId], store);
	}

	function handleInstanceChange(instance, store) {

	  // TODO: look for null element/parent

	  var active = instance.active,
	      continuous = instance.continuous,
	      complete = instance.complete,
	      current = instance.current,
	      groupIndex = instance.groupIndex,
	      eventId = instance.eventId,
	      actionListId = instance.actionListId,
	      isGeneral = instance.isGeneral,
	      isCarrier = instance.isCarrier,
	      verbose = instance.verbose;


	  if (continuous || active || complete) {

	    if (current || isGeneral && complete) {
	      renderInstance(instance, elementApi);
	    }

	    if (complete) {

	      if (isCarrier) {
	        var started = startActionGroup({ store: store, eventId: eventId, actionListId: actionListId, groupIndex: groupIndex + 1, verbose: verbose });
	        if (verbose && !started) {
	          store.dispatch(actionListPlaybackChanged({ actionListId: actionListId, isPlaying: false }));
	        }
	      }

	      removeInstance(instance, store);
	    }
	  }
	}

	var store = createStore(reducer);

	if (require$$0$1.env()) {
	  observeRequests(store);
	}

	function init(rawData) {
	  destroy();
	  startEngine({ store: store, rawData: rawData, allowEvents: true });
	}

	function destroy() {
	  stopEngine(store);
	}

	var require$$0$5 = {
	  init: init,
	  destroy: destroy,
	  store: store,
	  actions: actions
	};

	var webflowIx2 = __commonjs(function (module) {
	/**
	 * Webflow: Interactions 2
	 */

	var Webflow = require$$0$1;
	var ix2 = require$$0$5;

	Webflow.define('ix2', module.exports = function() {
	  return ix2;
	});
	});

	var webflowLightbox = __commonjs(function (module) {
	/*eslint no-shadow: 0*/

	/**
	 * Webflow: Lightbox component
	 */

	var Webflow = require$$0$1;

	function createLightbox(window, document, $, container) {
	  var tram = $.tram;
	  var isArray = Array.isArray;
	  var namespace = 'w-lightbox';
	  var prefix = namespace + '-';
	  var prefixRegex = /(^|\s+)/g;

	  // Array of objects describing items to be displayed.
	  var items = [];

	  // Index of the currently displayed item.
	  var currentIndex;

	  // Object holding references to jQuery wrapped nodes.
	  var $refs;

	  // Instance of Spinner
	  var spinner;

	  function lightbox(thing, index) {
	    items = isArray(thing) ? thing : [thing];

	    if (!$refs) {
	      lightbox.build();
	    }

	    if (items.length > 1) {
	      $refs.items = $refs.empty;

	      items.forEach(function (item) {
	        var $thumbnail = dom('thumbnail');
	        var $item = dom('item').append($thumbnail);

	        $refs.items = $refs.items.add($item);

	        loadImage(item.thumbnailUrl || item.url, function ($image) {
	          if ($image.prop('width') > $image.prop('height')) {
	            addClass($image, 'wide');
	          } else {
	            addClass($image, 'tall');
	          }
	          $thumbnail.append(addClass($image, 'thumbnail-image'));
	        });
	      });

	      $refs.strip.empty().append($refs.items);
	      addClass($refs.content, 'group');
	    }

	    tram(
	      // Focus the lightbox to receive keyboard events.
	      removeClass($refs.lightbox, 'hide').focus()
	    )
	      .add('opacity .3s')
	      .start({opacity: 1});

	    // Prevent document from scrolling while lightbox is active.
	    addClass($refs.html, 'noscroll');

	    return lightbox.show(index || 0);
	  }

	  /**
	   * Creates the DOM structure required by the lightbox.
	   */
	  lightbox.build = function () {
	    // In case `build` is called more than once.
	    lightbox.destroy();

	    $refs = {
	      html: $(document.documentElement),
	      // Empty jQuery object can be used to build new ones using `.add`.
	      empty: $()
	    };

	    $refs.arrowLeft = dom('control left inactive');
	    $refs.arrowRight = dom('control right inactive');
	    $refs.close = dom('control close');

	    $refs.spinner = dom('spinner');
	    $refs.strip = dom('strip');

	    spinner = new Spinner($refs.spinner, prefixed('hide'));

	    $refs.content = dom('content')
	      .append($refs.spinner, $refs.arrowLeft, $refs.arrowRight, $refs.close);

	    $refs.container = dom('container')
	      .append($refs.content, $refs.strip);

	    $refs.lightbox = dom('backdrop hide')
	      .append($refs.container);

	    // We are delegating events for performance reasons and also
	    // to not have to reattach handlers when images change.
	    $refs.strip.on('tap', selector('item'), itemTapHandler);
	    $refs.content
	      .on('swipe', swipeHandler)
	      .on('tap', selector('left'), handlerPrev)
	      .on('tap', selector('right'), handlerNext)
	      .on('tap', selector('close'), handlerHide)
	      .on('tap', selector('image, caption'), handlerNext);
	    $refs.container
	      .on('tap', selector('view, strip'), handlerHide)
	      // Prevent images from being dragged around.
	      .on('dragstart', selector('img'), preventDefault);
	    $refs.lightbox
	      .on('keydown', keyHandler)
	      // IE loses focus to inner nodes without letting us know.
	      .on('focusin', focusThis);

	    // The `tabindex` attribute is needed to enable non-input elements
	    // to receive keyboard events.
	    $(container).append($refs.lightbox.prop('tabIndex', 0));

	    return lightbox;
	  };

	  /**
	   * Dispose of DOM nodes created by the lightbox.
	   */
	  lightbox.destroy = function () {
	    if (!$refs) {
	      return;
	    }

	    // Event handlers are also removed.
	    removeClass($refs.html, 'noscroll');
	    $refs.lightbox.remove();
	    $refs = undefined;
	  };

	  /**
	   * Show a specific item.
	   */
	  lightbox.show = function (index) {
	    // Bail if we are already showing this item.
	    if (index === currentIndex) {
	      return;
	    }

	    var item = items[index];
	    if (!item) { return lightbox.hide(); }

	    var previousIndex = currentIndex;
	    currentIndex = index;
	    spinner.show();

	    // For videos, load an empty SVG with the video dimensions to preserve
	    // the video’s aspect ratio while being responsive.
	    var url = item.html && svgDataUri(item.width, item.height) || item.url;
	    loadImage(url, function ($image) {
	      // Make sure this is the last item requested to be shown since
	      // images can finish loading in a different order than they were
	      // requested in.
	      if (index !== currentIndex) {
	        return;
	      }

	      var $figure = dom('figure', 'figure').append(addClass($image, 'image'));
	      var $frame = dom('frame').append($figure);
	      var $newView = dom('view').append($frame);
	      var $html;
	      var isIframe;

	      if (item.html) {
	        $html = $(item.html);
	        isIframe = $html.is('iframe');

	        if (isIframe) {
	          $html.on('load', transitionToNewView);
	        }

	        $figure.append(addClass($html, 'embed'));
	      }

	      if (item.caption) {
	        $figure.append(dom('caption', 'figcaption').text(item.caption));
	      }

	      $refs.spinner.before($newView);

	      if (!isIframe) {
	        transitionToNewView();
	      }

	      function transitionToNewView() {
	        spinner.hide();

	        if (index !== currentIndex) {
	          $newView.remove();
	          return;
	        }


	        toggleClass($refs.arrowLeft, 'inactive', index <= 0);
	        toggleClass($refs.arrowRight, 'inactive', index >= items.length - 1);

	        if ($refs.view) {
	          tram($refs.view)
	            .add('opacity .3s')
	            .start({opacity: 0})
	            .then(remover($refs.view));

	          tram($newView)
	            .add('opacity .3s')
	            .add('transform .3s')
	            .set({x: index > previousIndex ? '80px' : '-80px'})
	            .start({opacity: 1, x: 0});
	        } else {
	          $newView.css('opacity', 1);
	        }

	        $refs.view = $newView;

	        if ($refs.items) {
	          // Mark proper thumbnail as active
	          addClass(removeClass($refs.items, 'active').eq(index), 'active');
	        }
	      }
	    });

	    return lightbox;
	  };

	  /**
	   * Hides the lightbox.
	   */
	  lightbox.hide = function () {
	    tram($refs.lightbox)
	      .add('opacity .3s')
	      .start({opacity: 0})
	      .then(hideLightbox);

	    return lightbox;
	  };

	  lightbox.prev = function () {
	    if (currentIndex > 0) {
	      lightbox.show(currentIndex - 1);
	    }
	  };

	  lightbox.next = function () {
	    if (currentIndex < items.length - 1) {
	      lightbox.show(currentIndex + 1);
	    }
	  };

	  function createHandler(action) {
	    return function (event) {
	      // We only care about events triggered directly on the bound selectors.
	      if (this !== event.target) {
	        return;
	      }

	      event.stopPropagation();
	      event.preventDefault();

	      action();
	    };
	  }

	  var handlerPrev = createHandler(lightbox.prev);
	  var handlerNext = createHandler(lightbox.next);
	  var handlerHide = createHandler(lightbox.hide);

	  var itemTapHandler = function(event) {
	    var index = $(this).index();

	    event.preventDefault();
	    lightbox.show(index);
	  };

	  var swipeHandler = function (event, data) {
	    // Prevent scrolling.
	    event.preventDefault();

	    if (data.direction === 'left') {
	      lightbox.next();
	    } else if (data.direction === 'right') {
	      lightbox.prev();
	    }
	  };

	  var focusThis = function () {
	    this.focus();
	  };

	  function preventDefault(event) {
	    event.preventDefault();
	  }

	  function keyHandler(event) {
	    var keyCode = event.keyCode;

	    // [esc]
	    if (keyCode === 27) {
	      lightbox.hide();

	    // [◀]
	    } else if (keyCode === 37) {
	      lightbox.prev();

	    // [▶]
	    } else if (keyCode === 39) {
	      lightbox.next();
	    }
	  }

	  function hideLightbox() {
	    // If the lightbox hasn't been destroyed already
	    if ($refs) {
	      removeClass($refs.html, 'noscroll');
	      addClass($refs.lightbox, 'hide');
	      $refs.strip.empty();
	      $refs.view && $refs.view.remove();

	      // Reset some stuff
	      removeClass($refs.content, 'group');
	      addClass($refs.arrowLeft, 'inactive');
	      addClass($refs.arrowRight, 'inactive');

	      currentIndex = $refs.view = undefined;
	    }
	  }

	  function loadImage(url, callback) {
	    var $image = dom('img', 'img');

	    $image.one('load', function () {
	      callback($image);
	    });

	    // Start loading image.
	    $image.attr('src', url);

	    return $image;
	  }

	  function remover($element) {
	    return function () {
	      $element.remove();
	    };
	  }

	  /**
	   * Spinner
	   */
	  function Spinner($spinner, className, delay) {
	    this.$element = $spinner;
	    this.className = className;
	    this.delay = delay || 200;
	    this.hide();
	  }

	  Spinner.prototype.show = function () {
	    var spinner = this;

	    // Bail if we are already showing the spinner.
	    if (spinner.timeoutId) {
	      return;
	    }

	    spinner.timeoutId = setTimeout(function () {
	      spinner.$element.removeClass(spinner.className);
	      delete spinner.timeoutId;
	    }, spinner.delay);
	  };

	  Spinner.prototype.hide = function () {
	    var spinner = this;
	    if (spinner.timeoutId) {
	      clearTimeout(spinner.timeoutId);
	      delete spinner.timeoutId;
	      return;
	    }

	    spinner.$element.addClass(spinner.className);
	  };

	  function prefixed(string, isSelector) {
	    return string.replace(prefixRegex, (isSelector ? ' .' : ' ') + prefix);
	  }

	  function selector(string) {
	    return prefixed(string, true);
	  }

	  /**
	   * jQuery.addClass with auto-prefixing
	   * @param  {jQuery} Element to add class to
	   * @param  {string} Class name that will be prefixed and added to element
	   * @return {jQuery}
	   */
	  function addClass($element, className) {
	    return $element.addClass(prefixed(className));
	  }

	  /**
	   * jQuery.removeClass with auto-prefixing
	   * @param  {jQuery} Element to remove class from
	   * @param  {string} Class name that will be prefixed and removed from element
	   * @return {jQuery}
	   */
	  function removeClass($element, className) {
	    return $element.removeClass(prefixed(className));
	  }

	  /**
	   * jQuery.toggleClass with auto-prefixing
	   * @param  {jQuery}  Element where class will be toggled
	   * @param  {string}  Class name that will be prefixed and toggled
	   * @param  {boolean} Optional boolean that determines if class will be added or removed
	   * @return {jQuery}
	   */
	  function toggleClass($element, className, shouldAdd) {
	    return $element.toggleClass(prefixed(className), shouldAdd);
	  }

	  /**
	   * Create a new DOM element wrapped in a jQuery object,
	   * decorated with our custom methods.
	   * @param  {string} className
	   * @param  {string} [tag]
	   * @return {jQuery}
	   */
	  function dom(className, tag) {
	    return addClass($(document.createElement(tag || 'div')), className);
	  }

	  function svgDataUri(width, height) {
	    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"/>';
	    return 'data:image/svg+xml;charset=utf-8,' + encodeURI(svg);
	  }

	  // Compute some dimensions manually for iOS < 8, because of buggy support for VH.
	  // Also, Android built-in browser does not support viewport units.
	  (function () {
	    var ua = window.navigator.userAgent;
	    var iOSRegex = /(iPhone|iPad|iPod);[^OS]*OS (\d)/;
	    var iOSMatches = ua.match(iOSRegex);
	    var android = ua.indexOf('Android ') > -1 && ua.indexOf('Chrome') === -1;

	    if (!android && (!iOSMatches || iOSMatches[2] > 7)) {
	      return;
	    }

	    var styleNode = document.createElement('style');
	    document.head.appendChild(styleNode);
	    window.addEventListener('orientationchange', refresh, true);

	    function refresh() {
	      var vh = window.innerHeight;
	      var vw = window.innerWidth;
	      var content =
	        '.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {' +
	          'height:' + vh + 'px' +
	        '}' +
	        '.w-lightbox-view {' +
	          'width:' + vw + 'px' +
	        '}' +
	        '.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {' +
	          'height:' + (0.86 * vh) + 'px' +
	        '}' +
	        '.w-lightbox-image {' +
	          'max-width:' + vw + 'px;' +
	          'max-height:' + vh + 'px' +
	        '}' +
	        '.w-lightbox-group .w-lightbox-image {' +
	          'max-height:' + (0.86 * vh) + 'px' +
	        '}' +
	        '.w-lightbox-strip {' +
	          'padding: 0 ' + (0.01 * vh) + 'px' +
	        '}' +
	        '.w-lightbox-item {' +
	          'width:' + (0.1 * vh) + 'px;' +
	          'padding:' + (0.02 * vh) + 'px ' + (0.01 * vh) + 'px' +
	        '}' +
	        '.w-lightbox-thumbnail {' +
	          'height:' + (0.1 * vh) + 'px' +
	        '}' +
	        '@media (min-width: 768px) {' +
	          '.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {' +
	            'height:' + (0.96 * vh) + 'px' +
	          '}' +
	          '.w-lightbox-content {' +
	            'margin-top:' + (0.02 * vh) + 'px' +
	          '}' +
	          '.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {' +
	            'height:' + (0.84 * vh) + 'px' +
	          '}' +
	          '.w-lightbox-image {' +
	            'max-width:' + (0.96 * vw) + 'px;' +
	            'max-height:' + (0.96 * vh) + 'px' +
	          '}' +
	          '.w-lightbox-group .w-lightbox-image {' +
	            'max-width:' + (0.823 * vw) + 'px;' +
	            'max-height:' + (0.84 * vh) + 'px' +
	          '}' +
	        '}';

	      styleNode.textContent = content;
	    }

	    refresh();
	  })();

	  return lightbox;
	}

	Webflow.define('lightbox', module.exports = function($) {
	  var api = {};
	  var inApp = Webflow.env();
	  var lightbox = createLightbox(window, document, $, inApp ? '#lightbox-mountpoint' : 'body');
	  var $doc = $(document);
	  var $lightboxes;
	  var designer;
	  var namespace = '.w-lightbox';
	  var groups;

	  // -----------------------------------
	  // Module methods

	  api.ready = api.design = api.preview = init;

	  // -----------------------------------
	  // Private methods

	  function init() {
	    designer = inApp && Webflow.env('design');

	    // Reset Lightbox
	    lightbox.destroy();

	    // Reset groups
	    groups = {};

	    // Find all instances on the page
	    $lightboxes = $doc.find(namespace);

	    // Instantiate all lighboxes
	    $lightboxes.webflowLightBox();
	  }

	  jQuery.fn.extend({
	    webflowLightBox: function() {
	      var $el = this;
	      $.each($el, function(i, el) {
	        // Store state in data
	        var data = $.data(el, namespace);
	        if (!data) {
	          data = $.data(el, namespace, {
	            el: $(el),
	            mode: 'images',
	            images: [],
	            embed: ''
	          });
	        }

	        // Remove old events
	        data.el.off(namespace);

	        // Set config from json script tag
	        configure(data);

	        // Add events based on mode
	        if (designer) {
	          data.el.on('setting' + namespace, configure.bind(null, data));
	        } else {
	          data.el
	            .on('tap' + namespace, tapHandler(data))
	            // Prevent page scrolling to top when clicking on lightbox triggers.
	            .on('click' + namespace, function (e) { e.preventDefault(); });
	        }
	      });
	    }
	  });

	  function configure(data) {
	    var json = data.el.children('.w-json').html();
	    var groupName;
	    var groupItems;

	    if (!json) {
	      data.items = [];
	      return;
	    }

	    try {
	      json = JSON.parse(json);
	    } catch (e) {
	      console.error('Malformed lightbox JSON configuration.', e);
	    }

	    supportOldLightboxJson(json);

	    groupName = json.group;

	    if (groupName) {
	      groupItems = groups[groupName];
	      if (!groupItems) {
	        groupItems = groups[groupName] = [];
	      }

	      data.items = groupItems;

	      if (json.items.length) {
	        data.index = groupItems.length;
	        groupItems.push.apply(groupItems, json.items);
	      }
	    } else {
	      data.items = json.items;
	    }
	  }

	  function tapHandler(data) {
	    return function () {
	      data.items.length && lightbox(data.items, data.index || 0);
	    };
	  }

	  function supportOldLightboxJson(data) {
	    if (data.images) {
	      data.images.forEach(function (item) {
	        item.type = 'image';
	      });
	      data.items = data.images;
	    }

	    if (data.embed) {
	      data.embed.type = 'video';
	      data.items = [data.embed];
	    }

	    if (data.groupId) {
	      data.group = data.groupId;
	    }
	  }

	  // Export module
	  return api;
	});
	});

	var webflowLinks = __commonjs(function (module) {
	/**
	 * Webflow: Auto-select links to current page or section
	 */

	var Webflow = require$$0$1;

	Webflow.define('links', module.exports = function($, _) {
	  var api = {};
	  var $win = $(window);
	  var designer;
	  var inApp = Webflow.env();
	  var location = window.location;
	  var tempLink = document.createElement('a');
	  var linkCurrent = 'w--current';
	  var validHash = /^#[\w:.-]+$/;
	  var indexPage = /index\.(html|php)$/;
	  var dirList = /\/$/;
	  var anchors;
	  var slug;

	  // -----------------------------------
	  // Module methods

	  api.ready = api.design = api.preview = init;

	  // -----------------------------------
	  // Private methods

	  function init() {
	    designer = inApp && Webflow.env('design');
	    slug = Webflow.env('slug') || location.pathname || '';

	    // Reset scroll listener, init anchors
	    Webflow.scroll.off(scroll);
	    anchors = [];

	    // Test all links for a selectable href
	    var links = document.links;
	    for (var i = 0; i < links.length; ++i) {
	      select(links[i]);
	    }

	    // Listen for scroll if any anchors exist
	    if (anchors.length) {
	      Webflow.scroll.on(scroll);
	      scroll();
	    }
	  }

	  function select(link) {
	    var href = (designer && link.getAttribute('href-disabled')) || link.getAttribute('href');
	    tempLink.href = href;

	    // Ignore any hrefs with a colon to safely avoid all uri schemes
	    if (href.indexOf(':') >= 0) return;

	    var $link = $(link);

	    // Check for valid hash links w/ sections and use scroll anchor
	    if (href.indexOf('#') === 0 && validHash.test(href)) {
	      var $section = $(href);
	      $section.length && anchors.push({ link: $link, sec: $section, active: false });
	      return;
	    }

	    // Ignore empty # links
	    if (href === '#') return;

	    // Determine whether the link should be selected
	    var match = (tempLink.href === location.href) || (href === slug) || (indexPage.test(href) && dirList.test(slug));
	    setClass($link, linkCurrent, match);
	  }

	  function scroll() {
	    var viewTop = $win.scrollTop();
	    var viewHeight = $win.height();

	    // Check each anchor for a section in view
	    _.each(anchors, function(anchor) {
	      var $link = anchor.link;
	      var $section = anchor.sec;
	      var top = $section.offset().top;
	      var height = $section.outerHeight();
	      var offset = viewHeight * 0.5;
	      var active = ($section.is(':visible') &&
	        top + height - offset >= viewTop &&
	        top + offset <= viewTop + viewHeight);
	      if (anchor.active === active) return;
	      anchor.active = active;
	      setClass($link, linkCurrent, active);
	    });
	  }

	  function setClass($elem, className, add) {
	    var exists = $elem.hasClass(className);
	    if (add && exists) return;
	    if (!add && !exists) return;
	    add ? $elem.addClass(className) : $elem.removeClass(className);
	  }

	  // Export module
	  return api;
	});
	});

	var webflowMaps = __commonjs(function (module) {
	/**
	 * Webflow: Maps widget
	 */

	var Webflow = require$$0$1;

	Webflow.define('maps', module.exports = function($, _) {
	  var api = {};
	  var $doc = $(document);
	  var google = null;
	  var $maps;
	  var namespace = '.w-widget-map';
	  // The API key is injected here from the Webflow Integrations tab on the site's dashboard
	  var googleMapsApiKey = 'AIzaSyBQ4EYEg4aRz9-yiCnerTV7bk8GCWgZOhk';

	  // -----------------------------------
	  // Module methods

	  api.ready = function() {
	    // Init Maps on the front-end
	    if (!Webflow.env()) initMaps();
	  };

	  api.destroy = removeListeners;

	  // -----------------------------------
	  // Private methods

	  function initMaps() {
	    $maps = $doc.find(namespace);
	    if (!$maps.length) return;

	    if (google === null) {
	      $.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=' + googleMapsApiKey);
	      window._wf_maps_loaded = mapsLoaded;
	    } else {
	      mapsLoaded();
	    }

	    function mapsLoaded() {
	      window._wf_maps_loaded = function() {};
	      google = window.google;
	      $maps.each(renderMap);
	      removeListeners();
	      addListeners();
	    }
	  }

	  function removeListeners() {
	    Webflow.resize.off(resizeMaps);
	    Webflow.redraw.off(resizeMaps);
	  }

	  function addListeners() {
	    Webflow.resize.on(resizeMaps);
	    Webflow.redraw.on(resizeMaps);
	  }

	  // Render map onto each element
	  function renderMap(i, el) {
	    var data = $(el).data();
	    getState(el, data);
	  }

	  function resizeMaps() {
	    $maps.each(resizeMap);
	  }

	  // Resize map when window changes
	  function resizeMap(i, el) {
	    var state = getState(el);
	    google.maps.event.trigger(state.map, 'resize');
	    state.setMapPosition();
	  }

	  // Store state on element data
	  var store = 'w-widget-map';
	  function getState(el, data) {

	    var state = $.data(el, store);
	    if (state) return state;

	    var $el = $(el);
	    state = $.data(el, store, {
	      // Default options
	      latLng: '51.511214,-0.119824',
	      tooltip: '',
	      style: 'roadmap',
	      zoom: 12,

	      // Marker
	      marker: new google.maps.Marker({
	        draggable: false
	      }),

	      // Tooltip infowindow
	      infowindow: new google.maps.InfoWindow({
	        disableAutoPan: true
	      })
	    });

	    // LatLng center point
	    var latLng = data.widgetLatlng || state.latLng;
	    state.latLng = latLng;
	    var coords = latLng.split(',');
	    var latLngObj = new google.maps.LatLng(coords[0], coords[1]);
	    state.latLngObj = latLngObj;

	    // Disable touch events
	    var mapDraggable = !(Webflow.env.touch && data.disableTouch);

	    // Map instance
	    state.map = new google.maps.Map(el, {
	      center: state.latLngObj,
	      zoom: state.zoom,
	      maxZoom: 18,
	      mapTypeControl: false,
	      panControl: false,
	      streetViewControl: false,
	      scrollwheel: !data.disableScroll,
	      draggable: mapDraggable,
	      zoomControl: true,
	      zoomControlOptions: {
	        style: google.maps.ZoomControlStyle.SMALL
	      },
	      mapTypeId: state.style
	    });
	    state.marker.setMap(state.map);

	    // Set map position and offset
	    state.setMapPosition = function() {
	      state.map.setCenter(state.latLngObj);
	      var offsetX = 0;
	      var offsetY = 0;
	      var padding = $el.css(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']);
	      offsetX -= parseInt(padding.paddingLeft, 10);
	      offsetX += parseInt(padding.paddingRight, 10);
	      offsetY -= parseInt(padding.paddingTop, 10);
	      offsetY += parseInt(padding.paddingBottom, 10);
	      if (offsetX || offsetY) {
	        state.map.panBy(offsetX, offsetY);
	      }
	      $el.css('position', ''); // Remove injected position
	    };

	    // Fix position after first tiles have loaded
	    google.maps.event.addListener(state.map, 'tilesloaded', function() {
	      google.maps.event.clearListeners(state.map, 'tilesloaded');
	      state.setMapPosition();
	    });

	    // Set initial position
	    state.setMapPosition();
	    state.marker.setPosition(state.latLngObj);
	    state.infowindow.setPosition(state.latLngObj);

	    // Draw tooltip
	    var tooltip = data.widgetTooltip;
	    if (tooltip) {
	      state.tooltip = tooltip;
	      state.infowindow.setContent(tooltip);
	      if (!state.infowindowOpen) {
	        state.infowindow.open(state.map, state.marker);
	        state.infowindowOpen = true;
	      }
	    }

	    // Map style - options.style
	    var style = data.widgetStyle;
	    if (style) {
	      state.map.setMapTypeId(style);
	    }

	    // Zoom - options.zoom
	    var zoom = data.widgetZoom;
	    if (zoom != null) {
	      state.zoom = zoom;
	      state.map.setZoom(Number(zoom));
	    }

	    // Click marker to open in google maps
	    google.maps.event.addListener(state.marker, 'click', function() {
	      window.open('https://maps.google.com/?z=' + state.zoom + '&daddr=' + state.latLng);
	    });

	    return state;
	  }

	  // Export module
	  return api;
	});
	});

	var webflowNavbar = __commonjs(function (module) {
	/**
	 * Webflow: Navbar component
	 */

	var Webflow = require$$0$1;
	var IXEvents = require$$0$3;

	Webflow.define('navbar', module.exports = function($, _) {
	  var api = {};
	  var tram = $.tram;
	  var $win = $(window);
	  var $doc = $(document);
	  var $body;
	  var $navbars;
	  var designer;
	  var inApp = Webflow.env();
	  var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
	  var namespace = '.w-nav';
	  var buttonOpen = 'w--open';
	  var menuOpen = 'w--nav-menu-open';
	  var linkOpen = 'w--nav-link-open';
	  var ix = IXEvents.triggers;
	  var menuSibling = $();

	  // -----------------------------------
	  // Module methods

	  api.ready = api.design = api.preview = init;

	  api.destroy = function() {
	    menuSibling = $();
	    removeListeners();
	    if ($navbars && $navbars.length) {
	      $navbars.each(teardown);
	    }
	  };

	  // -----------------------------------
	  // Private methods

	  function init() {
	    designer = inApp && Webflow.env('design');
	    $body = $(document.body);

	    // Find all instances on the page
	    $navbars = $doc.find(namespace);
	    if (!$navbars.length) return;
	    $navbars.each(build);

	    // Wire events
	    removeListeners();
	    addListeners();
	  }

	  function removeListeners() {
	    Webflow.resize.off(resizeAll);
	  }

	  function addListeners() {
	    Webflow.resize.on(resizeAll);
	  }

	  function resizeAll() {
	    $navbars.each(resize);
	  }

	  function build(i, el) {
	    var $el = $(el);

	    // Store state in data
	    var data = $.data(el, namespace);
	    if (!data) data = $.data(el, namespace, { open: false, el: $el, config: {} });
	    data.menu = $el.find('.w-nav-menu');
	    data.links = data.menu.find('.w-nav-link');
	    data.dropdowns = data.menu.find('.w-dropdown');
	    data.button = $el.find('.w-nav-button');
	    data.container = $el.find('.w-container');
	    data.outside = outside(data);

	    // Remove old events
	    data.el.off(namespace);
	    data.button.off(namespace);
	    data.menu.off(namespace);

	    // Set config from data attributes
	    configure(data);

	    // Add events based on mode
	    if (designer) {
	      removeOverlay(data);
	      data.el.on('setting' + namespace, handler(data));
	    } else {
	      addOverlay(data);
	      data.button.on('tap' + namespace, toggle(data));
	      data.menu.on('click' + namespace, 'a', navigate(data));
	    }

	    // Trigger initial resize
	    resize(i, el);
	  }

	  function teardown(i, el) {
	    var data = $.data(el, namespace);
	    if (data) {
	      removeOverlay(data);
	      $.removeData(el, namespace);
	    }
	  }

	  function removeOverlay(data) {
	    if (!data.overlay) return;
	    close(data, true);
	    data.overlay.remove();
	    data.overlay = null;
	  }

	  function addOverlay(data) {
	    if (data.overlay) return;
	    data.overlay = $(overlay).appendTo(data.el);
	    data.parent = data.menu.parent();
	    close(data, true);
	  }

	  function configure(data) {
	    var config = {};
	    var old = data.config || {};

	    // Set config options from data attributes
	    var animation = config.animation = data.el.attr('data-animation') || 'default';
	    config.animOver = /^over/.test(animation);
	    config.animDirect = /left$/.test(animation) ? -1 : 1;

	    // Re-open menu if the animation type changed
	    if (old.animation !== animation) {
	      data.open && _.defer(reopen, data);
	    }

	    config.easing = data.el.attr('data-easing') || 'ease';
	    config.easing2 = data.el.attr('data-easing2') || 'ease';

	    var duration = data.el.attr('data-duration');
	    config.duration = duration != null ? Number(duration) : 400;

	    config.docHeight = data.el.attr('data-doc-height');

	    // Store config in data
	    data.config = config;
	  }

	  function handler(data) {
	    return function(evt, options) {
	      options = options || {};
	      var winWidth = $win.width();
	      configure(data);
	      options.open === true && open(data, true);
	      options.open === false && close(data, true);
	      // Reopen if media query changed after setting
	      data.open && _.defer(function() {
	        if (winWidth !== $win.width()) reopen(data);
	      });
	    };
	  }

	  function reopen(data) {
	    if (!data.open) return;
	    close(data, true);
	    open(data, true);
	  }

	  function toggle(data) {
	    // Debounce toggle to wait for accurate open state
	    return _.debounce(function() {
	      data.open ? close(data) : open(data);
	    });
	  }

	  function navigate(data) {
	    return function(evt) {
	      var link = $(this);
	      var href = link.attr('href');

	      // Avoid late clicks on touch devices
	      if (!Webflow.validClick(evt.currentTarget)) {
	        evt.preventDefault();
	        return;
	      }

	      // Close when navigating to an in-page anchor
	      if (href && href.indexOf('#') === 0 && data.open) {
	        close(data);
	      }
	    };
	  }

	  function outside(data) {
	    // Unbind previous tap handler if it exists
	    if (data.outside) $doc.off('tap' + namespace, data.outside);

	    // Close menu when tapped outside, debounced to wait for state
	    return _.debounce(function(evt) {
	      if (!data.open) return;
	      var menu = $(evt.target).closest('.w-nav-menu');
	      if (!data.menu.is(menu)) {
	        close(data);
	      }
	    });
	  }

	  function resize(i, el) {
	    var data = $.data(el, namespace);
	    // Check for collapsed state based on button display
	    var collapsed = data.collapsed = data.button.css('display') !== 'none';
	    // Close menu if button is no longer visible (and not in designer)
	    if (data.open && !collapsed && !designer) close(data, true);
	    // Set max-width of links + dropdowns to match container
	    if (data.container.length) {
	      var updateEachMax = updateMax(data);
	      data.links.each(updateEachMax);
	      data.dropdowns.each(updateEachMax);
	    }
	    // If currently open, update height to match body
	    if (data.open) {
	      setOverlayHeight(data);
	    }
	  }

	  var maxWidth = 'max-width';
	  function updateMax(data) {
	    // Set max-width of each element to match container
	    var containMax = data.container.css(maxWidth);
	    if (containMax === 'none') containMax = '';
	    return function(i, link) {
	      link = $(link);
	      link.css(maxWidth, '');
	      // Don't set the max-width if an upstream value exists
	      if (link.css(maxWidth) === 'none') link.css(maxWidth, containMax);
	    };
	  }

	  function open(data, immediate) {
	    if (data.open) return;
	    data.open = true;
	    data.menu.addClass(menuOpen);
	    data.links.addClass(linkOpen);
	    data.button.addClass(buttonOpen);
	    var config = data.config;
	    var animation = config.animation;
	    if (animation === 'none' || !tram.support.transform) immediate = true;
	    var bodyHeight = setOverlayHeight(data);
	    var menuHeight = data.menu.outerHeight(true);
	    var menuWidth = data.menu.outerWidth(true);
	    var navHeight = data.el.height();
	    var navbarEl = data.el[0];
	    resize(0, navbarEl);
	    ix.intro(0, navbarEl);
	    Webflow.redraw.up();

	    // Listen for tap outside events
	    if (!designer) $doc.on('tap' + namespace, data.outside);

	    // No transition for immediate
	    if (immediate) return;

	    var transConfig = 'transform ' + config.duration + 'ms ' + config.easing;

	    // Add menu to overlay
	    if (data.overlay) {
	      menuSibling = data.menu.prev();
	      data.overlay.show().append(data.menu);
	    }

	    // Over left/right
	    if (config.animOver) {
	      tram(data.menu)
	      .add(transConfig)
	      .set({ x: config.animDirect * menuWidth, height: bodyHeight }).start({ x: 0 });
	      data.overlay && data.overlay.width(menuWidth);
	      return;
	    }

	    // Drop Down
	    var offsetY = navHeight + menuHeight;
	    tram(data.menu)
	      .add(transConfig)
	      .set({ y: -offsetY }).start({ y: 0 });
	  }

	  function setOverlayHeight(data) {
	    var config = data.config;
	    var bodyHeight = config.docHeight ? $doc.height() : $body.height();
	    if (config.animOver) {
	      data.menu.height(bodyHeight);
	    } else if (data.el.css('position') !== 'fixed') {
	      bodyHeight -= data.el.height();
	    }
	    data.overlay && data.overlay.height(bodyHeight);
	    return bodyHeight;
	  }

	  function close(data, immediate) {
	    if (!data.open) return;
	    data.open = false;
	    data.button.removeClass(buttonOpen);
	    var config = data.config;
	    if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) immediate = true;
	    ix.outro(0, data.el[0]);

	    // Stop listening for tap outside events
	    $doc.off('tap' + namespace, data.outside);

	    if (immediate) {
	      tram(data.menu).stop();
	      complete();
	      return;
	    }

	    var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
	    var menuHeight = data.menu.outerHeight(true);
	    var menuWidth = data.menu.outerWidth(true);
	    var navHeight = data.el.height();

	    // Over left/right
	    if (config.animOver) {
	      tram(data.menu)
	        .add(transConfig)
	        .start({ x: menuWidth * config.animDirect }).then(complete);
	      return;
	    }

	    // Drop Down
	    var offsetY = navHeight + menuHeight;
	    tram(data.menu)
	      .add(transConfig)
	      .start({ y: -offsetY }).then(complete);

	    function complete() {
	      data.menu.height('');
	      tram(data.menu).set({ x: 0, y: 0 });
	      data.menu.removeClass(menuOpen);
	      data.links.removeClass(linkOpen);
	      if (data.overlay && data.overlay.children().length) {
	        // Move menu back to parent at the original location
	        menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
	        data.overlay.attr('style', '').hide();
	      }

	      // Trigger event so other components can hook in (dropdown)
	      data.el.triggerHandler('w-close');
	    }
	  }

	  // Export module
	  return api;
	});
	});

	var webflowScroll = __commonjs(function (module) {
	/**
	 * Webflow: Smooth scroll
	 */

	var Webflow = require$$0$1;

	Webflow.define('scroll', module.exports = function($) {
	  var $doc = $(document);
	  var win = window;
	  var loc = win.location;
	  var history = inIframe() ? null : win.history;
	  var validHash = /^[a-zA-Z0-9][\w:.-]*$/;

	  function inIframe() {
	    try {
	      return Boolean(win.frameElement);
	    } catch (e) {
	      return true;
	    }
	  }

	  function ready() {
	    // If hash is already present on page load, scroll to it right away
	    if (loc.hash) {
	      findEl(loc.hash.substring(1));
	    }

	    // The current page url without the hash part.
	    var locHref = loc.href.split('#')[0];

	    // When clicking on a link, check if it links to another part of the page
	    $doc.on('click', 'a', function(e) {
	      if (Webflow.env('design')) {
	        return;
	      }

	      // Ignore links being used by jQuery mobile
	      if (window.$.mobile && $(e.currentTarget).hasClass('ui-link')) return;

	      // Ignore empty # links
	      if (this.getAttribute('href') === '#') {
	        e.preventDefault();
	        return;
	      }

	      // The href property always contains the full url so we can compare
	      // with the document’s location to only target links on this page.
	      var parts = this.href.split('#');
	      var hash = parts[0] === locHref ? parts[1] : null;
	      if (hash) {
	        findEl(hash, e);
	      }
	    });
	  }

	  function findEl(hash, e) {
	    if (!validHash.test(hash)) return;

	    var el = $('#' + hash);
	    if (!el.length) {
	      return;
	    }

	    if (e) {
	      e.preventDefault();
	      e.stopPropagation();
	    }

	    // Push new history state
	    if (
	      loc.hash !== hash &&
	      history && history.pushState &&
	      // Navigation breaks Chrome when the protocol is `file:`.
	      !(Webflow.env.chrome && loc.protocol === 'file:')
	    ) {
	      var oldHash = history.state && history.state.hash;
	      if (oldHash !== hash) {
	        history.pushState({ hash: hash }, '', '#' + hash);
	      }
	    }

	    // If a fixed header exists, offset for the height
	    var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
	    var header = $('header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])');
	    var offset = header.css('position') === 'fixed' ? header.outerHeight() : 0;

	    win.setTimeout(function() {
	      scroll(el, offset);
	    }, e ? 0 : 300);
	  }

	  function scroll(el, offset){
	    var start = $(win).scrollTop();
	    var end = el.offset().top - offset;

	    // If specified, scroll so that the element ends up in the middle of the viewport
	    if (el.data('scroll') === 'mid') {
	      var available = $(win).height() - offset;
	      var elHeight = el.outerHeight();
	      if (elHeight < available) {
	        end -= Math.round((available - elHeight) / 2);
	      }
	    }

	    var mult = 1;

	    // Check for custom time multiplier on the body and the element
	    $('body').add(el).each(function() {
	      var time = parseFloat($(this).attr('data-scroll-time'), 10);
	      if (!isNaN(time) && (time === 0 || time > 0)) {
	        mult = time;
	      }
	    });

	    // Shim for IE8 and below
	    if (!Date.now) {
	      Date.now = function() { return new Date().getTime(); };
	    }

	    var clock = Date.now();
	    var animate = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || function(fn) { win.setTimeout(fn, 15); };
	    var duration = (472.143 * Math.log(Math.abs(start - end) +125) - 2000) * mult;

	    var step = function() {
	      var elapsed = Date.now() - clock;
	      win.scroll(0, getY(start, end, elapsed, duration));

	      if (elapsed <= duration) {
	        animate(step);
	      }
	    };

	    step();
	  }

	  function getY(start, end, elapsed, duration) {
	    if (elapsed > duration) {
	      return end;
	    }

	    return start + (end - start) * ease(elapsed / duration);
	  }

	  function ease(t) {
	    return t<0.5 ? 4 * t * t * t : (t-1) * (2 * t-2) * (2 * t-2)+1;
	  }

	  // Export module
	  return { ready: ready };
	});
	});

	var webflowSlider = __commonjs(function (module) {
	/**
	 * Webflow: Slider component
	 */

	var Webflow = require$$0$1;
	var IXEvents = require$$0$3;

	Webflow.define('slider', module.exports = function($, _) {
	  var api = {};
	  var tram = $.tram;
	  var $doc = $(document);
	  var $sliders;
	  var designer;
	  var inApp = Webflow.env();
	  var namespace = '.w-slider';
	  var dot = '<div class="w-slider-dot" data-wf-ignore />';
	  var ix = IXEvents.triggers;
	  var fallback;
	  var inRedraw;

	  // -----------------------------------
	  // Module methods

	  api.ready = function() {
	    designer = Webflow.env('design');
	    init();
	  };

	  api.design = function() {
	    designer = true;
	    init();
	  };

	  api.preview = function() {
	    designer = false;
	    init();
	  };

	  api.redraw = function() {
	    inRedraw = true;
	    init();
	  };

	  api.destroy = removeListeners;

	  // -----------------------------------
	  // Private methods

	  function init() {
	    // Find all sliders on the page
	    $sliders = $doc.find(namespace);
	    if (!$sliders.length) return;
	    $sliders.filter(':visible').each(build);
	    inRedraw = null;
	    if (fallback) return;

	    removeListeners();
	    addListeners();
	  }

	  function removeListeners() {
	    Webflow.resize.off(renderAll);
	    Webflow.redraw.off(api.redraw);
	  }

	  function addListeners() {
	    Webflow.resize.on(renderAll);
	    Webflow.redraw.on(api.redraw);
	  }

	  function renderAll() {
	    $sliders.filter(':visible').each(render);
	  }

	  function build(i, el) {
	    var $el = $(el);

	    // Store slider state in data
	    var data = $.data(el, namespace);
	    if (!data) {
	      data = $.data(el, namespace, {
	        index: 0,
	        depth: 1,
	        el: $el,
	        config: {}
	      });
	    }
	    data.mask = $el.children('.w-slider-mask');
	    data.left = $el.children('.w-slider-arrow-left');
	    data.right = $el.children('.w-slider-arrow-right');
	    data.nav = $el.children('.w-slider-nav');
	    data.slides = data.mask.children('.w-slide');
	    data.slides.each(ix.reset);
	    if (inRedraw) data.maskWidth = 0;

	    // Disable in old browsers
	    if (!tram.support.transform) {
	      data.left.hide();
	      data.right.hide();
	      data.nav.hide();
	      fallback = true;
	      return;
	    }

	    // Remove old events
	    data.el.off(namespace);
	    data.left.off(namespace);
	    data.right.off(namespace);
	    data.nav.off(namespace);

	    // Set config from data attributes
	    configure(data);

	    // Add events based on mode
	    if (designer) {
	      data.el.on('setting' + namespace, handler(data));
	      stopTimer(data);
	      data.hasTimer = false;
	    } else {
	      data.el.on('swipe' + namespace, handler(data));
	      data.left.on('tap' + namespace, previousFunction(data));
	      data.right.on('tap' + namespace, next(data));

	      // Start timer if autoplay is true, only once
	      if (data.config.autoplay && !data.hasTimer) {
	        data.hasTimer = true;
	        data.timerCount = 1;
	        startTimer(data);
	      }
	    }

	    // Listen to nav events
	    data.nav.on('tap' + namespace, '> div', handler(data));

	    // Remove gaps from formatted html (for inline-blocks)
	    if (!inApp) {
	      data.mask.contents().filter(function() {
	        return this.nodeType === 3;
	      }).remove();
	    }

	    // Run first render
	    render(i, el);
	  }

	  function configure(data) {
	    var config = {};

	    config.crossOver = 0;

	    // Set config options from data attributes
	    config.animation = data.el.attr('data-animation') || 'slide';
	    if (config.animation === 'outin') {
	      config.animation = 'cross';
	      config.crossOver = 0.5;
	    }
	    config.easing = data.el.attr('data-easing') || 'ease';

	    var duration = data.el.attr('data-duration');
	    config.duration = duration != null ? parseInt(duration, 10) : 500;

	    if (isAttrTrue(data.el.attr('data-infinite'))) {
	      config.infinite = true;
	    }

	    if (isAttrTrue(data.el.attr('data-disable-swipe'))) {
	      config.disableSwipe = true;
	    }

	    if (isAttrTrue(data.el.attr('data-hide-arrows'))) {
	      config.hideArrows = true;
	    } else if (data.config.hideArrows) {
	      data.left.show();
	      data.right.show();
	    }

	    if (isAttrTrue(data.el.attr('data-autoplay'))) {
	      config.autoplay = true;
	      config.delay = parseInt(data.el.attr('data-delay'), 10) || 2000;
	      config.timerMax = parseInt(data.el.attr('data-autoplay-limit'), 10);
	      // Disable timer on first touch or mouse down
	      var touchEvents = 'mousedown' + namespace + ' touchstart' + namespace;
	      if (!designer) {
	        data.el.off(touchEvents).one(touchEvents, function() {
	          stopTimer(data);
	        });
	      }
	    }

	    // Use edge buffer to help calculate page count
	    var arrowWidth = data.right.width();
	    config.edge = arrowWidth ? arrowWidth + 40 : 100;

	    // Store config in data
	    data.config = config;
	  }

	  function isAttrTrue(value) {
	    return value === '1' || value === 'true';
	  }

	  function previousFunction(data) {
	    return function() {
	      change(data, { index: data.index - 1, vector: -1 });
	    };
	  }

	  function next(data) {
	    return function() {
	      change(data, { index: data.index + 1, vector: 1 });
	    };
	  }

	  function select(data, value) {
	    // Select page based on slide element index
	    var found = null;
	    if (value === data.slides.length) {
	      init(); layout(data); // Rebuild and find new slides
	    }
	    _.each(data.anchors, function(anchor, index) {
	      $(anchor.els).each(function(i, el) {
	        if ($(el).index() === value) found = index;
	      });
	    });
	    if (found != null) change(data, { index: found, immediate: true });
	  }

	  function startTimer(data) {
	    stopTimer(data);
	    var config = data.config;
	    var timerMax = config.timerMax;
	    if (timerMax && data.timerCount++ > timerMax) return;
	    data.timerId = window.setTimeout(function() {
	      if (data.timerId == null || designer) return;
	      next(data)();
	      startTimer(data);
	    }, config.delay);
	  }

	  function stopTimer(data) {
	    window.clearTimeout(data.timerId);
	    data.timerId = null;
	  }

	  function handler(data) {
	    return function(evt, options) {
	      options = options || {};
	      var config = data.config;

	      // Designer settings
	      if (designer && evt.type === 'setting') {
	        if (options.select === 'prev') return previousFunction(data)();
	        if (options.select === 'next') return next(data)();
	        configure(data);
	        layout(data);
	        if (options.select == null) return;
	        select(data, options.select);
	        return;
	      }

	      // Swipe event
	      if (evt.type === 'swipe') {
	        if (config.disableSwipe) return;
	        if (Webflow.env('editor')) return;
	        if (options.direction === 'left') return next(data)();
	        if (options.direction === 'right') return previousFunction(data)();
	        return;
	      }

	      // Page buttons
	      if (data.nav.has(evt.target).length) {
	        change(data, { index: $(evt.target).index() });
	      }
	    };
	  }

	  function change(data, options) {
	    options = options || {};
	    var config = data.config;
	    var anchors = data.anchors;

	    // Set new index
	    data.previous = data.index;
	    var index = options.index;
	    var shift = {};
	    if (index < 0) {
	      index = anchors.length - 1;
	      if (config.infinite) {
	        // Shift first slide to the end
	        shift.x = -data.endX;
	        shift.from = 0;
	        shift.to = anchors[0].width;
	      }
	    } else if (index >= anchors.length) {
	      index = 0;
	      if (config.infinite) {
	        // Shift last slide to the start
	        shift.x = anchors[anchors.length - 1].width;
	        shift.from = -anchors[anchors.length - 1].x;
	        shift.to = shift.from - shift.x;
	      }
	    }
	    data.index = index;

	    // Select page nav
	    var active = data.nav.children().eq(data.index).addClass('w-active');
	    data.nav.children().not(active).removeClass('w-active');

	    // Hide arrows
	    if (config.hideArrows) {
	      data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
	      data.index === 0 ? data.left.hide() : data.left.show();
	    }

	    // Get page offset from anchors
	    var lastOffsetX = data.offsetX || 0;
	    var offsetX = data.offsetX = -anchors[data.index].x;
	    var resetConfig = { x: offsetX, opacity: 1, visibility: '' };

	    // Transition slides
	    var targets = $(anchors[data.index].els);
	    var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
	    var others = data.slides.not(targets);
	    var animation = config.animation;
	    var easing = config.easing;
	    var duration = Math.round(config.duration);
	    var vector = options.vector || (data.index > data.previous ? 1 : -1);
	    var fadeRule = 'opacity ' + duration + 'ms ' + easing;
	    var slideRule = 'transform ' + duration + 'ms ' + easing;

	    // Trigger IX events
	    if (!designer) {
	      targets.each(ix.intro);
	      others.each(ix.outro);
	    }

	    // Set immediately after layout changes (but not during redraw)
	    if (options.immediate && !inRedraw) {
	      tram(targets).set(resetConfig);
	      resetOthers();
	      return;
	    }

	    // Exit early if index is unchanged
	    if (data.index === data.previous) return;

	    // Cross Fade / Out-In
	    if (animation === 'cross') {
	      var reduced = Math.round(duration - duration * config.crossOver);
	      var wait = Math.round(duration - reduced);
	      fadeRule = 'opacity ' + reduced + 'ms ' + easing;
	      tram(prevTargs)
	        .set({ visibility: '' })
	        .add(fadeRule)
	        .start({ opacity: 0 });
	      tram(targets)
	        .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
	        .add(fadeRule)
	        .wait(wait)
	        .then({ opacity: 1 })
	        .then(resetOthers);
	      return;
	    }

	    // Fade Over
	    if (animation === 'fade') {
	      tram(prevTargs)
	        .set({ visibility: '' })
	        .stop();
	      tram(targets)
	        .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
	        .add(fadeRule)
	        .start({ opacity: 1 })
	        .then(resetOthers);
	      return;
	    }

	    // Slide Over
	    if (animation === 'over') {
	      resetConfig = { x: data.endX };
	      tram(prevTargs)
	        .set({ visibility: '' })
	        .stop();
	      tram(targets)
	        .set({ visibility: '', zIndex: data.depth++, x: offsetX + anchors[data.index].width * vector })
	        .add(slideRule)
	        .start({ x: offsetX })
	        .then(resetOthers);
	      return;
	    }

	    // Slide - infinite scroll
	    if (config.infinite && shift.x) {
	      tram(data.slides.not(prevTargs))
	        .set({ visibility: '', x: shift.x })
	        .add(slideRule)
	        .start({ x: offsetX });
	      tram(prevTargs)
	        .set({ visibility: '', x: shift.from })
	        .add(slideRule)
	        .start({ x: shift.to });
	      data.shifted = prevTargs;

	    } else {
	      if (config.infinite && data.shifted) {
	        tram(data.shifted).set({ visibility: '', x: lastOffsetX });
	        data.shifted = null;
	      }

	      // Slide - basic scroll
	      tram(data.slides)
	        .set({ visibility: '' })
	        .add(slideRule)
	        .start({ x: offsetX });
	    }

	    // Helper to move others out of view
	    function resetOthers() {
	      targets = $(anchors[data.index].els);
	      others = data.slides.not(targets);
	      if (animation !== 'slide') resetConfig.visibility = 'hidden';
	      tram(others).set(resetConfig);
	    }
	  }

	  function render(i, el) {
	    var data = $.data(el, namespace);
	    if (!data) {
	      return;
	    }
	    if (maskChanged(data)) return layout(data);
	    if (designer && slidesChanged(data)) layout(data);
	  }

	  function layout(data) {
	    // Determine page count from width of slides
	    var pages = 1;
	    var offset = 0;
	    var anchor = 0;
	    var width = 0;
	    var maskWidth = data.maskWidth;
	    var threshold = maskWidth - data.config.edge;
	    if (threshold < 0) threshold = 0;
	    data.anchors = [{ els: [], x: 0, width: 0 }];
	    data.slides.each(function(i, el) {
	      if (anchor - offset > threshold) {
	        pages++;
	        offset += maskWidth;
	        // Store page anchor for transition
	        data.anchors[pages - 1] = { els: [], x: anchor, width: 0 };
	      }
	      // Set next anchor using current width + margin
	      width = $(el).outerWidth(true);
	      anchor += width;
	      data.anchors[pages - 1].width += width;
	      data.anchors[pages - 1].els.push(el);
	    });
	    data.endX = anchor;

	    // Build dots if nav exists and needs updating
	    if (designer) data.pages = null;
	    if (data.nav.length && data.pages !== pages){
	      data.pages = pages;
	      buildNav(data);
	    }

	    // Make sure index is still within range and call change handler
	    var index = data.index;
	    if (index >= pages) index = pages - 1;
	    change(data, { immediate: true, index: index });
	  }

	  function buildNav(data) {
	    var dots = [];
	    var $dot;
	    var spacing = data.el.attr('data-nav-spacing');
	    if (spacing) spacing = parseFloat(spacing) + 'px';
	    for (var i = 0; i < data.pages; i++) {
	      $dot = $(dot);
	      if (data.nav.hasClass('w-num')) $dot.text(i + 1);
	      if (spacing != null) {
	        $dot.css({
	          'margin-left': spacing,
	          'margin-right': spacing
	        });
	      }
	      dots.push($dot);
	    }
	    data.nav.empty().append(dots);
	  }

	  function maskChanged(data) {
	    var maskWidth = data.mask.width();
	    if (data.maskWidth !== maskWidth) {
	      data.maskWidth = maskWidth;
	      return true;
	    }
	    return false;
	  }

	  function slidesChanged(data) {
	    var slidesWidth = 0;
	    data.slides.each(function(i, el) {
	      slidesWidth += $(el).outerWidth(true);
	    });
	    if (data.slidesWidth !== slidesWidth) {
	      data.slidesWidth = slidesWidth;
	      return true;
	    }
	    return false;
	  }

	  // Export module
	  return api;
	});
	});

	var webflowTouch = __commonjs(function (module) {
	/**
	 * Webflow: Touch events
	 */

	var Webflow = require$$0$1;

	Webflow.define('touch', module.exports = function($) {
	  var api = {};
	  var fallback = !document.addEventListener;
	  var getSelection = window.getSelection;

	  // Fallback to click events in old IE
	  if (fallback) {
	    $.event.special.tap = { bindType: 'click', delegateType: 'click' };
	  }

	  api.init = function(el) {
	    if (fallback) return null;
	    el = typeof el === 'string' ? $(el).get(0) : el;
	    return el ? new Touch(el) : null;
	  };

	  function Touch(el) {
	    var active = false;
	    var dirty = false;
	    var useTouch = false;
	    var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
	    var startX;
	    var startY;
	    var lastX;

	    el.addEventListener('touchstart', start, false);
	    el.addEventListener('touchmove', move, false);
	    el.addEventListener('touchend', end, false);
	    el.addEventListener('touchcancel', cancel, false);
	    el.addEventListener('mousedown', start, false);
	    el.addEventListener('mousemove', move, false);
	    el.addEventListener('mouseup', end, false);
	    el.addEventListener('mouseout', cancel, false);

	    function start(evt) {
	      // We don’t handle multi-touch events yet.
	      var touches = evt.touches;
	      if (touches && touches.length > 1) {
	        return;
	      }

	      active = true;
	      dirty = false;

	      if (touches) {
	        useTouch = true;
	        startX = touches[0].clientX;
	        startY = touches[0].clientY;
	      } else {
	        startX = evt.clientX;
	        startY = evt.clientY;
	      }

	      lastX = startX;
	    }

	    function move(evt) {
	      if (!active) return;

	      if (useTouch && evt.type === 'mousemove') {
	        evt.preventDefault();
	        evt.stopPropagation();
	        return;
	      }

	      var touches = evt.touches;
	      var x = touches ? touches[0].clientX : evt.clientX;
	      var y = touches ? touches[0].clientY : evt.clientY;

	      var velocityX = x - lastX;
	      lastX = x;

	      // Allow swipes while pointer is down, but prevent them during text selection
	      if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
	        triggerEvent('swipe', evt, { direction: velocityX > 0 ? 'right' : 'left' });
	        cancel();
	      }

	      // If pointer moves more than 10px flag to cancel tap
	      if (Math.abs(x - startX) > 10 || Math.abs(y - startY) > 10) {
	        dirty = true;
	      }
	    }

	    function end(evt) {
	      if (!active) return;
	      active = false;

	      if (useTouch && evt.type === 'mouseup') {
	        evt.preventDefault();
	        evt.stopPropagation();
	        useTouch = false;
	        return;
	      }

	      if (!dirty) triggerEvent('tap', evt);
	    }

	    function cancel() {
	      active = false;
	    }

	    function destroy() {
	      el.removeEventListener('touchstart', start, false);
	      el.removeEventListener('touchmove', move, false);
	      el.removeEventListener('touchend', end, false);
	      el.removeEventListener('touchcancel', cancel, false);
	      el.removeEventListener('mousedown', start, false);
	      el.removeEventListener('mousemove', move, false);
	      el.removeEventListener('mouseup', end, false);
	      el.removeEventListener('mouseout', cancel, false);
	      el = null;
	    }

	    // Public instance methods
	    this.destroy = destroy;
	  }

	  // Wrap native event to supoprt preventdefault + stopPropagation
	  function triggerEvent(type, evt, data) {
	    var newEvent = $.Event(type, { originalEvent: evt });
	    $(evt.target).trigger(newEvent, data);
	  }

	  // Listen for touch events on all nodes by default.
	  api.instance = api.init(document);

	  // Export module
	  return api;
	});
	});

}());

/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
  {"slug":"preloader","name":"Preloader","value":{"style":{"display":"block"},"triggers":[{"type":"load","preload":true,"stepsA":[{"opacity":0,"transition":"opacity 300ms ease 0"},{"display":"none"}],"stepsB":[]}]}},
  {"slug":"page-wrapper-load","name":"Page Wrapper Load","value":{"style":{"opacity":0},"triggers":[{"type":"load","preload":true,"stepsA":[{"wait":"300ms"},{"opacity":1,"transition":"opacity 900ms ease 0"}],"stepsB":[]}]}},
  {"slug":"hide-on-load","name":"Hide on Load","value":{"style":{},"triggers":[{"type":"load","stepsA":[{"display":"none","opacity":0}],"stepsB":[]}]}},
  {"slug":"nav-bar","name":"Nav Bar","value":{"style":{"x":"0px","y":"-100%","z":"0px"},"triggers":[{"type":"load","preload":true,"stepsA":[{"transition":"transform 900ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"logo","name":"Logo","value":{"style":{},"triggers":[{"type":"hover","selector":".logo-line","descend":true,"stepsA":[{"width":"98%","transition":"width 300ms ease 0"}],"stepsB":[{"width":"62%","transition":"width 300ms ease 0"}]}]}},
  {"slug":"fade-up-1","name":"Fade Up 1","value":{"style":{"opacity":0,"x":"0px","y":"60px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"0%","stepsA":[{"opacity":1,"transition":"transform 900ms ease 0, opacity 600ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"fade-up-2","name":"Fade Up 2","value":{"style":{"opacity":0,"x":"0px","y":"60px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"0%","stepsA":[{"wait":"200ms"},{"opacity":1,"transition":"transform 900ms ease 0, opacity 600ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"fade-up-3","name":"Fade Up 3","value":{"style":{"opacity":0,"x":"0px","y":"60px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"0%","stepsA":[{"wait":"400ms"},{"opacity":1,"transition":"transform 900ms ease 0, opacity 600ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"fade-up-4","name":"Fade Up 4","value":{"style":{"opacity":0,"x":"0px","y":"60px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"0%","stepsA":[{"wait":"600ms"},{"opacity":1,"transition":"transform 900ms ease 0, opacity 600ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"fade-left","name":"Fade Left","value":{"style":{"opacity":0,"x":"60px","y":"0px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"0%","stepsA":[{"opacity":1,"transition":"transform 900ms ease 0, opacity 600ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"fade-right","name":"Fade Right","value":{"style":{"opacity":0,"x":"-60px","y":"0px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"0%","stepsA":[{"opacity":1,"transition":"transform 900ms ease 0, opacity 600ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"zoom-on-hover","name":"Zoom On Hover","value":{"style":{},"triggers":[{"type":"hover","stepsA":[{"transition":"transform 300ms ease 0","scaleX":1.06,"scaleY":1.06,"scaleZ":1}],"stepsB":[{"transition":"transform 300ms ease 0","scaleX":1,"scaleY":1,"scaleZ":1}]}]}},
  {"slug":"play-button","name":"Play Button","value":{"style":{"opacity":0,"scaleX":0.5,"scaleY":0.5,"scaleZ":1},"triggers":[{"type":"hover","stepsA":[{"transition":"transform 300ms ease 0","scaleX":1.06,"scaleY":1.06,"scaleZ":1}],"stepsB":[{"transition":"transform 300ms ease 0","scaleX":1,"scaleY":1,"scaleZ":1}]},{"type":"scroll","stepsA":[{"wait":"300ms"},{"opacity":1,"transition":"transform 600ms ease 0, opacity 600ms ease 0","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 300ms ease 0","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
  {"slug":"hero-scroll-arrow","name":"Hero Scroll Arrow","value":{"style":{},"triggers":[{"type":"load","loopA":true,"stepsA":[{"transition":"transform 600ms linear 0","x":"0px","y":"5px","z":"0px"},{"transition":"transform 600ms linear 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"hero-scroll-mouse","name":"Hero Scroll Mouse","value":{"style":{},"triggers":[{"type":"load","selector":".mouse-wheel-icon","descend":true,"loopA":true,"preserve3d":true,"stepsA":[{"opacity":0,"transition":"transform 1500ms ease 0, opacity 1500ms ease 0","x":"0px","y":"14px","z":"0px"},{"opacity":1,"x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"team-member","name":"Team Member","value":{"style":{},"triggers":[{"type":"load","selector":".team-member-links","descend":true,"preserve3d":true,"stepsA":[{"display":"none","opacity":0,"x":"0px","y":"24px","z":"0px"}],"stepsB":[]},{"type":"hover","selector":".team-member-links","descend":true,"preserve3d":true,"stepsA":[{"display":"flex"},{"opacity":1,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[{"opacity":0,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"0px","y":"24px","z":"0px"},{"display":"none"}]}]}},
  {"slug":"team-member-color-card","name":"Team Member Color Card","value":{"style":{},"triggers":[{"type":"hover","selector":".team-member-color-photo","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","x":"40px","y":"-40px","z":"0px"}],"stepsB":[{"transition":"transform 300ms ease 0","x":"40px","y":"0px","z":"0px"}]},{"type":"hover","stepsA":[{"transition":"transform 300ms ease 0","x":"-20px","y":"20px","z":"0px"}],"stepsB":[{"transition":"transform 300ms ease 0","x":"-20px","y":"0px","z":"0px"}]},{"type":"load","selector":".team-member-color-photo","preserve3d":true,"stepsA":[{"x":"40px","y":"0px","z":"0px"}],"stepsB":[]},{"type":"load","stepsA":[{"x":"-20px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"work-card-v2","name":"Work Card v2","value":{"style":{},"triggers":[{"type":"hover","selector":".work-card-v2-info","descend":true,"preserve3d":true,"stepsA":[{"display":"block","opacity":1,"transition":"opacity 300ms ease 0, transform 300ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[{"opacity":0,"transition":"opacity 300ms ease 0, transform 300ms ease 0","x":"0px","y":"20px","z":"0px"},{"display":"none"}]},{"type":"hover","selector":".work-card-v2-image","descend":true,"stepsA":[{"opacity":0.2,"transition":"opacity 300ms ease 0"}],"stepsB":[{"opacity":1,"transition":"opacity 300ms ease 0"}]},{"type":"load","selector":".work-card-v2-info","preserve3d":true,"stepsA":[{"x":"0px","y":"20px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"work-card-v4","name":"Work Card v4","value":{"style":{},"triggers":[{"type":"load","selector":".work-card-v4-info","preserve3d":true,"stepsA":[{"display":"none","opacity":0,"x":"0px","y":"20px","z":"0px"}],"stepsB":[]},{"type":"hover","selector":".work-card-v4-info","descend":true,"preserve3d":true,"stepsA":[{"display":"block","opacity":1,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[{"opacity":0,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"0px","y":"20px","z":"0px"},{"display":"none"}]}]}},
  {"slug":"move-up-on-hover","name":"Move Up on Hover","value":{"style":{},"triggers":[{"type":"hover","stepsA":[{"transition":"transform 300ms ease 0","x":"0px","y":"-4px","z":"0px"}],"stepsB":[{"transition":"transform 300ms ease 0","x":"0px","y":"0px","z":"0px"}]}]}},
  {"slug":"link-arrow","name":"Link Arrow","value":{"style":{},"triggers":[{"type":"hover","selector":".link-arrow-icon","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","x":"4px","y":"0px","z":"0px"}],"stepsB":[{"transition":"transform 300ms ease 0","x":"0px","y":"0px","z":"0px"}]}]}},
  {"slug":"gallery-hover","name":"Gallery Hover","value":{"style":{},"triggers":[{"type":"hover","selector":".gallery-hover","descend":true,"stepsA":[{"opacity":1,"transition":"opacity 300ms ease 0"}],"stepsB":[{"opacity":0,"transition":"opacity 300ms ease 0"}]}]}},
  {"slug":"menu-button","name":"Menu Button","value":{"style":{},"triggers":[{"type":"hover","selector":".menu-top-line","stepsA":[{"width":"100%","transition":"width 300ms ease 0"}],"stepsB":[{"width":"20px","transition":"width 300ms ease 0"}]},{"type":"hover","selector":".menu-bottom-line","stepsA":[{"width":"100%","transition":"width 300ms ease 0"}],"stepsB":[{"width":"12px","transition":"width 300ms ease 0"}]},{"type":"click","selector":".menu-top-line","preserve3d":true,"stepsA":[{"opacity":0,"transition":"opacity 300ms ease 0, transform 300ms ease 0","x":"0px","y":"6px","z":"0px"}],"stepsB":[{"opacity":1,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"0px","y":"0px","z":"0px"}]},{"type":"click","selector":".menu-bottom-line","preserve3d":true,"stepsA":[{"opacity":0,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"0px","y":"-6px","z":"0px"}],"stepsB":[{"opacity":1,"transition":"opacity 300ms ease 0, transform 200 ease 0","x":"0px","y":"0px","z":"0px"}]},{"type":"click","selector":".menu-middle-line-1","preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"45deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]},{"type":"click","selector":".menu-middle-line-2","preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"-45deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},
  {"slug":"show-answer","name":"Show Answer","value":{"style":{},"triggers":[{"type":"click","selector":".answer","descend":true,"stepsA":[{"display":"block","height":"0px"},{"opacity":1,"height":"auto","transition":"height 300ms ease 0, opacity 300ms ease 0"}],"stepsB":[{"opacity":0,"height":"0px","transition":"height 300ms ease 0, opacity 300ms ease 0"}]},{"type":"click","selector":".question-arrow-icon","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"90deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},
  {"slug":"show-popup","name":"Show Popup","value":{"style":{},"triggers":[{"type":"click","selector":".popup-wrapper","stepsA":[{"display":"flex"},{"opacity":1,"transition":"opacity 300ms ease 0"}],"stepsB":[]},{"type":"click","selector":".contact-window","preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
  {"slug":"hide-popup","name":"Hide Popup","value":{"style":{},"triggers":[{"type":"click","selector":".popup-wrapper","stepsA":[{"opacity":0,"transition":"opacity 300ms ease 0"},{"display":"none"}],"stepsB":[]},{"type":"click","selector":".contact-window","preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","scaleX":0.8600000000000001,"scaleY":0.8600000000000001,"scaleZ":1}],"stepsB":[]}]}},
  {"slug":"hide-home-v6-bottom","name":"Hide Home v6 Bottom","value":{"style":{},"triggers":[{"type":"scroll","selector":".hero-promo-bottom","stepsA":[{"opacity":0,"transition":"opacity 300ms ease 0"},{"display":"none"}],"stepsB":[{"display":"flex"},{"opacity":1,"transition":"opacity 300ms ease 0"}]}]}},
  {"slug":"float-subcribe-card","name":"Float Subcribe Card","value":{"style":{"opacity":0,"x":"-60px","y":"0px","z":"0px"},"triggers":[{"type":"load","stepsA":[{"wait":"6000ms"},{"opacity":1,"transition":"transform 600ms ease 0, opacity 300ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
  {"slug":"float-behance-card","name":"Float Behance Card","value":{"style":{},"triggers":[{"type":"load","selector":".float-card","preserve3d":true,"stepsA":[{"opacity":0,"x":"-60px","y":"0px","z":"0px"}],"stepsB":[]},{"type":"scroll","selector":".float-card","offsetTop":"35%","offsetBot":"20%","preserve3d":true,"stepsA":[{"opacity":1,"transition":"transform 600ms ease 0, opacity 300ms ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[{"opacity":0,"transition":"transform 600ms ease 0, opacity 300ms ease 0","x":"-60px","y":"0px","z":"0px"}]}]}},
  {"slug":"close-float-card","name":"Close Float Card","value":{"style":{},"triggers":[{"type":"click","selector":".float-card","preserve3d":true,"stepsA":[{"opacity":0,"transition":"transform 300ms ease 0, opacity 300ms ease 0","x":"-240px","y":"0px","z":"0px"}],"stepsB":[]}]}}
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e-10":{"id":"e-10","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"PAGE","id":"59f3acbd2ce6d6000101d336"},"config":{"loop":false},"createdOn":1509161625981},"e-14":{"id":"e-14","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","id":"59f3acbd2ce6d6000101d336|7e0f7f43-61eb-e9e1-28da-11f966a4b30d"},"config":{"loop":false},"createdOn":1509360952851}},"actionLists":{"a":{"id":"a","title":"To White","actionItemGroups":[{"actionItems":[{"id":"a-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":"59f3acbd2ce6d6000101d336|0275f02e-4d94-aa34-5029-a88e2645ee4c"}}]},{"actionItems":[{"id":"a-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":"59f3acbd2ce6d6000101d336|0275f02e-4d94-aa34-5029-a88e2645ee4c"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":"59f3acbd2ce6d6000101d336|0275f02e-4d94-aa34-5029-a88e2645ee4c","value":1,"unit":""}}]}],"createdOn":1509161134230,"useFirstGroupAsInitialState":true},"a-2":{"id":"a-2","title":"Back to black","actionItemGroups":[{"actionItems":[{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":"59f3acbd2ce6d6000101d336|0275f02e-4d94-aa34-5029-a88e2645ee4c","value":1,"unit":""}}]},{"actionItems":[{"id":"a-2-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":"59f3acbd2ce6d6000101d336|0275f02e-4d94-aa34-5029-a88e2645ee4c"}}]}],"createdOn":1509161250895,"useFirstGroupAsInitialState":false},"a-3":{"id":"a-3","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":"59f3acbd2ce6d6000101d336|0275f02e-4d94-aa34-5029-a88e2645ee4c","value":0,"unit":""}}]}],"createdOn":1509161704193,"useFirstGroupAsInitialState":false},"a-4":{"id":"a-4","title":"To White 2","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":"59f6bf799f4c3500019d5b7a|0275f02e-4d94-aa34-5029-a88e2645ee4c"}}]},{"actionItems":[{"id":"a-4-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":"59f6bf799f4c3500019d5b7a|0275f02e-4d94-aa34-5029-a88e2645ee4c"}}]},{"actionItems":[{"id":"a-4-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":"59f6bf799f4c3500019d5b7a|0275f02e-4d94-aa34-5029-a88e2645ee4c","value":1,"unit":""}}]}],"createdOn":1509161134230,"useFirstGroupAsInitialState":true},"a-5":{"id":"a-5","title":"New Timed Animation 2","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":"59f6bf799f4c3500019d5b7a|0275f02e-4d94-aa34-5029-a88e2645ee4c","value":0,"unit":""}}]}],"createdOn":1509161704193,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);
