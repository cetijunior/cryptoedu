import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion';
import { Rocket, TwitterLogo, GithubLogo, LinkedinLogo, CurrencyBtc } from '@phosphor-icons/react';

const HeroSection = () => {
    const canvasRef = useRef(null);
    const objectsRef = useRef([]);
    let spawnIndex = 0;
    let coinModel = null;
    let bitcoinModel = null;

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 30);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xf2a900, 40, 100);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;

        // Load GLTF Models Once
        const loader = new GLTFLoader();
        loader.load('/models/coin.glb', (gltf) => {
            coinModel = gltf.scene;
        });

        loader.load('/models/bitcoin.glb', (gltf) => {
            bitcoinModel = gltf.scene;
            bitcoinModel.scale.set(1.5, 1.5, 1.5);
            bitcoinModel.position.set(0, 0, 0);
            scene.add(bitcoinModel);
        });

        // Create Coins Around Bitcoin
        const createCoinsAroundBitcoin = () => {
            if (!coinModel) return;
            const numCoins = 12;
            const radius = 3;

            for (let i = 0; i < numCoins; i++) {
                const angle = (i / numCoins) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const newCoin = coinModel.clone();
                newCoin.scale.set(0.5, 0.5, 0.5);
                newCoin.position.set(x, y, 0);
                scene.add(newCoin);
                objectsRef.current.push(newCoin);
            }
        };

        setTimeout(createCoinsAroundBitcoin, 1000);

        // Global Animation Loop
        const animateScene = () => {
            requestAnimationFrame(animateScene);
            objectsRef.current.forEach(obj => obj.rotation.y += 0.005);
            if (bitcoinModel) bitcoinModel.rotation.y += 0.005;
            renderer.render(scene, camera);
        };
        animateScene();

        // Handle model double-click event to create falling coins
        const onDoubleClick = () => {
            if (!coinModel) return;
            const spawnX = (Math.random() - 0.5) * 4;
            const spawnY = 3;

            const newCoin = coinModel.clone();
            newCoin.scale.set(0.5, 0.5, 0.5);
            newCoin.position.set(spawnX, spawnY, 0);
            scene.add(newCoin);
            objectsRef.current.push(newCoin);

            const fallAnimation = () => {
                if (newCoin.position.y > -1.5) {
                    newCoin.position.y -= 0.02;
                    requestAnimationFrame(fallAnimation);
                }
            };
            fallAnimation();
        };

        window.addEventListener('dblclick', onDoubleClick);

        // Camera Position
        camera.position.z = 10;
        camera.position.y = 2;

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('dblclick', onDoubleClick);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden flex flex-col items-center justify-center">
            {/* 3D Model Canvas */}
            <canvas ref={canvasRef} className="absolute scale-90 -top-8 left-0 lg:rounded-full rounded-full border shadow-2xl shadow-yellow-400 border-yellow-400/25 w-full h-full z-0 " />

            {/* Text Content Below the Bitcoin Model */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 select-none text-center p-20 space-y-6 lg:-mt-44 -mt-60"
            >
                <h1 className="text-6xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
                    Welcome to {" "} <span className="text-white">CryptoEdu</span>
                </h1>
                <CurrencyBtc size={100} className="text-yellow-400 align-middle w-full animate-pulse" />
                <p className="text-lg text-gray-300 max-w-lg mx-auto">
                    Revolutionizing the future of decentralized finance with Bitcoin and blockchain technology.
                </p>
                <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center mx-auto">
                    <Rocket size={24} className="mr-2" />
                    Get Started
                </button>
            </motion.div>

            {/* Social Icons Section */}
            <div className="absolute bottom-40 flex space-x-6 text-yellow-400">
                <a href="#" className="hover:text-yellow-600"><TwitterLogo size={32} /></a>
                <a href="#" className="hover:text-yellow-600"><GithubLogo size={32} /></a>
                <a href="#" className="hover:text-yellow-600"><LinkedinLogo size={32} /></a>
            </div>
        </div>
    );
};

export default HeroSection;