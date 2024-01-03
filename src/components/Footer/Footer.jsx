import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Контакты <br />
            Телефон для связи: <br/>
           <a>8 (938) 007-37-77</a>
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <a>Политика конфиденциальности</a>
          </div>
          <ul className={css.menu}>
            <li>ООО "Атлант"</li>
            <li>ИНН 0608053408</li>
            <li>КПП 060801001</li>
            <li>© 2015-2023 Copyright «Al-Baraka».</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
