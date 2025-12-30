import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <div
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-violet-500/50 transition-all duration-300 shadow-card hover:shadow-neon'
            >
                <div className='relative w-full h-[230px] bg-[#1a1a1a] rounded-2xl flex items-center justify-center overflow-hidden group'>
                    {/* Placeholder for project image since we don't have files */}
                    <div className="text-white/20 font-bold text-xl uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                        {name}
                    </div>

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
                        >
                            <Github className='w-1/2 h-1/2 object-contain text-white' />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>My work</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    concrete examples. Each project is briefly described with
                    links to code repositories.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");
