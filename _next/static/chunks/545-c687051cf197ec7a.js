"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[545],{9863:function(e,t,r){r.d(t,{B:function(){return c}});var n=r(2265),o=r(7437),u=r(8575),l=r(7053);function c(e){let t=e+"CollectionProvider",[r,c]=function(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let l=n.createContext(u),c=r.length;function i(t){let{scope:r,children:u,...i}=t,a=r?.[e][c]||l,s=n.useMemo(()=>i,Object.values(i));return(0,o.jsx)(a.Provider,{value:s,children:u})}return r=[...r,u],i.displayName=t+"Provider",[i,function(r,o){let i=o?.[e][c]||l,a=n.useContext(i);if(a)return a;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}(t),[i,a]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:r}=e,u=n.useRef(null),l=n.useRef(new Map).current;return(0,o.jsx)(i,{scope:t,itemMap:l,collectionRef:u,children:r})};s.displayName=t;let f=e+"CollectionSlot",p=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,c=a(f,r),i=(0,u.e)(t,c.collectionRef);return(0,o.jsx)(l.g7,{ref:i,children:n})});p.displayName=f;let d=e+"CollectionItemSlot",m="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:c,...i}=e,s=n.useRef(null),f=(0,u.e)(t,s),p=a(d,r);return n.useEffect(()=>(p.itemMap.set(s,{ref:s,...i}),()=>void p.itemMap.delete(s))),(0,o.jsx)(l.g7,{[m]:"",ref:f,children:c})});return v.displayName=d,[{Provider:s,Slot:p,ItemSlot:v},function(t){let r=a(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},c]}},9255:function(e,t,r){r.d(t,{M:function(){return i}});var n,o=r(2265),u=r(1188),l=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),c=0;function i(e){let[t,r]=o.useState(l());return(0,u.b)(()=>{e||r(e=>e??String(c++))},[e]),e||(t?`radix-${t}`:"")}},4545:function(e,t,r){r.d(t,{ck:function(){return I},fC:function(){return E},Pc:function(){return x}});var n=r(2265),o=r(6741),u=r(9863),l=r(8575),c=r(7437),i=r(9255),a=r(6840),s=r(6606),f=r(886),p=r(9114),d="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[w,g,b]=(0,u.B)(v),[h,x]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),l=r.length;function i(t){let{scope:r,children:o,...i}=t,a=r?.[e][l]||u,s=n.useMemo(()=>i,Object.values(i));return(0,c.jsx)(a.Provider,{value:s,children:o})}return r=[...r,o],i.displayName=t+"Provider",[i,function(r,c){let i=c?.[e][l]||u,a=n.useContext(i);if(a)return a;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(v,[b]),[M,R]=h(v),y=n.forwardRef((e,t)=>(0,c.jsx)(w.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(w.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(C,{...e,ref:t})})}));y.displayName=v;var C=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:u,loop:i=!1,dir:v,currentTabStopId:w,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:h,onEntryFocus:x,preventScrollOnEntryFocus:R=!1,...y}=e,C=n.useRef(null),N=(0,l.e)(t,C),_=(0,p.gm)(v),[S=null,E]=(0,f.T)({prop:w,defaultProp:b,onChange:h}),[I,F]=n.useState(!1),j=(0,s.W)(x),k=g(r),P=n.useRef(!1),[T,D]=n.useState(0);return n.useEffect(()=>{let e=C.current;if(e)return e.addEventListener(d,j),()=>e.removeEventListener(d,j)},[j]),(0,c.jsx)(M,{scope:r,orientation:u,dir:_,loop:i,currentTabStopId:S,onItemFocus:n.useCallback(e=>E(e),[E]),onItemShiftTab:n.useCallback(()=>F(!0),[]),onFocusableItemAdd:n.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>D(e=>e-1),[]),children:(0,c.jsx)(a.WV.div,{tabIndex:I||0===T?-1:0,"data-orientation":u,...y,ref:N,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{P.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!P.current;if(e.target===e.currentTarget&&t&&!I){let t=new CustomEvent(d,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable);A([e.find(e=>e.active),e.find(e=>e.id===S),...e].filter(Boolean).map(e=>e.ref.current),R)}}P.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>F(!1))})})}),N="RovingFocusGroupItem",_=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:u=!0,active:l=!1,tabStopId:s,...f}=e,p=(0,i.M)(),d=s||p,m=R(N,r),v=m.currentTabStopId===d,b=g(r),{onFocusableItemAdd:h,onFocusableItemRemove:x}=m;return n.useEffect(()=>{if(u)return h(),()=>x()},[u,h,x]),(0,c.jsx)(w.ItemSlot,{scope:r,id:d,focusable:u,active:l,children:(0,c.jsx)(a.WV.span,{tabIndex:v?0:-1,"data-orientation":m.orientation,...f,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{u?m.onItemFocus(d):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>m.onItemFocus(d)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return S[o]}(e,m.orientation,m.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&o.reverse();let u=o.indexOf(e.currentTarget);o=m.loop?(r=o,n=u+1,r.map((e,t)=>r[(n+t)%r.length])):o.slice(u+1)}setTimeout(()=>A(o))}})})})});_.displayName=N;var S={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var E=y,I=_},886:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(2265),o=r(6606);function u({prop:e,defaultProp:t,onChange:r=()=>{}}){let[u,l]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[u]=r,l=n.useRef(u),c=(0,o.W)(t);return n.useEffect(()=>{l.current!==u&&(c(u),l.current=u)},[u,l,c]),r}({defaultProp:t,onChange:r}),c=void 0!==e,i=c?e:u,a=(0,o.W)(r);return[i,n.useCallback(t=>{if(c){let r="function"==typeof t?t(e):t;r!==e&&a(r)}else l(t)},[c,e,l,a])]}}}]);