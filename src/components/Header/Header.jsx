import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import logo from '../../assets/img/logo.svg'

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(true);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Al-Baraka</div>
        {menuOpened && (
            <ul
                className={`flexCenter ${css.menu}`}
                ref={menuRef}
            >
              <li><a href="#experties">Services</a></li>
              <li><a href="#work">Experience</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#people">Testimonials</a></li>
              <li className={`flexCenter ${css.phone}`}>
                <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a>
                <BiPhoneCall size={"40px"}/>
              </li>
            </ul>
        )}

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight style={{cursor: 'pointer'}} size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
