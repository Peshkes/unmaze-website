import React from 'react';
import style from './guide.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Guide = () => {
    const { t } = useTranslation();
    return (
        <div className={`${style.block} wrapper`}>
            <img className={style.mess} src={require('../../../assets/mess2.webp')}/>
            <h2>{t('guide.1')}<br/><br/>
                {t('guide.2')} <Link to="/test">{t('guide.3')}</Link>{t('guide.3')}</h2>
            <div className={"button"}>
                <Link to="/test">{t('guide.button')}<span className="arrow">→</span></Link>
            </div>
        </div>
    );
};

export default Guide;
