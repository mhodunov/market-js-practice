!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={header:document.querySelector(".header"),nav:document.querySelector(".headerNav"),navList:document.querySelector(".navList"),home:document.querySelector(".home"),about:document.querySelector(".about"),contacts:document.querySelector(".contacts")},o=n.home,i=document.createElement("h2");i.textContent="House";var a=document.createElement("p");a.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti molestiae odit quasi corrupti doloribus repellendus, natus perferendis adipisci, exercitationem distinctio explicabo eveniet maiores! Voluptatem sunt esse, unde officia exercitationem, autem eaque porro voluptas excepturi tenetur ratione perferendis veritatis dolores illo impedit temporibus mollitia voluptatum maiores. Facere aut, a similique adipisci qui excepturi expedita perspiciatis natus harum corrupti quia dicta sequi ratione rerum amet illo sint ipsum vel fugit fuga nulla eius odio inventore. Quaerat id nihil rem aliquam est.",o.append(i,a);function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=n.about,l=document.createElement("h2");l.textContent="About Us";var p=document.createElement("ul");var m=[{name:"Brovary",pictures:["https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP7SZO802fJXBOJTsI5UfAqdu460m2Ts8FA&usqp=CAU"],price:8e4},{name:"Kyiv",pictures:["https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP7SZO802fJXBOJTsI5UfAqdu460m2Ts8FA&usqp=CAU"],price:15e4},{name:"Kreminna",pictures:["https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP7SZO802fJXBOJTsI5UfAqdu460m2Ts8FA&usqp=CAU"],price:1e4}].map((function(e){var t=e.name,r=e.pictures,n=e.price,o=document.createElement("li"),i=document.createElement("h3");i.textContent=t;var a=r.map((function(e){var t=document.createElement("img");return t.setAttribute("src",e),t})),c=document.createElement("div");c.append.apply(c,u(a));var s=document.createElement("p");return s.textContent="Price: $".concat(n),o.append(i,c,s),o}));function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}p.append.apply(p,u(m)),s.append(l,p);var d=n.contacts,y=["rock","scissors","paper"];var b=y.map((function(e){var t=document.createElement("button");return t.textContent=e,t.dataset.value=e,t}));d.append.apply(d,function(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(b)),d.addEventListener("click",(function(e){var t=e.target.dataset.value,r=y[function(e){return Math.round(Math.random()*(e.length-1))}(y)];if(t===r)return alert("Computer choose ".concat(r,"\nDraw"));if("rock"===t){if("scissors"===r)return alert("Computer choose ".concat(r,"\nYou win"));if("paper"===r)return alert("Computer choose ".concat(r,"\nYou loose"))}else if("scissor"===t){if("paper"===r)return alert("Computer choose ".concat(r,"\nYou win"));if("rock"===r)return alert("Computer choose ".concat(r,"\nYou loose"))}else if("paper"===t){if("rock"===r)return alert("Computer choose ".concat(r,"\nYou win"));if("scissors"===r)return alert("Computer choose ".concat(r,"\nYou loose"))}}))}]);
//# sourceMappingURL=main.bundle.js.map