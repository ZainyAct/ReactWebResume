(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{5590:function(e,t,r){Promise.resolve().then(r.bind(r,6917))},6917:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var s=r(7437),n=r(2265),a=r(2381),i=r(3448);let o=n.forwardRef((e,t)=>{let{className:r,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...a})});o.displayName="Input";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...n})});l.displayName="Textarea";var d=r(9820),u=r(6840),c=n.forwardRef((e,t)=>(0,s.jsx)(u.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));c.displayName="Label";let f=(0,r(7712).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(c,{ref:t,className:(0,i.cn)(f(),r),...n})});m.displayName=c.displayName;let p=0,g=new Map,h=e=>{if(g.has(e))return;let t=setTimeout(()=>{g.delete(e),y({type:"REMOVE_TOAST",toastId:e})},1e6);g.set(e,t)},v=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?h(r):e.toasts.forEach(e=>{h(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},x=[],b={toasts:[]};function y(e){b=v(b,e),x.forEach(e=>{e(b)})}function j(e){let{...t}=e,r=(p=(p+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>y({type:"DISMISS_TOAST",toastId:r});return y({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>y({type:"UPDATE_TOAST",toast:{...e,id:r}})}}let w={_origin:"https://api.emailjs.com"},N=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class _{constructor(e){this.status=e.status,this.text=e.responseText}}let T=(e,t,r={})=>new Promise((s,n)=>{let a=new XMLHttpRequest;a.addEventListener("load",({target:e})=>{let t=new _(e);200===t.status||"OK"===t.text?s(t):n(t)}),a.addEventListener("error",({target:e})=>{n(new _(e))}),a.open("POST",w._origin+e,!0),Object.keys(r).forEach(e=>{a.setRequestHeader(e,r[e])}),a.send(t)});var S=(e,t,r,s)=>{let n=s||w._userID;return N(n,e,t),T("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})};function E(){let[e,t]=(0,n.useState)({name:"",email:"",message:""}),[r,i]=(0,n.useState)(!1),{toast:u}=function(){let[e,t]=n.useState(b);return n.useEffect(()=>(x.push(t),()=>{let e=x.indexOf(t);e>-1&&x.splice(e,1)}),[e]),{...e,toast:j,dismiss:e=>y({type:"DISMISS_TOAST",toastId:e})}}(),c=e=>{let{name:r,value:s}=e.target;t(e=>({...e,[r]:s}))};return(0,s.jsx)("div",{className:"flex justify-center items-center w-full min-h-screen",children:(0,s.jsx)(d.Zb,{className:"w-full max-w-md shadow-lg",children:r?(0,s.jsxs)(d.aY,{children:[(0,s.jsx)("p",{className:"text-center text-xl font-semibold text-gray-800",children:"Thank you for getting in touch!"}),(0,s.jsx)("p",{className:"text-center text-gray-600 mt-2",children:"I appreciate your message and will get back to you shortly."})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Ol,{children:(0,s.jsx)(d.ll,{className:"text-center",children:"Contact Me"})}),(0,s.jsxs)(d.aY,{children:[(0,s.jsx)("p",{className:"text-center mb-4 text-gray-600",children:"Feel free to reach out if you'd like to get in touch. Whether it's a question, collaboration, or feedback, I'd love to hear from you. Just fill out the form below!"}),(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),S("service_s43utjd","template_k5rn6u9",{from_name:e.name,from_email:e.email,message:e.message},"2km08v-GdiDfXHcmV").then(e=>{u({title:"Message Sent!",description:"Your message has been successfully sent. I'll get back to you soon."}),i(!0)},e=>{console.error("EmailJS Error:",e),u({title:"Error",description:"There was an issue sending your message. Please try again."})})},className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,s.jsx)(m,{htmlFor:"name",children:"Name"}),(0,s.jsx)(o,{id:"name",name:"name",placeholder:"Enter your name",value:e.name,onChange:c,required:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,s.jsx)(m,{htmlFor:"email",children:"Email"}),(0,s.jsx)(o,{id:"email",name:"email",type:"email",placeholder:"Enter your email",value:e.email,onChange:c,required:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,s.jsx)(m,{htmlFor:"message",children:"Message"}),(0,s.jsx)(l,{id:"message",name:"message",placeholder:"Write your message here",value:e.message,onChange:c,required:!0})]}),(0,s.jsx)(a.z,{type:"submit",className:"w-full",children:"Send Message"})]})]})]})})})}},2381:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var s=r(7437),n=r(2265),a=r(7053),i=r(7712),o=r(3448);let l=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:d=!1,...u}=e,c=d?a.g7:"button";return(0,s.jsx)(c,{className:(0,o.cn)(l({variant:n,size:i,className:r})),ref:t,...u})});d.displayName="Button"},9820:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},Zb:function(){return i},aY:function(){return d},ll:function(){return l}});var s=r(7437),n=r(2265),a=r(3448);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});i.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...n})});o.displayName="CardHeader";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});l.displayName="CardTitle",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...n})}).displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",r),...n})});d.displayName="CardContent",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r),...n})}).displayName="CardFooter"},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var s=r(1994),n=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}},6840:function(e,t,r){"use strict";r.d(t,{WV:function(){return i}});var s=r(2265);r(4887);var n=r(7053),a=r(7437),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...i}=e,o=s?n.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(o,{...i,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})},7712:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,s,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(s=e(t[r]))&&(n&&(n+=" "),n+=s);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(s&&(s+=" "),s+=t);return s},a=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:o}=t,l=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==o?void 0:o[e];if(null===t)return null;let a=s(t)||s(n);return i[e][a]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e},{});return n(e,l,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:s,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...d}[t]):({...o,...d})[t]===r})?[...e,r,s]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[317,971,117,744],function(){return e(e.s=5590)}),_N_E=e.O()}]);