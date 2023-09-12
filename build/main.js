(()=>{"use strict";var n,e,t,r,o,i,a,c,s,p,u,l,d,f,h={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),p=new URL(t(682),t.b),u=new URL(t(161),t.b),l=a()(o()),d=s()(p),f=s()(u);l.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    border-style: border-box;\n}\n\nhtml, body{\n    height: 100%;\n    width: 100%;\n}\n\n.backgroundImage{\n   max-width: 100%;\n   height: 1108px;\n   background-image: url(${d});\n   background-size: cover;\n   background-repeat: no-repeat;\n}\n\n.logoContainer{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: center;\n}\n\n.thirdSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F1F1F1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1{\n    text-align: center;\n    font-size: 120px;\n    color: transparent;\n    margin-left: 80px;\n    background-image: url(${f});\n    -webkit-background-clip: text;\n    background-position: 0 0;\n    animation: back 20s linear infinite;\n}\n\n@keyframes back{\n    100%{\n        background-position: 2000px 0;\n    }\n}\n\n.aboutDesc{\n    width: 100%;\n    height: 1108px;\n    background-color: #edf2f6;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.imageHolder1{\n    margin-left: 10px;\n    height: 500px;\n    width: 800px;\n    border: solid 1px black;\n}\n\n.imageHolder2{\n    height: 300px;\n    width: 600px;\n    border: solid 1px black;\n    position: relative;\n    top: 40px;\n    left: -80px;\n}\n\n.firstSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F1F1F1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n}\n\n.imgContainer1, .imgContainer2, .imgContainer3{\n    border: 2px solid black;\n    width: 400px;\n    height: 400px;\n}`,""]);const h=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],u=i[p]||0,l="".concat(p," ").concat(u);i[p]=u+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),p=0;p<i.length;p++){var u=t(i[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},161:(n,e,t)=>{n.exports=t.p+"29f3f4f088aff1055c9b.svg"},682:(n,e,t)=>{n.exports=t.p+"56133043c4f732dfc4cc.jpeg"}},g={};function m(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,m),t.exports}m.m=h,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),i=m.n(o),a=m(565),c=m.n(a),s=m(216),p=m.n(s),u=m(589),l=m.n(u),d=m(426),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();