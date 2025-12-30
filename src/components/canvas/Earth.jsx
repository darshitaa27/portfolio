import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

const Earth = () => {
    // Using a simple geometric shape instead of heavy GLTF if fetching fails, 
    // but let's try to simulate a cool abstract mesh since I can't download specific GLTFs easily.
    // Actually, I'll build a custom abstract geometry here.

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh>
                <icosahedronGeometry args={[2.5, 2]} />
                <meshStandardMaterial
                    color="#2962FF"
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </mesh>
            <mesh>
                <icosahedronGeometry args={[2.2, 1]} />
                <meshStandardMaterial
                    color="#448AFF"
                    wireframe={true}
                    transparent
                    opacity={0.5}
                />
            </mesh>
            <pointLight intensity={2} position={[2, 2, 2]} />
            <ambientLight intensity={0.5} />
        </Float>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
