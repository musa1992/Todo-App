(()=>{"use strict";var t={426:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([t.id,"* {\r\n    margin: 0;\r\n}\r\n\r\n*::after, *::before {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 18px;\r\n    /* background-color: hsl(0, 0%, 98%); */\r\n}\r\n\r\ninput {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: darkgrey;\r\n    \r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n/*** light mode colors ****/\r\n\r\n.bg-color-light{\r\n    background-color: hsl(0, 0%, 98%); /**put on body **/\r\n}\r\n.input-light {\r\n    background-color: #FFF;\r\n}\r\n\r\n.box-light {\r\n    background-color: #FFF;\r\n}\r\n\r\n.todos-light {\r\n    color: hsl(235, 19%, 35%);;\r\n}\r\n.num-items-light{\r\n    background-color: #FFF;\r\n    color: hsl(236, 9%, 61%);\r\n}\r\n\r\n.states-light {\r\n    color: hsl(236, 9%, 61%);\r\n    background-color: #FFF;\r\n}\r\n/*** dark-mode colors ***/\r\n.bg-color-dark {\r\n    background-color: hsl(235, 21%, 11%);\r\n}\r\n\r\n.input-dark {\r\n    background-color: hsl(235, 24%, 19%);\r\n}\r\n\r\n.box-dark {\r\n    background-color: hsl(235, 24%, 19%);\r\n}\r\n\r\n.todos-dark {\r\n    \r\n    color: hsl(236, 33%, 92%)\r\n    \r\n}\r\n\r\n.num-items-dark {\r\n    background-color: hsl(235, 24%, 19%);\r\n    color: hsl(234, 11%, 52%);\r\n}\r\n\r\n.states-dark{\r\n    color: hsl(234, 11%, 52%);\r\n    background-color: hsl(235, 24%, 19%);\r\n}\r\n\r\n/*******************************************/\r\n\r\n.row {\r\n    display: flex;\r\n}\r\n\r\n.border-rd {\r\n    border-radius: 5px;\r\n}\r\n\r\n.over {\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\n\r\n\r\n.main {\r\n    position: relative;\r\n}\r\n\r\n.hero {\r\n    height: 20vh;\r\n    background-size: cover;\r\n    background-position: center;\r\n    \r\n}\r\n\r\n\r\n\r\n.todo-container {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 20%;\r\n    font-size: .8rem;\r\n}\r\n\r\n.container {\r\n    width: 90%;\r\n    margin-inline: auto;\r\n}\r\n\r\n.heading {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-block-end: 1rem;\r\n}\r\n\r\n.title {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    letter-spacing: 6px;\r\n    color: #FFF;\r\n}\r\n\r\n.input {\r\n    padding-block: 1em;\r\n    padding-inline: .8em;\r\n    margin-bottom: 1em;\r\n}\r\n#task{\r\n    padding-inline-start: .7em;\r\n    \r\n}\r\n\r\n.box {\r\n    \r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.todo {\r\n    padding-block: 1.3em;\r\n    padding-inline: .8em;\r\n    align-items: center;\r\n    border-bottom: 1px solid grey;   \r\n\r\n}\r\n\r\n.todo > p {\r\n    \r\n    padding-inline-start: .7em;\r\n    max-width: 85%;\r\n    min-width: 85%;\r\n}\r\n\r\n.line-through {\r\n    color: hsl(236, 60%, 92%);\r\n    text-decoration: line-through;\r\n}\r\n\r\n\r\n\r\n.num-items {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n    margin-bottom: .75em;\r\n    padding-inline: .8em;\r\n    padding-block: 1.3em;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n}\r\n\r\n.active {\r\n    color: hsl(220, 98%, 61%);\r\n}\r\n\r\n.states {\r\n    \r\n    justify-content: center ;\r\n    align-items: center;\r\n    padding-block: 1.3em;\r\n    font-weight: 700;\r\n    \r\n}\r\n\r\n.states > * + * {\r\n    padding-left: 1em;\r\n}\r\n\r\n.order-list {\r\n    margin-top: 2em;\r\n    text-align: center;\r\n    color: hsl(236, 9%, 61%);\r\n}\r\n\r\n.dlt-btn {\r\n    width: 12.5px;\r\n    height: 12.5px;\r\n}\r\n\r\n@media (min-width: 880px ){\r\n   .hero {\r\n       height: 30vh;\r\n   }\r\n\r\n    .container {\r\n        max-width: 50%;\r\n    }\r\n\r\n    .todo > p {\r\n        min-width: 92%;\r\n    }\r\n    .todo:hover {\r\n        cursor: pointer;\r\n\r\n    }\r\n\r\n    .dlt-btn {\r\n        visibility: hidden;\r\n    }\r\n    .todo:hover .dlt-btn{\r\n        visibility: visible;\r\n    }\r\n    .done-task-input {\r\n        cursor: pointer;\r\n    }\r\n\r\n\r\n    \r\n\r\n    .todos-footer {\r\n        position: relative;\r\n    }\r\n\r\n    \r\n\r\n    .states {\r\n        background-color: transparent;\r\n        position: relative;\r\n        margin-inline: auto;\r\n        width: 50%;\r\n        top:-55.5px;\r\n    }\r\n\r\n    .clear-complete {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .states > p:hover{\r\n        cursor: pointer;\r\n        color: black;\r\n    }\r\n\r\n\r\n\r\n    .order-list {\r\n        margin-top: 0;\r\n    }\r\n}\r\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);n&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},i=[],s=0;s<t.length;s++){var l=t[s],d=n.base?l[0]+n.base:l[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=r(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=o(m,n);n.byIndex=s,e.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var l=n(t,o),d=0;d<a.length;d++){var c=r(a[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},312:(t,e,r)=>{t.exports=r.p+"73e47dbb723ebc772ef0.jpg"},869:(t,e,r)=>{t.exports=r.p+"3508d620efd5a52bb4ce.jpg"},9:(t,e,r)=>{t.exports=r.p+"4b4de43949f46052a146.jpg"},501:(t,e,r)=>{t.exports=r.p+"645bd127083ef66fbfb9.jpg"},91:(t,e,r)=>{t.exports=r.p+"6ee81d30b75cab19d6f7.svg"},640:(t,e,r)=>{t.exports=r.p+"6c03114b495d05f4380b.svg"},818:(t,e,r)=>{t.exports=r.p+"910b1f9a23741afc341e.svg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t=r(91);function e(t){let e=document.createElement("input");return e.setAttribute("type",t),e}function n(r){let n=document.createElement("div");n.classList.add("todo"),n.classList.add("row");let o=e("radio");o.classList.add("done-task-input");let a=function(t){let e=document.createElement("p");return e.textContent=t,e}(r),i=function(){let e=new Image;return e.classList.add("dlt-btn"),e.src=t,e}();return n.append(o,a,i),n}var o=r(9),a=r(501),i=r(312),s=r(869);function l(t="light"){!function(t){let e=document.querySelector("body");"dark"===t?(e.classList.remove("bg-color-light"),e.classList.add("bg-color-dark")):(e.classList.remove("bg-color-dark"),e.classList.add("bg-color-light"))}(t),function(t){let e=document.querySelector(".input");"dark"===t?(e.classList.remove("input-light"),e.classList.add("input-dark")):(e.classList.remove("input-dark"),e.classList.add("input-light"))}(t),function(t){let e=document.querySelector(".box");"dark"===t?(e.classList.remove("box-light"),e.classList.add("box-dark")):(e.classList.remove("box-dark"),e.classList.add("box-light"))}(t),function(t){let e=document.querySelector(".num-items");"dark"===t?(e.classList.remove("num-items-light"),e.classList.add("num-items-dark")):(e.classList.remove("num-items-dark"),e.classList.add("num-items-light"))}(t),function(t){let e=document.querySelector(".states");"dark"===t?(e.classList.remove("states-light"),e.classList.add("states-dark")):(e.classList.remove("states-dark"),e.classList.add("states-light"))}(t),function(t){let e=document.querySelector(".todos");"dark"===t?(e.classList.remove("todos-light"),e.classList.add("todos-dark")):(e.classList.remove("todos-dark"),e.classList.add("todos-light"))}(t)}function d(t){let e=document.querySelector(".hero"),r=new Image,n=window.matchMedia("(min-width: 880px)");n.matches&&"light"===t&&(r.src=s),n.matches&&"dark"===t&&(r.src=i),n.matches||"light"!==t||(r.src=a),n.matches||"dark"!==t||(r.src=o),null!==e.firstChild&&e.removeChild(e.firstChild),e.appendChild(r)}var c=r(379),u=r.n(c),p=r(795),m=r.n(p),g=r(569),h=r.n(g),f=r(565),v=r.n(f),b=r(216),L=r.n(b),k=r(589),x=r.n(k),S=r(426),y={};y.styleTagTransform=x(),y.setAttributes=v(),y.insert=h().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=L(),u()(S.Z,y),S.Z&&S.Z.locals&&S.Z.locals;var w=r(640),I=r(818);function C(){return document.createElement("div")}function E(t){let e=t.firstElementChild;"light"===t.getAttribute("data-mode")?(t.setAttribute("data-mode","dark"),e.src=I):(t.setAttribute("data-mode","light"),e.src=w)}const A=document.getElementById("main");function q(t){let e=t.lastElementChild;for(;e;)t.removeChild(e),e=t.lastElementChild}A.appendChild(function(){let t=document.createElement("section");return t.classList.add("hero"),t}()),A.appendChild(function(){let t=document.createElement("section");t.classList.add("todo-container");let r=C();r.classList.add("container"),t.appendChild(r);let n=function(){let t=C();t.classList.add("heading"),t.classList.add("row");let e=C();e.innerHTML='<p class="title" >TODO</p>';let r=C();r.id="toggle",r.setAttribute("data-mode","light");let n=new Image;return n.src=w,r.appendChild(n),t.append(e,r),t}(),o=function(){let t=C();t.classList.add("input"),t.classList.add("border-rd");let r=e("radio");r.id="create";let n=e("text");return n.id="task",n.setAttribute("placeHolder","Create to do ..."),t.append(r,n),t}(),a=function(){let t=C();return t.classList.add("box"),t.appendChild(function(){let t=C();return t.classList.add("todos"),t}()),t}(),i=function(){let t=C();return t.classList.add("order-list"),t.innerHTML="<p>Drag and drop to reoder list</p>",t}(),s=function(){let t=()=>document.createElement("p"),e=C();e.classList.add("todos-footer");let r=C();r.classList.add("num-items");let n=t();n.id="num-active-items";let o=t();o.textContent="Clear completed",o.classList.add("clear-complete"),r.append(n,o);let a=C();a.classList.add("states"),a.classList.add("row"),a.classList.add("border-rd");let i=t();i.textContent="All",i.id="all";let s=t();s.textContent="Active",s.id="active";let l=t();return l.id="complete",l.textContent="Completed",a.append(i,s,l),e.append(r,a),e}();return r.append(n,o,a,s,i),t}());let F,T=A.querySelector(".todos"),N=A.querySelector("#task"),O=A.querySelector("#create"),j=A.querySelector("#all"),J=A.querySelector("#active"),M=A.querySelector("#complete"),z=A.querySelector(".clear-complete"),H=A.querySelector("#toggle");function P(){let t=0,e=document.querySelector("#num-active-items"),r=parseInt(localStorage.getItem("index"));for(let e=1;e<=r;e++)null!==localStorage.getItem(e)&&"active"===JSON.parse(localStorage.getItem(e)).status&&(t+=1);parseInt(t)>1?e.textContent=t+" items left":1===parseInt(t)?e.textContent=t+" item left":e.textContent=""}function Z(t){t.addEventListener("dragstart",B),t.addEventListener("dragenter",D),t.addEventListener("dragleave",$),t.addEventListener("drag",R),t.addEventListener("drop",U),t.addEventListener("dragover",_)}function B(){F=this}function D(){this!==F&&this.classList.add("over")}function $(){this.classList.remove("over")}function R(){}function U(){let t=document.querySelectorAll(".todo");var e,r;this===t[document.querySelectorAll(".todo").length-1]||this===t[1]?(e=F,(r=this).parentNode.insertBefore(e,r.nextSibling)):this.parentNode.insertBefore(F,this),this.classList.remove("over")}function _(t){t.preventDefault()}A.querySelector("#num-active-items"),window.onload=()=>{j.click(),null===window.localStorage.getItem("index")&&window.localStorage.setItem("index","0"),null!==window.localStorage.getItem("index")?(E(H),H.setAttribute("data-mode",localStorage.getItem("mode")),l(localStorage.getItem("mode"))):l()},d(H.getAttribute("data-mode")),O.addEventListener("click",(()=>{let t=parseInt(window.localStorage.getItem("index"));t+=1,t=t.toString();let e=(t=>{let e="active",r=()=>t,n=()=>e;return{getTask:r,getStatus:n,setStatus:t=>{e=t},serialize:()=>({task:r(),status:n()})}})(N.value),r=n(e.getTask());T.appendChild(r),r.setAttribute("data-id",t),r.setAttribute("draggable",!0),Z(r),N.value="",localStorage.setItem("index",t),localStorage.setItem(t,JSON.stringify(e.serialize())),P()})),T.addEventListener("click",(t=>{if(t.target.classList.contains("done-task-input")){let e=t.target.parentElement;e.children[1].classList.add("line-through");let r=e.getAttribute("data-id"),n=JSON.parse(localStorage.getItem(r));n.status="Complete",localStorage.setItem(r,JSON.stringify(n))}if(t.target.classList.contains("dlt-btn")){let e=t.target.parentElement,r=e.getAttribute("data-id");localStorage.removeItem(r),e.remove()}P()})),J.addEventListener("click",(()=>{M.classList.remove("active"),j.classList.remove("active"),J.classList.add("active"),q(T),function(){let t=parseInt(localStorage.getItem("index"));for(let e=1;e<=t;e++)if(null!==localStorage.getItem(e)){const t=JSON.parse(localStorage.getItem(e));if("active"===t.status){let r=n(t.task);r.setAttribute("data-id",e),r.setAttribute("draggable",!0),Z(r),T.appendChild(r)}}}()})),M.addEventListener("click",(()=>{J.classList.remove("active"),j.classList.remove("active"),M.classList.add("active"),q(T),function(){let t=parseInt(localStorage.getItem("index"));for(let e=1;e<=t;e++)if(null!==localStorage.getItem(e)){const t=JSON.parse(localStorage.getItem(e));if("Complete"===t.status){let r=n(t.task);r.classList.add("line-through"),r.setAttribute("data-id",e),T.appendChild(r)}}}()})),j.addEventListener("click",(()=>{J.classList.remove("active"),M.classList.remove("active"),j.classList.add("active"),q(T),function(){let t=parseInt(localStorage.getItem("index"));for(let e=1;e<=t;e++)if(null!==localStorage.getItem(e)){const t=JSON.parse(localStorage.getItem(e));let r=n(t.task);r.setAttribute("data-id",e),r.setAttribute("draggable",!0),Z(r),"Complete"===t.status&&r.classList.add("line-through"),T.appendChild(r)}}()})),z.addEventListener("click",(()=>{Array.from(T.children).forEach((t=>{"Complete"===JSON.parse(localStorage.getItem(t.dataset.id)).status&&t.remove()})),function(){let t=parseInt(localStorage.getItem("index"));for(let e=1;e<=t;e++)null!==localStorage.getItem(e)&&"Complete"===JSON.parse(localStorage.getItem(e)).status&&localStorage.removeItem(e)}()})),H.addEventListener("click",(()=>{E(H);let t=H.getAttribute("data-mode");localStorage.setItem("mode",t),l(t),d(t)})),P()})()})();