import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Main.module.scss";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="title-text" variants={fadeIn("right", "tween", 0.2, 1)}>
            Рассрочка без банка на <br /> товары по нормам Ислама <br />{" "}
            <span style={{color: '#2b8d58'}}> с одобрением за 15 минут</span>
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
           Мы работаем ежедневно с 9:00 до 21:00
            <br />
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img width={230} variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

            <motion.button variants={fadeIn("up", "tween", 0.4, 1)} className={css.mainCallBtn}>Получить список партнеров</motion.button>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">8</div>
            <div className="secondaryText">
              <div>ЛЕТ НАМ ДОВЕРЯЮТ БОЛЕЕ <br/> 40 000 ДОВОЛЬНЫХ КЛИЕНТОВ</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Main;
