!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(h,t),d?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=b();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?y(e):(i=o=void 0,a)}function T(){var e=b(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:w(b())},T}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var S,O=document.querySelector(".feedback-form"),h=document.querySelector('input[name="email"]'),w=document.querySelector('textarea[name="message"]'),T={};O.addEventListener("input",e(t)((function(){T={email:h.value,message:w.value},localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),(S=JSON.parse(localStorage.getItem("feedback-form-state")))&&(h.value=S.email,w.value=S.message),O.addEventListener("submit",(function(e){e.preventDefault(),""!==h.value.trim()&&""!==w.value.trim()&&(O.reset(),localStorage.removeItem("feedback-form-state"))}))}();
//# sourceMappingURL=03-feedback.36f1b4a7.js.map
