import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`} id="hero">
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
                        Hi, I'm <span className='text-[#915EFF]'>Darshita</span>
                    </h1>
                    <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
                        Software Developer | UI/UX & Product Design <br className='sm:block hidden' />
                        Seeking Co-op (Summer 2026) in Kitchener–Waterloo
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#work" className="bg-[#915EFF] text-white py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary hover:bg-[#804dee] transition-all">
                            View Projects
                        </a>
                        <a href="#contact" className="bg-transparent border border-white py-3 px-8 rounded-xl outline-none w-fit font-bold hover:bg-white hover:text-black transition-all">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-[50%] h-full z-10 opacity-80 pointer-events-none md:pointer-events-auto">
                {/* 3D Scene positioned right on large screens */}
                <EarthCanvas />
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
