(()=>{"use strict";var t={208:(t,n,e)=>{e.d(n,{A:()=>w});var r=e(601),a=e.n(r),o=e(314),i=e.n(o),s=e(417),c=e.n(s),d=new URL(e(529),e.b),u=new URL(e(495),e.b),l=new URL(e(288),e.b),h=new URL(e(58),e.b),m=i()(a()),p=c()(d),f=c()(u),g=c()(l),b=c()(h);m.push([t.id,`* {border: 0px Solid red}\n:root {\n  --primary-color: rgb(0, 163, 163);\n  --secondary-color: rgb(204, 202, 202);\n  --third-color:  rgb(231, 230, 230);\n  --fourth-color: rgba(0, 0, 0, 0.5);\n}\n\nbody {\n  min-height: 100vh;\n  max-height: 100%;\n  margin: 2px;;\n  display: grid;\n  grid-template-columns: repeat(20, 5%);\n  grid-template-rows: repeat(10, 10%);\n  font-family: "Inter", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 800;\n  font-style: normal;\n  font-variation-settings: "slnt" 0;\n}\n\nh1 {\n  font-size: 42px;\n  letter-spacing: -0.075em;\n  display: flex;\n  font-weight: bolder;\n}\n\np {\n  font-size: 20px;\n}\n\ni {\n  color: var(--fourth-color);\n}\n\nform {\n  display: flex;\n  flex:  1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  height: 200px;\n  width: auto;\n}\n\n#break-line {\n  display: flex;\n  height: 1px;\n  width: 100%;\n  background-color: #2196F3 !important; \n  grid-column: span 21;\n  grid-row: 21;\n  align-self: flex-end; \n}\n\n#header-container {\n  display: grid;\n  flex-direction: column;\n  align-items: center;\n  grid-row: 1 / 2;\n  grid-column: 1 / 21;\n  grid-template-columns: repeat(20, 1fr);\n  grid-template-rows: repeat(20,1fr);\n}\n\n.sidebar-container {\n  grid-row: 2 / 11;\n  grid-column: 1 / 4;\n  min-width: 190px;\n}\n\n#h2, #h3 {\n  font-size:30px;\n  font-style: italic;\n  min-height: 80px;\n  background-color: antiquewhite;\n  grid-column: span 11;\n}\n\n#h2 {\n  grid-row: 1/3;\n}\n\n#h3 {\n  grid-row:11/13;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#project-container, .home-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1%;\n  grid-column: 1/11;\n}\n\n#add-container {\n  display: flex;\n  gap: 0%;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.3s ease;\n\n}\n\n#add-container.active:hover {\n  background-color: white;\n  scale: 1;\n}\n\n#add-container:hover {\n  background-color: var(--primary-color);\n  cursor: pointer;\n  scale: 1.05;\n}\n\n#add-btn {\n  width: 30px;\n  height: 30px;\n  background-image: url(${p});\n  cursor: pointer;\n}\n\n#cancel-btn {\n  width: 30px;\n  height: 30px;\n  background-image: url(${f});\n  cursor: pointer;\n}\n\n#add-btn:hover, #cancel-btn:hover {\nscale: 1.1;\n}\n\n#projectInput {\n  padding: 10px;\n  height: 42px;\n  width: 0px;\n  outline-style: none;\n  font-size: 20px;\n  transition: width 1s;\n}\n\n#projectInput.focus {\n  width: 100%;\n}\n\ninput[type="text"] , textarea {\n  height: 20px;\n  box-shadow: inset 1px 1px 5px rgba(46, 43, 43, 0.425);\n  border-style: none;\n}\n\n.sidebarProjectsContainer {\n  display: flex;\n  width: 100%;\n}\n\n.addedProjects {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\n.addedProjects:hover {\n  cursor: pointer;\n}\n\n.projectInfoContainer {\n  width: 100%;\n  height: 10%;\n  background-color: #dfdfdf;\n  border-bottom: 1px black;\n}\n\n.titleBtnContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\n\n.titleBtnContainer p {\n  font-size: 32px;\n}\n\n#sidebar-icon {\n  position: absolute;\n  margin: 0;\n  left: 1%;\n}\n\n#todotxt {\n color: var(--primary-color);\n}\n\n.sidebar-container.open{\n  grid-row: 0;\n}\n\n\n.icons {\n  width: 50px;\n  height: 40px;\n  margin-left: 4%;\n}\n\n.options {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10%;\n  font-style: oblique;\n  color: rgb(75, 75, 75);\n  letter-spacing: 0.05em;\n}\n\n.options:hover {\n  background-color: var(--secondary-color) ;\n  cursor: pointer;\n}\n\n#main-body {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  grid-column: 4/21;\n  grid-row: 2/11;\n  background-color: #dfdfdf;\n  z-index: 1;\n}\n\n\n#main-body.main-body-full {\n  flex-direction: column;\n  flex: 1; \n  grid-column: 1/21;\n  grid-row: 2/11;\n}\n\n\n#startertxt p {\n  margin-left: 10%;\n  margin-top: 20%;\n  font-size: 24px;\n  opacity: 40%;\n  letter-spacing: 0.1em;\n}\n\n#startertxt:hover, h1:hover {\n  cursor: default;\n}\n\nbutton {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#h2, #header-top {\n  margin: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-top {\n  justify-content: center;\n  position: relative;\n  grid-row: 1/19;\n  grid-column: 1/21;\n}\n\n#toggle {\n  position: absolute;\n  right: 2%;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n#placeholder-txt {\n  display: flex;\n  justify-content: center;\n}\n\n.stars i {\n  color: #d8d8d8;\n  font-size: 20px;\n  cursor: pointer;\n  transition: color 0.4s ease;\n}\n.stars i.active {\n  color: #ff9c1a;\n}\n\n.addTaskBtn {\n  width: 30px;\n  height: 30px;\n  background-image: url(${g});\n}\n\n.addTaskBtn:hover {\n  scale: 1.1;\n  cursor: pointer;\n  background-image: url(${b});\n}\n\n.taskContainer {\n \n  justify-content: space-evenly;\n  width: 100%;\n  margin-top: 2%;\n}\n\n.taskInput {\n  border: none;\n  padding: 10px;\n  height: 20px;\n  width: 75%;\n  outline-style: none;\n  font-size: 20px;\n}\n\n.taskDetails {\n  padding: 10px;\n  height: 40px;\n  width: 50%;\n  outline-style: none;\n  font-size: 16px;\n  margin-top: 2%;\n  overflow-wrap: break-word; \n  word-wrap: break-word; \n  resize: none;\n}\n\n.taskDate {\n  display: flex;\n  flex: 2;\n  border: none;\n  padding: 10px;\n  height: 20px;\n  outline-style: none;\n  font-size: 16px;\n}\n\n.inputContainer {\n  display: flex;\n  width: 51%;\n}\n\n.submitBtn {\n  padding: 5px;\n  margin: 5px;\n  background-color: var(--primary-color);\n}\n\n.cancelSubmit {\n  padding: 5px;\n  margin: 5px;\n  background-color: var(--secondary-color);\n}\n\n.addTaskContainer {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n}\n\n.taskInformation {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  border-bottom: 1px solid black;\n  justify-content: space-around;\n}\n\n.taskDateContainer {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  margin-right: 2%;\n}`,""]);const w=m},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var h=e(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(m);else{var p=a(m,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=e(o[i]);n[s].references--}for(var c=r(t,a),d=0;d<o.length;d++){var u=e(o[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},495:(t,n,e)=>{t.exports=e.p+"d1336fdcf24ac02c49c4.svg"},58:(t,n,e)=>{t.exports=e.p+"bc2228f440623912cb5e.svg"},288:(t,n,e)=>{t.exports=e.p+"458efa51e746293639d4.svg"},529:(t,n,e)=>{t.exports=e.p+"6d5c785b874a563807ce.svg"}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),a=e.n(r),o=e(825),i=e.n(o),s=e(659),c=e.n(s),d=e(56),u=e.n(d),l=e(540),h=e.n(l),m=e(113),p=e.n(m),f=e(208),g={};g.styleTagTransform=p(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),a()(f.A,g),f.A&&f.A.locals&&f.A.locals;const b=e.p+"77fe0c289e2bdb2c256f.svg",w=e.p+"6fb3b2b4faa317aa074a.png",y=e.p+"26bfdbebb90b4060e6e1.png",v=e.p+"ca27c556a88e1e0bcd60.png",x=e.p+"a2da036ce1dd412d807e.png",k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function C(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const M={date:C({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:C({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:C({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},E={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function P(t){return(n,e)=>{let r;if("formatting"===(e?.context?String(e.context):"standalone")&&t.formattingValues){const n=t.defaultFormattingWidth||t.defaultWidth,a=e?.width?String(e.width):n;r=t.formattingValues[a]||t.formattingValues[n]}else{const n=t.defaultWidth,a=e?.width?String(e.width):t.defaultWidth;r=t.values[a]||t.values[n]}return r[t.argumentCallback?t.argumentCallback(n):n]}}const S={ordinalNumber:(t,n)=>{const e=Number(t),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:P({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:P({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:P({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:P({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:P({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function T(t){return(n,e={})=>{const r=e.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=n.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,n){for(let n=0;n<t.length;n++)if(t[n].test(i))return n}(s):function(t,n){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&t[n].test(i))return n}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=e.valueCallback?e.valueCallback(d):d,{value:d,rest:n.slice(i.length)}}}const L={ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,n={})=>{const e=t.match(j.matchPattern);if(!e)return null;const r=e[0],a=t.match(j.parsePattern);if(!a)return null;let o=j.valueCallback?j.valueCallback(a[0]):a[0];return o=n.valueCallback?n.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var j;const D={code:"en-US",formatDistance:(t,n,e)=>{let r;const a=k[t];return r="string"==typeof a?a:1===n?a.one:a.other.replace("{{count}}",n.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:M,formatRelative:(t,n,e,r)=>E[t],localize:S,match:L,options:{weekStartsOn:0,firstWeekContainsDate:1}};let W={};function O(){return W}Math.pow(10,8);const q=6048e5,A=864e5;function N(t){const n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new t.constructor(+t):"number"==typeof t||"[object Number]"===n||"string"==typeof t||"[object String]"===n?new Date(t):new Date(NaN)}function Y(t){const n=N(t);return n.setHours(0,0,0,0),n}function z(t){const n=N(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function F(t,n){return t instanceof Date?new t.constructor(n):new Date(n)}function H(t){const n=N(t);return function(t,n){const e=Y(t),r=Y(n),a=+e-z(e),o=+r-z(r);return Math.round((a-o)/A)}(n,function(t){const n=N(t),e=F(t,0);return e.setFullYear(n.getFullYear(),0,1),e.setHours(0,0,0,0),e}(n))+1}function B(t,n){const e=O(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,a=N(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function I(t){return B(t,{weekStartsOn:1})}function Q(t){const n=N(t),e=n.getFullYear(),r=F(t,0);r.setFullYear(e+1,0,4),r.setHours(0,0,0,0);const a=I(r),o=F(t,0);o.setFullYear(e,0,4),o.setHours(0,0,0,0);const i=I(o);return n.getTime()>=a.getTime()?e+1:n.getTime()>=i.getTime()?e:e-1}function $(t){const n=N(t),e=+I(n)-+function(t){const n=Q(t),e=F(t,0);return e.setFullYear(n,0,4),e.setHours(0,0,0,0),I(e)}(n);return Math.round(e/q)+1}function X(t,n){const e=N(t),r=e.getFullYear(),a=O(),o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=F(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=B(i,n),c=F(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=B(c,n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=d.getTime()?r:r-1}function G(t,n){const e=N(t),r=+B(e,n)-+function(t,n){const e=O(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,a=X(t,n),o=F(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),B(o,n)}(e,n);return Math.round(r/q)+1}function R(t,n){return(t<0?"-":"")+Math.abs(t).toString().padStart(n,"0")}const U={y(t,n){const e=t.getFullYear(),r=e>0?e:1-e;return R("yy"===n?r%100:r,n.length)},M(t,n){const e=t.getMonth();return"M"===n?String(e+1):R(e+1,2)},d:(t,n)=>R(t.getDate(),n.length),a(t,n){const e=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];default:return"am"===e?"a.m.":"p.m."}},h:(t,n)=>R(t.getHours()%12||12,n.length),H:(t,n)=>R(t.getHours(),n.length),m:(t,n)=>R(t.getMinutes(),n.length),s:(t,n)=>R(t.getSeconds(),n.length),S(t,n){const e=n.length,r=t.getMilliseconds();return R(Math.trunc(r*Math.pow(10,e-3)),n.length)}},J={G:function(t,n,e){const r=t.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(t,n,e){if("yo"===n){const n=t.getFullYear(),r=n>0?n:1-n;return e.ordinalNumber(r,{unit:"year"})}return U.y(t,n)},Y:function(t,n,e,r){const a=X(t,r),o=a>0?a:1-a;return"YY"===n?R(o%100,2):"Yo"===n?e.ordinalNumber(o,{unit:"year"}):R(o,n.length)},R:function(t,n){return R(Q(t),n.length)},u:function(t,n){return R(t.getFullYear(),n.length)},Q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return R(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return R(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,n,e){const r=t.getMonth();switch(n){case"M":case"MM":return U.M(t,n);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(t,n,e){const r=t.getMonth();switch(n){case"L":return String(r+1);case"LL":return R(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,e,r){const a=G(t,r);return"wo"===n?e.ordinalNumber(a,{unit:"week"}):R(a,n.length)},I:function(t,n,e){const r=$(t);return"Io"===n?e.ordinalNumber(r,{unit:"week"}):R(r,n.length)},d:function(t,n,e){return"do"===n?e.ordinalNumber(t.getDate(),{unit:"date"}):U.d(t,n)},D:function(t,n,e){const r=H(t);return"Do"===n?e.ordinalNumber(r,{unit:"dayOfYear"}):R(r,n.length)},E:function(t,n,e){const r=t.getDay();switch(n){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(t,n,e,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return R(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(t,n,e,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return R(o,n.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(t,n,e){const r=t.getDay(),a=0===r?7:r;switch(n){case"i":return String(a);case"ii":return R(a,n.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(t,n,e){const r=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,n,e){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",n){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,n,e){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",n){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,n,e){if("ho"===n){let n=t.getHours()%12;return 0===n&&(n=12),e.ordinalNumber(n,{unit:"hour"})}return U.h(t,n)},H:function(t,n,e){return"Ho"===n?e.ordinalNumber(t.getHours(),{unit:"hour"}):U.H(t,n)},K:function(t,n,e){const r=t.getHours()%12;return"Ko"===n?e.ordinalNumber(r,{unit:"hour"}):R(r,n.length)},k:function(t,n,e){let r=t.getHours();return 0===r&&(r=24),"ko"===n?e.ordinalNumber(r,{unit:"hour"}):R(r,n.length)},m:function(t,n,e){return"mo"===n?e.ordinalNumber(t.getMinutes(),{unit:"minute"}):U.m(t,n)},s:function(t,n,e){return"so"===n?e.ordinalNumber(t.getSeconds(),{unit:"second"}):U.s(t,n)},S:function(t,n){return U.S(t,n)},X:function(t,n,e){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(n){case"X":return _(r);case"XXXX":case"XX":return K(r);default:return K(r,":")}},x:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"x":return _(r);case"xxxx":case"xx":return K(r);default:return K(r,":")}},O:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+V(r,":");default:return"GMT"+K(r,":")}},z:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+V(r,":");default:return"GMT"+K(r,":")}},t:function(t,n,e){return R(Math.trunc(t.getTime()/1e3),n.length)},T:function(t,n,e){return R(t.getTime(),n.length)}};function V(t,n=""){const e=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?e+String(a):e+String(a)+n+R(o,2)}function _(t,n){return t%60==0?(t>0?"-":"+")+R(Math.abs(t)/60,2):K(t,n)}function K(t,n=""){const e=t>0?"-":"+",r=Math.abs(t);return e+R(Math.trunc(r/60),2)+n+R(r%60,2)}const Z=(t,n)=>{switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});default:return n.date({width:"full"})}},tt=(t,n)=>{switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});default:return n.time({width:"full"})}},nt={p:tt,P:(t,n)=>{const e=t.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return Z(t,n);let o;switch(r){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;default:o=n.dateTime({width:"full"})}return o.replace("{{date}}",Z(r,n)).replace("{{time}}",tt(a,n))}},et=/^D+$/,rt=/^Y+$/,at=["D","DD","YY","YYYY"];function ot(t){if(!(n=t,n instanceof Date||"object"==typeof n&&"[object Date]"===Object.prototype.toString.call(n)||"number"==typeof t))return!1;var n;const e=N(t);return!isNaN(Number(e))}const it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,dt=/''/g,ut=/[a-zA-Z]/;function lt(t){const n=t.match(ct);return n?n[1].replace(dt,"'"):t}let ht=[],mt=[];function pt(t,n,e){return this.task=t,this.notes=n,this.date=e,this.important=!1,this.complete=!1,{task:t,notes:n,date:e,addTask:function(t,n){n.push(t)},deleteTask:function(t,n){t.splice(t.indexOf(n),1)}}}function ft(t){return this.title=t,this.tasksArray=[],this.complete=!1,{title:t,tasksArray:this.tasksArray,complete:this.complete,addProject:function(t){ht.push(t)},deleteProject:function(t){ht.splice(ht.indexOf(t),1)}}}const gt=document.getElementById("main-body"),bt=document.querySelector("body"),wt=document.querySelector(".sidebar-container"),yt=function(t,n){!function(){for(;gt.firstChild;)gt.removeChild(gt.firstChild)}();let e=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("p"),s=document.createElement("p");r.classList.add("titleBtnContainer"),e.classList.add("projectInfoContainer"),a.classList.add("addTaskBtn"),o.classList.add("addTaskContainer"),i.innerText=t,s.innerText="Add task",r.appendChild(i),e.appendChild(r),o.appendChild(s),o.appendChild(a),e.appendChild(o),gt.appendChild(e);for(let t=0;t<n.length;t++)c(n[t].task,n[t].notes,n[t].date);function c(t,n,r){const a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");a.classList.add("taskInformation"),c.classList.add("taskDateContainer"),i.innerText=t,a.appendChild(i),n&&(s.innerText=n);let d=null;r&&(d=r,c.innerText=d,a.appendChild(c)),console.log(mt),e.appendChild(a),e.appendChild(o)}a.addEventListener("click",(()=>{e.removeChild(o);const t=document.createElement("form"),r=document.createElement("input"),a=document.createElement("input"),i=document.createElement("textarea"),s=document.createElement("button"),d=document.createElement("button"),u=document.createElement("div"),l=document.createElement("div"),h=document.createElement("div");r.placeholder="Enter new task",i.placeholder="Notes:",r.classList.add("taskInput"),i.classList.add("taskDetails"),a.classList.add("taskDate"),s.classList.add("submitBtn"),d.classList.add("cancelSubmit"),r.type="text",s.type="submit",a.type="date",s.textContent="Add Task",d.textContent="Cancel",u.classList.add("taskContainer"),l.classList.add("inputContainer"),l.appendChild(r),l.appendChild(a),h.appendChild(s),h.appendChild(d),t.appendChild(l),t.appendChild(i),t.appendChild(h),u.appendChild(t),e.appendChild(u),d.addEventListener("click",(()=>{e.appendChild(o),e.removeChild(u)})),s.addEventListener("click",(t=>{t.preventDefault();const s=r.value,d=i.value,l=a.value;let h=null;l&&(h=function(t,n,e){const r=O(),a=e?.locale??r.locale??D,o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=N(t);if(!ot(s))throw new RangeError("Invalid time value");let c=n.match(st).map((t=>{const n=t[0];return"p"===n||"P"===n?(0,nt[n])(t,a.formatLong):t})).join("").match(it).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const n=t[0];if("'"===n)return{isToken:!1,value:lt(t)};if(J[n])return{isToken:!0,value:t};if(n.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!e?.useAdditionalWeekYearTokens&&function(t){return rt.test(t)}(o)||!e?.useAdditionalDayOfYearTokens&&function(t){return et.test(t)}(o))&&function(t,n,e){const r=function(t,n,e){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,n,e);if(console.warn(r),at.includes(t))throw new RangeError(r)}(o,n,String(t)),(0,J[o[0]])(s,o,a.localize,d)})).join("")}(new Date(l),"dd/MM/yyyy"));const m=new pt(s,d,h);mt.push(m),n.push(m),c(s,d,h),e.removeChild(u),e.appendChild(o)}))}))};document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.querySelector(".home-container"),n=document.getElementById("sidebar-icon"),e=document.getElementById("todo"),r=document.getElementById("important"),a=document.getElementById("calendar"),o=document.getElementById("completed"),i=document.createElement("button"),s=document.createElement("img"),c=document.createElement("img"),d=document.createElement("img"),u=document.createElement("img"),l=document.createElement("img");s.src=b,i.appendChild(s),n.appendChild(i),i.addEventListener("click",(()=>{wt.classList.toggle("open"),t.classList.toggle("open"),gt.classList.toggle("main-body-full"),bt.contains(wt)?bt.removeChild(wt):bt.appendChild(wt)})),c.src=y,c.classList.add("icons"),e.appendChild(c),t.appendChild(e);const h=document.createElement("p");h.textContent="All Tasks",e.appendChild(h),d.src=x,d.classList.add("icons"),r.appendChild(d),t.appendChild(r);let m=document.createElement("p");m.textContent="Important",r.appendChild(m),u.src=w,u.classList.add("icons"),a.appendChild(u),t.appendChild(a);const p=document.createElement("p");p.textContent="Calendar",a.appendChild(p),l.src=v,l.classList.add("icons"),o.appendChild(l),t.appendChild(o);const f=document.createElement("p");f.textContent="Completed",o.appendChild(f);const g=document.createElement("div");g.id="project-container";const k=document.createElement("div");k.id="h3",k.textContent="Projects",g.appendChild(k);const C=document.createElement("div");C.id="add-container";const M=document.createElement("p");M.textContent="Add project",C.appendChild(M);const E=document.createElement("button");E.id="add-btn",C.appendChild(E),g.appendChild(C),wt.appendChild(t),wt.appendChild(g)}(),function(){let t=document.getElementById("add-container"),n=document.createElement("input"),e=document.createElement("button");e.id="cancel-btn";const r=document.querySelector("#add-btn"),a=document.createElement("div");function o(){t.innerHTML="<p>Add project</p>",t.appendChild(r),t.classList.remove("active"),n.classList.remove("focus"),n.value=""}n.type="text",n.id="projectInput",n.placeholder="Enter project name",t.addEventListener("click",(i=>{a.id="btnDiv",t.innerHTML="",t.appendChild(n),t.appendChild(r),n.focus(),n.classList.add("focus"),t.classList.add("active"),a.appendChild(r),a.appendChild(e),t.appendChild(a),i.stopPropagation(),n.addEventListener("focus",(()=>{n.classList.add("focus")})),r.addEventListener("click",(t=>{const e=document.querySelector("#project-container"),r=document.querySelector("#allProjects");if(n.value){const a=n.value,i=document.createElement("div");i.classList.add("addedProjects");const s=document.createElement("p");s.innerHTML=a,i.appendChild(s),r.appendChild(i),e.appendChild(r);const c=new ft(a);ht.push(c),console.log(ht),i.addEventListener("click",(()=>{let t=i.innerText;yt(t,c.tasksArray),console.log(c)})),o(),t.stopPropagation()}})),e.addEventListener("click",(t=>{o(),t.stopPropagation()}))}))}(),console.log("test")}))})();