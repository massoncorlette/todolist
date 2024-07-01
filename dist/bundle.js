(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>h});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),d=t.n(c),s=new URL(t(529),t.b),l=new URL(t(495),t.b),p=a()(r()),u=d()(s),m=d()(l);p.push([n.id,`* {border: 0px Solid red}\n:root {\n  --primary-color: rgb(0, 163, 163);\n  --secondary-color: #cccaca;\n  --third-color:  rgb(231, 230, 230);\n  --fourth-color: rgba(0, 0, 0, 0.5);\n}\n\nbody {\n  min-height: 100vh;\n  max-height: 100%;\n  margin: 2px;;\n  display: grid;\n  grid-template-columns: repeat(20, 5%);\n  grid-template-rows: repeat(10, 10%);\n  font-family: "Inter", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 900;\n  font-style: normal;\n  font-variation-settings: "slnt" 0;\n}\n\nh1 {\n  font-size: 42px;\n  letter-spacing: -0.075em;\n  display: flex;\n  font-weight: bolder;\n}\n\np {\n  font-size: 20px;\n}\n\ni {\n  color: var(--fourth-color);\n}\n\n#break-line {\n  display: flex;\n  height: 1px;\n  width: 100%;\n  background-color: #2196F3 !important; \n  grid-column: span 21;\n  grid-row: 21;\n  align-self: flex-end; \n}\n\n#header-container {\n  display: grid;\n  flex-direction: column;\n  align-items: center;\n  grid-row: 1 / 2;\n  grid-column: 1 / 21;\n  grid-template-columns: repeat(20, 1fr);\n  grid-template-rows: repeat(20,1fr);\n}\n\n.sidebar-container {\n  grid-row: 2 / 11;\n  grid-column: 1 / 4;\n  min-width: 190px;\n}\n\n#h2, #h3 {\n  font-size:30px;\n  font-style: italic;\n  min-height: 80px;\n  background-color: antiquewhite;\n  grid-column: span 11;\n}\n\n#h2 {\n  grid-row: 1/3;\n}\n\n#h3 {\n  grid-row:11/13;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#project-container, .home-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1%;\n  grid-column: 1/11;\n}\n\n#add-container {\n  display: flex;\n  gap: 0%;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.3s ease;\n\n}\n\n#add-container.active:hover {\n  background-color: white;\n  scale: 1;\n}\n\n#add-container:hover {\n  background-color: var(--primary-color);\n  cursor: pointer;\n  scale: 1.05;\n}\n\n#add-btn {\n  width: 30px;\n  height: 30px;\n  background-image: url(${u});\n  cursor: pointer;\n}\n\n#cancel-btn {\n  width: 30px;\n  height: 30px;\n  background-image: url(${m});\n  cursor: pointer;\n}\n\n#add-btn:hover, #cancel-btn:hover {\nscale: 1.1;\n}\n\n#projectInput {\n  padding: 10px;\n  height: 42px;\n  width: 0px;\n  outline-style: none;\n  font-size: 20px;\n  transition: width 1s;\n}\n\n#projectInput.focus {\n  width: 100%;\n}\n\ninput[type="text"] {\n  height: 20px;\n  box-shadow: inset 1px 1px 5px rgba(46, 43, 43, 0.425);\n  border-style: none;\n}\n\n.sidebarProjectsContainer {\n  display: flex;\n  width: 100%;\n}\n\n.addedProjects {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.addedProjects:hover {\n  cursor: pointer;\n}\n\n.projectInfoContainer {\n  width: 100%;\n  height: 10%;\n  margin-bottom: 35%;\n  background-color: var(--primary-color);\n}\n\n\n#sidebar-icon {\n  position: absolute;\n  margin: 0;\n  left: 1%;\n}\n\n#todotxt {\n color: var(--primary-color);\n}\n\n.sidebar-container.open{\n  grid-row: 0;\n}\n\n\n.icons {\n  width: 50px;\n  height: 40px;\n}\n\n.options {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8%;\n  font-style: oblique;\n  color: rgb(75, 75, 75);\n  letter-spacing: 0.05em;\n}\n\n.options:hover {\n  background-color: var(--secondary-color) ;\n  cursor: pointer;\n}\n\n#main-body {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  flex-direction: column;\n  grid-column: 4/21;\n  grid-row: 2/11;\n  background-color: #dfdfdf;\n  z-index: 1;\n}\n\n\n#main-body.main-body-full {\n  flex-direction: column;\n  flex: 1; \n  grid-column: 1/21;\n  grid-row: 2/11;\n}\n\n\n#startertxt p {\n  margin-left: 10%;\n  font-size: 24px;\n  opacity: 40%;\n  letter-spacing: 0.1em;\n}\n\n#startertxt:hover, h1:hover {\n  cursor: default;\n}\n\nbutton {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#h2, #header-top {\n  margin: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-top {\n  justify-content: center;\n  position: relative;\n  grid-row: 1/19;\n  grid-column: 1/21;\n}\n\n#toggle {\n  position: absolute;\n  right: 2%;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n#placeholder-txt {\n  display: flex;\n  justify-content: center;\n}\n`,""]);const h=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},495:(n,e,t)=>{n.exports=t.p+"d1336fdcf24ac02c49c4.svg"},529:(n,e,t)=>{n.exports=t.p+"6d5c785b874a563807ce.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),d=t.n(c),s=t(56),l=t.n(s),p=t(540),u=t.n(p),m=t(113),h=t.n(m),f=t(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals;const b=t.p+"77fe0c289e2bdb2c256f.svg",v=t.p+"6fb3b2b4faa317aa074a.png",y=t.p+"26bfdbebb90b4060e6e1.png",x=t.p+"ca27c556a88e1e0bcd60.png",C=t.p+"a2da036ce1dd412d807e.png",w=document.getElementById("main-body"),E=document.querySelector("body"),j=document.querySelector(".sidebar-container");document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.querySelector(".home-container"),e=document.getElementById("sidebar-icon"),t=document.getElementById("todo"),o=document.getElementById("important"),r=document.getElementById("calendar"),i=document.getElementById("completed"),a=document.createElement("button"),c=document.createElement("img"),d=document.createElement("img"),s=document.createElement("img"),l=document.createElement("img"),p=document.createElement("img");c.src=b,a.appendChild(c),e.appendChild(a),a.addEventListener("click",(()=>{j.classList.toggle("open"),n.classList.toggle("open"),w.classList.toggle("main-body-full"),E.contains(j)?E.removeChild(j):E.appendChild(j)})),d.src=y,d.classList.add("icons"),t.appendChild(d),n.appendChild(t);const u=document.createElement("p");u.textContent="All Tasks",t.appendChild(u),s.src=C,s.classList.add("icons"),o.appendChild(s),n.appendChild(o);let m=document.createElement("p");m.textContent="Important",o.appendChild(m),l.src=v,l.classList.add("icons"),r.appendChild(l),n.appendChild(r);const h=document.createElement("p");h.textContent="Calendar",r.appendChild(h),p.src=x,p.classList.add("icons"),i.appendChild(p),n.appendChild(i);const f=document.createElement("p");f.textContent="Completed",i.appendChild(f);const g=document.createElement("div");g.id="project-container";const L=document.createElement("div");L.id="h3",L.textContent="Projects",g.appendChild(L);const k=document.createElement("div");k.id="add-container";const I=document.createElement("p");I.textContent="Add project",k.appendChild(I);const S=document.createElement("button");S.id="add-btn",k.appendChild(S),g.appendChild(k),j.appendChild(n),j.appendChild(g)}(),function(){let n=document.getElementById("add-container"),e=document.createElement("input"),t=document.createElement("button");t.id="cancel-btn";const o=document.querySelector("#add-btn"),r=document.createElement("div");function i(){n.innerHTML="<p>Add project</p>",n.appendChild(o),n.classList.remove("active"),e.classList.remove("focus"),e.value=""}e.type="text",e.id="projectInput",e.placeholder="Enter project name",n.addEventListener("click",(a=>{r.id="btnDiv",n.innerHTML="",n.appendChild(e),n.appendChild(o),e.focus(),e.classList.add("focus"),n.classList.add("active"),r.appendChild(o),r.appendChild(t),n.appendChild(r),a.stopPropagation(),e.addEventListener("focus",(()=>{e.classList.add("focus")})),o.addEventListener("click",(n=>{const t=document.querySelector("#project-container"),o=document.querySelector("#allProjects");if(e.value){const r=e.value,a=document.createElement("div");a.classList.add("addedProjects");const c=document.createElement("p");c.innerHTML=r,a.appendChild(c),o.appendChild(a),t.appendChild(o),a.addEventListener("click",(()=>{!function(n){!function(){for(;w.firstChild;)w.removeChild(w.firstChild)}();let e=document.createElement("div");e.classList.add("projectInfoContainer");let t=document.createElement("p");t.innerText=n,e.appendChild(t),w.appendChild(e)}(a.innerText)})),i(),n.stopPropagation()}})),t.addEventListener("click",(n=>{i(),n.stopPropagation()}))}))}(),console.log("test")}))})();