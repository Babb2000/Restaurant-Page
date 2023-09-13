(()=>{"use strict";var n,e,t,r,o,i,a,c,s,p,l,u,d,f,g={426:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),p=new URL(t(615),t.b),l=new URL(t(684),t.b),u=a()(o()),d=s()(p),f=s()(l);u.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    border-style: border-box;\n}\n\nhtml, body{\n    height: 100%;\n    width: 100%;\n}\n\n.backgroundImage{\n   max-width: 100%;\n   height: 1108px;\n   background-image: url(${d});\n   background-size: cover;\n   background-repeat: no-repeat;\n}\n\n.logoContainer{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: flex-start;\n}\n\n.thirdSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F1F1F1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.aboutDesc{\n    width: 100%;\n    height: 1108px;\n    background-color: #edf2f6;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.imageHolder1{\n    margin-left: 10px;\n    height: 500px;\n    width: 800px;\n    border: solid 1px black;\n}\n\n.imageHolder2{\n    height: 300px;\n    width: 600px;\n    position: relative;\n    top: 40px;\n    left: -80px;\n}\n\n.firstSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F1F1F1;\n\n    /* display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 40px; */\n}\n\n.headerContainer{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: center;\n\n}\n\n.galleryContainer{\n    width: 100%;\n    height: 700px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.secondSection{\n    width: 100%;\n    height: 600px;\n    background-image: url(${f});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n\n}\n\np{\n    background-color: rgb(0,0,0,0.4);\n    color: white;\n    font-size: 2rem;\n}\n.imgContainer1, .imgContainer2, .imgContainer3{\n    width: 400px;\n    height: 400px;\n    margin-top: 10px;\n    margin-bottom: 30px;\n}\n\n\n.imgContainer1 img, .imgContainer2 img, .imgContainer3 img{\n    height: 100%;\n    width: 100%;\n}\n\n\n.imgCapHeader{\n   margin-top: 10px;\n    color: #953611;\n    text-align: center;\n    font-family: sans-serif;\n}\n\n.imgCapSub{\n    margin-top: 10px;\n    color: gray;\n    font-family: sans-serif;\n    font-size: 12px;\n    text-align: center;\n}\n\n.imgHeader{\n    color: #953611;\n    align-self: flex-start;\n    font-family:'Playfair Display', serif;\n    margin-top: 60px;\n    text-decoration: underline;\n}\n\n.containerDiv{\n    display: flex;\n    margin-top: 10px;\n}\n\n.item{\n    width: 100%;\n    height: auto;\n    border: 1px solid black;\n}\n.item .number2{\n    width: 300px;\n}\n\n.containerDiv3{\n    height: 400px;\n}\n\n.item .number3{\n    border: 1px solid black;\n    height: auto;\n    display: flex;\n    justify-content: center;\n}\n\nh2{\n    color: white;\n    font-size: 50px;\n    font-weight: 900;\n    background-color: rgb(0,0,0,0.4);\n    text-decoration: underline;\n\n}\n\n.buttonCont{\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton{\n    border-radius: 12rem;\n    padding: 8px 24px;\n    cursor: pointer;\n    color: rgba(0,0,0,.3);\n    white-space: nowrap;\n    font-size: 2rem;\n    position: absoulte;\n\n}\n\n`,""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},615:(n,e,t)=>{n.exports=t.p+"aa6e151659f78ae1e887.jpg"},684:(n,e,t)=>{n.exports=t.p+"f277deea8da1c167194e.jpg"}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return g[n](t,t.exports,m),t.exports}m.m=g,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),i=m.n(o),a=m(565),c=m.n(a),s=m(216),p=m.n(s),l=m(589),u=m.n(l),d=m(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();