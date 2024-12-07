"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{8262:function(e,t,i){i.r(t),i.d(t,{bouncy:function(){return o},bouncyArc:function(){return c},cardio:function(){return b},chaoticOrbit:function(){return v},dotPulse:function(){return y},dotSpinner:function(){return $},dotStream:function(){return C},dotWave:function(){return X},grid:function(){return M},hatch:function(){return j},helix:function(){return q},hourglass:function(){return Y},infinity:function(){return I},jelly:function(){return R},jellyTriangle:function(){return Z},leapfrog:function(){return Q},lineSpinner:function(){return et},lineWobble:function(){return ea},metronome:function(){return en},mirage:function(){return ed},miyagi:function(){return eb},momentum:function(){return ev},newtonsCradle:function(){return ey},orbit:function(){return e$},ping:function(){return eC},pinwheel:function(){return eX},pulsar:function(){return eM},quantum:function(){return ej},reuleaux:function(){return eq},ring:function(){return eY},ring2:function(){return eI},ripples:function(){return eR},spiral:function(){return eZ},square:function(){return eQ},squircle:function(){return e1},superballs:function(){return e3},tailChase:function(){return e7},tailspin:function(){return te},treadmill:function(){return ts},trefoil:function(){return to},trio:function(){return tc},waveform:function(){return tu},wobble:function(){return tf},zoomies:function(){return tg}});class s extends HTMLElement{_propsToUpgrade={};shadow;template;defaultProps;isAttached=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(e){e.forEach(e=>{this.hasOwnProperty(e)&&void 0!==this[e]&&(this._propsToUpgrade[e]=this[e],delete this[e])})}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach(([e,t])=>{this.setAttribute(e,t)})}reflect(e){e.forEach(e=>{Object.defineProperty(this,e,{set(t){"string,number".includes(typeof t)?this.setAttribute(e,t.toString()):this.removeAttribute(e)},get(){return this.getAttribute(e)}})})}applyDefaultProps(e){this.defaultProps=e,Object.entries(e).forEach(([e,t])=>{this[e]=this[e]||t.toString()})}}var a=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.6);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:flex-end;display:flex;height:calc(var(--uib-size)*.6);justify-content:space-between;padding-bottom:20%;width:var(--uib-size)}.cube{animation:jump var(--uib-speed) ease-in-out infinite;flex-shrink:0;height:calc(var(--uib-size)*.2);width:calc(var(--uib-size)*.2)}.cube__inner{animation:morph var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:25%;display:block;height:100%;transform-origin:center bottom;transition:background-color .3s ease;width:100%}.cube:nth-child(2),.cube:nth-child(2) .cube__inner{animation-delay:calc(var(--uib-speed)*-.36)}.cube:nth-child(3),.cube:nth-child(3) .cube__inner{animation-delay:calc(var(--uib-speed)*-.2)}@keyframes jump{0%{transform:translateY(0)}28%{animation-timing-function:ease-out;transform:translateY(0)}50%{animation-timing-function:ease-in;transform:translateY(-200%)}74%{animation-timing-function:ease-in;transform:translateY(0)}}@keyframes morph{0%{transform:scaleY(1)}10%{transform:scaleY(1)}20%,25%{animation-timing-function:ease-in-out;transform:scaleY(.6) scaleX(1.3)}30%{animation-timing-function:ease-in-out;transform:scaleY(1.15) scaleX(.9)}40%{transform:scaleY(1)}72%,87%,to{transform:scaleY(1)}77%{transform:scaleY(.8) scaleX(1.2)}}";class r extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container">
        <div class="cube"><div class="cube__inner"></div></div>
        <div class="cube"><div class="cube__inner"></div></div>
        <div class="cube"><div class="cube__inner"></div></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${a}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${a}
    `)}}var o={register:(e="l-bouncy")=>{customElements.get(e)||customElements.define(e,class extends r{})},element:r},n=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.51);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-cube-size:calc(var(--uib-size)/5.5);--uib-arc-1:-80deg;--uib-arc-2:80deg;align-items:flex-start;display:flex;height:100%;justify-content:center;width:100%}.cube{animation:metronome var(--uib-speed) linear infinite;height:calc(var(--uib-size)*.5);transform:rotate(var(var(--uib-arc-1)));transform-origin:center bottom}.cube,.cube:after{width:var(--uib-cube-size)}.cube:after{animation:morph var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:25%;content:"";display:block;height:var(--uib-cube-size);transition:background-color .3s ease}@keyframes metronome{0%{transform:rotate(var(--uib-arc-1))}10%{animation-timing-function:ease-out;transform:rotate(var(--uib-arc-1))}50%{transform:rotate(var(--uib-arc-2))}60%{animation-timing-function:ease-out;transform:rotate(var(--uib-arc-2))}to{transform:rotate(var(--uib-arc-1))}}@keyframes morph{0%,5%{transform:scaleX(.75) scaleY(1.25);transform-origin:center left}12.5%{transform:scaleX(1.5);transform-origin:center left}27.5%{transform:scaleX(1);transform-origin:center left}27.5001%,42.5%{transform:scaleX(1);transform-origin:center right}47.5%{animation-timing-function:ease-in;transform:scaleX(.75) scaleY(1.25);transform-origin:center right}65%{transform:scaleX(1.5);transform-origin:center right}77.5%{transform:scaleX(1);transform-origin:center right}77.5001%,95%{transform:scaleX(1);transform-origin:center left}to{transform:scaleX(.75) scaleY(1.25);transform-origin:center left}}';class l extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:70,color:"black",speed:1.65}),this.template.innerHTML=`
      <div class="container"><div class="cube"></div></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${n}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${n}
    `)}}var c={register:(e="l-bouncy-arc")=>{customElements.get(e)||customElements.define(e,class extends l{})},element:l};function d(e,t){return t.replace(/([-A-y])/g,",$1").split(",").filter(e=>""!==e).map(t=>{let i=t.match(/(\d+\.?\d*)/g)?.[0],s=parseFloat(i)*e;return t.replace(i,s.toString())}).join(" ")}var h=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.625);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:calc(var(--uib-size)*.625);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{stroke:var(--uib-color);stroke-dasharray:100;stroke-dashoffset:0;animation:travel var(--uib-speed) ease-in-out infinite,fade var(--uib-speed) ease-out infinite;transition:stroke .5s ease;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{stroke-linecap:round;stroke-linejoin:round}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:100}75%{stroke-dashoffset:0}}@keyframes fade{0%{opacity:0}20%,55%{opacity:1}to{opacity:0}}";class u extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M0.5,17.2h8.2l3-4.7l5.9,12l7.8-24l5.9,16.7v0h8.2"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:50,color:"black",speed:1.5,stroke:4,"bg-opacity":.1});let e=parseInt(this.size),t=d(e/40,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${.625*e}"
        height="${.625*e}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path 
          class="track"
          stroke-width="${this.stroke}" 
          fill="none" 
          pathlength="100"
          d="${t}"
        />
        <path 
          class="car"
          stroke-width="${this.stroke}" 
          fill="none" 
          pathlength="100"
          d="${t}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${h}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=parseInt(this.size),t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),s=this.shadow.querySelectorAll("path");t&&(i.setAttribute("height",String(.625*e)),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${.625*e}`),s.forEach(t=>{t.setAttribute("stroke-width",this.stroke),t.setAttribute("d",d(e/40,this.d))}),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${h}
    `)}}var b={register:(e="l-cardio")=>{customElements.get(e)||customElements.define(e,class extends u{})},element:u},p=':host{--uib-dot-size:calc(var(--uib-size)*0.4);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;animation:rotate calc(var(--uib-speed)*1.667) infinite linear;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.container:after,.container:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:var(--uib-dot-size);position:absolute;transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:orbit var(--uib-speed) linear infinite}.container:after{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes orbit{0%{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}5%{opacity:.58;transform:translateX(calc(var(--uib-size)*.235)) scale(.684208)}10%{opacity:.51;transform:translateX(calc(var(--uib-size)*.182)) scale(.631576)}15%{opacity:.44;transform:translateX(calc(var(--uib-size)*.129)) scale(.578944)}20%{opacity:.37;transform:translateX(calc(var(--uib-size)*.076)) scale(.526312)}25%{opacity:.3;transform:translateX(0) scale(.47368)}30%{opacity:.37;transform:translateX(calc(var(--uib-size)*-.076)) scale(.526312)}35%{opacity:.44;transform:translateX(calc(var(--uib-size)*-.129)) scale(.578944)}40%{opacity:.51;transform:translateX(calc(var(--uib-size)*-.182)) scale(.631576)}45%{opacity:.58;transform:translateX(calc(var(--uib-size)*-.235)) scale(.684208)}50%{opacity:.65;transform:translateX(calc(var(--uib-size)*-.25)) scale(.73684)}55%{opacity:.72;transform:translateX(calc(var(--uib-size)*-.235)) scale(.789472)}60%{opacity:.79;transform:translateX(calc(var(--uib-size)*-.182)) scale(.842104)}65%{opacity:.86;transform:translateX(calc(var(--uib-size)*-.129)) scale(.894736)}70%{opacity:.93;transform:translateX(calc(var(--uib-size)*-.076)) scale(.947368)}75%{opacity:1;transform:translateX(0) scale(1)}80%{opacity:.93;transform:translateX(calc(var(--uib-size)*.076)) scale(.947368)}85%{opacity:.86;transform:translateX(calc(var(--uib-size)*.129)) scale(.894736)}90%{opacity:.79;transform:translateX(calc(var(--uib-size)*.182)) scale(.842104)}95%{opacity:.72;transform:translateX(calc(var(--uib-size)*.235)) scale(.789472)}to{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}}';class f extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${p}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${p}
    `)}}var v={register:(e="l-chaotic-orbit")=>{customElements.get(e)||customElements.define(e,class extends f{})},element:f},m=':host{--uib-dot-size:calc(var(--uib-size)*0.24);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:space-between;position:relative;width:100%}.container:after,.container:before,.dot{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:var(--uib-dot-size);transform:scale(0);transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.375) infinite}.dot{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.25) infinite both}.container:after{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.125) infinite}@keyframes pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}';class g extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:43,color:"black",speed:1.3}),this.template.innerHTML=`
      <div class="container"><div class="dot" /></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${m}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${m}
    `)}}var y={register:(e="l-dot-pulse")=>{customElements.get(e)||customElements.define(e,class extends g{})},element:g},z=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{height:100%;left:0;position:absolute;top:0;width:100%}.dot:before{animation:pulse calc(var(--uib-speed)*1.111) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:20%;opacity:.5;transform:scale(0);transition:background-color .3s ease;width:20%}.dot:nth-child(2){transform:rotate(45deg)}.dot:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.875)}.dot:nth-child(3){transform:rotate(90deg)}.dot:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.75)}.dot:nth-child(4){transform:rotate(135deg)}.dot:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.625)}.dot:nth-child(5){transform:rotate(180deg)}.dot:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.5)}.dot:nth-child(6){transform:rotate(225deg)}.dot:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.375)}.dot:nth-child(7){transform:rotate(270deg)}.dot:nth-child(7):before{animation-delay:calc(var(--uib-speed)*-.25)}.dot:nth-child(8){transform:rotate(315deg)}.dot:nth-child(8):before{animation-delay:calc(var(--uib-speed)*-.125)}@keyframes pulse{0%,to{opacity:.5;transform:scale(0)}50%{opacity:1;transform:scale(1)}}';class k extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${z}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${z}
    `)}}var $={register:(e="l-dot-spinner")=>{customElements.get(e)||customElements.define(e,class extends k{})},element:k},x=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.18);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-dot-size:calc(var(--uib-size)*0.18);align-items:center;display:flex;justify-content:space-between;position:relative;width:var(--uib-size)}.container,.dot{height:var(--uib-dot-size)}.dot{animation:stream var(--uib-speed) linear infinite both;background-color:var(--uib-color);border-radius:50%;display:block;left:calc(0px - var(--uib-dot-size)/2);position:absolute;top:calc(50% - var(--uib-dot-size)/2);transition:background-color .3s ease;width:var(--uib-dot-size)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.2)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.4)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.6)}.dot:nth-child(5){animation-delay:calc(var(--uib-speed)*-.8)}@keyframes stream{0%,to{transform:translateX(0) scale(0)}50%{transform:translateX(calc(var(--uib-size)*.5)) scale(1)}99.999%{transform:translateX(calc(var(--uib-size))) scale(0)}}";class w extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${x}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${x}
    `)}}var C={register:(e="l-dot-stream")=>{customElements.get(e)||customElements.define(e,class extends w{})},element:w},_=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.5);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:flex-end;display:flex;height:100%;justify-content:space-between;width:100%}.dot{background-color:var(--uib-color);border-radius:50%;flex-shrink:0;height:calc(var(--uib-size)*.17);transition:background-color .3s ease;width:calc(var(--uib-size)*.17)}.dot:first-child{animation:jump var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.dot:nth-child(2){animation:jump var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.dot:nth-child(3){animation:jump var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.dot:nth-child(4){animation:jump var(--uib-speed) ease-in-out infinite}@keyframes jump{0%,to{transform:translateY(0)}50%{transform:translateY(-200%)}}";class P extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:47,color:"black",speed:1}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${_}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${_}
    `)}}var X={register:(e="l-dot-wave")=>{customElements.get(e)||customElements.define(e,class extends P{})},element:P},T=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.8);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-dot-size:calc(var(--uib-size)*0.1);height:calc(var(--uib-size)*.64);position:relative;width:calc(var(--uib-size)*.64)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{--uib-d1:-0.48;--uib-d2:-0.4;--uib-d3:-0.32;--uib-d4:-0.24;--uib-d5:-0.16;--uib-d6:-0.08;--uib-d7:-0;animation:jump var(--uib-speed) ease-in-out infinite;backface-visibility:hidden;bottom:calc(var(--uib-bottom) + var(--uib-dot-size)/2);height:var(--uib-dot-size);opacity:var(--uib-scale);position:absolute;right:calc(var(--uib-right) + var(--uib-dot-size)/2);width:var(--uib-dot-size);will-change:transform}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";height:100%;transform:scale(var(--uib-scale));transition:background-color .3s ease;width:100%}.dot:first-child{--uib-bottom:24%;--uib-right:-35%;animation-delay:calc(var(--uib-speed)*var(--uib-d1))}.dot:nth-child(2){--uib-bottom:16%;--uib-right:-6%;animation-delay:calc(var(--uib-speed)*var(--uib-d2))}.dot:nth-child(3){--uib-bottom:8%;--uib-right:23%;animation-delay:calc(var(--uib-speed)*var(--uib-d3))}.dot:nth-child(4){--uib-bottom:-1%;--uib-right:51%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(5){--uib-bottom:38%;--uib-right:-17.5%;animation-delay:calc(var(--uib-speed)*var(--uib-d2))}.dot:nth-child(6){--uib-bottom:30%;--uib-right:10%;animation-delay:calc(var(--uib-speed)*var(--uib-d3))}.dot:nth-child(7){--uib-bottom:22%;--uib-right:39%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(8){--uib-bottom:14%;--uib-right:67%;animation-delay:calc(var(--uib-speed)*var(--uib-d5))}.dot:nth-child(9){--uib-bottom:53%;--uib-right:-0.8%;animation-delay:calc(var(--uib-speed)*var(--uib-d3))}.dot:nth-child(10){--uib-bottom:44.5%;--uib-right:27%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(11){--uib-bottom:36%;--uib-right:55.7%;animation-delay:calc(var(--uib-speed)*var(--uib-d5))}.dot:nth-child(12){--uib-bottom:28.7%;--uib-right:84.3%;animation-delay:calc(var(--uib-speed)*var(--uib-d6))}.dot:nth-child(13){--uib-bottom:66.8%;--uib-right:15%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(14){--uib-bottom:58.8%;--uib-right:43%;animation-delay:calc(var(--uib-speed)*var(--uib-d5))}.dot:nth-child(15){--uib-bottom:50%;--uib-right:72%;animation-delay:calc(var(--uib-speed)*var(--uib-d6))}.dot:nth-child(16){--uib-bottom:42%;--uib-right:100%;animation-delay:calc(var(--uib-speed)*var(--uib-d7))}.dot:nth-child(3){--uib-scale:0.98}.dot:nth-child(2),.dot:nth-child(8){--uib-scale:0.96}.dot:first-child,.dot:nth-child(7){--uib-scale:0.94}.dot:nth-child(12),.dot:nth-child(6){--uib-scale:0.92}.dot:nth-child(11),.dot:nth-child(5){--uib-scale:0.9}.dot:nth-child(10),.dot:nth-child(16){--uib-scale:0.88}.dot:nth-child(15),.dot:nth-child(9){--uib-scale:0.86}.dot:nth-child(14){--uib-scale:0.84}.dot:nth-child(13){--uib-scale:0.82}@keyframes jump{0%,to{transform:translateY(120%)}50%{transform:translateY(-120%)}}';class S extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${T}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${T}
    `)}}var M={register:(e="l-grid")=>{customElements.get(e)||customElements.define(e,class extends S{})},element:S},A=':host{--uib-mult:calc(var(--uib-size)/var(--uib-stroke));--uib-stroke-px:calc(var(--uib-stroke)*1px);--uib-size-px:calc(var(--uib-size)*1px);align-items:flex-start;display:inline-flex;flex-shrink:0;height:var(--uib-size-px);justify-content:flex-start;position:relative;width:var(--uib-size-px)}:host([hidden]){display:none}.container{height:100%;position:relative;width:100%}.line{animation:center-line var(--uib-speed) ease infinite;left:calc(50% - var(--uib-stroke-px)/2);top:calc(50% - var(--uib-stroke-px)/2)}.container:after,.container:before,.line{background-color:var(--uib-color);height:var(--uib-stroke-px);position:absolute;transition:background-color .3s ease;width:var(--uib-stroke-px)}.container:after,.container:before{animation:explore var(--uib-speed) ease infinite;content:""}.container:after{animation-delay:calc(var(--uib-speed)*-.5)}@keyframes center-line{0%,25%,50%,75%,to{transform:scaleX(1) scaleY(1)}12.5%,62.5%{transform:scaleX(var(--uib-mult)) scaleY(1)}37.5%,87.5%{transform:scaleX(1) scaleY(var(--uib-mult))}}@keyframes explore{0%,to{left:0;top:0;transform:scaleX(1) scaleY(1) translate(0);transform-origin:top left}12.5%{left:0;top:0;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:top left}12.50001%{left:auto;right:0;top:0;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:top right}25%{left:auto;right:0;top:0;transform:scaleX(1) scaleY(1) translate(0);transform-origin:top right}37.5%{left:auto;right:0;top:0;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:top right}37.5001%{bottom:0;left:auto;right:0;top:auto;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:bottom right}50%{bottom:0;left:auto;right:0;top:auto;transform:scaleX(1) scaleY(1) translate(0);transform-origin:bottom right}62.5%{bottom:0;left:auto;right:0;top:auto;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:bottom right}62.5001%{bottom:0;left:0;top:auto;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:bottom left}75%{bottom:0;left:0;top:auto;transform:scaleX(1) scaleY(1) translate(0);transform-origin:bottom left}87.5%{bottom:0;left:0;top:auto;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:bottom left}87.5001%{left:0;top:0;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:top left}}';class E extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:28,color:"black",speed:3.5,stroke:4}),this.template.innerHTML=`
      <div class="container"><div class="line"></div></div>
      <style>
        :host{
          --uib-size: ${this.size};
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke};
        }
        ${A}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size};
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke};
      }
      ${A}
    `)}}var j={register:(e="l-hatch")=>{customElements.get(e)||customElements.define(e,class extends E{})},element:E},L=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.slice{height:calc(var(--uib-size)/6);position:relative;width:100%}.slice:after,.slice:before{--uib-a:calc(var(--uib-speed)/-2);--uib-b:calc(var(--uib-speed)/-6);animation:orbit var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:100%;left:calc(50% - var(--uib-size)/12);position:absolute;top:0;transition:background-color .3s ease;width:16.6666666667%}.slice:first-child:after{animation-delay:var(--uib-a)}.slice:nth-child(2):before{animation-delay:var(--uib-b)}.slice:nth-child(2):after{animation-delay:calc(var(--uib-a) + var(--uib-b))}.slice:nth-child(3):before{animation-delay:calc(var(--uib-b)*2)}.slice:nth-child(3):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*2)}.slice:nth-child(4):before{animation-delay:calc(var(--uib-b)*3)}.slice:nth-child(4):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*3)}.slice:nth-child(5):before{animation-delay:calc(var(--uib-b)*4)}.slice:nth-child(5):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*4)}.slice:nth-child(6):before{animation-delay:calc(var(--uib-b)*5)}.slice:nth-child(6):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*5)}@keyframes orbit{0%{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}5%{opacity:.58;transform:translateX(calc(var(--uib-size)*.235)) scale(.684208)}10%{opacity:.51;transform:translateX(calc(var(--uib-size)*.182)) scale(.631576)}15%{opacity:.44;transform:translateX(calc(var(--uib-size)*.129)) scale(.578944)}20%{opacity:.37;transform:translateX(calc(var(--uib-size)*.076)) scale(.526312)}25%{opacity:.3;transform:translateX(0) scale(.47368)}30%{opacity:.37;transform:translateX(calc(var(--uib-size)*-.076)) scale(.526312)}35%{opacity:.44;transform:translateX(calc(var(--uib-size)*-.129)) scale(.578944)}40%{opacity:.51;transform:translateX(calc(var(--uib-size)*-.182)) scale(.631576)}45%{opacity:.58;transform:translateX(calc(var(--uib-size)*-.235)) scale(.684208)}50%{opacity:.65;transform:translateX(calc(var(--uib-size)*-.25)) scale(.73684)}55%{opacity:.72;transform:translateX(calc(var(--uib-size)*-.235)) scale(.789472)}60%{opacity:.79;transform:translateX(calc(var(--uib-size)*-.182)) scale(.842104)}65%{opacity:.86;transform:translateX(calc(var(--uib-size)*-.129)) scale(.894736)}70%{opacity:.93;transform:translateX(calc(var(--uib-size)*-.076)) scale(.947368)}75%{opacity:1;transform:translateX(0) scale(1)}80%{opacity:.93;transform:translateX(calc(var(--uib-size)*.076)) scale(.947368)}85%{opacity:.86;transform:translateX(calc(var(--uib-size)*.129)) scale(.894736)}90%{opacity:.79;transform:translateX(calc(var(--uib-size)*.182)) scale(.842104)}95%{opacity:.72;transform:translateX(calc(var(--uib-size)*.235)) scale(.789472)}to{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}}';class H extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${L}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector(".container"),t=this.shadow.querySelector("style");e&&(e.className="container",t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${L}
    `)}}var q={register:(e="l-helix")=>{customElements.get(e)||customElements.define(e,class extends H{})},element:H},D=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*2) ease-in-out infinite;display:flex;flex-direction:column;height:100%;position:relative;transform:rotate(45deg);width:100%}.half{--uib-half-size:calc(var(--uib-size)*0.435);align-items:center;display:flex;height:var(--uib-half-size);isolation:isolate;justify-content:center;overflow:hidden;position:absolute;width:var(--uib-half-size)}.half:first-child{left:8.25%;top:8.25%}.half:first-child,.half:last-child{border-radius:50% 50% calc(var(--uib-size)/15)}.half:last-child{align-self:flex-end;bottom:8.25%;right:8.25%;transform:rotate(180deg)}.half:last-child:after{animation-delay:calc(var(--uib-speed)*-1)}.half:before{left:0;opacity:var(--uib-bg-opacity);position:absolute;top:0}.half:after,.half:before{background-color:var(--uib-color);content:"";height:100%;transition:background-color .3s ease;width:100%}.half:after{animation:flow calc(var(--uib-speed)*2) linear infinite both;border-radius:0 0 calc(var(--uib-size)/20) 0;display:block;position:relative;transform:rotate(45deg) translate(-3%,50%) scaleX(1.2);transform-origin:bottom right;z-index:1}@keyframes flow{0%{transform:rotate(45deg) translate(-3%,50%) scaleX(1.2)}30%{transform:rotate(45deg) translate(115%,50%) scaleX(1.2)}30.001%,50%{transform:rotate(0deg) translate(-85%,-85%) scaleX(1)}80%,to{transform:rotate(0deg) translate(0) scaleX(1)}}@keyframes rotate{0%,30%{transform:rotate(45deg)}50%,80%{transform:rotate(225deg)}to{transform:rotate(405deg)}}';class U extends s{_attributes=["size","color","speed","bg-opacity"];size;color;speed;"bg-opacity";static get observedAttributes(){return["size","color","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.75,"bg-opacity":.1}),this.template.innerHTML=`
      <div class="container">
        <div class="half"></div>
        <div class="half"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${D}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${D}
    `)}}var Y={register:(e="l-hourglass")=>{customElements.get(e)||customElements.define(e,class extends U{})},element:U},N=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.42);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:calc(var(--uib-size)*.42);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;transition:stroke .5s ease;will-change:stroke-dasharray,stroke-dashoffset}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:100}}";class F extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:55,color:"black",speed:1.3,stroke:4,"stroke-length":.15,"bg-opacity":.1});let e=parseInt(this.size),t=d(e/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${2.1/5*e}"
        height="${2.1/5*e}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${N}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("path"),s=parseInt(this.size);e&&(t.setAttribute("height",String(2.1/5*s)),t.setAttribute("width",this.size),t.setAttribute("viewBox",`0 0 ${this.size} ${2.1/5*s}`),i.forEach(e=>{e.setAttribute("stroke-width",this.stroke),e.setAttribute("d",d(s/50,this.d))}),e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${N}
    `)}}var I={register:(e="l-infinity")=>{customElements.get(e)||customElements.define(e,class extends F{})},element:F},B=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*2) linear infinite;filter:url(#uib-jelly-ooze);height:calc(var(--uib-size)/2);position:relative;width:var(--uib-size);will-change:transform}.container:after,.container:before{background-color:var(--uib-color);border-radius:100%;content:"";height:100%;left:25%;position:absolute;top:0;transition:background-color .3s ease;width:50%;will-change:transform}.container:before{animation:shift-left var(--uib-speed) ease infinite}.container:after{animation:shift-right var(--uib-speed) ease infinite}.svg{height:0;position:absolute;width:0}@keyframes rotate{0%,49.999%,to{transform:none}50%,99.999%{transform:rotate(90deg)}}@keyframes shift-left{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(-75%)}}@keyframes shift-right{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(75%)}}';class G extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9}),this.template.innerHTML=`
      <div
        class="container"
      ></div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${parseInt(this.size)/8}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${B}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${B}
    `)}}var R={register:(e="l-jelly")=>{customElements.get(e)||customElements.define(e,class extends G{})},element:G},O=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{filter:url(#uib-jelly-triangle-ooze);height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before,.dot{background-color:var(--uib-color);border-radius:100%;content:"";height:33%;position:absolute;transition:background-color .3s ease;width:33%;will-change:transform}.dot{animation:grow var(--uib-speed) ease infinite;left:30%;top:6%}.container:before{animation:grow var(--uib-speed) ease calc(var(--uib-speed)*-.666) infinite;bottom:6%;right:0}.container:after{animation:grow var(--uib-speed) ease calc(var(--uib-speed)*-.333) infinite;bottom:6%;left:0}.traveler{animation:triangulate var(--uib-speed) ease infinite;background-color:var(--uib-color);border-radius:100%;height:33%;left:30%;top:6%;transition:background-color .3s ease;width:33%}.svg,.traveler{position:absolute}.svg{height:0;width:0}@keyframes triangulate{0%,to{transform:none}33.333%{transform:translate(120%,175%)}66.666%{transform:translate(-95%,175%)}}@keyframes grow{0%,85%,to{transform:scale(1.5)}50%,60%{transform:scale(0)}}';class W extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:30,color:"black",speed:1.75}),this.template.innerHTML=`
      <div
        class="container"
      >
      <div class="dot"></div>
      <div class="traveler"></div>
      </div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${parseInt(this.size)/9}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${O}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${O}
    `)}}var Z={register:(e="l-jelly-triangle")=>{customElements.get(e)||customElements.define(e,class extends W{})},element:W},J=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.62);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);justify-content:space-between;position:relative;top:15%;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;left:0}.dot{height:100%;justify-content:flex-start;position:absolute;top:0;width:100%}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:calc(var(--uib-size)*.22);transition:background-color .3s ease;width:calc(var(--uib-size)*.22)}.dot:first-child{animation:leapFrog var(--uib-speed) ease infinite}.dot:nth-child(2){animation:leapFrog var(--uib-speed) ease calc(var(--uib-speed)/-1.5) infinite;transform:translateX(calc(var(--uib-size)*.4))}.dot:nth-child(3){animation:leapFrog var(--uib-speed) ease calc(var(--uib-speed)/-3) infinite;transform:translateX(calc(var(--uib-size)*.8)) rotate(0deg)}@keyframes leapFrog{0%{transform:translateX(0) rotate(0deg)}33.333%{transform:translateX(0) rotate(180deg)}66.666%{transform:translateX(calc(var(--uib-size)*-.38)) rotate(180deg)}99.999%{transform:translateX(calc(var(--uib-size)*-.78)) rotate(180deg)}to{transform:translateX(0) rotate(0deg)}}';class K extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${J}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${J}
    `)}}var Q={register:(e="l-leapfrog")=>{customElements.get(e)||customElements.define(e,class extends K{})},element:K},V=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.line{align-items:flex-start;display:flex;height:100%;left:calc(50% - var(--uib-stroke)/2);position:absolute;top:0;width:var(--uib-stroke)}.line:before{animation:pulse calc(var(--uib-speed)) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-stroke)/2);content:"";height:22%;transform-origin:center bottom;transition:background-color .3s ease;width:100%}.line:first-child{transform:rotate(-30deg)}.line:first-child:before{animation-delay:calc(var(--uib-speed)/-12*1)}.line:nth-child(2){transform:rotate(-60deg)}.line:nth-child(2):before{animation-delay:calc(var(--uib-speed)/-12*2)}.line:nth-child(3){transform:rotate(-90deg)}.line:nth-child(3):before{animation-delay:calc(var(--uib-speed)/-12*3)}.line:nth-child(4){transform:rotate(-120deg)}.line:nth-child(4):before{animation-delay:calc(var(--uib-speed)/-12*4)}.line:nth-child(5){transform:rotate(-150deg)}.line:nth-child(5):before{animation-delay:calc(var(--uib-speed)/-12*5)}.line:nth-child(6){transform:rotate(-180deg)}.line:nth-child(6):before{animation-delay:calc(var(--uib-speed)/-12*6)}.line:nth-child(7){transform:rotate(-210deg)}.line:nth-child(7):before{animation-delay:calc(var(--uib-speed)/-12*7)}.line:nth-child(8){transform:rotate(-240deg)}.line:nth-child(8):before{animation-delay:calc(var(--uib-speed)/-12*8)}.line:nth-child(9){transform:rotate(-270deg)}.line:nth-child(9):before{animation-delay:calc(var(--uib-speed)/-12*9)}.line:nth-child(10){transform:rotate(-300deg)}.line:nth-child(10):before{animation-delay:calc(var(--uib-speed)/-12*10)}.line:nth-child(11){transform:rotate(-330deg)}.line:nth-child(11):before{animation-delay:calc(var(--uib-speed)/-12*11)}@keyframes pulse{0%,80%,to{opacity:0;transform:scaleY(.75)}20%{opacity:1;transform:scaleY(1)}}';class ee extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1,stroke:3}),this.template.innerHTML=`
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${V}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${V}
    `)}}var et={register:(e="l-line-spinner")=>{customElements.get(e)||customElements.define(e,class extends ee{})},element:ee},ei=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-stroke);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;border-radius:calc(var(--uib-stroke)/2);display:flex;height:var(--uib-stroke);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.container:before{left:0;opacity:var(--uib-bg-opacity);position:absolute;top:0}.container:after,.container:before{background-color:var(--uib-color);content:"";height:100%;transition:background-color .3s ease;width:100%}.container:after{animation:wobble var(--uib-speed) ease-in-out infinite;border-radius:calc(var(--uib-stroke)/2);transform:translateX(-95%)}@keyframes wobble{0%,to{transform:translateX(-95%)}50%{transform:translateX(95%)}}';class es extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";static get observedAttributes(){return["size","color","speed","stroke","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:80,color:"black",speed:1.75,stroke:5,"bg-opacity":.1}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${ei}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${ei}
    `)}}var ea={register:(e="l-line-wobble")=>{customElements.get(e)||customElements.define(e,class extends es{})},element:es},er=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.63);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;top:8%;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{animation:swing var(--uib-speed) linear infinite;height:100%;left:0;position:absolute;top:13.5%;width:100%}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";height:25%;transition:background-color .3s ease;width:25%}.dot:first-child{animation-delay:calc(var(--uib-speed)*-.36)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.27);opacity:.8}.dot:nth-child(2):before{transform:scale(.9)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.18);opacity:.6}.dot:nth-child(3):before{transform:scale(.8)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.09);opacity:.4}.dot:nth-child(4):before{transform:scale(.7)}@keyframes swing{0%{transform:rotate(0deg)}15%{transform:rotate(0deg)}50%{transform:rotate(180deg)}65%{transform:rotate(180deg)}to{transform:rotate(0deg)}}';class eo extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.6}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${er}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${er}
    `)}}var en={register:(e="l-metronome")=>{customElements.get(e)||customElements.define(e,class extends eo{})},element:eo},el=":host{--uib-dot-size:calc(var(--uib-size)*0.23);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;filter:url(#uib-jelly-ooze);justify-content:space-between;position:relative;width:var(--uib-size)}.container,.dot{height:var(--uib-dot-size)}.dot{animation:stream var(--uib-speed) linear infinite both;background-color:var(--uib-color);border-radius:50%;display:block;left:calc(0px - var(--uib-dot-size)/2);position:absolute;top:calc(50% - var(--uib-dot-size)/2);transition:background-color .3s ease;width:var(--uib-dot-size)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.2)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.4)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.6)}.dot:nth-child(5){animation-delay:calc(var(--uib-speed)*-.8)}@keyframes stream{0%,to{transform:translateX(0) scale(0)}50%{transform:translateX(calc(var(--uib-size)*.5)) scale(1)}99.999%{transform:translateX(calc(var(--uib-size))) scale(0)}}";class ec extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${parseInt(this.size)/20}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${el}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${el}
    `)}}var ed={register:(e="l-mirage")=>{customElements.get(e)||customElements.define(e,class extends ec{})},element:ec},eh=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.line{animation:rotate var(--uib-speed) ease-in-out infinite alternate;background-color:var(--uib-color);border-radius:calc(var(--uib-stroke)/2);height:var(--uib-stroke);left:0;position:absolute;top:calc(50% - var(--uib-stroke)/2);transition:background-color .3s ease;width:100%}.line:first-child,.line:nth-child(2){animation-delay:calc(var(--uib-speed)*-.375)}.line:nth-child(2){opacity:.8}.line:nth-child(3){animation-delay:calc(var(--uib-speed)*-.3);opacity:.6}.line:nth-child(4){animation-delay:calc(var(--uib-speed)*-.225);opacity:.4}.line:nth-child(5){animation-delay:calc(var(--uib-speed)*-.15);opacity:.2}.line:nth-child(6){animation-delay:calc(var(--uib-speed)*-.075);opacity:.1}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}";class eu extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:.9,stroke:3.5}),this.template.innerHTML=`
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${eh}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${eh}
    `)}}var eb={register:(e="l-miyagi")=>{customElements.get(e)||customElements.define(e,class extends eu{})},element:eu},ep=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;animation:rotate var(--uib-speed) linear infinite;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.container:after,.container:before{background-color:var(--uib-color);border-radius:50%;content:"";height:25%;transition:background-color .3s ease;width:25%}.container:before{animation:wobble2 calc(var(--uib-speed)*1.25) ease-in-out infinite}.container:after{animation:wobble calc(var(--uib-speed)*1.25) ease-in-out infinite}.container:before{margin-right:10%}@keyframes wobble{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.2)) scale(1.1)}}@keyframes wobble2{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*-.2)) scale(1.1)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}';class ef extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.1}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ep}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ep}
    `)}}var ev={register:(e="l-momentum")=>{customElements.get(e)||customElements.define(e,class extends ef{})},element:ef},em=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.3);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:calc(var(--uib-size)*.51);justify-content:center;top:28%;width:51%}.container,.dot{align-items:center;display:flex;position:relative}.dot{flex-shrink:0;height:100%;transform-origin:center top;width:25%}.dot:after{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:25%;transition:background-color .3s ease;width:100%}.dot:first-child{animation:swing var(--uib-speed) linear infinite}.dot:last-child{animation:swing2 var(--uib-speed) linear infinite}@keyframes swing{0%{animation-timing-function:ease-out;transform:rotate(0deg)}25%{animation-timing-function:ease-in;transform:rotate(70deg)}50%{animation-timing-function:linear;transform:rotate(0deg)}}@keyframes swing2{0%{animation-timing-function:linear;transform:rotate(0deg)}50%{animation-timing-function:ease-out;transform:rotate(0deg)}75%{animation-timing-function:ease-in;transform:rotate(-70deg)}}';class eg extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:78,color:"black",speed:1.4}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${em}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${em}
    `)}}var ey={register:(e="l-newtons-cradle")=>{customElements.get(e)||customElements.define(e,class extends eg{})},element:eg},ez=':host{--uib-dot-size:calc(var(--uib-size)*0.4);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:center;position:relative;width:100%}.container:after,.container:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:var(--uib-dot-size);position:absolute;transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:orbit var(--uib-speed) linear infinite}.container:after{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes orbit{0%{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}5%{opacity:.58;transform:translateX(calc(var(--uib-size)*.235)) scale(.684208)}10%{opacity:.51;transform:translateX(calc(var(--uib-size)*.182)) scale(.631576)}15%{opacity:.44;transform:translateX(calc(var(--uib-size)*.129)) scale(.578944)}20%{opacity:.37;transform:translateX(calc(var(--uib-size)*.076)) scale(.526312)}25%{opacity:.3;transform:translateX(0) scale(.47368)}30%{opacity:.37;transform:translateX(calc(var(--uib-size)*-.076)) scale(.526312)}35%{opacity:.44;transform:translateX(calc(var(--uib-size)*-.129)) scale(.578944)}40%{opacity:.51;transform:translateX(calc(var(--uib-size)*-.182)) scale(.631576)}45%{opacity:.58;transform:translateX(calc(var(--uib-size)*-.235)) scale(.684208)}50%{opacity:.65;transform:translateX(calc(var(--uib-size)*-.25)) scale(.73684)}55%{opacity:.72;transform:translateX(calc(var(--uib-size)*-.235)) scale(.789472)}60%{opacity:.79;transform:translateX(calc(var(--uib-size)*-.182)) scale(.842104)}65%{opacity:.86;transform:translateX(calc(var(--uib-size)*-.129)) scale(.894736)}70%{opacity:.93;transform:translateX(calc(var(--uib-size)*-.076)) scale(.947368)}75%{opacity:1;transform:translateX(0) scale(1)}80%{opacity:.93;transform:translateX(calc(var(--uib-size)*.076)) scale(.947368)}85%{opacity:.86;transform:translateX(calc(var(--uib-size)*.129)) scale(.894736)}90%{opacity:.79;transform:translateX(calc(var(--uib-size)*.182)) scale(.842104)}95%{opacity:.72;transform:translateX(calc(var(--uib-size)*.235)) scale(.789472)}to{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}}';class ek extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ez}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ez}
    `)}}var e$={register:(e="l-orbit")=>{customElements.get(e)||customElements.define(e,class extends ek{})},element:ek},ex=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before{animation:pulse var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);transition:background-color .3s ease;width:100%}.container:after{animation-delay:calc(var(--uib-speed)/-2)}@keyframes pulse{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}';class ew extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:2}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ex}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ex}
    `)}}var eC={register:(e="l-ping")=>{customElements.get(e)||customElements.define(e,class extends ew{})},element:ew},e_=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.line{animation:rotate var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-stroke)/2);height:var(--uib-stroke);left:0;position:absolute;top:calc(50% - var(--uib-stroke)/2);transition:background-color .3s ease;width:100%}.line:first-child,.line:nth-child(2){animation-delay:calc(var(--uib-speed)*-.375)}.line:nth-child(2){opacity:.8}.line:nth-child(3){animation-delay:calc(var(--uib-speed)*-.3);opacity:.6}.line:nth-child(4){animation-delay:calc(var(--uib-speed)*-.225);opacity:.4}.line:nth-child(5){animation-delay:calc(var(--uib-speed)*-.15);opacity:.2}.line:nth-child(6){animation-delay:calc(var(--uib-speed)*-.075);opacity:.1}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}";class eP extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:.9,stroke:3.5}),this.template.innerHTML=`
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${e_}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${e_}
    `)}}var eX={register:(e="l-pinwheel")=>{customElements.get(e)||customElements.define(e,class extends eP{})},element:eP},eT=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before{animation:pulse var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;position:absolute;top:0;transform:scale(0);transition:background-color .3s ease;width:100%}.container:after{animation-delay:calc(var(--uib-speed)/-2)}@keyframes pulse{0%,to{opacity:1;transform:scale(0)}50%{opacity:.25;transform:scale(1)}}';class eS extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${eT}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${eT}
    `)}}var eM={register:(e="l-pulsar")=>{customElements.get(e)||customElements.define(e,class extends eS{})},element:eS},eA=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*4) linear infinite;height:var(--uib-size);position:relative;width:var(--uib-size)}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.particle{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.particle:first-child{--uib-delay:0;transform:rotate(8deg)}.particle:nth-child(2){--uib-delay:-0.4;transform:rotate(36deg)}.particle:nth-child(3){--uib-delay:-0.9;transform:rotate(72deg)}.particle:nth-child(4){--uib-delay:-0.5;transform:rotate(90deg)}.particle:nth-child(5){--uib-delay:-0.3;transform:rotate(144deg)}.particle:nth-child(6){--uib-delay:-0.2;transform:rotate(180deg)}.particle:nth-child(7){--uib-delay:-0.6;transform:rotate(216deg)}.particle:nth-child(8){--uib-delay:-0.7;transform:rotate(252deg)}.particle:nth-child(9){--uib-delay:-0.1;transform:rotate(300deg)}.particle:nth-child(10){--uib-delay:-0.8;transform:rotate(324deg)}.particle:nth-child(11){--uib-delay:-1.2;transform:rotate(335deg)}.particle:nth-child(12){--uib-delay:-0.5;transform:rotate(290deg)}.particle:nth-child(13){--uib-delay:-0.2;transform:rotate(240deg)}.particle:before{--uib-d:calc(var(--uib-delay)*var(--uib-speed));animation:orbit var(--uib-speed) linear var(--uib-d) infinite;background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:17.5%;position:absolute;transition:background-color .3s ease;width:17.5%}@keyframes orbit{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}';class eE extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${eA}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${eA}
    `)}}var ej={register:(e="l-quantum")=>{customElements.get(e)||customElements.define(e,class extends eE{})},element:eE},eL=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:100}}";class eH extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M49.5,42.9c0-18.1-9.9-34-24.5-42.4C10.4,9,0.5,24.8,0.5,42.9c7.2,4.2,15.6,6.6,24.5,6.6S42.3,47.1,49.5,42.9z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:37,color:"black",stroke:5,speed:.9,"stroke-length":.15,"bg-opacity":.1});let e=d(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${e}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${e}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${eL}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("path");e&&(t.setAttribute("height",this.size),t.setAttribute("width",this.size),t.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),i.forEach(e=>{e.setAttribute("stroke-width",this.stroke),e.setAttribute("d",d(parseInt(this.size)/50,this.d))}),e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${eL}
    `)}}var eq={register:(e="l-reuleaux")=>{customElements.get(e)||customElements.define(e,class extends eH{})},element:eH},eD=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate var(--uib-speed) linear infinite;height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:stretch calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes stretch{0%{stroke-dasharray:0,150;stroke-dashoffset:0}50%{stroke-dasharray:75,150;stroke-dashoffset:-25}to{stroke-dashoffset:-99}}";class eU extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";static get observedAttributes(){return["size","color","stroke","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:5,speed:2,"bg-opacity":0});let e=parseInt(this.size),t=parseInt(this.stroke),i=e/2,s=Math.max(0,e/2-t/2);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${i}" 
          cy="${i}" 
          r="${s}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${i}" 
          cy="${i}" 
          r="${s}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${eD}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("circle");if(!e)return;let s=parseInt(this.size),a=parseInt(this.stroke),r=String(s/2),o=String(Math.max(0,s/2-a/2));t.setAttribute("height",this.stroke),t.setAttribute("width",this.stroke),t.setAttribute("viewBox",`0 0 ${s} ${s}`),i.forEach(e=>{e.setAttribute("cx",r),e.setAttribute("cy",r),e.setAttribute("r",o),e.setAttribute("stroke-width",this.stroke)}),e.innerHTML=`
      :host{
        --uib-size: ${s}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${eD}
    `}}var eY={register:(e="l-ring")=>{customElements.get(e)||customElements.define(e,class extends eU{})},element:eU},eN=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate var(--uib-speed) linear infinite;height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes rotate{to{transform:rotate(1turn)}}";class eF extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";static get observedAttributes(){return["size","color","stroke","stroke-length","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:5,"stroke-length":.25,speed:.8,"bg-opacity":.1});let e=parseInt(this.size),t=parseInt(this.stroke),i=e/2,s=Math.max(0,e/2-t/2);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="${i} ${i} ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${s}" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${s}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${eN}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("circle");if(!e)return;let s=parseInt(this.size),a=parseInt(this.stroke),r=s/2,o=String(Math.max(0,s/2-a/2));t.setAttribute("height",this.size),t.setAttribute("width",this.size),t.setAttribute("viewBox",`${r} ${r} ${this.size} ${this.size}`),i.forEach(e=>{e.setAttribute("cx",this.size),e.setAttribute("cy",this.size),e.setAttribute("r",o),e.setAttribute("stroke-width",this.stroke)}),e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${eN}
    `}}var eI={register:(e="l-ring-2")=>{customElements.get(e)||customElements.define(e,class extends eF{})},element:eF},eB=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before,.dot:after,.dot:before{animation:pulse var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);transition:background-color .3s ease;width:100%}.container:after{animation-delay:calc(var(--uib-speed)/-4)}.dot:before{animation-delay:calc(var(--uib-speed)*-.5)}.dot:after{animation-delay:calc(var(--uib-speed)*-.75)}@keyframes pulse{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}';class eG extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:2}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${eB}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${eB}
    `)}}var eR={register:(e="l-ripples")=>{customElements.get(e)||customElements.define(e,class extends eG{})},element:eG},eO=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-center:calc(var(--uib-size)/2 - var(--uib-size)/5/2);animation:rotate calc(var(--uib-speed)*3) linear infinite;height:var(--uib-size);position:relative;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{height:100%;left:0;position:absolute;top:0;width:100%}.dot:before{animation:oscillate var(--uib-speed) ease-in-out infinite alternate;background-color:var(--uib-color);border-radius:50%;content:"";height:20%;transition:background-color .3s ease;width:20%}.dot:first-child:before{transform:translateX(var(--uib-center))}.dot:nth-child(2){transform:rotate(45deg)}.dot:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.125);transform:translateX(var(--uib-center))}.dot:nth-child(3){transform:rotate(90deg)}.dot:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.25);transform:translateX(var(--uib-center))}.dot:nth-child(4){transform:rotate(135deg)}.dot:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.375);transform:translateX(var(--uib-center))}.dot:nth-child(5){transform:rotate(180deg)}.dot:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.5);transform:translateX(var(--uib-center))}.dot:nth-child(6){transform:rotate(225deg)}.dot:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.625);transform:translateX(var(--uib-center))}.dot:nth-child(7){transform:rotate(270deg)}.dot:nth-child(7):before{animation-delay:calc(var(--uib-speed)*-.75);transform:translateX(var(--uib-center))}.dot:nth-child(8){transform:rotate(315deg)}.dot:nth-child(8):before{animation-delay:calc(var(--uib-speed)*-.875);transform:translateX(var(--uib-center))}@keyframes oscillate{0%{opacity:.25;transform:translateX(var(--uib-center)) scale(0)}to{opacity:1;transform:translateX(0) scale(1)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}';class eW extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${eO}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${eO}
    `)}}var eZ={register:(e="l-spiral")=>{customElements.get(e)||customElements.define(e,class extends eW{})},element:eW},eJ=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}";class eK extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";static get observedAttributes(){return["size","color","stroke","stroke-length","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",stroke:5,"stroke-length":.25,speed:1.2,"bg-opacity":.1});let e=parseInt(this.size),t=parseInt(this.stroke),i=t/2,s=Math.max(e-t/2,0);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <rect 
          class="track"
          x="${i}" 
          y="${i}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${s}" 
          height="${s}"
        />
        <rect 
          class="car"
          x="${i}" 
          y="${i}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${s}" 
          height="${s}"
          pathlength="100"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${eJ}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("rect");if(!e)return;let s=parseInt(this.size),a=parseInt(this.stroke),r=String(a/2),o=String(Math.max(s-a/2,0));t.setAttribute("height",this.size),t.setAttribute("width",this.size),t.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),i.forEach(e=>{e.setAttribute("stroke-width",this.stroke),e.setAttribute("width",o),e.setAttribute("height",o),e.setAttribute("x",r),e.setAttribute("y",r)}),e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${eJ}
    `}}var eQ={register:(e="l-square")=>{customElements.get(e)||customElements.define(e,class extends eK{})},element:eK},eV=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}";class e0 extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M0.5,25C0.5,7.8,7.8,0.5,25,0.5S49.5,7.8,49.5,25S42.2,49.5,25,49.5S0.5,42.2,0.5,25"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:37,color:"black",stroke:5,"stroke-length":.15,speed:.9,"bg-opacity":.1});let e=d(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${e}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${e}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${eV}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("path");e&&(t.setAttribute("height",this.size),t.setAttribute("width",this.size),t.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),i.forEach(e=>{e.setAttribute("stroke-width",this.stroke),e.setAttribute("d",d(parseInt(this.size)/50,this.d))}),e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${eV}
    `)}}var e1={register:(e="l-squircle")=>{customElements.get(e)||customElements.define(e,class extends e0{})},element:e0},e5=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container,.electron{align-items:center;display:flex;justify-content:center}.electron{height:100%;left:0;position:absolute;top:0;width:100%}.electron:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:35%;transition:background-color .3s ease;width:35%}.electron:first-child{transform:rotate(45deg)}.electron:first-child:before{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)*-.143) infinite}.electron:nth-child(2){transform:rotate(-45deg)}.electron:nth-child(2):before{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes orbit{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}';class e2 extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.4}),this.template.innerHTML=`
      <div class="container">
        <div class="electron"></div>
        <div class="electron"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${e5}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${e5}
    `)}}var e3={register:(e="l-superballs")=>{customElements.get(e)||customElements.define(e,class extends e2{})},element:e2},e4=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--dot-size:calc(var(--uib-size)*0.17);align-items:center;animation:smoothRotate calc(var(--uib-speed)*1.8) linear infinite;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.dot{align-items:flex-start;animation:rotate var(--uib-speed) ease-in-out infinite;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";height:var(--dot-size);transition:background-color .3s ease;width:var(--dot-size)}.dot:nth-child(2),.dot:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.835*.5)}.dot:nth-child(3),.dot:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.668*.5)}.dot:nth-child(4),.dot:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.501*.5)}.dot:nth-child(5),.dot:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.334*.5)}.dot:nth-child(6),.dot:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.167*.5)}@keyframes rotate{0%{transform:rotate(0deg)}65%,to{transform:rotate(1turn)}}@keyframes smoothRotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}';class e6 extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${e4}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${e4}
    `)}}var e7={register:(e="l-tail-chase")=>{customElements.get(e)||customElements.define(e,class extends e6{})},element:e6},e8=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--mask-size:calc(var(--uib-size)/2 - var(--uib-stroke));align-items:center;animation:spin calc(var(--uib-speed)) linear infinite;background-image:conic-gradient(transparent 25%,var(--uib-color));border-radius:50%;display:flex;height:var(--uib-size);justify-content:flex-start;-webkit-mask:radial-gradient(circle var(--mask-size),transparent 99%,#000 100%);mask:radial-gradient(circle var(--mask-size),transparent 99%,#000 100%);position:relative;width:var(--uib-size)}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";class e9 extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9,stroke:5}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${e8}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${e8}
    `)}}var te={register:(e="l-tailspin")=>{customElements.get(e)||customElements.define(e,class extends e9{})},element:e9},tt=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.59);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-cube-size:calc(var(--uib-size)*0.2);--uib-arc-1:-90deg;--uib-arc-2:90deg;align-items:flex-end;display:flex;height:calc(100% - var(--uib-cube-size)/2);justify-content:center;padding-bottom:calc(var(--uib-cube-size)/2);width:100%}.cube{--cube-container-height:calc(var(--uib-size)*0.8);align-items:center;animation:metronome var(--uib-speed) linear infinite;display:flex;height:var(--cube-container-height);transform:rotate(var(var(--uib-arc-1)));transform-origin:center bottom}.cube,.cube:after{width:var(--uib-cube-size)}.cube:after{animation:morph var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:25%;content:"";display:block;height:var(--uib-cube-size);transform-origin:center left;transition:background-color .3s ease}@keyframes metronome{0%{transform:rotate(var(--uib-arc-1))}50%{transform:rotate(var(--uib-arc-2))}50.001%{transform:translateX(var(--cube-container-height)) rotate(var(--uib-arc-1))}to{transform:rotate(var(--uib-arc-1))}}@keyframes morph{15%{transform:scaleX(1.2) scaleY(.8)}30%,50%{transform:scaleX(1)}55%{transform:scaleX(.8) scaleY(1.2)}65%,80%{transform:scaleX(1)}90%,95%{transform:scaleX(.65) scaleY(1.3)}}';class ti extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:70,color:"black",speed:1.25}),this.template.innerHTML=`
    <div class="container"><div class="cube"></div></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${tt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${tt}
    `)}}var ts={register:(e="l-treadmill")=>{customElements.get(e)||customElements.define(e,class extends ti{})},element:ti},ta=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}";class tr extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M37.2,23.4c0,9.1-4.9,17-12.3,21.2c-3.6,2.1-7.8,3.3-12.3,3.3c-4.5,0-8.6-1.2-12.2-3.3c0-9.1,4.9-16.9,12.3-21.2c3.6-2.1,7.8-3.3,12.2-3.3S33.6,21.3,37.2,23.4c7.3,4.2,12.2,12.1,12.3,21.2c-3.6,2.1-7.8,3.3-12.2,3.3c-4.5,0-8.6-1.2-12.3-3.3c-7.3-4.2-12.2-12.1-12.2-21.2c0-9.1,4.9-17,12.2-21.2C32.3,6.4,37.2,14.3,37.2,23.4z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:4,"stroke-length":.15,speed:1.4,"bg-opacity":.1});let e=d(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${e}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${e}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${ta}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style"),t=this.shadow.querySelector("svg"),i=this.shadow.querySelectorAll("path");e&&(t.setAttribute("height",this.size),t.setAttribute("width",this.size),t.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),i.forEach(e=>{e.setAttribute("stroke-width",this.stroke),e.setAttribute("d",d(parseInt(this.size)/50,this.d))}),e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${ta}
    `)}}var to={register:(e="l-trefoil")=>{customElements.get(e)||customElements.define(e,class extends tr{})},element:tr},tn=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-dot-size:25%;animation:spin var(--uib-speed) infinite linear;display:inline-block;height:var(--uib-size);position:relative;width:var(--uib-size)}.dot{height:100%;left:calc(50% - var(--uib-dot-size)/2);width:var(--uib-dot-size)}.dot,.dot:after{position:absolute}.dot:after{background-color:var(--uib-color);border-radius:50%;content:"";height:0;left:0;padding-bottom:100%;top:0;transition:background-color .3s ease;width:100%}.dot:first-child{transform:rotate(120deg)}.dot:first-child:after{animation:wobble var(--uib-speed) infinite ease-in-out}.dot:nth-child(2){transform:rotate(-120deg)}.dot:nth-child(2):after,.dot:nth-child(3):after{animation:wobble var(--uib-speed) infinite ease-in-out}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes wobble{0%,to{transform:translateY(0)}50%{transform:translateY(65%)}}';class tl extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.3}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${tn}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${tn}
    `)}}var tc={register:(e="l-trio")=>{customElements.get(e)||customElements.define(e,class extends tl{})},element:tl},td=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.9);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:calc(var(--uib-size)*.9);justify-content:space-between;width:var(--uib-size)}.bar{background-color:var(--uib-color);height:100%;transition:background-color .3s ease;width:var(--uib-stroke)}.bar:first-child{animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.bar:nth-child(2){animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.bar:nth-child(3){animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.bar:nth-child(4){animation:grow var(--uib-speed) ease-in-out infinite}@keyframes grow{0%,to{transform:scaleY(.3)}50%{transform:scaleY(1)}}";class th extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:1,stroke:3.5}),this.template.innerHTML=`
      <div class="container">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${td}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${td}
    `)}}var tu={register:(e="l-waveform")=>{customElements.get(e)||customElements.define(e,class extends th{})},element:th},tb=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.25);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:flex-start;position:relative;width:100%}.container:before{animation:wobble var(--uib-speed) calc(var(--uib-speed)*-.1) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:calc(var(--uib-size)*.25);transform:translateY(calc(var(--uib-size)*-.4));transition:background-color .3s ease;width:25%}@keyframes wobble{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.75))}}';class tp extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:.9}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${tb}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${tb}
    `)}}var tf={register:(e="l-wobble")=>{customElements.get(e)||customElements.define(e,class extends tp{})},element:tp},tv=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-stroke);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;border-radius:calc(var(--uib-stroke)/2);display:flex;height:var(--uib-stroke);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.container:before{left:0;opacity:var(--uib-bg-opacity);position:absolute;top:0}.container:after,.container:before{background-color:var(--uib-color);content:"";height:100%;transition:background-color .3s ease;width:100%}.container:after{animation:zoom var(--uib-speed) ease-in-out infinite;border-radius:calc(var(--uib-stroke)/2);transform:translateX(-100%)}@keyframes zoom{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}';class tm extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";static get observedAttributes(){return["size","color","speed","stroke","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:80,color:"black",speed:1.4,stroke:5,"bg-opacity":.1}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${tv}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${tv}
    `)}}var tg={register:(e="l-zoomies")=>{customElements.get(e)||customElements.define(e,class extends tm{})},element:tm}}}]);