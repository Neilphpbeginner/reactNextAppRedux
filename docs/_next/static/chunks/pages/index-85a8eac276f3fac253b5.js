_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{Qetd:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"index",(function(){return O}));var r=t("nKUr"),a=t("q1tI"),o=t.n(a);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var s=t("TSYQ"),c=t.n(s),l=o.a.createContext({});l.Consumer,l.Provider;function f(e,n){var t=Object(a.useContext)(l);return e||t[n]||n}var p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)};function d(e){return!e||"#"===e.trim()}var b=o.a.forwardRef((function(e,n){var t=e.as,r=void 0===t?"a":t,a=e.disabled,s=e.onKeyDown,c=u(e,["as","disabled","onKeyDown"]),l=function(e){var n=c.href,t=c.onClick;(a||d(n))&&e.preventDefault(),a?e.stopPropagation():t&&t(e)};return d(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),a&&(c.tabIndex=-1,c["aria-disabled"]=!0),o.a.createElement(r,i({ref:n},c,{onClick:l,onKeyDown:p((function(e){" "===e.key&&(e.preventDefault(),l(e))}),s)}))}));b.displayName="SafeAnchor";var v=b,h=o.a.forwardRef((function(e,n){var t=e.bsPrefix,r=e.variant,a=e.size,s=e.active,l=e.className,p=e.block,d=e.type,b=e.as,h=u(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=f(t,"btn"),m=c()(l,y,s&&"active",r&&y+"-"+r,p&&y+"-block",a&&y+"-"+a);if(h.href)return o.a.createElement(v,i({},h,{as:b,ref:n,className:c()(m,h.disabled&&"disabled")}));n&&(h.ref=n),d?h.type=d:b||(h.type="button");var j=b||"button";return o.a.createElement(j,i({},h,{className:m}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var y=h,m=t("f0YE"),j=t.n(m),w=t("/MKj"),x=t("B5Kv"),O=function(e){return Object(r.jsxs)("div",{className:j.a.home,children:[Object(r.jsx)("h1",{children:e.number}),Object(r.jsxs)("div",{className:j.a.homeButtons,children:[Object(r.jsx)(y,{className:"buttonSpacing",onClick:e.addOneToCounterProps,children:"Add"}),Object(r.jsx)(y,{className:"buttonSpacing",onClick:e.subtractOneFromCounter,children:"Subtract"}),Object(r.jsx)(y,{className:"buttonSpacing",onClick:e.resetCounter,children:"Reset"})]})]})},N={addOneToCounterProps:function(e){return{type:x.a}},subtractOneFromCounter:function(e){return{type:x.c}},resetCounter:function(e){return{type:x.b}}};n.default=Object(w.b)((function(e){return{number:e}}),N)(O)},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},f0YE:function(e,n,t){e.exports={home:"app_home__2F6fP",homeButtons:"app_homeButtons__7ewoL"}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2]]]);