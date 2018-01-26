/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(){var e=function(e,n){for(var r=new C(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===g&&t(a,r)}},t=function r(e,t){if(de.has(e))e.dispatchEvent(t);else for(var n=e.children,i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,N),e(i.addedNodes,y)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],N)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],y)},!1)}}function o(e){var t=ke.get(this);return t&&t.template===U(e)?l.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=U(e);var t=Te.get(e)||u.call(this,e),n=K(this.ownerDocument,t.fragment),r=Ce.create(n,t.paths);ke.set(this,{template:e,updates:r}),l.apply(r,arguments),this.textContent="",this.appendChild(n)}function l(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function u(e){var t=[],n=e.join(E).replace(je,Ae),r=q(this,n);Ce.find(r,t,e.slice());var i={fragment:r,paths:t};return Te.set(e,i),i}function c(e){return arguments.length<2?null==e?De("html"):"string"==typeof e?Oe(null,e):"raw"in e?De("html")(e):"nodeType"in e?o.bind(e):$e(e,"html"):("raw"in e?De("html"):Oe).apply(null,arguments)}var s=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},f={},d=[],h=f.hasOwnProperty,v=0,p={define:function(e,t){e in f||(v=d.push(e)),f[e]=t},invoke:function(e,t){for(var n=0;n<v;n++){var r=d[n];if(h.call(e,r))return f[r](e[r],t)}}},m=document.defaultView,g=1,b="http://www.w3.org/2000/svg",y="connected",N="dis"+y,w=/^style|textarea$/i,x="_hyper: "+(Math.random()*new Date|0)+";",E="\x3c!--"+x+"--\x3e",C=m.Event;try{new C("Event")}catch(He){C=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var S=m.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},k=m.WeakMap||function(){return{get:function(e){return e[x]},set:function(e,t){Object.defineProperty(e,x,{configurable:!0,value:t})}}},T=m.WeakSet||function(){var e=new k;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},j=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),A=x.trim||function(){return this.replace(/^\s+|\s+$/g,"")},L=function(e,t){return M(e).createElement(t)},M=function(e){return e.ownerDocument||e},O=function(e){return M(e).createDocumentFragment()},D=function(e,t){return M(e).createTextNode(t)},$="[^\\S]+[^ \\f\\n\\r\\t\\/><\"'=]+",P="<([a-z]+[a-z0-9:_-]*)((?:",B=new RegExp(P+$+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)+)([^\\S]*/?>)","gi"),R=new RegExp(P+$+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)*)([^\\S]*/>)","gi"),H=O(document),_="append"in H,F="content"in L(document,"template");H.appendChild(D(H,"g")),H.appendChild(D(H,""));var z=1===H.cloneNode(!0).childNodes.length,V="importNode"in document,G=_?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},I=new RegExp("("+$+"=)(['\"]?)"+E+"\\2","gi"),W=function(e,t,n,r){return"<"+t+n.replace(I,Z)+r},Z=function(e,t,n){return t+(n||'"')+x+(n||'"')},q=function(e,t){return("ownerSVGElement"in e?ee:Y)(e,t.replace(B,W))},J=z?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(J(n[i]));return t}:function(e){return e.cloneNode(!0)},K=V?function(e,t){return e.importNode(t,!0)}:function(e,t){return J(t)},Q=[].slice,U=function(e){return X(e)},X=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((m.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};X=function(e){var n="_"+e.join(x);return t[n]||(t[n]=e)}}else X=function(e){return e};return X(e)},Y=F?function(e,t){var n=L(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=L(e,"template"),r=O(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",G(r,Q.call(n.querySelectorAll(i)))}else n.innerHTML=t,G(r,Q.call(n.childNodes));return r},ee=F?function(e,t){var n=O(e),r=M(e).createElementNS(b,"svg");return r.innerHTML=t,G(n,Q.call(r.childNodes)),n}:function(e,t){var n=O(e),r=L(e,"div");return r.innerHTML='<svg xmlns="'+b+'">'+t+"</svg>",G(n,Q.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=O(this.first);return G(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=M(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var te=function(e){var t=[],n=void 0;switch(e.nodeType){case g:case 11:n=e;break;case 8:n=e.parentNode,ne(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)ne(t,n,e);return t},ne=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},re={create:function(e,t,n){return{type:e,name:n,node:t,path:te(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},ie=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,oe=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ae(r,n)}return ae(e.style,n)},ae=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var l in i){var u=i[l];a[l]="number"!=typeof u||ie.test(l)?u:u+"px"}n="object",t?e.value=ce(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},le=/([^A-Z])([A-Z]+)/g,ue=function(e,t,n){return t+"-"+n.toLowerCase()},ce=function(e){var t=[];for(var n in e)t.push(n.replace(le,ue),":",e[n],";");return t.join("")},se=function(e){return e},fe=function(e,t,n,r,i){for(var o=r||se,a=null==i?null:o(i,0),l=0,u=0,c=t.length-1,s=t[0],f=t[c],d=n.length-1,h=n[0],v=n[d];l<=c&&u<=d;)if(null==s)s=t[++l];else if(null==f)f=t[--c];else if(null==h)h=n[++u];else if(null==v)v=n[--d];else if(s==h)s=t[++l],h=n[++u];else if(f==v)f=t[--c],v=n[--d];else if(s==v)e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++l],v=n[--d];else if(f==h)e.insertBefore(o(f,1),o(s,0)),f=t[--c],h=n[++u];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++u];else{var m=t[p];t[p]=null,e.insertBefore(o(m,1),o(s,0)),h=n[++u]}}if(l<=c||u<=d)if(l>c){var g=n[d+1],b=null==g?a:o(g,0);if(u===d)e.insertBefore(o(n[u],1),b);else{for(var y=e.ownerDocument.createDocumentFragment();u<=d;)y.appendChild(o(n[u++],1));e.insertBefore(y,b)}}else if(null==t[l]&&l++,l===c)e.removeChild(o(t[l],-1));else{var N=e.ownerDocument.createRange();N.setStartBefore(o(t[l],-1)),N.setEndAfter(o(t[c],-1)),N.deleteContents()}return n},de=new T;r.prototype=Object.create(null);var he=function(e){return{html:e}},ve=function _e(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:_e(e.render(),t)},pe=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},me=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=re.find(e,o.path);switch(o.type){case"any":n.push(we(a,[]));break;case"attr":n.push(xe(a,o.name,o.node));break;case"text":n.push(Ee(a))}}return n},ge=function Fe(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case g:be(a,t,n),Fe(a,t,n);break;case 8:a.textContent===x&&(n.shift(),t.push(w.test(e.nodeName)?re.create("text",e):re.create("any",a)));break;case 3:w.test(e.nodeName)&&A.call(a.textContent)===E&&(n.shift(),t.push(re.create("text",e)))}}},be=function(e,t,n){for(var i=new r,o=e.attributes,a=Q.call(o),l=[],u=a.length,c=0;c<u;c++){var s=a[c];if(s.value===x){var f=s.name;if(!(f in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[d]||o[d.toLowerCase()],t.push(re.create("attr",i[f],d))}l.push(s)}}for(var h=l.length,v=0;v<h;v++)e.removeAttributeNode(l[v]);var p=e.nodeName;if(/^script$/i.test(p)){for(var m=L(e,p),g=0;g<o.length;g++)m.setAttributeNode(o[g].cloneNode(!0));m.textContent=e.textContent,e.parentNode.replaceChild(m,e)}},ye=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(he).then(t):Promise.resolve(p.invoke(e,t)).then(t)},Ne=function(e){return null!=e&&"then"in e},we=function(e,t){var n=!1,r=void 0;return function i(o){switch(typeof o){case"string":case"number":case"boolean":n?r!==o&&(r=o,t[0].textContent=o):(n=!0,r=o,t=fe(e.parentNode,t,[D(e,o)],ve,e));break;case"object":case"undefined":if(null==o){n=!1,t=fe(e.parentNode,t,[],ve,e);break}default:if(n=!1,r=o,j(o))if(0===o.length)t.length&&(t=fe(e.parentNode,t,[],ve,e));else switch(typeof o[0]){case"string":case"number":case"boolean":i({html:o});break;case"object":if(j(o[0])&&(o=o.concat.apply([],o)),Ne(o[0])){Promise.all(o).then(i);break}default:t=fe(e.parentNode,t,o,ve,e)}else pe(o)?t=fe(e.parentNode,t,11===o.nodeType?Q.call(o.childNodes):[o],ve,e):Ne(o)?o.then(i):"placeholder"in o?ye(o,i):"text"in o?i(String(o.text)):"any"in o?i(o.any):"html"in o?t=fe(e.parentNode,t,Q.call(q(e,[].concat(o.html).join("")).childNodes),ve,e):i("length"in o?Q.call(o):p.invoke(o,i))}}},xe=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return oe(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===y||a===N?(Se&&(Se=!1,i()),de.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1))}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};var l=!1,u=n.cloneNode(!0);return function(t){o!==t&&(o=t,u.value!==t&&(null==t?(l&&(l=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,l||(l=!0,e.setAttributeNode(u)))))}},Ee=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?Ne(r)?r.then(n):"placeholder"in r?ye(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?Q.call(r).join(""):p.invoke(r,n)):e.textContent=null==r?"":r)}},Ce={create:me,find:ge},Se=!0,ke=new k,Te=new S,je=R,Ae=function(e,t,n){return Le.test(t)?e:"<"+t+n+"></"+t+">"},Le=/^area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr$/i,Me=new k,Oe=function(e,t){return null==e?De(t||"html"):$e(e,t||"html")},De=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(l){l=U(l);var u=i!==l;return u&&(i=l,r=O(document),n="svg"===e?document.createElementNS(b,"svg"):r,a=o.bind(n)),a.apply(null,arguments),u&&("svg"===e&&G(r,Q.call(n.childNodes)),t=Pe(r)),t}},$e=function(e,t){var n=t.indexOf(":"),r=Me.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Me.set(e,r={}),r[i]||(r[i]=De(t))},Pe=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==g&&0===A.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},Be=function(e){return o.bind(e)},Re=p.define;return c.Component=t,c.bind=Be,c.define=Re,c.diff=fe,c.hyper=c,c.wire=Oe,function(e){Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:s("html",e),svg:s("svg",e),state:s("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}})}(De),c}(window);
