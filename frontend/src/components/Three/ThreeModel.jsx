import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const ThreeModel = ({ modelPath }) => {
    const mountRef = useRef(null);
    const isMouseOver = useRef(false);

    useEffect(() => {
        if (!modelPath || !mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.0/');
        loader.setDRACOLoader(dracoLoader);

        let model;
        loader.load(modelPath, (gltf) => {
            model = gltf.scene;
            model.scale.set(1,1,1);
            scene.add(model);
        }, undefined, (error) => {
            console.error('An error happened', error);
        });

        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);

            if (!isMouseOver.current) {
                if (model) {
                    model.rotation.x += 0.01;
                    model.rotation.y += 0.01;
                    model.rotation.z += 0.01;
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        const handleMouseMove = (event) => {
            if (model) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
                model.rotation.x = mouseY * Math.PI;
                model.rotation.y = mouseX * Math.PI;
            }
        };

        const handleMouseEnter = () => {
            isMouseOver.current = true;
        };

        const handleMouseLeave = () => {
            isMouseOver.current = false;
        };

        const mountNode = mountRef.current;
        mountNode.addEventListener('mousemove', handleMouseMove);
        mountNode.addEventListener('mouseenter', handleMouseEnter);
        mountNode.addEventListener('mouseleave', handleMouseLeave);

        const handleResize = () => {
            const { clientWidth, clientHeight } = mountRef.current;
            renderer.setSize(clientWidth, clientHeight);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountNode.removeEventListener('mousemove', handleMouseMove);
            mountNode.removeEventListener('mouseenter', handleMouseEnter);
            mountNode.removeEventListener('mouseleave', handleMouseLeave);
            mountNode.removeChild(renderer.domElement);
        };
    }, [modelPath]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeModel;
