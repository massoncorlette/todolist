(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),d=t.n(c),s=new URL(t(529),t.b),l=a()(o()),p=d()(s);l.push([n.id,`* {\n  border: 0px solid red;\n}\n\n:root {\n  --primary-color: rgb(0, 163, 163);\n  --secondary-color: #cccaca;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(20, 5%);\n  grid-template-rows: repeat(10, 10%);\n  font-family: "Inter", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 900;\n  font-style: normal;\n  font-variation-settings: "slnt" 0;\n}\n\n\nh1 {\n  font-size: 42px;\n  letter-spacing: -0.075em;\n  display: flex;\n  font-weight: bolder;\n}\n\np {\n  font-size: 20px;\n}\n\ni {\n  color: rgba(0, 0, 0, 0.5)\n}\n\n#break-line {\n  display: flex;\n  height: 1px;\n  width: 100%;\n  background-color: #2196F3 !important; /* Ensure background color is set */\n  grid-column: span 21;\n  grid-row: 21;\n  align-self: flex-end; \n}\n\n#header-container {\n  display: grid;\n  flex-direction: column;\n  align-items: center;\n  grid-row: 1 / 2;\n  grid-column: 1 / 21;\n  grid-template-columns: repeat(20, 1fr);\n  grid-template-rows: repeat(20,1fr);\n}\n\n.sidebar-container {\n  display: grid;\n  flex-direction: column;\n  flex: 1;\n  grid-row: 2 / 11;\n  grid-column: 1 / 4;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(20,1fr);\n  min-width: 190px;\n\n}\n\n#h2, #h3 {\n  font-size:30px;\n  font-style: italic;\n  height: 80px;\n  background-color: antiquewhite;\n  grid-column: span 11;\n}\n\n#h2 {\n  grid-row: 1/3;\n}\n\n#h3 {\n  grid-row:11/13;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.home-container {\n  grid-row: 3/10;\n}\n\n#project-container {\n  grid-row: 13/21;\n  \n}\n\n#project-container, .home-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1%;\n  margin-top: 3%;\n  grid-column: 1/11;\n}\n\n#add-container {\n  display: flex;\n  gap: 10%;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  transition: background-color 0.3s ease;\n}\n\n#add-container:hover {\n  background-color: var(--primary-color);\n  cursor: pointer;\n}\n\n#add-btn {\n  width: 35px;\n  height: 35px;\n  background-image: url(${p});\n  cursor: pointer;\n}\n\n\n#sidebar-icon {\n  position: absolute;\n  margin: 0;\n  left: 1%;\n}\n\n#todotxt {\n color: var(--primary-color);\n}\n\n.sidebar-container.open{\n  grid-row: 0;\n}\n\n\n.icons {\n  width: 60px;\n}\n\n.options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5%;\n  font-style: oblique;\n  letter-spacing: 0.05em;\n}\n\n.options:hover {\n  background-color: var(--secondary-color) ;\n  cursor: pointer;\n}\n\n#main-body {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  flex-direction: column;\n  grid-column: 4/21;\n  grid-row: 2/11;\n  background-color: #dfdfdf;\n  z-index: 1;\n}\n\n\n#main-body.main-body-full {\n  flex-direction: column;\n  flex: 1; \n  grid-column: 1/21;\n  grid-row: 2/11;\n}\n\n#startertxt p {\n  margin-left: 10%;\n  font-size: 24px;\n  opacity: 40%;\n  letter-spacing: 0.1em;\n\n}\n\nbutton {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#h2, #header-top {\n  margin: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-top {\n  justify-content: center;\n  position: relative;\n  grid-row: 1/19;\n  grid-column: 1/21;\n}\n\n#toggle {\n  position: absolute;\n  right: 2%;\n}\n\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n#placeholder-txt {\n  display: flex;\n  justify-content: center;\n}\n`,""]);const u=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},529:(n,e,t)=>{n.exports=t.p+"6d5c785b874a563807ce.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),d=t.n(c),s=t(56),l=t.n(s),p=t(540),u=t.n(p),m=t(113),f=t.n(m),g=t(208),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;const b=t.p+"77fe0c289e2bdb2c256f.svg",y=t.p+"6fb3b2b4faa317aa074a.png",v=t.p+"26bfdbebb90b4060e6e1.png",x=t.p+"ca27c556a88e1e0bcd60.png",w=t.p+"a2da036ce1dd412d807e.png";document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.getElementById("main-body"),e=document.querySelector("body"),t=document.querySelector(".sidebar-container"),r=document.querySelector(".home-container"),o=document.getElementById("sidebar-icon"),i=document.getElementById("todo"),a=document.getElementById("important"),c=document.getElementById("calendar"),d=document.getElementById("completed"),s=document.createElement("button"),l=document.createElement("img"),p=document.createElement("img"),u=document.createElement("img"),m=document.createElement("img"),f=document.createElement("img");l.src=b,s.appendChild(l),o.appendChild(s),s.addEventListener("click",(()=>{t.classList.toggle("open"),r.classList.toggle("open"),n.classList.toggle("main-body-full"),e.contains(t)?e.removeChild(t):e.appendChild(t)})),p.src=v,p.classList.add("icons"),i.appendChild(p),r.appendChild(i);const g=document.createElement("p");g.textContent="All Tasks",i.appendChild(g),u.src=w,u.classList.add("icons"),a.appendChild(u),r.appendChild(a);let h=document.createElement("p");h.textContent="Important",a.appendChild(h),m.src=y,m.classList.add("icons"),c.appendChild(m),r.appendChild(c);const C=document.createElement("p");C.textContent="Calendar",c.appendChild(C),f.src=x,f.classList.add("icons"),d.appendChild(f),r.appendChild(d);const E=document.createElement("p");E.textContent="Completed",d.appendChild(E),t.appendChild(r)}(),console.log("test")}))})();