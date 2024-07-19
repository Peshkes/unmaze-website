import React from 'react';
import style from './howDetect.module.css'
import {Link} from "react-router-dom";

const HowDetect = () => {
    return (
        <div id={'dyslexia'} className={`${style.block} wrapper`}>
            <h2>Как выявить дислексию у ребенка?</h2>
            <div className={style.child}>
                <div className={style.container}>
                    <h3>Общие признаки</h3>
                    <ul>
                        <li>хорошо выражает свои мысли, но читает и пишет с ошибками</li>
                        <li>его считают ленивым и невнимательным</li>
                        <li>талантлив в искусстве, музыке, спорте</li>
                        <li>лучше всего усваивает информацию через практический опыт и наблюдение</li>
                        <li>сложно улавливает смысл прочитанного</li>
                        <li>на письме и при чтении заметны повторы, добавления, перестановки, пропуски, замены букв и
                            слов
                        </li>
                        <li>говорит с запинками</li>
                        <li>не заканчивает предложения</li>
                        <li>неразборчивый и изменчивый почерк</li>
                    </ul>
                </div>
                <div className={style.imageBlock}>
                    <img src={require('../../../assets/alphabet.webp')} alt="Alphabet"/>
                </div>
            </div>
            <div className={"button"}>
                <Link to="/test">Пройти тест<span className="arrow">→</span></Link>
            </div>
        </div>
    );
};

export default HowDetect;
