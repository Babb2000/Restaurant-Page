(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>M});var i=t(81),a=t.n(i),o=t(645),r=t.n(o),d=t(667),c=t.n(d),l=new URL(t(615),t.b),s=new URL(t(684),t.b),p=new URL(t(528),t.b),u=new URL(t(255),t.b),h=new URL(t(423),t.b),m=new URL(t(498),t.b),g=new URL(t(639),t.b),f=new URL(t(709),t.b),x=new URL(t(130),t.b),b=new URL(t(68),t.b),C=r()(a()),v=c()(l),y=c()(s),w=c()(p),k=c()(u),E=c()(h),L=c()(m),S=c()(g),T=c()(f),j=c()(x),F=c()(b);C.push([e.id,`*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Italiana', serif;\n}\n\nhtml, body{\n    height: 100%;\n    width: 100%;\n}\n\n.heroImage{\n   max-width: 100%;\n   height: 1108px;\n   background-image: url(${v});\n   background-size: cover;\n   background-repeat: no-repeat;\n   display: flex;\n   justify-content: center;\n}\n\n.menuContainer{\n    border-radius: 5px 5px 5px;\n    margin-left: 60px;\n    margin-top: 125px;\n    margin-right: 60px;\n    width: 610px;\n    height: 110px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-image: linear-gradient(to bottom, #D9D9D9, rgba(255,255,255,0));\n}\n\n.flexContainer1, .flexContainer2{\n    margin: 5px;\n    width: 50%;\n    height: 1108px;\n    min-width: 400px;\n}\n\n.listContainer{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 0;\n    font-size: 30px;\n    font-family: 'Italiana', serif;\n    color: white;\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    margin: 20px;\n}\n\nli:hover{\n    text-decoration: underline;\n    position: relative;\n    bottom: 3px;\n}\n\nh1{\n    margin: 10px;\n    text-align: center;\n    color: white;\n}\n\nh2{\n    text-align: center;\n    font-size: 65px;\n    color: #913C1F;\n    font-weight: bold;\n    margin-bottom: 10px;\n\n}\n\nh3{\n    text-align: center;\n    font-size: 65px;\n    color: black;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\nh4{\n    text-align: center;\n    font-size: 40px;\n}\n\nh5, h6{\n    justify-content: center;\n    color: white;\n}\n\nh5{\n    font-size: 45px;\n}\n\nh6{\n    font-size: 35px;\n}\n\n#btn1{\n    width: 258px;\n    height: 70px; \n    background-color: silver;\n    margin: 20px;\n    border-radius: 15px 15px 15px;\n    font-size: 35px;\n    color: #FFD9D9;\n}\n\n#btn1:hover{\n    background-color: transparent;\n    color: white;\n    position: relative;\n    bottom: 5px;\n}\n\n#flexP{\n    width: 400px;\n    margin-top: 10px;\n    margin-left: 40px;\n    display: flex;\n    justify-content: center;\n}\n\n.thirdSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F1F1F1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.leftSide, .rightSide{\n    width: 50%;\n    height: 100%;\n}\n\n.leftSide{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rightSide{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    margin-left: -100px;\n}\n\n.backImageContainer{\n    width: 660px;\n    height: 561px;\n    background-image: url(${y});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    border-radius: 15px 15px 15px;\n}\n\n\n.firstSection{\n    width: 100%;\n    height: 800px;\n    background-color: #f1f0f0;\n    display: flex;\n}\n\n\n.secondSection{\n    width: 100%;\n    height: 800px;\n    background-color: #F0F0F0;\n    display: flex;\n    flex-direction: column;\n}\n\n.container1{\n    width: 100%;\n    height: auto;\n}\n\n.container2{\n    height: 740px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.imageCarrier1, .imageCarrier2, .imageCarrier3{\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.imageCarrier1{\n    width: 100%;\n    height: 100%;\n    background-image: url(${w});\n}\n\n.imageCarrier2{\n    background-image: url(${k});\n    width: 100%;\n    height: 100%;\n}\n\n.imageCarrier3{\n    background-image: url(${E});\n    width: 100%;\n    height: 100%;\n}\n\nfigcaption{\n    text-align: center;\n    margin: 10px;\n}\n\n.overLayContainer{\n    height: 80%;\n    width: 80%;\n    border-style: border-box;\n    border: 2px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.frontImageCaption{\n    background-image: linear-gradient(to bottom, silver, rgba(255,255,255,0));\n    height: 300px;\n    width: 450px;\n    border-radius: 15px 15px 15px;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    align-content: flex-start;\n}\n\n.thirdSection{\n    width: 100%;\n    height: 600px;\n    background-color: #F1F1F1;\n    align-items: flex-end;\n}\n\n.imageAndCaptionFlex{\n    width: 80%;\n    height: 80%;\n\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.sect3Image{\n    width: 50%;\n    height: 50%;\n    background-image: url(${L});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-radius: 15px 15px 15px;\n}\n\np{\n    min-width: 200px;\n}\n\n.footerSection{\n    height: 397px;\n    width: 100%;\n    background-image: url(${S});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n\n    display: flex;\n    justify-content: center;\n}\n\n.inputContainers, .logoContainers, .websiteFooterLogo{\n    width: 600px;\n    height: 100%;\n}\n\n.inputContainers{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.footerHeaderContainer, .inputFeildContainer, .footerButtonContainer{\n    width: 90%;\n    height: 85%;\n}\n\n.footerButtonContainer{\n    margin-top: 10px;\n    display: flex;\n    justify-content: flex-start;\n}\n\n.inputFeildContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n}\n\n.footerHeaderContainer{\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput{\n    width: 300px;\n    height: 40px;\n    margin-left: 10px;\n    padding: 5px;\n}\n\n.footerButton{\n    width: 144px;\n    height: 38px;\n    margin-left: 10px;\n    background-color: #D9D9D9;\n    font-size: 25px;\n    font-weight: bolder;\n    color: black;\n}\n\n.footerButton:hover{\n    background-color: transparent;\n    color: white;\n    position: relative;\n    bottom: 2px;\n}\n\n.logoContainers{\n    display: flex;\n    justify-content: center;\n}\n\n.gitHubContainer{\n    height: 124px;\n    width: 159px;\n    background-image: url(${T});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.igContainer{\n    height: 124px;\n    width: 159px;\n    background-image: url(${j});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.gitHubContainer:hover, .igContainer:hover{\n    position:relative;\n    bottom: 5px;\n    height: 144px;\n    width: 179px;\n}\n\n.websiteFooterLogo{\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-start;\n}\n\n.finalContainer{\n    width: 326px;\n    height: 286px;\n    background-image: url(${F});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}`,""]);const M=C},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&r[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},r=[],d=0;d<e.length;d++){var c=e[d],l=i.base?c[0]+i.base:c[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=a(h,i);i.byIndex=d,n.splice(d,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var d=t(o[r]);n[d].references--}for(var c=i(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},498:(e,n,t)=>{e.exports=t.p+"d03d0a7f5eb2e1e3bf99.jpg"},528:(e,n,t)=>{e.exports=t.p+"c48e6d38488ddd102958.jpg"},639:(e,n,t)=>{e.exports=t.p+"24a47dd17efcf5c2af39.png"},255:(e,n,t)=>{e.exports=t.p+"fe91b20cdabd6db6b8e7.jpg"},615:(e,n,t)=>{e.exports=t.p+"aa6e151659f78ae1e887.jpg"},68:(e,n,t)=>{e.exports=t.p+"5c7126d007a12c6cc893.svg"},684:(e,n,t)=>{e.exports=t.p+"f277deea8da1c167194e.jpg"},423:(e,n,t)=>{e.exports=t.p+"e5bcef80d307c12587ca.jpg"},709:(e,n,t)=>{e.exports=t.p+"9512694399616d888b6f.svg"},130:(e,n,t)=>{e.exports=t.p+"2f9611c840521dbfd8c6.svg"}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&!e;)e=i[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),a=t.n(i),o=t(569),r=t.n(o),d=t(565),c=t.n(d),l=t(216),s=t.n(l),p=t(589),u=t.n(p),h=t(426),m={};let g;m.styleTagTransform=u(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=s(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;(async()=>{await new Promise((e=>{window.document.addEventListener("DOMContentLoaded",(function(){console.log("DOM Content Loaded"),g=!0,e(!0)}))}))&&((()=>{const e=document.getElementById("content"),n=["heroImage","firstSection","secondSection","thirdSection","footerSection"],t=[];for(let e=0;e<n.length;e++){const i=document.createElement("div");i.classList.add(n[e]),t.push(i)}t.forEach((n=>{e.appendChild(n)})),(e=>{let n=["Home","About Us","Menu","Reservations"],t=["flexContainer1","flexContainer2"];const i=document.createElement("img");i.src="./assets/logoTest1.svg",i.alt="Logo";let a=document.createElement("div");a.classList.add(t[0]),a.appendChild(i);let o=document.createElement("div");o.classList.add(t[1]);let r=document.createElement("div");r.classList.add("menuContainer");let d=document.createElement("div");d.classList.add("listContainer"),d.style.listStyleType="none";for(let e=0;e<4;e++){let t=document.createElement("li"),i=document.createElement("a");i.innerHTML=`${n[e]}`,t.appendChild(i),d.appendChild(t)}r.appendChild(d),o.appendChild(r),e.appendChild(a),e.appendChild(o)})(t[0]),(e=>{let n=document.createElement("div");n.classList.add("leftSide");let t=document.createElement("div");t.classList.add("backImageContainer"),n.appendChild(t);let i=document.createElement("div");i.classList.add("rightSide");let a=document.createElement("div");a.classList.add("frontImageCaption");let o=document.createElement("h1");o.innerHTML="Enjoy a luxurious dining experience";let r=document.createElement("button");r.setAttribute("id","btn1");let d=document.createTextNode("Reserve");r.appendChild(d),a.appendChild(o),a.appendChild(r),i.appendChild(a),e.appendChild(n),e.appendChild(i)})(t[1]),(e=>{let n=document.createElement("div");n.classList.add("container1");let t=document.createElement("h2"),i=document.createTextNode("Signature Dishes");t.appendChild(i),n.appendChild(t);let a=document.createElement("div");a.classList.add("container2");let o=document.createElement("figure");o.classList.add("imageCarrier1");let r=document.createElement("figcaption"),d=document.createTextNode("Fettucine Alfredo Pasta");r.appendChild(d),o.appendChild(r);let c=document.createElement("figure");c.classList.add("imageCarrier2");let l=document.createElement("figcaption"),s=document.createTextNode("Baby Basil Pasta");l.appendChild(s),c.appendChild(l);let p=document.createElement("figure");p.classList.add("imageCarrier3");let u=document.createElement("figcaption"),h=document.createTextNode("House Salad");u.appendChild(h),p.appendChild(u),a.appendChild(o),a.appendChild(c),a.appendChild(p),e.appendChild(n),e.appendChild(a)})(t[2]),(e=>{let n=document.createElement("div");n.classList.add("imageAndCaptionFlex");let t=document.createElement("div");t.classList.add("sect3Image");let i=document.createElement("div");i.classList.add("sect3Header");let a=document.createTextNode("1810 Pompeii Oven"),o=document.createTextNode("Wood-Fire Flavored"),r=document.createTextNode("Here at Good Taste we house a one of a kind brick oven located in the back of the kitchen. This beauty dishes out carmelized, crisp, wood-flavored, melted goodness. The high cooking temperatures allows for quick cooking times and imparts a desirable crust and char for a variety of dishes."),d=document.createElement("h3");d.appendChild(a);let c=document.createElement("h4");c.appendChild(o);let l=document.createElement("p");l.setAttribute("id","flexP"),l.appendChild(r),i.appendChild(d),i.appendChild(c),i.appendChild(l),n.appendChild(t),n.appendChild(i),e.appendChild(n)})(t[3]),(e=>{let n=document.createElement("div");n.classList.add("inputContainers");let t=document.createElement("div");t.classList.add("footerHeaderContainer");let i=document.createElement("h5"),a=document.createTextNode("Contact Us");i.appendChild(a);let o=document.createElement("h6"),r=document.createTextNode("Send Us A Message");o.appendChild(r),t.appendChild(i),t.appendChild(o),n.appendChild(t);let d=document.createElement("div");d.classList.add("inputFeildContainer");let c=document.createElement("input");c.type="text",c.placeholder="Name: ";let l=document.createElement("input");l.type="email",l.placeholder="babbwebdev@gmail.com";let s=document.createElement("input");s.setAttribute("id","yourMessage"),s.type="text",s.placeholder="Your Message",d.appendChild(c),d.appendChild(l),d.appendChild(s),n.appendChild(d);let p=document.createElement("div");p.classList.add("footerButtonContainer");let u=document.createElement("button");u.classList.add("footerButton");let h=document.createTextNode("Submit");u.appendChild(h),p.appendChild(u),n.appendChild(p);let m=document.createElement("div");m.classList.add("logoContainers");let g=document.createElement("div");g.classList.add("logoContainers");let f=document.createElement("div");f.classList.add("gitHubContainer");let x=document.createElement("div");x.classList.add("igContainer"),g.appendChild(f),g.appendChild(x),m.appendChild(g);let b=document.createElement("div");b.classList.add("websiteFooterLogo");let C=document.createElement("div");C.classList.add("finalContainer"),b.appendChild(C),e.appendChild(n),e.appendChild(m),e.appendChild(b)})(t[4])})(),(()=>{const e=document.getElementById("content"),n=document.querySelector(".listContainer");n&&n.querySelectorAll("li a").forEach((n=>{n.addEventListener("click",(function(t){console.log(n);let i=n.textContent;switch(console.log(i),i){case"Home":e.innerHTML=" ";break;case"About Us":alert("You are being redirected to the About Us Page");break;case"Menu":alert("You are being redirected to the Menu Page");break;case"Reservations":alert("You are being redirected to the Reservations Page")}}))}))})())})()})()})();