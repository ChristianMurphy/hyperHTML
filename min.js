var hyperHTML=function(e,t){"use strict";function n(e){return arguments.length<2?null==e?X("html"):"string"==typeof e?i(null,e):"raw"in e?X("html")(e):"nodeType"in e?r(e):Z(e,"html"):("raw"in e?X("html"):i).apply(null,arguments)}function r(e){return c.bind(e)}function i(e,t){return arguments.length<1?X("html"):null==e?X(t||"html"):Z(e,t||"html")}function o(){}function a(e,n){return this.node=e,this.childNodes=n,t.aura(this,n)}function c(e){var t=_e.get(this);return t&&t.template===le(e)?q.apply(t.updates,arguments):F.apply(this,arguments),this}function l(e,t,n){var r,i,o,a=e.ownerElement,c="data"===n,l=!c&&/^on/.test(n),u=c||S(a,n)&&!Y.test(n),s=l?n.slice(2):"",f=u||l,h=u&&(c||n in a);return(l||h)&&(t.push(a,n),l&&(s===fe||s===he?Me.add(a):n.toLowerCase()in a&&(s=s.toLowerCase()))),u&&(h||(o=$e.get(a),o||(o={_:Object.create(null),$:function(){$e.delete(a);for(var e in this._)this._[e].$()}},$e.set(a,o)),o._[n]={_:null,$:function(){h=!0,i(this._)}}),i=function(t){h?r!==t&&(r=t,a[n]!==t&&(null==t?(a[n]=null,a.removeAttribute(n)):a[n]=t)):(e.value=t,o._[n]._=t,n in a&&o.$())}),l?function(e){r!==e&&(r&&a.removeEventListener(s,r,!1),r=e,e&&a.addEventListener(s,e,!1))}:u?i:function(t){r!==t&&(r=t,e.value!==t&&(null==t?f||(f=!0,a.removeAttributeNode(e)):(e.value=t,f&&(f=!1,a.setAttributeNode(e)))))}}function u(e){var t;return function(n){n!==t&&(t=n,e.textContent=n)}}function s(e,t,n){var r;return function i(a){switch(typeof a){case"string":case"number":case"boolean":var c=t.length;1===c&&t[0].nodeType===G?r!==a&&(r=a,t[0].textContent=a):(r=a,c?n.splice(0,c,w(e,a)):t[0]=e.parentNode.insertBefore(w(e,a),e));break;case"function":i(a(e.parentNode,t,0));break;case"object":case"undefined":if(null==a){r=a,i("");break}a instanceof o&&(a=a.render());default:if(r=a,ge(a)){var c=a.length;if(0===c)n.splice(0);else switch(typeof a[0]){case"string":case"number":case"boolean":i({html:a});break;case"function":for(var l=e.parentNode,u=0;u<c;u++)a[u]=a[u](l,t,u);i(a.concat.apply([],a));break;case"object":if(ge(a[0])&&(a=a.concat.apply([],a)),A(a[0])){Promise.all(a).then(i);break}for(var u=0,c=a.length;u<c;u++)a[u]instanceof o&&(a[u]=a[u].render());default:M(n,a)}}else if(k(a))M(n,a.nodeType===K?ue.call(a.childNodes):[a]);else if(A(a))a.then(i);else if("placeholder"in a)C(a,i);else if("text"in a)i(String(a.text));else if("any"in a)i(a.any);else if("html"in a){var s=[].concat(a.html).join("");n.splice(0);var f=m(e,s);t.push.apply(t,f.childNodes),e.parentNode.insertBefore(f,e)}else i("length"in a?ue.call(a):T(a,i))}}}function f(e,t,n){for(var r,i,o,a,c=Object.create(null),l=e.attributes,u=0,s=l.length;u<s;u++)a=l[u],a.value===te&&(r=a.name,r in c?(e.removeAttributeNode(a),c[r].value="",e.setAttributeNode(c[r]),s--,u--):(i=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1"),o=e.attributes,c[r]=o[i]||o[i.toLowerCase()],t.push(D("attr",c[r],i))))}function h(e,t,n){for(var r,i=e.childNodes,o=i.length,a=0;a<o;a++)switch(r=i[a],r.nodeType){case z:f(r,t,n),h(r,t,n);break;case J:r.textContent===te&&(n.shift(),t.push(D("any",r)));break;case G:ee.test(e.nodeName)&&me.call(r.textContent)===ne&&(n.shift(),t.push(D("text",e)))}}function p(e){return se[e]}function d(e){return{html:e}}function v(e){for(var t,n=[],r=e.childNodes,i=0,o=r.length;i<o;i++)t=r[i],t.nodeType!==z&&0===me.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function g(e){return e.createDocumentFragment()}function m(e,t){return(Q in e?b:y)(e,t.replace(Te,Ae))}function y(e,t){var n,r=e.ownerDocument,i=r.createElement("template"),o="content"in i,a=!1;if(o||(n=g(r),a=/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)),a){var c=RegExp.$1;i.innerHTML="<table>"+t+"</table>",Ee(n,ue.call(i.querySelectorAll(c)))}else i.innerHTML=t,o?n=i.content:Ee(n,ue.call(i.childNodes));return n}function b(e,t){var n=e.ownerDocument,r=g(n);if(ae||ce){var i=n.createElement("div");i.innerHTML='<svg xmlns="'+U+'">'+t+"</svg>",Ee(r,ue.call(i.firstChild.childNodes))}else{var i=n.createElementNS(U,"svg");i.innerHTML=t,Ee(r,ue.call(i.childNodes))}return r}function w(e,t){return e.ownerDocument.createTextNode(t)}function N(e,t){for(var n,r,i=t===fe,o=0,a=e.length;o<a;o++)r=e[o],r.nodeType===z&&(n=E(r,i,t,n))}function E(e,t,n,r){if(Me.has(e))e.dispatchEvent(r||(r=new re(n)));else if(t&&$e.has(e))$e.get(e).$();else for(var i=xe(e),o=0,a=i.length;o<a;o++)r=E(i[o],t,n,r);return r}function x(e){var t=n.document,r=t.customElements||t.defaultView.customElements;return r&&r.get(e.nodeName.toLowerCase())}function S(e,t){var n=!(Q in e);if(n&&/-/.test(e.nodeName)){var r=x(e);r&&(e=r.prototype)}return n&&t in e}function C(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(d).then(t):Promise.resolve(T(e,t)).then(t)}function T(e,t){for(var n,r=0,i=we.length;r<i;r++)if(n=we[r],e.hasOwnProperty(n))return be[n](e[n],t)}function k(e){return"ELEMENT_NODE"in e}function A(e){return null!=e&&"then"in e}function L(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){ye(this,n,{configurable:!0,value:e})}}}function M(e,r){var i=0,o=e.length;if(r.length!==o)t(e,r,n.MAX_LIST_SIZE);else for(;i<o--;i++)if(e[o]!==r[o]||e[i]!==r[i])return void t(e,r,n.MAX_LIST_SIZE)}function _(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function O(e,t,n,r){var i;switch(e.type){case"any":i=s(t,r,new a(t,r));break;case"attr":i=l(t,n,e.name);break;case"text":i=u(t)}return i}function D(e,t,n){return{type:e,path:B(t),name:n}}function $(e){var t="_"+e.join(ne);return Ne[t]||(Ne[t]=e)}function j(e,t){var n=t.previousSibling;n&&n.nodeType===G&&(e.removeChild(n),j(e,t))}function I(e,t,n){n?e.insertBefore(t,n):e.appendChild(t)}function P(e,t,n,r){for(var i=e,o=e.ownerDocument,a=n.path,c=Se(t,a),l=0,u=a.length;l<u;l++)switch(a[l++]){case"attributes":var s=c.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=xe(e),h=xe(c.parentNode);i=He(c);var p=i?a.indexOf.call(h,i)+1:-1;i=Pe(c);var d=i?a.indexOf.call(h,i):-1;switch(i=o.createComment(te),!0){case d<0:d=f.length;break;case p<0:p=0;default:d=-(h.length-d)}r.push.apply(r,ue.call(f,p,d)),r.length?I(e,i,Pe(r[r.length-1])):I(e,i,ue.call(f,d)[0]),0===r.length&&j(e,i);break;default:i=xe(e)[a[l]]||e.appendChild(e.ownerDocument.createElement(Se(t,a.slice(0,l+1)).nodeName)),e=i}return i}function H(e,t){for(var n,r,i=[],o=[],a=0,c=t.length;a<c;a++)r=[],n=t[a],i[a]=O(n,P(this,e,n,r),o,r);return _(o),i}function R(e){var t=[],n=m(this,e.join(ne)),r={fragment:n,paths:t};return h(n,t,e.slice()),De.set(e,r),r}function B(e){var t,n=[];switch(e.nodeType){case z:case K:t=e;break;case J:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case V:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(xe(t),e));return n}function W(e,t){for(var n,r=[],i=[],o=0,a=t.length;o<a;o++)n=t[o],r[o]=O(n,Se(e,n.path),i,[]);return _(i),r}function q(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function F(e){e=le(e);var t,n=De.get(e)||R.call(this,e);if(je){var r=Ie(n.fragment);t=W.call(this,r,n.paths),_e.set(this,{template:e,updates:t}),q.apply(t,arguments),this.textContent="",this.appendChild(r)}else t=H.call(this,n.fragment,n.paths),_e.set(this,{template:e,updates:t}),q.apply(t,arguments)}function X(e){function t(t){l=g(t),c="svg"===e?t.createElementNS(U,"svg"):l,u=r(c)}function i(){return s&&(s=!1,"svg"===e&&Ee(l,ue.call(c.childNodes)),a=v(l)),a}var o,a,c,l,u,s,f;return"adopt"===e?function(r){var a=arguments;return r=le(r),f!==r&&(s=!0,f=r,o=function(r,o,f){return s&&(f<o.length?(c=o[f],l={ownerDocument:c.ownerDocument,childNodes:[c],children:[c]},u=n.adopt(l)):(Q in r&&(e="svg"),t(r.ownerDocument))),u.apply(null,a),i()}),o}:function(e){return e=le(e),f!==e&&(s=!0,f=e,t(n.document)),u.apply(null,arguments),i()}}function Z(e,t){var n=Oe.get(e),r=t.indexOf(":"),i=t;return-1<r&&(i=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},Oe.set(e,n)),n[i]||(n[i]=X(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
n.document=e,n.hyper=n,n.adopt=function(e){return function(){return je=!1,c.apply(e,arguments),je=!0,e}},n.bind=r,n.define=function(e,t){e in be||we.push(e),be[e]=t},n.escape=function(e){return e.replace(/[&<>'"]/g,p)},n.wire=i,n.Component=o,Object.defineProperties(o.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:L("html",X),svg:L("svg",X),state:L("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}});var z=1,V=2,G=3,J=8,K=11,Q="ownerSVGElement",U="http://www.w3.org/2000/svg",Y=/^style$/i,ee=/^style|textarea$/i,te="_hyper: "+(Math.random()*new Date|0)+";",ne="\x3c!--"+te+"--\x3e";a.prototype.splice=function(e){for(var t,n=this.node,r=this.childNodes,i=r[e+(arguments[1]||0)]||n,o=r.splice.apply(r,arguments),a=n.parentNode,c=0,l=o.length;c<l;c++)t=o[c],r.indexOf(t)<0&&a.removeChild(t);if(c=2,l=arguments.length,c<l){if(l-c==1)t=arguments[c];else for(t=g(a.ownerDocument);c<l;)t.appendChild(arguments[c++]);a.insertBefore(t,i)}return o};var re,ie=g(e),oe="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,ae=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),ce=!("children"in ie),le=function(e){return(le=e.propertyIsEnumerable("raw")||oe?$:function(e){return e})(e)},ue=[].slice,se={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},fe="connected",he="dis"+fe;try{new Event(fe),re=Event}catch(e){re=function(e){var t=n.document.createEvent("Event");return t.initEvent(e,!1,!1),t}}try{new MutationObserver(function(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],N(t.removedNodes,he),N(t.addedNodes,fe)}).observe(e,{subtree:!0,childList:!0})}catch(t){e.addEventListener("DOMNodeInserted",function(e){N([e.target],fe)},!1),e.addEventListener("DOMNodeRemoved",function(e){N([e.target],he)},!1)}var $,pe=typeof WeakMap==typeof pe?function(){return{delete:function(e){delete e[te]},get:function(e){return e[te]},has:function(e){return te in e},set:function(e,t){Object.defineProperty(e,te,{configurable:!0,value:t})}}}:WeakMap,de=typeof WeakSet==typeof de?function(){var e=new pe;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}}:WeakSet,ve=typeof Map==typeof ve?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,ge=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),me="_hyper: ".trim||function(){return this.replace(/^\s+|\s+$/g,"")},ye=Object.defineProperty,be={},we=[],Ne={},Ee="append"in ie?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},xe=ce||ae?function(e){for(var t,n=[],r=e.childNodes,i=0,o=0,a=r.length;o<a;o++)t=r[o],t.nodeType===z&&(n[i++]=t);return n}:function(e){return e.children},Se=ae||ce?function(e,t){for(var n,r=0,i=t.length;r<i;r++)switch(n=t[r++]){case"children":e=xe(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e},Ce="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",Te=new RegExp("(<[a-z]+[a-z0-9:_-]*)((?:"+Ce+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)+)([^\\S]*/?>)","gi"),ke=new RegExp("("+Ce+"=)(['\"]?)"+ne+"\\2","gi"),Ae=function(e,t,n,r){return t+n.replace(ke,Le)+r},Le=function(e,t,n){return t+(n||'"')+te+(n||'"')},Me=new de,_e=new pe,Oe=new pe,De=new ve,$e=new pe,je=!0,Ie=function(){return ie.appendChild(w(ie,"g")),ie.appendChild(w(ie,"")),1===ie.cloneNode(!0).childNodes.length?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=0,i=n.length;r<i;r++)t.appendChild(Ie(n[r]));return t}:function(e){return e.cloneNode(!0)}}(),Pe=ae?function(e){for(;e=e.nextSibling;)if(e.nodeType===z)return e}:function(e){return e.nextElementSibling},He=ae?function(e){for(;e=e.previousSibling;)if(e.nodeType===z)return e}:function(e){return e.previousElementSibling};return n.MAX_LIST_SIZE=1e3,n}(document,function(){"use strict";function e(e,n,o){var a=e.length,c=n.length,l=(o||1/0)<Math.sqrt((a||1)*(c||1));return a<1||l?void((c||l)&&e.splice.apply(e,[0,a].concat(n))):c<1?void e.splice(0):void i(e,r(e,n,t(e,n)))}function t(e,t){var n,r,i,o=e.length+1,a=t.length+1,c=o*a,u=0,s=0,f=0,h=0,p=0,d=0,v=new l(c);for(v[0]=0;++u<a;)v[u]=u;for(;++s<o;){for(f=u=0,d=p,p=s*a,v[p+u]=s;++u<a;)n=v[d+u]+1,r=v[p+f]+1,i=v[d+f]+(e[h]==t[f]?0:1),v[p+u]=n<r?n<i?n:i:r<i?r:i,++f;h=s}return v}function n(e,t,n,r,i,o){e.unshift({type:t,x:n,y:r,count:i,items:o})}function r(e,t,r){for(var i,l,u,s,f,h,p=[],d=e.length+1,v=t.length+1,g=d-1,m=v-1;m&&g;)f=g*v+m,h=f-v,i=r[f],l=r[h],u=r[f-1],s=r[h-1],s<=u&&s<=l&&s<=i?(m--,g--,s<i&&n(p,c,m,g,1,[t[m]])):u<=l&&u<=i?(m--,n(p,a,m,g,0,[t[m]])):(g--,n(p,o,m,g,1,[]));for(;m--;)n(p,a,m,g,0,[t[m]]);for(;g--;)n(p,o,m,g,1,[]);return p}function i(e,t){var n,r,i,c=0,l=1,u=t.length;if(u){for(i=r=t[0];l<u;)n=t[l++],r.type===n.type&&n.x-r.x<=1&&n.y-r.y<=1?(i.count+=n.count,i.items=i.items.concat(n.items)):(e.splice.apply(e,[i.y+c,i.count].concat(i.items)),c+=i.type===a?i.items.length:i.type===o?-i.count:0,i=n),r=n;e.splice.apply(e,[i.y+c,i.count].concat(i.items))}}/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var o="del",a="ins",c="sub",l=/^u/.test(typeof Int32Array)?Array:Int32Array;return e.aura=function(e,t){var n=t.splice;return t.splice=function r(){t.splice=n;var i=e.splice.apply(e,arguments);return t.splice=r,i},t},e}());try{module.exports=hyperHTML}catch(e){}