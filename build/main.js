(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>I});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),p=t.n(c),d=new URL(t(615),t.b),s=new URL(t(684),t.b),l=new URL(t(528),t.b),u=new URL(t(255),t.b),g=new URL(t(423),t.b),f=new URL(t(498),t.b),h=new URL(t(639),t.b),x=new URL(t(709),t.b),m=new URL(t(130),t.b),b=new URL(t(68),t.b),v=a()(o()),y=p()(d),w=p()(s),C=p()(l),k=p()(u),j=p()(g),S=p()(f),L=p()(h),F=p()(x),E=p()(m),z=p()(b);v.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Italiana', serif;\n}\n\nhtml, body{\n    height: 100%;\n    width: 100%;\n}\n\n.heroImage{\n   max-width: 100%;\n   height: 1108px;\n   background-image: url(${y});\n   background-size: cover;\n   background-repeat: no-repeat;\n   display: flex;\n   justify-content: center;\n}\n\n.menuContainer{\n    border-radius: 5px 5px 5px;\n    margin-left: 60px;\n    margin-top: 125px;\n    margin-right: 60px;\n    width: 610px;\n    height: 110px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-image: linear-gradient(to bottom, #D9D9D9, rgba(255,255,255,0));\n}\n\n.flexContainer1, .flexContainer2{\n    margin: 5px;\n    width: 50%;\n    height: 1108px;\n    min-width: 400px;\n}\n\n.listContainer{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 0;\n    font-size: 30px;\n    font-family: 'Italiana', serif;\n    color: white;\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    margin: 20px;\n}\n\nli:hover{\n    text-decoration: underline;\n    position: relative;\n    bottom: 3px;\n}\n\nh1{\n    margin: 10px;\n    text-align: center;\n    color: white;\n}\n\nh2{\n    text-align: center;\n    font-size: 65px;\n    color: #913C1F;\n    font-weight: bold;\n    margin-bottom: 10px;\n\n}\n\nh3{\n    text-align: center;\n    font-size: 65px;\n    color: black;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\nh4{\n    text-align: center;\n    font-size: 40px;\n}\n\nh5, h6{\n    justify-content: center;\n    color: white;\n}\n\nh5{\n    font-size: 45px;\n}\n\nh6{\n    font-size: 35px;\n}\n\n#btn1{\n    width: 258px;\n    height: 70px; \n    background-color: silver;\n    margin: 20px;\n    border-radius: 15px 15px 15px;\n    font-size: 35px;\n    color: #FFD9D9;\n}\n\n#btn1:hover{\n    background-color: transparent;\n    color: white;\n    position: relative;\n    bottom: 5px;\n}\n\n#flexP{\n    width: 400px;\n    margin-top: 10px;\n    margin-left: 40px;\n    display: flex;\n    justify-content: center;\n}\n\n.thirdSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F1F1F1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.leftSide, .rightSide{\n    width: 50%;\n    height: 100%;\n}\n\n.leftSide{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rightSide{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    margin-left: -100px;\n}\n\n.backImageContainer{\n    width: 660px;\n    height: 561px;\n    background-image: url(${w});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    border-radius: 15px 15px 15px;\n}\n\n\n.firstSection{\n    width: 100%;\n    height: 800px;\n    background-color: #f1f0f0;\n    display: flex;\n}\n\n\n.secondSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F0F0F0;\n    display: flex;\n    flex-direction: column;\n}\n\n.container1{\n    width: 100%;\n    height: auto;\n}\n\n.container2{\n    height: 740px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.imageCarrier1, .imageCarrier2, .imageCarrier3{\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.imageCarrier1{\n    width: 100%;\n    height: 100%;\n    background-image: url(${C});\n}\n\n.imageCarrier2{\n    background-image: url(${k});\n    width: 100%;\n    height: 100%;\n}\n\n.imageCarrier3{\n    background-image: url(${j});\n    width: 100%;\n    height: 100%;\n}\n\nfigcaption{\n    text-align: center;\n    margin: 10px;\n}\n\n.overLayContainer{\n    height: 80%;\n    width: 80%;\n    border-style: border-box;\n    border: 2px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.frontImageCaption{\n    background-image: linear-gradient(to bottom, silver, rgba(255,255,255,0));\n    height: 300px;\n    width: 450px;\n    border-radius: 15px 15px 15px;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    align-content: flex-start;\n}\n\n.thirdSection{\n    width: 100%;\n    height: 600px;\n    background-color: #F1F1F1;\n    align-items: flex-end;\n}\n\n.imageAndCaptionFlex{\n    width: 80%;\n    height: 80%;\n\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.sect3Image{\n    width: 50%;\n    height: 50%;\n    background-image: url(${S});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-radius: 15px 15px 15px;\n}\n\np{\n    min-width: 200px;\n}\n\n.footerSection{\n    height: 397px;\n    width: 100%;\n    background-image: url(${L});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n\n    display: flex;\n    justify-content: center;\n}\n\n.inputContainers, .logoContainers, .websiteFooterLogo{\n    width: 600px;\n    height: 100%;\n}\n\n.inputContainers{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.footerHeaderContainer, .inputFeildContainer, .footerButtonContainer{\n    width: 90%;\n    height: 85%;\n}\n\n.footerButtonContainer{\n    margin-top: 10px;\n    display: flex;\n    justify-content: flex-start;\n}\n\n.inputFeildContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n}\n\n.footerHeaderContainer{\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput{\n    width: 300px;\n    height: 40px;\n    margin-left: 10px;\n    padding: 5px;\n}\n\n.footerButton{\n    width: 144px;\n    height: 38px;\n    margin-left: 10px;\n    background-color: #D9D9D9;\n    font-size: 25px;\n    font-weight: bolder;\n    color: black;\n}\n\n.footerButton:hover{\n    background-color: transparent;\n    color: white;\n    position: relative;\n    bottom: 2px;\n}\n\n.logoContainers{\n    display: flex;\n    justify-content: center;\n}\n\n.gitHubContainer{\n    height: 124px;\n    width: 159px;\n    background-image: url(${F});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.igContainer{\n    height: 124px;\n    width: 159px;\n    background-image: url(${E});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.gitHubContainer:hover, .igContainer:hover{\n    position:relative;\n    bottom: 5px;\n    height: 144px;\n    width: 179px;\n}\n\n.websiteFooterLogo{\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-start;\n}\n\n.finalContainer{\n    width: 326px;\n    height: 286px;\n    background-image: url(${z});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}`,""]);const I=v},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(a[p]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var p=n[c],d=r.base?p[0]+r.base:p[0],s=i[d]||0,l="".concat(d," ").concat(s);i[d]=s+1;var u=t(l),g={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=o(g,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var p=r(n,o),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},498:(n,e,t)=>{n.exports=t.p+"d03d0a7f5eb2e1e3bf99.jpg"},528:(n,e,t)=>{n.exports=t.p+"c48e6d38488ddd102958.jpg"},639:(n,e,t)=>{n.exports=t.p+"24a47dd17efcf5c2af39.png"},255:(n,e,t)=>{n.exports=t.p+"fe91b20cdabd6db6b8e7.jpg"},615:(n,e,t)=>{n.exports=t.p+"aa6e151659f78ae1e887.jpg"},68:(n,e,t)=>{n.exports=t.p+"5c7126d007a12c6cc893.svg"},684:(n,e,t)=>{n.exports=t.p+"f277deea8da1c167194e.jpg"},423:(n,e,t)=>{n.exports=t.p+"e5bcef80d307c12587ca.jpg"},709:(n,e,t)=>{n.exports=t.p+"9512694399616d888b6f.svg"},130:(n,e,t)=>{n.exports=t.p+"2f9611c840521dbfd8c6.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),p=t.n(c),d=t(216),s=t.n(d),l=t(589),u=t.n(l),g=t(426),f={};let h;f.styleTagTransform=u(),f.setAttributes=p(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;(async()=>{await new Promise((n=>{window.document.addEventListener("DOMContentLoaded",(function(){console.log("DOM Content Loaded"),h=!0,n(!0)}))}))&&(console.log("Inside If Statement"),(()=>{const n=document.getElementById("content"),e=["heroImage","firstSection","secondSection","thirdSection","footerSection"],t=[];for(let n=0;n<e.length;n++){const r=document.createElement("div");r.classList.add(e[n]),t.push(r)}t.forEach((e=>{n.appendChild(e)})),(n=>{let e=["Home","About Us","Menu","Reservations"],t=["flexContainer1","flexContainer2"];const r=document.createElement("img");r.src="./assets/logoTest1.svg",r.alt="Logo";let o=document.createElement("div");o.classList.add(t[0]),o.appendChild(r);let i=document.createElement(t[1]),a=document.createElement("menuContainer"),c=document.createElement("listContainer");for(let n=0;n<4;n++){let t=document.createElement("li"),r=document.createElement("a");r.innerHTML=`${e[n]}`,t.appendChild(r),c.appendChild(t)}a.appendChild(c),i.appendChild(a),n.appendChild(o),n.appendChild(i)})(t[0])})())})()})()})();