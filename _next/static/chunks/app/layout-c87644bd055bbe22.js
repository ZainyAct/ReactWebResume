(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2644:function(e,n,t){Promise.resolve().then(t.bind(t,1523)),Promise.resolve().then(t.bind(t,49)),Promise.resolve().then(t.t.bind(t,4811,23)),Promise.resolve().then(t.bind(t,5927)),Promise.resolve().then(t.t.bind(t,2778,23)),Promise.resolve().then(t.bind(t,1477))},1523:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let r=t(8993);function i(e){let{reason:n,children:t}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(n);return t}},49:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"PreloadCss",{enumerable:!0,get:function(){return o}});let r=t(7437),i=t(544);function o(e){let{moduleIds:n}=e;if("undefined"!=typeof window)return null;let t=(0,i.getExpectedRequestStore)("next/dynamic css"),o=[];if(t.reactLoadableManifest&&n){let e=t.reactLoadableManifest;for(let t of n){if(!e[t])continue;let n=e[t].files.filter(e=>e.endsWith(".css"));o.push(...n)}}return 0===o.length?null:(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},5927:function(e,n,t){"use strict";t.d(n,{default:function(){return s}});var r=t(7437),i=t(2265),o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function u(e,n,t){var r=(0,i.useRef)(n);(0,i.useEffect)(function(){r.current=n}),(0,i.useEffect)(function(){var n=void 0===t?window:t,i=function(e){return r.current(e)};return null==n||n.addEventListener(e,i),function(){null==n||n.removeEventListener(e,i)}},[e,t])}var c=function(){var e=(0,i.useState)({info:"",Android:function(){return null},BlackBerry:function(){return null},IEMobile:function(){return null},iOS:function(){return null},iPad:function(){return null},OperaMini:function(){return null},any:function(){return!1}}),n=e[0],t=e[1];return(0,i.useEffect)(function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;t(function(n){return o(o({},n),{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},iPad:function(){return!!(e.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){var e,t,r,i,o;return!!((null===(e=n.Android())||void 0===e?void 0:e.length)||(null===(t=n.BlackBerry())||void 0===t?void 0:t.length)||(null===(r=n.iOS())||void 0===r?void 0:r.length)||n.iPad()||(null===(i=n.OperaMini())||void 0===i?void 0:i.length)||(null===(o=n.IEMobile())||void 0===o?void 0:o.length))}})})}},[]),n};function l(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if("function"!=typeof n)throw TypeError("callback must be a function");for(var i=Object(e),o=i.length>>>0,u=t[2],c=0;c<o;c++){var l=i[c];if(n.call(u,l,c,i))return l}}function a(e){var n=e.clickables,t=void 0===n?["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]:n,c=e.children,a=e.color,s=void 0===a?"220, 90, 90":a,f=e.innerScale,d=void 0===f?.6:f,y=e.innerSize,v=void 0===y?8:y,m=e.innerStyle,p=e.outerAlpha,h=void 0===p?.4:p,S=e.outerScale,b=void 0===S?6:S,g=e.outerSize,x=void 0===g?8:g,E=e.outerStyle,j=e.showSystemCursor,w=void 0!==j&&j,k=e.trailingSpeed,z=void 0===k?8:k,P=(0,i.useMemo)(function(){return{children:c,color:s,innerScale:d,innerSize:v,innerStyle:m,outerAlpha:h,outerScale:b,outerSize:x,outerStyle:E}},[c,s,d,v,m,h,b,x,E]),_=(0,i.useRef)(null),O=(0,i.useRef)(null),C=(0,i.useRef)(null),M=(0,i.useRef)(null),A=(0,i.useState)({x:0,y:0}),L=A[0],I=A[1],R=(0,i.useState)(!1),B=R[0],F=R[1],N=(0,i.useState)(P),T=N[0],q=N[1],U=(0,i.useState)(!1),W=U[0],X=U[1],Y=(0,i.useState)(!1),D=Y[0],G=Y[1],H=(0,i.useRef)(0),J=(0,i.useRef)(0),K=(0,i.useCallback)(function(e){var n=e.clientX,t=e.clientY;I({x:n,y:t}),null!==O.current&&(O.current.style.top="".concat(t,"px"),O.current.style.left="".concat(n,"px")),H.current=n,J.current=t},[]),Q=(0,i.useCallback)(function(e){void 0!==M.current&&(L.x+=(H.current-L.x)/z,L.y+=(J.current-L.y)/z,null!==_.current&&(_.current.style.top="".concat(L.y,"px"),_.current.style.left="".concat(L.x,"px"))),M.current=e,C.current=requestAnimationFrame(Q)},[C]);(0,i.useEffect)(function(){return C.current=requestAnimationFrame(Q),function(){null!==C.current&&cancelAnimationFrame(C.current)}},[Q]);var V=function(e,n){return"".concat(parseInt(String(e*n)),"px")},Z=(0,i.useCallback)(function(e,n,t){e&&(e.style.height=V(n,t),e.style.width=V(n,t))},[]),$=(0,i.useCallback)(function(){return X(!0)},[]),ee=(0,i.useCallback)(function(){return X(!1)},[]),en=(0,i.useCallback)(function(){return F(!0)},[]),et=(0,i.useCallback)(function(){return F(!1)},[]);u("mousemove",K),u("mousedown",$),u("mouseup",ee),u("mouseover",en),u("mouseout",et),(0,i.useEffect)(function(){W?(Z(O.current,T.innerSize,T.innerScale),Z(_.current,T.outerSize,T.outerScale)):(Z(O.current,T.innerSize,1),Z(_.current,T.outerSize,1))},[T.innerSize,T.innerScale,T.outerSize,T.outerScale,Z,W]),(0,i.useEffect)(function(){D&&(Z(O.current,T.innerSize,1.2*T.innerScale),Z(_.current,T.outerSize,1.4*T.outerScale))},[T.innerSize,T.innerScale,T.outerSize,T.outerScale,Z,D]),(0,i.useEffect)(function(){null!=O.current&&null!=_.current&&(B?(O.current.style.opacity="1",_.current.style.opacity="1"):(O.current.style.opacity="0",_.current.style.opacity="0"))},[B]),(0,i.useEffect)(function(){var e=document.querySelectorAll(t.map(function(e){return"object"==typeof e&&(null==e?void 0:e.target)?e.target:null!=e?e:""}).join(","));return e.forEach(function(e){w||(e.style.cursor="none");var n="object"==typeof t?l(t,function(n){return"object"==typeof n&&e.matches(n.target)}):{},r=o(o({},P),n);e.addEventListener("mouseover",function(){X(!0),q(r)}),e.addEventListener("click",function(){X(!0),G(!1)}),e.addEventListener("mousedown",function(){G(!0)}),e.addEventListener("mouseup",function(){X(!0)}),e.addEventListener("mouseout",function(){X(!1),G(!1),q(P)})}),function(){e.forEach(function(e){var n="object"==typeof t?l(t,function(n){return"object"==typeof n&&e.matches(n.target)}):{},r=o(o({},P),n);e.removeEventListener("mouseover",function(){X(!0),q(r)}),e.removeEventListener("click",function(){X(!0),G(!1)}),e.removeEventListener("mousedown",function(){G(!0)}),e.removeEventListener("mouseup",function(){X(!0)}),e.removeEventListener("mouseout",function(){X(!1),G(!1),q(P)})})}},[W,t,w,P]),(0,i.useEffect)(function(){"object"!=typeof window||w||(document.body.style.cursor="none")},[w]);var er={zIndex:999,display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:"opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"},ei={cursorInner:o(o({width:T.children?"auto":T.innerSize,height:T.children?"auto":T.innerSize,backgroundColor:T.children?"transparent":"rgba(".concat(T.color,", 1)")},er),T.innerStyle&&T.innerStyle),cursorOuter:o(o({width:T.outerSize,height:T.outerSize,backgroundColor:"rgba(".concat(T.color,", ").concat(T.outerAlpha,")")},er),T.outerStyle&&T.outerStyle)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:_,style:ei.cursorOuter}),(0,r.jsx)("div",o({ref:O,style:ei.cursorInner},{children:(0,r.jsx)("div",o({style:{opacity:T.children?1:0,transition:"opacity 0.3s ease-in-out"}},{children:T.children}))}))]})}function s(e){var n=e.children,t=e.clickables,i=e.color,u=e.innerScale,l=e.innerSize,s=e.innerStyle,f=e.outerAlpha,d=e.outerScale,y=e.outerSize,v=e.outerStyle,m=e.showSystemCursor,p=e.trailingSpeed,h=c();return"undefined"!=typeof navigator&&h.any()?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(a,o({clickables:t,color:i,innerScale:u,innerSize:l,innerStyle:s,outerAlpha:f,outerScale:d,outerSize:y,outerStyle:v,showSystemCursor:m,trailingSpeed:p},{children:n}))}},1477:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(7437),i=t(2265),o=t(8614),u=t(6298);function c(e){let{func:n}=e,[t,c]=(0,i.useState)(!1),[l,a]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,2e3)),a(!0),setTimeout(()=>c(!0),500)})()},[]),t)?n:(0,r.jsx)(o.M,{children:!t&&(0,r.jsx)(u.E.div,{className:"w-screen h-screen flex justify-center items-center bg-gradient-to-r from-[rgb(0,113,181)] to-[rgb(1,109,174)]",initial:{opacity:1},animate:l?{opacity:0}:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,r.jsx)(u.E.div,{className:"flex items-center justify-center",initial:{scale:.8},animate:{scale:1},exit:{scale:1.2},transition:{duration:.5,ease:"easeInOut"},children:(0,r.jsx)("l-treadmill",{size:"70",speed:"1.25",color:"white"})})})})}},2778:function(){},4811:function(e){e.exports={style:{fontFamily:"'__Inter_3ffca5', '__Inter_Fallback_3ffca5'",fontStyle:"normal"},className:"__className_3ffca5"}}},function(e){e.O(0,[429,461,581,971,117,744],function(){return e(e.s=2644)}),_N_E=e.O()}]);