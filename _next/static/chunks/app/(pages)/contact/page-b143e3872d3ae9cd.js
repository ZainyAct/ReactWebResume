(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{5590:function(e,t,r){Promise.resolve().then(r.bind(r,3293))},3293:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(7437),s=r(2265),a=r(7495);let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n},o=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:a}=t,o=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],n=null==a?void 0:a[e];if(null===t)return null;let l=i(t)||i(n);return s[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return l(e,o,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...d}[t]):({...a,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)};var d=r(3448);let u=o("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:l=!1,...o}=e,c=l?a.g7:"button";return(0,n.jsx)(c,{className:(0,d.cn)(u({variant:s,size:i,className:r})),ref:t,...o})});c.displayName="Button";let f=s.forwardRef((e,t)=>{let{className:r,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...a})});f.displayName="Input";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...s})});m.displayName="Textarea";var p=r(9820),g=r(6840),h=s.forwardRef((e,t)=>(0,n.jsx)(g.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));h.displayName="Label";let v=o("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(h,{ref:t,className:(0,d.cn)(v(),r),...s})});x.displayName=h.displayName;let b=0,y=new Map,j=e=>{if(y.has(e))return;let t=setTimeout(()=>{y.delete(e),_({type:"REMOVE_TOAST",toastId:e})},1e6);y.set(e,t)},w=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?j(r):e.toasts.forEach(e=>{j(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},N=[],S={toasts:[]};function _(e){S=w(S,e),N.forEach(e=>{e(S)})}function E(e){let{...t}=e,r=(b=(b+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>_({type:"DISMISS_TOAST",toastId:r});return _({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>_({type:"UPDATE_TOAST",toast:{...e,id:r}})}}let T={_origin:"https://api.emailjs.com"},O=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class k{constructor(e){this.status=e.status,this.text=e.responseText}}let R=(e,t,r={})=>new Promise((n,s)=>{let a=new XMLHttpRequest;a.addEventListener("load",({target:e})=>{let t=new k(e);200===t.status||"OK"===t.text?n(t):s(t)}),a.addEventListener("error",({target:e})=>{s(new k(e))}),a.open("POST",T._origin+e,!0),Object.keys(r).forEach(e=>{a.setRequestHeader(e,r[e])}),a.send(t)});var A=(e,t,r,n)=>{let s=n||T._userID;return O(s,e,t),R("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})};function C(){let[e,t]=(0,s.useState)({name:"",email:"",message:""}),[r,a]=(0,s.useState)(!1),{toast:i}=function(){let[e,t]=s.useState(S);return s.useEffect(()=>(N.push(t),()=>{let e=N.indexOf(t);e>-1&&N.splice(e,1)}),[e]),{...e,toast:E,dismiss:e=>_({type:"DISMISS_TOAST",toastId:e})}}(),l=e=>{let{name:r,value:n}=e.target;t(e=>({...e,[r]:n}))};return(0,n.jsx)("div",{className:"gradient flex justify-center items-center h-screen bg-gray-100",children:(0,n.jsx)(p.Zb,{className:"w-full max-w-md shadow-lg",children:r?(0,n.jsxs)(p.aY,{children:[(0,n.jsx)("p",{className:"text-center text-xl font-semibold text-gray-800",children:"Thank you for getting in touch!"}),(0,n.jsx)("p",{className:"text-center text-gray-600 mt-2",children:"I appreciate your message and will get back to you shortly."})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Ol,{children:(0,n.jsx)(p.ll,{className:"text-center",children:"Contact Me"})}),(0,n.jsxs)(p.aY,{children:[(0,n.jsx)("p",{className:"text-center mb-4 text-gray-600",children:"Feel free to reach out if you'd like to get in touch. Whether it's a question, collaboration, or feedback, I'd love to hear from you. Just fill out the form below!"}),(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault(),A("service_s43utjd","template_k5rn6u9",{from_name:e.name,from_email:e.email,message:e.message},"2km08v-GdiDfXHcmV").then(e=>{i({title:"Message Sent!",description:"Your message has been successfully sent. I'll get back to you soon."}),a(!0)},e=>{console.error("EmailJS Error:",e),i({title:"Error",description:"There was an issue sending your message. Please try again."})})},className:"space-y-4",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,n.jsx)(x,{htmlFor:"name",children:"Name"}),(0,n.jsx)(f,{id:"name",name:"name",placeholder:"Enter your name",value:e.name,onChange:l,required:!0})]}),(0,n.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,n.jsx)(x,{htmlFor:"email",children:"Email"}),(0,n.jsx)(f,{id:"email",name:"email",type:"email",placeholder:"Enter your email",value:e.email,onChange:l,required:!0})]}),(0,n.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,n.jsx)(x,{htmlFor:"message",children:"Message"}),(0,n.jsx)(m,{id:"message",name:"message",placeholder:"Write your message here",value:e.message,onChange:l,required:!0})]}),(0,n.jsx)(c,{type:"submit",className:"w-full",children:"Send Message"})]})]})]})})})}},9820:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},Zb:function(){return i},aY:function(){return d},ll:function(){return o}});var n=r(7437),s=r(2265),a=r(3448);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...s})});l.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});o.displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})}).displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",r),...s})});d.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(1994),s=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},8575:function(e,t,r){"use strict";r.d(t,{F:function(){return s},e:function(){return a}});var n=r(2265);function s(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function a(...e){return n.useCallback(s(...e),e)}},6840:function(e,t,r){"use strict";r.d(t,{WV:function(){return i}});var n=r(2265);r(4887);var s=r(7495),a=r(7437),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...i}=e,l=n?s.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(l,{...i,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})},7495:function(e,t,r){"use strict";r.d(t,{g7:function(){return i}});var n=r(2265),s=r(8575),a=r(7437),i=n.forwardRef((e,t)=>{let{children:r,...s}=e,i=n.Children.toArray(r),o=i.find(d);if(o){let e=o.props.children,r=i.map(t=>t!==o?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(l,{...s,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,a.jsx)(l,{...s,ref:t,children:r})});i.displayName="Slot";var l=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e,i;let l=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let s=e[n],a=t[n];/^on[A-Z]/.test(n)?s&&a?r[n]=(...e)=>{a(...e),s(...e)}:s&&(r[n]=s):"style"===n?r[n]={...s,...a}:"className"===n&&(r[n]=[s,a].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props),ref:t?(0,s.F)(t,l):l})}return n.Children.count(r)>1?n.Children.only(null):null});l.displayName="SlotClone";var o=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function d(e){return n.isValidElement(e)&&e.type===o}}},function(e){e.O(0,[137,971,117,744],function(){return e(e.s=5590)}),_N_E=e.O()}]);