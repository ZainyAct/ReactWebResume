// src/components/VantaBackground.tsx
"use client"
import Script from 'next/script'
import React, { useEffect, useRef } from 'react';
const VantaBackground: React.FC = () => {
  
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    if (vantaRef.current) {
      // @ts-ignore
      
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  });

  useEffect(() => {
    const e2 = document.createElement('script')
    e2.src = 'three.min.js'

    document.body.appendChild(e2)

    setTimeout(() => {
      const e1 = document.createElement('script')
      e1.src = 'vanta.waves.min.js'

      document.body.appendChild(e1)
    }, 500)

    const element = document.createElement('script')
    element.id = "test"
    element.innerHTML = `
    function run(){
      
      try{
      VANTA.WAVES({
        el: '#vanta',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        shininess: 56.00,
        waveHeight: 30.00,
        waveSpeed: 0.55,
        zoom: 0.77
        });
      }
      catch(e){
        setTimeout(run, 1)
      }
    }
    run()
    `
    document.body.appendChild(element)
  })

return (
  <div ref={vantaRef} id="vanta" style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
  </div>
)
};

export default VantaBackground;
