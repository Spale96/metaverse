'use client';

import { motion } from "framer-motion";

import styles from '../styles';

import { navVariants } from '../utils/motion';

import NavbarMenu from "./NavbarMenu";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 mt-[2.5rem] relative`}>

    <div className="absolute w-[50%] inset-0 gradient-01"></div>

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative`}>

      <img src="/search.svg" alt="search-image" className="w-[24px] h-[24px] object-contain" />

      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <div>
        <NavbarMenu />
      </div>
    </div>
  </motion.nav >
);

export default Navbar;
