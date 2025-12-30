import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-black-100/80 backdrop-blur-md shadow-neon" : "bg-transparent"
                } transition-all duration-300`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='hero'
                    smooth={true}
                    duration={500}
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <span className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Darshita Patel &nbsp;
                        <span className='sm:block hidden text-secondary'> | Software Developer</span>
                    </span>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(nav.title)}
                        >
                            <Link to={nav.id} smooth={true} duration={500} spy={true} activeClass="active" onSetActive={() => setActive(nav.title)}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
                        {toggle ? <X className="text-white" /> : <Menu className="text-white" />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <Link to={nav.id} smooth={true} duration={500}>
                                        {nav.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
