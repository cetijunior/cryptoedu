import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WavingChainBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 15;
        camera.position.y = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xfbbf24, 1);
        pointLight.position.set(10, 10, 15);
        scene.add(pointLight);

        // Create Chains in a Hexagonal Pattern
        const chainGroup = new THREE.Group();
        const chainLinks = [];
        const linkGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1, 16); // Thinner chains
        const linkMaterial = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.8, roughness: 0.3 });

        const rows = 7; // Number of rows in the hexagonal grid
        const cols = 7; // Number of columns in the hexagonal grid
        const spacing = 1.2; // Spacing between chains

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // Offset every other row to create a hexagonal pattern
                const xOffset = (i % 2 === 0) ? 0 : spacing * 0.5;
                const x = (j - (cols / 2)) * spacing + xOffset;
                const y = (i - (rows / 2)) * spacing * 0.8;

                const chain = new THREE.Mesh(linkGeometry, linkMaterial);
                chain.position.set(x, y, 0);
                chain.rotation.z = Math.PI / 2; // Rotate chains to be horizontal
                chainGroup.add(chain);
                chainLinks.push({ mesh: chain, row: i, col: j });
            }
        }
        scene.add(chainGroup);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.001; // Slower animation

            chainLinks.forEach(({ mesh, row, col }) => {
                // Create a subtle wave effect
                mesh.position.y = Math.sin(time + row * 0.5 + col * 0.3) * 0.2;
            });

            renderer.render(scene, camera);
        };
        animate();

        // Resize Handling
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div className='w-screen h-screen' ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};


export default WavingChainBackground;