import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { designWorks } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const DesignCard = ({ index, title, type, tools, description, image, onClick }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            onClick={onClick}
            className="cursor-pointer group"
        >
            <div className="relative w-full h-[400px] bg-tertiary rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/50 transition-all duration-500">
                {/* Visual Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700">
                    <span className="text-4xl text-white/10 font-black uppercase">{title.split(' ')[0]}</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-violet-400 text-sm uppercase tracking-wider mb-1">{type}</p>
                    <h3 className="text-white font-bold text-2xl mb-2">{title}</h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
                    <p className="text-xs text-white/40">{tools}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Modal = ({ selectedWork, onClose }) => {
    if (!selectedWork) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#151030] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors"
                    >
                        <X className="text-white" />
                    </button>

                    <div className="grid md:grid-cols-2">
                        <div className="h-[300px] md:h-[500px] bg-[#0a0a0a] flex items-center justify-center">
                            <span className="text-6xl text-white/10 font-black uppercase text-center p-4">
                                {selectedWork.title} <br /> Preview
                            </span>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <span className="text-violet-400 text-sm uppercase tracking-wider mb-2">{selectedWork.type}</span>
                            <h2 className="text-white font-bold text-4xl mb-6">{selectedWork.title}</h2>
                            <p className="text-secondary text-lg leading-relaxed mb-8">{selectedWork.description}</p>

                            <div>
                                <h4 className="text-white font-bold mb-2">Tools Used</h4>
                                <p className="text-secondary">{selectedWork.tools}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

const Design = () => {
    const [selectedWork, setSelectedWork] = useState(null);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Visuals & UI</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Design & Visual Work.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Showcasing my capability in visual communication, branding, and layout design.
                    These projects complement my technical skills by ensuring the software I build offers
                    exceptional user experiences.
                </motion.p>
            </div>

            <div className='mt-20 grid md:grid-cols-3 gap-7'>
                {designWorks.map((work, index) => (
                    <DesignCard
                        key={`design-${index}`}
                        index={index}
                        {...work}
                        onClick={() => setSelectedWork(work)}
                    />
                ))}
            </div>

            {selectedWork && <Modal selectedWork={selectedWork} onClose={() => setSelectedWork(null)} />}
        </>
    );
};

export default SectionWrapper(Design, "design");
