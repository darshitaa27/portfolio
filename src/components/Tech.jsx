import React, { useMemo } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const TechOrb = ({ color, name, position }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
            <mesh>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color={color} /* wireframe */ flatShading />
            </mesh>
            {/* Text label logic in R3F is tricky with HTML, simplified here to visual orbs or just tooltips outside canvas */}
        </Float>
    )
}

const Tech = () => {
    // Generate random positions or constellation for the orbs
    // Ideally we want a nice grid or circle

    return (
        <div className='flex flex-row flex-wrap justify-center gap-10 items-center'>
            <motion.div variants={textVariant()} className="w-full text-center mb-10">
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>My Tools</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Skills.</h2>
            </motion.div>

            <div className="w-full h-[400px] relative hidden md:block">
                {/* 3D Constellation Scene */}
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    <group>
                        {technologies.map((tech, i) => {
                            const angle = (i / technologies.length) * Math.PI * 2;
                            const radius = 4;
                            const x = Math.cos(angle) * radius;
                            const z = Math.sin(angle) * radius;
                            return <TechOrb key={tech.name} color={tech.color} name={tech.name} position={[x, 0, z]} />
                        })}
                    </group>
                </Canvas>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-white/20 font-bold text-4xl">3D SKILLS</p>
                </div>
            </div>

            {/* Fallback / Mobile View: Standard Chips */}
            <div className="flex flex-wrap justify-center gap-4 md:mt-0">
                {technologies.map((tech) => (
                    <div key={tech.name} className="w-28 h-28 bg-tertiary rounded-full flex flex-col items-center justify-center border-2 border-transparent hover:border-violet-500 transition-all cursor-pointer group">
                        <tech.icon size={32} color={tech.color} />
                        <p className="text-white mt-2 text-sm font-medium group-hover:text-violet-400">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "skills");
