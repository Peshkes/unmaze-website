import React from 'react';
import style from './guide.module.css'

const Header = () => {
    return (
        <div className={`${style.block} wrapper`}>
            <img className={style.mess} src={require('../../../assets/mess2.webp')}/>
            <h2>если вы прошли тест и получили положительный результат, то в голове у вас наверняка много вопросов,
                главный из которых — что делать дальше<br/><br/>
                мы сделали <a href="*">гайд для родителей</a>, который ответит на все вопросы</h2>
            <div className={"button"}>
                <a href="#">Читать гайд<span className="arrow">→</span></a>
            </div>
        </div>
    );
};

export default Header;
