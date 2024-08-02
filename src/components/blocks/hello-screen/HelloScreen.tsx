import React from 'react';
import style from './helloScreen.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HelloScreen = () => {
    const { t } = useTranslation();
    return (
        <div className={style.block}>
            <h1 className={'wrapper'}>{t('helloScreen.title1')}<span className={'unmaze'}>un</span>maze{t('helloScreen.title2')}</h1>
            <div className={style.imageBlock}>
                <img src={require('../../../assets/iphone.webp')} alt="App Screen"/>
                <img className={style.mess} src={require('../../../assets/mess1.webp')} alt="App Screen"/>
            </div>
            <div className={"button"}>
                <Link to="/test">{t('helloScreen.button')}<span className="arrow">→</span></Link>
            </div>
        </div>
    );
};

export default HelloScreen;
