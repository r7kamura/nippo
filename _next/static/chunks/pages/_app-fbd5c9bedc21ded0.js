(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1357)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),c=r(880),l=r(9246);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=i.default.useRef(d),y=i.default.useRef(p),v=e.children,m=e.replace,g=e.shallow,b=e.scroll,x=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var w=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,j=o(l.useIntersection({rootMargin:"200px"}),3),k=j[0],E=j[1],T=j[2],O=i.default.useCallback((function(e){y.current===p&&h.current===d||(T(),y.current=p,h.current=d),k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[p,w,d,T,k]);i.default.useEffect((function(){var e=E&&r&&u.isLocalURL(d),t="undefined"!==typeof x?x:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,E,x,r,n]);var _={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,p,m,g,b,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof x?x:n&&n.locale,S=n&&n.isLocaleDomain&&u.getDomainLocale(p,L,n&&n.locales,n&&n.domainLocales);_.href=S||u.addBasePath(u.addLocale(p,L,n&&n.defaultLocale))}return i.default.cloneElement(t,_)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(t?t.current:null),2),y=h[0],v=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[m,d,g]};var a=r(7294),i=r(4686),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1357:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),o=(r(7039),r(9533),r(9008)),a=r(1664),i=r.n(a),u=r(9799),c="r7kamura/diary";function l(e){var t=e.children;return(0,n.jsxs)("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-gray-100",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:c}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"".concat(u.basePath,"/feed.xml")})]}),(0,n.jsx)("header",{className:"container mx-auto max-w-2xl px-8 py-12",children:(0,n.jsx)("nav",{children:(0,n.jsx)("p",{children:(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("a",{className:"font-bold text-gray-900 visited:text-gray-900 dark:text-gray-300 dark:visited:text-gray-300",children:c})})})})}),(0,n.jsx)("main",{className:"container mx-auto max-w-2xl px-8 py-12 shadow-md bg-white dark:bg-gray-900",children:t}),(0,n.jsx)("footer",{className:"container mx-auto max-w-2xl px-8 py-12 text-sm",children:(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"flex flex-row gap-6 justify-center",children:[{url:"/",text:"Home"},{url:"/feed.xml",text:"RSS"},{url:"https://github.com/r7kamura/diary",text:"Code"}].map((function(e){var t=e.text,r=e.url;return(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:r,children:(0,n.jsx)("a",{className:"text-gray-900 visited:text-gray-900 dark:text-gray-300 dark:visited:text-gray-300",children:t})})},r)}))})})})]})}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}var d=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(l,{children:(0,n.jsx)(t,s({},r))})}},9799:function(e,t,r){"use strict";var n=r(3454),o="/diary";e.exports={basePath:o,siteBaseUrl:n.env.BASE_URL||"https://r7kamura.github.io".concat(o)}},7039:function(){},9533:function(){},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function s(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=i(s);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(162);e.exports=o}()},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(880)}));var r=e.O();_N_E=r}]);