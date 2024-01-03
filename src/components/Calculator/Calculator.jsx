import React, { useState } from "react";
import css from "./Calculator.module.scss";

const Calculator = () => {
    const [count, setCount] = useState(8000);
    const [multi, setMulti] = useState(2);
    const [result, setResult] = useState(0);

    const counterAddition = (e) => {
        setCount(e.target.value * 1000);
    };

    const multiPayment = (e) => {
        setMulti(e.target.value);
    };

    const resultCalc = () => {
        setResult(monthPayment() + firstPayment() + markUp());
    };

    const monthPayment = () => {
        return Math.floor((count / 100) * 9);
    };

    const firstPayment = () => {
        return Math.floor((count / 100) * 30);
    };


    const markUp = () => {
        const mp = monthPayment();
        const fp = firstPayment();
        return Math.floor(mp + fp);
    };

    const [checked, setChecked] = useState(false);

    const handleChecked = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <>
            <div className={css.calculatorBody}>
                <form onChange={resultCalc}>
                    <div className={css.swithcer}>
                        <p style={{color: checked ? "" : "#16a34a"}}>Идеал</p>
                        <label className={css.switch} onClick={handleChecked}>
                            <input type="checkbox"/>
                            <span className={`${css.slider} round`}></span>
                        </label>
                        <p style={{color: !checked ? "" : "#16a34a"}}>Стандарт</p>
                    </div>
                    <label>Стоимость товара: {count}</label>
                    <input type="range" min={8} max={200} onChange={counterAddition}/>
                    <br/>
                    <label>Срок рассрочки: {multi}</label>
                    <input type="range" min={2} max={12} onChange={multiPayment}/>
                </form>
                <div className={css.calculatorResult}>
                    <div>
                        Общая стоимость
                        <p>{result}</p>
                    </div>
                    <p>Ежемесячный платеж</p>
                    <p>{monthPayment()}</p>
                    <p>Первый платеж</p>
                    <p>{firstPayment()}</p>
                    <p>Торговая наценка</p>
                    <p>{markUp()}</p>
                </div>
            </div>
        </>
    );
};

export default Calculator;
