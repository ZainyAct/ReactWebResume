(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{3970:function(e,a,t){Promise.resolve().then(t.bind(t,6471))},6471:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return V}});var s=t(7437),n=t(2265),r=t(9820),i=t(6741),l=t(3966),o=t(4545),d=t(1599),c=t(6840),u=t(9114),m=t(886),f=t(9255),x="Tabs",[h,g]=(0,l.b)(x,[o.Pc]),p=(0,o.Pc)(),[b,v]=h(x),j=n.forwardRef((e,a)=>{let{__scopeTabs:t,value:n,onValueChange:r,defaultValue:i,orientation:l="horizontal",dir:o,activationMode:d="automatic",...x}=e,h=(0,u.gm)(o),[g,p]=(0,m.T)({prop:n,onChange:r,defaultProp:i});return(0,s.jsx)(b,{scope:t,baseId:(0,f.M)(),value:g,onValueChange:p,orientation:l,dir:h,activationMode:d,children:(0,s.jsx)(c.WV.div,{dir:h,"data-orientation":l,...x,ref:a})})});j.displayName=x;var y="TabsList",N=n.forwardRef((e,a)=>{let{__scopeTabs:t,loop:n=!0,...r}=e,i=v(y,t),l=p(t);return(0,s.jsx)(o.fC,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:n,children:(0,s.jsx)(c.WV.div,{role:"tablist","aria-orientation":i.orientation,...r,ref:a})})});N.displayName=y;var w="TabsTrigger",C=n.forwardRef((e,a)=>{let{__scopeTabs:t,value:n,disabled:r=!1,...l}=e,d=v(w,t),u=p(t),m=I(d.baseId,n),f=M(d.baseId,n),x=n===d.value;return(0,s.jsx)(o.ck,{asChild:!0,...u,focusable:!r,active:x,children:(0,s.jsx)(c.WV.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":f,"data-state":x?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:m,...l,ref:a,onMouseDown:(0,i.M)(e.onMouseDown,e=>{r||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(n)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(n)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;x||r||!e||d.onValueChange(n)})})})});C.displayName=w;var k="TabsContent",R=n.forwardRef((e,a)=>{let{__scopeTabs:t,value:r,forceMount:i,children:l,...o}=e,u=v(k,t),m=I(u.baseId,r),f=M(u.baseId,r),x=r===u.value,h=n.useRef(x);return n.useEffect(()=>{let e=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.jsx)(d.z,{present:i||x,children:t=>{let{present:n}=t;return(0,s.jsx)(c.WV.div,{"data-state":x?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":m,hidden:!n,id:f,tabIndex:0,...o,ref:a,style:{...e.style,animationDuration:h.current?"0s":void 0},children:n&&l})}})});function I(e,a){return"".concat(e,"-trigger-").concat(a)}function M(e,a){return"".concat(e,"-content-").concat(a)}R.displayName=k;var S=t(3448);let P=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(N,{ref:a,className:(0,S.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...n})});P.displayName=N.displayName;let D=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(C,{ref:a,className:(0,S.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...n})});D.displayName=C.displayName;let A=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(R,{ref:a,className:(0,S.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...n})});A.displayName=R.displayName;var T=t(3145),F=t(641);function V(){return(0,s.jsxs)("div",{className:"w-full min-h-screen relative",children:[(0,s.jsx)("div",{className:"lg:hidden h-screen overflow-auto",children:(0,s.jsx)(F.x,{className:"h-full",children:(0,s.jsx)("div",{className:"px-4 sm:px-6 md:px-8 py-6",children:(0,s.jsx)(r.Zb,{className:"max-w-sm mx-auto shadow-lg bg-white/80 backdrop-blur-lg p-4 sm:p-6 rounded-lg min-h-[500px]",children:(0,s.jsx)(r.aY,{children:E(!0)})})})})}),(0,s.jsx)("div",{className:"hidden lg:flex justify-center items-center min-h-screen",children:(0,s.jsx)(r.Zb,{className:"max-w-4xl w-full shadow-lg bg-white/80 backdrop-blur-lg z-10 p-4 sm:p-6 rounded-lg min-h-[600px]",children:(0,s.jsx)(r.aY,{children:E()})})})]})}function E(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Ol,{className:"text-center mb-4",children:(0,s.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold",children:"About Me"})}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6",children:[(0,s.jsx)("div",{className:"w-36 sm:w-48 h-36 sm:h-48 rounded-full overflow-hidden border-2 border-gray-300 shadow-md flex-shrink-0",children:(0,s.jsx)(T.default,{src:"".concat("/ReactWebResume","/images/Zain.jpg"),alt:"Zain Mahmoud",width:192,height:192,className:"object-cover w-full h-full"})}),(0,s.jsxs)("div",{className:"flex-1 text-center md:text-left",children:[(0,s.jsx)("p",{className:"text-base sm:text-lg text-gray-700 leading-relaxed",children:"Hi, I'm Zain Mahmoud, a 2B Mechatronics Engineering student at the University of Waterloo. I'm deeply passionate about combining software and hardware to create impactful and innovative solutions. My journey has led me to explore the fields of AI, robotics, and full-stack development."}),(0,s.jsx)("p",{className:"mt-4 text-gray-600 leading-relaxed",children:"With hands-on experience in designing smart systems like AI-powered healthcare planners, robotic prosthetics, and HUD glasses, I enjoy tackling complex problems and bringing ideas to life. I value teamwork, continuous learning, and making a difference through technology."})]})]}),(0,s.jsx)("div",{className:"mt-8",children:(0,s.jsxs)(j,{defaultValue:"skills",children:[(0,s.jsxs)(P,{className:"flex justify-center space-x-4",children:[(0,s.jsx)(D,{value:"skills",className:"text-sm sm:text-base",children:"Skills"}),(0,s.jsx)(D,{value:"hobbies",className:"text-sm sm:text-base",children:"Hobbies"}),(0,s.jsx)(D,{value:"goals",className:"text-sm sm:text-base",children:"Goals"})]}),(0,s.jsx)(A,{value:"skills",children:(0,s.jsxs)("ul",{className:"list-disc ml-4 sm:ml-6 mt-4 text-gray-700 text-sm sm:text-base leading-relaxed",children:[(0,s.jsx)("li",{children:"Programming Languages: Python, C++, JavaScript/TypeScript, HTML, CSS/SASS."}),(0,s.jsx)("li",{children:"Frameworks & Tools: ReactJS, Django, Flask, ROS2, TensorFlow, PyTorch, OpenCV."}),(0,s.jsx)("li",{children:"Cloud & Databases: PostgreSQL, SQLite, GCP, AWS, with Azure Fundamentals certification."}),(0,s.jsx)("li",{children:"Full-Stack Development: Skilled in building robust systems using FastAPI, Node.js, and MySQL."}),(0,s.jsx)("li",{children:"Proficient in CI/CD processes using GitHub Actions for scalable deployments."})]})}),(0,s.jsxs)(A,{value:"hobbies",children:[(0,s.jsx)("p",{className:"mt-4 text-gray-700 text-sm sm:text-base leading-relaxed",children:"Outside of work and studies, I enjoy:"}),(0,s.jsxs)("ul",{className:"list-disc ml-4 sm:ml-6 mt-2 text-gray-700 text-sm sm:text-base leading-relaxed",children:[(0,s.jsx)("li",{children:"Sports: Playing volleyball and practicing Muay Thai to stay active and competitive."}),(0,s.jsx)("li",{children:"Electronics Repair: Building PCs and repairing devices like phones and laptops."}),(0,s.jsx)("li",{children:"Personal Projects: Experimenting with AI, robotics, and interactive web applications."}),(0,s.jsx)("li",{children:"Gaming and coding fun projects to merge creativity and technology."})]})]}),(0,s.jsxs)(A,{value:"goals",children:[(0,s.jsx)("p",{className:"mt-4 text-gray-700 text-sm sm:text-base leading-relaxed",children:"My current goals include:"}),(0,s.jsxs)("ul",{className:"list-disc ml-4 sm:ml-6 mt-2 text-gray-700 text-sm sm:text-base leading-relaxed",children:[(0,s.jsx)("li",{children:"Completing my Bachelor's degree in Mechatronics Engineering with a focus on AI and robotics."}),(0,s.jsx)("li",{children:"Developing innovative systems like smart HUD glasses to enhance daily life and security."}),(0,s.jsx)("li",{children:"Gaining more experience in software development and machine learning projects."}),(0,s.jsx)("li",{children:"Contributing to impactful engineering solutions that blend hardware and software seamlessly."})]})]})]})})]})}},9820:function(e,a,t){"use strict";t.d(a,{Ol:function(){return l},Zb:function(){return i},aY:function(){return d},ll:function(){return o}});var s=t(7437),n=t(2265),r=t(3448);let i=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:a,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});i.displayName="Card";let l=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:a,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",t),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:a,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});o.displayName="CardTitle",n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:a,className:(0,r.cn)("text-sm text-muted-foreground",t),...n})}).displayName="CardDescription";let d=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:a,className:(0,r.cn)("p-6 pt-0",t),...n})});d.displayName="CardContent",n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("div",{ref:a,className:(0,r.cn)("flex items-center p-6 pt-0",t),...n})}).displayName="CardFooter"},641:function(e,a,t){"use strict";t.d(a,{x:function(){return l}});var s=t(7437),n=t(2265),r=t(314),i=t(3448);let l=n.forwardRef((e,a)=>{let{className:t,children:n,...l}=e;return(0,s.jsxs)(r.fC,{ref:a,className:(0,i.cn)("relative overflow-hidden",t),...l,children:[(0,s.jsx)(r.l_,{className:"h-full w-full rounded-[inherit]",children:n}),(0,s.jsx)(o,{}),(0,s.jsx)(r.Ns,{})]})});l.displayName=r.fC.displayName;let o=n.forwardRef((e,a)=>{let{className:t,orientation:n="vertical",...l}=e;return(0,s.jsx)(r.gb,{ref:a,orientation:n,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===n&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===n&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...l,children:(0,s.jsx)(r.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=r.gb.displayName},3448:function(e,a,t){"use strict";t.d(a,{cn:function(){return r}});var s=t(1994),n=t(3335);function r(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,n.m6)((0,s.W)(a))}}},function(e){e.O(0,[451,145,314,545,971,117,744],function(){return e(e.s=3970)}),_N_E=e.O()}]);