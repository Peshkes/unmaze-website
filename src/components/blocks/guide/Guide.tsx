import React from 'react';
import style from './guide.module.css'
import {Link} from "react-router-dom";

const Guide = () => {
    return (
        <div className={`${style.block} wrapper`}>
            <img className={style.mess} src={require('../../../assets/mess2.webp')}/>
            <h2>если вы прошли тест и получили положительный результат, то в голове у вас наверняка много вопросов,
                главный из которых — что делать дальше<br/><br/>
                мы сделали <Link to="/test">гайд для родителей</Link>, который ответит на все вопросы</h2>
            <div className={"button"}>
                <Link to="/test">Читать гайд<span className="arrow">→</span></Link>
            </div>
        </div>
    );
};

export default Guide;
