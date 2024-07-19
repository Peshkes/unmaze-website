import React from 'react';
import style from './howDetect.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HowDetect = () => {
    const { t } = useTranslation();
    return (
        <div id={'dyslexia'} className={`${style.block} wrapper`}>
            <h2>{t('howDetect.title')}</h2>
            <div className={style.child}>
                <div className={style.container}>
                    <h3>{t('howDetect.subtitle')}</h3>
                    <ul>
                        {[...Array(9)].map((_, index) => {
                            return (
                                <li key={index}>{t(`howDetect.list.${index}`)}</li>
                            );
                        })}
                    </ul>
                </div>
                <div className={style.imageBlock}>
                    <img src={require('../../../assets/alphabet.webp')} alt="Alphabet"/>
                </div>
            </div>
            <div className={"button"}>
                <Link to="/test">{t('howDetect.button')}<span className="arrow">→</span></Link>
            </div>
        </div>
    );
};

export default HowDetect;
