import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
    const IconComponent = icon;
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <IconComponent size={64} className="text-white" />
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Introduction</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>About Me.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                <div>
                    <p className="mb-4">
                        I am Darshita Patel, a motivated **Computer Science student** at **Conestoga College** based in **Kitchener–Waterloo, Ontario**.
                        Currently pursuing a Bachelor of Computer Science, I combine strong technical foundations in **C, C++, C#** and modern web development
                        with a passion for **UI/UX and product design**.
                    </p>
                    <p className="mb-4">
                        My approach to software development goes beyond clean code—I strive to build intuitive, user-centric solutions that look as good as they perform.
                        Through academic coursework and collaborative group projects, I have honed my skills in **Object-Oriented Programming, Data Structures, Git worklows**, and **Agile methodologies**.
                    </p>
                    <p className="mb-4">
                        I enjoy solving complex problems, whether it's optimizing a backend algorithm or refining a frontend interaction.
                        I am actively seeking a **Software Development Co-op opportunity for Summer 2026**, eager to bring my unique blend of engineering logic and creative design thinking to a professional team.
                    </p>
                </div>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <div key={service.title} className="w-full sm:w-[250px]">
                        <ServiceCard index={index} {...service} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
