'use client';

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { navVariantsMenu } from '../utils/motion';

const NavbarMenu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <motion.div>

            <img src="/menu.svg" alt="menu-img" className="w-[24px] h-[24px] object-contain cursor-pointer" onClick={() => setToggleMenu(true)} />

            {toggleMenu && (
                <motion.div variants={navVariantsMenu} initial="hidden" whileInView="show" className="w-[100%] fixed top-0 left-0 h-[100vh] text-white bg-gradient-to-r from-indigo-500 to-violet-500 text-center z-20">

                    <div className="mt-11 mb-8 w-[320px] mx-auto 2xl:mt-16 2xl:mb-14">
                        <AiOutlineClose className="cursor-pointer" fontSize={30} onClick={() => setToggleMenu(false)} />
                    </div>

                    <ul className="text-2xl flex flex-col gap-6 2xl:gap-7">
                        <li><a className="hover:underline" href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a className="hover:underline" href="#explore" onClick={() => setToggleMenu(false)}>Explore</a></li>
                        <li><a className="hover:underline" href="#feedback" onClick={() => setToggleMenu(false)}>Feedback</a></li>
                        <li><a className="hover:underline" href="#getstarted" onClick={() => setToggleMenu(false)}>GetStarted</a></li>
                        <li><a className="hover:underline" href="#hero" onClick={() => setToggleMenu(false)}>Hero</a></li>
                        <li><a className="hover:underline" href="#insights" onClick={() => setToggleMenu(false)}>Insights</a></li>
                        <li><a className="hover:underline" href="#whatsnew" onClick={() => setToggleMenu(false)}>WhatsNew</a></li>
                        <li><a className="hover:underline" href="#world" onClick={() => setToggleMenu(false)}>World</a></li>
                    </ul>
                </motion.div>
            )}
        </motion.div>
    );
};

export default NavbarMenu;