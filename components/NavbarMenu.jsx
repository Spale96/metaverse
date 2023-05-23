'use client'

import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

import { motion } from "framer-motion";

import { navVariantsMenu } from '../utils/motion'

export default function NavbarMenu() {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <motion.div>
            <img src="/menu.svg" alt="menu-img"
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
                <motion.div
                    variants={navVariantsMenu}
                    initial='hidden'
                    whileInView='show'
                    className='w-[100%] fixed top-0 left-0 h-[100vh] text-white bg-slate-500 text-center z-20'>

                    <AiOutlineClose className="cursor-pointer ml-[15%] mt-11" fontSize={27} onClick={() => setToggleMenu(false)} />

                    <ul className='text-2xl mt-20 flex flex-col gap-8'>
                        <li><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href='#explore' onClick={() => setToggleMenu(false)}>Explore</a></li>
                        <li><a href='#feedback' onClick={() => setToggleMenu(false)}>Feedback</a></li>
                        <li><a href='#getstarted' onClick={() => setToggleMenu(false)}>GetStarted</a></li>
                        <li><a href='#hero' onClick={() => setToggleMenu(false)}>Hero</a></li>
                        <li><a href='#insights' onClick={() => setToggleMenu(false)}>Insights</a></li>
                        <li><a href='#whatsnew' onClick={() => setToggleMenu(false)}>WhatsNew</a></li>
                        <li><a href='#world' onClick={() => setToggleMenu(false)}>World</a></li>
                    </ul>
                </motion.div>
            )}
        </motion.div>
    )
}
