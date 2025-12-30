import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";

import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate sending
        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Get in touch</p>
                <h3 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Contact.</h3>

                <p className="text-secondary mt-4 mb-8">
                    Open to Software Development Co-op opportunities for Summer 2026. <br />
                    Email: dpatel6206@conectogac.on.ca <br />
                    Location: Kitchener–Waterloo, Ontario
                </p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-violet-500'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-violet-500'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What do you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-violet-500 resize-none'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border border-white/10 hover:bg-violet-900/40 transition-colors'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>

                <div className="mt-12 flex gap-6">
                    <a href="https://github.com/darshitaa27" target="_blank" className="hover:text-violet-400 transition-colors"><Github /></a>
                    <a href="https://www.linkedin.com/in/darshita-patel-7b11b134a/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin /></a>
                    <a href="mailto:dpatel6206@conectogac.on.ca" className="hover:text-red-400 transition-colors"><Mail /></a>
                    <a href="https://www.instagram.com/dp.createlab/" className="hover:text-pink-400 transition-colors"><Instagram /></a>
                    <a href="https://twitter.com/Darshitaptl27" className="hover:text-blue-400 transition-colors"><Twitter /></a>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                {/* 3D Earth or Contact Visual */}
                {/* Reusing EarthCanvas or adding another visual */}
                <div className="w-full h-full bg-[#100d25] rounded-2xl flex items-center justify-center border border-white/5">
                    <span className="text-white/10 text-4xl font-black uppercase rotate-[-45deg]">Get In Touch</span>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
