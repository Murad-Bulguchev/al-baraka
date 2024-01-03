
import css from './Spline.module.scss'

export default function SplineApp() {
    return (
        <div className={css.spline}>
            <div className={css.container}>
                <div className={css.splienLeft}>
                    <h1 style={{fontSize: '35px'}} className='primaryText'>Кому подходит <br/> наша рассрочка?</h1>
                    <ul>
                        <li>Вы живете на территории Республики Ингушетия</li>
                        <li>Вы достигли возраста в 21 год</li>
                        <li>Вы имеете постоянный доход: официальный, неофициальный, пособие или пенсия</li>
                    </ul>

                </div>
                <div className={css.splineRight}>
                    <img width={1024} src="../../../public/mac.png" alt=""/>
                </div>
            </div>
        </div>
    );
}
