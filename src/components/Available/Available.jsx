import React from "react";
import { motion } from "framer-motion";
import css from "./Available.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import time  from '../../assets/img/time.svg'
const Portfolio = () => {

    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

            <a className="anchor" id="portfolio"></a>

            <div className={`innerWidth flexCenter ${css.container}`}>


                <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
                    <div style={{textAlign: 'center'}}>
                        <span style={{fontSize: '35px'}} className="primaryText">Товары, доступные для покупки в рассрочку</span>
                    </div>
                </motion.div>


                <div className={`flexGrid ${css.showCase}`}>
                    <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./7.png" alt="project"/>
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./8.png" alt="project"/>
                    <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./9.png" alt="project"/>
                    <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./10.png" alt="project"/>
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./11.png" alt="project"/>
                    <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./12.png" alt="project"/>
                </div>
                <div className={css.availableFast}>
                    <img src={time} alt="time"/>
                    <div className={css.availableFastText}>Примерное время рассмотрения заявки на рассрочку для новых клиентов
                      <span style={{fontWeight: 'bold'}}> - 45 минут</span>
                    </div>
                    <h1>Узнайте, как мы работаем</h1>
                    <div className={css.howContent}>
                        <div className={css.howLeft}>
                            <div className={css.howItem}>
                                <span>Наша деятельность основана на <br/> исламском контракте Мурабаха</span>
                            </div>
                            <div className={css.howItem}>
                                <span>Штрафы, пени, сборы, страховки <br/> и скрытые платежи - отсутствуют</span>
                            </div>
                        </div>
                    </div>

                    <div className={css.howContent}>
                        <div className={css.howItem}>
                            <span>Мы выкупаем необходимый Вам товар <br/> в магазине-партнере и перепродаем в <br/> рассрочку с фиксированной наценкой</span>
                        </div>
                        <div className={css.howItem}>
                            <span>На всех тарифах действует <br/> фиксированный размер наценки <br/> на весь период рассрочки</span>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;
