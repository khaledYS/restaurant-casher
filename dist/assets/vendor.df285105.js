var j={exports:{}},H={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Vf=Object.getOwnPropertySymbols,h1=Object.prototype.hasOwnProperty,f1=Object.prototype.propertyIsEnumerable;function d1(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function p1(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var bf=p1()?Object.assign:function(t,e){for(var n,r=d1(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)h1.call(n,o)&&(r[o]=n[o]);if(Vf){i=Vf(n);for(var a=0;a<i.length;a++)f1.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=bf,ir=60103,jf=60106;H.Fragment=60107;H.StrictMode=60108;H.Profiler=60114;var Bf=60109,zf=60110,Hf=60112;H.Suspense=60113;var Wf=60115,qf=60116;if(typeof Symbol=="function"&&Symbol.for){var ot=Symbol.for;ir=ot("react.element"),jf=ot("react.portal"),H.Fragment=ot("react.fragment"),H.StrictMode=ot("react.strict_mode"),H.Profiler=ot("react.profiler"),Bf=ot("react.provider"),zf=ot("react.context"),Hf=ot("react.forward_ref"),H.Suspense=ot("react.suspense"),Wf=ot("react.memo"),qf=ot("react.lazy")}var Kf=typeof Symbol=="function"&&Symbol.iterator;function m1(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}function ai(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf={};function sr(t,e,n){this.props=t,this.context=e,this.refs=Qf,this.updater=n||Gf}sr.prototype.isReactComponent={};sr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(ai(85));this.updater.enqueueSetState(this,t,e,"setState")};sr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yf(){}Yf.prototype=sr.prototype;function Sl(t,e,n){this.props=t,this.context=e,this.refs=Qf,this.updater=n||Gf}var Tl=Sl.prototype=new Yf;Tl.constructor=Sl;_l(Tl,sr.prototype);Tl.isPureReactComponent=!0;var Il={current:null},Xf=Object.prototype.hasOwnProperty,Jf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xf.call(e,r)&&!Jf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ir,type:t,key:s,ref:o,props:i,_owner:Il.current}}function g1(t,e){return{$$typeof:ir,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kl(t){return typeof t=="object"&&t!==null&&t.$$typeof===ir}function y1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ed=/\/+/g;function Cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?y1(""+t.key):e.toString(36)}function Ys(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ir:case jf:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cl(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(ed,"$&/")+"/"),Ys(i,e,n,"",function(u){return u})):i!=null&&(kl(i)&&(i=g1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ed,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cl(s,a);o+=Ys(s,e,n,l,i)}else if(l=m1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cl(s,a++),o+=Ys(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(ai(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Xs(t,e,n){if(t==null)return t;var r=[],i=0;return Ys(t,r,"","",function(s){return e.call(n,s,i++)}),r}function v1(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var td={current:null};function St(){var t=td.current;if(t===null)throw Error(ai(321));return t}var w1={ReactCurrentDispatcher:td,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Il,IsSomeRendererActing:{current:!1},assign:_l};H.Children={map:Xs,forEach:function(t,e,n){Xs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xs(t,function(){e++}),e},toArray:function(t){return Xs(t,function(e){return e})||[]},only:function(t){if(!kl(t))throw Error(ai(143));return t}};H.Component=sr;H.PureComponent=Sl;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;H.cloneElement=function(t,e,n){if(t==null)throw Error(ai(267,t));var r=_l({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Il.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xf.call(e,l)&&!Jf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ir,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:zf,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Bf,_context:t},t.Consumer=t};H.createElement=Zf;H.createFactory=function(t){var e=Zf.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Hf,render:t}};H.isValidElement=kl;H.lazy=function(t){return{$$typeof:qf,_payload:{_status:-1,_result:t},_init:v1}};H.memo=function(t,e){return{$$typeof:Wf,type:t,compare:e===void 0?null:e}};H.useCallback=function(t,e){return St().useCallback(t,e)};H.useContext=function(t,e){return St().useContext(t,e)};H.useDebugValue=function(){};H.useEffect=function(t,e){return St().useEffect(t,e)};H.useImperativeHandle=function(t,e,n){return St().useImperativeHandle(t,e,n)};H.useLayoutEffect=function(t,e){return St().useLayoutEffect(t,e)};H.useMemo=function(t,e){return St().useMemo(t,e)};H.useReducer=function(t,e,n){return St().useReducer(t,e,n)};H.useRef=function(t){return St().useRef(t)};H.useState=function(t){return St().useState(t)};H.version="17.0.2";j.exports=H;var _n=j.exports,nd={exports:{}},Ze={},rd={exports:{}},id={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var I=t.unstable_now();l(!0,I),l=null}catch(M){throw setTimeout(c,0),M}};e=function(I){l!==null?setTimeout(e,0,I):(l=I,setTimeout(c,0))},n=function(I,M){u=setTimeout(I,M)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var w=!1,E=null,f=-1,h=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<I?Math.floor(1e3/I):5};var y=new MessageChannel,v=y.port2;y.port1.onmessage=function(){if(E!==null){var I=t.unstable_now();m=I+h;try{E(!0,I)?v.postMessage(null):(w=!1,E=null)}catch(M){throw v.postMessage(null),M}}else w=!1},e=function(I){E=I,w||(w=!0,v.postMessage(null))},n=function(I,M){f=p(function(){I(t.unstable_now())},M)},r=function(){d(f),f=-1}}function A(I,M){var B=I.length;I.push(M);e:for(;;){var ie=B-1>>>1,ge=I[ie];if(ge!==void 0&&0<L(ge,M))I[ie]=M,I[B]=ge,B=ie;else break e}}function T(I){return I=I[0],I===void 0?null:I}function P(I){var M=I[0];if(M!==void 0){var B=I.pop();if(B!==M){I[0]=B;e:for(var ie=0,ge=I.length;ie<ge;){var wn=2*(ie+1)-1,En=I[wn],oi=wn+1,rr=I[oi];if(En!==void 0&&0>L(En,B))rr!==void 0&&0>L(rr,En)?(I[ie]=rr,I[oi]=B,ie=oi):(I[ie]=En,I[wn]=B,ie=wn);else if(rr!==void 0&&0>L(rr,B))I[ie]=rr,I[oi]=B,ie=oi;else break e}}return M}return null}function L(I,M){var B=I.sortIndex-M.sortIndex;return B!==0?B:I.id-M.id}var R=[],ue=[],yl=1,Je=null,Ne=3,Qs=!1,vn=!1,si=!1;function vl(I){for(var M=T(ue);M!==null;){if(M.callback===null)P(ue);else if(M.startTime<=I)P(ue),M.sortIndex=M.expirationTime,A(R,M);else break;M=T(ue)}}function wl(I){if(si=!1,vl(I),!vn)if(T(R)!==null)vn=!0,e(El);else{var M=T(ue);M!==null&&n(wl,M.startTime-I)}}function El(I,M){vn=!1,si&&(si=!1,r()),Qs=!0;var B=Ne;try{for(vl(M),Je=T(R);Je!==null&&(!(Je.expirationTime>M)||I&&!t.unstable_shouldYield());){var ie=Je.callback;if(typeof ie=="function"){Je.callback=null,Ne=Je.priorityLevel;var ge=ie(Je.expirationTime<=M);M=t.unstable_now(),typeof ge=="function"?Je.callback=ge:Je===T(R)&&P(R),vl(M)}else P(R);Je=T(R)}if(Je!==null)var wn=!0;else{var En=T(ue);En!==null&&n(wl,En.startTime-M),wn=!1}return wn}finally{Je=null,Ne=B,Qs=!1}}var c1=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){vn||Qs||(vn=!0,e(El))},t.unstable_getCurrentPriorityLevel=function(){return Ne},t.unstable_getFirstCallbackNode=function(){return T(R)},t.unstable_next=function(I){switch(Ne){case 1:case 2:case 3:var M=3;break;default:M=Ne}var B=Ne;Ne=M;try{return I()}finally{Ne=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=c1,t.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=Ne;Ne=I;try{return M()}finally{Ne=B}},t.unstable_scheduleCallback=function(I,M,B){var ie=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ie+B:ie):B=ie,I){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=B+ge,I={id:yl++,callback:M,priorityLevel:I,startTime:B,expirationTime:ge,sortIndex:-1},B>ie?(I.sortIndex=B,A(ue,I),T(R)===null&&I===T(ue)&&(si?r():si=!0,n(wl,B-ie))):(I.sortIndex=ge,A(R,I),vn||Qs||(vn=!0,e(El))),I},t.unstable_wrapCallback=function(I){var M=Ne;return function(){var B=Ne;Ne=M;try{return I.apply(this,arguments)}finally{Ne=B}}}})(id);rd.exports=id;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=j.exports,Z=bf,he=rd.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Js)throw Error(S(227));var sd=new Set,li={};function Sn(t,e){or(t,e),or(t+"Capture",e)}function or(t,e){for(li[t]=e,t=0;t<e.length;t++)sd.add(e[t])}var Tt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od=Object.prototype.hasOwnProperty,ad={},ld={};function _1(t){return od.call(ld,t)?!0:od.call(ad,t)?!1:E1.test(t)?ld[t]=!0:(ad[t]=!0,!1)}function S1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T1(t,e,n,r){if(e===null||typeof e=="undefined"||S1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Al(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nl,Al);ye[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nl,Al);ye[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nl,Al);ye[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rl(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(T1(e,n,i,r)&&(n=null),r||i===null?_1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=Js.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=60103,In=60106,$t=60107,Pl=60108,ci=60114,Ol=60109,Dl=60110,Zs=60112,hi=60113,eo=60120,to=60115,xl=60116,Ll=60121,Ml=60128,ud=60129,$l=60130,Ul=60131;if(typeof Symbol=="function"&&Symbol.for){var fe=Symbol.for;ui=fe("react.element"),In=fe("react.portal"),$t=fe("react.fragment"),Pl=fe("react.strict_mode"),ci=fe("react.profiler"),Ol=fe("react.provider"),Dl=fe("react.context"),Zs=fe("react.forward_ref"),hi=fe("react.suspense"),eo=fe("react.suspense_list"),to=fe("react.memo"),xl=fe("react.lazy"),Ll=fe("react.block"),fe("react.scope"),Ml=fe("react.opaque.id"),ud=fe("react.debug_trace_mode"),$l=fe("react.offscreen"),Ul=fe("react.legacy_hidden")}var cd=typeof Symbol=="function"&&Symbol.iterator;function fi(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var Fl;function di(t){if(Fl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fl=e&&e[1]||""}return`
`+Fl+t}var Vl=!1;function no(t,e){if(!t||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?di(t):""}function I1(t){switch(t.tag){case 5:return di(t.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return t=no(t.type,!1),t;case 11:return t=no(t.type.render,!1),t;case 22:return t=no(t.type._render,!1),t;case 1:return t=no(t.type,!0),t;default:return""}}function ar(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $t:return"Fragment";case In:return"Portal";case ci:return"Profiler";case Pl:return"StrictMode";case hi:return"Suspense";case eo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dl:return(t.displayName||"Context")+".Consumer";case Ol:return(t._context.displayName||"Context")+".Provider";case Zs:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case to:return ar(t.type);case Ll:return ar(t._render);case xl:e=t._payload,t=t._init;try{return ar(t(e))}catch{}}return null}function Ut(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function hd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k1(t){var e=hd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=k1(t))}function fd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function io(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function bl(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function dd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ut(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pd(t,e){e=e.checked,e!=null&&Rl(t,"checked",e,!1)}function jl(t,e){pd(t,e);var n=Ut(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bl(t,e.type,Ut(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bl(t,e,n){(e!=="number"||io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function C1(t){var e="";return Js.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function zl(t,e){return t=Z({children:void 0},e),(e=C1(e.children))&&(t.children=e),t}function lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ut(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ut(n)}}function yd(t,e){var n=Ut(e.value),r=Ut(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Wl={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function wd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,Ed=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Wl.svg||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N1=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(t){N1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mi[e]=mi[t]})});function _d(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mi.hasOwnProperty(t)&&mi[t]?(""+e).trim():e+"px"}function Sd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_d(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var A1=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(t,e){if(e){if(A1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Gl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Ql(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yl=null,ur=null,cr=null;function Td(t){if(t=Li(t)){if(typeof Yl!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Io(e),Yl(t.stateNode,t.type,e))}}function Id(t){ur?cr?cr.push(t):cr=[t]:ur=t}function kd(){if(ur){var t=ur,e=cr;if(cr=ur=null,Td(t),e)for(t=0;t<e.length;t++)Td(e[t])}}function Xl(t,e){return t(e)}function Cd(t,e,n,r,i){return t(e,n,r,i)}function Jl(){}var Nd=Xl,kn=!1,Zl=!1;function eu(){(ur!==null||cr!==null)&&(Jl(),kd())}function R1(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Nd(t,e,n)}finally{Zl=!1,eu()}}function gi(t,e){var n=t.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var tu=!1;if(Tt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){tu=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{tu=!1}function P1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vi=!1,oo=null,ao=!1,nu=null,O1={onError:function(t){vi=!0,oo=t}};function D1(t,e,n,r,i,s,o,a,l){vi=!1,oo=null,P1.apply(O1,arguments)}function x1(t,e,n,r,i,s,o,a,l){if(D1.apply(this,arguments),vi){if(vi){var u=oo;vi=!1,oo=null}else throw Error(S(198));ao||(ao=!0,nu=u)}}function Cn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ad(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rd(t){if(Cn(t)!==t)throw Error(S(188))}function L1(t){var e=t.alternate;if(!e){if(e=Cn(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rd(i),t;if(s===r)return Rd(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Pd(t){if(t=L1(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Od(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Dd,ru,xd,Ld,iu=!1,ct=[],Ft=null,Vt=null,bt=null,wi=new Map,Ei=new Map,_i=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function $d(t,e){switch(t){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=su(e,n,r,i,s),e!==null&&(e=Li(e),e!==null&&ru(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function M1(t,e,n,r,i){switch(e){case"focusin":return Ft=Si(Ft,t,e,n,r,i),!0;case"dragenter":return Vt=Si(Vt,t,e,n,r,i),!0;case"mouseover":return bt=Si(bt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wi.set(s,Si(wi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Si(Ei.get(s)||null,t,e,n,r,i)),!0}return!1}function $1(t){var e=Nn(t.target);if(e!==null){var n=Cn(e);if(n!==null){if(e=n.tag,e===13){if(e=Ad(n),e!==null){t.blockedOn=e,Ld(t.lanePriority,function(){he.unstable_runWithPriority(t.priority,function(){xd(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Li(n),e!==null&&ru(e),t.blockedOn=n,!1;e.shift()}return!0}function Ud(t,e,n){lo(t)&&n.delete(e)}function U1(){for(iu=!1;0<ct.length;){var t=ct[0];if(t.blockedOn!==null){t=Li(t.blockedOn),t!==null&&Dd(t);break}for(var e=t.targetContainers;0<e.length;){var n=hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&ct.shift()}Ft!==null&&lo(Ft)&&(Ft=null),Vt!==null&&lo(Vt)&&(Vt=null),bt!==null&&lo(bt)&&(bt=null),wi.forEach(Ud),Ei.forEach(Ud)}function Ti(t,e){t.blockedOn===e&&(t.blockedOn=null,iu||(iu=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,U1)))}function Fd(t){function e(i){return Ti(i,t)}if(0<ct.length){Ti(ct[0],t);for(var n=1;n<ct.length;n++){var r=ct[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ft!==null&&Ti(Ft,t),Vt!==null&&Ti(Vt,t),bt!==null&&Ti(bt,t),wi.forEach(e),Ei.forEach(e),n=0;n<_i.length;n++)r=_i[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_i.length&&(n=_i[0],n.blockedOn===null);)$1(n),n.blockedOn===null&&_i.shift()}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},ou={},Vd={};Tt&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function co(t){if(ou[t])return ou[t];if(!hr[t])return t;var e=hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vd)return ou[t]=e[n];return t}var bd=co("animationend"),jd=co("animationiteration"),Bd=co("animationstart"),zd=co("transitionend"),Hd=new Map,au=new Map,F1=["abort","abort",bd,"animationEnd",jd,"animationIteration",Bd,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",zd,"transitionEnd","waiting","waiting"];function lu(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),au.set(r,e),Hd.set(r,i),Sn(i,[r])}}var V1=he.unstable_now;V1();var G=8;function fr(t){if((1&t)!=0)return G=15,1;if((2&t)!=0)return G=14,2;if((4&t)!=0)return G=13,4;var e=24&t;return e!==0?(G=12,e):(t&32)!=0?(G=11,32):(e=192&t,e!==0?(G=10,e):(t&256)!=0?(G=9,256):(e=3584&t,e!==0?(G=8,e):(t&4096)!=0?(G=7,4096):(e=4186112&t,e!==0?(G=6,e):(e=62914560&t,e!==0?(G=5,e):t&67108864?(G=4,67108864):(t&134217728)!=0?(G=3,134217728):(e=805306368&t,e!==0?(G=2,e):(1073741824&t)!=0?(G=1,1073741824):(G=8,t))))))}function b1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function j1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(S(358,t))}}function Ii(t,e){var n=t.pendingLanes;if(n===0)return G=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=G=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=fr(l),i=G):(a&=s,a!==0&&(r=fr(a),i=G))}else s=n&~o,s!==0?(r=fr(s),i=G):a!==0&&(r=fr(a),i=G);if(r===0)return 0;if(r=31-jt(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(fr(e),i<=G)return e;G=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ho(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=dr(24&~e),t===0?ho(10,e):t;case 10:return t=dr(192&~e),t===0?ho(8,e):t;case 8:return t=dr(3584&~e),t===0&&(t=dr(4186112&~e),t===0&&(t=512)),t;case 2:return e=dr(805306368&~e),e===0&&(e=268435456),e}throw Error(S(358,t))}function dr(t){return t&-t}function uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-jt(e),t[e]=n}var jt=Math.clz32?Math.clz32:H1,B1=Math.log,z1=Math.LN2;function H1(t){return t===0?32:31-(B1(t)/z1|0)|0}var W1=he.unstable_UserBlockingPriority,q1=he.unstable_runWithPriority,po=!0;function K1(t,e,n,r){kn||Jl();var i=cu,s=kn;kn=!0;try{Cd(i,t,e,n,r)}finally{(kn=s)||eu()}}function G1(t,e,n,r){q1(W1,cu.bind(null,t,e,n,r))}function cu(t,e,n,r){if(po){var i;if((i=(e&4)==0)&&0<ct.length&&-1<Md.indexOf(t))t=su(null,t,e,n,r),ct.push(t);else{var s=hu(t,e,n,r);if(s===null)i&&$d(t,r);else{if(i){if(-1<Md.indexOf(t)){t=su(s,t,e,n,r),ct.push(t);return}if(M1(s,t,e,n,r))return;$d(t,r)}_p(t,e,r,null,n)}}}}function hu(t,e,n,r){var i=Ql(r);if(i=Nn(i),i!==null){var s=Cn(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Ad(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return _p(t,e,r,i,n),null}var Bt=null,fu=null,mo=null;function qd(){if(mo)return mo;var t,e=fu,n=e.length,r,i="value"in Bt?Bt.value:Bt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mo=i.slice(t,1<r?1-r:void 0)}function go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Kd(){return!1}function Ge(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:Kd,this.isPropagationStopped=Kd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=Ge(pr),ki=Z({},pr,{view:0,detail:0}),Q1=Ge(ki),pu,mu,Ci,vo=Z({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(pu=t.screenX-Ci.screenX,mu=t.screenY-Ci.screenY):mu=pu=0,Ci=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Gd=Ge(vo),Y1=Z({},vo,{dataTransfer:0}),X1=Ge(Y1),J1=Z({},ki,{relatedTarget:0}),gu=Ge(J1),Z1=Z({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),ew=Ge(Z1),tw=Z({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nw=Ge(tw),rw=Z({},pr,{data:0}),Qd=Ge(rw),iw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ow={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ow[t])?!!e[t]:!1}function yu(){return aw}var lw=Z({},ki,{key:function(t){if(t.key){var e=iw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uw=Ge(lw),cw=Z({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=Ge(cw),hw=Z({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),fw=Ge(hw),dw=Z({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pw=Ge(dw),mw=Z({},vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gw=Ge(mw),yw=[9,13,27,32],vu=Tt&&"CompositionEvent"in window,Ni=null;Tt&&"documentMode"in document&&(Ni=document.documentMode);var vw=Tt&&"TextEvent"in window&&!Ni,Xd=Tt&&(!vu||Ni&&8<Ni&&11>=Ni),Jd=String.fromCharCode(32),Zd=!1;function ep(t,e){switch(t){case"keyup":return yw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mr=!1;function ww(t,e){switch(t){case"compositionend":return tp(e);case"keypress":return e.which!==32?null:(Zd=!0,Jd);case"textInput":return t=e.data,t===Jd&&Zd?null:t;default:return null}}function Ew(t,e){if(mr)return t==="compositionend"||!vu&&ep(t,e)?(t=qd(),mo=fu=Bt=null,mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xd&&e.locale!=="ko"?null:e.data;default:return null}}var _w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_w[t.type]:e==="textarea"}function rp(t,e,n,r){Id(r),e=Eo(e,"onChange"),0<e.length&&(n=new du("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ai=null,Ri=null;function Sw(t){gp(t,0)}function wo(t){var e=Er(t);if(fd(e))return t}function Tw(t,e){if(t==="change")return e}var ip=!1;if(Tt){var wu;if(Tt){var Eu="oninput"in document;if(!Eu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),Eu=typeof sp.oninput=="function"}wu=Eu}else wu=!1;ip=wu&&(!document.documentMode||9<document.documentMode)}function op(){Ai&&(Ai.detachEvent("onpropertychange",ap),Ri=Ai=null)}function ap(t){if(t.propertyName==="value"&&wo(Ri)){var e=[];if(rp(e,Ri,t,Ql(t)),t=Sw,kn)t(e);else{kn=!0;try{Xl(t,e)}finally{kn=!1,eu()}}}}function Iw(t,e,n){t==="focusin"?(op(),Ai=e,Ri=n,Ai.attachEvent("onpropertychange",ap)):t==="focusout"&&op()}function kw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wo(Ri)}function Cw(t,e){if(t==="click")return wo(e)}function Nw(t,e){if(t==="input"||t==="change")return wo(e)}function Aw(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var et=typeof Object.is=="function"?Object.is:Aw,Rw=Object.prototype.hasOwnProperty;function Pi(t,e){if(et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Rw.call(e,n[r])||!et(t[n[r]],e[n[r]]))return!1;return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=lp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function cp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hp(){for(var t=window,e=io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=io(t.document)}return e}function _u(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Pw=Tt&&"documentMode"in document&&11>=document.documentMode,gr=null,Su=null,Oi=null,Tu=!1;function fp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||gr==null||gr!==io(r)||(r=gr,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oi&&Pi(Oi,r)||(Oi=r,r=Eo(Su,"onSelect"),0<r.length&&(e=new du("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gr)))}lu("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);lu("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);lu(F1,2);for(var dp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Iu=0;Iu<dp.length;Iu++)au.set(dp[Iu],0);or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function mp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,x1(r,e,void 0,t),t.currentTarget=null}function gp(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mp(i,a,u),s=l}}}if(ao)throw t=nu,ao=!1,nu=null,t}function Y(t,e){var n=Np(e),r=t+"__bubble";n.has(r)||(Ep(e,t,2,!1),n.add(r))}var yp="_reactListening"+Math.random().toString(36).slice(2);function vp(t){t[yp]||(t[yp]=!0,sd.forEach(function(e){pp.has(e)||wp(e,!1,t,null),wp(e,!0,t,null)}))}function wp(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&pp.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Np(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Ep(s,t,i,e),o.add(a))}function Ep(t,e,n,r){var i=au.get(e);switch(i===void 0?2:i){case 0:i=K1;break;case 1:i=G1;break;default:i=cu}n=i.bind(null,e,n,t),i=void 0,!tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _p(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}R1(function(){var u=s,c=Ql(n),p=[];e:{var d=Hd.get(t);if(d!==void 0){var g=du,w=t;switch(t){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":g=uw;break;case"focusin":w="focus",g=gu;break;case"focusout":w="blur",g=gu;break;case"beforeblur":case"afterblur":g=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fw;break;case bd:case jd:case Bd:g=ew;break;case zd:g=pw;break;case"scroll":g=Q1;break;case"wheel":g=gw;break;case"copy":case"cut":case"paste":g=nw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yd}var E=(e&4)!=0,f=!E&&t==="scroll",h=E?d!==null?d+"Capture":null:d;E=[];for(var m=u,y;m!==null;){y=m;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,h!==null&&(v=gi(m,h),v!=null&&E.push(xi(m,v,y)))),f)break;m=m.return}0<E.length&&(d=new g(d,w,null,n,c),p.push({event:d,listeners:E}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(w=n.relatedTarget||n.fromElement)&&(Nn(w)||w[wr]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Nn(w):null,w!==null&&(f=Cn(w),w!==f||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(E=Gd,v="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Yd,v="onPointerLeave",h="onPointerEnter",m="pointer"),f=g==null?d:Er(g),y=w==null?d:Er(w),d=new E(v,m+"leave",g,n,c),d.target=f,d.relatedTarget=y,v=null,Nn(c)===u&&(E=new E(h,m+"enter",w,n,c),E.target=y,E.relatedTarget=f,v=E),f=v,g&&w)t:{for(E=g,h=w,m=0,y=E;y;y=yr(y))m++;for(y=0,v=h;v;v=yr(v))y++;for(;0<m-y;)E=yr(E),m--;for(;0<y-m;)h=yr(h),y--;for(;m--;){if(E===h||h!==null&&E===h.alternate)break t;E=yr(E),h=yr(h)}E=null}else E=null;g!==null&&Sp(p,d,g,E,!1),w!==null&&f!==null&&Sp(p,f,w,E,!0)}}e:{if(d=u?Er(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var A=Tw;else if(np(d))if(ip)A=Nw;else{A=kw;var T=Iw}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Cw);if(A&&(A=A(t,u))){rp(p,A,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Bl(d,"number",d.value)}switch(T=u?Er(u):window,t){case"focusin":(np(T)||T.contentEditable==="true")&&(gr=T,Su=u,Oi=null);break;case"focusout":Oi=Su=gr=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,fp(p,n,c);break;case"selectionchange":if(Pw)break;case"keydown":case"keyup":fp(p,n,c)}var P;if(vu)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else mr?ep(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Xd&&n.locale!=="ko"&&(mr||L!=="onCompositionStart"?L==="onCompositionEnd"&&mr&&(P=qd()):(Bt=c,fu="value"in Bt?Bt.value:Bt.textContent,mr=!0)),T=Eo(u,L),0<T.length&&(L=new Qd(L,t,null,n,c),p.push({event:L,listeners:T}),P?L.data=P:(P=tp(n),P!==null&&(L.data=P)))),(P=vw?ww(t,n):Ew(t,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(c=new Qd("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=P))}gp(p,e)})}function xi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gi(t,n),s!=null&&r.unshift(xi(t,s,i)),s=gi(t,e),s!=null&&r.push(xi(t,s,i))),t=t.return}return r}function yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gi(n,s),l!=null&&o.unshift(xi(n,l,a))):i||(l=gi(n,s),l!=null&&o.push(xi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function _o(){}var ku=null,Cu=null;function Tp(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Nu(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ip=typeof setTimeout=="function"?setTimeout:void 0,Ow=typeof clearTimeout=="function"?clearTimeout:void 0;function Au(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ru=0;function Dw(t){return{$$typeof:Ml,toString:t,valueOf:t}}var So=Math.random().toString(36).slice(2),zt="__reactFiber$"+So,To="__reactProps$"+So,wr="__reactContainer$"+So,Cp="__reactEvents$"+So;function Nn(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[zt])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function Li(t){return t=t[zt]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Io(t){return t[To]||null}function Np(t){var e=t[Cp];return e===void 0&&(e=t[Cp]=new Set),e}var Pu=[],_r=-1;function Ht(t){return{current:t}}function X(t){0>_r||(t.current=Pu[_r],Pu[_r]=null,_r--)}function ne(t,e){_r++,Pu[_r]=t.current,t.current=e}var Wt={},Ae=Ht(Wt),be=Ht(!1),An=Wt;function Sr(t,e){var n=t.type.contextTypes;if(!n)return Wt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function ko(){X(be),X(Ae)}function Ap(t,e,n){if(Ae.current!==Wt)throw Error(S(168));ne(Ae,e),ne(be,n)}function Rp(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,ar(e)||"Unknown",i));return Z({},n,r)}function Co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wt,An=Ae.current,ne(Ae,t),ne(be,be.current),!0}function Pp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Rp(t,e,An),r.__reactInternalMemoizedMergedChildContext=t,X(be),X(Ae),ne(Ae,t)):X(be),ne(be,n)}var Ou=null,Rn=null,xw=he.unstable_runWithPriority,Du=he.unstable_scheduleCallback,xu=he.unstable_cancelCallback,Lw=he.unstable_shouldYield,Op=he.unstable_requestPaint,Lu=he.unstable_now,Mw=he.unstable_getCurrentPriorityLevel,No=he.unstable_ImmediatePriority,Dp=he.unstable_UserBlockingPriority,xp=he.unstable_NormalPriority,Lp=he.unstable_LowPriority,Mp=he.unstable_IdlePriority,Mu={},$w=Op!==void 0?Op:function(){},It=null,Ao=null,$u=!1,$p=Lu(),Re=1e4>$p?Lu:function(){return Lu()-$p};function Tr(){switch(Mw()){case No:return 99;case Dp:return 98;case xp:return 97;case Lp:return 96;case Mp:return 95;default:throw Error(S(332))}}function Up(t){switch(t){case 99:return No;case 98:return Dp;case 97:return xp;case 96:return Lp;case 95:return Mp;default:throw Error(S(332))}}function Pn(t,e){return t=Up(t),xw(t,e)}function Mi(t,e,n){return t=Up(t),Du(t,e,n)}function ht(){if(Ao!==null){var t=Ao;Ao=null,xu(t)}Fp()}function Fp(){if(!$u&&It!==null){$u=!0;var t=0;try{var e=It;Pn(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),It=null}catch(n){throw It!==null&&(It=It.slice(t+1)),Du(No,ht),n}finally{$u=!1}}}var Uw=Tn.ReactCurrentBatchConfig;function at(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ro=Ht(null),Po=null,Ir=null,Oo=null;function Uu(){Oo=Ir=Po=null}function Fu(t){var e=Ro.current;X(Ro),t.type._context._currentValue=e}function Vp(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function kr(t,e){Po=t,Oo=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(lt=!0),t.firstContext=null)}function tt(t,e){if(Oo!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Oo=t,e=1073741823),e={context:t,observedBits:e,next:null},Ir===null){if(Po===null)throw Error(S(308));Ir=e,Po.dependencies={lanes:0,firstContext:e,responders:null}}else Ir=Ir.next=e;return t._currentValue}var qt=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function bp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gt(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function jp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $i(t,e,n,r){var i=t.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var p=c.lastBaseUpdate;p!==o&&(p===null?c.firstBaseUpdate=u:p.next=u,c.lastBaseUpdate=l)}}if(s!==null){p=i.baseState,o=0,c=u=l=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,w=s;switch(a=e,d=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){p=g.call(d,p,a);break e}p=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=w.payload,a=typeof g=="function"?g.call(d,p,a):g,a==null)break e;p=Z({},p,a);break e;case 2:qt=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=p):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,Gi|=o,t.lanes=o,t.memoizedState=p}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var zp=new Js.Component().refs;function Do(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xo={isMounted:function(t){return(t=t._reactInternals)?Cn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Xt(t),s=Kt(r,i);s.payload=e,n!=null&&(s.callback=n),Gt(t,s),Jt(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Xt(t),s=Kt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Gt(t,s),Jt(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Xt(t),i=Kt(n,r);i.tag=2,e!=null&&(i.callback=e),Gt(t,i),Jt(t,r,n)}};function Hp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,s):!0}function Wp(t,e,n){var r=!1,i=Wt,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=je(e)?An:Ae.current,r=e.contextTypes,s=(r=r!=null)?Sr(t,i):Wt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xo.enqueueReplaceState(e,e.state,null)}function bu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zp,Vu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=je(e)?An:Ae.current,i.context=Sr(t,s)),$i(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Do(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xo.enqueueReplaceState(i,i.state,null),$i(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Lo=Array.isArray;function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===zp&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Mo(t,e){if(t.type!=="textarea")throw Error(S(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Kp(t){function e(f,h){if(t){var m=f.lastEffect;m!==null?(m.nextEffect=h,f.lastEffect=h):f.firstEffect=f.lastEffect=h,h.nextEffect=null,h.flags=8}}function n(f,h){if(!t)return null;for(;h!==null;)e(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=tn(f,h),f.index=0,f.sibling=null,f}function s(f,h,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<h?(f.flags=2,h):m):(f.flags=2,h)):h}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,h,m,y){return h===null||h.tag!==6?(h=Sc(m,f.mode,y),h.return=f,h):(h=i(h,m),h.return=f,h)}function l(f,h,m,y){return h!==null&&h.elementType===m.type?(y=i(h,m.props),y.ref=Ui(f,h,m),y.return=f,y):(y=Zo(m.type,m.key,m.props,null,f.mode,y),y.ref=Ui(f,h,m),y.return=f,y)}function u(f,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Tc(m,f.mode,y),h.return=f,h):(h=i(h,m.children||[]),h.return=f,h)}function c(f,h,m,y,v){return h===null||h.tag!==7?(h=xr(m,f.mode,y,v),h.return=f,h):(h=i(h,m),h.return=f,h)}function p(f,h,m){if(typeof h=="string"||typeof h=="number")return h=Sc(""+h,f.mode,m),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:return m=Zo(h.type,h.key,h.props,null,f.mode,m),m.ref=Ui(f,null,h),m.return=f,m;case In:return h=Tc(h,f.mode,m),h.return=f,h}if(Lo(h)||fi(h))return h=xr(h,f.mode,m,null),h.return=f,h;Mo(f,h)}return null}function d(f,h,m,y){var v=h!==null?h.key:null;if(typeof m=="string"||typeof m=="number")return v!==null?null:a(f,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ui:return m.key===v?m.type===$t?c(f,h,m.props.children,y,v):l(f,h,m,y):null;case In:return m.key===v?u(f,h,m,y):null}if(Lo(m)||fi(m))return v!==null?null:c(f,h,m,y,null);Mo(f,m)}return null}function g(f,h,m,y,v){if(typeof y=="string"||typeof y=="number")return f=f.get(m)||null,a(h,f,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ui:return f=f.get(y.key===null?m:y.key)||null,y.type===$t?c(h,f,y.props.children,v,y.key):l(h,f,y,v);case In:return f=f.get(y.key===null?m:y.key)||null,u(h,f,y,v)}if(Lo(y)||fi(y))return f=f.get(m)||null,c(h,f,y,v,null);Mo(h,y)}return null}function w(f,h,m,y){for(var v=null,A=null,T=h,P=h=0,L=null;T!==null&&P<m.length;P++){T.index>P?(L=T,T=null):L=T.sibling;var R=d(f,T,m[P],y);if(R===null){T===null&&(T=L);break}t&&T&&R.alternate===null&&e(f,T),h=s(R,h,P),A===null?v=R:A.sibling=R,A=R,T=L}if(P===m.length)return n(f,T),v;if(T===null){for(;P<m.length;P++)T=p(f,m[P],y),T!==null&&(h=s(T,h,P),A===null?v=T:A.sibling=T,A=T);return v}for(T=r(f,T);P<m.length;P++)L=g(T,f,P,m[P],y),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?P:L.key),h=s(L,h,P),A===null?v=L:A.sibling=L,A=L);return t&&T.forEach(function(ue){return e(f,ue)}),v}function E(f,h,m,y){var v=fi(m);if(typeof v!="function")throw Error(S(150));if(m=v.call(m),m==null)throw Error(S(151));for(var A=v=null,T=h,P=h=0,L=null,R=m.next();T!==null&&!R.done;P++,R=m.next()){T.index>P?(L=T,T=null):L=T.sibling;var ue=d(f,T,R.value,y);if(ue===null){T===null&&(T=L);break}t&&T&&ue.alternate===null&&e(f,T),h=s(ue,h,P),A===null?v=ue:A.sibling=ue,A=ue,T=L}if(R.done)return n(f,T),v;if(T===null){for(;!R.done;P++,R=m.next())R=p(f,R.value,y),R!==null&&(h=s(R,h,P),A===null?v=R:A.sibling=R,A=R);return v}for(T=r(f,T);!R.done;P++,R=m.next())R=g(T,f,P,R.value,y),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?P:R.key),h=s(R,h,P),A===null?v=R:A.sibling=R,A=R);return t&&T.forEach(function(yl){return e(f,yl)}),v}return function(f,h,m,y){var v=typeof m=="object"&&m!==null&&m.type===$t&&m.key===null;v&&(m=m.props.children);var A=typeof m=="object"&&m!==null;if(A)switch(m.$$typeof){case ui:e:{for(A=m.key,v=h;v!==null;){if(v.key===A){switch(v.tag){case 7:if(m.type===$t){n(f,v.sibling),h=i(v,m.props.children),h.return=f,f=h;break e}break;default:if(v.elementType===m.type){n(f,v.sibling),h=i(v,m.props),h.ref=Ui(f,v,m),h.return=f,f=h;break e}}n(f,v);break}else e(f,v);v=v.sibling}m.type===$t?(h=xr(m.props.children,f.mode,y,m.key),h.return=f,f=h):(y=Zo(m.type,m.key,m.props,null,f.mode,y),y.ref=Ui(f,h,m),y.return=f,f=y)}return o(f);case In:e:{for(v=m.key;h!==null;){if(h.key===v)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(f,h.sibling),h=i(h,m.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else e(f,h);h=h.sibling}h=Tc(m,f.mode,y),h.return=f,f=h}return o(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,m),h.return=f,f=h):(n(f,h),h=Sc(m,f.mode,y),h.return=f,f=h),o(f);if(Lo(m))return w(f,h,m,y);if(fi(m))return E(f,h,m,y);if(A&&Mo(f,m),typeof m=="undefined"&&!v)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(S(152,ar(f.type)||"Component"))}return n(f,h)}}var $o=Kp(!0),Gp=Kp(!1),Fi={},ft=Ht(Fi),Vi=Ht(Fi),bi=Ht(Fi);function On(t){if(t===Fi)throw Error(S(174));return t}function ju(t,e){switch(ne(bi,e),ne(Vi,t),ne(ft,Fi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ql(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ql(e,t)}X(ft),ne(ft,e)}function Cr(){X(ft),X(Vi),X(bi)}function Qp(t){On(bi.current);var e=On(ft.current),n=ql(e,t.type);e!==n&&(ne(Vi,t),ne(ft,n))}function Bu(t){Vi.current===t&&(X(ft),X(Vi))}var re=Ht(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kt=null,Qt=null,dt=!1;function Yp(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function zu(t){if(dt){var e=Qt;if(e){var n=e;if(!Xp(t,e)){if(e=vr(n.nextSibling),!e||!Xp(t,e)){t.flags=t.flags&-1025|2,dt=!1,kt=t;return}Yp(kt,n)}kt=t,Qt=vr(e.firstChild)}else t.flags=t.flags&-1025|2,dt=!1,kt=t}}function Jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Fo(t){if(t!==kt)return!1;if(!dt)return Jp(t),dt=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Nu(e,t.memoizedProps))for(e=Qt;e;)Yp(t,e),e=vr(e.nextSibling);if(Jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=kt?vr(t.stateNode.nextSibling):null;return!0}function Hu(){Qt=kt=null,dt=!1}var Nr=[];function Wu(){for(var t=0;t<Nr.length;t++)Nr[t]._workInProgressVersionPrimary=null;Nr.length=0}var ji=Tn.ReactCurrentDispatcher,nt=Tn.ReactCurrentBatchConfig,Bi=0,se=null,Pe=null,ve=null,Vo=!1,zi=!1;function Be(){throw Error(S(321))}function qu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!et(t[n],e[n]))return!1;return!0}function Ku(t,e,n,r,i,s){if(Bi=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ji.current=t===null||t.memoizedState===null?Vw:bw,t=n(r,i),zi){s=0;do{if(zi=!1,!(25>s))throw Error(S(301));s+=1,ve=Pe=null,e.updateQueue=null,ji.current=jw,t=n(r,i)}while(zi)}if(ji.current=zo,e=Pe!==null&&Pe.next!==null,Bi=0,ve=Pe=se=null,Vo=!1,e)throw Error(S(300));return t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?se.memoizedState=ve=t:ve=ve.next=t,ve}function xn(){if(Pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=ve===null?se.memoizedState:ve.next;if(e!==null)ve=e,Pe=t;else{if(t===null)throw Error(S(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ve===null?se.memoizedState=ve=t:ve=ve.next=t}return ve}function pt(t,e){return typeof e=="function"?e(t):e}function Hi(t){var e=xn(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Bi&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,se.lanes|=u,Gi|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,et(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Wi(t){var e=xn(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);et(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Zp(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Bi&t)===t)&&(e._workInProgressVersionPrimary=r,Nr.push(e))),t)return n(e._source);throw Nr.push(e),Error(S(350))}function em(t,e,n,r){var i=$e;if(i===null)throw Error(S(349));var s=e._getVersion,o=s(e._source),a=ji.current,l=a.useState(function(){return Zp(i,e,n)}),u=l[1],c=l[0];l=ve;var p=t.memoizedState,d=p.refs,g=d.getSnapshot,w=p.source;p=p.subscribe;var E=se;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var f=s(e._source);if(!et(o,f)){f=n(e._source),et(c,f)||(u(f),f=Xt(E),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var h=i.entanglements,m=f;0<m;){var y=31-jt(m),v=1<<y;h[y]|=f,m&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=d.getSnapshot,h=d.setSnapshot;try{h(f(e._source));var m=Xt(E);i.mutableReadLanes|=m&i.pendingLanes}catch(y){h(function(){throw y})}})},[e,r]),et(g,n)&&et(w,e)&&et(p,r)||(t={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:c},t.dispatch=u=Xu.bind(null,se,t),l.queue=t,l.baseQueue=null,c=Zp(i,e,n),l.memoizedState=l.baseState=c),c}function tm(t,e,n){var r=xn();return em(r,t,e,n)}function qi(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:t},t=t.dispatch=Xu.bind(null,se,t),[e.memoizedState,t]}function bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nm(t){var e=Dn();return t={current:t},e.memoizedState=t}function jo(){return xn().memoizedState}function Gu(t,e,n,r){var i=Dn();se.flags|=t,i.memoizedState=bo(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&qu(r,o.deps)){bo(e,n,s,r);return}}se.flags|=t,i.memoizedState=bo(1|e,n,s,r)}function rm(t,e){return Gu(516,4,t,e)}function Bo(t,e){return Qu(516,4,t,e)}function im(t,e){return Qu(4,2,t,e)}function sm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function om(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,2,sm.bind(null,e,t),n)}function Yu(){}function am(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lm(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fw(t,e){var n=Tr();Pn(98>n?98:n,function(){t(!0)}),Pn(97<n?97:n,function(){var r=nt.transition;nt.transition=1;try{t(!1),e()}finally{nt.transition=r}})}function Xu(t,e,n){var r=Qe(),i=Xt(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===se||o!==null&&o===se)zi=Vo=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,et(l,a))return}catch{}finally{}Jt(t,i,r)}}var zo={readContext:tt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useOpaqueIdentifier:Be,unstable_isNewReconciler:!1},Vw={readContext:tt,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,2,sm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Xu.bind(null,se,t),[r.memoizedState,t]},useRef:nm,useState:qi,useDebugValue:Yu,useDeferredValue:function(t){var e=qi(t),n=e[0],r=e[1];return rm(function(){var i=nt.transition;nt.transition=1;try{r(t)}finally{nt.transition=i}},[t]),n},useTransition:function(){var t=qi(!1),e=t[0];return t=Fw.bind(null,t[1]),nm(t),[t,e]},useMutableSource:function(t,e,n){var r=Dn();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},em(r,t,e,n)},useOpaqueIdentifier:function(){if(dt){var t=!1,e=Dw(function(){throw t||(t=!0,n("r:"+(Ru++).toString(36))),Error(S(355))}),n=qi(e)[1];return(se.mode&2)==0&&(se.flags|=516,bo(5,function(){n("r:"+(Ru++).toString(36))},void 0,null)),e}return e="r:"+(Ru++).toString(36),qi(e),e},unstable_isNewReconciler:!1},bw={readContext:tt,useCallback:am,useContext:tt,useEffect:Bo,useImperativeHandle:om,useLayoutEffect:im,useMemo:lm,useReducer:Hi,useRef:jo,useState:function(){return Hi(pt)},useDebugValue:Yu,useDeferredValue:function(t){var e=Hi(pt),n=e[0],r=e[1];return Bo(function(){var i=nt.transition;nt.transition=1;try{r(t)}finally{nt.transition=i}},[t]),n},useTransition:function(){var t=Hi(pt)[0];return[jo().current,t]},useMutableSource:tm,useOpaqueIdentifier:function(){return Hi(pt)[0]},unstable_isNewReconciler:!1},jw={readContext:tt,useCallback:am,useContext:tt,useEffect:Bo,useImperativeHandle:om,useLayoutEffect:im,useMemo:lm,useReducer:Wi,useRef:jo,useState:function(){return Wi(pt)},useDebugValue:Yu,useDeferredValue:function(t){var e=Wi(pt),n=e[0],r=e[1];return Bo(function(){var i=nt.transition;nt.transition=1;try{r(t)}finally{nt.transition=i}},[t]),n},useTransition:function(){var t=Wi(pt)[0];return[jo().current,t]},useMutableSource:tm,useOpaqueIdentifier:function(){return Wi(pt)[0]},unstable_isNewReconciler:!1},Bw=Tn.ReactCurrentOwner,lt=!1;function ze(t,e,n,r){e.child=t===null?Gp(e,null,n,r):$o(e,t.child,n,r)}function um(t,e,n,r,i){n=n.render;var s=e.ref;return kr(e,i),r=Ku(t,e,n,r,s,i),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Ct(t,e,i)):(e.flags|=1,ze(t,e,r,i),e.child)}function cm(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,hm(t,e,o,r,i,s)):(t=Zo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Pi,n(i,r)&&t.ref===e.ref)?Ct(t,e,s):(e.flags|=1,t=tn(o,r),t.ref=e.ref,t.return=e,e.child=t)}function hm(t,e,n,r,i,s){if(t!==null&&Pi(t.memoizedProps,r)&&t.ref===e.ref)if(lt=!1,(s&i)!=0)(t.flags&16384)!=0&&(lt=!0);else return e.lanes=t.lanes,Ct(t,e,s);return Zu(t,e,n,r,s)}function Ju(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},Jo(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},Jo(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Jo(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Jo(e,r);return ze(t,e,i,n),e.child}function fm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Zu(t,e,n,r,i){var s=je(n)?An:Ae.current;return s=Sr(e,s),kr(e,i),n=Ku(t,e,n,r,s,i),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Ct(t,e,i)):(e.flags|=1,ze(t,e,n,i),e.child)}function dm(t,e,n,r,i){if(je(n)){var s=!0;Co(e)}else s=!1;if(kr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Wp(e,n,r),bu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=je(n)?An:Ae.current,u=Sr(e,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qp(e,o,r,u),qt=!1;var d=e.memoizedState;o.state=d,$i(e,r,o,i),l=e.memoizedState,a!==r||d!==l||be.current||qt?(typeof c=="function"&&(Do(e,n,c,r),l=e.memoizedState),(a=qt||Hp(e,n,a,r,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,bp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:at(e.type,a),o.props=u,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=je(n)?An:Ae.current,l=Sr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&qp(e,o,r,l),qt=!1,d=e.memoizedState,o.state=d,$i(e,r,o,i);var w=e.memoizedState;a!==p||d!==w||be.current||qt?(typeof g=="function"&&(Do(e,n,g,r),w=e.memoizedState),(u=qt||Hp(e,n,u,r,d,w,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return ec(t,e,n,r,s,i)}function ec(t,e,n,r,i,s){fm(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Pp(e,n,!1),Ct(t,e,s);r=e.stateNode,Bw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$o(e,t.child,null,s),e.child=$o(e,null,a,s)):ze(t,e,a,s),e.memoizedState=r.state,i&&Pp(e,n,!0),e.child}function pm(t){var e=t.stateNode;e.pendingContext?Ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ap(t,e.context,!1),ju(t,e.containerInfo)}var Ho={dehydrated:null,retryLane:0};function mm(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ne(re,i&1),t===null?(r.fallback!==void 0&&zu(e),t=r.children,i=r.fallback,s?(t=gm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Ho,t):typeof r.unstable_expectedLoadTime=="number"?(t=gm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Ho,e.lanes=33554432,t):(n=_c({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=vm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Ho,r):(n=ym(t,e,r.children,n),e.memoizedState=null,n):s?(r=vm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Ho,r):(n=ym(t,e,r.children,n),e.memoizedState=null,n)}function gm(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=_c(e,i,0,null),n=xr(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function ym(t,e,n,r){var i=t.child;return t=i.sibling,n=tn(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function vm(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=tn(o,a),t!==null?r=tn(t,r):(r=xr(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function wm(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Vp(t.return,e)}function tc(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Em(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ze(t,e,r.children,n),r=re.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n);else if(t.tag===19)wm(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(re,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tc(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tc(e,!0,n,null,s,e.lastEffect);break;case"together":tc(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Ct(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var _m,nc,Sm,Tm;_m=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};Sm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(ft.current);var s=null;switch(n){case"input":i=bl(t,i),r=bl(t,r),s=[];break;case"option":i=zl(t,i),r=zl(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=Hl(t,i),r=Hl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_o)}Kl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Ml?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ki(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function zw(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return je(e.type)&&ko(),null;case 3:return Cr(),X(be),X(Ae),Wu(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:r.hydrate||(e.flags|=256)),nc(e),null;case 5:Bu(e);var i=On(bi.current);if(n=e.type,t!==null&&e.stateNode!=null)Sm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(S(166));return null}if(t=On(ft.current),Fo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[To]=s,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(t=0;t<Di.length;t++)Y(Di[t],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":dd(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":gd(r,s),Y("invalid",r)}Kl(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):li.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Y("scroll",r));switch(n){case"input":ro(r),md(r,s,!0);break;case"textarea":ro(r),vd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_o)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Wl.html&&(t=wd(n)),t===Wl.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[To]=r,_m(t,e,!1,!1),e.stateNode=t,o=Gl(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)Y(Di[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":dd(t,r),i=bl(t,r),Y("invalid",t);break;case"option":i=zl(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),Y("invalid",t);break;case"textarea":gd(t,r),i=Hl(t,r),Y("invalid",t);break;default:i=r}Kl(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sd(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ed(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pi(t,l):typeof l=="number"&&pi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(li.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&Rl(t,s,l,o))}switch(n){case"input":ro(t),md(t,r,!1);break;case"textarea":ro(t),vd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ut(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?lr(t,!!r.multiple,s,!1):r.defaultValue!=null&&lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_o)}Tp(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Tm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));n=On(bi.current),On(ft.current),Fo(e)?(r=e.stateNode,n=e.memoizedProps,r[zt]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r)}return null;case 13:return X(re),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Fo(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(re.current&1)!=0?we===0&&(we=3):((we===0||we===3)&&(we=4),$e===null||(Gi&134217727)==0&&(Rr&134217727)==0||Or($e,Oe))),(r||n)&&(e.flags|=4),null);case 4:return Cr(),nc(e),t===null&&vp(e.stateNode.containerInfo),null;case 10:return Fu(e),null;case 17:return je(e.type)&&ko(),null;case 19:if(X(re),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)Ki(r,!1);else{if(we!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=64,Ki(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(re,re.current&1|2),e.child}t=t.sibling}r.tail!==null&&Re()>dc&&(e.flags|=64,s=!0,Ki(r,!1),e.lanes=33554432)}else{if(!s)if(t=Uo(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ki(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!dt)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Re()-r.renderingStartTime>dc&&n!==1073741824&&(e.flags|=64,s=!0,Ki(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Re(),n.sibling=null,e=re.current,ne(re,s?e&1|2:e&1),n):null;case 23:case 24:return wc(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(S(156,e.tag))}function Hw(t){switch(t.tag){case 1:je(t.type)&&ko();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Cr(),X(be),X(Ae),Wu(),e=t.flags,(e&64)!=0)throw Error(S(285));return t.flags=e&-4097|64,t;case 5:return Bu(t),null;case 13:return X(re),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return X(re),null;case 4:return Cr(),null;case 10:return Fu(t),null;case 23:case 24:return wc(),null;default:return null}}function rc(t,e){try{var n="",r=e;do n+=I1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function ic(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ww=typeof WeakMap=="function"?WeakMap:Map;function Im(t,e,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ko||(Ko=!0,pc=r),ic(t,e)},n}function km(t,e,n){n=Kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return ic(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this),ic(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var qw=typeof WeakSet=="function"?WeakSet:Set;function Cm(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){en(t,n)}else e.current=null}function Kw(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:at(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Au(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(S(163))}function Gw(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(jm(n,t),nE(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:at(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Bp(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Bp(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Tp(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Fd(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(S(163))}function Nm(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=_d("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Am(t,e){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Ou,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)jm(e,n);else{r=e;try{i()}catch(s){en(r,s)}}n=n.next}while(n!==t)}break;case 1:if(Cm(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){en(e,s)}break;case 5:Cm(e);break;case 4:Dm(t,e)}}function Rm(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Pm(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:{for(var e=t.return;e!==null;){if(Pm(e))break e;e=e.return}throw Error(S(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(S(161))}n.flags&16&&(pi(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Pm(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?sc(t,n,e):oc(t,n,e)}function sc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_o));else if(r!==4&&(t=t.child,t!==null))for(sc(t,e,n),t=t.sibling;t!==null;)sc(t,e,n),t=t.sibling}function oc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(oc(t,e,n),t=t.sibling;t!==null;)oc(t,e,n),t=t.sibling}function Dm(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(S(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(Am(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Am(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function ac(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[To]=r,t==="input"&&r.type==="radio"&&r.name!=null&&pd(n,r),Gl(t,i),e=Gl(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Sd(n,a):o==="dangerouslySetInnerHTML"?Ed(n,a):o==="children"?pi(n,a):Rl(n,o,a,e)}switch(t){case"input":jl(n,r);break;case"textarea":yd(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?lr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?lr(n,!!r.multiple,r.defaultValue,!0):lr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(S(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Fd(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(fc=Re(),Nm(e.child,!0)),xm(e);return;case 19:xm(e);return;case 17:return;case 23:case 24:Nm(e,e.memoizedState!==null);return}throw Error(S(163))}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qw),e.forEach(function(r){var i=sE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qw(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var Yw=Math.ceil,Wo=Tn.ReactCurrentDispatcher,lc=Tn.ReactCurrentOwner,x=0,$e=null,ce=null,Oe=0,Ln=0,uc=Ht(0),we=0,qo=null,Ar=0,Gi=0,Rr=0,cc=0,hc=null,fc=0,dc=1/0;function Pr(){dc=Re()+500}var N=null,Ko=!1,pc=null,mt=null,Yt=!1,Qi=null,Yi=90,mc=[],gc=[],Nt=null,Xi=0,yc=null,Go=-1,At=0,Qo=0,Ji=null,Yo=!1;function Qe(){return(x&48)!=0?Re():Go!==-1?Go:Go=Re()}function Xt(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Tr()===99?1:2;if(At===0&&(At=Ar),Uw.transition!==0){Qo!==0&&(Qo=hc!==null?hc.pendingLanes:0),t=At;var e=4186112&~Qo;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Tr(),(x&4)!=0&&t===98?t=ho(12,At):(t=b1(t),t=ho(t,At)),t}function Jt(t,e,n){if(50<Xi)throw Xi=0,yc=null,Error(S(185));if(t=Xo(t,e),t===null)return null;fo(t,e,n),t===$e&&(Rr|=e,we===4&&Or(t,Oe));var r=Tr();e===1?(x&8)!=0&&(x&48)==0?vc(t):(rt(t,n),x===0&&(Pr(),ht())):((x&4)==0||r!==98&&r!==99||(Nt===null?Nt=new Set([t]):Nt.add(t)),rt(t,n)),hc=t}function Xo(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function rt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-jt(o),l=1<<a,u=s[a];if(u===-1){if((l&r)==0||(l&i)!=0){u=e,fr(l);var c=G;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=Ii(t,t===$e?Oe:0),e=G,r===0)n!==null&&(n!==Mu&&xu(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Mu&&xu(n)}e===15?(n=vc.bind(null,t),It===null?(It=[n],Ao=Du(No,Fp)):It.push(n),n=Mu):e===14?n=Mi(99,vc.bind(null,t)):(n=j1(e),n=Mi(n,Lm.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function Lm(t){if(Go=-1,Qo=At=0,(x&48)!=0)throw Error(S(327));var e=t.callbackNode;if(Zt()&&t.callbackNode!==e)return null;var n=Ii(t,t===$e?Oe:0);if(n===0)return null;var r=n,i=x;x|=16;var s=Fm();($e!==t||Oe!==r)&&(Pr(),Dr(t,r));do try{Zw();break}catch(a){Um(t,a)}while(1);if(Uu(),Wo.current=s,x=i,ce!==null?r=0:($e=null,Oe=0,r=we),(Ar&Rr)!=0)Dr(t,0);else if(r!==0){if(r===2&&(x|=64,t.hydrate&&(t.hydrate=!1,Au(t.containerInfo)),n=Wd(t),n!==0&&(r=Zi(t,n))),r===1)throw e=qo,Dr(t,0),Or(t,n),rt(t,Re()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(S(345));case 2:Mn(t);break;case 3:if(Or(t,n),(n&62914560)===n&&(r=fc+500-Re(),10<r)){if(Ii(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ip(Mn.bind(null,t),r);break}Mn(t);break;case 4:if(Or(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-jt(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Yw(n/1960))-n,10<n){t.timeoutHandle=Ip(Mn.bind(null,t),n);break}Mn(t);break;case 5:Mn(t);break;default:throw Error(S(329))}}return rt(t,Re()),t.callbackNode===e?Lm.bind(null,t):null}function Or(t,e){for(e&=~cc,e&=~Rr,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function vc(t){if((x&48)!=0)throw Error(S(327));if(Zt(),t===$e&&(t.expiredLanes&Oe)!=0){var e=Oe,n=Zi(t,e);(Ar&Rr)!=0&&(e=Ii(t,e),n=Zi(t,e))}else e=Ii(t,0),n=Zi(t,e);if(t.tag!==0&&n===2&&(x|=64,t.hydrate&&(t.hydrate=!1,Au(t.containerInfo)),e=Wd(t),e!==0&&(n=Zi(t,e))),n===1)throw n=qo,Dr(t,0),Or(t,e),rt(t,Re()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t),rt(t,Re()),null}function Xw(){if(Nt!==null){var t=Nt;Nt=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,rt(e,Re())})}ht()}function Mm(t,e){var n=x;x|=1;try{return t(e)}finally{x=n,x===0&&(Pr(),ht())}}function $m(t,e){var n=x;x&=-2,x|=8;try{return t(e)}finally{x=n,x===0&&(Pr(),ht())}}function Jo(t,e){ne(uc,Ln),Ln|=e,Ar|=e}function wc(){Ln=uc.current,X(uc)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ow(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:Cr(),X(be),X(Ae),Wu();break;case 5:Bu(r);break;case 4:Cr();break;case 13:X(re);break;case 19:X(re);break;case 10:Fu(r);break;case 23:case 24:wc()}n=n.return}$e=t,ce=tn(t.current,null),Oe=Ln=Ar=e,we=0,qo=null,cc=Rr=Gi=0}function Um(t,e){do{var n=ce;try{if(Uu(),ji.current=zo,Vo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if(Bi=0,ve=Pe=se=null,zi=!1,lc.current=null,n===null||n.return===null){we=1,qo=e,ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var p=(re.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var w=d.memoizedState;if(w!==null)g=w.dehydrated!==null;else{var E=d.memoizedProps;g=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!p}}if(g){var f=d.updateQueue;if(f===null){var h=new Set;h.add(u),d.updateQueue=h}else f.add(u);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=Kt(-1,1);m.tag=2,Gt(a,m)}a.lanes|=1;break e}l=void 0,a=e;var y=s.pingCache;if(y===null?(y=s.pingCache=new Ww,l=new Set,y.set(u,l)):(l=y.get(u),l===void 0&&(l=new Set,y.set(u,l))),!l.has(a)){l.add(a);var v=iE.bind(null,s,u,a);u.then(v,v)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((ar(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}we!==5&&(we=2),l=rc(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var A=Im(d,s,e);jp(d,A);break e;case 1:s=l;var T=d.type,P=d.stateNode;if((d.flags&64)==0&&(typeof T.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(mt===null||!mt.has(P)))){d.flags|=4096,e&=-e,d.lanes|=e;var L=km(d,s,e);jp(d,L);break e}}d=d.return}while(d!==null)}bm(n)}catch(R){e=R,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Fm(){var t=Wo.current;return Wo.current=zo,t===null?zo:t}function Zi(t,e){var n=x;x|=16;var r=Fm();$e===t&&Oe===e||Dr(t,e);do try{Jw();break}catch(i){Um(t,i)}while(1);if(Uu(),x=n,Wo.current=r,ce!==null)throw Error(S(261));return $e=null,Oe=0,we}function Jw(){for(;ce!==null;)Vm(ce)}function Zw(){for(;ce!==null&&!Lw();)Vm(ce)}function Vm(t){var e=zm(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?bm(t):ce=e,lc.current=null}function bm(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=zw(n,e,Ln),n!==null){ce=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ln&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=Hw(e),n!==null){n.flags&=2047,ce=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);we===0&&(we=5)}function Mn(t){var e=Tr();return Pn(99,eE.bind(null,t,e)),null}function eE(t,e){do Zt();while(Qi!==null);if((x&48)!=0)throw Error(S(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-jt(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(Nt!==null&&(r&24)==0&&Nt.has(t)&&Nt.delete(t),t===$e&&(ce=$e=null,Oe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=x,x|=32,lc.current=null,ku=po,o=hp(),_u(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,p=-1,d=-1,g=0,w=0,E=o,f=null;t:for(;;){for(var h;E!==a||s!==0&&E.nodeType!==3||(p=c+s),E!==l||u!==0&&E.nodeType!==3||(d=c+u),E.nodeType===3&&(c+=E.nodeValue.length),(h=E.firstChild)!==null;)f=E,E=h;for(;;){if(E===o)break t;if(f===a&&++g===s&&(p=c),f===l&&++w===u&&(d=c),(h=E.nextSibling)!==null)break;E=f,f=E.parentNode}E=h}a=p===-1||d===-1?null:{start:p,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Cu={focusedElem:o,selectionRange:a},po=!1,Ji=null,Yo=!1,N=r;do try{tE()}catch(R){if(N===null)throw Error(S(330));en(N,R),N=N.nextEffect}while(N!==null);Ji=null,N=r;do try{for(o=t;N!==null;){var m=N.flags;if(m&16&&pi(N.stateNode,""),m&128){var y=N.alternate;if(y!==null){var v=y.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(m&1038){case 2:Om(N),N.flags&=-3;break;case 6:Om(N),N.flags&=-3,ac(N.alternate,N);break;case 1024:N.flags&=-1025;break;case 1028:N.flags&=-1025,ac(N.alternate,N);break;case 4:ac(N.alternate,N);break;case 8:a=N,Dm(o,a);var A=a.alternate;Rm(a),A!==null&&Rm(A)}N=N.nextEffect}}catch(R){if(N===null)throw Error(S(330));en(N,R),N=N.nextEffect}while(N!==null);if(v=Cu,y=hp(),m=v.focusedElem,o=v.selectionRange,y!==m&&m&&m.ownerDocument&&cp(m.ownerDocument.documentElement,m)){for(o!==null&&_u(m)&&(y=o.start,v=o.end,v===void 0&&(v=y),"selectionStart"in m?(m.selectionStart=y,m.selectionEnd=Math.min(v,m.value.length)):(v=(y=m.ownerDocument||document)&&y.defaultView||window,v.getSelection&&(v=v.getSelection(),a=m.textContent.length,A=Math.min(o.start,a),o=o.end===void 0?A:Math.min(o.end,a),!v.extend&&A>o&&(a=o,o=A,A=a),a=up(m,A),s=up(m,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(y=y.createRange(),y.setStart(a.node,a.offset),v.removeAllRanges(),A>o?(v.addRange(y),v.extend(s.node,s.offset)):(y.setEnd(s.node,s.offset),v.addRange(y)))))),y=[],v=m;v=v.parentNode;)v.nodeType===1&&y.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<y.length;m++)v=y[m],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}po=!!ku,Cu=ku=null,t.current=n,N=r;do try{for(m=t;N!==null;){var T=N.flags;if(T&36&&Gw(m,N.alternate,N),T&128){y=void 0;var P=N.ref;if(P!==null){var L=N.stateNode;switch(N.tag){case 5:y=L;break;default:y=L}typeof P=="function"?P(y):P.current=y}}N=N.nextEffect}}catch(R){if(N===null)throw Error(S(330));en(N,R),N=N.nextEffect}while(N!==null);N=null,$w(),x=i}else t.current=n;if(Yt)Yt=!1,Qi=t,Yi=e;else for(N=r;N!==null;)e=N.nextEffect,N.nextEffect=null,N.flags&8&&(T=N,T.sibling=null,T.stateNode=null),N=e;if(r=t.pendingLanes,r===0&&(mt=null),r===1?t===yc?Xi++:(Xi=0,yc=t):Xi=0,n=n.stateNode,Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Ou,n,void 0,(n.current.flags&64)==64)}catch{}if(rt(t,Re()),Ko)throw Ko=!1,t=pc,pc=null,t;return(x&8)!=0||ht(),null}function tE(){for(;N!==null;){var t=N.alternate;Yo||Ji===null||((N.flags&8)!=0?Od(N,Ji)&&(Yo=!0):N.tag===13&&Qw(t,N)&&Od(N,Ji)&&(Yo=!0));var e=N.flags;(e&256)!=0&&Kw(t,N),(e&512)==0||Yt||(Yt=!0,Mi(97,function(){return Zt(),null})),N=N.nextEffect}}function Zt(){if(Yi!==90){var t=97<Yi?97:Yi;return Yi=90,Pn(t,rE)}return!1}function nE(t,e){mc.push(e,t),Yt||(Yt=!0,Mi(97,function(){return Zt(),null}))}function jm(t,e){gc.push(e,t),Yt||(Yt=!0,Mi(97,function(){return Zt(),null}))}function rE(){if(Qi===null)return!1;var t=Qi;if(Qi=null,(x&48)!=0)throw Error(S(331));var e=x;x|=32;var n=gc;gc=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(S(330));en(s,l)}}for(n=mc,mc=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(S(330));en(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return x=e,ht(),!0}function Bm(t,e,n){e=rc(n,e),e=Im(t,e,1),Gt(t,e),e=Qe(),t=Xo(t,1),t!==null&&(fo(t,1,e),rt(t,e))}function en(t,e){if(t.tag===3)Bm(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Bm(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){t=rc(e,t);var i=km(n,t,1);if(Gt(n,i),i=Qe(),n=Xo(n,1),n!==null)fo(n,1,i),rt(n,i);else if(typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function iE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Oe&n)===n&&(we===4||we===3&&(Oe&62914560)===Oe&&500>Re()-fc?Dr(t,0):cc|=n),rt(t,e)}function sE(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Tr()===99?1:2:(At===0&&(At=Ar),e=dr(62914560&~At),e===0&&(e=4194304))),n=Qe(),t=Xo(t,e),t!==null&&(fo(t,e,n),rt(t,n))}var zm;zm=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)lt=!0;else if((n&r)!=0)lt=(t.flags&16384)!=0;else{switch(lt=!1,e.tag){case 3:pm(e),Hu();break;case 5:Qp(e);break;case 1:je(e.type)&&Co(e);break;case 4:ju(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ne(Ro,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?mm(t,e,n):(ne(re,re.current&1),e=Ct(t,e,n),e!==null?e.sibling:null);ne(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return Em(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(re,re.current),r)break;return null;case 23:case 24:return e.lanes=0,Ju(t,e,n)}return Ct(t,e,n)}else lt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Sr(e,Ae.current),kr(e,n),i=Ku(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)){var s=!0;Co(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Do(e,r,o,t),i.updater=xo,e.stateNode=i,i._reactInternals=e,bu(e,r,t,n),e=ec(null,e,r,!0,s,n)}else e.tag=0,ze(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=aE(i),t=at(i,t),s){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=dm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=cm(null,e,i,at(i.type,t),r,n);break e}throw Error(S(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Zu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),dm(t,e,r,i,n);case 3:if(pm(e),r=e.updateQueue,t===null||r===null)throw Error(S(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,bp(t,e),$i(e,r,null,n),r=e.memoizedState.element,r===i)Hu(),e=Ct(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Qt=vr(e.stateNode.containerInfo.firstChild),kt=e,s=dt=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Nr.push(s);for(n=Gp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else ze(t,e,r,n),Hu();e=e.child}return e;case 5:return Qp(e),t===null&&zu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nu(r,i)?o=null:s!==null&&Nu(r,s)&&(e.flags|=16),fm(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return mm(t,e,n);case 4:return ju(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$o(e,null,r,n):ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),um(t,e,r,i,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ne(Ro,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=et(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!be.current){e=Ct(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!=0){a.tag===1&&(u=Kt(-1,n&-n),u.tag=2,Gt(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Vp(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,kr(e,n),i=tt(i,s.unstable_observedBits),r=r(i),e.flags|=1,ze(t,e,r,n),e.child;case 14:return i=e.type,s=at(i,e.pendingProps),s=at(i.type,s),cm(t,e,i,s,r,n);case 15:return hm(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,je(r)?(t=!0,Co(e)):t=!1,kr(e,n),Wp(e,r,i),bu(e,r,i,n),ec(null,e,r,!0,t,n);case 19:return Em(t,e,n);case 23:return Ju(t,e,n);case 24:return Ju(t,e,n)}throw Error(S(156,e.tag))};function oE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new oE(t,e,n,r)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aE(t){if(typeof t=="function")return Ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zs)return 11;if(t===to)return 14}return 2}function tn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ec(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $t:return xr(n.children,i,s,e);case ud:o=8,i|=16;break;case Pl:o=8,i|=1;break;case ci:return t=it(12,n,e,i|8),t.elementType=ci,t.type=ci,t.lanes=s,t;case hi:return t=it(13,n,e,i),t.type=hi,t.elementType=hi,t.lanes=s,t;case eo:return t=it(19,n,e,i),t.elementType=eo,t.lanes=s,t;case $l:return _c(n,i,s,e);case Ul:return t=it(24,n,e,i),t.elementType=Ul,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ol:o=10;break e;case Dl:o=9;break e;case Zs:o=11;break e;case to:o=14;break e;case xl:o=16,r=null;break e;case Ll:o=22;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function _c(t,e,n,r){return t=it(23,t,r,e),t.elementType=$l,t.lanes=n,t}function Sc(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lE(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.mutableSourceEagerHydrationData=null}function uE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ea(t,e,n,r){var i=e.current,s=Qe(),o=Xt(i);e:if(n){n=n._reactInternals;t:{if(Cn(n)!==n||n.tag!==1)throw Error(S(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(je(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(S(171))}if(n.tag===1){var l=n.type;if(je(l)){n=Rp(n,l,a);break e}}n=a}else n=Wt;return e.context===null?e.context=n:e.pendingContext=n,e=Kt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Gt(i,e),Jt(i,o,s),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kc(t,e){Hm(t,e),(t=t.alternate)&&Hm(t,e)}function cE(){return null}function Cc(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new lE(t,e,n!=null&&n.hydrate===!0),e=it(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Vu(e),t[wr]=n.current,vp(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Cc.prototype.render=function(t){ea(t,this._internalRoot,null,null)};Cc.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;ea(null,t,null,function(){e[wr]=null})};function es(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hE(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Cc(t,0,e?{hydrate:!0}:void 0)}function ta(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Ic(o);a.call(u)}}ea(e,o,t,i)}else{if(s=n._reactRootContainer=hE(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Ic(o);l.call(u)}}$m(function(){ea(e,o,t,i)})}return Ic(o)}Dd=function(t){if(t.tag===13){var e=Qe();Jt(t,4,e),kc(t,4)}};ru=function(t){if(t.tag===13){var e=Qe();Jt(t,67108864,e),kc(t,67108864)}};xd=function(t){if(t.tag===13){var e=Qe(),n=Xt(t);Jt(t,n,e),kc(t,n)}};Ld=function(t,e){return e()};Yl=function(t,e,n){switch(e){case"input":if(jl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Io(r);if(!i)throw Error(S(90));fd(r),jl(r,i)}}}break;case"textarea":yd(t,n);break;case"select":e=n.value,e!=null&&lr(t,!!n.multiple,e,!1)}};Xl=Mm;Cd=function(t,e,n,r,i){var s=x;x|=4;try{return Pn(98,t.bind(null,e,n,r,i))}finally{x=s,x===0&&(Pr(),ht())}};Jl=function(){(x&49)==0&&(Xw(),Zt())};Nd=function(t,e){var n=x;x|=2;try{return t(e)}finally{x=n,x===0&&(Pr(),ht())}};function Wm(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(e))throw Error(S(200));return uE(t,e,null,n)}var fE={Events:[Li,Er,Io,Id,kd,Zt,{current:!1}]},ts={findFiberByHostInstance:Nn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},dE={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pd(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||cE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{Ou=na.inject(dE),Rn=na}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE;Ze.createPortal=Wm;Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):Error(S(268,Object.keys(t)));return t=Pd(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t,e){var n=x;if((n&48)!=0)return t(e);x|=1;try{if(t)return Pn(99,t.bind(null,e))}finally{x=n,ht()}};Ze.hydrate=function(t,e,n){if(!es(e))throw Error(S(200));return ta(null,t,e,!0,n)};Ze.render=function(t,e,n){if(!es(e))throw Error(S(200));return ta(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!es(t))throw Error(S(40));return t._reactRootContainer?($m(function(){ta(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};Ze.unstable_batchedUpdates=Mm;Ze.unstable_createPortal=function(t,e){return Wm(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!es(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ta(t,e,n,!1,r)};Ze.version="17.0.2";function qm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qm)}catch(t){console.error(t)}}qm(),nd.exports=Ze;var BN=nd.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,p=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[p],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},yE=function(t){try{return gE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Km(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Gm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wE(){return de().indexOf("Electron/")>=0}function Ym(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){return de().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="FirebaseError";class $n extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=_E,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,r)}}function SE(t,e){return t.replace(TE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TE=/\{\$([^}]+)}/g;function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xm(s)&&Xm(o)){if(!ra(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kE(t,e){const n=new CE(t,e);return n.subscribe.bind(n)}class CE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nc),i.error===void 0&&(i.error=Nc),i.complete===void 0&&(i.complete=Nc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PE(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RE(t){return t===Un?void 0:t}function PE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const DE={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},xE=q.INFO,LE={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},ME=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=xE,this._logHandler=ME,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",Jm="0.7.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Ac("@firebase/app"),FE="@firebase/app-compat",VE="@firebase/analytics-compat",bE="@firebase/analytics",jE="@firebase/app-check-compat",BE="@firebase/app-check",zE="@firebase/auth",HE="@firebase/auth-compat",WE="@firebase/database",qE="@firebase/database-compat",KE="@firebase/functions",GE="@firebase/functions-compat",QE="@firebase/installations",YE="@firebase/installations-compat",XE="@firebase/messaging",JE="@firebase/messaging-compat",ZE="@firebase/performance",e_="@firebase/performance-compat",t_="@firebase/remote-config",n_="@firebase/remote-config-compat",r_="@firebase/storage",i_="@firebase/storage-compat",s_="@firebase/firestore",o_="@firebase/firestore-compat",a_="firebase",l_="9.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="[DEFAULT]",u_={[Rc]:"fire-core",[FE]:"fire-core-compat",[bE]:"fire-analytics",[VE]:"fire-analytics-compat",[BE]:"fire-app-check",[jE]:"fire-app-check-compat",[zE]:"fire-auth",[HE]:"fire-auth-compat",[WE]:"fire-rtdb",[qE]:"fire-rtdb-compat",[KE]:"fire-fn",[GE]:"fire-fn-compat",[QE]:"fire-iid",[YE]:"fire-iid-compat",[XE]:"fire-fcm",[JE]:"fire-fcm-compat",[ZE]:"fire-perf",[e_]:"fire-perf-compat",[t_]:"fire-rc",[n_]:"fire-rc-compat",[r_]:"fire-gcs",[i_]:"fire-gcs-compat",[s_]:"fire-fst",[o_]:"fire-fst-compat","fire-js":"fire-js",[a_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map,Oc=new Map;function c_(t,e){try{t.container.addComponent(e)}catch(n){Pc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Oc.has(e))return Pc.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of ia.values())c_(n,t);return!0}function Dc(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},sa=new ns("app","Firebase",h_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=l_;function zN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Zm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw sa.create("bad-app-name",{appName:String(r)});const i=ia.get(r);if(i){if(ra(t,i.options)&&ra(n,i.config))return i;throw sa.create("duplicate-app",{appName:r})}const s=new OE(r);for(const a of Oc.values())s.addComponent(a);const o=new f_(t,n,s);return ia.set(r,o),o}function eg(t=Zm){const e=ia.get(t);if(!e)throw sa.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=u_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pc.warn(a.join(" "));return}is(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){is(new Lr("platform-logger",e=>new $E(e),"PRIVATE")),nn(Rc,Jm,t),nn(Rc,Jm,"esm2017"),nn("fire-js","")}d_("");var p_="firebase",m_="9.6.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(p_,m_,"app");var g_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C,xc=xc||{},$=g_||self;function oa(){}function Lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function os(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function y_(t){return Object.prototype.hasOwnProperty.call(t,Mc)&&t[Mc]||(t[Mc]=++v_)}var Mc="closure_uid_"+(1e9*Math.random()>>>0),v_=0;function w_(t,e,n){return t.call.apply(t.bind,arguments)}function E_(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ee(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=w_:Ee=E_,Ee.apply(null,arguments)}function aa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function _e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function rn(){this.s=this.s,this.o=this.o}var __=0,S_={};rn.prototype.s=!1;rn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),__!=0)){var t=y_(this);delete S_[t]}};rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ng=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function T_(t){e:{var e=pS;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function rg(t){return Array.prototype.concat.apply([],arguments)}function $c(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function la(t){return/^[\s\xa0]*$/.test(t)}var ig=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ue(t,e){return t.indexOf(e)!=-1}function Uc(t,e){return t<e?-1:t>e?1:0}var Fe;e:{var sg=$.navigator;if(sg){var og=sg.userAgent;if(og){Fe=og;break e}}Fe=""}function Fc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ag(t){const e={};for(const n in t)e[n]=t[n];return e}var lg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ug(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<lg.length;s++)n=lg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vc(t){return Vc[" "](t),t}Vc[" "]=oa;function I_(t){var e=N_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var k_=Ue(Fe,"Opera"),Mr=Ue(Fe,"Trident")||Ue(Fe,"MSIE"),cg=Ue(Fe,"Edge"),bc=cg||Mr,hg=Ue(Fe,"Gecko")&&!(Ue(Fe.toLowerCase(),"webkit")&&!Ue(Fe,"Edge"))&&!(Ue(Fe,"Trident")||Ue(Fe,"MSIE"))&&!Ue(Fe,"Edge"),C_=Ue(Fe.toLowerCase(),"webkit")&&!Ue(Fe,"Edge");function fg(){var t=$.document;return t?t.documentMode:void 0}var ua;e:{var jc="",Bc=function(){var t=Fe;if(hg)return/rv:([^\);]+)(\)|;)/.exec(t);if(cg)return/Edge\/([\d\.]+)/.exec(t);if(Mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(C_)return/WebKit\/(\S+)/.exec(t);if(k_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(jc=Bc?Bc[1]:""),Mr){var zc=fg();if(zc!=null&&zc>parseFloat(jc)){ua=String(zc);break e}}ua=jc}var N_={};function A_(){return I_(function(){let t=0;const e=ig(String(ua)).split("."),n=ig("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Uc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Uc(i[2].length==0,s[2].length==0)||Uc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Hc;if($.document&&Mr){var dg=fg();Hc=dg||parseInt(ua,10)||void 0}else Hc=void 0;var R_=Hc,P_=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",oa,e),$.removeEventListener("test",oa,e)}catch{}return t}();function De(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};function as(t,e){if(De.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hg){e:{try{Vc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:O_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&as.Z.h.call(this)}}_e(as,De);var O_={2:"touch",3:"pen",4:"mouse"};as.prototype.h=function(){as.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ls="closure_listenable_"+(1e6*Math.random()|0),D_=0;function x_(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++D_,this.ca=this.fa=!1}function ca(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ha(t){this.src=t,this.g={},this.h=0}ha.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new x_(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Wc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=tg(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),Gc={};function pg(t,e,n,r,i){if(r&&r.once)return gg(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pg(t,e[s],n,r,i);return null}return n=Jc(n),t&&t[ls]?t.N(e,n,os(r)?!!r.capture:!!r,i):mg(t,e,n,!1,r,i)}function mg(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=os(i)?!!i.capture:!!i,a=Yc(t);if(a||(t[Kc]=a=new ha(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=L_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)P_||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function L_(){function t(n){return e.call(t.src,t.listener,n)}var e=M_;return t}function gg(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gg(t,e[s],n,r,i);return null}return n=Jc(n),t&&t[ls]?t.O(e,n,os(r)?!!r.capture:!!r,i):mg(t,e,n,!0,r,i)}function yg(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yg(t,e[s],n,r,i);else r=os(r)?!!r.capture:!!r,n=Jc(n),t&&t[ls]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qc(s,n,r,i),-1<n&&(ca(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qc(e,n,r,i)),(n=-1<t?e[t]:null)&&Qc(n))}function Qc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ls])Wc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yc(e))?(Wc(n,t),n.h==0&&(n.src=null,e[Kc]=null)):ca(t)}}}function vg(t){return t in Gc?Gc[t]:Gc[t]="on"+t}function M_(t,e){if(t.ca)t=!0;else{e=new as(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Qc(t),t=n.call(r,e)}return t}function Yc(t){return t=t[Kc],t instanceof ha?t:null}var Xc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jc(t){return typeof t=="function"?t:(t[Xc]||(t[Xc]=function(e){return t.handleEvent(e)}),t[Xc])}function pe(){rn.call(this),this.i=new ha(this),this.P=this,this.I=null}_e(pe,rn);pe.prototype[ls]=!0;pe.prototype.removeEventListener=function(t,e,n,r){yg(this,t,e,n,r)};function Se(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new De(e,t);else if(e instanceof De)e.target=e.target||t;else{var i=e;e=new De(r,t),ug(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=fa(o,r,!0,e)&&i}if(o=e.g=t,i=fa(o,r,!0,e)&&i,i=fa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=fa(o,r,!1,e)&&i}pe.prototype.M=function(){if(pe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ca(n[r]);delete t.g[e],t.h--}}this.I=null};pe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};pe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Wc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zc=$.JSON.stringify;function $_(){var t=Eg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class U_{constructor(){this.h=this.g=null}add(e,n){const r=wg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new F_,t=>t.reset());class F_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function V_(t){$.setTimeout(()=>{throw t},0)}function eh(t,e){th||b_(),nh||(th(),nh=!0),Eg.add(t,e)}var th;function b_(){var t=$.Promise.resolve(void 0);th=function(){t.then(j_)}}var nh=!1,Eg=new U_;function j_(){for(var t;t=$_();){try{t.h.call(t.g)}catch(n){V_(n)}var e=wg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}nh=!1}function da(t,e){pe.call(this),this.h=t||1,this.g=e||$,this.j=Ee(this.kb,this),this.l=Date.now()}_e(da,pe);C=da.prototype;C.da=!1;C.S=null;C.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Se(this,"tick"),this.da&&(rh(this),this.start()))}};C.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}C.M=function(){da.Z.M.call(this),rh(this),delete this.g};function ih(t,e,n){if(typeof t=="function")n&&(t=Ee(t,n));else if(t&&typeof t.handleEvent=="function")t=Ee(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function _g(t){t.g=ih(()=>{t.g=null,t.i&&(t.i=!1,_g(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class B_ extends rn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_g(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(t){rn.call(this),this.h=t,this.g={}}_e(us,rn);var Sg=[];function Tg(t,e,n,r){Array.isArray(n)||(n&&(Sg[0]=n.toString()),n=Sg);for(var i=0;i<n.length;i++){var s=pg(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ig(t){Fc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qc(e)},t),t.g={}}us.prototype.M=function(){us.Z.M.call(this),Ig(this)};us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pa(){this.g=!0}pa.prototype.Aa=function(){this.g=!1};function z_(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var p=c.split("_");o=2<=p.length&&p[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function H_(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $r(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+q_(t,n)+(r?" "+r:"")})}function W_(t,e){t.info(function(){return"TIMEOUT: "+e})}pa.prototype.info=function(){};function q_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zc(n)}catch{return e}}var Fn={},kg=null;function ma(){return kg=kg||new pe}Fn.Ma="serverreachability";function Cg(t){De.call(this,Fn.Ma,t)}_e(Cg,De);function cs(t){const e=ma();Se(e,new Cg(e,t))}Fn.STAT_EVENT="statevent";function Ng(t,e){De.call(this,Fn.STAT_EVENT,t),this.stat=e}_e(Ng,De);function Ve(t){const e=ma();Se(e,new Ng(e,t))}Fn.Na="timingevent";function Ag(t,e){De.call(this,Fn.Na,t),this.size=e}_e(Ag,De);function hs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var ga={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Rg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function sh(){}sh.prototype.h=null;function Pg(t){return t.h||(t.h=t.i())}function Og(){}var fs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function oh(){De.call(this,"d")}_e(oh,De);function ah(){De.call(this,"c")}_e(ah,De);var lh;function ya(){}_e(ya,sh);ya.prototype.g=function(){return new XMLHttpRequest};ya.prototype.i=function(){return{}};lh=new ya;function ds(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new us(this),this.P=K_,t=bc?125:void 0,this.W=new da(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var K_=45e3,uh={},va={};C=ds.prototype;C.setTimeout=function(t){this.P=t};function ch(t,e,n){t.K=1,t.v=Ta(Rt(e)),t.s=n,t.U=!0,xg(t,null)}function xg(t,e){t.F=Date.now(),ps(t),t.A=Rt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Bg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Dg,t.g=hy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new B_(Ee(t.Ia,t,t.g),t.O)),Tg(t.V,t.g,"readystatechange",t.gb),e=t.H?ag(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),cs(1),z_(t.j,t.u,t.A,t.m,t.X,t.s)}C.gb=function(t){t=t.target;const e=this.L;e&&Pt(t)==3?e.l():this.Ia(t)};C.Ia=function(t){try{if(t==this.g)e:{const c=Pt(this.g);var e=this.g.Da();const p=this.g.ba();if(!(3>c)&&(c!=3||bc||this.g&&(this.h.h||this.g.ga()||ey(this.g)))){this.I||c!=4||e==7||(e==8||0>=p?cs(3):cs(2)),wa(this);var n=this.g.ba();this.N=n;t:if(Lg(this)){var r=ey(this.g);t="";var i=r.length,s=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Vn(this),ms(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,H_(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!la(a)){var u=a;break t}}u=null}if(n=u)$r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hh(this,n);else{this.i=!1,this.o=3,Ve(12),Vn(this),ms(this);break e}}this.U?(Mg(this,c,o),bc&&this.i&&c==3&&(Tg(this.V,this.W,"tick",this.fb),this.W.start())):($r(this.j,this.m,o,null),hh(this,o)),c==4&&Vn(this),this.i&&!this.I&&(c==4?ay(this.l,this):(this.i=!1,ps(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),Vn(this),ms(this)}}}catch{}finally{}};function Lg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Mg(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=G_(t,n),i==va){e==4&&(t.o=4,Ve(14),r=!1),$r(t.j,t.m,null,"[Incomplete Response]");break}else if(i==uh){t.o=4,Ve(15),$r(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $r(t.j,t.m,i,null),hh(t,i);Lg(t)&&i!=va&&i!=uh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sh(e),e.L=!0,Ve(11))):($r(t.j,t.m,n,"[Invalid Chunked Response]"),Vn(t),ms(t))}C.fb=function(){if(this.g){var t=Pt(this.g),e=this.g.ga();this.C<e.length&&(wa(this),Mg(this,t,e),this.i&&t!=4&&ps(this))}};function G_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?va:(n=Number(e.substring(n,r)),isNaN(n)?uh:(r+=1,r+n>e.length?va:(e=e.substr(r,n),t.C=r+n,e)))}C.cancel=function(){this.I=!0,Vn(this)};function ps(t){t.Y=Date.now()+t.P,$g(t,t.P)}function $g(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hs(Ee(t.eb,t),e)}function wa(t){t.B&&($.clearTimeout(t.B),t.B=null)}C.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(W_(this.j,this.A),this.K!=2&&(cs(3),Ve(17)),Vn(this),this.o=2,ms(this)):$g(this,this.Y-t)};function ms(t){t.l.G==0||t.I||ay(t.l,t)}function Vn(t){wa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,rh(t.W),Ig(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ph(n.i,t))){if(n.I=t.N,!t.J&&ph(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ra(n),Na(n);else break e;_h(n),Ve(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=hs(Ee(n.ab,n),6e3));if(1>=Wg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&Ra(n),!la(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const p=u[4];p!=null&&(n.za=p,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;!s.g&&(Ue(w,"spdy")||Ue(w,"quic")||Ue(w,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(mh(s,s.h),s.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,ee(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=cy(r,r.H?r.la:null,r.W),o.J){qg(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(wa(a),ps(a)),r.g=o}else sy(r);0<n.l.length&&Aa(n)}else u[0]!="stop"&&u[0]!="close"||Bn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bn(n,7):wh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}cs(4)}catch{}}function Q_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Lc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function fh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lc(t)||typeof t=="string")ng(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Lc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Q_(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ur(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ur)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}C=Ur.prototype;C.R=function(){dh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};C.T=function(){return dh(this),this.g.concat()};function dh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];bn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],bn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}C.get=function(t,e){return bn(this.h,t)?this.h[t]:e};C.set=function(t,e){bn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};C.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Ug=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Y_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof jn){this.g=e!==void 0?e:t.g,Ea(this,t.j),this.s=t.s,_a(this,t.i),Sa(this,t.m),this.l=t.l,e=t.h;var n=new vs;n.i=e.i,e.g&&(n.g=new Ur(e.g),n.h=e.h),Fg(this,n),this.o=t.o}else t&&(n=String(t).match(Ug))?(this.g=!!e,Ea(this,n[1]||"",!0),this.s=gs(n[2]||""),_a(this,n[3]||"",!0),Sa(this,n[4]),this.l=gs(n[5]||"",!0),Fg(this,n[6]||"",!0),this.o=gs(n[7]||"")):(this.g=!!e,this.h=new vs(null,this.g))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ys(e,Vg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ys(e,Vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ys(n,n.charAt(0)=="/"?tS:eS,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ys(n,rS)),t.join("")};function Rt(t){return new jn(t)}function Ea(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _a(t,e,n){t.i=n?gs(e,!0):e}function Sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fg(t,e,n){e instanceof vs?(t.h=e,iS(t.h,t.g)):(n||(e=ys(e,nS)),t.h=new vs(e,t.g))}function ee(t,e,n){t.h.set(e,n)}function Ta(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function X_(t){return t instanceof jn?Rt(t):new jn(t,void 0)}function J_(t,e,n,r){var i=new jn(null,void 0);return t&&Ea(i,t),e&&_a(i,e),n&&Sa(i,n),r&&(i.l=r),i}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Z_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Z_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vg=/[#\/\?@]/g,eS=/[#\?:]/g,tS=/[#\?]/g,nS=/[#\?@]/g,rS=/#/g;function vs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Ur,t.h=0,t.i&&Y_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=vs.prototype;C.add=function(t,e){sn(this),this.i=null,t=Fr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bg(t,e){sn(t),e=Fr(t,e),bn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,bn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&dh(t)))}function jg(t,e){return sn(t),e=Fr(t,e),bn(t.g.h,e)}C.forEach=function(t,e){sn(this),this.g.forEach(function(n,r){ng(n,function(i){t.call(e,i,r,this)},this)},this)};C.T=function(){sn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};C.R=function(t){sn(this);var e=[];if(typeof t=="string")jg(this,t)&&(e=rg(e,this.g.get(Fr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=rg(e,t[n])}return e};C.set=function(t,e){return sn(this),this.i=null,t=Fr(this,t),jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Bg(t,e,n){bg(t,e),0<n.length&&(t.i=null,t.g.set(Fr(t,e),$c(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Fr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function iS(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bg(this,r),Bg(this,i,n))},t)),t.j=e}var sS=class{constructor(t,e){this.h=t,this.g=e}};function zg(t){this.l=t||oS,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oS=10;function Hg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wg(t){return t.h?1:t.g?t.g.size:0}function ph(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mh(t,e){t.g?t.g.add(e):t.h=e}function qg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zg.prototype.cancel=function(){if(this.i=Kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $c(t.i)}function gh(){}gh.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};gh.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function aS(){this.g=new gh}function lS(t,e,n){const r=n||"";try{fh(t,function(i,s){let o=i;os(i)&&(o=Zc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function uS(t,e){const n=new pa;if($.Image){const r=new Image;r.onload=aa(Ia,n,r,"TestLoadImage: loaded",!0,e),r.onerror=aa(Ia,n,r,"TestLoadImage: error",!1,e),r.onabort=aa(Ia,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=aa(Ia,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ia(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ws(t){this.l=t.$b||null,this.j=t.ib||!1}_e(ws,sh);ws.prototype.g=function(){return new ka(this.l,this.j)};ws.prototype.i=function(t){return function(){return t}}({});function ka(t,e){pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=yh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e(ka,pe);var yh=0;C=ka.prototype;C.open=function(t,e){if(this.readyState!=yh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_s(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=yh};C.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Gg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}C.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Es(this):_s(this),this.readyState==3&&Gg(this)}};C.Ua=function(t){this.g&&(this.response=this.responseText=t,Es(this))};C.Ta=function(t){this.g&&(this.response=t,Es(this))};C.ha=function(){this.g&&Es(this)};function Es(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_s(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cS=$.JSON.parse;function oe(t){pe.call(this),this.headers=new Ur,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qg,this.K=this.L=!1}_e(oe,pe);var Qg="",hS=/^https?$/i,fS=["POST","PUT"];C=oe.prototype;C.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lh.g(),this.C=this.u?Pg(this.u):Pg(lh),this.g.onreadystatechange=Ee(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Yg(this,s);return}t=n||"";const i=new Ur(this.headers);r&&fh(r,function(s,o){i.set(o,s)}),r=T_(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=tg(fS,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zg(this),0<this.B&&((this.K=dS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.pa,this)):this.A=ih(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Yg(this,s)}};function dS(t){return Mr&&A_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function pS(t){return t.toLowerCase()=="content-type"}C.pa=function(){typeof xc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Yg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xg(t),Ca(t)}function Xg(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),Ca(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ca(this,!0)),oe.Z.M.call(this)};C.Fa=function(){this.s||(this.F||this.v||this.l?Jg(this):this.cb())};C.cb=function(){Jg(this)};function Jg(t){if(t.h&&typeof xc!="undefined"&&(!t.C[1]||Pt(t)!=4||t.ba()!=2)){if(t.v&&Pt(t)==4)ih(t.Fa,0,t);else if(Se(t,"readystatechange"),Pt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Ug)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!hS.test(i?i.toLowerCase():"")}n=r}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<Pt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xg(t)}}finally{Ca(t)}}}}function Ca(t,e){if(t.g){Zg(t);const n=t.g,r=t.C[0]?oa:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=r}catch{}}}function Zg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Pt(t){return t.g?t.g.readyState:0}C.ba=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};C.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cS(e)}};function ey(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Da=function(){return this.m};C.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function mS(t){let e="";return Fc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=mS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function Ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ty(t){this.za=0,this.l=[],this.h=new pa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ss("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ss("baseRetryDelayMs",5e3,t),this.$a=Ss("retryDelaySeedMs",1e4,t),this.Ya=Ss("forwardChannelMaxRetries",2,t),this.ra=Ss("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new zg(t&&t.concurrentRequestLimit),this.Ca=new aS,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}C=ty.prototype;C.ma=8;C.G=1;function wh(t){if(ny(t),t.G==3){var e=t.V++,n=Rt(t.F);ee(n,"SID",t.J),ee(n,"RID",e),ee(n,"TYPE","terminate"),Ts(t,n),e=new ds(t,t.h,e,void 0),e.K=2,e.v=Ta(Rt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=hy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ps(e)}uy(t)}C.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Na(t){t.g&&(Sh(t),t.g.cancel(),t.g=null)}function ny(t){Na(t),t.u&&($.clearTimeout(t.u),t.u=null),Ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Eh(t,e){t.l.push(new sS(t.Za++,e)),t.G==3&&Aa(t)}function Aa(t){Hg(t.i)||t.m||(t.m=!0,eh(t.Ha,t),t.C=0)}function gS(t,e){return Wg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=hs(Ee(t.Ha,t,e),ly(t,t.C)),t.C++,!0)}C.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ds(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=ag(s),ug(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iy(this,i,e),n=Rt(this.F),ee(n,"RID",t),ee(n,"CVER",22),this.D&&ee(n,"X-HTTP-Session-Id",this.D),Ts(this,n),this.o&&s&&vh(n,this.o,s),mh(this.i,i),this.Ra&&ee(n,"TYPE","init"),this.ja?(ee(n,"$req",e),ee(n,"SID","null"),i.$=!0,ch(i,n,null)):ch(i,n,e),this.G=2}}else this.G==3&&(t?ry(this,t):this.l.length==0||Hg(this.i)||ry(this))};function ry(t,e){var n;e?n=e.m:n=t.V++;const r=Rt(t.F);ee(r,"SID",t.J),ee(r,"RID",n),ee(r,"AID",t.U),Ts(t,r),t.o&&t.s&&vh(r,t.o,t.s),n=new ds(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=iy(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),mh(t.i,n),ch(n,r,e)}function Ts(t,e){t.j&&fh({},function(n,r){ee(e,r,n)})}function iy(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ee(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{lS(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function sy(t){t.g||t.u||(t.Y=1,eh(t.Ga,t),t.A=0)}function _h(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=hs(Ee(t.Ga,t),ly(t,t.A)),t.A++,!0)}C.Ga=function(){if(this.u=null,oy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=hs(Ee(this.bb,this),t)}};C.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ve(10),Na(this),oy(this))};function Sh(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function oy(t){t.g=new ds(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Rt(t.oa);ee(e,"RID","rpc"),ee(e,"SID",t.J),ee(e,"CI",t.N?"0":"1"),ee(e,"AID",t.U),Ts(t,e),ee(e,"TYPE","xmlhttp"),t.o&&t.s&&vh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ta(Rt(e)),n.s=null,n.U=!0,xg(n,t)}C.ab=function(){this.v!=null&&(this.v=null,Na(this),_h(this),Ve(19))};function Ra(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function ay(t,e){var n=null;if(t.g==e){Ra(t),Sh(t),t.g=null;var r=2}else if(ph(t.i,e))n=e.D,qg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ma(),Se(r,new Ag(r,n,e,i)),Aa(t)}else sy(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&gS(t,e)||r==2&&_h(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}}function ly(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ee(t.jb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Ea(n,"https"),Ta(n)),uS(n.toString(),r)}else Ve(2);t.G=0,t.j&&t.j.va(e),uy(t),ny(t)}C.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ve(2)):(this.h.info("Failed to ping google.com"),Ve(1))};function uy(t){t.G=0,t.I=-1,t.j&&((Kg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,$c(t.l),t.l.length=0),t.j.ua())}function cy(t,e,n){let r=X_(n);if(r.i!="")e&&_a(r,e+"."+r.i),Sa(r,r.m);else{const i=$.location;r=J_(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Fc(t.aa,function(i,s){ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&ee(r,e,n),ee(r,"VER",t.ma),Ts(t,r),r}function hy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new oe(new ws({ib:!0})):new oe(t.qa),e.L=t.H,e}function fy(){}C=fy.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Oa=function(){};function Pa(){if(Mr&&!(10<=Number(R_)))throw Error("Environmental error: no available transport.")}Pa.prototype.g=function(t,e){return new Ye(t,e)};function Ye(t,e){pe.call(this),this.g=new ty(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!la(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!la(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vr(this)}_e(Ye,pe);Ye.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),eh(Ee(t.hb,t,e))),Ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=cy(t,null,t.W),Aa(t)};Ye.prototype.close=function(){wh(this.g)};Ye.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Eh(this.g,e)}else this.v?(e={},e.__data__=Zc(t),Eh(this.g,e)):Eh(this.g,t)};Ye.prototype.M=function(){this.g.j=null,delete this.j,wh(this.g),delete this.g,Ye.Z.M.call(this)};function dy(t){oh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_e(dy,oh);function py(){ah.call(this),this.status=1}_e(py,ah);function Vr(t){this.g=t}_e(Vr,fy);Vr.prototype.xa=function(){Se(this.g,"a")};Vr.prototype.wa=function(t){Se(this.g,new dy(t))};Vr.prototype.va=function(t){Se(this.g,new py(t))};Vr.prototype.ua=function(){Se(this.g,"b")};Pa.prototype.createWebChannel=Pa.prototype.g;Ye.prototype.send=Ye.prototype.u;Ye.prototype.open=Ye.prototype.m;Ye.prototype.close=Ye.prototype.close;ga.NO_ERROR=0;ga.TIMEOUT=8;ga.HTTP_ERROR=6;Rg.COMPLETE="complete";Og.EventType=fs;fs.OPEN="a";fs.CLOSE="b";fs.ERROR="c";fs.MESSAGE="d";pe.prototype.listen=pe.prototype.N;oe.prototype.listenOnce=oe.prototype.O;oe.prototype.getLastError=oe.prototype.La;oe.prototype.getLastErrorCode=oe.prototype.Da;oe.prototype.getStatus=oe.prototype.ba;oe.prototype.getResponseJson=oe.prototype.Qa;oe.prototype.getResponseText=oe.prototype.ga;oe.prototype.send=oe.prototype.ea;var yS=function(){return new Pa},vS=function(){return ma()},Th=ga,wS=Rg,ES=Fn,my={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_S=ws,Oa=Og,SS=oe;const gy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Ac("@firebase/firestore");function yy(){return zn.logLevel}function O(t,...e){if(zn.logLevel<=q.DEBUG){const n=e.map(Ih);zn.debug(`Firestore (${br}): ${t}`,...n)}}function on(t,...e){if(zn.logLevel<=q.ERROR){const n=e.map(Ih);zn.error(`Firestore (${br}): ${t}`,...n)}}function vy(t,...e){if(zn.logLevel<=q.WARN){const n=e.map(Ih);zn.warn(`Firestore (${br}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Q(t,e){t||V()}function b(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class kS{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new TS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new He(e)}}class CS{constructor(e,n,r){this.type="FirstParty",this.user=He.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class NS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new CS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),new AS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kh.I=-1;class wy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function jr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Xe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _y(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Is.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Is?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Is{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const OS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Is{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return OS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.fields=e,e.sort(We.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Te(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Te(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const DS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(t){if(Q(!!t),typeof t=="string"){let e=0;const n=DS.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(t.seconds),nanos:ae(t.nanos)}}function ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?Te.fromBase64String(t):Te.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ty(t){const e=t.mapValue.fields.__previous_value__;return Sy(e)?Ty(e):e}function ks(t){const e=an(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function xS(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(te.fromString(e))}static fromName(e){return new U(te.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new te(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sy(t)?4:10:V()}function gt(t,e){if(t===e)return!0;const n=Hn(t);if(n!==Hn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ks(t).isEqual(ks(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=an(r.timestampValue),o=an(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return zr(r.bytesValue).isEqual(zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ae(r.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(r.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ae(r.integerValue)===ae(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ae(r.doubleValue),o=ae(i.doubleValue);return s===o?Da(s)===Da(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return jr(t.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ey(s)!==Ey(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!gt(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Cs(t,e){return(t.values||[]).find(n=>gt(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=Hn(t),r=Hn(e);if(n!==r)return K(n,r);switch(n){case 0:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ae(i.integerValue||i.doubleValue),a=ae(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(ks(t),ks(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=zr(i),a=zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=K(o[l],a[l]);if(u!==0)return u}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(ae(i.latitude),ae(s.latitude));return o!==0?o:K(ae(i.longitude),ae(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Wr(o[l],a[l]);if(u)return u}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const p=K(a[c],u[c]);if(p!==0)return p;const d=Wr(o[a[c]],l[u[c]]);if(d!==0)return d}return K(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=an(t),r=an(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function Nh(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=an(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ah(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ah(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function Rh(t){return!!t&&"integerValue"in t}function Ph(t){return!!t&&"arrayValue"in t}function ky(t){return!!t&&"nullValue"in t}function Cy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ns(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ns(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(Ns(this.value))}}function Ny(t){const e=[];return Br(t.fields,(n,r)=>{const i=new We([n]);if(xa(r)){const s=Ny(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ch(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new xe(e,0,W.min(),ut.empty(),0)}static newFoundDocument(e,n,r){return new xe(e,1,n,r,0)}static newNoDocument(e,n){return new xe(e,2,n,ut.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,ut.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function Ay(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LS(t,e,n,r,i,s,o)}function Oh(t){const e=b(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$S(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=La(e.startAt)),e.endAt&&(n+="|ub:",n+=La(e.endAt)),e.R=n}return e.R}function MS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Nh(r.value)}`;var r}).join(", ")}]`),Hr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+La(t.startAt)),t.endAt&&(e+=", endAt: "+La(t.endAt)),`Target(${e})`}function Dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!HS(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!gt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oy(t.startAt,e.startAt)&&Oy(t.endAt,e.endAt)}function xh(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class qe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new US(e,n,r):n==="array-contains"?new bS(e,r):n==="in"?new jS(e,r):n==="not-in"?new BS(e,r):n==="array-contains-any"?new zS(e,r):new qe(e,n,r)}static P(e,n,r){return n==="in"?new FS(e,r):new VS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Wr(n,this.value)):n!==null&&Hn(this.value)===Hn(n)&&this.v(Wr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function $S(t){return t.field.canonicalString()+t.op.toString()+Nh(t.value)}class US extends qe{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.v(n)}}class FS extends qe{constructor(e,n){super(e,"in",n),this.keys=Ry("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VS extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Ry("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ry(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class bS extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ph(n)&&Cs(n.arrayValue,this.value)}}class jS extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cs(this.value.arrayValue,n)}}class BS extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cs(this.value.arrayValue,n)}}class zS extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cs(this.value.arrayValue,r))}}class Lh{constructor(e,n){this.position=e,this.before=n}}function La(t){return`${t.before?"b":"a"}:${t.position.map(e=>Nh(e)).join(",")}`}class qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function HS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Py(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=Wr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Oy(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.D=null,this.startAt,this.endAt}}function WS(t,e,n,r,i,s,o,a){return new As(t,e,n,r,i,s,o,a)}function Ma(t){return new As(t)}function $a(t){return!Hr(t.limit)&&t.limitType==="F"}function Ua(t){return!Hr(t.limit)&&t.limitType==="L"}function Dy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xy(t){for(const e of t.filters)if(e.V())return e.field;return null}function qS(t){return t.collectionGroup!==null}function Rs(t){const e=b(t);if(e.S===null){e.S=[];const n=xy(e),r=Dy(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new qr(n)),e.S.push(new qr(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new qr(We.keyField(),s))}}}return e.S}function Wn(t){const e=b(t);if(!e.D)if(e.limitType==="F")e.D=Ay(e.path,e.collectionGroup,Rs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Rs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new qr(s.field,o))}const r=e.endAt?new Lh(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Lh(e.startAt.position,!e.startAt.before):null;e.D=Ay(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function Ly(t,e,n){return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return Dh(Wn(t),Wn(e))&&t.limitType===e.limitType}function My(t){return`${Oh(Wn(t))}|lt:${t.limitType}`}function Mh(t){return`Query(target=${MS(Wn(t))}; limitType=${t.limitType})`}function Va(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!Py(n.startAt,Rs(n),r)||n.endAt&&Py(n.endAt,Rs(n),r))}(t,e)}function $y(t){return(e,n)=>{let r=!1;for(const i of Rs(t)){const s=KS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KS(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Wr(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function Fy(t){return{integerValue:""+t}}function GS(t,e){return xS(e)?Fy(e):Uy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this._=void 0}}function QS(t,e,n){return t instanceof Ps?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Os?by(t,e):t instanceof Ds?jy(t,e):function(r,i){const s=Vy(r,i),o=By(s)+By(r.N);return Rh(s)&&Rh(r.N)?Fy(o):Uy(r.k,o)}(t,e)}function YS(t,e,n){return t instanceof Os?by(t,e):t instanceof Ds?jy(t,e):n}function Vy(t,e){return t instanceof ja?Rh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ps extends ba{}class Os extends ba{constructor(e){super(),this.elements=e}}function by(t,e){const n=zy(e);for(const r of t.elements)n.some(i=>gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends ba{constructor(e){super(),this.elements=e}}function jy(t,e){let n=zy(e);for(const r of t.elements)n=n.filter(i=>!gt(i,r));return{arrayValue:{values:n}}}class ja extends ba{constructor(e,n){super(),this.k=e,this.N=n}}function By(t){return ae(t.integerValue||t.doubleValue)}function zy(t){return Ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.field=e,this.transform=n}}function JS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Os&&r instanceof Os||n instanceof Ds&&r instanceof Ds?jr(n.elements,r.elements,gt):n instanceof ja&&r instanceof ja?gt(n.N,r.N):n instanceof Ps&&r instanceof Ps}(t.transform,e.transform)}class ZS{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class za{}function eT(t,e,n){t instanceof Ha?function(r,i,s){const o=r.value.clone(),a=Ky(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(r,i,s){if(!Ba(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ky(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(qy(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $h(t,e,n){t instanceof Ha?function(r,i,s){if(!Ba(r.precondition,i))return;const o=r.value.clone(),a=Gy(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Wy(i),o).setHasLocalMutations()}(t,e,n):t instanceof Kr?function(r,i,s){if(!Ba(r.precondition,i))return;const o=Gy(r.fieldTransforms,s,i),a=i.data;a.setAll(qy(r)),a.setAll(o),i.convertToFoundDocument(Wy(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Ba(r.precondition,i)&&i.convertToNoDocument(W.min())}(t,e)}function tT(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vy(r.transform,i||null);s!=null&&(n==null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function Hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&jr(n,r,(i,s)=>JS(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Wy(t){return t.isFoundDocument()?t.version:W.min()}class Ha extends za{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Kr extends za{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function qy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ky(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YS(o,a,n[i]))}return r}function Gy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QS(s,o,e))}return r}class nT extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class rT extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,z;function sT(t){switch(t){default:return V();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Qy(t){if(t===void 0)return on("GRPC error has no .code"),_.UNKNOWN;switch(t){case le.OK:return _.OK;case le.CANCELLED:return _.CANCELLED;case le.UNKNOWN:return _.UNKNOWN;case le.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case le.INTERNAL:return _.INTERNAL;case le.UNAVAILABLE:return _.UNAVAILABLE;case le.UNAUTHENTICATED:return _.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case le.NOT_FOUND:return _.NOT_FOUND;case le.ALREADY_EXISTS:return _.ALREADY_EXISTS;case le.PERMISSION_DENIED:return _.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case le.ABORTED:return _.ABORTED;case le.OUT_OF_RANGE:return _.OUT_OF_RANGE;case le.UNIMPLEMENTED:return _.UNIMPLEMENTED;case le.DATA_LOSS:return _.DATA_LOSS;default:return V()}}(z=le||(le={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ie.RED,this.left=i!=null?i:Ie.EMPTY,this.right=s!=null?s:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ie(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yy(this.data.getIterator())}getIteratorFrom(e){return new Yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class Yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Le(U.comparator);function Kn(){return oT}const aT=new Le(U.comparator);function Uh(){return aT}const lT=new Le(U.comparator);function uT(){return lT}const cT=new ke(U.comparator);function J(...t){let e=cT;for(const n of t)e=e.add(n);return e}const hT=new ke(K);function Xy(){return hT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,n)),new qa(W.min(),r,Xy(),Kn(),J())}}class xs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xs(Te.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.O=i}}class Jy{constructor(e,n){this.targetId=e,this.M=n}}class Zy{constructor(e,n,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ev{constructor(){this.F=0,this.L=nv(),this.B=Te.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=J(),n=J(),r=J();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new xs(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=nv()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class fT{constructor(e){this.et=e,this.nt=new Map,this.st=Kn(),this.it=tv(),this.rt=new ke(K)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.M.count,i=this.wt(n);if(i){const s=i.target;if(xh(s))if(r===0){const o=new U(s.path);this.at(n,o,xe.newNoDocument(o,W.min()))}else Q(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&xh(a.target)){const l=new U(a.target.path);this.st.get(l)!==null||this.yt(o,l)||this.at(o,l,xe.newNoDocument(l,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=J();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new qa(e,n,this.rt,this.st,r);return this.st=Kn(),this.it=tv(),this.rt=new ke(K),i}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new ev,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new ke(K),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new ev),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function tv(){return new Le(U.comparator)}function nv(){return new Le(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class mT{constructor(e,n){this.databaseId=e,this.C=n}}function Ga(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(t,e){return t.C?e.toBase64():e.toUint8Array()}function gT(t,e){return Ga(t,e.toTimestamp())}function Dt(t){return Q(!!t),W.fromTimestamp(function(e){const n=an(e);return new Xe(n.seconds,n.nanos)}(t))}function Fh(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iv(t){const e=te.fromString(t);return Q(cv(e)),e}function Vh(t,e){return Fh(t.databaseId,e.path)}function bh(t,e){const n=iv(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(sv(n))}function jh(t,e){return Fh(t.databaseId,e)}function yT(t){const e=iv(t);return e.length===4?te.emptyPath():sv(e)}function Bh(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sv(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ov(t,e,n){return{name:Vh(t,e),fields:n.value.mapValue.fields}}function vT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.C?(Q(u===void 0||typeof u=="string"),Te.fromBase64String(u||"")):(Q(u===void 0||u instanceof Uint8Array),Te.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:Qy(l.code);return new D(u,l.message||"")}(o);n=new Zy(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bh(t,r.document.name),s=Dt(r.document.updateTime),o=new ut({mapValue:{fields:r.document.fields}}),a=xe.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ka(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bh(t,r.document),s=r.readTime?Dt(r.readTime):W.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bh(t,r.document),s=r.removedTargetIds||[];n=new Ka([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new iT(i),o=r.targetId;n=new Jy(o,s)}}return n}function wT(t,e){let n;if(e instanceof Ha)n={update:ov(t,e.key,e.value)};else if(e instanceof nT)n={delete:Vh(t,e.key)};else if(e instanceof Kr)n={update:ov(t,e.key,e.data),updateMask:RT(e.fieldMask)};else{if(!(e instanceof rT))return V();n={verify:Vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ps)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Os)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ds)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ja)return{fieldPath:s.field.canonicalString(),increment:o.N};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:gT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function ET(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Dt(r.updateTime):Dt(i);return s.isEqual(W.min())&&(s=Dt(i)),new ZS(s,r.transformResults||[])}(n,e))):[]}function _T(t,e){return{documents:[jh(t,e.path)]}}function ST(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const l=a.map(u=>function(c){if(c.op==="=="){if(Cy(c.value))return{unaryFilter:{field:Gr(c.field),op:"IS_NAN"}};if(ky(c.value))return{unaryFilter:{field:Gr(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(Cy(c.value))return{unaryFilter:{field:Gr(c.field),op:"IS_NOT_NAN"}};if(ky(c.value))return{unaryFilter:{field:Gr(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(c.field),op:CT(c.op),value:c.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(l=>function(u){return{field:Gr(u.field),direction:kT(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,l){return a.C||Hr(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=lv(e.startAt)),e.endAt&&(n.structuredQuery.endAt=lv(e.endAt)),n}function TT(t){let e=yT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=av(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(p){return new qr(Qr(p.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(c)));let a=null;n.limit&&(a=function(c){let p;return p=typeof c=="object"?c.value:c,Hr(p)?null:p}(n.limit));let l=null;n.startAt&&(l=uv(n.startAt));let u=null;return n.endAt&&(u=uv(n.endAt)),WS(e,i,o,s,a,"F",l,u)}function IT(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function av(t){return t?t.unaryFilter!==void 0?[AT(t)]:t.fieldFilter!==void 0?[NT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>av(e)).reduce((e,n)=>e.concat(n)):V():[]}function lv(t){return{before:t.before,values:t.position}}function uv(t){const e=!!t.before,n=t.values||[];return new Lh(n,e)}function kT(t){return dT[t]}function CT(t){return pT[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return We.fromServerFormat(t.fieldPath)}function NT(t){return qe.create(Qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function AT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qr(t.unaryFilter.field);return qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qr(t.unaryFilter.field);return qe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qr(t.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qr(t.unaryFilter.field);return qe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function RT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const PT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eT(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&$h(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&$h(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(W.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&jr(this.mutations,e.mutations,(n,r)=>Hy(n,r))&&jr(this.baseMutations,e.baseMutations,(n,r)=>Hy(n,r))}}class zh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=uT();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zh(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=W.min(),o=W.min(),a=Te.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.Gt=e}}function LT(t){const e=TT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ly(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.zt=new $T}addToCollectionParentIndex(e,n){return this.zt.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.zt.getEntries(n))}}class $T{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ke(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Yr(0)}static re(){return new Yr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==PT)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _y(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:W.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:xe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Pn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):qS(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new U(n)).next(r=>{let i=Uh();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=Uh();return this.Jt.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new As(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Cn(e,l,r).next(u=>{u.forEach((c,p)=>{s=s.insert(c,p)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const l of s)for(const u of l.mutations){const c=u.key;let p=i.get(c);p==null&&(p=xe.newInvalidDocument(c),i=i.insert(c,p)),$h(u,p,l.localWriteTime),p.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Va(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=J();for(const o of n)for(const a of o.mutations)a instanceof Kr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(s=s.insert(a,l))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(W.min())?this.Fn(e,n):this.Mn.vn(e,i).next(s=>{const o=this.Ln(n,s);return($a(n)||Ua(n))&&this.Bn(n.limitType,o,i,r)?this.Fn(e,n):(yy()<=q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mh(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Ln(e,n){let r=new ke($y(e));return n.forEach((i,s)=>{Va(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return yy()<=q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Mh(n)),this.Mn.getDocumentsMatchingQuery(e,n,W.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new Le(K),this.Kn=new $s(s=>Oh(s),Dh),this.jn=W.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new hv(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function bT(t,e,n,r){return new VT(t,e,n,r)}async function fv(t,e){const n=b(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(l=>(a=l,r=n.persistence.getMutationQueue(e),i=new hv(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(l=>{const u=[],c=[];let p=J();for(const d of a){u.push(d.batchId);for(const g of d.mutations)p=p.add(g.key)}for(const d of l){c.push(d.batchId);for(const g of d.mutations)p=p.add(g.key)}return i.vn(o,p).next(d=>({Gn:d,removedBatchIds:u,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function jT(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,p=c.keys();let d=k.resolve();return p.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const E=l.docVersions.get(g);Q(E!==null),w.version.compareTo(E)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&u.addEntry(w,l.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function dv(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function BT(t,e){const n=b(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((u,c)=>{const p=i.get(c);if(!p)return;a.push(n.He.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,u.addedDocuments,c)));let d=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(Te.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(c,d),function(g,w,E){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,d,u)&&a.push(n.He.updateTargetData(s,d))});let l=Kn();if(e.documentUpdates.forEach((u,c)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(zT(s,o,e.documentUpdates,r,void 0).next(u=>{l=u})),!r.isEqual(W.min())){const u=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,l)).next(()=>l)}).then(s=>(n.qn=i,s))}function zT(t,e,n,r,i){let s=J();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=Kn();return n.forEach((l,u)=>{const c=o.get(l),p=(i==null?void 0:i.get(l))||r;u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,p),a=a.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u,p),a=a.insert(l,u)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),a})}function HT(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function WT(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new Gn(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Wh(t,e,n){const r=b(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ls(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function pv(t,e,n){const r=b(t);let i=W.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=b(a),p=c.Kn.get(u);return p!==void 0?k.resolve(c.qn.get(p)):c.He.getTargetData(l,u)}(r,o,Wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:J())).next(a=>({documents:a,zn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return k.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Dt(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:LT(r.bundledQuery),readTime:Dt(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.ts=new ke(me.es),this.ns=new ke(me.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new me(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new me(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new U(new te([])),r=new me(n,e),i=new me(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new U(new te([])),r=new me(n,e),i=new me(n,e+1);let s=J();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new me(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return U.comparator(e.key,n.key)||K(e.fs,n.fs)}static ss(e,n){return K(e.fs,n.fs)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new ke(me.es)}checkEmpty(e){return k.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new DT(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new me(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return k.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return k.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new me(n,0),i=new me(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(K);return n.forEach(i=>{const s=new me(i,0),o=new me(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),k.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new me(new U(s),0);let a=new ke(K);return this.ws.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.fs)),!0)},o),k.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return k.forEach(n.mutations,i=>{const s=new me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new me(n,0),i=this.ws.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,k.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Le(U.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=Kn();const s=new U(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||Va(n,l)&&(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}Es(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QT(this)}getSize(e){return k.resolve(this.size)}}class QT extends UT{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.persistence=e,this.Is=new $s(n=>Oh(n),Dh),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.As=0,this.Rs=new qh,this.targetCount=0,this.bs=Yr.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),k.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Yr(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.ae(n),k.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.Ps={},this.Be=new kh(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new YT(this),this.Jt=new MT,this.Je=function(r,i){return new GT(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new xT(n),this.Ye=new qT(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new KT(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new JT(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return k.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class JT extends OT{constructor(e){super(),this.currentSequenceNumber=e}}class Kh{constructor(e){this.persistence=e,this.Cs=new qh,this.Ns=null}static ks(e){return new Kh(e)}get xs(){if(this.Ns)return this.Ns;throw V()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),k.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.xs,r=>{const i=U.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return k.or([()=>k.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class mv{constructor(){this.activeTargetIds=Xy()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZT{constructor(){this.pi=new mv,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);O("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw vy("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+br,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=tI[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new SS;a.listenOnce(wS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Th.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Th.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case Th.HTTP_ERROR:const c=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const p=a.getResponseJson().error;if(p&&p.status&&p.message){const d=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(w)>=0?w:_.UNKNOWN}(p.status);o(new D(d,p.message))}else o(new D(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(_.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}Qi(e,n,r){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yS(),o=vS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new _S({})),this.qi(a.initMessageHeaders,n,r),Km()||Qm()||wE()||Ym()||EE()||Gm()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,p=!1;const d=new nI({Vi:w=>{p?O("Connection","Not sending because WebChannel is closed:",w):(c||(O("Connection","Opening WebChannel transport."),u.open(),c=!0),O("Connection","WebChannel sending:",w),u.send(w))},Si:()=>u.close()}),g=(w,E,f)=>{w.listen(E,h=>{try{f(h)}catch(m){setTimeout(()=>{throw m},0)}})};return g(u,Oa.EventType.OPEN,()=>{p||O("Connection","WebChannel transport opened.")}),g(u,Oa.EventType.CLOSE,()=>{p||(p=!0,O("Connection","WebChannel transport closed"),d.Oi())}),g(u,Oa.EventType.ERROR,w=>{p||(p=!0,vy("Connection","WebChannel transport errored:",w),d.Oi(new D(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,Oa.EventType.MESSAGE,w=>{var E;if(!p){const f=w.data[0];Q(!!f);const h=f,m=h.error||((E=h[0])===null||E===void 0?void 0:E.error);if(m){O("Connection","WebChannel received error:",m);const y=m.status;let v=function(T){const P=le[T];if(P!==void 0)return Qy(P)}(y),A=m.message;v===void 0&&(v=_.INTERNAL,A="Unknown error status: "+y+" with message "+m.message),p=!0,d.Oi(new D(v,A)),u.close()}else O("Connection","WebChannel received:",f),d.Mi(f)}}),g(o,ES.STAT_EVENT,w=>{w.stat===my.PROXY?O("Connection","Detected buffering proxy"):w.stat===my.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}function Gh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){return new mT(t,!0)}class yv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r,i,s,o,a,l){this.Me=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new yv(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new D(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iI extends vv{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=vT(this.k,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?Dt(s.readTime):W.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=Bh(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=xh(a)?{documents:_T(i,a)}:{query:ST(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=rv(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=Ga(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=IT(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Bh(this.k),n.removeTarget=e,this.gr(n)}}class sI extends vv{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=ET(e.writeResults,e.commitTime),r=Dt(e.commitTime);return this.listener.Cr(r,n)}return Q(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Bh(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wT(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Or(){if(this.$r)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(_.UNKNOWN,i.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(_.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class aI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(on(n),this.Lr=!1):O("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Qn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=b(a);l.Gr.add(4),await Us(l),l.Jr.set("Unknown"),l.Gr.delete(4),await Ya(l)}(this))})}),this.Jr=new aI(r,i)}}async function Ya(t){if(Qn(t))for(const e of t.zr)await e(!0)}async function Us(t){for(const e of t.zr)await e(!1)}function wv(t,e){const n=b(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Xh(n)?Yh(n):Xr(n).lr()&&Qh(n,e))}function Ev(t,e){const n=b(t),r=Xr(n);n.Wr.delete(e),r.lr()&&_v(n,e),n.Wr.size===0&&(r.lr()?r._r():Qn(n)&&n.Jr.set("Unknown"))}function Qh(t,e){t.Yr.X(e.targetId),Xr(t).Pr(e)}function _v(t,e){t.Yr.X(e),Xr(t).vr(e)}function Yh(t){t.Yr=new fT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Xr(t).start(),t.Jr.Br()}function Xh(t){return Qn(t)&&!Xr(t).hr()&&t.Wr.size>0}function Qn(t){return b(t).Gr.size===0}function Sv(t){t.Yr=void 0}async function uI(t){t.Wr.forEach((e,n)=>{Qh(t,e)})}async function cI(t,e){Sv(t),Xh(t)?(t.Jr.Kr(e),Yh(t)):t.Jr.set("Unknown")}async function hI(t,e,n){if(t.Jr.set("Online"),e instanceof Zy&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xa(t,r)}else if(e instanceof Ka?t.Yr.ot(e):e instanceof Jy?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(W.min()))try{const r=await dv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Wr.get(l);u&&i.Wr.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.Wr.get(a);if(!l)return;i.Wr.set(a,l.withResumeToken(Te.EMPTY_BYTE_STRING,l.snapshotVersion)),_v(i,a);const u=new Gn(l.target,a,1,l.sequenceNumber);Qh(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Xa(t,r)}}async function Xa(t,e,n){if(!Ls(e))throw e;t.Gr.add(1),await Us(t),t.Jr.set("Offline"),n||(n=()=>dv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Ya(t)})}function Tv(t,e){return e().catch(n=>Xa(t,n,e))}async function Ja(t){const e=b(t),n=ln(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;fI(e);)try{const i=await HT(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,dI(e,i)}catch(i){await Xa(e,i)}Iv(e)&&kv(e)}function fI(t){return Qn(t)&&t.Qr.length<10}function dI(t,e){t.Qr.push(e);const n=ln(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Iv(t){return Qn(t)&&!ln(t).hr()&&t.Qr.length>0}function kv(t){ln(t).start()}async function pI(t){ln(t).kr()}async function mI(t){const e=ln(t);for(const n of t.Qr)e.Dr(n.mutations)}async function gI(t,e,n){const r=t.Qr.shift(),i=zh.from(r,e,n);await Tv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ja(t)}async function yI(t,e){e&&ln(t).Sr&&await async function(n,r){if(i=r.code,sT(i)&&i!==_.ABORTED){const s=n.Qr.shift();ln(n).wr(),await Tv(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ja(n)}var i}(t,e),Iv(t)&&kv(t)}async function Cv(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Qn(n);n.Gr.add(3),await Us(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Ya(n)}async function vI(t,e){const n=b(t);e?(n.Gr.delete(2),await Ya(n)):e||(n.Gr.add(2),await Us(n),n.Jr.set("Unknown"))}function Xr(t){return t.Xr||(t.Xr=function(e,n,r){const i=b(e);return i.Or(),new iI(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:uI.bind(null,t),Ni:cI.bind(null,t),br:hI.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Xh(t)?Yh(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Sv(t))})),t.Xr}function ln(t){return t.Zr||(t.Zr=function(e,n,r){const i=b(e);return i.Or(),new sI(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:pI.bind(null,t),Ni:yI.bind(null,t),Nr:mI.bind(null,t),Cr:gI.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Ja(t)):(await t.Zr.stop(),t.Qr.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(on("AsyncQueue",`${e}: ${t}`),Ls(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Uh(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.eo=new Le(U.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):V():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zr{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Zr(e,n,Jr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.so=void 0,this.listeners=[]}}class EI{constructor(){this.queries=new $s(e=>My(e),Fa),this.onlineState="Unknown",this.io=new Set}}async function ef(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wI),i)try{s.so=await n.onListen(r)}catch(o){const a=Zh(o,`Initialization of query '${Mh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&nf(n)}async function tf(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _I(t,e){const n=b(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&nf(n)}function SI(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function nf(t){t.io.forEach(e=>{e.next()})}class rf{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class TI{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=J(),this.mutatedKeys=J(),this.Ao=$y(e),this.Ro=new Jr(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new Nv,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=$a(this.query)&&i.size===this.query.limit?i.last():null,u=Ua(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,p)=>{const d=i.get(c),g=Va(this.query,p)?p:null,w=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let f=!1;d&&g?d.data.isEqual(g.data)?w!==E&&(r.track({type:3,doc:g}),f=!0):this.Vo(d,g)||(r.track({type:2,doc:g}),f=!0,(l&&this.Ao(g,l)>0||u&&this.Ao(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),f=!0):d&&!g&&(r.track({type:1,doc:d}),f=!0,(l||u)&&(a=!0)),f&&(g?(o=o.add(g),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),$a(this.query)||Ua(this.query))for(;o.size>this.query.limit;){const c=$a(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((u,c)=>function(p,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return g(p)-g(d)}(u.type,c.type)||this.Ao(u.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,l=a!==this.Eo;return this.Eo=a,s.length!==0||l?{snapshot:new Zr(this.query,e.Ro,i,s,e.mutatedKeys,a===0,l,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Nv,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=J(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Rv(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Av(r))}),n}ko(e){this.To=e.zn,this.Io=J();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Zr.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class II{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kI{constructor(e){this.key=e,this.$o=!1}}class CI{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new $s(a=>My(a),Fa),this.Fo=new Map,this.Lo=new Set,this.Bo=new Le(U.comparator),this.Uo=new Map,this.qo=new qh,this.Ko={},this.jo=new Map,this.Qo=Yr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function NI(t,e){const n=UI(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await WT(n.localStore,Wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AI(n,e,r,a==="current"),n.isPrimaryClient&&wv(n.remoteStore,o)}return i}async function AI(t,e,n,r){t.Go=(c,p,d)=>async function(g,w,E,f){let h=w.view.Po(E);h.Bn&&(h=await pv(g.localStore,w.query,!1).then(({documents:v})=>w.view.Po(v,h)));const m=f&&f.targetChanges.get(w.targetId),y=w.view.applyChanges(h,g.isPrimaryClient,m);return Mv(g,w.targetId,y.Co),y.snapshot}(t,c,p,d);const i=await pv(t.localStore,e,!0),s=new TI(e,i.zn),o=s.Po(i.documents),a=xs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Mv(t,n,l.Co);const u=new II(e,n,s);return t.Mo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function RI(t,e){const n=b(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!Fa(s,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ev(n.remoteStore,r.targetId),sf(n,r.targetId)}).catch(Ms)):(sf(n,r.targetId),await Wh(n.localStore,r.targetId,!0))}async function PI(t,e,n){const r=FI(t);try{const i=await function(s,o){const a=b(s),l=Xe.now(),u=o.reduce((p,d)=>p.add(d.key),J());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>a.Wn.vn(p,u).next(d=>{c=d;const g=[];for(const w of o){const E=tT(w,c.get(w.key));E!=null&&g.push(new Kr(w.key,E,Ny(E.value.mapValue),qn.exists(!0)))}return a.An.addMutationBatch(p,l,g,o)})).then(p=>(p.applyToLocalDocumentSet(c),{batchId:p.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ko[s.currentUser.toKey()];l||(l=new Le(K)),l=l.insert(o,a),s.Ko[s.currentUser.toKey()]=l}(r,i.batchId,n),await Fs(r,i.changes),await Ja(r.remoteStore)}catch(i){const s=Zh(i,"Failed to persist write");n.reject(s)}}async function Pv(t,e){const n=b(t);try{const r=await BT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?Q(o.$o):i.removedDocuments.size>0&&(Q(o.$o),o.$o=!1))}),await Fs(n,r,e)}catch(r){await Ms(r)}}function Ov(t,e,n){const r=b(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=b(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const p of c.listeners)p.ro(o)&&(l=!0)}),l&&nf(a)}(r.eventManager,e),i.length&&r.Oo.br(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OI(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new Le(U.comparator);o=o.insert(s,xe.newNoDocument(s,W.min()));const a=J().add(s),l=new qa(W.min(),new Map,new ke(K),o,a);await Pv(r,l),r.Bo=r.Bo.remove(s),r.Uo.delete(e),of(r)}else await Wh(r.localStore,e,!1).then(()=>sf(r,e,n)).catch(Ms)}async function DI(t,e){const n=b(t),r=e.batch.batchId;try{const i=await jT(n.localStore,e);xv(n,r,null),Dv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fs(n,i)}catch(i){await Ms(i)}}async function xI(t,e,n){const r=b(t);try{const i=await function(s,o){const a=b(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.An.lookupMutationBatch(l,o).next(c=>(Q(c!==null),u=c.keys(),a.An.removeMutationBatch(l,c))).next(()=>a.An.performConsistencyCheck(l)).next(()=>a.Wn.vn(l,u))})}(r.localStore,e);xv(r,e,n),Dv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fs(r,i)}catch(i){await Ms(i)}}function Dv(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function xv(t,e,n){const r=b(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function sf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||Lv(t,r)})}function Lv(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Ev(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),of(t))}function Mv(t,e,n){for(const r of n)r instanceof Av?(t.qo.addReference(r.key,e),LI(t,r)):r instanceof Rv?(O("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Lv(t,r.key)):V()}function LI(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(O("SyncEngine","New document in limbo: "+n),t.Lo.add(r),of(t))}function of(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new U(te.fromString(e)),r=t.Qo.next();t.Uo.set(r,new kI(n)),t.Bo=t.Bo.insert(n,r),wv(t.remoteStore,new Gn(Wn(Ma(n.path)),r,2,kh.I))}}async function Fs(t,e,n){const r=b(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,l)=>{o.push(r.Go(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Hh.$n(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Oo.br(i),await async function(a,l){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,p=>k.forEach(p.kn,d=>u.persistence.referenceDelegate.addReference(c,p.targetId,d)).next(()=>k.forEach(p.xn,d=>u.persistence.referenceDelegate.removeReference(c,p.targetId,d)))))}catch(c){if(!Ls(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const p=c.targetId;if(!c.fromCache){const d=u.qn.get(p),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.qn=u.qn.insert(p,w)}}}(r.localStore,s))}async function MI(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await fv(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fs(n,r.Gn)}}function $I(t,e){const n=b(t),r=n.Uo.get(e);if(r&&r.$o)return J().add(r.key);{let i=J();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function UI(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$I.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OI.bind(null,e),e.Oo.br=_I.bind(null,e.eventManager),e.Oo.zo=SI.bind(null,e.eventManager),e}function FI(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xI.bind(null,e),e}class VI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Qa(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return bT(this.persistence,new FT,e.initialUser,this.k)}Yo(e){return new XT(Kh.ks,this.k)}Jo(e){return new ZT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ov(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MI.bind(null,this.syncEngine),await vI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new EI}createDatastore(e){const n=Qa(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new rI(i));var i;return function(s,o,a,l){return new oI(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ov(this.syncEngine,a,0),o=gv.Pt()?new gv:new eI,new lI(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new CI(r,i,s,o,a,l);return u&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=b(e);O("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Us(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=wy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function BI(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HI(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Cv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Cv(e.remoteStore,s)),t.onlineComponents=e}async function HI(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await BI(t,new VI)),t.offlineComponents}async function $v(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await zI(t,new bI)),t.onlineComponents}function WI(t){return $v(t).then(e=>e.syncEngine)}async function Za(t){const e=await $v(t),n=e.eventManager;return n.onListen=NI.bind(null,e.syncEngine),n.onUnlisten=RI.bind(null,e.syncEngine),n}function qI(t,e,n={}){const r=new Ot;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new af({next:p=>{s.enqueueAndForget(()=>tf(i,c));const d=p.docs.has(o);!d&&p.fromCache?l.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&p.fromCache&&a&&a.source==="server"?l.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),c=new rf(Ma(o.path),u,{includeMetadataChanges:!0,wo:!0});return ef(i,c)}(await Za(t),t.asyncQueue,e,n,r)),r.promise}function KI(t,e,n={}){const r=new Ot;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new af({next:p=>{s.enqueueAndForget(()=>tf(i,c)),p.fromCache&&a.source==="server"?l.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),c=new rf(o,u,{includeMetadataChanges:!0,wo:!0});return ef(i,c)}(await Za(t),t.asyncQueue,e,n,r)),r.promise}class GI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QI(t,e,n,r){if(e===!0&&r===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vv(t){if(!U.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bv(t){if(U.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lf(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function YI(t,e){if(e<=0)throw new D(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jv({}),this._settingsFrozen=!1,e instanceof Vs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(i.options.projectId)}(e))}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IS;switch(n.type){case"gapi":const r=n.client;return Q(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new NS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Uv.get(e);n&&(O("ComponentProvider","Removing Datastore"),Uv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Yn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class un extends Yn{constructor(e,n,r){super(e,n,Ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new U(e))}withConverter(e){return new un(this.firestore,e,this._path)}}function HN(t,e,...n){if(t=st(t),Fv("collection","path",e),t instanceof uf){const r=te.fromString(e,...n);return bv(r),new un(t,null,r)}{if(!(t instanceof Ke||t instanceof un))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return bv(r),new un(t.firestore,null,r)}}function XI(t,e,...n){if(t=st(t),arguments.length===1&&(e=wy.A()),Fv("doc","path",e),t instanceof uf){const r=te.fromString(e,...n);return Vv(r),new Ke(t,null,new U(r))}{if(!(t instanceof Ke||t instanceof un))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Vv(r),new Ke(t.firestore,t instanceof un?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new yv(this,"async_queue_retry"),this.bc=()=>{const n=Gh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Ot;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Ls(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw on("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=Jh.createAndSchedule(this,e,n,r,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&V()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function Bv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Xn extends uf{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new JI,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||zv(this),this._firestoreClient.terminate()}}function WN(t=eg()){return Dc(t,"firestore").getImmediate()}function el(t){return t._firestoreClient||zv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zv(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new GI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ei(Te.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ei(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^__.*__$/;class ek{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}function Hv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class df{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.Lc(e),i}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return tl(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(Hv(this.$c)&&ZI.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class tk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Qa(e)}Qc(e,n,r,i=!1){return new df({$c:e,methodName:n,jc:r,path:We.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Wv(t){const e=t._freezeSettings(),n=Qa(t._databaseId);return new tk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qv(t,e,n,r,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,i);Yv("Data must be an object, but it was:",o,r);const a=Gv(r,o);let l,u;if(s.merge)l=new Ch(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const p of s.mergeFields){const d=nk(e,p,n);if(!o.contains(d))throw new D(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ik(c,d)||c.push(d)}l=new Ch(c),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new ek(new ut(a),l,u)}class pf extends hf{_toFieldTransform(e){return new XS(e.path,new Ps)}isEqual(e){return e instanceof pf}}function Kv(t,e){if(Qv(t=st(t)))return Yv("Unsupported field value:",e,t),Gv(t,e);if(t instanceof hf)return function(n,r){if(!Hv(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Kv(o,r.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GS(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Xe.fromDate(n);return{timestampValue:Ga(r.k,i)}}if(n instanceof Xe){const i=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ga(r.k,i)}}if(n instanceof ff)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ei)return{bytesValue:rv(r.k,n._byteString)};if(n instanceof Ke){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${lf(n)}`)}(t,e)}function Gv(t,e){const n={};return _y(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,i)=>{const s=Kv(i,e.Mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Qv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof ff||t instanceof ei||t instanceof Ke||t instanceof hf)}function Yv(t,e,n){if(!Qv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=lf(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function nk(t,e,n){if((e=st(e))instanceof cf)return e._internalPath;if(typeof e=="string")return Xv(t,e);throw tl("Field path arguments must be of type string or ",t,!1,void 0,n)}const rk=new RegExp("[~\\*/\\[\\]]");function Xv(t,e,n){if(e.search(rk)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cf(...e.split("."))._internalPath}catch{throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(_.INVALID_ARGUMENT,a+t+l)}function ik(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sk extends Jv{data(){return super.data()}}function mf(t,e){return typeof e=="string"?Xv(t,e):e instanceof cf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zv extends Jv{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nl extends Zv{data(e={}){return super.data(e)}}class e0{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nl(this._firestore,this._userDataWriter,r.key,r,new bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new nl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new nl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:ok(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){if(Ua(t)&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class n0{}function qN(t,...e){for(const n of e)t=n._apply(t);return t}class ak extends n0{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new qr(i,s);return function(a,l){if(Dy(a)===null){const u=xy(a);u!==null&&uk(a,u,l.field)}}(r,o),o}(e._query,this.zc,this.Yc);return new Yn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new As(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function KN(t,e="asc"){const n=e,r=mf("orderBy",t);return new ak(r,n)}class lk extends n0{constructor(e,n,r){super(),this.type=e,this.Xc=n,this.Zc=r}_apply(e){return new Yn(e.firestore,e.converter,Ly(e._query,this.Xc,this.Zc))}}function GN(t){return YI("limit",t),new lk("limit",t,"F")}function uk(t,e,n){if(!n.isEqual(e))throw new D(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{convertValue(e,n="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return Br(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ff(ae(e.latitude),ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ty(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const n=an(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);Q(cv(r));const i=new Vs(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||on(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){t=yt(t,Ke);const e=yt(t.firestore,Xn);return qI(el(e),t._key).then(n=>s0(e,t,n))}class gf extends ck{constructor(e){super(),this.firestore=e}convertBytes(e){return new ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function YN(t){t=yt(t,Yn);const e=yt(t.firestore,Xn),n=el(e),r=new gf(e);return t0(t._query),KI(n,t._query).then(i=>new e0(e,r,t,i))}function XN(t,e,n){t=yt(t,Ke);const r=yt(t.firestore,Xn),i=r0(t.converter,e,n);return i0(r,[qv(Wv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qn.none())])}function JN(t,e){const n=yt(t.firestore,Xn),r=XI(t),i=r0(t.converter,e);return i0(n,[qv(Wv(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qn.exists(!1))]).then(()=>r)}function ZN(t,...e){var n,r,i;t=st(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Bv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,u,c;if(t instanceof Ke)u=yt(t.firestore,Xn),c=Ma(t._key.path),l={next:p=>{e[o]&&e[o](s0(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=yt(t,Yn);u=yt(p.firestore,Xn),c=p._query;const d=new gf(u);l={next:g=>{e[o]&&e[o](new e0(u,d,p,g))},error:e[o+1],complete:e[o+2]},t0(t._query)}return function(p,d,g,w){const E=new af(w),f=new rf(d,E,g);return p.asyncQueue.enqueueAndForget(async()=>ef(await Za(p),f)),()=>{E.nc(),p.asyncQueue.enqueueAndForget(async()=>tf(await Za(p),f))}}(el(u),c,a,l)}function i0(t,e){return function(n,r){const i=new Ot;return n.asyncQueue.enqueueAndForget(async()=>PI(await WI(n),r,i)),i.promise}(el(t),e)}function s0(t,e,n){const r=n.docs.get(e._key),i=new gf(t);return new Zv(t,i,e._key,r,new bs(n.hasPendingWrites,n.fromCache),e.converter)}function eA(){return new pf("serverTimestamp")}(function(t,e=!0){(function(n){br=n})(ss),is(new Lr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Xn(i,new kS(n.getProvider("auth-internal")),new RS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),nn(gy,"3.4.4",t),nn(gy,"3.4.4","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function yf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function o0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hk=o0,a0=new ns("auth","Firebase",o0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Ac("@firebase/auth");function rl(t,...e){l0.logLevel<=q.ERROR&&l0.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw vf(t,...e)}function wt(t,...e){return vf(t,...e)}function u0(t,e,n){const r=Object.assign(Object.assign({},hk()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function fk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(t,"argument-error"),u0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return a0.create(t,...e)}function F(t,e,...n){if(!t)throw vf(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function Lt(t,e){t||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Map;function Mt(t){Lt(t instanceof Function,"Expected a class definition");let e=c0.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,c0.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t,e){const n=Dc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ra(s,e!=null?e:{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function pk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mk(){return h0()==="http:"||h0()==="https:"}function h0(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mk()||Gm()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=Km()||Qm()}get(){return gk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new js(3e4,6e4);function Ek(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function il(t,e,n,r,i={}){return d0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=rs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),f0.fetch()(p0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function d0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vk),e);try{const i=new Sk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _f(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _f(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _f(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw u0(t,c,u);vt(t,c)}}catch(i){if(i instanceof $n)throw i;vt(t,"network-request-failed")}}async function _k(t,e,n,r,i={}){const s=await il(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function p0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ef(t.config,i):`${t.config.apiScheme}://${i}`}class Sk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),wk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _f(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e){return il(t,"POST","/v1/accounts:delete",e)}async function Ik(t,e){return il(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kk(t,e=!1){const n=st(t),r=await n.getIdToken(e),i=Tf(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bs(Sf(i.auth_time)),issuedAtTime:Bs(Sf(i.iat)),expirationTime:Bs(Sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sf(t){return Number(t)*1e3}function Tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=yE(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i),null}}function Ck(t){const e=Tf(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&Nk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zs(t,Ik(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?Ok(s.providerUserInfo):[],a=Pk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new m0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function Rk(t){const e=st(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ok(t){return t.map(e=>{var{providerId:n}=e,r=yf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){const n=await d0(t,{},async()=>{const r=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=p0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",f0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ck(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Dk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new m0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kk(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zs(this,Tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:v,isAnonymous:A,providerData:T,stsTokenManager:P}=n;F(y&&P,e,"internal-error");const L=Hs.fromJSON(this.name,P);F(typeof y=="string",e,"internal-error"),cn(p,e.name),cn(d,e.name),F(typeof v=="boolean",e,"internal-error"),F(typeof A=="boolean",e,"internal-error"),cn(g,e.name),cn(w,e.name),cn(E,e.name),cn(f,e.name),cn(h,e.name),cn(m,e.name);const R=new Jn({uid:y,auth:e,email:d,emailVerified:v,displayName:p,isAnonymous:A,photoURL:w,phoneNumber:g,tenantId:E,stsTokenManager:L,createdAt:h,lastLoginAt:m});return T&&Array.isArray(T)&&(R.providerData=T.map(ue=>Object.assign({},ue))),f&&(R._redirectEventId=f),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g0.type="NONE";const y0=g0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Mt(y0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mt(y0);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const p=Jn._fromJSON(e,c);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(I0(e))return"Webos";if(If(e))return"Safari";if((e.includes("chrome/")||E0(e))&&!e.includes("edge/"))return"Chrome";if(S0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w0(t=de()){return/firefox\//i.test(t)}function If(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E0(t=de()){return/crios\//i.test(t)}function _0(t=de()){return/iemobile/i.test(t)}function S0(t=de()){return/android/i.test(t)}function T0(t=de()){return/blackberry/i.test(t)}function I0(t=de()){return/webos/i.test(t)}function al(t=de()){return/iphone|ipad|ipod/i.test(t)}function xk(t=de()){var e;return al(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Lk(){return Ym()&&document.documentMode===10}function k0(t=de()){return al(t)||S0(t)||I0(t)||T0(t)||/windows phone/i.test(t)||_0(t)}function Mk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e=[]){let n;switch(t){case"Browser":n=v0(de());break;case"Worker":n=`${v0(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N0(this),this.idTokenSubscription=new N0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function kf(t){return st(t)}class N0{constructor(e){this.auth=e,this.observer=null,this.addObserver=kE(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return _k(t,"POST","/v1/accounts:signInWithIdp",Ek(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="http://localhost";class Zn extends A0{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:Uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends Cf{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ws{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ws{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ws{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ws{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=R0(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=R0(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function R0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends $n{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function Fk(t,e,n=!1){const r=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await zs(t,P0(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Tf(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e,n=!1){const r="signIn",i=await P0(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tA(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function nA(t){return st(t).signOut()}const ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ul,"1"),this.storage.removeItem(ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){const t=de();return If(t)||al(t)}const Bk=1e3,zk=10;class D0 extends O0{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jk()&&Mk(),this.fallbackToPolling=k0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Lk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D0.type="LOCAL";const Hk=D0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends O0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x0.type="SESSION";const L0=x0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Wk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Nf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const d=p;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function Kk(t){Et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){return typeof Et().WorkerGlobalScope!="undefined"&&typeof Et().importScripts=="function"}async function Gk(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yk(){return M0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firebaseLocalStorageDb",Xk=1,hl="firebaseLocalStorage",U0="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fl(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function Jk(){const t=indexedDB.deleteDatabase($0);return new qs(t).toPromise()}function Af(){const t=indexedDB.open($0,Xk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:U0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await Jk(),e(await Af()))})})}async function F0(t,e,n){const r=fl(t,!0).put({[U0]:e,value:n});return new qs(r).toPromise()}async function Zk(t,e){const n=fl(t,!1).get(e),r=await new qs(n).toPromise();return r===void 0?null:r.value}function V0(t,e){const n=fl(t,!0).delete(e);return new qs(n).toPromise()}const eC=800,tC=3;class b0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(Yk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gk(),!this.activeServiceWorker)return;this.sender=new qk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Af();return await F0(e,ul,"1"),await V0(e,ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>F0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>V0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fl(i,!1).getAll();return new qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b0.type="LOCAL";const nC=b0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})}function sC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new js(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e){return e?Mt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends A0{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oC(t){return bk(t.auth,new Rf(t),t.bypassAuthState)}function aC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Vk(n,new Rf(t),t.bypassAuthState)}async function lC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Fk(n,new Rf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return lC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:vt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new js(2e3,1e4);async function rA(t,e,n){const r=kf(t);fk(t,e,Cf);const i=j0(r,n);return new er(r,"signInViaPopup",e,i).executeNotNull()}class er extends B0{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uC.get())};e()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="pendingRedirect",Pf=new Map;class hC extends B0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Pf.get(this.auth._key());if(!e){try{const r=await fC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pf.set(this.auth._key(),e)}return this.bypassAuthState||Pf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fC(t,e){const n=pC(e),r=dC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dC(t){return Mt(t._redirectPersistence)}function pC(t){return ol(cC,t.config.apiKey,t.name)}async function mC(t,e,n=!1){const r=kf(t),i=j0(r,e),o=await new hC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=10*60*1e3;class yC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!H0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gC&&this.cachedEventUids.clear(),this.cachedEventUids.has(z0(e))}saveEventToCache(e){this.cachedEventUids.add(z0(e)),this.lastProcessedEventTime=Date.now()}}function z0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function H0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e={}){return il(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_C=/^https?/;async function SC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wC(t);for(const n of e)try{if(TC(n))return}catch{}vt(t,"unauthorized-domain")}function TC(t){const e=wf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_C.test(n))return!1;if(EC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new js(3e4,6e4);function W0(){const t=Et().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kC(t){return new Promise((e,n)=>{var r,i,s;function o(){W0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W0(),n(wt(t,"network-request-failed"))},timeout:IC.get()})}if((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Et().gapi)===null||s===void 0?void 0:s.load)o();else{const a=sC("iframefcb");return Et()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},iC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dl=null,e})}let dl=null;function CC(t){return dl=dl||kC(t),dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new js(5e3,15e3),AC="__/auth/iframe",RC="emulator/auth/iframe",PC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DC(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,RC):`https://${t.config.authDomain}/${AC}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=OC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rs(r).slice(1)}`}async function xC(t){const e=await CC(t),n=Et().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:DC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=Et().setTimeout(()=>{s(o)},NC.get());function l(){Et().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MC=500,$C=600,UC="_blank",FC="http://localhost";class q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VC(t,e,n,r=MC,i=$C){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=de().toLowerCase();n&&(a=E0(u)?UC:n),w0(u)&&(e=e||FC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(xk(u)&&a!=="_self")return bC(e||"",a),new q0(null);const p=window.open(e||"",a,c);F(p,t,"popup-blocked");try{p.focus()}catch{}return new q0(p)}function bC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="__/auth/handler",BC="emulator/auth/handler";function K0(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof Cf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ws){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zC(t)}?${rs(a).slice(1)}`}function zC({config:t}){return t.emulator?Ef(t,BC):`https://${t.authDomain}/${jC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="webStorageSupport";class HC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L0,this._completeRedirectFn=mC}async _openPopup(e,n,r,i){var s;Lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=K0(e,n,r,wf(),i);return VC(e,o,Nf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Kk(K0(e,n,r,wf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xC(e),r=new yC(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Of,{type:Of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Of];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k0()||If()||al()}}const WC=HC;var G0="@firebase/auth",Q0="0.19.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GC(t){is(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),F(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C0(t)},l=new $k(o,a);return pk(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new Lr("auth-internal",e=>{const n=kf(e.getProvider("auth").getImmediate());return(r=>new qC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(G0,Q0,KC(t)),nn(G0,Q0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t=eg()){const e=Dc(t,"auth");return e.isInitialized()?e.getImmediate():dk(t,{popupRedirectResolver:WC,persistence:[nC,Hk,L0]})}GC("Browser");function pl(){return pl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pl.apply(this,arguments)}var tr,Df=tr||(tr={});Df.Pop="POP";Df.Push="PUSH";Df.Replace="REPLACE";var Y0=function(t){return t};function X0(t){t.preventDefault(),t.returnValue=""}function J0(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(n){return n!==e})}},call:function(e){t.forEach(function(n){return n&&n(e)})}}}function QC(){return Math.random().toString(36).substr(2,8)}function xf(t){var e=t.pathname;e=e===void 0?"/":e;var n=t.search;return n=n===void 0?"":n,t=t.hash,t=t===void 0?"":t,n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function nr(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),n=t.indexOf("?"),0<=n&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function YC(t){function e(){var f=l.location,h=u.state||{};return[h.idx,Y0({pathname:f.pathname,search:f.search,hash:f.hash,state:h.usr||null,key:h.key||"default"})]}function n(f){return typeof f=="string"?f:xf(f)}function r(f,h){return h===void 0&&(h=null),Y0(pl({pathname:g.pathname,hash:"",search:""},typeof f=="string"?nr(f):f,{state:h,key:QC()}))}function i(f){p=f,f=e(),d=f[0],g=f[1],w.call({action:p,location:g})}function s(f,h){function m(){s(f,h)}var y=tr.Push,v=r(f,h);if(!E.length||(E.call({action:y,location:v,retry:m}),!1)){var A=[{usr:v.state,key:v.key,idx:d+1},n(v)];v=A[0],A=A[1];try{u.pushState(v,"",A)}catch{l.location.assign(A)}i(y)}}function o(f,h){function m(){o(f,h)}var y=tr.Replace,v=r(f,h);E.length&&(E.call({action:y,location:v,retry:m}),1)||(v=[{usr:v.state,key:v.key,idx:d},n(v)],u.replaceState(v[0],"",v[1]),i(y))}function a(f){u.go(f)}t===void 0&&(t={}),t=t.window;var l=t===void 0?document.defaultView:t,u=l.history,c=null;l.addEventListener("popstate",function(){if(c)E.call(c),c=null;else{var f=tr.Pop,h=e(),m=h[0];if(h=h[1],E.length){if(m!=null){var y=d-m;y&&(c={action:f,location:h,retry:function(){a(-1*y)}},a(y))}}else i(f)}});var p=tr.Pop;t=e();var d=t[0],g=t[1],w=J0(),E=J0();return d==null&&(d=0,u.replaceState(pl({},u.state,{idx:d}),"")),{get action(){return p},get location(){return g},createHref:n,push:s,replace:o,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(f){return w.push(f)},block:function(f){var h=E.push(f);return E.length===1&&l.addEventListener("beforeunload",X0),function(){h(),E.length||l.removeEventListener("beforeunload",X0)}}}}/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _t(t,e){if(!t)throw new Error(e)}const Lf=j.exports.createContext(null),Mf=j.exports.createContext(null),ii=j.exports.createContext({outlet:null,matches:[]});function XC(t){return rN(t.context)}function JC(t){_t(!1)}function ZC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1}=t;Ks()&&_t(!1);let a=TN(e),l=j.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=nr(r));let{pathname:u="/",search:c="",hash:p="",state:d=null,key:g="default"}=r,w=j.exports.useMemo(()=>{let E=r1(u,a);return E==null?null:{pathname:E,search:c,hash:p,state:d,key:g}},[a,u,c,p,d,g]);return w==null?null:j.exports.createElement(Lf.Provider,{value:l},j.exports.createElement(Mf.Provider,{children:n,value:{location:w,navigationType:i}}))}function sA(t){let{children:e,location:n}=t;return iN($f(e),n)}function eN(t){Ks()||_t(!1);let{basename:e,navigator:n}=j.exports.useContext(Lf),{hash:r,pathname:i,search:s}=Z0(t),o=i;if(e!=="/"){let a=SN(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):mn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Ks(){return j.exports.useContext(Mf)!=null}function ml(){return Ks()||_t(!1),j.exports.useContext(Mf).location}function tN(){Ks()||_t(!1);let{basename:t,navigator:e}=j.exports.useContext(Lf),{matches:n}=j.exports.useContext(ii),{pathname:r}=ml(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=j.exports.useRef(!1);return j.exports.useEffect(()=>{s.current=!0}),j.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=n1(a,JSON.parse(i),r);t!=="/"&&(u.pathname=mn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const nN=j.exports.createContext(null);function rN(t){let e=j.exports.useContext(ii).outlet;return e&&j.exports.createElement(nN.Provider,{value:t},e)}function oA(){let{matches:t}=j.exports.useContext(ii),e=t[t.length-1];return e?e.params:{}}function Z0(t){let{matches:e}=j.exports.useContext(ii),{pathname:n}=ml(),r=JSON.stringify(e.map(i=>i.pathnameBase));return j.exports.useMemo(()=>n1(t,JSON.parse(r),n),[t,r,n])}function iN(t,e){Ks()||_t(!1);let{matches:n}=j.exports.useContext(ii),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=ml(),a;if(e){var l;let d=typeof e=="string"?nr(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||_t(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",p=sN(t,{pathname:c});return gN(p&&p.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:mn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:mn([s,d.pathnameBase])})),n)}function $f(t){let e=[];return j.exports.Children.forEach(t,n=>{if(!j.exports.isValidElement(n))return;if(n.type===j.exports.Fragment){e.push.apply(e,$f(n.props.children));return}n.type!==JC&&_t(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=$f(n.props.children)),e.push(r)}),e}function sN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?nr(e):e,i=r1(r.pathname||"/",n);if(i==null)return null;let s=e1(t);oN(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=mN(s[a],i);return o}function e1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||_t(!1),o.relativePath=o.relativePath.slice(r.length));let a=mn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&_t(!1),e1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:dN(a,i.index),routesMeta:l})}),e}function oN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aN=/^:\w+$/,lN=3,uN=2,cN=1,hN=10,fN=-2,t1=t=>t==="*";function dN(t,e){let n=t.split("/"),r=n.length;return n.some(t1)&&(r+=fN),e&&(r+=uN),n.filter(i=>!t1(i)).reduce((i,s)=>i+(aN.test(s)?lN:s===""?cN:hN),r)}function pN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let p=a.route;s.push({params:r,pathname:mn([i,c.pathname]),pathnameBase:mn([i,c.pathnameBase]),route:p}),c.pathnameBase!=="/"&&(i=mn([i,c.pathnameBase]))}return s}function gN(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>j.exports.createElement(ii.Provider,{children:r.route.element!==void 0?r.route.element:j.exports.createElement(XC,null),value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function yN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,p)=>{if(c==="*"){let d=a[p]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=wN(a[p]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function wN(t,e){try{return decodeURIComponent(t)}catch{return t}}function EN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?nr(t):t;return{pathname:n?n.startsWith("/")?n:_N(n,e):e,search:IN(r),hash:kN(i)}}function _N(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function n1(t,e,n){let r=typeof t=="string"?nr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=EN(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function SN(t){return t===""||t.pathname===""?"/":typeof t=="string"?nr(t).pathname:t.pathname}function r1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const mn=t=>t.join("/").replace(/\/\/+/g,"/"),TN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uf(){return Uf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uf.apply(this,arguments)}function CN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const NN=["onClick","reloadDocument","replace","state","target","to"];function aA(t){let{basename:e,children:n,window:r}=t,i=j.exports.useRef();i.current==null&&(i.current=YC({window:r}));let s=i.current,[o,a]=j.exports.useState({action:s.action,location:s.location});return j.exports.useLayoutEffect(()=>s.listen(a),[s]),j.exports.createElement(ZC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function AN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const lA=j.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=CN(e,NN),c=eN(l),p=RN(l,{replace:s,state:o,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&p(g)}return j.exports.createElement("a",Uf({},u,{href:c,onClick:d,ref:n,target:a}))});function RN(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=tN(),o=ml(),a=Z0(t);return j.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!AN(l)){l.preventDefault();let u=!!r||xf(o)===xf(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}var PN={exports:{}},Gs={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ON=j.exports,i1=60103;Gs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var s1=Symbol.for;i1=s1("react.element"),Gs.Fragment=s1("react.fragment")}var DN=ON.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xN=Object.prototype.hasOwnProperty,LN={key:!0,ref:!0,__self:!0,__source:!0};function o1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xN.call(e,r)&&!LN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:i1,type:t,key:s,ref:o,props:i,_owner:DN.current}}Gs.jsx=o1;Gs.jsxs=o1;PN.exports=Gs;var a1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l1=_n.createContext&&_n.createContext(a1),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},gn.apply(this,arguments)},MN=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function u1(t){return t&&t.map(function(e,n){return _n.createElement(e.tag,gn({key:n},e.attr),u1(e.child))})}function yn(t){return function(e){return _n.createElement($N,gn({attr:gn({},t.attr)},e),u1(t.child))}}function $N(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=MN(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),_n.createElement("svg",gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:gn(gn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&_n.createElement("title",null,s),t.children)};return l1!==void 0?_n.createElement(l1.Consumer,null,function(n){return e(n)}):e(a1)}function uA(t){return yn({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"}}]})(t)}function cA(t){return yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"}}]})(t)}function hA(t){return yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 320L192 192m0 128l128-128"}}]})(t)}function fA(t){return yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M288 336l80-80-80-80M80 256h272"}}]})(t)}function dA(t){return yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"}}]})(t)}function pA(t){return yn({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.5 1h-13l-.5.5v13l.5.5h13l.5-.5v-13l-.5-.5zM14 14H5v-2h2.3c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2H4v3H2V2h2v2.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2h2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.7 0-1.4.4-1.7 1H6.7c-.3-.6-1-1-1.7-1V2h9v12zm-6-3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zM5 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm6 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"}}]})(t)}function mA(t){return yn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"}}]})(t)}var gl,UN=new Uint8Array(16);function FN(){if(!gl&&(gl=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!gl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return gl(UN)}var VN=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function bN(t){return typeof t=="string"&&VN.test(t)}var Ce=[];for(var Ff=0;Ff<256;++Ff)Ce.push((Ff+256).toString(16).substr(1));function jN(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ce[t[e+0]]+Ce[t[e+1]]+Ce[t[e+2]]+Ce[t[e+3]]+"-"+Ce[t[e+4]]+Ce[t[e+5]]+"-"+Ce[t[e+6]]+Ce[t[e+7]]+"-"+Ce[t[e+8]]+Ce[t[e+9]]+"-"+Ce[t[e+10]]+Ce[t[e+11]]+Ce[t[e+12]]+Ce[t[e+13]]+Ce[t[e+14]]+Ce[t[e+15]]).toLowerCase();if(!bN(n))throw TypeError("Stringified UUID is invalid");return n}function gA(t,e,n){t=t||{};var r=t.random||(t.rng||FN)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return jN(r)}function yA(t){return yn({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"}}]})(t)}export{ZN as A,aA as B,eA as D,uA as F,fn as G,GN as H,cA as I,qN as K,lA as L,XI as N,XC as O,BN as R,yA as T,WN as U,pA as V,dA as a,tN as b,fA as c,l1 as d,hA as e,QN as f,iA as g,oA as h,zN as i,PN as j,HN as k,JN as l,YN as m,mA as n,tA as o,XN as p,KN as q,j as r,rA as s,nA as t,ml as u,gA as v,_n as w,sA as x,JC as y};
