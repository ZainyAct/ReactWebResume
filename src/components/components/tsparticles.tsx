// ParticlesContainer.tsx
import React, { useCallback } from "react";
import { loadFull } from "tsparticles";

// Component to initialize and configure particles
export const ParticlesContainer = (props: {id: any, init: any}) => {
    const customInit = useCallback(async (engine: any) => {
    // Load all particles bundles
    await loadFull(engine);
    
    // Define the "lightdark" preset with specific particle configurations
    await engine.addPreset('lightdark', {
        fullScreen: {
        enable: false,
        },
        particles: {
        links: {
            enable: true,
        },
        move: {
            enable: true,
        },
        number: {
            value: 50,
        },
        opacity: {
            value: { min: 0.3, max: 1 },
        },
        shape: {
            type: ['circle', 'square', 'triangle', 'polygon'],
            options: {
            polygon: [
                { sides: 5 },
                { sides: 6 },
                { sides: 8 },
            ],
            },
        },
        size: {
            value: { min: 1, max: 3 },
        },
        },
    });
    
    // Load particles with different color options
    await engine.load({
        id: 'light',
        options: {
        preset: 'lightdark',
        particles: {
            color: { value: '#191970' },
            links: { color: '#191970' },
        },
        },
    });
    
    await engine.load({
        id: 'dark',
        options: {
        preset: 'lightdark',
        particles: {
            color: { value: '#E0FFFF' },
            links: { color: '#E0FFFF' },
        },
        },
    });
    }, []);
    }