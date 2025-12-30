import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
    // Using a primitive shape if no GLTF available
    // To avoid errors without GLTF loader, we'll return a simple mesh
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={{}} // Mock
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    // Fallback/Mock component since we don't have the 3D model file
    return (
        <div />
    );
};

export default ComputersCanvas;
